/**
 * fire-followups — Outbound follow-up call trigger endpoint
 * Called by OpenClaw cron hourly.
 * Checks Redis for due follow-ups and initiates Vapi outbound calls.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  getDueFollowups,
  markFollowupComplete,
  getCallerData,
  type FollowupData,
} from "@/lib/call-tracker";
import { OUTBOUND_SQUAD_ID, PHONE_NUMBER_ID } from "@/lib/agent-config";

export const maxDuration = 30;

const VAPI_API_KEY = process.env.VAPI_API_KEY ?? "";
const FIRE_FOLLOWUPS_SECRET = process.env.FIRE_FOLLOWUPS_SECRET ?? "";

export async function GET(req: NextRequest) {
  // Auth check
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (!secret || secret !== FIRE_FOLLOWUPS_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!VAPI_API_KEY) {
    return NextResponse.json({ error: "VAPI_API_KEY not configured" }, { status: 500 });
  }

  // Get all due follow-ups
  const due = await getDueFollowups();

  if (due.length === 0) {
    return NextResponse.json({ fired: 0, message: "No follow-ups due" });
  }

  const results: { phone: string; name: string; status: string; error?: string }[] = [];

  for (const followup of due) {
    try {
      await fireOutboundCall(followup);
      await markFollowupComplete(followup.phone);
      results.push({ phone: followup.phone, name: followup.name, status: "fired" });
    } catch (err) {
      console.error(`[fire-followups] Failed for ${followup.phone}:`, err);
      results.push({
        phone: followup.phone,
        name: followup.name,
        status: "failed",
        error: String(err),
      });
    }
  }

  return NextResponse.json({ fired: results.filter((r) => r.status === "fired").length, results });
}

async function fireOutboundCall(followup: FollowupData): Promise<void> {
  // Load caller history for context
  const history = await getCallerData(followup.phone);
  const priorContext = history?.summary || followup.notes;
  const callerName = followup.name;

  // Build a natural first message that references the prior call
  const firstMessage = `Hey ${callerName}, it's Max over at Evergreen. We spoke recently and set up this call — you still got a few minutes?`;

  // Build assistant overrides with prior context appended to system prompt
  const systemMessageAppend = priorContext
    ? `\n\n## This Call Context\nYou scheduled this follow-up call with ${callerName}. Prior conversation summary: ${priorContext}\n\nPick up naturally from where you left off. Do not re-run full discovery — use what you know. Your goal is to get them to a decision.`
    : "";

  // Outbound squad — override first agent (Outbound-Intro) with personalized first message + context
  const payload = {
    phoneNumberId: PHONE_NUMBER_ID,
    customer: { number: followup.phone },
    squadId: OUTBOUND_SQUAD_ID,
    squadOverrides: {
      members: [
        {
          // First member = Max-Outbound-Intro
          assistantOverrides: {
            firstMessage,
            ...(systemMessageAppend
              ? {
                  model: {
                    messages: [
                      { role: "system" as const, content: systemMessageAppend },
                    ],
                  },
                }
              : {}),
          },
        },
      ],
    },
  };

  const res = await fetch("https://api.vapi.ai/call", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${VAPI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Vapi outbound call failed: ${err}`);
  }
}

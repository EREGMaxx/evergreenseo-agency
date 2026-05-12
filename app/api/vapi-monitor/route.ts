import { NextRequest, NextResponse } from "next/server";
import {
  logCallStarted,
  logCallEnded,
  logEmailSent,
  logPaymentLinkSent,
  storeCallerData,
  getCallerData,
  scheduleFollowup,
  normalizePhone,
} from "@/lib/call-tracker";
import {
  AGENT_ID,
  buildReturningCallerPrompt,
  buildTransientAssistant,
} from "@/lib/agent-config";

export const maxDuration = 20;

// ── Config ────────────────────────────────────────────────────────────────────
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "";
const MS_TENANT_ID = process.env.MS_TENANT_ID ?? "";
const MS_CLIENT_ID = process.env.MS_CLIENT_ID ?? "";
const MS_CLIENT_SECRET = process.env.MS_CLIENT_SECRET ?? "";
const MS_MAILBOX = process.env.MS_MAILBOX ?? "maxx@evergreenseo.agency";

// ── Main handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: true });
  }

  const type = (body?.message as Record<string, unknown>)?.type as string ?? "";

  // ── 1. assistant-request — MUST respond within 7.5s ──────────────────────
  // Fires on every inbound call when the phone number has no assistantId set.
  // We look up the caller's history and return a personalized assistant config.
  if (type === "assistant-request") {
    return handleAssistantRequest(body);
  }

  // ── 2. call-started ───────────────────────────────────────────────────────
  if (type === "call-started") {
    const msg = body.message as Record<string, unknown>;
    const call = msg?.call as Record<string, unknown> ?? {};
    const callId = (call?.id as string) ?? "unknown";
    const from = (call?.customer as Record<string, unknown>)?.number as string ?? "unknown";

    // Log to KV (non-blocking — don't await, keep response fast)
    logCallStarted(callId, from).catch(console.error);

    return NextResponse.json({ ok: true });
  }

  // ── 3. end-of-call-report — store transcript keyed by caller phone ────────
  if (type === "end-of-call-report") {
    const msg = body.message as Record<string, unknown>;
    const call = msg?.call as Record<string, unknown> ?? {};
    const artifact = msg?.artifact as Record<string, unknown> ?? {};

    const callId = (call?.id as string) ?? "unknown";
    const durationSeconds = (msg?.durationSeconds as number) ?? 0;
    const endedReason = (msg?.endedReason as string) ?? "unknown";
    const summary = (msg?.summary as string) ?? "";
    const transcript = (artifact?.transcript as string) ?? "";
    const callerPhone = (call?.customer as Record<string, unknown>)?.number as string ?? "";

    // Log call ended
    logCallEnded(callId, durationSeconds, endedReason, summary).catch(console.error);

    // Store caller transcript by phone number
    if (callerPhone && transcript) {
      // Try to extract caller name from transcript (look for "my name is X" patterns)
      const nameMatch = transcript.match(/(?:name(?:'s| is)|I(?:'m| am))\s+([A-Z][a-z]+)/);
      const callerName = nameMatch?.[1] ?? "";
      storeCallerData(callerPhone, {
        name: callerName,
        transcript,
        summary,
      }).catch(console.error);
    }

    return NextResponse.json({ ok: true });
  }

  // ── 4. tool-calls — route to correct handler ──────────────────────────────
  if (type === "tool-calls") {
    return handleToolCalls(body);
  }

  // All other event types — acknowledge and ignore
  return NextResponse.json({ ok: true });
}

// ── assistant-request handler ─────────────────────────────────────────────────
async function handleAssistantRequest(
  body: Record<string, unknown>
): Promise<NextResponse> {
  const msg = body.message as Record<string, unknown>;
  const call = msg?.call as Record<string, unknown> ?? {};
  const callerPhone = (call?.customer as Record<string, unknown>)?.number as string ?? "";

  // Fast path for unknown numbers — return saved assistant immediately
  if (!callerPhone) {
    return NextResponse.json({ assistantId: AGENT_ID });
  }

  try {
    const history = await getCallerData(callerPhone);

    // New caller — use the saved assistant as-is
    if (!history || history.callCount === 0) {
      return NextResponse.json({ assistantId: AGENT_ID });
    }

    // Returning caller — build a transient assistant with caller context injected
    const systemPrompt = buildReturningCallerPrompt(
      history.name,
      history.summary || history.transcript.slice(0, 800),
      history.callCount
    );

    const callerName = history.name && history.name !== "Unknown" ? history.name : null;
    const firstMessage = callerName
      ? `Hey ${callerName}, good to hear from you again. What's going on?`
      : "Hey, good to hear from you again. What's going on?";

    const assistantConfig = buildTransientAssistant(systemPrompt, firstMessage);

    return NextResponse.json({ assistant: assistantConfig });
  } catch (err) {
    // On any error, fall back to the saved assistant — never fail to answer a call
    console.error("[vapi-monitor] assistant-request error, falling back:", err);
    return NextResponse.json({ assistantId: AGENT_ID });
  }
}

// ── tool-calls handler ────────────────────────────────────────────────────────
async function handleToolCalls(
  body: Record<string, unknown>
): Promise<NextResponse> {
  const msg = body.message as Record<string, unknown>;
  const toolCallList = (
    (msg?.toolCallList ?? msg?.toolCalls ?? []) as Record<string, unknown>[]
  );

  if (!toolCallList || toolCallList.length === 0) {
    return NextResponse.json({ ok: true });
  }

  const results: { toolCallId: string; result: string }[] = [];

  for (const toolCall of toolCallList) {
    const toolId = toolCall.id as string;
    const fn = toolCall.function as Record<string, unknown>;
    const fnName = fn?.name as string;
    const rawArgs = fn?.arguments;
    const args =
      typeof rawArgs === "string" ? JSON.parse(rawArgs) : (rawArgs as Record<string, unknown>);

    if (fnName === "send_payment_link") {
      // Forward to vapi-payment for Stripe + email handling
      try {
        const res = await fetch("https://www.evergreenseo.agency/api/vapi-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json() as { results?: { toolCallId: string; result: string }[] };
        if (data.results) return NextResponse.json(data);
      } catch (err) {
        console.error("[vapi-monitor] send_payment_link forward error:", err);
        results.push({
          toolCallId: toolId,
          result: "Payment link request received — sending it to you now.",
        });
      }
    } else if (fnName === "schedule_followup") {
      const result = await handleScheduleFollowup(body, toolId, args);
      results.push(result);
    } else {
      results.push({ toolCallId: toolId, result: "Tool executed." });
    }
  }

  return NextResponse.json({ results });
}

// ── schedule_followup tool handler ───────────────────────────────────────────
async function handleScheduleFollowup(
  body: Record<string, unknown>,
  toolCallId: string,
  args: Record<string, unknown>
): Promise<{ toolCallId: string; result: string }> {
  const {
    prospect_name,
    prospect_email,
    followup_datetime,
    timezone,
    notes,
  } = args as {
    prospect_name: string;
    prospect_email: string;
    followup_datetime: string;
    timezone: string;
    notes: string;
  };

  const msg = body.message as Record<string, unknown>;
  const call = msg?.call as Record<string, unknown> ?? {};
  const callerPhone = (call?.customer as Record<string, unknown>)?.number as string ?? "";

  try {
    // 1. Get Graph token
    const graphToken = await getMsGraphToken();

    // 2. Generate and send calendar invite
    await sendCalendarInvite({
      graphToken,
      prospectName: prospect_name,
      prospectEmail: prospect_email,
      followupDatetime: followup_datetime,
      timezone,
    });

    // 3. Store follow-up in Redis for outbound call cron
    if (callerPhone) {
      await scheduleFollowup(callerPhone, {
        name: prospect_name,
        email: prospect_email,
        followupDatetime: followup_datetime,
        timezone,
        notes,
      });

      // Update caller record with name if we have it
      const existing = await getCallerData(callerPhone);
      if (existing && prospect_name) {
        await storeCallerData(callerPhone, {
          name: prospect_name,
          transcript: existing.transcript,
          summary: notes,
        });
      }
    }

    // 4. Log email sent
    const callId = (call?.id as string) ?? "unknown";
    await logEmailSent(callId, prospect_email);

    return {
      toolCallId,
      result: `Calendar invite sent to ${prospect_email} for ${formatReadableDate(followup_datetime, timezone)}.`,
    };
  } catch (err) {
    console.error("[vapi-monitor] schedule_followup error:", err);
    return {
      toolCallId,
      result: `Ran into an issue sending the invite — but I have your details. I'll make sure to call you at the time we agreed.`,
    };
  }
}

// ── ICS calendar invite ───────────────────────────────────────────────────────
function generateIcs(params: {
  prospectName: string;
  prospectEmail: string;
  followupDatetime: string; // ISO UTC
  timezone: string;
}): string {
  const { prospectName, prospectEmail, followupDatetime } = params;

  const dt = new Date(followupDatetime);
  // End time: 30 minutes after start
  const dtEnd = new Date(dt.getTime() + 30 * 60 * 1000);

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const uid = `evergreen-${Date.now()}@evergreenseo.agency`;
  const now = fmt(new Date());

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Evergreen SEO Agency//EN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${fmt(dt)}`,
    `DTEND:${fmt(dtEnd)}`,
    "SUMMARY:Follow-up Call - Evergreen SEO Agency",
    `DESCRIPTION:Max from Evergreen SEO Agency will call you at this time.\\nQuestions before then? Call (424) 464-8434.`,
    "ORGANIZER;CN=Maxx - Evergreen SEO Agency:mailto:maxx@evergreenseo.agency",
    `ATTENDEE;RSVP=TRUE;CN=${prospectName}:mailto:${prospectEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Follow-up call with Evergreen SEO Agency in 30 minutes",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

async function sendCalendarInvite(params: {
  graphToken: string;
  prospectName: string;
  prospectEmail: string;
  followupDatetime: string;
  timezone: string;
}): Promise<void> {
  const { graphToken, prospectName, prospectEmail, followupDatetime, timezone } = params;

  const icsContent = generateIcs({ prospectName, prospectEmail, followupDatetime, timezone });
  const icsBase64 = Buffer.from(icsContent).toString("base64");

  const readableDate = formatReadableDate(followupDatetime, timezone);

  const emailBody = `Hi ${prospectName},

Great speaking with you. I've got our follow-up call locked in — calendar invite is attached.

Date: ${readableDate}
I'll call you directly at this time.

Questions before then? Call (424) 464-8434 or reply to this email.

Max
Evergreen SEO Agency
https://evergreenseo.agency`;

  const payload = {
    message: {
      subject: `Follow-up Call Confirmed — ${readableDate}`,
      body: { contentType: "Text", content: emailBody },
      toRecipients: [{ emailAddress: { address: prospectEmail } }],
      attachments: [
        {
          "@odata.type": "#microsoft.graph.fileAttachment",
          name: "followup-call-evergreen.ics",
          contentType: "text/calendar; method=REQUEST",
          contentBytes: icsBase64,
        },
      ],
    },
    saveToSentItems: true,
  };

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${MS_MAILBOX}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${graphToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`sendCalendarInvite failed: ${err}`);
  }
}

// ── MS Graph token ────────────────────────────────────────────────────────────
async function getMsGraphToken(): Promise<string> {
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: MS_CLIENT_ID,
    client_secret: MS_CLIENT_SECRET,
    scope: "https://graph.microsoft.com/.default",
  });

  const res = await fetch(
    `https://login.microsoftonline.com/${MS_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`MS Graph token error: ${err}`);
  }

  const data = await res.json() as { access_token: string };
  return data.access_token;
}

// ── Telegram notification ─────────────────────────────────────────────────────
async function sendTelegram(text: string): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatReadableDate(isoDatetime: string, timezone: string): string {
  try {
    return new Date(isoDatetime).toLocaleString("en-US", {
      timeZone: timezone,
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  } catch {
    return isoDatetime;
  }
}

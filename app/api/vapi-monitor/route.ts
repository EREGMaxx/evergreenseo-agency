import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 10;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body?.message?.type;

    // If a tool call arrives here, forward it to the payment webhook
    if (type === "tool-calls") {
      const res = await fetch("https://www.evergreenseo.agency/api/vapi-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return NextResponse.json(data);
    }

    if (type === "call-started") {
      const callId = body?.message?.call?.id ?? body?.message?.callId ?? "unknown";
      const from = body?.message?.call?.customer?.number ?? "unknown number";

      const text = `📞 Incoming call on Evergreen line\nFrom: ${from}\nCall ID: ${callId}\n\nhttps://dashboard.vapi.ai/calls/${callId}`;

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[vapi-monitor] Error:", err);
    return NextResponse.json({ ok: true });
  }
}

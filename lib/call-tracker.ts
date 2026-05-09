/**
 * Call Tracker — Vercel KV / Upstash Redis logging for Vapi agent calls.
 * Gracefully no-ops if KV env vars are not configured.
 *
 * Setup: Vercel Dashboard → Storage → Create KV Store → Connect to project.
 * That auto-adds: KV_REST_API_URL + KV_REST_API_TOKEN to the project.
 */

const KV_URL = (process.env.KV_REST_API_URL ?? "").replace(/\/$/, "");
const KV_TOKEN = process.env.KV_REST_API_TOKEN ?? "";

function isConfigured(): boolean {
  return !!(KV_URL && KV_TOKEN);
}

/** Execute multiple Redis commands in one round-trip via Upstash pipeline */
async function pipeline(commands: (string | number)[][]): Promise<unknown[]> {
  if (!isConfigured()) return [];
  try {
    const res = await fetch(`${KV_URL}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commands),
    });
    const data = (await res.json()) as { result: unknown }[];
    return data.map((d) => d.result);
  } catch {
    return [];
  }
}

/** ISO week key, e.g. "2026-W20" */
function isoWeek(): string {
  const now = new Date();
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(
    (((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7
  );
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

// ── Event loggers ──────────────────────────────────────────────────────────────

export async function logCallStarted(
  callId: string,
  callerNumber: string
): Promise<void> {
  const wk = isoWeek();
  const event = JSON.stringify({
    type: "call_started",
    callId,
    callerNumber,
    ts: new Date().toISOString(),
  });
  await pipeline([
    ["LPUSH", "calls:log", event],
    ["LTRIM", "calls:log", 0, 999], // keep last 1 000 events
    ["INCR", "calls:total"],
    ["INCR", `week:${wk}:calls`],
  ]);
}

export async function logCallEnded(
  callId: string,
  durationSeconds: number,
  endedReason: string,
  summary?: string
): Promise<void> {
  const event = JSON.stringify({
    type: "call_ended",
    callId,
    durationSeconds,
    endedReason,
    summary: summary ?? "",
    ts: new Date().toISOString(),
  });
  await pipeline([
    ["LPUSH", "calls:log", event],
    ["LTRIM", "calls:log", 0, 999],
  ]);
}

export async function logEmailSent(
  callId: string,
  prospectEmail: string
): Promise<void> {
  const wk = isoWeek();
  const event = JSON.stringify({
    type: "email_sent",
    callId,
    prospectEmail,
    ts: new Date().toISOString(),
  });
  await pipeline([
    ["LPUSH", "calls:log", event],
    ["LTRIM", "calls:log", 0, 999],
    ["INCR", "calls:emails_sent"],
    ["INCR", `week:${wk}:emails`],
  ]);
}

export async function logPaymentLinkSent(params: {
  callId: string;
  prospectName: string;
  prospectEmail: string;
  industry: string;
  setupFee: number;
  monthlyFee: number;
}): Promise<void> {
  const wk = isoWeek();
  const event = JSON.stringify({
    type: "payment_link_sent",
    ...params,
    ts: new Date().toISOString(),
  });
  await pipeline([
    ["LPUSH", "calls:log", event],
    ["LTRIM", "calls:log", 0, 999],
    ["INCR", "calls:payment_links_sent"],
    ["INCR", `week:${wk}:payment_links`],
  ]);
}

// ── Stats ──────────────────────────────────────────────────────────────────────

export interface CallStats {
  configured: boolean;
  allTime: {
    calls: number;
    emailsSent: number;
    paymentLinksSent: number;
  };
  thisWeek: {
    week: string;
    calls: number;
    emailsSent: number;
    paymentLinksSent: number;
  };
  recentEvents: unknown[];
}

export async function getStats(): Promise<CallStats> {
  const wk = isoWeek();

  if (!isConfigured()) {
    return {
      configured: false,
      allTime: { calls: 0, emailsSent: 0, paymentLinksSent: 0 },
      thisWeek: { week: wk, calls: 0, emailsSent: 0, paymentLinksSent: 0 },
      recentEvents: [],
    };
  }

  const results = await pipeline([
    ["GET", "calls:total"],
    ["GET", "calls:emails_sent"],
    ["GET", "calls:payment_links_sent"],
    ["GET", `week:${wk}:calls`],
    ["GET", `week:${wk}:emails`],
    ["GET", `week:${wk}:payment_links`],
    ["LRANGE", "calls:log", 0, 24],
  ]);

  const [
    totalCalls,
    emailsSent,
    paymentLinks,
    weekCalls,
    weekEmails,
    weekPayments,
    rawLog,
  ] = results;

  const recentEvents = ((rawLog as string[]) ?? []).map((s) => {
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  });

  return {
    configured: true,
    allTime: {
      calls: Number(totalCalls ?? 0),
      emailsSent: Number(emailsSent ?? 0),
      paymentLinksSent: Number(paymentLinks ?? 0),
    },
    thisWeek: {
      week: wk,
      calls: Number(weekCalls ?? 0),
      emailsSent: Number(weekEmails ?? 0),
      paymentLinksSent: Number(weekPayments ?? 0),
    },
    recentEvents,
  };
}

/**
 * Call Tracker — Redis logging for Vapi agent calls.
 * Uses custom redis-http service on VPS via Upstash-compatible REST API.
 */

const KV_URL = (process.env.KV_REST_API_URL ?? "").replace(/\/$/, "");
const KV_TOKEN = process.env.KV_REST_API_TOKEN ?? "";

// 180-day TTL for caller data
const CALLER_TTL_SECONDS = 180 * 24 * 60 * 60;
// 30-day TTL for follow-up records
const FOLLOWUP_TTL_SECONDS = 30 * 24 * 60 * 60;

function isConfigured(): boolean {
  return !!(KV_URL && KV_TOKEN);
}

/** Execute multiple Redis commands in one round-trip via pipeline */
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

/** Single Redis command */
async function cmd(command: (string | number)[]): Promise<unknown> {
  const results = await pipeline([command]);
  return results[0] ?? null;
}

/** ISO week key, e.g. "2026-W20" */
function isoWeek(): string {
  const now = new Date();
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Normalize phone to E.164 key format — strip all non-digits, ensure leading + */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `+${digits}`;
}

// ── Call event loggers ─────────────────────────────────────────────────────────

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
    ["LTRIM", "calls:log", 0, 999],
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

// ── Caller memory ──────────────────────────────────────────────────────────────

export interface CallerData {
  name: string;
  transcript: string;
  summary: string;
  callCount: number;
  lastCall: string; // ISO timestamp
}

/**
 * Store caller data after a call ends.
 * Keyed by normalized E.164 phone number.
 * Increments call count on each store.
 */
export async function storeCallerData(
  phone: string,
  data: { name?: string; transcript: string; summary: string }
): Promise<void> {
  if (!isConfigured()) return;
  const key = `caller:${normalizePhone(phone)}`;

  // Read existing to preserve call count and name
  let existing: CallerData | null = null;
  try {
    const raw = await cmd(["GET", key]);
    if (raw) existing = JSON.parse(raw as string) as CallerData;
  } catch { /* ignore */ }

  const updated: CallerData = {
    name: data.name || existing?.name || "Unknown",
    transcript: data.transcript,
    summary: data.summary,
    callCount: (existing?.callCount ?? 0) + 1,
    lastCall: new Date().toISOString(),
  };

  await pipeline([
    ["SET", key, JSON.stringify(updated)],
    ["EXPIRE", key, CALLER_TTL_SECONDS],
  ]);
}

/**
 * Retrieve caller history by phone number.
 * Returns null if no history found.
 */
export async function getCallerData(phone: string): Promise<CallerData | null> {
  if (!isConfigured()) return null;
  try {
    const key = `caller:${normalizePhone(phone)}`;
    const raw = await cmd(["GET", key]);
    if (!raw) return null;
    return JSON.parse(raw as string) as CallerData;
  } catch {
    return null;
  }
}

// ── Follow-up scheduling ───────────────────────────────────────────────────────

export interface FollowupData {
  phone: string;
  name: string;
  email: string;
  followupDatetime: string; // ISO UTC
  timezone: string;
  notes: string;
  scheduledAt: string; // when it was created
}

/**
 * Schedule an outbound follow-up call.
 * Stores in a Redis sorted set (score = UTC unix timestamp) for easy due-check.
 * Also stores full data in a separate key.
 */
export async function scheduleFollowup(
  phone: string,
  data: {
    name: string;
    email: string;
    followupDatetime: string;
    timezone: string;
    notes: string;
  }
): Promise<void> {
  if (!isConfigured()) return;
  const normalized = normalizePhone(phone);
  const score = Math.floor(new Date(data.followupDatetime).getTime() / 1000);
  const followupRecord: FollowupData = {
    phone: normalized,
    ...data,
    scheduledAt: new Date().toISOString(),
  };

  await pipeline([
    // Sorted set: score = unix timestamp, value = phone
    ["ZADD", "followups:scheduled", score, normalized],
    // Full data keyed by phone
    ["SET", `followup:${normalized}`, JSON.stringify(followupRecord)],
    ["EXPIRE", `followup:${normalized}`, FOLLOWUP_TTL_SECONDS],
  ]);
}

/**
 * Get all follow-ups due now or overdue.
 * Returns array of FollowupData sorted by scheduled time.
 */
export async function getDueFollowups(): Promise<FollowupData[]> {
  if (!isConfigured()) return [];
  try {
    const now = Math.floor(Date.now() / 1000);
    // ZRANGEBYSCORE returns members with score <= now
    const phones = await cmd(["ZRANGEBYSCORE", "followups:scheduled", 0, now]) as string[];
    if (!phones || phones.length === 0) return [];

    const results: FollowupData[] = [];
    for (const phone of phones) {
      try {
        const raw = await cmd(["GET", `followup:${phone}`]);
        if (raw) results.push(JSON.parse(raw as string) as FollowupData);
      } catch { /* skip bad records */ }
    }
    return results;
  } catch {
    return [];
  }
}

/**
 * Mark a follow-up as complete (remove from scheduled set).
 */
export async function markFollowupComplete(phone: string): Promise<void> {
  if (!isConfigured()) return;
  const normalized = normalizePhone(phone);
  await pipeline([
    ["ZREM", "followups:scheduled", normalized],
    ["DEL", `followup:${normalized}`],
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

  const [totalCalls, emailsSent, paymentLinks, weekCalls, weekEmails, weekPayments, rawLog] = results;

  const recentEvents = ((rawLog as string[]) ?? []).map((s) => {
    try { return JSON.parse(s); } catch { return s; }
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

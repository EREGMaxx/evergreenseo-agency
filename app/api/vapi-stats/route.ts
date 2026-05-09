import { NextRequest, NextResponse } from "next/server";
import { getStats } from "@/lib/call-tracker";

// Simple auth — require ?key=<VAPI_STATS_KEY> so this isn't public
const STATS_KEY = process.env.VAPI_STATS_KEY ?? "";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  if (STATS_KEY && searchParams.get("key") !== STATS_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stats = await getStats();
  return NextResponse.json(stats);
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { partner: string } }
) {
  const partner = params.partner?.toLowerCase().trim();

  if (!partner) {
    return NextResponse.redirect(new URL("/start", req.url));
  }

  // Redirect to /start with ref param
  const destination = new URL("/start", req.url);
  destination.searchParams.set("ref", partner);

  const response = NextResponse.redirect(destination);

  // Set a 30-day cookie so the ref persists even if they navigate away and return
  response.cookies.set("eg_ref", partner, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    httpOnly: false, // readable by client JS
  });

  return response;
}

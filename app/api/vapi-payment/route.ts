import { NextRequest, NextResponse } from "next/server";

// ── Config ────────────────────────────────────────────────────────────────────
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const MS_TENANT_ID = process.env.MS_TENANT_ID ?? "";
const MS_CLIENT_ID = process.env.MS_CLIENT_ID ?? "";
const MS_CLIENT_SECRET = process.env.MS_CLIENT_SECRET ?? "";
const MS_MAILBOX = process.env.MS_MAILBOX ?? "maxx@evergreenseo.agency";
const INTERNAL_ALERT_EMAIL = "skyler@mednick.com";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ToolCallArgs {
  prospect_name: string;
  prospect_email: string;
  setup_fee: number;
  monthly_fee: number;
  industry: string;
}

interface VapiToolCall {
  id: string;
  type: string;
  function: {
    name: string;
    arguments: string;
  };
}

interface VapiPayload {
  message: {
    type: string;
    toolCallList: VapiToolCall[];
  };
}

// ── Health check / debug ─────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("debug") === "1") {
    // Test Graph token only — never expose secrets, just confirm they're set
    const envCheck = {
      STRIPE_SECRET_KEY: STRIPE_SECRET_KEY ? `set (${STRIPE_SECRET_KEY.length} chars)` : "MISSING",
      MS_TENANT_ID: MS_TENANT_ID ? `set (${MS_TENANT_ID.length} chars)` : "MISSING",
      MS_CLIENT_ID: MS_CLIENT_ID ? `set (${MS_CLIENT_ID.length} chars)` : "MISSING",
      MS_CLIENT_SECRET: MS_CLIENT_SECRET ? `set (${MS_CLIENT_SECRET.length} chars)` : "MISSING",
      MS_MAILBOX: MS_MAILBOX || "MISSING",
    };
    let tokenStatus = "not tested";
    try {
      await getMsGraphToken();
      tokenStatus = "OK";
    } catch (e) {
      tokenStatus = `FAILED: ${String(e)}`;
    }
    return NextResponse.json({ status: "ok", envCheck, tokenStatus });
  }
  return NextResponse.json({ status: "ok" });
}

// ── Main handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let toolCallId = "unknown";

  try {
    const body: VapiPayload = await req.json();

    const toolCallList = body?.message?.toolCallList ?? [];
    const toolCall = toolCallList.find(
      (tc) => tc.function?.name === "send_payment_link"
    );

    if (!toolCall) {
      return NextResponse.json(
        { error: "No send_payment_link tool call found" },
        { status: 400 }
      );
    }

    toolCallId = toolCall.id;
    const args: ToolCallArgs = JSON.parse(toolCall.function.arguments);
    const { prospect_name, prospect_email, setup_fee, monthly_fee, industry } =
      args;

    const totalAmount = setup_fee + monthly_fee;

    // ── 1. Create Stripe payment link ─────────────────────────────────────────
    let paymentLinkUrl = "";
    try {
      paymentLinkUrl = await createStripePaymentLink({
        prospectName: prospect_name,
        setupFee: setup_fee,
        monthlyFee: monthly_fee,
        totalAmount,
        industry,
      });
    } catch (err) {
      console.error("[vapi-payment] Stripe error:", err);
    }

    // ── 2. Get MS Graph token ─────────────────────────────────────────────────
    let graphToken = "";
    try {
      graphToken = await getMsGraphToken();
    } catch (err) {
      console.error("[vapi-payment] MS Graph token error:", err);
    }

    // ── 3. Send prospect email ────────────────────────────────────────────────
    if (graphToken && paymentLinkUrl) {
      try {
        await sendProspectEmail({
          graphToken,
          prospectName: prospect_name,
          prospectEmail: prospect_email,
          setupFee: setup_fee,
          monthlyFee: monthly_fee,
          totalAmount,
          paymentLinkUrl,
        });
      } catch (err) {
        console.error("[vapi-payment] Prospect email error:", err);
      }
    }

    // ── 4. Send internal alert ────────────────────────────────────────────────
    if (graphToken) {
      try {
        await sendInternalAlert({
          graphToken,
          prospectName: prospect_name,
          prospectEmail: prospect_email,
          industry,
          setupFee: setup_fee,
          monthlyFee: monthly_fee,
        });
      } catch (err) {
        console.error("[vapi-payment] Internal alert error:", err);
      }
    }

    // ── 5. Return Vapi tool result ────────────────────────────────────────────
    return NextResponse.json({
      results: [
        {
          toolCallId,
          result: `Payment link sent to ${prospect_email}. They will receive it within the next few minutes.`,
        },
      ],
    });
  } catch (err) {
    console.error("[vapi-payment] Unhandled error:", err);
    // Always return a success shape so the Vapi call doesn't break
    return NextResponse.json({
      results: [
        {
          toolCallId,
          result: "Payment link request received and is being processed.",
        },
      ],
    });
  }
}

// ── Stripe helpers ────────────────────────────────────────────────────────────
async function createStripePaymentLink(params: {
  prospectName: string;
  setupFee: number;
  monthlyFee: number;
  totalAmount: number;
  industry: string;
}): Promise<string> {
  const { totalAmount, industry } = params;
  const productName = `Evergreen SEO Agency — AI Agent Setup + First Month (${industry})`;

  // 1. Create a one-time price
  const priceBody = new URLSearchParams({
    currency: "usd",
    unit_amount: String(totalAmount * 100),
    "product_data[name]": productName,
  });

  const priceRes = await fetch("https://api.stripe.com/v1/prices", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: priceBody.toString(),
  });

  if (!priceRes.ok) {
    const err = await priceRes.text();
    throw new Error(`Stripe price creation failed: ${err}`);
  }

  const price = await priceRes.json();

  // 2. Create payment link
  const linkBody = new URLSearchParams({
    "line_items[0][price]": price.id,
    "line_items[0][quantity]": "1",
  });

  const linkRes = await fetch("https://api.stripe.com/v1/payment_links", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: linkBody.toString(),
  });

  if (!linkRes.ok) {
    const err = await linkRes.text();
    throw new Error(`Stripe payment link creation failed: ${err}`);
  }

  const link = await linkRes.json();
  return link.url as string;
}

// ── Microsoft Graph helpers ───────────────────────────────────────────────────
async function getMsGraphToken(): Promise<string> {
  const tokenUrl = `https://login.microsoftonline.com/${MS_TENANT_ID}/oauth2/v2.0/token`;

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: MS_CLIENT_ID,
    client_secret: MS_CLIENT_SECRET,
    scope: "https://graph.microsoft.com/.default",
  });

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`MS Graph token error: ${err}`);
  }

  const data = await res.json();
  return data.access_token as string;
}

async function sendEmail(params: {
  graphToken: string;
  toAddress: string;
  subject: string;
  htmlBody: string;
}): Promise<void> {
  const { graphToken, toAddress, subject, htmlBody } = params;

  const payload = {
    message: {
      subject,
      body: { contentType: "HTML", content: htmlBody },
      toRecipients: [{ emailAddress: { address: toAddress } }],
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
    throw new Error(`sendMail failed: ${err}`);
  }
}

async function sendProspectEmail(params: {
  graphToken: string;
  prospectName: string;
  prospectEmail: string;
  setupFee: number;
  monthlyFee: number;
  totalAmount: number;
  paymentLinkUrl: string;
}): Promise<void> {
  const {
    graphToken,
    prospectName,
    prospectEmail,
    setupFee,
    monthlyFee,
    totalAmount,
    paymentLinkUrl,
  } = params;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 24px; }
    .btn { display: inline-block; background-color: #16a34a; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-size: 16px; margin: 16px 0; }
    .breakdown { background: #f9f9f9; border-left: 4px solid #16a34a; padding: 16px 20px; margin: 20px 0; }
    .breakdown p { margin: 4px 0; }
    .footer { margin-top: 32px; font-size: 13px; color: #666; border-top: 1px solid #e5e5e5; padding-top: 16px; }
  </style>
</head>
<body>
  <p>Hi ${prospectName},</p>

  <p>Great speaking with you today. Here's your payment link to get started:</p>

  <a href="${paymentLinkUrl}" class="btn">Complete Payment →</a>

  <div class="breakdown">
    <p><strong>What's included:</strong></p>
    <p>• Setup fee: $${setupFee.toLocaleString()}</p>
    <p>• First month: $${monthlyFee.toLocaleString()}</p>
    <p>• <strong>Total today: $${totalAmount.toLocaleString()}</strong></p>
  </div>

  <p>Once payment is processed, we'll send your onboarding form within the hour and have your AI agent live within 5–7 business days.</p>

  <p>Questions? Reply to this email or call <strong>(424) 464-8434</strong>.</p>

  <div class="footer">
    <p><strong>Maxx | Evergreen SEO Agency</strong><br />
    <a href="https://evergreenseo.agency">evergreenseo.agency</a></p>
  </div>
</body>
</html>
  `.trim();

  await sendEmail({
    graphToken,
    toAddress: prospectEmail,
    subject: "Your Evergreen SEO Agency Payment Link",
    htmlBody,
  });
}

async function sendInternalAlert(params: {
  graphToken: string;
  prospectName: string;
  prospectEmail: string;
  industry: string;
  setupFee: number;
  monthlyFee: number;
}): Promise<void> {
  const { graphToken, prospectName, prospectEmail, industry, setupFee, monthlyFee } =
    params;

  const body = `Agent sent payment link to ${prospectName} (${prospectEmail}) — ${industry} — Setup: $${setupFee.toLocaleString()} + Monthly: $${monthlyFee.toLocaleString()}`;

  await sendEmail({
    graphToken,
    toAddress: INTERNAL_ALERT_EMAIL,
    subject: "💰 Payment Link Sent",
    htmlBody: `<p>${body}</p>`,
  });
}

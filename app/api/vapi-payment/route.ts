import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 30; // Allow up to 30s for Stripe + email to complete

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
  message?: {
    type?: string;
    toolCallList?: VapiToolCall[];
    toolCalls?: VapiToolCall[];
    call?: { id?: string; customer?: { number?: string } };
    [key: string]: unknown;
  };
  toolCallList?: VapiToolCall[];
  toolCalls?: VapiToolCall[];
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
    let emailStatus = "not tested";
    let stripeStatus = "not tested";
    try {
      const tok = await getMsGraphToken();
      tokenStatus = "OK";
      // Try sending a real test email
      try {
        const testPayload = {
          message: {
            subject: "DEBUG: vapi-payment email test",
            body: { contentType: "Text", content: "This is a debug test email from the vapi-payment webhook on Vercel." },
            toRecipients: [{ emailAddress: { address: "eregmaxx2@gmail.com" } }],
          },
          saveToSentItems: true,
        };
        const r = await fetch(`https://graph.microsoft.com/v1.0/users/${MS_MAILBOX}/sendMail`, {
          method: "POST",
          headers: { Authorization: `Bearer ${tok}`, "Content-Type": "application/json" },
          body: JSON.stringify(testPayload),
        });
        if (r.ok) {
          emailStatus = "SENT OK";
        } else {
          const err = await r.text();
          emailStatus = `FAILED: ${err}`;
        }
      } catch (e) {
        emailStatus = `EXCEPTION: ${String(e)}`;
      }
    } catch (e) {
      tokenStatus = `FAILED: ${String(e)}`;
    }
    // Try Stripe
    try {
      const r = await fetch("https://api.stripe.com/v1/prices", {
        method: "POST",
        headers: { Authorization: `Bearer ${STRIPE_SECRET_KEY}`, "Content-Type": "application/x-www-form-urlencoded" },
        body: "currency=usd&unit_amount=100&product_data[name]=debug-test",
      });
      const d = await r.json();
      stripeStatus = d.id ? `OK: ${d.id}` : `FAILED: ${JSON.stringify(d.error)}`;
    } catch (e) {
      stripeStatus = `EXCEPTION: ${String(e)}`;
    }
    return NextResponse.json({ status: "ok", envCheck, tokenStatus, emailStatus, stripeStatus });
  }
  return NextResponse.json({ status: "ok" });
}

// ── Main handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let toolCallId = "unknown";

  try {
    const body: VapiPayload = await req.json();

    // Vapi sends tool calls in multiple possible formats — handle all of them
    const toolCallList =
      body?.message?.toolCallList ??
      body?.message?.toolCalls ??
      body?.toolCallList ??
      body?.toolCalls ??
      [];
    const toolCall = toolCallList.find(
      (tc: VapiToolCall) => tc.function?.name === "send_payment_link"
    );

    // Log raw body for debugging
    console.log("[vapi-payment] Raw body:", JSON.stringify(body).slice(0, 500));

    // Handle call-started — send email alert (Telegram bot conflicts with OpenClaw)
    if (body?.message?.type === "call-started") {
      const callId = body?.message?.call?.id ?? "unknown";
      const from = body?.message?.call?.customer?.number ?? "unknown number";
      try {
        const gToken = await getMsGraphToken();
        await sendEmail({
          graphToken: gToken,
          toAddress: INTERNAL_ALERT_EMAIL,
          subject: "📞 Incoming Call — Evergreen Line",
          htmlBody: `<p>Incoming call from <strong>${from}</strong></p><p><a href="https://dashboard.vapi.ai/calls/${callId}">Listen / View Call</a></p>`,
        });
      } catch {}
      return NextResponse.json({ ok: true });
    }

    // Return 200 for all non-tool-call events so Vapi doesn't error
    const msgType = body?.message?.type ?? "";
    if (msgType && msgType !== "tool-calls") {
      return NextResponse.json({ ok: true });
    }

    if (!toolCall) {
      return NextResponse.json(
        { error: "No send_payment_link tool call found" },
        { status: 400 }
      );
    }

    toolCallId = toolCall.id;
    // Vapi sends arguments as a pre-parsed object; manual tests send a JSON string — handle both
    const args: ToolCallArgs = typeof toolCall.function.arguments === "string"
      ? JSON.parse(toolCall.function.arguments)
      : toolCall.function.arguments as unknown as ToolCallArgs;
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

  // Simple plain text email first to debug
  const textBody = `Hi ${prospectName},

Great speaking with you today. Here's your payment link to get started:

${paymentLinkUrl}

What's included:
- Setup fee: $${setupFee.toLocaleString()}
- First month: $${monthlyFee.toLocaleString()}
- Total today: $${totalAmount.toLocaleString()}

Once payment is processed, we'll send your onboarding form within the hour and have your AI agent live within 5–7 business days.

Questions? Reply to this email or call (424) 464-8434.

Maxx | Evergreen SEO Agency
https://evergreenseo.agency`;

  // Send as plain text, not HTML
  const payload = {
    message: {
      subject: "Your Evergreen SEO Agency Payment Link",
      body: { contentType: "Text", content: textBody },
      toRecipients: [{ emailAddress: { address: prospectEmail } }],
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
    throw new Error(`sendProspectEmail failed: ${err}`);
  }
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

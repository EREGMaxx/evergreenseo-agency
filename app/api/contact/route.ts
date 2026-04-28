import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      businessName,
      website,
      revenue,
      challenge,
      partnerRef,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    // Validate required fields
    if (!name || !businessName || !revenue || !challenge) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log submission with full attribution
    console.log("New contact form submission:", {
      name,
      businessName,
      website,
      revenue,
      challenge,
      attribution: {
        partnerRef: partnerRef || null,
        utmSource: utmSource || null,
        utmMedium: utmMedium || null,
        utmCampaign: utmCampaign || null,
      },
      timestamp: new Date().toISOString(),
    });

    // Email integration (Resend, SendGrid, etc.) — uncomment when ready:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@evergreenseo.agency',
    //   to: 'maxx@evergreenseo.agency',
    //   subject: `New SEO Audit Request — ${businessName}${partnerRef ? ` [via ${partnerRef}]` : ''}`,
    //   html: `
    //     <h2>New Audit Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Business:</strong> ${businessName}</p>
    //     <p><strong>Website:</strong> ${website || 'Not provided'}</p>
    //     <p><strong>Monthly Revenue:</strong> ${revenue}</p>
    //     <p><strong>Challenge:</strong> ${challenge}</p>
    //     <hr />
    //     <h3>Attribution</h3>
    //     <p><strong>Partner Ref:</strong> ${partnerRef || 'Direct / Unknown'}</p>
    //     <p><strong>UTM Source:</strong> ${utmSource || '—'}</p>
    //     <p><strong>UTM Medium:</strong> ${utmMedium || '—'}</p>
    //     <p><strong>UTM Campaign:</strong> ${utmCampaign || '—'}</p>
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

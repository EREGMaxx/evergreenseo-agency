import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, businessName, website, revenue, challenge } = body;

    // Validate required fields
    if (!name || !businessName || !revenue || !challenge) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, integrate with your email service (Resend, SendGrid, etc.)
    // For now, log the submission and return success
    console.log("New contact form submission:", {
      name,
      businessName,
      website,
      revenue,
      challenge,
      timestamp: new Date().toISOString(),
    });

    // If you have a Resend API key, you can send an email like this:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@evergreenseo.agency',
    //   to: 'maxx@evergreenseo.agency',
    //   subject: `New SEO Audit Request — ${businessName}`,
    //   html: `
    //     <h2>New Audit Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Business:</strong> ${businessName}</p>
    //     <p><strong>Website:</strong> ${website || 'Not provided'}</p>
    //     <p><strong>Monthly Revenue:</strong> ${revenue}</p>
    //     <p><strong>Biggest Challenge:</strong></p>
    //     <p>${challenge}</p>
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

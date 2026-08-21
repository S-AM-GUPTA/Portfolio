import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (name, email, and message)." },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "samfgst3@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

    let emailSent = false;
    let serviceUsed = "none";

    // 1. Try sending via Resend API if API Key is configured
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          subject: subject ? `[Portfolio] ${subject}` : `New Message from ${name}`,
          replyTo: email,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #2b1a05; background-color: #faf7f3; border-radius: 12px;">
              <h2 style="color: #2b1a05; border-bottom: 2px solid #ffca78; padding-bottom: 8px;">✦ New Portfolio Message</h2>
              <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
              <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
              <div style="margin-top: 16px; padding: 16px; background-color: #efe9da; border-left: 4px solid #2b1a05; border-radius: 6px;">
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #888;">Sent directly from Saksham Gupta's Portfolio Website.</p>
            </div>
          `,
        });
        emailSent = true;
        serviceUsed = "Resend API";
      } catch (resendErr) {
        console.error("Resend delivery failed:", resendErr);
      }
    }

    // 2. Try sending via Web3Forms if access key is configured
    if (!emailSent && web3FormsKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name,
            email,
            subject: subject || `New Portfolio Message from ${name}`,
            message,
            from_name: `${name} (via Portfolio)`,
          }),
        });

        const result = await response.json();
        if (result.success) {
          emailSent = true;
          serviceUsed = "Web3Forms";
        }
      } catch (web3Err) {
        console.error("Web3Forms delivery failed:", web3Err);
      }
    }

    // Log message to server console as backup audit log
    console.log(`[CONTACT FORM SUBMISSION] [${new Date().toISOString()}]`);
    console.log(`Name: ${name} | Email: ${email} | Subject: ${subject}`);
    console.log(`Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      serviceUsed,
      fallbackMailto: `mailto:${recipientEmail}?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(`Hi Saksham,\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`,
    });
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again or email directly." },
      { status: 500 }
    );
  }
}

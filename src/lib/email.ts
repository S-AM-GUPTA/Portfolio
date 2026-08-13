import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTP(email: string, otp: string) {
  // If no API key is provided, just log it for development/testing
  if (!process.env.RESEND_API_KEY) {
    console.log('\n=============================================');
    console.log(`[MOCK EMAIL] To: ${email}`);
    console.log(`[MOCK EMAIL] Subject: Your Login OTP`);
    console.log(`[MOCK EMAIL] OTP: ${otp}`);
    console.log('=============================================\n');
    return { success: true, mocked: true };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Change to a verified domain when going to production
      to: [email],
      subject: 'Your Login Code',
      html: `
        <div style="font-family: sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #333; text-align: center;">Your Login Code</h2>
          <p style="color: #555; font-size: 16px; text-align: center;">Use the following 6-digit code to log into your account:</p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <strong style="font-size: 32px; letter-spacing: 5px; color: #111;">${otp}</strong>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center;">This code will expire in 10 minutes.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error };
  }
}

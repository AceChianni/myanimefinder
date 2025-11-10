// /src/app/api/sendEmail/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // ✅ HTML Email Content — styled but no React component needed
    const html = `
      <div style="padding: 16px; font-family: sans-serif;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: "Anime Finder Contact <onboarding@resend.dev>",
      to: "acechianni@icloud.com", // ✅ your inbox
      subject: `New Contact Form From ${name}`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

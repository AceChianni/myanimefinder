// pages/api/sendEmail.js
import { Resend } from "resend";
import { EmailTemplate } from "../../src/components/EmailTemplate";
import ReactDOMServer from "react-dom/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    try {
      const emailContent = ReactDOMServer.renderToStaticMarkup(
        <EmailTemplate
          name={name}
          email={email}
          phone={phone}
          message={message}
        />
      );
      console.log("Form data:", { name, email, phone, message });

      const response = await resend.emails.send({
        from: "chantricelacabe@gmail.com", // verified sender
        to: [email], // Send to the user's email or another email
        subject: "New Contact Form Submission",
        html: emailContent,
      });

      res.status(200).json({
        success: true,
        message: "Email sent successfully!",
        data: response,
      });
    } catch (error) {
      console.error("Error while sending email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send email.",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

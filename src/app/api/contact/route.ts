import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  email: string;
  subject: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const fromEmail = (body.email || "").trim();
    const subject = (body.subject || "").trim();
    const message = (body.message || "").trim();

    if (!fromEmail || !isValidEmail(fromEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!subject) {
      return NextResponse.json({ error: "Subject is required" }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPortRaw = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO || process.env.SMTP_USER || "sampatel3642@gmail.com";

    // For testing: if no SMTP config, just log the message
    if (!smtpHost || !smtpPortRaw || !smtpUser || !smtpPass) {
      console.log("📧 Contact Form Submission:");
      console.log(`From: ${fromEmail}`);
      console.log(`To: ${toEmail}`);
      console.log(`Subject: [Portfolio] ${subject}`);
      console.log(`Message: ${message}`);
      console.log("---");
      
      return NextResponse.json({ 
        ok: true, 
        id: `test-${Date.now()}`,
        note: "Message logged to console (SMTP not configured)"
      });
    }

    const smtpPort = Number(smtpPortRaw);
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      replyTo: fromEmail,
      to: toEmail,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${fromEmail}\n\n${message}`,
      html: `<p><strong>From:</strong> ${fromEmail}</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (error) {
    console.error("/api/contact error", error);
    const message = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

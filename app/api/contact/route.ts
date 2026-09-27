import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactToEmail =
      process.env.CONTACT_TO_EMAIL || 'adika.okelo@zuriconsult.com';

    if (!smtpUser || !smtpPassword || !contactToEmail) {
      console.error('Contact form email configuration is missing');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || smtpUser,
      to: contactToEmail,
      replyTo: email,
      subject: `Website enquiry: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Organization: ${company || 'Not provided'}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
    });

    return NextResponse.json(
      { success: true, message: 'Message sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

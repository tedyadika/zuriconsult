import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
      console.error('Contact form email configuration is missing');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL || 'Adika.okelo@outlook.com',
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

    if (error) {
      console.error('Contact form email error:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 502 }
      );
    }

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

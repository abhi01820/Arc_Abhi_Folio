import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, subject, company, purpose } = await req.json();

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('SMTP credentials not configured, skipping email send');
      // Return success anyway so download works
      return NextResponse.json({ 
        success: true, 
        message: 'Information received successfully (email not configured)' 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Check if this is a resume download request or regular contact
    const isResumeDownload = subject === 'Resume Download Request';
    
    const emailSubject = isResumeDownload 
      ? `📄 Resume Downloaded by ${name}` 
      : `💌 New message from ${name}`;

    const emailBody = isResumeDownload 
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">🎉 Someone Downloaded Your Resume!</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information:</h3>
            <p><strong>📧 Name:</strong> ${name}</p>
            <p><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>🏢 Company:</strong> ${company}</p>` : ''}
            <p><strong>🎯 Purpose:</strong> ${purpose}</p>
          </div>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
            <p style="margin: 0; color: #0c4a6e;">
              <strong>� Tip:</strong> This could be a potential opportunity! Consider reaching out to them.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            This notification was automatically generated from your portfolio website.
          </p>
        </div>
      `
      : `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'mekalaabhilash01820@gmail.com',
      subject: emailSubject,
      html: emailBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}

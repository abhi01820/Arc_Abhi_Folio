import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Present' : 'Missing');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ 
        success: false, 
        error: 'Email credentials not configured' 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send test email
    const info = await transporter.sendMail({
      from: `"Test Email" <${process.env.EMAIL_USER}>`,
      to: 'mekalaabhilash01820@gmail.com',
      subject: '🧪 Test Email - Resume Download Notification System',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">🧪 Email Test Successful!</h2>
          <p>This is a test email to verify that your email notification system is working correctly.</p>
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
            <p><strong>✅ Email system is working!</strong></p>
            <p>You should now receive notifications when someone:</p>
            <ul>
              <li>Requests to download your resume</li>
              <li>Actually downloads your resume</li>
            </ul>
          </div>
          <p><small>Test sent at: ${new Date().toLocaleString()}</small></p>
        </div>
      `
    });

    console.log('Test email sent successfully:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }, { status: 500 });
  }
}
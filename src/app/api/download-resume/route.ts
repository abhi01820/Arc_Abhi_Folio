import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const REQUESTS_FILE = path.join(process.cwd(), 'download-requests.json');

interface DownloadRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  purpose: string;
  status: 'pending' | 'approved' | 'denied';
  requestedAt: string;
  respondedAt?: string;
}

function getRequests(): DownloadRequest[] {
  try {
    if (fs.existsSync(REQUESTS_FILE)) {
      const data = fs.readFileSync(REQUESTS_FILE, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading requests file:', error);
    return [];
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ 
        error: 'Email parameter is required' 
      }, { status: 400 });
    }

    const requests = getRequests();
    const userRequest = requests.find(r => r.email.toLowerCase() === email.toLowerCase() && r.status === 'approved');

    if (!userRequest) {
      return NextResponse.json({ 
        error: 'Access denied. You do not have permission to download this resume.',
        message: 'The author has not granted you access to download the resume. Your request may be pending or denied.'
      }, { status: 403 });
    }

    // Check if resume file exists
    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
    
    if (!fs.existsSync(resumePath)) {
      return NextResponse.json({ 
        error: 'Resume file not found' 
      }, { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(resumePath);

    // Send download notification email
    await sendDownloadNotificationEmail(userRequest);

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Abhilash_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error('Error downloading resume:', error);
    return NextResponse.json({ 
      error: 'Failed to download resume' 
    }, { status: 500 });
  }
}

async function sendDownloadNotificationEmail(request: DownloadRequest) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email not configured');
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Resume Download Alert" <${process.env.EMAIL_USER}>`,
      to: 'mekalaabhilash01820@gmail.com',
      subject: `🎉 Resume Downloaded by ${request.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">🎉 Your Resume Has Been Downloaded!</h2>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0284c7;">
            <h3 style="color: #1e293b; margin-top: 0;">Download Details:</h3>
            <p><strong>👤 Downloaded by:</strong> ${request.name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${request.email}">${request.email}</a></p>
            <p><strong>🏢 Company:</strong> ${request.company || 'Not provided'}</p>
            <p><strong>🎯 Purpose:</strong> ${request.purpose.replace('-', ' ').toUpperCase()}</p>
            <p><strong>⏰ Downloaded at:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>📅 Originally requested:</strong> ${new Date(request.requestedAt).toLocaleString()}</p>
          </div>
          
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #16a34a;">
            <p style="margin: 0; color: #166534;">
              <strong>✅ Success!</strong> Someone has successfully downloaded your resume. This is a great sign of interest in your profile!
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #6b7280;">
              Keep track of all your download requests and approvals in your <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin" style="color: #2563eb; text-decoration: none;">admin dashboard</a>.
            </p>
          </div>
        </div>
      `
    });

    console.log('Download notification email sent successfully');

  } catch (error) {
    console.error('Error sending download notification email:', error);
  }
}
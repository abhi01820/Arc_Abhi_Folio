import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

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

function saveRequests(requests: DownloadRequest[]) {
  try {
    fs.writeFileSync(REQUESTS_FILE, JSON.stringify(requests, null, 2));
  } catch (error) {
    console.error('Error saving requests file:', error);
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const action = searchParams.get('action');

    if (!id || !action || !['approve', 'deny'].includes(action)) {
      return new Response(`
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
            <h2 style="color: #dc2626;">❌ Invalid Request</h2>
            <p>Invalid approval link. Please use the link from the email notification.</p>
          </body>
        </html>
      `, { 
        headers: { 'Content-Type': 'text/html' },
        status: 400 
      });
    }

    const requests = getRequests();
    const requestIndex = requests.findIndex(r => r.id === id);

    if (requestIndex === -1) {
      return new Response(`
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
            <h2 style="color: #dc2626;">❌ Request Not Found</h2>
            <p>Download request not found or may have already been processed.</p>
          </body>
        </html>
      `, { 
        headers: { 'Content-Type': 'text/html' },
        status: 404 
      });
    }

    const request = requests[requestIndex];
    
    if (request.status !== 'pending') {
      return new Response(`
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
            <h2 style="color: #f59e0b;">⚠️ Already Processed</h2>
            <p>This request has already been <strong>${request.status}</strong>.</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p><strong>User:</strong> ${request.name} (${request.email})</p>
              <p><strong>Status:</strong> ${request.status}</p>
              <p><strong>Processed:</strong> ${request.respondedAt ? new Date(request.respondedAt).toLocaleString() : 'N/A'}</p>
            </div>
          </body>
        </html>
      `, { 
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // Update request status
    request.status = action === 'approve' ? 'approved' : 'denied';
    request.respondedAt = new Date().toISOString();
    requests[requestIndex] = request;
    saveRequests(requests);

    // Send notification to user
    await sendUserNotification(request);

    const statusColor = action === 'approve' ? '#16a34a' : '#dc2626';
    const statusIcon = action === 'approve' ? '✅' : '❌';
    const statusText = action === 'approve' ? 'APPROVED' : 'DENIED';

    return new Response(`
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <div style="text-align: center; padding: 40px; background: #f8fafc; border-radius: 12px;">
            <h1 style="color: ${statusColor}; font-size: 48px; margin: 0;">${statusIcon}</h1>
            <h2 style="color: ${statusColor}; margin: 20px 0;">Request ${statusText}</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: left;">
              <p><strong>User:</strong> ${request.name}</p>
              <p><strong>Email:</strong> ${request.email}</p>
              <p><strong>Company:</strong> ${request.company || 'Not provided'}</p>
              <p><strong>Purpose:</strong> ${request.purpose}</p>
            </div>
            <p style="color: #6b7280;">The user has been notified via email.</p>
          </div>
        </body>
      </html>
    `, { 
      headers: { 'Content-Type': 'text/html' }
    });

  } catch (error) {
    console.error('Error processing approval:', error);
    return new Response(`
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h2 style="color: #dc2626;">❌ Error</h2>
          <p>An error occurred while processing the request. Please try again.</p>
        </body>
      </html>
    `, { 
      headers: { 'Content-Type': 'text/html' },
      status: 500 
    });
  }
}

async function sendUserNotification(request: DownloadRequest) {
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

    const isApproved = request.status === 'approved';

    if (isApproved) {
      // For approved requests, send resume as attachment
      const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
      
      // Check if resume file exists
      if (!fs.existsSync(resumePath)) {
        console.error('Resume file not found at:', resumePath);
        return;
      }

      await transporter.sendMail({
        from: `"Abhilash Portfolio" <${process.env.EMAIL_USER}>`,
        to: request.email,
        subject: '✅ Resume Download Approved - Abhilash Mekala',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #16a34a;">✅ Your Resume Download Request Has Been Approved!</h2>
            
            <p>Hello ${request.name},</p>
            
            <p>Great news! Your request to download Abhilash's resume has been approved.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0284c7; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #0c4a6e;">📎 Resume Attached</h3>
              <p style="margin: 0; color: #0c4a6e;">
                <strong>Abhilash's resume is attached to this email.</strong> You can download it directly from your email client.
              </p>
            </div>
            
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
              <p style="margin: 0; color: #065f46;">
                <strong>Thank you for your interest!</strong> If you have any questions or would like to discuss opportunities, please feel free to reach out.
              </p>
            </div>
            
            <p style="margin-top: 30px;">Best regards,<br>Abhilash Mekala</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This email was sent because you requested access to Abhilash's resume through his portfolio website.</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: 'Abhilash_Mekala_Resume.pdf',
            path: resumePath,
            contentType: 'application/pdf'
          }
        ]
      });
    } else {
      // For denied requests, send notification without attachment
      await transporter.sendMail({
        from: `"Abhilash Portfolio" <${process.env.EMAIL_USER}>`,
        to: request.email,
        subject: '❌ Resume Download Request - Update',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">❌ Resume Download Request Update</h2>
            
            <p>Hello ${request.name},</p>
            
            <p>Thank you for your interest in my resume. Unfortunately, I am unable to grant access at this time.</p>
            
            <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 20px 0;">
              <p style="margin: 0; color: #991b1b;">
                <strong>Access Not Granted:</strong> Your request has been reviewed but access has not been approved at this time.
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
              <p style="margin: 0; color: #475569;">
                <strong>Alternative:</strong> If you have any questions or would like to connect directly, please feel free to reach out through the contact form on my website.
              </p>
            </div>
            
            <p style="margin-top: 30px;">Thank you for your understanding.</p>
            <p>Best regards,<br>Abhilash Mekala</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This email was sent in response to your resume download request.</p>
            </div>
          </div>
        `
      });
    }

  } catch (error) {
    console.error('Error sending user notification:', error);
  }
}
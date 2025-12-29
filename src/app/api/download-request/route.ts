import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Simple file-based storage for download requests
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

export async function POST(req: Request) {
  try {
    const { name, email, company, purpose } = await req.json();

    // Validate required fields
    if (!name || !email || !purpose) {
      return NextResponse.json({ success: false, message: 'Name, email, and purpose are required' }, { status: 400 });
    }

    // Check if user already has a pending/approved request
    const requests = getRequests();
    const existingRequest = requests.find(r => r.email === email);
    
    if (existingRequest) {
      // Still send notification email to admin for tracking
      console.log('📧 Sending notification for duplicate/existing request...');
      await sendNotificationEmail({
        ...existingRequest,
        name: name, // Update with new name if different
        company: company || existingRequest.company,
        purpose: purpose
      }, true); // true indicates this is a duplicate
      
      if (existingRequest.status === 'approved') {
        return NextResponse.json({ 
          success: true, 
          approved: true,
          message: 'Download approved! Your download will start shortly.' 
        });
      } else if (existingRequest.status === 'pending') {
        return NextResponse.json({ 
          success: true, 
          approved: false,
          message: 'Your download request is pending approval. Please check back later.' 
        });
      } else if (existingRequest.status === 'denied') {
        return NextResponse.json({ 
          success: false, 
          approved: false,
          message: 'Access denied. The author has not granted permission to download the resume.' 
        });
      }
    }

    // Create new request
    const newRequest: DownloadRequest = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      purpose,
      status: 'pending',
      requestedAt: new Date().toISOString()
    };

    requests.push(newRequest);
    saveRequests(requests);

    // Send notification email to you
    await sendNotificationEmail(newRequest);

    return NextResponse.json({ 
      success: true, 
      approved: false,
      message: 'Your download request has been submitted and is pending approval. You will be notified once approved.' 
    });

  } catch (error) {
    console.error('Error processing download request:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error processing request. Please try again.' 
    }, { status: 500 });
  }
}

export async function GET(req: Request) {
  // Get all requests (for admin interface)
  const requests = getRequests();
  return NextResponse.json({ requests });
}

async function sendNotificationEmail(request: DownloadRequest, isDuplicate = false) {
  try {
    console.log('🔄 Attempting to send notification email...');
    console.log('📧 Email User:', process.env.EMAIL_USER);
    console.log('🔑 Email Pass Available:', !!process.env.EMAIL_PASS);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('❌ Email not configured');
      return;
    }

    console.log('🔧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('✅ Email transporter created, sending email...');
    const approveUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/approve-download?id=${request.id}&action=approve`;
    const denyUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/approve-download?id=${request.id}&action=deny`;

    const subjectPrefix = isDuplicate ? '🔄 Repeat Request: ' : '📄 New Request: ';
    const result = await transporter.sendMail({
      from: `"Portfolio Download Request" <${process.env.EMAIL_USER}>`,
      to: 'mekalaabhilash01820@gmail.com',
      subject: `${subjectPrefix}Resume Download Request from ${request.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">${isDuplicate ? '🔄 Repeat Resume Download Request' : '📄 New Resume Download Request'}</h2>
          ${isDuplicate ? '<div style="background: #fef3c7; padding: 10px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f59e0b;"><p style="margin: 0; color: #92400e;"><strong>⚠️ Note:</strong> This person has submitted a request before with the same email address.</p></div>' : ''}
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Request Details:</h3>
            <p><strong>📧 Name:</strong> ${request.name}</p>
            <p><strong>✉️ Email:</strong> <a href="mailto:${request.email}">${request.email}</a></p>
            <p><strong>🏢 Company:</strong> ${request.company || 'Not provided'}</p>
            <p><strong>🎯 Purpose:</strong> ${request.purpose}</p>
            <p><strong>⏰ Requested:</strong> ${new Date(request.requestedAt).toLocaleString()}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${approveUrl}" style="display: inline-block; background: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 0 10px; font-weight: bold;">
              ✅ APPROVE DOWNLOAD
            </a>
            <a href="${denyUrl}" style="display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 0 10px; font-weight: bold;">
              ❌ DENY ACCESS
            </a>
          </div>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
            <p style="margin: 0; color: #0c4a6e;">
              <strong>💡 Note:</strong> Click the buttons above to approve or deny this download request. The user will be notified of your decision.
            </p>
          </div>
        </div>
      `
    });
    
    console.log('🎉 Notification email sent successfully!');
    console.log('📧 Message ID:', result.messageId);

  } catch (error) {
    console.error('❌ Error sending notification email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
  }
}
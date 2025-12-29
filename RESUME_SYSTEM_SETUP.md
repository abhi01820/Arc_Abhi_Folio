# Environment Variables Setup Guide

This application requires the following environment variables to be set in your `.env.local` file:

## Email Configuration (Required for notifications)

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

### How to get Gmail App Password:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled
4. Go to "App passwords"
5. Generate a new app password for "Mail"
6. Use this 16-character password (not your regular Gmail password)

## Base URL Configuration (Optional)

```env
NEXTAUTH_URL=http://localhost:3001
```

This is used for generating approval links in emails. If not set, it defaults to `http://localhost:3000`.

## Example .env.local file:

```env
EMAIL_USER=yourname@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
NEXTAUTH_URL=http://localhost:3001
```

## Admin Access

The admin dashboard is protected with a simple password: `admin123`

You can access it at: `http://localhost:3001/admin`

## Features Implemented:

1. **Request System**: Users must request access to download your resume
2. **Email Notifications**: You receive emails when someone requests access
3. **Approval Workflow**: Click approve/deny buttons in emails or use admin dashboard
4. **User Notifications**: Users get notified when their request is approved/denied
5. **Secure Downloads**: Only approved users can download the resume

## File Storage:

Download requests are stored in `download-requests.json` in the project root. This file is automatically created when the first request is made.

## Testing the System:

1. Start the server: `npm run dev`
2. Visit `http://localhost:3001`
3. Click "Request Resume" button
4. Fill out the form and submit
5. Check the `download-requests.json` file
6. Visit `http://localhost:3001/admin` to manage requests
7. Or use the email links to approve/deny requests
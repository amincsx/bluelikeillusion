# Vercel Functions Setup Guide

## What We've Created

1. **API Function** (`api/contact.js`) - Handles form submissions
2. **Vercel Config** (`vercel.json`) - Configuration for deployment
3. **Updated Forms** - Both English and Persian versions now send data to the API

## Next Steps to Deploy

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Install Vercel for GitHub when prompted

### Step 2: Deploy Your Project
1. In Vercel dashboard, click "New Project"
2. Import your GitHub repository
3. Vercel will automatically detect the configuration
4. Click "Deploy"

### Step 3: Get Your API URL
After deployment, Vercel will give you a URL like:
- `https://your-project.vercel.app`

Your API endpoint will be:
- `https://your-project.vercel.app/api/contact`

### Step 4: Update Form URLs (Important!)
You need to update the fetch URLs in your HTML files to use your Vercel domain:

**In `create.html` and `create-fa.html`:**
```javascript
// Change this line:
const response = await fetch('/api/contact', {

// To this (replace with your actual Vercel URL):
const response = await fetch('https://your-project.vercel.app/api/contact', {
```

### Step 5: Test Your Form
1. Visit your deployed website
2. Fill out the form
3. Check Vercel dashboard for function logs
4. You should see the form data in the logs

## How It Works

1. User fills out form on your website
2. JavaScript sends data to Vercel function
3. Function processes the data and logs it
4. Function returns success response
5. User sees success message

## Next Enhancement: Email Notifications

To receive emails when someone submits the form, we can add email functionality to the API function using services like:
- SendGrid
- Nodemailer with Gmail
- Resend

Would you like me to implement email notifications next?

## Troubleshooting

- **CORS Errors**: The `vercel.json` file includes CORS headers
- **Function Timeout**: Set to 10 seconds in config
- **Form Validation**: Basic validation included in the function

## File Structure
```
your-project/
├── api/
│   └── contact.js          ← Vercel function
├── create.html             ← Updated form
├── create-fa.html          ← Updated Persian form
├── vercel.json             ← Vercel configuration
└── VERCEL_SETUP.md         ← This guide
``` 
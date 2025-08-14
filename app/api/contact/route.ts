import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { projectName, businessType, description, preferences, email, phone } = await req.json();

    if (!projectName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Form submission received:', {
      projectName,
      businessType,
      description,
      preferences,
      email,
      phone,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully!',
      data: { projectName, businessType, email, phone }
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


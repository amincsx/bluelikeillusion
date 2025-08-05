export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data from the request body
    const {
      projectName,
      businessType,
      description,
      preferences,
      email,
      phone
    } = req.body;

    // Validate required fields
    if (!projectName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the form submission (for debugging)
    console.log('Form submission received:', {
      projectName,
      businessType,
      description,
      preferences,
      email,
      phone,
      timestamp: new Date().toISOString()
    });

    // TODO: Add email sending functionality here
    // For now, we'll just return success
    // In the next step, we'll add email functionality

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully!',
      data: {
        projectName,
        businessType,
        email,
        phone
      }
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 
// This file connects your form to MailerLite securely.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // 1. Get keys from Vercel
  const API_KEY = process.env.MAILERLITE_API_KEY;
  const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

  // 2. MailerLite API Endpoint
  // This endpoint is correct for adding a subscriber to a group
  const url = `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // This header is essential for MailerLite authentication
        'X-MailerLite-ApiKey': API_KEY, 
      },
      body: JSON.stringify({
        email: email,
        status: 'active', // Forces immediate confirmation, solving the email issue
      }),
    });

    if (response.status === 200 || response.status === 201) {
      return res.status(200).json({ success: true });
    } else {
      const data = await response.json();
      console.error('MailerLite Error:', data);
      return res.status(500).json({ error: data.error.message || 'Failed to subscribe with MailerLite' });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
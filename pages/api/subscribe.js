export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;
  const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: API_KEY,
        email: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.message });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
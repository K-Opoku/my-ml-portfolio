export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // 🟢 DIRECT FIX: Hardcoding your specific keys here.
  // This bypasses Vercel settings completely.
  const API_KEY = "L0GDS3QACHTOGccj5bXFnw";
  const FORM_ID = "8864506";
  
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

    // Log the error to the Vercel console if it fails
    if (!response.ok) {
      console.error("ConvertKit Error:", data);
      return res.status(500).json({ error: data.message || "Failed to subscribe" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
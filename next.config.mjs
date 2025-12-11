/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 🛡️ SECURITY HEADERS
  async headers() {
    return [
      {
        source: '/:path*', // Apply to all pages
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload' // Forces HTTPS always
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY' // Prevents hackers from putting your site in an iframe (Clickjacking)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Prevents browsers from guessing file types (MIME sniffing)
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin' // Protects user privacy
          }
        ]
      }
    ]
  }
};

export default nextConfig;
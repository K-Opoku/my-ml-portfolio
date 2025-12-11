import "@/styles/globals.css"; // Keep your styles
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* This small tag tracks visitors automatically */}
      <Analytics />
    </>
  );
}
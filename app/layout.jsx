// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import GaPageView from "./components/GaPageView";

export const metadata = {
  title: "DataConSentido",
  description: "Privacidad, Cumplimiento y Tecnología con Sentido",
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // ej: G-XXXXXXXXXX

  return (
    <html lang="es">
      <body>
        <Navbar />
        <div className="app-shell">{children}</div>

        {/* Vercel Analytics */}
        <Analytics />
        {GA_ID ? <GaPageView gaId={GA_ID} /> : null}


        {/* Google Analytics 4 */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}

        {/* ✅ Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

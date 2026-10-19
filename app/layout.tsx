import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import MobileTabBar from "@/components/MobileTabBar";
import ConsultationPopup from "@/components/ConsultationPopup";
import "./globals.css";
import "./shared-ui.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rockonesolutions.com"),
  title: "Rock One Solutions | Custom CRM, AI Voice Agents & Tech Development",
  description:
    "Transform your business operations with Rock One Solutions. We specialize in custom CRM systems, AI Voice Agents, dedicated remote teams, and custom web & software development.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    url: "/",
    siteName: "Rock One Solutions",
    type: "website",
    images: ["/rock-one-hero-showcase.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock One Solutions | Custom CRM, AI Voice Agents & Tech Development",
    description:
      "Transform your business operations with Rock One Solutions. We specialize in custom CRM systems, AI Voice Agents, dedicated remote teams, and custom web & software development.",
    images: ["/rock-one-hero-showcase.png"],
  },
};

// JSON-LD Organization Schema for Search Engines
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rock One Solutions",
  "url": "https://rockonesolutions.com",
  "logo": "https://rockonesolutions.com/icon.svg",
  "description": "Rock One Solutions provides custom CRM systems, AI Voice Agents, dedicated remote technical teams, and software development.",
  "knowsAbout": [
    "CRM Systems",
    "AI Voice Agents",
    "Remote Tech Teams",
    "Workflow Automation",
    "Software Development",
    "Web Development"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yfrjgp8e8x");
            `
          }}
        />
      </head>
      <body>
        {children}
        <MobileTabBar />
        <ConsultationPopup />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RMPBCZHBQY"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RMPBCZHBQY');
            `
          }}
        />
      </body>
    </html>
  );
}
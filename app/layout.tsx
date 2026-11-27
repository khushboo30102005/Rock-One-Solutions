import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import MobileTabBar from "@/components/MobileTabBar";
import ConsultationPopup from "@/components/ConsultationPopup";
import JsonLd from "@/components/JsonLd";
import { graph, organizationNode, websiteNode } from "@/lib/schema/builders";
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
  title: "Custom CRM, AI Voice Agents & Software | Rock One Solutions",
  description:
    "Rock One Solutions builds custom CRM systems, AI voice agents, workflow automation and software, and provides dedicated remote tech teams.",
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
    // No title/description here: X falls back to each page's og:title / og:description.
    images: ["/rock-one-hero-showcase.png"],
  },
};

// Site-wide entities, emitted once; pages reference them by @id.
const siteSchema = graph(organizationNode(), websiteNode());

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd id="site-schema" data={siteSchema} />
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
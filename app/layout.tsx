import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import MobileTabBar from "@/components/MobileTabBar";
import "./globals.css";
import "./shared-ui.css";

/**
 * The stylesheet has always asked for Inter but the font was never actually
 * loaded, so the site rendered in whatever the visitor had installed. These are
 * self-hosted at build time by next/font — no runtime request to Google, and no
 * layout shift.
 *
 * --font-sans  body copy, site-wide
 * --font-display  editorial headings; currently scoped to the case study
 */
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
  title: "Rock One Solutions | Website Development and Automation Agency",
  description:
    "Rock One Solutions builds premium websites, revenue automation, CRM workflows, and connected systems that help businesses convert and operate faster.",
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
    title: "Rock One Solutions | Website Development and Automation Agency",
    description:
      "Rock One Solutions builds premium websites, revenue automation, CRM workflows, and connected systems that help businesses convert and operate faster.",
    images: ["/rock-one-hero-showcase.png"],
  },
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

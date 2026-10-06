import type { MetadataRoute } from "next";

const SITE_URL = "https://rockonesolutions.com";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

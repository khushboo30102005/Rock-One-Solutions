import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/blog-data";
import { pillarPages } from "./rock-one-pillars-data";
import { allServices } from "./services/services-data";

const SITE_URL = "https://rockonesolutions.com";
const UPDATED_AT = new Date("2026-09-20T00:00:00+05:30");

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/about/",
  "/services/",
  "/pricing/",
  "/remote-tech-team/",
  "/contact/",
  "/privacy-policy/",
  "/blog/",
  "/work/",
  "/work/auto-parts-crm/",
  "/case-studies/",
  "/case-studies/auto-parts-crm/",
];

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = allServices.map(({ service }) => `/services/${service.slug}/`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}/`);
  const pillarPaths = Object.values(pillarPages).map((page) => `/${page.slug}/`);
  const paths = [...staticPaths, ...servicePaths, ...pillarPaths, ...blogPaths];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: UPDATED_AT,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog/") ? 0.6 : 0.8,
  }));
}

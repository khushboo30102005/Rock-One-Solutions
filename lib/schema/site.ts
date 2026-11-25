/**
 * Single source of truth for business identity used in structured data.
 * Values must match what is visibly published on the site (footer / contact page).
 */

export const SITE_URL = "https://rockonesolutions.com";
export const SITE_NAME = "Rock One Solutions";

/** Default site description, kept in sync with the root layout metadata. */
export const SITE_DESCRIPTION =
  "Transform your business operations with Rock One Solutions. We specialize in custom CRM systems, AI Voice Agents, dedicated remote teams, and custom web & software development.";

/** Site-wide default social image (matches the root layout's openGraph image). */
export const DEFAULT_SHARE_IMAGE = "/rock-one-hero-showcase.png";

/** Official social profiles. Used by the footer and by Organization `sameAs`. */
export const SOCIAL_PROFILES = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/rock-one-solutions/" },
  { name: "Instagram", url: "https://www.instagram.com/rockonesolutions/" },
] as const;

export const BUSINESS = {
  name: SITE_NAME,
  telephone: "+91 8197731627",
  email: "Info@rockonesolutions.com",
  address: {
    streetAddress: "Site No. 157, 9th Main, Sector 06, HSR Layout",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560102",
    addressCountry: "IN",
  },
  areaServed: "India",
  sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
} as const;

/** Builds an absolute URL from a site path, enforcing the trailing-slash canonical form. */
export function absoluteUrl(path = "/"): string {
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  const [pathname, hash] = withLeading.split("#");
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${SITE_URL}${normalized}${hash ? `#${hash}` : ""}`;
}

/** Stable entity identifiers shared across every page. */
export const SCHEMA_IDS = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  webPage: (path: string) => `${absoluteUrl(path)}#webpage`,
  breadcrumb: (path: string) => `${absoluteUrl(path)}#breadcrumb`,
  service: (path: string) => `${absoluteUrl(path)}#service`,
  article: (path: string) => `${absoluteUrl(path)}#article`,
  faq: (path: string) => `${absoluteUrl(path)}#faq`,
  itemList: (path: string) => `${absoluteUrl(path)}#itemlist`,
} as const;

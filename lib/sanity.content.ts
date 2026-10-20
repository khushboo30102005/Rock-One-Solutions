/**
 * Content access layer with Sanity CMS + local fallback.
 *
 * During build (`npm run build`), published CMS content is fetched.
 * If Sanity is unconfigured, unavailable, or returns no data, the existing
 * local data files are used unchanged. A Sanity outage will never break the build.
 */

import { getSanityClient, isSanityConfigured } from "./sanity.client";
import {
  BLOG_POSTS_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
  WORK_PROJECTS_QUERY,
  GOOGLE_REVIEWS_QUERY,
  CLIENT_LOGOS_QUERY,
  BLOG_SLUGS_QUERY,
} from "./sanity.queries";
import {
  blogPosts as localBlogPosts,
  getPostBySlug as localGetPostBySlug,
  type BlogPost,
  type BlogBlock,
  type BlogFaq,
} from "@/app/blog/blog-data";
import {
  workProjects as localWorkProjects,
  websiteLaunches as localWebsiteLaunches,
  crmProjectScreens as localCrmProjectScreens,
  type WorkProject,
  type WebsiteLaunch,
  type CrmProjectScreen,
} from "@/app/work/work-data";

// ─── Types from Sanity raw responses ───────────────────────────────────────

type SanityImageRef = {
  asset?: { _id: string; url: string };
  alt?: string;
  caption?: string;
};

type SanityBlogPost = {
  _id: string;
  title: string;
  cardTitle?: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  heroImage?: SanityImageRef;
  socialImage?: { asset?: { _id: string; url: string } };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
  faqs?: { question: string; answer: string }[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  displayOrder?: number;
};

type SanityWorkProject = {
  _id: string;
  clientName: string;
  projectTitle: string;
  slug: string;
  summary: string;
  description?: string;
  projectCategory?: string;
  servicesDelivered?: string[];
  coverImage?: SanityImageRef;
  imageMode?: string;
  screenshotGallery?: (SanityImageRef & {
    label?: string;
    title?: string;
    description?: string;
    width?: number;
    height?: number;
  })[];
  projectHref?: string;
  caseStudyHref?: string;
  liveHref?: string;
  ctaLabel?: string;
  external?: boolean;
  displayOrder?: number;
};

type SanityGoogleReview = {
  _id: string;
  reviewerName: string;
  company?: string;
  reviewerRole?: string;
  fullReview: string;
  shortReview?: string;
  rating: number;
  reviewDate: string;
  googleReviewUrl?: string;
  verifiedOnGoogle?: boolean;
  displayOrder?: number;
};

type SanityClientLogo = {
  _id: string;
  clientName: string;
  logo?: SanityImageRef;
  clientWebsiteUrl?: string;
  projectCategory?: string;
  logoBackground?: string;
  fit?: string;
  displayOrder?: number;
};

// ─── Portable Text → BlogBlock converter ───────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function portableTextToBlocks(blocks: any[]): BlogBlock[] {
  if (!blocks || !Array.isArray(blocks)) return [];

  const result: BlogBlock[] = [];

  for (const block of blocks) {
    if (block._type !== "block") continue;

    const style = block.style || "normal";

    if (style === "h2") {
      result.push({ type: "h2", text: extractPlainText(block) });
      continue;
    }

    if (style === "blockquote") {
      result.push({ type: "quote", text: extractPlainText(block) });
      continue;
    }

    // Check if this is a list item
    if (block.listItem === "bullet") {
      // Collect consecutive bullet items
      const lastBlock = result[result.length - 1];
      if (lastBlock && lastBlock.type === "ul") {
        lastBlock.items.push(extractPlainText(block));
      } else {
        result.push({ type: "ul", items: [extractPlainText(block)] });
      }
      continue;
    }

    // Check for links (rich blocks)
    const hasLinks = block.markDefs?.some(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (m: any) => m._type === "link"
    );

    if (hasLinks && block.children) {
      const parts = buildRichParts(block);
      if (parts.length > 0) {
        result.push({ type: "rich", parts });
        continue;
      }
    }

    // Plain paragraph
    result.push({ type: "p", text: extractPlainText(block) });
  }

  return result;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractPlainText(block: any): string {
  if (!block.children) return "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return block.children.map((c: any) => c.text || "").join("");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildRichParts(block: any): { text: string; href?: string }[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markDefs: Record<string, any> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const md of (block.markDefs || []) as any[]) {
    markDefs[md._key] = md;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (block.children || []).map((child: any) => {
    const linkMark = (child.marks || []).find(
      (m: string) => markDefs[m]?._type === "link"
    );
    if (linkMark && markDefs[linkMark]) {
      return { text: child.text || "", href: markDefs[linkMark].href };
    }
    return { text: child.text || "" };
  });
}

// ─── Transform Sanity → local shapes ──────────────────────────────────────

function sanityBlogToLocal(s: SanityBlogPost): BlogPost {
  return {
    slug: s.slug,
    title: s.title,
    cardTitle: s.cardTitle,
    excerpt: s.excerpt,
    category: s.category,
    readTime: s.readTime,
    date: s.publishedDate,
    updatedDate: s.updatedDate,
    author: s.author,
    heroImage: s.heroImage?.asset?.url
      ? {
          src: s.heroImage.asset.url,
          alt: s.heroImage.alt || s.title,
          caption: s.heroImage.caption || "",
        }
      : undefined,
    socialImage: s.socialImage?.asset?.url || undefined,
    faqs: s.faqs as BlogFaq[] | undefined,
    body: portableTextToBlocks(s.body || []),
  };
}

function sanityWorkToLocal(s: SanityWorkProject): WorkProject {
  return {
    slug: s.slug,
    client: s.clientName,
    title: s.projectTitle,
    summary: s.summary,
    description: s.description || "",
    services: s.servicesDelivered || [],
    imageAlt: s.coverImage?.alt || "",
    image: s.coverImage?.asset?.url || "",
    projectHref: s.projectHref || `/work/${s.slug}`,
    caseStudyHref: s.caseStudyHref || "",
    liveHref: s.liveHref,
  };
}

// ─── Safe fetch wrapper ────────────────────────────────────────────────────

async function safeFetch<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: string,
  params: Record<string, any> = {}
): Promise<T | null> {
  if (!isSanityConfigured) return null;
  const client = getSanityClient();
  if (!client) return null;

  try {
    const result = await client.fetch<T>(query, params);
    return result;
  } catch (err) {
    console.warn("[Sanity] Fetch failed, using local fallback:", err);
    return null;
  }
}

// ─── Public API ────────────────────────────────────────────────────────────

/** All published blog posts, ordered for display. */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const sanityPosts = await safeFetch<SanityBlogPost[]>(BLOG_POSTS_QUERY);
  if (sanityPosts && sanityPosts.length > 0) {
    return sanityPosts.map(sanityBlogToLocal);
  }
  return localBlogPosts;
}

/** Single blog post by slug. */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const sanityPost = await safeFetch<SanityBlogPost | null>(BLOG_POST_BY_SLUG_QUERY, { slug });
  if (sanityPost) {
    return sanityBlogToLocal(sanityPost);
  }
  return localGetPostBySlug(slug);
}

/** All blog slugs for static generation. */
export async function getAllBlogSlugs(): Promise<string[]> {
  const sanitySlugs = await safeFetch<{ slug: string }[]>(BLOG_SLUGS_QUERY);
  if (sanitySlugs && sanitySlugs.length > 0) {
    // Merge: CMS slugs + local slugs (in case CMS has fewer)
    const cmsSet = new Set(sanitySlugs.map((s) => s.slug));
    const localSet = new Set(localBlogPosts.map((p) => p.slug));
    return Array.from(new Set([...cmsSet, ...localSet]));
  }
  return localBlogPosts.map((p) => p.slug);
}

/** Work projects (CRM builds, etc.) */
export async function getAllWorkProjects(): Promise<WorkProject[]> {
  const sanityProjects = await safeFetch<SanityWorkProject[]>(WORK_PROJECTS_QUERY);
  if (sanityProjects && sanityProjects.length > 0) {
    return sanityProjects.map(sanityWorkToLocal);
  }
  return localWorkProjects;
}

/** Website launches – not in CMS scope, always local. */
export function getWebsiteLaunches(): WebsiteLaunch[] {
  return localWebsiteLaunches;
}

/** CRM project screens – not in CMS scope, always local. */
export function getCrmProjectScreens(): CrmProjectScreen[] {
  return localCrmProjectScreens;
}

/** Google reviews for the homepage carousel. */
export async function getGoogleReviews(): Promise<
  { quote: string; name: string; date: string; rating: number }[]
> {
  const sanityReviews = await safeFetch<SanityGoogleReview[]>(GOOGLE_REVIEWS_QUERY);
  if (sanityReviews && sanityReviews.length > 0) {
    return sanityReviews.map((r) => ({
      quote: r.fullReview,
      name: r.reviewerName,
      date: r.reviewDate,
      rating: r.rating,
    }));
  }
  // Fallback: return null to signal caller to use inline data
  return [];
}

/** Client logos for the homepage marquee. */
export async function getClientLogos(): Promise<
  { name: string; logo: string; tone?: "dark"; fit?: "mark" }[]
> {
  const sanityLogos = await safeFetch<SanityClientLogo[]>(CLIENT_LOGOS_QUERY);
  if (sanityLogos && sanityLogos.length > 0) {
    return sanityLogos.map((l) => ({
      name: l.clientName,
      logo: l.logo?.asset?.url || "",
      tone: l.logoBackground === "dark" ? ("dark" as const) : undefined,
      fit: l.fit === "mark" ? ("mark" as const) : undefined,
    }));
  }
  return [];
}

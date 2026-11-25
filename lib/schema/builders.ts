/**
 * Type-safe JSON-LD builders. Each builder returns a graph node; combine nodes
 * with `graph()` and render them with <JsonLd />. Site-wide entities
 * (Organization, WebSite) are emitted once in the root layout — page builders
 * only reference them by @id.
 */
import { BUSINESS, SCHEMA_IDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

type JsonPrimitive = string | number | boolean;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue | undefined };

export type SchemaNode = {
  "@type": string | string[];
  "@id"?: string;
  [key: string]: JsonValue | undefined;
};

export type SchemaGraph = {
  "@context": "https://schema.org";
  "@graph": SchemaNode[];
};

const ref = (id: string) => ({ "@id": id });

const collapseWhitespace = (value: string) => value.replace(/\s+/g, " ").trim();

/** Strips the brand suffix some titles carry (e.g. "UX/UI Design | Rock One Solutions"). */
export function stripBrandSuffix(title: string): string {
  return title.replace(/\s*[|–—-]\s*Rock One Solutions\s*$/i, "").trim();
}

export function graph(...nodes: Array<SchemaNode | null | undefined | false>): SchemaGraph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((node): node is SchemaNode => Boolean(node)),
  };
}

/* ---------------------------------------------------------------- site-wide */

export function organizationNode(): SchemaNode {
  return {
    // ProfessionalService is a LocalBusiness → Organization subtype, so one
    // entity covers both the company and its physical studio.
    "@type": "ProfessionalService",
    "@id": SCHEMA_IDS.organization,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    areaServed: { "@type": "Country", name: BUSINESS.areaServed },
    sameAs: BUSINESS.sameAs.length ? [...BUSINESS.sameAs] : undefined,
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "en",
    publisher: ref(SCHEMA_IDS.organization),
  };
}

/* ---------------------------------------------------------------- page-level */

type WebPageInput = {
  path: string;
  name: string;
  description?: string;
  /** WebPage subtype, e.g. AboutPage, ContactPage, CollectionPage. */
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  /** @id of the primary entity the page is about. */
  mainEntityId?: string;
  /** Primary image shown on the page. */
  image?: string;
  hasBreadcrumb?: boolean;
};

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
  mainEntityId,
  image,
  hasBreadcrumb = false,
}: WebPageInput): SchemaNode {
  return {
    "@type": type,
    "@id": SCHEMA_IDS.webPage(path),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: ref(SCHEMA_IDS.website),
    about: mainEntityId ? undefined : ref(SCHEMA_IDS.organization),
    mainEntity: mainEntityId ? ref(mainEntityId) : undefined,
    primaryImageOfPage: image ? { "@type": "ImageObject", url: toAbsoluteUrl(image) } : undefined,
    breadcrumb: hasBreadcrumb ? ref(SCHEMA_IDS.breadcrumb(path)) : undefined,
  };
}

export type BreadcrumbItem = { name: string; path: string };

/** Items must mirror the visible breadcrumb trail, starting at Home. */
export function breadcrumbNode(pagePath: string, items: BreadcrumbItem[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": SCHEMA_IDS.breadcrumb(pagePath),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type ServiceInput = {
  path: string;
  name: string;
  description: string;
  serviceType?: string;
  image?: string;
};

export function serviceNode({ path, name, description, serviceType, image }: ServiceInput): SchemaNode {
  return {
    "@type": "Service",
    "@id": SCHEMA_IDS.service(path),
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    image: image ? toAbsoluteUrl(image) : undefined,
    provider: ref(SCHEMA_IDS.organization),
    areaServed: { "@type": "Country", name: BUSINESS.areaServed },
    mainEntityOfPage: ref(SCHEMA_IDS.webPage(path)),
  };
}

/** Resolves a site-relative or absolute image/asset URL to an absolute URL. */
export function toAbsoluteUrl(src: string): string {
  return new URL(src, SITE_URL).toString();
}

type ArticleInput = {
  type?: "BlogPosting" | "Article";
  path: string;
  headline: string;
  description?: string;
  images?: Array<string | undefined>;
  datePublished?: string;
  dateModified?: string;
  /** Display author name; the company name maps to the Organization entity. */
  author?: string;
  articleSection?: string;
};

export function articleNode({
  type = "BlogPosting",
  path,
  headline,
  description,
  images = [],
  datePublished,
  dateModified,
  author,
  articleSection,
}: ArticleInput): SchemaNode {
  const imageUrls = [...new Set(images.filter((src): src is string => Boolean(src)).map(toAbsoluteUrl))];
  const isCompanyAuthor = !author || author.toLowerCase().startsWith(SITE_NAME.toLowerCase());
  return {
    "@type": type,
    "@id": SCHEMA_IDS.article(path),
    headline,
    description,
    url: absoluteUrl(path),
    image: imageUrls.length ? imageUrls : undefined,
    datePublished,
    dateModified: dateModified ?? datePublished,
    // Company authorship references the single site-wide Organization entity
    // (emitted in the layout) instead of redeclaring it.
    author: isCompanyAuthor
      ? { "@id": SCHEMA_IDS.organization, name: SITE_NAME, url: `${SITE_URL}/` }
      : { "@type": "Person", name: author },
    publisher: ref(SCHEMA_IDS.organization),
    articleSection,
    inLanguage: "en",
    isPartOf: ref(SCHEMA_IDS.website),
    mainEntityOfPage: ref(SCHEMA_IDS.webPage(path)),
  };
}

/** An ordered list of on-site URLs, used as the mainEntity of CollectionPages. */
export function itemListNode(path: string, items: Array<{ name: string; path: string }>): SchemaNode {
  return {
    "@type": "ItemList",
    "@id": SCHEMA_IDS.itemList(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export type FaqItem = { question: string; answer: string };

/** Adapts the site's `{ q, a }` FAQ shape. */
export function faqsFromQa(faqs: ReadonlyArray<{ q: string; a: string }>): FaqItem[] {
  return faqs.map((faq) => ({ question: faq.q, answer: faq.a }));
}

/** Only pass Q&As that are visibly rendered on the same page. */
export function faqPageNode(path: string, faqs: FaqItem[]): SchemaNode | null {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    "@id": SCHEMA_IDS.faq(path),
    url: absoluteUrl(path),
    isPartOf: ref(SCHEMA_IDS.webPage(path)),
    // CMS text can carry stray line breaks; normalise whitespace only.
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: collapseWhitespace(faq.question),
      acceptedAnswer: { "@type": "Answer", text: collapseWhitespace(faq.answer) },
    })),
  };
}

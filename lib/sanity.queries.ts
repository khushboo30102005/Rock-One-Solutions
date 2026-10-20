/** GROQ queries for all CMS content types. */

export const BLOG_POSTS_QUERY = `*[_type == "blogPost" && published == true] | order(displayOrder asc, publishedDate desc) {
  _id,
  title,
  cardTitle,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedDate,
  updatedDate,
  readTime,
  heroImage {
    asset-> { _id, url },
    alt,
    caption
  },
  socialImage {
    asset-> { _id, url }
  },
  body,
  faqs[] { question, answer },
  seoTitle,
  seoDescription,
  canonicalUrl,
  displayOrder
}`;

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
  _id,
  title,
  cardTitle,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedDate,
  updatedDate,
  readTime,
  heroImage {
    asset-> { _id, url },
    alt,
    caption
  },
  socialImage {
    asset-> { _id, url }
  },
  body,
  faqs[] { question, answer },
  seoTitle,
  seoDescription,
  canonicalUrl,
  displayOrder
}`;

export const WORK_PROJECTS_QUERY = `*[_type == "workProject" && published == true] | order(displayOrder asc) {
  _id,
  clientName,
  projectTitle,
  "slug": slug.current,
  summary,
  description,
  projectCategory,
  servicesDelivered,
  coverImage {
    asset-> { _id, url },
    alt
  },
  imageMode,
  screenshotGallery[] {
    asset-> { _id, url },
    alt,
    caption,
    label,
    title,
    description,
    width,
    height
  },
  projectHref,
  caseStudyHref,
  liveHref,
  ctaLabel,
  external,
  displayOrder
}`;

export const GOOGLE_REVIEWS_QUERY = `*[_type == "googleReview" && published == true] | order(displayOrder asc) {
  _id,
  reviewerName,
  company,
  reviewerRole,
  fullReview,
  shortReview,
  rating,
  reviewDate,
  googleReviewUrl,
  verifiedOnGoogle,
  displayOrder
}`;

export const CLIENT_LOGOS_QUERY = `*[_type == "clientLogo" && published == true] | order(displayOrder asc) {
  _id,
  clientName,
  logo {
    asset-> { _id, url },
    alt
  },
  clientWebsiteUrl,
  projectCategory,
  logoBackground,
  fit,
  displayOrder
}`;

export const BLOG_SLUGS_QUERY = `*[_type == "blogPost" && published == true] { "slug": slug.current }`;

export const CASE_STUDY_SLUGS_QUERY = `*[_type == "caseStudy" && published == true] { "slug": slug.current }`;

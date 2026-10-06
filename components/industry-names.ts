/**
 * Single source of truth for the industries we name publicly.
 * Consumed by the homepage IndustrySpecializations grid and by the industry
 * dropdown in ContactForm, so the two lists cannot drift apart.
 */
export const industryNames = [
  "Ecommerce",
  "Manufacturing",
  "Travel & Hospitality",
  "Logistic",
  "Food",
  "Automotive",
  "Real Estate"
] as const;

export type IndustryName = (typeof industryNames)[number];

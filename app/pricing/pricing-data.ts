export type PricingItem = {
  slug: string;
  name: string;
  price: string;
  quoteOnly?: boolean;
  cadence?: string;
  scope: string;
  href: string;
};

export type PricingGroup = {
  index: string;
  name: string;
  intro: string;
  /** Premium applied to the USD-converted price shown to visitors outside India. */
  usdMultiplier: number;
  items: PricingItem[];
};

/** Assumed INR -> USD conversion rate used before the group premium is applied. */
export const INR_TO_USD_RATE = 83;

/** Round a USD amount up to a clean, marketing-friendly figure ending in 9. */
function roundCleanUsd(value: number): number {
  if (value < 1000) {
    return Math.ceil(value / 50) * 50 - 1;
  }
  return Math.ceil(value / 100) * 100 - 1;
}

/**
 * Convert an INR price string (e.g. "₹19,999+") into a premium USD display
 * string (e.g. "$749+"). Non-numeric prices such as "Quote only" pass through
 * unchanged.
 */
export function inrToUsdDisplay(inrPrice: string, multiplier: number): string {
  const digits = inrPrice.replace(/[^0-9]/g, "");
  if (!digits) return inrPrice;
  const hasPlus = inrPrice.includes("+");
  const inrValue = parseInt(digits, 10);
  const usdValue = roundCleanUsd((inrValue / INR_TO_USD_RATE) * multiplier);
  return `$${usdValue.toLocaleString("en-US")}${hasPlus ? "+" : ""}`;
}

export const pricingGroups: PricingGroup[] = [
  {
    index: "01",
    name: "Websites & design",
    intro: "Focused digital work with a clear launch boundary.",
    usdMultiplier: 3,
    items: [
      {
        slug: "landing-pages",
        name: "Landing page",
        price: "₹19,999+",
        scope: "One focused campaign page with offer structure, responsive build, form, and analytics setup.",
        href: "/services/landing-pages/"
      },
      {
        slug: "custom-website-development",
        name: "Business Website",
        price: "₹39,999+",
        scope: "A focused company website covering the core pages needed to explain, build trust, and generate inquiries.",
        href: "/services/custom-website-development/"
      },
      {
        slug: "ecommerce-development",
        name: "eCommerce website",
        price: "₹49,999+",
        scope: "A theme-led storefront with catalog setup, payments, and a standard checkout flow.",
        href: "/services/ecommerce-development/"
      },
      {
        slug: "website-redesign",
        name: "Website redesign",
        price: "₹34,999+",
        scope: "A visual and structural refresh for an existing site, with migration and ranking protection scoped where needed.",
        href: "/services/website-redesign/"
      },
      {
        slug: "ux-ui-design",
        name: "UX/UI design",
        price: "₹24,999+",
        scope: "User flows, core screens, and reusable interface components. Development is separate.",
        href: "/services/ux-ui-design/"
      }
    ]
  },
  {
    index: "02",
    name: "Software & CRM",
    intro: "First versions built around one useful operating workflow.",
    usdMultiplier: 3,
    items: [
      {
        slug: "custom-software-development",
        name: "Custom software",
        price: "₹1,49,999+",
        scope: "One operational tool with the essential roles, records, screens, and reporting needed for a first release.",
        href: "/services/custom-software-development/"
      },
      {
        slug: "app-development",
        name: "Mobile App MVP",
        price: "₹1,49,999+",
        scope: "One cross-platform MVP with core user journeys, backend or API integration, testing, and release-ready builds.",
        href: "/services/app-development/"
      },
      {
        slug: "crm-systems",
        name: "CRM Systems",
        price: "Quote only",
        quoteOnly: true,
        scope: "Scoped around your pipeline, team roles, integrations, documents, reporting, and operational workflows.",
        href: "/services/crm-systems/"
      },
      {
        slug: "erp-systems",
        name: "ERP Systems",
        price: "Quote only",
        quoteOnly: true,
        scope: "Scoped around the required departments, workflows, approvals, integrations, and reporting.",
        href: "/services/erp-systems/"
      }
    ]
  },
  {
    index: "03",
    name: "Automation & AI",
    intro: "A defined use case connected to the tools your team already uses.",
    usdMultiplier: 4,
    items: [
      {
        slug: "workflow-automation",
        name: "Workflow automation",
        price: "₹34,999+",
        scope: "One defined flow that captures, routes, notifies, and records without manual chasing.",
        href: "/services/workflow-automation/"
      },
      {
        slug: "ai-consultation",
        name: "AI automation pilot",
        price: "₹49,999+",
        scope: "One practical AI job tested inside an existing process, with clear controls and handoff.",
        href: "/rock-one-agents-ai-consultation/"
      },
      {
        slug: "ai-voice-agent",
        name: "AI voice agent",
        price: "₹59,999+",
        scope: "One inbound or follow-up call flow with qualification, fallback, and system handoff.",
        href: "/services/ai-voice-agent/"
      }
    ]
  },
  {
    index: "04",
    name: "Monthly work",
    intro: "Ongoing work with a defined monthly responsibility and reporting rhythm.",
    usdMultiplier: 4,
    items: [
      {
        slug: "seo",
        name: "SEO",
        price: "₹19,999+",
        cadence: "/month",
        scope: "Technical improvements and focused page work around the searches your buyers already use.",
        href: "/services/seo/"
      },
      {
        slug: "performance-marketing",
        name: "Performance marketing",
        price: "₹19,999+",
        cadence: "/month",
        scope: "Media management, tracking, and iteration. Advertising spend is kept separate.",
        href: "/services/performance-marketing/"
      },
      {
        slug: "maintenance-support",
        name: "Maintenance & support",
        price: "₹4,999+",
        cadence: "/month",
        scope: "Routine care, updates, backups, and small changes for a website we know.",
        href: "/services/maintenance-support/"
      }
    ]
  }
];

export const publicPricing = pricingGroups.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    group: group.name,
    usdMultiplier: group.usdMultiplier
  }))
);

export function getPublicPricingBySlug(slug: string) {
  return publicPricing.find((item) => item.slug === slug);
}

import type { ReactNode } from "react";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  outcomes: string[];
  /** Optional per-service FAQ. Falls back to serviceDetailFaqs when absent. */
  faqs?: Faq[];
};

export type ServiceCategory = {
  slug: string;
  name: string;
  blurb: string;
  accent: string;
  image: string;
  imageAlt: string;
  icon: ReactNode;
  services: Service[];
};

const ic = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "websites-experience",
    name: "Websites & Experience",
    blurb:
      "Premium, conversion-led websites and interfaces that make your business feel credible in seconds.",
    accent: "#1c5fb8",
    image: "/service-detail-visuals/websites-experience.png",
    imageAlt: "Premium website development workspace with screens, code, and wireframe planning",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <rect x="3" y="4.5" width="18" height="15" rx="2" />
        <path d="M3 9h18M7 6.6h.01M9.5 6.6h.01" />
      </svg>
    ),
    services: [
      {
        slug: "custom-website-development",
        title: "Custom Website Development & Design Services | Rock One Solutions",
        image: "/service-detail-visuals/custom-website-development.png",
        imageAlt: "Custom website development workspace with website screens, code, and wireframes",
        tagline: "Premium, conversion-led websites built to earn trust fast.",
        summary:
          "Get high-converting, lightning-fast custom websites engineered for performance and seamless CMS control by Rock One Solutions. Request a free quote today",
        deliverables: [
          "Bespoke UI design and front-end build",
          "Conversion-focused page structure and copy guidance",
          "Fully responsive across every device",
          "A CMS your team can edit without a developer"
        ],
        outcomes: [
          "A sharper, more credible first impression",
          "More qualified inquiries from the same traffic",
          "A website your team can actually maintain"
        ]
      },
      {
        slug: "ux-ui-design",
        title: "Conversion-Focused UX/UI Web Design Services | Rock One Solutions",
        image: "/service-detail-visuals/ux-ui-design.png",
        imageAlt: "UX and UI design workshop with prototype screens, journey maps, and color swatches",
        tagline: "Interfaces that feel intuitive and look unmistakably yours.",
        summary: "Transform your digital product with user-centric UX/UI web design. We craft high-converting interfaces, interactive wireframes, intuitive prototypes, and scalable design systems for web and mobile.",
        deliverables: [
          "User flows and wireframes",
          "High-fidelity UI and a reusable design system",
          "Interactive prototypes for key journeys",
          "Accessibility and usability review"
        ],
        outcomes: [
          "Lower friction and higher engagement",
          "A consistent, scalable design system",
          "Journeys designed to convert"
        ]
      },
      {
        slug: "website-redesign",
        title: "Website Redesign",
        image: "/service-detail-visuals/website-redesign.png",
        imageAlt: "Website redesign audit workspace with before and after mockups and planning notes",
        tagline: "Turn a dated site into a modern growth asset.",
        summary:
          "A dated site with traffic should not be thrown away blindly. We rebuild the experience, preserve search equity, and hand over a cleaner site your team can run.",
        deliverables: [
          "UX, content, and performance audit",
          "Modern visual redesign",
          "Restructured content and navigation",
          "SEO-safe migration"
        ],
        outcomes: [
          "A modern presence that builds trust",
          "Faster load times and better Core Web Vitals",
          "Rankings preserved through a clean migration"
        ]
      },
      {
        slug: "ecommerce-development",
        title: "eCommerce Development",
        image: "/service-detail-visuals/ecommerce-development.png",
        imageAlt: "Ecommerce storefront development workspace with product, checkout, and order flow materials",
        tagline: "Storefronts built for clean discovery and confident checkout.",
        summary:
          "Shopify and CMS-based storefronts designed for effortless product discovery, a smooth checkout, and an operational handoff your team can actually manage.",
        deliverables: [
          "Store design and build",
          "Product and catalog setup",
          "Checkout and payment integration",
          "Inventory and order workflows"
        ],
        outcomes: [
          "A buying journey that reduces drop-off",
          "Stronger online sales",
          "Operations that scale with orders"
        ]
      }
    ]
  },
  {
    slug: "software-systems",
    name: "Software & Systems",
    blurb:
      "Custom software, CRM, ERP, and automation that replace scattered tools with one clean operating layer.",
    accent: "#4f46e5",
    image: "/service-detail-visuals/software-systems.png",
    imageAlt: "Business software, app, CRM, and ERP planning workspace with laptop and tablet screens",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <rect x="3.5" y="4" width="17" height="6" rx="1.6" />
        <rect x="3.5" y="14" width="17" height="6" rx="1.6" />
        <path d="M7 7h.01M7 17h.01" />
      </svg>
    ),
    services: [
      {
        slug: "custom-software-development",
        title: "Custom Software & Enterprise Solutions | Rock One Solutions",
        image: "/service-detail-visuals/custom-software-development.png",
        imageAlt: "Custom software development workspace with internal tool screens and architecture plans",
        tagline: "Purpose-built tools that replace scattered spreadsheets.",
        summary:
          "Solve complex operational challenges with tailor-made software solutions from Rock One Solutions. Scalable ERPs, secure web portals, and database management.",
        deliverables: [
          "Discovery and solution design",
          "Custom web application build",
          "Role-based access and reporting",
          "Integrations with your existing tools"
        ],
        outcomes: [
          "Fewer manual, error-prone processes",
          "One source of truth for your team",
          "Software that grows with your operation"
        ]
      },
      {
        slug: "app-development",
        title: "Custom Mobile App Development Services | Rock One Solutions",
        image: "/service-detail-visuals/app-development.png",
        imageAlt: "App development workspace with mobile screens, tablet prototype, and user journey map",
        tagline: "Business apps built around real user journeys.",
        summary:
          "Transform your digital ideas into powerful iOS and Android apps. Rock One Solutions delivers user-centric, high-performance mobile app development services.",
        deliverables: [
          "App strategy, user flows, and feature planning",
          "Responsive web app or mobile app interface",
          "Backend, database, and API integration",
          "Testing, deployment, and handover support"
        ],
        outcomes: [
          "A focused app experience your users can adopt quickly",
          "Cleaner operations connected to your business systems",
          "A scalable product foundation for future features"
        ]
      },
      {
        slug: "crm-systems",
        title: "Custom CRM Systems & Development Services | Rock One Solutions",
        image: "/service-detail-visuals/crm-systems.png",
        imageAlt: "CRM systems workspace with lead pipeline screen and follow-up flow planning",
        tagline: "Custom CRM Development & Business Lead Management Systems",
        summary:
          "Streamline your sales pipeline and customer management with custom CRM systems. Rock One Solutions builds tailored CRMs to automate workflows and drive business growth.",
        deliverables: [
          "Lead capture and pipeline setup",
          "Contact and account records",
          "Task, reminder, and follow-up flows",
          "Dashboards and reporting"
        ],
        outcomes: [
          "Faster response and follow-up",
          "Full visibility of the sales pipeline",
          "Fewer lost or forgotten leads"
        ]
      },
      {
        slug: "erp-systems",
        title: "ERP Systems",
        image: "/service-detail-visuals/erp-systems.png",
        imageAlt: "ERP systems workspace with operations dashboard, order documents, and dispatch planning",
        tagline: "Operations, approvals, and reporting in one flow.",
        summary:
          "Connect tasks, departments, approvals, documents, billing, and delivery status into one operating layer that keeps everyone aligned and accountable.",
        deliverables: [
          "Process and module mapping",
          "Approvals and document flows",
          "Billing and delivery tracking",
          "Executive reporting views"
        ],
        outcomes: [
          "Less coordination overhead",
          "Clear status across departments",
          "Sharper operational visibility"
        ]
      },
      {
        slug: "workflow-automation",
        title: "Business Process & Workflow Automation Services | Rock One Solutions",
        image: "/service-detail-visuals/workflow-automation.png",
        imageAlt: "Workflow automation workspace showing form, email, CRM, and approval handoff planning",
        tagline: "Connect the steps and remove the busywork.",
        summary: "Eliminate manual tasks with custom business workflow automation. We seamlessly integrate CRMs, third-party apps, and web forms to streamline operations, save time, and prevent costly errors.",
        deliverables: [
          "Workflow and trigger mapping",
          "Automated handoffs and alerts",
          "Third-party integrations",
          "Monitoring and reporting"
        ],
        outcomes: [
          "Fewer missed steps and delays",
          "More capacity without more headcount",
          "Reliable, repeatable processes"
        ]
      }
    ]
  },
  {
    slug: "growth-marketing",
    name: "Growth & Marketing",
    blurb:
      "SEO, paid media, and automation connected to measurable actions — not vanity reports.",
    accent: "#f35a2b",
    image: "/service-detail-visuals/growth-marketing.png",
    imageAlt: "Performance marketing and SEO planning workspace with analytics and campaign strategy documents",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l3.5-3.5 3 3L20 8" />
        <path d="M20 8h-3.5M20 8v3.5" />
      </svg>
    ),
    services: [
      {
        slug: "seo",
        title: "Technical & Organic Search Engine Optimization (SEO) Services | Rock One",
        image: "/service-detail-visuals/seo.png",
        imageAlt: "SEO strategy workspace with content map, keyword cards, and technical audit notes",
        tagline: "Attract organic, high-intent search traffic.",
        summary:
          "Boost your search engine rankings and organic traffic with data-driven Technical & Content SEO strategies. Comprehensive keyword research, on-page optimization, and technical SEO tailored for business growth.",
        deliverables: [
          "Technical SEO audit and fixes",
          "Keyword and content strategy",
          "On-page and structure optimization",
          "Local and Google Business setup"
        ],
        outcomes: [
          "Higher rankings for terms that matter",
          "More qualified organic traffic",
          "Compounding, long-term visibility"
        ]
      },
      {
        slug: "paid-media",
        title: "Paid Media",
        image: "/service-detail-visuals/paid-media.png",
        imageAlt: "Paid media campaign planning workspace with ad creative, landing page, and budget sheets",
        tagline: "Campaigns measured by qualified inquiries, not vanity metrics.",
        summary:
          "Creative, targeting, landing pages, and budget decisions are tied back to CRM visibility, so you can see which campaigns create usable sales conversations.",
        deliverables: [
          "Campaign strategy and setup",
          "Creative and ad copy",
          "Conversion tracking and A/B tests",
          "Budget and bid optimization"
        ],
        outcomes: [
          "Lower cost per qualified lead",
          "Ad spend tied to real ROI",
          "Faster, measurable pipeline"
        ]
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        image: "/service-detail-visuals/landing-pages.png",
        imageAlt: "Landing page conversion design workspace with tablet mockup, wireframes, and form sketches",
        tagline: "Campaign pages engineered for a single action.",
        summary:
          "Campaign-specific pages built for paid media, SEO, and lead capture — focused, fast, and designed to move a visitor toward one clear next step.",
        deliverables: [
          "Conversion-focused page design",
          "Offer and copy structure",
          "Form and CRM integration",
          "A/B test variants"
        ],
        outcomes: [
          "Higher campaign conversion rates",
          "Clean lead capture into your CRM",
          "Pages you can launch fast"
        ]
      },
      {
        slug: "marketing-automation",
        title: "Marketing Automation",
        image: "/service-detail-visuals/marketing-automation.png",
        imageAlt: "Marketing automation workspace with email journey builder and sales handoff flow",
        tagline: "Turn campaigns into measurable, connected handoffs.",
        summary:
          "Campaign leads pushed straight into CRM, follow-up sequences, and reporting workflows — so marketing and sales finally speak the same language.",
        deliverables: [
          "Lead routing and scoring",
          "Email and follow-up sequences",
          "CRM and analytics integration",
          "Attribution reporting"
        ],
        outcomes: [
          "No lead left without follow-up",
          "A clear view of what's working",
          "Marketing tied to revenue"
        ]
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing",
        image: "/service-detail-visuals/performance-marketing.png",
        imageAlt: "Performance marketing analysis workspace with attribution map and campaign testing materials",
        tagline: "Spend measured against pipeline, not impressions.",
        summary:
          "Full-funnel campaign management where every channel, creative, and keyword is judged on the revenue it produces — with the tracking in place to prove it.",
        deliverables: [
          "Channel strategy and media planning",
          "Conversion tracking and attribution setup",
          "Creative testing and landing page iteration",
          "Weekly performance reporting"
        ],
        outcomes: [
          "Budget shifted to what actually converts",
          "Cost per acquisition you can defend",
          "Campaign spend tied to closed revenue"
        ]
      }
    ]
  },
  {
    slug: "ai-support-care",
    name: "AI, Support & Care",
    blurb:
      "Practical AI guidance plus the maintenance, speed, and security that keep everything running.",
    accent: "#10a8df",
    image: "/service-detail-visuals/ai-support-care.png",
    imageAlt: "AI voice agent and support automation workspace with headset, laptop, and call workflow screen",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
        <path d="M18 15l.7 1.9L20.6 18l-1.9.7L18 20.6l-.7-1.9L15.4 18l1.9-.7z" />
      </svg>
    ),
    services: [
      {
        slug: "ai-consultation",
        title: "AI Consultation",
        image: "/service-detail-visuals/ai-consultation.png",
        imageAlt: "AI consultation workshop with process maps, use-case cards, and assistant interface",
        tagline: "A clear, practical plan to adopt AI where it helps.",
        summary:
          "We analyze your business goals and map a clear, step-by-step AI adoption plan — focused on real, useful outcomes rather than hype.",
        deliverables: [
          "Opportunity and readiness assessment",
          "Prioritized AI use-case roadmap",
          "Tooling and integration guidance",
          "Rollout and enablement plan"
        ],
        outcomes: [
          "Clarity on where AI actually helps",
          "A pragmatic, low-risk roadmap",
          "Faster, smarter internal workflows"
        ]
      },
      {
        slug: "ai-voice-agent",
        title: "Custom AI Voice Agents for Business Automation | Rock One Solutions",
        image: "/service-detail-visuals/ai-voice-agent.png",
        imageAlt: "AI voice agent planning workspace with headset, microphone, call flow, and CRM handoff notes",
        tagline: "Custom AI Voice Agent Development for Automated Business Calls & Leads",
        summary:
          "Automate inbound and outbound calls with custom AI Voice Agents from Rock One Solutions. Integrate instant booking, CRM logging, and smart lead qualification.",
        deliverables: [
          "Voice agent use-case and conversation planning",
          "Call flow, script, and fallback design",
          "CRM, form, calendar, or notification integration",
          "Testing, monitoring, and improvement plan"
        ],
        outcomes: [
          "Faster response for common customer calls",
          "Cleaner lead qualification and appointment handoff",
          "More consistent follow-up without adding manual load"
        ],
        faqs: [
          {
            q: "Can an AI voice agent fully replace our calling team?",
            a: "Not in every case. We use voice agents where the workflow is clear, repeatable, and safe to automate — with human handoff for complex or sensitive conversations."
          },
          {
            q: "Can it connect with our CRM or calendar?",
            a: "Yes. The voice agent can be planned to capture structured details and pass them into your CRM, calendar, forms, notifications, or follow-up workflow."
          },
          {
            q: "Do you help write the call script?",
            a: "Yes. We map the conversation flow, qualification questions, fallback responses, and escalation points before implementation."
          }
        ]
      },
      {
        slug: "maintenance-support",
        title: "Maintenance & Support",
        image: "/service-detail-visuals/maintenance-support.png",
        imageAlt: "Website maintenance and support workspace with update screen, backup drive, and checklist",
        tagline: "Steady care that keeps your site healthy.",
        summary:
          "Updates, fixes, content changes, and dependable care for your live website — so small issues never grow into big ones.",
        deliverables: [
          "Ongoing updates and fixes",
          "Content and change requests",
          "Backups and monitoring",
          "Priority support response"
        ],
        outcomes: [
          "A site that stays secure and current",
          "Quick turnaround on changes",
          "Peace of mind after launch"
        ]
      },
      {
        slug: "speed-optimization",
        title: "Speed Optimization",
        image: "/service-detail-visuals/speed-optimization.png",
        imageAlt: "Website speed optimization workspace with performance waterfall, timer, and audit checklist",
        tagline: "Faster pages, better rankings, happier users.",
        summary:
          "Performance reviews, front-end cleanup, and Core Web Vitals improvements that make your site feel instant and rank better.",
        deliverables: [
          "Performance and Core Web Vitals audit",
          "Asset and image optimization",
          "Code and front-end cleanup",
          "Caching and delivery tuning"
        ],
        outcomes: [
          "Noticeably faster load times",
          "Better search performance",
          "Lower bounce, higher engagement"
        ]
      },
      {
        slug: "security-hosting",
        title: "Security & Hosting",
        image: "/service-detail-visuals/security-hosting.png",
        imageAlt: "Security and hosting workspace with server dashboard, backup drive, and hardware security key",
        tagline: "Reliable hosting and practical protection.",
        summary:
          "Deployment, hosting guidance, backups, and practical hardening — form protection, access review, and monitoring to keep your systems reliable.",
        deliverables: [
          "Hosting and deployment setup",
          "Backups and recovery",
          "Security hardening and access review",
          "Uptime and threat monitoring"
        ],
        outcomes: [
          "Dependable uptime and recovery",
          "Reduced security risk",
          "One less thing to worry about"
        ]
      }
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your goals, users, and constraints, then define what success looks like."
  },
  {
    step: "02",
    title: "Design",
    body: "We shape the experience and architecture, aligning on scope and direction early."
  },
  {
    step: "03",
    title: "Build",
    body: "We develop in clear milestones, with quality checks and steady communication."
  },
  {
    step: "04",
    title: "Launch",
    body: "We ship carefully — testing, monitoring, and a smooth handoff to your team."
  },
  {
    step: "05",
    title: "Optimize",
    body: "We measure, refine, and support, so results compound long after go-live."
  }
];

/* Shown on every service detail page: what a prospect does next, and how
   quickly they hear back. Kept generic so it stays true for all services. */
export const nextSteps = [
  {
    step: "01",
    title: "Send us the brief",
    body: "Share your goal, timeline, and budget range. A two-line message is enough to start — no formal spec required."
  },
  {
    step: "02",
    title: "Get a scoped proposal",
    body: "Within two working days you get a written scope, milestone plan, and fixed price for the work as described."
  },
  {
    step: "03",
    title: "Start with a clear plan",
    body: "Once approved, we set the milestones, name your point of contact, and begin — with progress visible each week."
  }
];

/* Fallback FAQ used when a service does not define its own `faqs`. */
export const serviceDetailFaqs: Faq[] = [
  {
    q: "How quickly can we get a quote?",
    a: "Most scopes come back within two working days. If the requirement is complex, we will tell you within a day what else we need to price it properly."
  },
  {
    q: "Do you work with fixed prices or hourly rates?",
    a: "Defined project work is quoted at a fixed price against a written scope. Ongoing support and retained work runs on a monthly or hourly agreement, whichever fits better."
  },
  {
    q: "What do you need from us to begin?",
    a: "A clear goal, a decision maker who can approve scope, and access to any existing systems. We handle the technical discovery ourselves."
  },
  {
    q: "Can you work with our existing team or platform?",
    a: "Yes. We regularly extend in-house teams and build on top of existing sites, CRMs, and hosting rather than insisting on a rebuild."
  },
  {
    q: "What happens after launch?",
    a: "You get a handover, documentation, and a support window. Ongoing maintenance, optimization, and feature work are available as a separate agreement."
  }
];

const serviceSpecificFaqs: Record<string, Faq> = {
  "custom-website-development": {
    q: "How many pages does a typical first website include?",
    a: "Most first builds start with the pages needed to explain the offer clearly: home, services, about, contact, and the key service or landing pages. We confirm the exact page count before pricing."
  },
  "ux-ui-design": {
    q: "Do we receive editable design files?",
    a: "Yes. For UX/UI engagements, we can hand over the working design files, key components, and screen notes so your developers are not left with flat images."
  },
  "website-redesign": {
    q: "Will we lose Google rankings during a redesign?",
    a: "The goal is to preserve what already works. We review URLs, redirects, metadata, content structure, and technical health before launch so the redesign does not treat your existing visibility casually."
  },
  "ecommerce-development": {
    q: "Do you recommend Shopify or a custom store?",
    a: "Shopify is usually best when speed, catalog management, and checkout reliability matter most. A custom store makes sense when the buying flow, pricing, or operations are too specific for a standard setup."
  },
  "custom-software-development": {
    q: "When is custom software worth building?",
    a: "It is worth building when repeated manual work, scattered records, or tool limitations are costing more than a focused system would. We help decide this before suggesting development."
  },
  "app-development": {
    q: "Can you build only an app, or does it need a backend too?",
    a: "Most useful business apps need a backend, database, or integration layer. We scope the full workflow early so the app is not just a screen without operational support behind it."
  },
  "crm-systems": {
    q: "Can this work with WhatsApp, Excel, and existing website forms?",
    a: "Yes, in many cases. We can connect forms, lead sources, spreadsheets, and follow-up reminders into a cleaner CRM flow without forcing your team to abandon everything on day one."
  },
  "erp-systems": {
    q: "What should be clear before starting an ERP build?",
    a: "Approvals, departments, documents, and status rules need to be mapped first. If the operating process is unclear, we begin with process mapping before building screens."
  },
  "workflow-automation": {
    q: "Which workflows should be automated first?",
    a: "Start with frequent, rule-based handoffs: new inquiries, reminders, status updates, approvals, reports, and alerts. We avoid automating unclear work until the process is stable."
  },
  seo: {
    q: "Do you guarantee rankings?",
    a: "No honest SEO partner can guarantee a specific ranking. What we do guarantee is technical cleanup, better page structure, clear reporting, and content aimed at searches your buyers actually use."
  },
  "paid-media": {
    q: "What budget is too small for paid media?",
    a: "If the budget cannot produce enough data to judge leads, it is usually too small. We will tell you before launch if SEO, landing pages, or tracking cleanup should come first."
  },
  "landing-pages": {
    q: "Can one landing page support multiple campaigns?",
    a: "Sometimes, but focused pages usually perform better. We often create one core page first, then adapt variants for different audiences, offers, or traffic sources."
  },
  "marketing-automation": {
    q: "Can automation improve follow-up without annoying leads?",
    a: "Yes. The key is timing, relevance, and human handoff. We design sequences around useful next steps, not endless generic messages."
  },
  "performance-marketing": {
    q: "How do you decide what is working?",
    a: "We look beyond clicks and impressions. Campaigns are judged by qualified inquiries, cost per useful lead, CRM movement, and whether the channel creates sales conversations."
  },
  "ai-consultation": {
    q: "Will you sell us a chatbot by default?",
    a: "No. We start with the business process and decide whether an assistant, workflow, document automation, or no AI at all is the right answer."
  },
  "maintenance-support": {
    q: "Can support include small content and design changes?",
    a: "Yes. Maintenance can cover updates, fixes, content changes, plugin checks, small improvements, and routine support based on the plan we agree."
  },
  "speed-optimization": {
    q: "Can every website become extremely fast?",
    a: "Not every stack has the same ceiling, but most sites have clear improvements in image weight, scripts, caching, fonts, and front-end structure."
  },
  "security-hosting": {
    q: "Do you host the site for us or guide our team?",
    a: "Both are possible. We can set up hosting, advise on the right platform, harden access, configure backups, and document the setup for your team."
  }
};

export function faqsForService(service: Service): Faq[] {
  if (service.faqs?.length) return service.faqs;

  const specificFaq = serviceSpecificFaqs[service.slug];
  return specificFaq
    ? [specificFaq, ...serviceDetailFaqs.slice(0, 3)]
    : serviceDetailFaqs;
}

export const whyPoints = [
  {
    title: "One connected system",
    body: "Design, software, and growth under one roof — so your website, workflows, and reporting actually work together."
  },
  {
    title: "Built for operators",
    body: "Practical tools shaped around how your team really works, not how a template thinks it should."
  },
  {
    title: "Senior, hands-on team",
    body: "Experienced people on your project from day one — accountable, communicative, and invested in the outcome."
  },
  {
    title: "Transparent and accountable",
    body: "Clear scope, honest timelines, and ongoing support long after launch day."
  }
];

export const servicesFaqs = [
  {
    q: "Can you handle both design and development?",
    a: "Yes. We take projects end to end — strategy, UX/UI design, development, launch, and ongoing support — so nothing falls between hand-offs."
  },
  {
    q: "Do you work in phases or all at once?",
    a: "We work in clear milestones. You always know what is being built, when, and what comes next, with room to adjust as we learn."
  },
  {
    q: "Can you work with our existing website or tools?",
    a: "Absolutely. We regularly redesign existing sites and integrate with the CRMs, platforms, and tools you already use."
  },
  {
    q: "How do we choose the right services?",
    a: "Start with a quick consultation. We will assess your goals and recommend the smallest set of services that gets you the biggest result."
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Maintenance, optimization, and security are core services — we stay involved so your product keeps improving instead of aging."
  }
];

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({ service, category }))
);

export function getServiceBySlug(slug: string) {
  return allServices.find((entry) => entry.service.slug === slug);
}

export function relatedServices(slug: string, category: ServiceCategory) {
  return category.services.filter((service) => service.slug !== slug).slice(0, 3);
}

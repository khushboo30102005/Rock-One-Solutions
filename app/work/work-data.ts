export type WorkProject = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  description: string;
  services: string[];
  imageAlt: string;
  image: string;
  projectHref: string;
  caseStudyHref: string;
  liveHref?: string;
};

export type WebsiteLaunch = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  services: string[];
  image: string;
  imageAlt: string;
  imageMode: "screenshot" | "brand";
  href: string;
  cta: string;
  external?: boolean;
};

export const workProjects: WorkProject[] = [
  {
    slug: "auto-parts-crm",
    client: "MEE Auto Parts",
    title: "Auto Parts CRM",
    summary: "One operating system for the path from first inquiry to delivered part.",
    description:
      "A role-based CRM connecting lead capture, quoting, orders, invoices, shipment tracking, replacements, and team access in one accountable workflow.",
    services: ["Product strategy", "UX / UI", "Custom software", "Workflow automation"],
    imageAlt: "Current Auto Parts CRM Version 5.0 dashboard interface",
    image: "/work/auto-parts-crm/dashboard.png",
    projectHref: "/work/auto-parts-crm",
    caseStudyHref: "/case-studies/auto-parts-crm",
    liveHref: "https://frontend-me-5a30.vercel.app/"
  }
];

export const websiteLaunches: WebsiteLaunch[] = [
  {
    slug: "ssp-group",
    client: "SSP Group",
    title: "Real estate website",
    summary:
      "A structured real estate website that presents the company, its property offering, and clear enquiry paths for prospective customers.",
    services: ["Website development", "Real estate UX", "Lead capture"],
    image: "/client-logos/ssp-group.png",
    imageAlt: "SSP Group logo",
    imageMode: "brand",
    href: "https://sspgroup.org.in/",
    cta: "Visit website",
    external: true
  },
  {
    slug: "drivex-auto-parts",
    client: "DriveX Auto Parts",
    title: "Automotive commerce website",
    summary:
      "A conversion-focused website for used engines and transmissions, combining product discovery, trust signals, and direct part enquiries.",
    services: ["Website development", "Product discovery", "Lead generation"],
    image: "/work/client-sites/drivex-auto-parts.png",
    imageAlt: "DriveX Auto Parts website showing used engines and transmissions",
    imageMode: "screenshot",
    href: "https://drivexautoparts.com/",
    cta: "Visit website",
    external: true
  },
  {
    slug: "mee-car-rental",
    client: "Mee Car Rental",
    title: "Car rental website",
    summary:
      "A cleaner booking and enquiry experience that presents rental services clearly and helps customers move quickly from browsing to contact.",
    services: ["Website development", "Booking UX", "Enquiry flow"],
    image: "/client-logos/mee-car-rentals.png",
    imageAlt: "Mee Car Rental logo",
    imageMode: "brand",
    href: "/services/custom-website-development/",
    cta: "Explore website development"
  }
];

export type CrmProjectScreen = {
  id: string;
  label: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const crmProjectScreens: CrmProjectScreen[] = [
  {
    id: "dashboard",
    label: "Sales overview",
    title: "The day starts with a clear operating picture.",
    description:
      "Lead volume, completed sales, charging, gross profit, and agent performance are visible in one management view.",
    src: "/work/auto-parts-crm/dashboard.png",
    alt: "Auto Parts CRM dashboard showing sales totals and agent performance",
    width: 1904,
    height: 940
  },
  {
    id: "leads",
    label: "Lead workspace",
    title: "Every inquiry stays searchable and accountable.",
    description:
      "The team can filter, assign, qualify, and convert leads while keeping customer, vehicle, quote, and status details together.",
    src: "/work/auto-parts-crm/leads.png",
    alt: "Auto Parts CRM leads workspace with filters, customer records, quotes, and statuses",
    width: 1800,
    height: 942
  },
  {
    id: "orders",
    label: "Order operations",
    title: "Sales and fulfilment work from the same order list.",
    description:
      "Orders carry the customer, adviser, part, value, shipping age, and operational status needed for daily follow-up.",
    src: "/work/auto-parts-crm/orders.png",
    alt: "Auto Parts CRM orders table with customers, advisers, parts, totals, and shipping status",
    width: 1785,
    height: 949
  },
  {
    id: "order-detail",
    label: "Order record",
    title: "The full commercial record lives in one place.",
    description:
      "Customer, vehicle, part, pricing, invoice controls, notes, gross profit, and status history remain attached to the sale.",
    src: "/work/auto-parts-crm/order-detail.png",
    alt: "Auto Parts CRM order detail with invoice controls, customer data, pricing, notes, and history",
    width: 1785,
    height: 942
  },
  {
    id: "shipments",
    label: "Shipment control",
    title: "The carrier handoff is visible without internal chasing.",
    description:
      "Pickup, PRO, carrier, ageing, and delivery status stay connected to each sale so the team can answer quickly.",
    src: "/work/auto-parts-crm/shipments.png",
    alt: "Auto Parts CRM shipment table with carrier, PRO, ageing, and delivery status",
    width: 1774,
    height: 942
  },
  {
    id: "user-center",
    label: "Team access",
    title: "Each role receives the right level of access.",
    description:
      "Admins can create users, assign sales or shipping roles, review status, and keep access aligned with responsibility.",
    src: "/work/auto-parts-crm/user-center.png",
    alt: "Auto Parts CRM user center for creating team accounts and managing role-based access",
    width: 1762,
    height: 930
  }
];

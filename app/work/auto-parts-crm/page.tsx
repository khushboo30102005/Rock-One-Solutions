import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { crmProjectScreens, type CrmProjectScreen } from "../work-data";
import "../work.css";

export const metadata: Metadata = {
  title: "Auto Parts CRM Project | Rock One Solutions",
  description:
    "Explore the Auto Parts CRM built by Rock One Solutions: dashboards, leads, orders, invoicing, shipments, replacements, user management, and role-based access.",
  alternates: { canonical: "/work/auto-parts-crm/" },
  openGraph: {
    title: "Auto Parts CRM Project | Rock One Solutions",
    description: "A complete product tour of the connected Auto Parts CRM.",
    url: "https://rockonesolutions.com/work/auto-parts-crm/",
  }
};

const productMap = [
  ["Dashboard", "Sales, ageing, delivery, and adviser performance"],
  ["Leads", "Capture, qualify, quote, assign, and convert"],
  ["Orders", "Customer, vehicle, part, price, invoice, and payment"],
  ["Shipments", "Prepare loads and track BOL, PRO, carrier, and status"],
  ["Replacements", "Customer reason, yard response, replacement transit"],
  ["User Center", "Create, activate, and scope sales or shipping users"]
];

const replacementSteps = ["Request recorded", "Yard contacted", "Response agreed", "Replacement shipped", "Delivery confirmed"];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Auto Parts CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A role-based CRM for auto-parts sales, invoicing, shipment tracking, replacement orders, and team access.",
  creator: {
    "@type": "Organization",
    name: "Rock One Solutions",
    url: "https://rockonesolutions.com"
  },
  url: "https://rockonesolutions.com/work/auto-parts-crm/"
};

function ProductStage({ image, eager = false }: { image: CrmProjectScreen; eager?: boolean }) {
  return (
    <figure className="product-stage">
      <div className="product-browser-bar" aria-hidden="true">
        <span /><span /><span />
        <p>Auto Parts CRM / {image.id.replace("-", " ")}</p>
      </div>
      <div className="product-stage-screen">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 94vw, 68vw"
          priority={eager}
        />
      </div>
    </figure>
  );
}

function RoleMatrix() {
  const rows = [
    ["Dashboard", "Full view", "Sales view", "Shipping view"],
    ["Leads", "Manage", "Assigned records", "—"],
    ["Orders", "Manage", "Assigned records", "—"],
    ["Shipments", "Manage", "View status", "Manage"],
    ["Replacements", "Manage", "View status", "Manage"],
    ["Users", "Manage", "—", "—"]
  ];

  return (
    <div className="role-matrix" role="table" aria-label="Role access across CRM workspaces">
      <div className="role-row role-head" role="row">
        {["Workspace", "Admin", "Sales", "Shipping"].map((item) => <span role="columnheader" key={item}>{item}</span>)}
      </div>
      {rows.map((row) => (
        <div className="role-row" role="row" key={row[0]}>
          {row.map((item, index) => <span role="cell" className={item === "—" ? "is-empty" : ""} key={`${row[0]}-${index}`}>{item}</span>)}
        </div>
      ))}
    </div>
  );
}

export default function AutoPartsCrmProject() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="work" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <main className="work-main product-page">
        <section className="product-hero">
          <nav className="work-breadcrumb" aria-label="Breadcrumb">
            <Link href="/work">Work</Link><span>/</span><span>Auto Parts CRM</span>
          </nav>
          <div className="product-hero-grid">
            <div>
              <p className="work-kicker">MEE Auto Parts</p>
              <h1>One operating system for the complete auto parts order journey.</h1>
            </div>
            <div className="product-hero-side">
              <p>
                A role-based CRM connecting lead capture, quoting, orders, signed invoices,
                shipping, replacements, and team access without losing context between steps.
              </p>
              <div className="work-project-actions">
                <a className="work-button work-button-primary" href="https://frontend-me-5a30.vercel.app/" target="_blank" rel="noreferrer">
                  Open live demo <span aria-hidden="true">↗</span>
                </a>
                <Link className="work-text-link" href="/case-studies/auto-parts-crm">
                  Read case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <dl className="product-meta">
            <div><dt>Project</dt><dd>Internal operations platform</dd></div>
            <div><dt>Scope</dt><dd>Strategy, UX / UI, software, automation</dd></div>
            <div><dt>Primary users</dt><dd>Admin, sales, and shipping teams</dd></div>
            <div><dt>System</dt><dd>Web-based, role-aware CRM</dd></div>
          </dl>
        </section>

        <section className="product-hero-stage" aria-label="Auto Parts CRM dashboard">
          <ProductStage image={crmProjectScreens[0]} eager />
        </section>

        <section className="product-map" aria-labelledby="product-map-title">
          <div className="product-section-heading">
            <p className="work-kicker">Product map</p>
            <h2 id="product-map-title">Six connected workspaces. One operational record.</h2>
          </div>
          <ol>
            {productMap.map(([title, description], index) => (
              <li key={title} data-reveal="up">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="product-tour" aria-labelledby="tour-title">
          <div className="product-section-heading">
            <p className="work-kicker">Interface tour</p>
            <h2 id="tour-title">The product, workspace by workspace.</h2>
            <p>Representative demo records are used throughout these screens.</p>
          </div>

          {crmProjectScreens.map((screen, index) => (
            <article className={`product-chapter${index % 2 ? " is-reverse" : ""}`} key={screen.id}>
              <div className="product-chapter-copy" data-reveal="up">
                <span className="product-chapter-number">{String(index + 1).padStart(2, "0")}</span>
                <p className="work-kicker">{screen.label}</p>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
                <p className="product-chapter-note">Current Version 5.0 interface using representative demo records.</p>
              </div>
              <div data-reveal="up">
                <ProductStage image={screen} />
              </div>
            </article>
          ))}
        </section>

        <section className="replacement-workflow" aria-labelledby="replacement-title">
          <div className="replacement-copy">
            <p className="work-kicker">Replacement orders</p>
            <h2 id="replacement-title">Exceptions get their own controlled workflow.</h2>
            <p>
              Customer reason, yard response, original shipment, replacement transit,
              carrier details, notes, and status history stay together. The team can see
              exactly what is waiting and who owns the next action.
            </p>
          </div>
          <div className="replacement-panel" data-reveal="up">
            <header><span>Replacement order</span><strong>MAP26091027</strong></header>
            <div className="replacement-summary">
              <div><small>Customer reason</small><b>Part received with visible damage</b></div>
              <div><small>Yard update</small><b>Replacement confirmed and prepared</b></div>
            </div>
            <ol>
              {replacementSteps.map((step, index) => (
                <li className={index < 3 ? "is-complete" : index === 3 ? "is-current" : ""} key={step}>
                  <span>{index + 1}</span><p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="role-section" aria-labelledby="role-title">
          <div className="product-section-heading">
            <p className="work-kicker">Role-based operation</p>
            <h2 id="role-title">The same data. A focused product for each team.</h2>
            <p>Permissions reduce noise while preserving one source of operational truth.</p>
          </div>
          <RoleMatrix />
        </section>

        <section className="product-proof" aria-labelledby="proof-title">
          <p className="work-kicker">System coverage</p>
          <h2 id="proof-title">From first call to final delivery, the record stays intact.</h2>
          <div className="product-proof-grid">
            <article><strong>3</strong><span>role-specific experiences</span></article>
            <article><strong>6</strong><span>connected workspaces</span></article>
            <article><strong>1</strong><span>record across the order lifecycle</span></article>
          </div>
          <div className="work-project-actions">
            <Link className="work-button work-button-primary" href="/case-studies/auto-parts-crm">Read the case study <span aria-hidden="true">↗</span></Link>
            <Link className="work-text-link" href="/contact">Discuss a similar system <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

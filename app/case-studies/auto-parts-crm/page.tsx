import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { crmProjectScreens, type CrmProjectScreen } from "../../work/work-data";
import "../../work/auto-parts-crm/case-study.css";
import "../../work/work.css";

export const metadata: Metadata = {
  title: "Auto Parts CRM Case Study | Rock One Solutions",
  description:
    "How Rock One Solutions designed and built the Auto Parts CRM for MEE Auto Parts — one workspace that carries a lead through quoting, orders, signed invoices, and shipment tracking.",
  alternates: { canonical: "/case-studies/auto-parts-crm/" },
  openGraph: {
    title: "Auto Parts CRM Case Study | Rock One Solutions",
    description: "The problem, product decisions, and operating model behind the Auto Parts CRM.",
    url: "https://rockonesolutions.com/case-studies/auto-parts-crm/"
  }
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Auto Parts CRM Case Study",
  description: "The product strategy, design decisions, and workflow transformation behind the Auto Parts CRM.",
  author: { "@type": "Organization", name: "Rock One Solutions" },
  publisher: { "@type": "Organization", name: "Rock One Solutions" },
  mainEntityOfPage: "https://rockonesolutions.com/case-studies/auto-parts-crm/"
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Exactly the three fields the reference case study carries. */
const meta = [
  { label: "Project type", value: "Internal product" },
  { label: "Stage", value: "Established operator" },
  { label: "Deliverables", value: "Product strategy, UX / UI design, custom software, workflow automation" }
];

/* Product facts counted from the shipped build — swap in commercial results
   (revenue, response time, conversion lift) once the client shares them. */
const stats = [
  { value: "7", label: "workspaces", note: "Dashboard, Leads, Orders, Shipments, Costs, Notes, User Center" },
  { value: "3", label: "access roles", note: "Admin, sales agent, and shipping account — each sees a different app" },
  { value: "6", label: "lead stages", note: "Prospect through converted, with reasons captured on every drop-off" },
  { value: "1", label: "record end to end", note: "The same order carries quote, invoice, signature, and shipment" }
];

/* "Old meets new" — the four leaks, each answered by what replaced it. */
const oldVsNew = [
  {
    old: "Leads lived in three places",
    oldBody:
      "Inbound calls, marketplace inquiries, and follow-ups were split across spreadsheets, inboxes, and personal notes. Nobody could say what was still open.",
    now: "One pipeline with honest statuses"
  },
  {
    old: "Quotes did not become orders",
    oldBody:
      "Converting a quote meant retyping customer, vehicle, and part details into a second system — so quotes went cold while the paperwork caught up.",
    now: "One action promotes a lead"
  },
  {
    old: "Invoicing stalled on signatures",
    oldBody:
      "Invoices were generated outside the workflow, emailed manually, and chased over phone. No one could see whether a customer had signed.",
    now: "Generate, send, sign, re-issue in place"
  },
  {
    old: "Shipping was a black box",
    oldBody:
      "BOL and PRO numbers sat with the carrier desk. Sales had no way to answer 'where is my part?' without forwarding the question.",
    now: "BOL and PRO on the order itself"
  }
];

/* Compressed from the old eight-card grid into a single readable line-up. */
const flow = [
  "Lead captured",
  "Quoted",
  "Converted",
  "Order built",
  "Invoiced",
  "Signed",
  "Shipped",
  "Reported"
];

const palette = [
  { name: "Action blue", hex: "#2563EB", role: "Primary actions, links, active nav" },
  { name: "Ink", hex: "#0B1830", role: "Headings and figures" },
  { name: "Slate", hex: "#66748B", role: "Body copy and helper text" },
  { name: "Confirm", hex: "#0F7A4D", role: "Paid, active, invoiced states" },
  { name: "Attention", hex: "#D97706", role: "Follow-ups and partial payments" },
  { name: "Exception", hex: "#DC2626", role: "Delays and outstanding balance" }
];

const principles = [
  {
    title: "The number first, the label second",
    body:
      "Every card leads with the figure at display weight, then explains it. A manager scanning the dashboard reads values before they read words."
  },
  {
    title: "Status is a colour, not a sentence",
    body:
      "In transit, invoiced, active, converted — each state has one chip treatment used identically across leads, orders, shipments, and users."
  },
  {
    title: "Actions sit on the object they act on",
    body:
      "Invoice controls live on the order. Convert-to-order lives on the lead row. Nothing important hides behind a menu two levels deep."
  },
  {
    title: "Dense, but never cramped",
    body:
      "Tables carry eight columns at a comfortable 44px row height, on a soft blue-white canvas that keeps long shifts easy on the eyes."
  }
];

const outcomes = [
  "A quote becomes an order in one action, carrying customer, vehicle, and part detail with it.",
  "Invoice generation, delivery, signing, and re-issue happen inside the order — never in a side channel.",
  "Every order answers 'what happened and who did it' from a single timeline.",
  "Sales, admin, and shipping work from the same data with three different levels of access.",
  "Delays are counted as their own metric, so exception handling is the first job of the day.",
  "Revenue, paid, partially paid, and outstanding balance are visible without exporting anything."
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "PDF generation", "E-signature flow", "Role-based auth"];

function Stage({
  image,
  caption,
}: {
  image: CrmProjectScreen;
  caption?: string;
}) {
  return (
    <div className="cs-stage" data-reveal="up">
      <figure className="cs-frame">
        <div className="cs-frame-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>Auto Parts CRM / {image.id.replace("-", " ")}</span>
        </div>
        <Image
          className="cs-frame-image"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 760px) 100vw, 92vw"
        />
      </figure>
      {caption ? <figcaption className="cs-stage-caption">{caption}</figcaption> : null}
    </div>
  );
}

export default function AutoPartsCrmCaseStudy() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="case-studies" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />

      <main className="cs-main">
        {/* ---------------------------------------- title + meta ---------- */}
        <section className="cs-title-block">
          <nav className="cs-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
              <Link href="/case-studies">Case Studies</Link>
          </nav>

          <h1>Auto Parts CRM</h1>

          <dl className="cs-meta">
            {meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cs-hero-media" aria-label="The Auto Parts CRM in use">
          <Stage image={crmProjectScreens[0]} />
          <p className="cs-stage-caption">
            The current Version 5.0 Admin dashboard, shown with the public demo&apos;s sample data.
          </p>
        </section>

        {/* ---------------------------------------- introduction ---------- */}
        <section className="cs-intro" aria-labelledby="cs-intro-title">
          <h2 id="cs-intro-title" className="cs-eyebrow">
            Introduction
          </h2>
          <div className="cs-intro-body">
            <p className="cs-lede">
              MEE Auto Parts is a US aftermarket parts operation where a single sale
              touches quoting, order entry, invoicing, e-signature, carrier handoff,
              and payment follow-up.
            </p>
            <p>
              The team was fast on the phone and slow on the paperwork. Leads were tracked in
              one place, orders in another, invoices in a third, and shipping status nowhere
              at all. Every handoff between those systems was a re-typed record and a chance
              to lose a sale.
            </p>
            <p>
              We designed and built the CRM that holds all of it on one record — from the
              first inbound call to a signed invoice and a tracked delivery.
            </p>
          </div>
        </section>

        {/* ---------------------------------------- the vision ------------ */}
        <section className="cs-section" aria-labelledby="cs-vision-title">
          <div className="cs-section-head">
            <h2 id="cs-vision-title">The vision</h2>
            <p data-reveal="up">
              Replace six tools with one operating system for the business. We mapped the
              real path of a part — inquiry, quote, order, invoice, signature, carrier,
              delivery, payment — and built a single application around that path.
            </p>
          </div>

          <blockquote className="cs-quote" data-reveal="up">
            <p>
              The measure of a CRM is not how much it can store. It is whether the person on
              the phone can see the next action without opening a second tab.
            </p>
            <cite>Design principle behind the Auto Parts CRM</cite>
          </blockquote>
        </section>

        {/* ---------------------------------------- sweating details ------ */}
        <section className="cs-section" aria-labelledby="cs-details-title">
          <div className="cs-section-head">
            <h2 id="cs-details-title">Sweating the details</h2>
            <p data-reveal="up">
              A tool people live in for eight hours a day earns its keep in the small
              decisions — where an action sits, what a colour means, how much a table can
              carry before it stops being readable.
            </p>
          </div>

          <ol className="cs-principles">
            {principles.map((principle) => (
              <li key={principle.title} data-reveal="up">
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </li>
            ))}
          </ol>

          <div className="cs-palette" data-reveal="up">
            <h3>Palette</h3>
            <ul>
              {palette.map((swatch) => (
                <li key={swatch.hex}>
                  <span className="cs-swatch" style={{ background: swatch.hex }} aria-hidden="true" />
                  <b>{swatch.name}</b>
                  <code>{swatch.hex}</code>
                  <small>{swatch.role}</small>
                </li>
              ))}
            </ul>
          </div>

          <Stage
            image={crmProjectScreens[3]}
            caption="Invoice generation, PDF download, editing, signature requests, and fresh signing links sit in one row of controls — and every action writes to the timeline beside it."
          />
        </section>

        {/* ---------------------------------------- old meets new --------- */}
        <section className="cs-section" aria-labelledby="cs-old-new-title">
          <div className="cs-section-head">
            <h2 id="cs-old-new-title">Old meets new</h2>
            <p data-reveal="up">
              Four places where a sale quietly leaked, and what replaced each one.
            </p>
          </div>

          <ul className="cs-compare">
            {oldVsNew.map((item, index) => (
              <li key={item.old} data-reveal="up">
                <span className="cs-compare-num">{String(index + 1).padStart(2, "0")}</span>
                <div className="cs-compare-old">
                  <span className="cs-tag">Before</span>
                  <h3>{item.old}</h3>
                  <p>{item.oldBody}</p>
                </div>
                <div className="cs-compare-new">
                  <span className="cs-tag is-now">Now</span>
                  <p>{item.now}</p>
                </div>
              </li>
            ))}
          </ul>

          <ol className="cs-flow" data-reveal="up" aria-label="Order lifecycle">
            {flow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* ---------------------------------------- product evidence ------ */}
        <section className="cs-section" aria-labelledby="cs-proto-title">
          <div className="cs-section-head">
            <h2 id="cs-proto-title">The product in operation</h2>
            <p data-reveal="up">
              The finished product connects dashboards, leads, orders, invoices,
              shipments, replacements, and role-based access. The separate project page
              documents each workspace in detail.
            </p>
          </div>

          <div className="cs-product-link" data-reveal="up">
            <div>
              <span className="cs-tag">Product tour</span>
              <h3>See how every operational workspace connects.</h3>
              <p>
                Explore the interfaces, role boundaries, shipment controls, replacement
                workflow, and complete order record on the Work page.
              </p>
            </div>
            <Link href="/work/auto-parts-crm" className="about-btn-primary">
              View the product {arrow}
            </Link>
          </div>

          <div className="cs-evidence-grid" aria-label="Selected CRM workspaces">
            {[crmProjectScreens[1], crmProjectScreens[4], crmProjectScreens[5]].map((screen) => (
              <figure key={screen.id} data-reveal="up">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <figcaption><strong>{screen.label}</strong><span>{screen.description}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------------------------------------- outcomes -------------- */}
        <section className="cs-section" aria-labelledby="cs-outcomes-title">
          <div className="cs-section-head">
            <h2 id="cs-outcomes-title">Outcomes</h2>
            <p data-reveal="up">What the team got.</p>
          </div>

          <ul className="cs-stats">
            {stats.map((stat) => (
              <li key={stat.label} data-reveal="up">
                <strong>{stat.value}</strong>
                <b>{stat.label}</b>
                <span>{stat.note}</span>
              </li>
            ))}
          </ul>

          <ul className="cs-outcome-list">
            {outcomes.map((outcome) => (
              <li key={outcome} data-reveal="up">
                {outcome}
              </li>
            ))}
          </ul>

          <div className="cs-stack" data-reveal="up">
            <span>Built with</span>
            <p>{stack.join(" · ")}</p>
          </div>
        </section>

        {/* ---------------------------------------- close ----------------- */}
        <section className="cs-next">
          <h2>Have a workflow that lives in six tools?</h2>
          <p>
            We design and build internal systems that hold an entire operation on one
            record — from first inquiry to final payment.
          </p>
          <div className="cs-next-actions">
            <Link href="/contact" className="about-btn-primary">
              Start a project {arrow}
            </Link>
            <Link href="/work/auto-parts-crm" className="about-btn-ghost">
              View the product
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

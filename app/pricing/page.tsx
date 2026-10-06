import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PriceDisplay from "@/components/PriceDisplay";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { pricingGroups } from "./pricing-data";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Website, CRM & Automation Pricing | Rock One Solutions",
  description:
    "Starting prices and scoped quotes for websites, software, CRM, automation, AI, SEO, and support from Rock One Solutions.",
  alternates: { canonical: "/pricing/" },
  openGraph: {
    title: "Website, CRM & Automation Pricing | Rock One Solutions",
    description:
      "Clear starting points for defined work and scoped quotes for CRM, ERP, and complex systems.",
    url: "/pricing/",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, CRM & Automation Pricing | Rock One Solutions",
    description:
      "Clear starting points for defined work and scoped quotes for CRM, ERP, and complex systems."
  }
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const faqs = [
  {
    q: "Is the starting point what I will pay?",
    a: "It is the floor for the scope described on the card. After reviewing your brief, we send one fixed price for the agreed work."
  },
  {
    q: "Can a project cost less?",
    a: "Yes, when the work is a small audit, improvement, or clearly defined addition to something already built. Standalone projects usually begin at the published starting point."
  },
  {
    q: "Why are CRM and ERP systems quote only?",
    a: "Their cost changes substantially with workflows, departments, permissions, documents, integrations, and reporting requirements. We scope those systems individually instead of publishing a misleading floor."
  },
  {
    q: "What is separate from these figures?",
    a: "Advertising spend, paid software, third-party licenses, hosting, and applicable taxes are separate unless the written scope explicitly includes them."
  }
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader active="pricing" tone="dark" />

      <main className="pricing-main">
        <section className="pricing-hero" aria-labelledby="pricing-title">
          <div className="pricing-hero-inner">
            <div className="pricing-hero-copy">
              <nav className="pricing-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span aria-current="page">Pricing</span>
              </nav>
              <span className="pricing-kicker">Starting points</span>
              <h1 id="pricing-title">Starting prices and scoped quotes for digital work.</h1>
              <p>
                Defined services have a useful starting point. CRM, ERP, and complex
                systems are quoted after a brief. Every project receives a written scope,
                milestones, and one fixed price before work begins.
              </p>
              <div className="pricing-hero-actions">
                <Link href="#starting-points" className="about-btn-primary">
                  See starting points {arrow}
                </Link>
                <Link href="/contact" className="about-btn-ghost about-btn-ghost-dark">
                  Send a brief
                </Link>
              </div>
            </div>

            <div className="pricing-quote-path" aria-label="How pricing works">
              <span className="pricing-quote-label">How a quote is set</span>
              <ol>
                <li>
                  <span>01</span>
                  <div>
                    <strong>Brief</strong>
                    <p>Goal, current tools, timeline, and budget range.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <strong>Scope</strong>
                    <p>Deliverables, exclusions, milestones, and ownership.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <strong>Fixed price</strong>
                    <p>One number for the agreed version before work begins.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="pricing-intro" id="starting-points" aria-labelledby="pricing-intro-title">
          <span className="section-kicker about-kicker">Public pricing guidance</span>
          <div>
            <h2 id="pricing-intro-title">A useful floor or a clear route to a scoped quote.</h2>
            <p>
              More pages, pipelines, integrations, languages, roles, or custom buying
              logic can raise the final number. Nothing changes after approval without a
              visible scope change.
            </p>
          </div>
        </section>

        <div className="pricing-groups">
          {pricingGroups.map((group) => (
            <section className="pricing-group" key={group.index} aria-labelledby={`pricing-group-${group.index}`}>
              <header className="pricing-group-head">
                <span>{group.index}</span>
                <h2 id={`pricing-group-${group.index}`}>{group.name}</h2>
                <p>{group.intro}</p>
              </header>

              <div className="pricing-list">
                {group.items.map((item) => (
                  <article className="pricing-item" id={`price-${item.slug}`} key={item.slug}>
                    <div className="pricing-item-copy">
                      <h3>{item.name}</h3>
                      <p>{item.scope}</p>
                    </div>
                    <div className="pricing-item-action">
                      <span className="pricing-price-label">
                        {item.quoteOnly ? "Project pricing" : "Starting point"}
                      </span>
                      <strong className="pricing-price">
                        <PriceDisplay
                          price={item.price}
                          multiplier={group.usdMultiplier}
                          cadence={item.cadence}
                          quoteOnly={item.quoteOnly}
                        />
                      </strong>
                      <Link href={item.href}>
                        View service {arrow}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="pricing-scope" aria-labelledby="pricing-scope-title">
          <div className="pricing-scope-head">
            <span className="section-kicker about-kicker">What the plus means</span>
            <h2 id="pricing-scope-title">Scope raises the number. It does not create surprise invoices.</h2>
          </div>
          <div className="pricing-scope-body">
            <p>
              A starting point assumes the compact version described above. Your proposal
              states exactly what is included, what is separate, and the milestones used
              to approve progress.
            </p>
            <p>
              CRM, ERP, multi-department software, native apps, custom checkout flows,
              and complex integrations are priced after discovery because a public floor
              would hide the variables that matter.
            </p>
          </div>
          <p className="pricing-exclusions">
            Mobile App MVP pricing covers one cross-platform first release. Separate native
            apps, complex backends, subscriptions, infrastructure, ad spend, third-party
            licenses, and applicable taxes are separate unless included in the written scope.
          </p>
        </section>

        <section className="pricing-faq" aria-labelledby="pricing-faq-title">
          <div className="pricing-faq-head">
            <span className="section-kicker about-kicker">Pricing questions</span>
            <h2 id="pricing-faq-title">What to know before you send the brief.</h2>
          </div>
          <div className="about-faq-list">
            {faqs.map((faq) => (
              <details className="about-faq-item" key={faq.q}>
                <summary>
                  {faq.q}
                  <span className="about-faq-mark" aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="pricing-contact" aria-labelledby="pricing-contact-title">
          <div className="pricing-contact-copy">
            <span className="section-kicker">Send a brief</span>
            <h2 id="pricing-contact-title">Get the number for your version.</h2>
            <p>
              Share the goal, current setup, timeline, and budget range. A two-line brief
              is enough to begin.
            </p>
            <ul>
              <li>Written scope and exclusions</li>
              <li>Milestones and ownership</li>
              <li>One fixed project price</li>
            </ul>
          </div>
          <div className="pricing-form-panel">
            <ContactForm variant="full" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import {
  processSteps,
  serviceCategories,
  servicesFaqs,
  whyPoints
} from "./services-data";
import "./services.css";

export const metadata: Metadata = {
  title: "Services | Rock One Solutions",
  description:
    "Websites, custom software, CRM/ERP, automation, SEO, and paid media — Rock One Solutions covers the full journey from design and build to automation and growth.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Services | Rock One Solutions",
    description:
      "Websites, custom software, CRM/ERP, automation, SEO, and paid media from one connected digital partner.",
    url: "/services/",
    type: "website",
  },
};

const coverage = ["Design", "Build", "Automate", "Grow"];

const remoteHighlights = [
  "Agreed timing shift",
  "First-priority task handling",
  "Remote expert without full-time salary"
];

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />

      <main className="services-main">
        <section className="services-hero" aria-labelledby="services-hero-title">
          <div className="services-hero-inner">
            <span className="about-badge">Our services</span>
            <h1 id="services-hero-title">
              Everything you need to build, connect,
              <span> and grow.</span>
            </h1>
            <p>
              From a premium website to the software, automation, and marketing behind
              it — we cover the full journey, so your digital presence and your
              operations finally work as one system.
            </p>
            <div className="services-hero-actions">
              <Link href="/contact" className="about-btn-primary">
                Start a Project {arrow}
              </Link>
              <TrackedContactLink href="tel:+918197731627" className="about-btn-ghost">
                Book a discovery call
              </TrackedContactLink>
            </div>
            <ul className="services-coverage" aria-label="What we cover">
              {coverage.map((item, index) => (
                <li key={item}>
                  <span>{item}</span>
                  {index < coverage.length - 1 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
            <div className="services-hero-proof" aria-label="Service delivery highlights">
              <div>
                <strong>20+</strong>
                <span>Projects delivered</span>
              </div>
              <div>
                <strong>19+</strong>
                <span>Focused services</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Connected delivery layers</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Partner for website, systems, and growth</span>
              </div>
            </div>
          </div>
        </section>

        {serviceCategories.map((category) => (
          <section
            className="services-category"
            key={category.slug}
            style={{ ["--accent" as string]: category.accent }}
            aria-labelledby={`cat-${category.slug}`}
          >
            <div className="services-cat-head">
              <span className="services-cat-icon">{category.icon}</span>
              <div>
                <span className="services-cat-count">{category.services.length} services</span>
                <h2 id={`cat-${category.slug}`}>{category.name}</h2>
                <p>{category.blurb}</p>
              </div>
            </div>
            <div className="services-cat-grid">
              {category.services.map((service, index) => (
                <Link
                  className="service-card"
                  key={service.slug}
                  href={`/services/${service.slug}`}
                >
                  <span className="service-card-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                  <span className="service-card-more">
                    Explore
                    {arrow}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="services-remote-team" aria-labelledby="services-remote-team-title">
          <div className="services-remote-copy">
            <span className="section-kicker about-kicker">Remote team support</span>
            <h2 id="services-remote-team-title">
              Need regular technical work, but not a full-time employee?
            </h2>
            <p>
              Our Remote Team model gives you a dedicated remote resource for
              recurring website, software, SEO, CRM, and automation tasks. During
              your agreed support shift, your work stays first priority.
            </p>
            <Link href="/remote-tech-team" className="about-btn-primary">
              Explore Remote Team {arrow}
            </Link>
          </div>
          <div className="services-remote-panel" aria-label="Remote team support highlights">
            {remoteHighlights.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="services-process" aria-labelledby="services-process-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">How we work</span>
            <h2 id="services-process-title">A calm, transparent path from idea to impact.</h2>
          </div>
          <div className="services-process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.step}>
                <span className="process-step-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-why" aria-labelledby="services-why-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">Why Rock One</span>
            <h2 id="services-why-title">A partner that owns the outcome, not just the task.</h2>
          </div>
          <div className="services-why-grid">
            {whyPoints.map((point) => (
              <article className="why-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-faq" aria-labelledby="services-faq-title">
          <div className="about-faq-head">
            <span className="section-kicker about-kicker">FAQ</span>
            <h2 id="services-faq-title">Questions teams ask before we start.</h2>
            <p>Not sure which services you need? A quick call is the fastest way to find out.</p>
          </div>
          <div className="about-faq-list">
            {servicesFaqs.map((faq, index) => (
              <details className="about-faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="about-faq-mark" aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="about-cta" aria-labelledby="services-cta-title">
          <div className="about-cta-inner">
            <h2 id="services-cta-title">Tell us what you want to build.</h2>
            <p>
              Share where you want to go and we will map the right mix of website,
              software, automation, and growth to get you there.
            </p>
            <div className="about-cta-actions">
              <Link href="/contact" className="about-btn-primary">
                Start a Project {arrow}
              </Link>
              <TrackedContactLink href="tel:+918197731627" className="about-btn-ghost about-btn-ghost-dark">
                +91 8197731627
              </TrackedContactLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

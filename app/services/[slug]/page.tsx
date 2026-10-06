import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PriceDisplay from "@/components/PriceDisplay";
import ClientWorkShowcase, { type ClientWorkItem } from "@/components/ClientWorkShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import { getPublicPricingBySlug } from "@/app/pricing/pricing-data";
import { websiteLaunches, workProjects } from "@/app/work/work-data";
import {
  allServices,
  faqsForService,
  getServiceBySlug,
  nextSteps,
  relatedServices,
} from "../services-data";
import "../services.css";

export function generateStaticParams() {
  return allServices.map(({ service }) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getServiceBySlug(slug);
  if (!entry) return { title: "Service | Rock One Solutions" };
  const path = `/services/${entry.service.slug}/`;
  return {
    title: `${entry.service.title} | Rock One Solutions`,
    description: entry.service.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${entry.service.title} | Rock One Solutions`,
      description: entry.service.summary,
      url: path,
      type: "website",
    },
  };
}

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const tick = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4 4 10-10" />
  </svg>
);

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getServiceBySlug(slug);
  if (!entry) notFound();

  const { service, category } = entry;
  const related = relatedServices(service.slug, category);
  const faqs = faqsForService(service);
  const pricing = getPublicPricingBySlug(service.slug);
  let clientWork: {
    kicker: string;
    title: string;
    intro: string;
    items: ClientWorkItem[];
    layout?: "grid" | "feature";
  } | null = null;

  if (service.slug === "custom-website-development") {
    clientWork = {
      kicker: "Selected website work",
      title: "Websites built for real businesses.",
      intro:
        "Selected website development across real estate, automotive parts, and mobility, with each experience shaped around a different customer journey.",
      items: websiteLaunches.map((project) => ({
        client: project.client,
        title: project.title,
        summary: project.summary,
        image: project.image,
        imageAlt: project.imageAlt,
        imageMode: project.imageMode,
        href: project.external ? project.href : undefined,
        label: "Website development",
        external: project.external,
      })),
    };
  }

  if (service.slug === "crm-systems") {
    const crmProject = workProjects[0];
    clientWork = {
      kicker: "Selected CRM work",
      title: "A CRM shaped around the full order journey.",
      intro:
        "See how lead capture, quoting, orders, shipments, replacements, and team access were brought into one operating system.",
      layout: "feature",
      items: [{
        client: crmProject.client,
        title: "Open live CRM demo",
        summary: crmProject.summary,
        href: crmProject.liveHref ?? crmProject.projectHref,
        label: "CRM development",
        external: Boolean(crmProject.liveHref),
      }],
    };
  }

  return (
    <>
      <SiteHeader active="services" />

      <main
        className="service-detail-main"
        style={{ ["--accent" as string]: category.accent }}
      >
        <section className="service-hero" aria-labelledby="service-title">
          <div className="service-hero-inner">
            <div className="service-hero-copy">
              <nav className="service-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/services">Services</Link>
                <span className="sep">/</span>
                <span className="current">{service.title}</span>
              </nav>
              <span className="service-tag">{category.name}</span>
              <h1 id="service-title">{service.title}</h1>
              <p className="service-tagline">{service.tagline}</p>
              <p className="service-summary">{service.summary}</p>
              <div className="service-hero-actions">
                <Link href="/contact" className="about-btn-primary">
                  Start a Project {arrow}
                </Link>
                <Link href="/services" className="about-btn-ghost">
                  All services
                </Link>
              </div>
            </div>
            <figure className="service-hero-visual">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={1440}
                height={960}
                priority
              />
            </figure>
          </div>
        </section>

        <section className="service-detail-body" aria-label={`${service.title} details`}>
          <div className="service-detail-panels">
            <div className="service-panel">
              <h2>What&rsquo;s included</h2>
              <ul className="service-list">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <span className="service-tick">{tick}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-panel is-accent">
              <h2>Outcomes you can expect</h2>
              <ul className="service-list">
                {service.outcomes.map((item) => (
                  <li key={item}>
                    <span className="service-tick">{tick}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {clientWork ? (
          <ClientWorkShowcase
            kicker={clientWork.kicker}
            title={clientWork.title}
            intro={clientWork.intro}
            items={clientWork.items}
            layout={clientWork.layout}
          />
        ) : null}

        <section className="service-next" aria-labelledby="service-next-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">Want more detail?</span>
            <h2 id="service-next-title">
              Here is exactly how to get {service.title.toLowerCase()} scoped and priced.
            </h2>
          </div>

          <div className="service-next-grid">
            <ol className="service-next-steps">
              {nextSteps.map((step) => (
                <li key={step.step}>
                  <span className="service-next-num">{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="service-next-card">
              <h3>Talk to someone who has built it</h3>
              <p>
                Ask about timelines, budget ranges, or whether {service.title} is even the
                right fit — we will tell you if it is not.
              </p>
              <div className="service-next-contacts">
                <TrackedContactLink href="tel:+918197731627">
                  <span>Call</span>
                  <strong>+91 8197731627</strong>
                </TrackedContactLink>
                <TrackedContactLink href="mailto:Info@rockonesolutions.com">
                  <span>Email</span>
                  <strong>Info@rockonesolutions.com</strong>
                </TrackedContactLink>
                <div>
                  <span>Typical reply</span>
                  <strong>Within one working day</strong>
                </div>
              </div>
              {pricing ? (
                <Link href={`/pricing/#price-${pricing.slug}`} className="service-starting-price">
                  <span>{pricing.quoteOnly ? "Project pricing" : "Starting point"}</span>
                  <strong>
                    <PriceDisplay
                      price={pricing.price}
                      multiplier={pricing.usdMultiplier}
                      cadence={pricing.cadence}
                      quoteOnly={pricing.quoteOnly}
                    />
                  </strong>
                  <em>See pricing details {arrow}</em>
                </Link>
              ) : null}
              <Link href="/contact" className="about-btn-primary">
                Request a proposal {arrow}
              </Link>
            </aside>
          </div>

          <div className="service-next-faq">
            <h3>Common questions</h3>
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
          </div>
        </section>

        {related.length > 0 && (
          <section
            className="service-related"
            style={{ ["--accent" as string]: category.accent }}
            aria-labelledby="service-related-title"
          >
            <div className="about-section-head">
              <span className="section-kicker about-kicker">Related services</span>
              <h2 id="service-related-title">More ways we can help in {category.name}.</h2>
            </div>
            <div className="service-related-grid">
              {related.map((item) => (
                <Link
                  className="service-card"
                  key={item.slug}
                  href={`/services/${item.slug}`}
                >
                  <figure className="service-related-thumb">
                    <Image
                      src={item.image}
                      alt=""
                      width={640}
                      height={420}
                    />
                  </figure>
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                  <span className="service-card-more">
                    Explore {arrow}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="about-cta" aria-labelledby="service-cta-title">
          <div className="about-cta-inner">
            <h2 id="service-cta-title">Ready to move forward with {service.title}?</h2>
            <p>
              Tell us about your goals and we will put together a clear plan, scope, and
              timeline — no pressure, just a useful conversation.
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

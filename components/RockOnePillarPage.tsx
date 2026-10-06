import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import { pillarOrder, pillarPages, type PillarPage } from "@/app/rock-one-pillars-data";

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function RockOnePillarPage({ page }: { page: PillarPage }) {
  const related = pillarOrder
    .map((slug) => pillarPages[slug])
    .filter((item) => item.slug !== page.slug);

  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="services" />

      <main
        className={`pillar-main pillar-main-${page.slug}`}
        style={{ ["--pillar-accent" as string]: page.accent }}
      >
        <section className="pillar-hero" aria-labelledby="pillar-hero-title">
          <div className="pillar-hero-meta">
            <span>Bengaluru, India</span>
            <span>{page.label}</span>
          </div>

          <div className="pillar-hero-grid">
            <div className="pillar-hero-main">
              <h1 id="pillar-hero-title">{page.title}</h1>
              <p>{page.description}</p>
              <div className="pillar-actions">
                <Link href="/contact" className="pillar-primary">
                  {page.cta} {arrow}
                </Link>
                <Link href="/services" className="pillar-secondary">
                  View all services
                </Link>
              </div>
            </div>

            <aside className="pillar-hero-side" aria-label={`${page.label} operating focus`}>
              <span>Operating focus</span>
              <div className="pillar-skill-stack">
                {page.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
              <p>{page.heroNote}</p>
            </aside>
          </div>

          <div className="pillar-fit-strip" aria-label={`${page.label} best fit`}>
            {page.bestFor.map((fit) => (
              <p key={fit}>{fit}</p>
            ))}
          </div>
        </section>

        <section className="pillar-business flow-section" aria-labelledby={`${page.slug}-business-title`}>
          <div className="pillar-section-title">
            <span>({page.businessCase.kicker})</span>
            <h2 id={`${page.slug}-business-title`}>{page.businessCase.title}</h2>
          </div>
          <div className="pillar-business-copy">
            <p>{page.businessCase.body}</p>
            <div className="pillar-business-points">
              {page.businessCase.points.map((point, index) => (
                <div key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{point}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pillar-showcase flow-section" aria-labelledby={`${page.slug}-showcase-title`}>
          <div className="pillar-showcase-copy">
            <span>(SYSTEM VIEW)</span>
            <h2 id={`${page.slug}-showcase-title`}>{page.heroNote}</h2>
            <p>
              We connect the visible experience with the workflow behind it, so design,
              development, CRM, automation, and reporting support the same business goal.
            </p>
          </div>
          <div className="pillar-showcase-media">
            <Image
              src={page.image}
              alt={page.imageAlt}
              width={960}
              height={540}
              sizes="(max-width: 1080px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="pillar-process flow-section" aria-labelledby="pillar-process-title">
          <div className="pillar-section-title">
            <span>(HOW IT WORKS)</span>
            <h2 id="pillar-process-title">{page.processTitle}</h2>
          </div>
          <div className="pillar-process-list">
            {page.stages.map((stage, index) => (
              <article key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pillar-operating flow-section" aria-labelledby={`${page.slug}-operating-title`}>
          <div className="pillar-section-title">
            <span>(OPERATING MODEL)</span>
            <h2 id={`${page.slug}-operating-title`}>How this works inside the client business.</h2>
          </div>
          <div className="pillar-operating-grid">
            {page.operatingModel.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pillar-capabilities flow-section" aria-labelledby="pillar-capabilities-title">
          <div className="pillar-section-title">
            <span>(WHAT WE HANDLE)</span>
            <h2 id="pillar-capabilities-title">{page.capabilitiesTitle}</h2>
          </div>
          <div className="pillar-capability-list">
            {page.capabilities.map((capability, index) => (
              <div key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{capability}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="pillar-outcomes flow-section" aria-labelledby="pillar-outcomes-title">
          <div className="pillar-section-title">
            <span>(BUSINESS OUTCOME)</span>
            <h2 id="pillar-outcomes-title">{page.outcomesTitle}</h2>
          </div>
          <div className="pillar-outcome-list">
            {page.outcomes.map((outcome) => (
              <strong key={outcome}>{outcome}</strong>
            ))}
          </div>
        </section>

        <section className="pillar-proof flow-section" aria-label={`${page.label} proof points`}>
          {page.proof.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <section className="pillar-related flow-section" aria-labelledby="pillar-related-title">
          <div className="pillar-section-title">
            <span>(CONNECTED LAYERS)</span>
            <h2 id="pillar-related-title">Explore the rest of the Rock One system.</h2>
          </div>
          <div className="pillar-related-grid">
            {related.map((item, index) => (
              <Link href={`/${item.slug}`} key={item.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pillar-cta flow-section" aria-labelledby="pillar-cta-title">
          <span>(START)</span>
          <h2 id="pillar-cta-title">Want this layer built into your business?</h2>
          <p>
            Tell us what you are building, automating, or trying to improve. We will map
            the right Rock One path for your website, systems, AI, and revenue workflow.
          </p>
          <div className="pillar-actions">
            <Link href="/contact" className="pillar-primary">
              Start a Project {arrow}
            </Link>
            <TrackedContactLink href="tel:+918197731627" className="pillar-secondary">
              +91 8197731627
            </TrackedContactLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

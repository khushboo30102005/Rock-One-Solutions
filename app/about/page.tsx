import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import HeroBackgroundScene from "@/components/HeroBackgroundScene";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us | Leading Tech & AI Solutions Partner | Rock One Solutions",
  description:
    "Learn about Rock One Solutions. We empower growing businesses with custom CRM systems, AI Voice Agents, dedicated remote teams, and scalable software solutions.",
  openGraph: {
    title: "About Us | Leading Tech & AI Solutions Partner | Rock One Solutions",
    description:
      "Learn about Rock One Solutions. We empower growing businesses with custom CRM systems, AI Voice Agents, dedicated remote teams, and scalable software solutions.",
    url: "https://rockonesolutions.com/about/",
  },
};

const iconProps = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

type Item = { title: string; body: string; icon: ReactNode; href?: string };

const values: Item[] = [
  {
    title: "Clarity first",
    body:
      "We remove the jargon and give you a clear plan, transparent scope, and honest timelines from day one.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    )
  },
  {
    title: "Craftsmanship",
    body:
      "Every website, workflow, and interface is built with care — polished details, clean structure, and real performance.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 15.9 6.9 18l1.2-5.6L3.9 8.6 9.5 8z" />
      </svg>
    )
  },
  {
    title: "True partnership",
    body:
      "You get a clear owner, weekly progress rhythm, and direct communication with the people shaping the work.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <circle cx="8.5" cy="9" r="3" />
        <circle cx="16" cy="10.5" r="2.5" />
        <path d="M3.5 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6M14.5 18.6c0-2.2 1.6-3.7 3.8-3.7 1.4 0 2.6.6 3.2 1.7" />
      </svg>
    )
  },
  {
    title: "Accountability",
    body:
      "We measure what matters and stand behind the results, with ongoing support long after launch day.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 3l7 3v5.5c0 4-3 6.6-7 8-4-1.4-7-4-7-8V6z" />
        <path d="M8.8 12l2.2 2.2 4.2-4.4" />
      </svg>
    )
  }
];

const services: Item[] = [
  {
    title: "Custom Web Design",
    body:
      "We plan the pages, proof, and next step around how your buyers decide, then build a site your team can update confidently.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <rect x="3" y="4.5" width="18" height="15" rx="2" />
        <path d="M3 9h18M7 6.5h.01M9.5 6.5h.01" />
      </svg>
    )
  },
  {
    title: "AI Consultation",
    body:
      "We analyze your business goals and create a clear, step-by-step AI adoption plan that fits how you actually work.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <rect x="6" y="6" width="12" height="12" rx="2.2" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
        <text x="12" y="14.6" textAnchor="middle" fontSize="6.4" fontWeight={700} fill="currentColor" stroke="none">AI</text>
      </svg>
    )
  },
  {
    title: "Website Redesign",
    body:
      "We protect what already works, keep important URLs intact, and rebuild the pages that are losing trust or dropping leads.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M20 11a8 8 0 1 0-1.6 5.3" />
        <path d="M20 5v5h-5" />
      </svg>
    )
  },
  {
    title: "UX / UI Web Design",
    body:
      "We map the path from first visit to inquiry, then design screens that make the next action obvious on phone and desktop.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 9.5h17M7 14h5M7 16.5h8" />
      </svg>
    )
  },
  {
    title: "Search Engine Optimization",
    body:
      "We clean the technical base, structure pages around buyer searches, and improve visibility for the work you actually sell.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5M8.5 11.5l2 2 3.5-4" />
      </svg>
    )
  },
  {
    title: "Paid Media",
    body:
      "We run ads only where the lead can be tracked into CRM, so spend is judged on real inquiries instead of surface metrics.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M3 10v4h3l6 4V6L6 10z" />
        <path d="M16.5 9.5a4 4 0 0 1 0 5M19 7a7.5 7.5 0 0 1 0 10" />
      </svg>
    )
  },
  {
    title: "Remote Team",
    body:
      "Dedicated remote support for recurring website, software, SEO, CRM, and automation tasks during an agreed first-priority shift.",
    href: "/remote-tech-team",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <rect x="3.5" y="5" width="17" height="11.5" rx="2" />
        <path d="M8 20h8M12 16.5V20M8 10.5h.01M11.5 10.5h.01M15 10.5h.01" />
        <path d="M7.5 13.4h9" />
      </svg>
    )
  }
];

const faqs = [
  {
    q: "What services does Rock One Solutions offer?",
    a: "We design and build custom websites, handle redesigns and UX/UI, offer AI consultation, SEO, and paid media — plus CRM/ERP systems and revenue automation that connect it all together."
  },
  {
    q: "What types of clients do you work with?",
    a: "Recent work includes Auto Parts CRM for Intracia Technologies, plus websites and inquiry flows for Mee Auto Parts, Ferme Foods, and Mee Car Rentals."
  },
  {
    q: "What makes Rock One different?",
    a: "We connect design, software, and growth into one operating system instead of shipping siloed deliverables — so your website, workflows, and reporting actually work together."
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer maintenance, updates, and continuous optimization so your product stays healthy, secure, and ready to scale over time."
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but most websites ship in about 3 to 8 weeks. You get a clear plan, transparent milestones, and predictable timelines up front."
  },
  {
    q: "Can you tailor solutions to our specific needs?",
    a: "Every build is custom. We never force a template on your brand — we shape the platform and workflows around your business model and goals."
  },
  {
    q: "Do you work with businesses outside Bengaluru?",
    a: "Absolutely. We are based in Bengaluru but work with clients remotely across regions and time zones."
  },
  {
    q: "How do we get started?",
    a: "Reach out for a quick consultation. We will map the website, automation, and growth workflow your business actually needs, then share a clear plan."
  }
];

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="about" />

      <main className="about-main">
        <section className="about-hero" aria-labelledby="about-hero-title">
          <HeroBackgroundScene />
          <div className="about-hero-meta">
            <span>Bengaluru, India</span>
            <span>Development | AI Automation | Revenue Systems</span>
          </div>
          <div className="about-hero-inner">
            <span className="about-badge">About Rock One Solutions</span>
            <h1 id="about-hero-title">
              About Rock One Solutions Your Tech & AI 
              <span> Solutions Partner.</span>
            </h1>
            <p>
              We are a Bengaluru studio building websites, CRM workflows, and
              clean handoffs for teams like Intracia Technologies, Mee Auto Parts,
              Ferme Foods, and Mee Car Rentals.
            </p>
            <div className="about-hero-actions">
              <Link href="/contact" className="about-btn-primary">
                Start a Project {arrow}
              </Link>
              <TrackedContactLink href="tel:+918197731627" className="about-btn-ghost">
                Speak with our expert
              </TrackedContactLink>
            </div>
          </div>
          <aside className="about-hero-proof" aria-label="Rock One operating strengths">
            <span>How we work</span>
            <strong>Design, systems, and growth handled as one connected layer.</strong>
            <div className="about-proof-stack">
              <div>
                <small>01</small>
                <b>Premium digital presence</b>
              </div>
              <div>
                <small>02</small>
                <b>CRM and workflow clarity</b>
              </div>
              <div>
                <small>03</small>
                <b>Revenue-focused execution</b>
              </div>
            </div>
          </aside>
        </section>

        <section className="about-who" aria-labelledby="about-who-title">
          <div className="about-who-head">
            <span className="section-kicker about-kicker">Who we are</span>
            <h2 id="about-who-title">
              A digital partner that covers the website, the software, and the growth
              layer.
            </h2>
          </div>
          <div className="about-who-body">
            <p>
              Rock One Solutions is a Bengaluru studio that builds the website and
              the operating layer behind it: CRM, follow-up handoffs, reporting,
              and support flows that keep every inquiry visible.
            </p>
            <p>
              Recent work includes Auto Parts CRM for Intracia Technologies, plus
              websites and inquiry flows for Mee Auto Parts, Ferme Foods, and Mee
              Car Rentals.
            </p>
          </div>
        </section>

        <section className="about-mv" aria-label="Mission and vision">
          <article className="about-mv-card about-mission">
            <span className="about-mv-tag">Our mission</span>
            <h3>
              Empower businesses with smart, fast, and scalable digital solutions.
            </h3>
            <p>
              We exist to simplify technology and provide results that truly make a
              difference — clearing away complexity so our clients can focus on growth.
            </p>
          </article>
          <article className="about-mv-card about-vision">
            <span className="about-mv-tag">Our vision</span>
            <h3>
              Be the technical partner every ambitious brand wishes they had sooner.
            </h3>
            <p>
              A world where great businesses are never held back by their tools — where
              design, software, and growth work as one connected system.
            </p>
          </article>
        </section>

        <section className="about-values" aria-labelledby="about-values-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">What we stand for</span>
            <h2 id="about-values-title">The principles behind every project.</h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.title}>
                <span className="about-value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-services" aria-labelledby="about-services-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">What we do</span>
            <h2 id="about-services-title">
              Capabilities that take you from idea to measurable growth.
            </h2>
          </div>
          <div className="about-services-grid">
            {services.map((service) => (
              service.href ? (
                <Link className="about-service-card about-service-link" href={service.href} key={service.title}>
                  <span className="about-service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <span className="about-service-more">
                    Explore Remote Team {arrow}
                  </span>
                </Link>
              ) : (
                <article className="about-service-card" key={service.title}>
                  <span className="about-service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              )
            ))}
          </div>
        </section>

        <section className="about-faq" aria-labelledby="about-faq-title">
          <div className="about-faq-head">
            <span className="section-kicker about-kicker">FAQ</span>
            <h2 id="about-faq-title">Answers to the questions we hear most.</h2>
            <p>
              Still curious about something? Reach out and we will walk you through it
              in a quick call.
            </p>
          </div>
          <div className="about-faq-list">
            {faqs.map((faq, index) => (
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

        <section className="about-cta" aria-labelledby="about-cta-title">
          <div className="about-cta-inner">
            <h2 id="about-cta-title">Let&rsquo;s build something worth talking about.</h2>
            <p>
              Tell us where you want to go, and we will map the website, automation, and
              growth workflow to get you there.
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

import type { Metadata } from "next";
import Link from "next/link";
import ClientWorkShowcase from "@/components/ClientWorkShowcase";
import HeroBackgroundScene from "@/components/HeroBackgroundScene";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import "./remote-tech-team.css";

export const metadata: Metadata = {
  title: "Hire Dedicated Remote Tech Teams | Rock One Solutions",
  description:
    "Scale your development and operational capacity with skilled remote tech teams from Rock One Solutions. Dedicated technical support for CRM, web, app, and automation projects.",
  alternates: { canonical: "/remote-tech-team/" },
  openGraph: {
    title: "Hire Dedicated Remote Tech Teams | Rock One Solutions",
    description:
      "Scale your development and operational capacity with skilled remote tech teams from Rock One Solutions. Dedicated technical support for CRM, web, app, and automation projects.",
    url: "/remote-tech-team/",
    type: "website",
  },
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const supportScope = [
  "Website updates",
  "CMS changes",
  "Frontend fixes",
  "Landing pages",
  "SEO tasks",
  "Tracking setup",
  "CRM updates",
  "Automation checks",
  "Speed improvements",
  "Small features",
  "Hosting support",
  "Weekly reporting"
];

const priorityRules = [
  {
    title: "Protected shift",
    body:
      "Your agreed support shift is reserved for your work. During that time, your tasks are handled first."
  },
  {
    title: "Full-shift focus",
    body:
      "If one task needs the entire shift, we stay with that task instead of splitting attention across unrelated work."
  },
  {
    title: "Outside-shift urgency",
    body:
      "Urgent work outside the agreed timing shift can be covered through a separate response-time agreement."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Map the workload",
    body: "We review the recurring tasks, stack, access, urgency, and the support rhythm your team actually needs."
  },
  {
    step: "02",
    title: "Set the shift",
    body: "We define the timing window, communication channel, task ownership, and reporting format before work starts."
  },
  {
    step: "03",
    title: "Run priority support",
    body: "During the agreed shift, your resource focuses on your assigned tasks and keeps progress visible."
  },
  {
    step: "04",
    title: "Report and adjust",
    body: "You get clear updates on work completed, open items, blockers, and whether the hours need adjustment."
  }
];

const comparisons = [
  {
    label: "Full-time hire",
    body: "Useful when work fills the day, expensive when the workload is only a few hours."
  },
  {
    label: "Freelancer",
    body: "Flexible, but context, availability, and delivery discipline often reset from task to task."
  },
  {
    label: "Rock One remote team",
    body: "Reserved support shift, first-priority handling, managed delivery, and backup coverage from an agency team."
  }
];

const plans = [
  "Daily fixed support shift",
  "Weekly planned support block",
  "Monthly flexible retainer"
];

const faqs = [
  {
    q: "Is this person only working for us?",
    a: "The model is based on an agreed support shift. During that shift, your work is treated as first priority. If one urgent task needs the full shift, we keep focus on that task for the agreed shift."
  },
  {
    q: "How do you guarantee priority?",
    a: "Your plan defines an agreed support shift. During that shift, your tasks are handled first instead of being treated like random freelance work."
  },
  {
    q: "Can we increase or reduce hours later?",
    a: "Yes. We can start with a smaller block and adjust after we understand your real workload."
  },
  {
    q: "Who owns the code and work delivered?",
    a: "You own the work delivered for your business. We can also work under NDA and follow your access, repository, and documentation process."
  },
  {
    q: "What if we need urgent support?",
    a: "Inside your agreed timing shift, urgent tasks are handled first, even if that task needs the full shift. Outside the agreed shift, we can set a separate support agreement based on response time and availability."
  }
];

export default function RemoteTechTeamPage() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="remote" />

      <main className="remote-main">
        <section className="remote-hero" aria-labelledby="remote-hero-title">
          <HeroBackgroundScene />
          <div className="remote-hero-meta">
            <span>Bengaluru, India</span>
            <span>Priority remote support for recurring technical work</span>
          </div>

          <div className="remote-hero-grid">
            <div className="remote-hero-copy">
              <span className="remote-label">(REMOTE TEAM)</span>
              <h1 id="remote-hero-title">
                Dedicated Remote Tech Teams by Rock One Solutions
              </h1>
              <p>
                For companies with regular website, software, CRM, SEO, or
                automation tasks that need priority attention inside a planned
                remote support shift.
              </p>
              <div className="remote-hero-actions">
                <Link href="/contact" className="about-btn-primary">
                  Discuss your workload {arrow}
                </Link>
                <TrackedContactLink href="tel:+918197731627" className="about-btn-ghost">
                  +91 8197731627
                </TrackedContactLink>
              </div>
            </div>

            <aside className="remote-shift-card" aria-label="Remote team operating model">
              <span>Operating model</span>
              <strong>Agreed shift. First-priority work.</strong>
              <p>
                Your tasks stay protected during the agreed timing window. If one
                important task uses the whole shift, that is part of the model.
              </p>
              <div className="remote-shift-grid">
                <div>
                  <small>Best for</small>
                  <b>1-2 hrs/day</b>
                </div>
                <div>
                  <small>Support</small>
                  <b>Remote</b>
                </div>
                <div>
                  <small>Urgency</small>
                  <b>In-shift first</b>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="remote-fit flow-section" aria-labelledby="remote-fit-title">
          <div className="remote-section-title">
            <span className="remote-label">(WHY THIS EXISTS)</span>
            <h2 id="remote-fit-title">Small recurring work should not require a full-time salary.</h2>
          </div>
          <div className="remote-fit-copy">
            <p>
              Many teams have real technical work every week: updates, fixes,
              CRM changes, landing pages, reporting, tracking, and automation
              checks. The workload matters, but it does not always fill a full day.
            </p>
            <p>
              Rock One gives you a managed remote resource with protected time,
              continuity, and clear ownership, so your team gets reliable support
              without hiring overhead.
            </p>
          </div>
        </section>

        <section className="remote-scope flow-section" aria-labelledby="remote-scope-title">
          <div className="remote-section-title">
            <span className="remote-label">(SUPPORT SCOPE)</span>
            <h2 id="remote-scope-title">The kind of work we can take off your team.</h2>
          </div>
          <div className="remote-scope-grid">
            {supportScope.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <ClientWorkShowcase
          kicker="Client partnership"
          title="Remote support with continuity."
          intro="An embedded working relationship designed to keep priorities moving without rebuilding the technical team for every task."
          layout="feature"
          items={[
            {
              client: "Intracia Technologies",
              title: "Visit Intracia Technologies",
              summary:
                "Dedicated working capacity, priority-led planning, and ongoing technical support delivered through a consistent remote partnership.",
              image: "/client-logos/intracia-technologies-client.png",
              imageAlt: "Intracia Technologies logo",
              imageMode: "brand",
              href: "https://intraciatechnologies.com/",
              label: "Remote Team",
              external: true,
            },
          ]}
        />

        <section className="remote-priority flow-section" aria-labelledby="remote-priority-title">
          <div className="remote-section-title is-dark">
            <span className="remote-label">(PRIORITY POLICY)</span>
            <h2 id="remote-priority-title">Your shift is protected for your work.</h2>
          </div>
          <div className="remote-priority-grid">
            {priorityRules.map((rule, index) => (
              <article key={rule.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="remote-process flow-section" aria-labelledby="remote-process-title">
          <div className="remote-section-title">
            <span className="remote-label">(HOW IT WORKS)</span>
            <h2 id="remote-process-title">A simple operating rhythm.</h2>
          </div>
          <div className="remote-process-list">
            {processSteps.map((step) => (
              <article key={step.step}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="remote-model flow-section" aria-labelledby="remote-model-title">
          <div className="remote-section-title">
            <span className="remote-label">(OPERATING MODEL)</span>
            <h2 id="remote-model-title">A cleaner alternative to loose support.</h2>
          </div>
          <div className="remote-model-grid">
            {comparisons.map((item) => (
              <article key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="remote-plans flow-section" aria-labelledby="remote-plans-title">
          <div className="remote-section-title">
            <span className="remote-label">(ENGAGEMENT)</span>
            <h2 id="remote-plans-title">Pay for the capacity you need.</h2>
          </div>
          <div className="remote-plan-row">
            {plans.map((plan) => (
              <span key={plan}>{plan}</span>
            ))}
          </div>
          <p>
            Plans are scoped after we understand your stack, task volume, timing,
            access, and expected response needs.
          </p>
        </section>

        <section className="remote-faq flow-section" aria-labelledby="remote-faq-title">
          <div className="about-faq-head">
            <span className="remote-label">(FAQ)</span>
            <h2 id="remote-faq-title">Questions before you hire remote support.</h2>
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

        <section className="about-cta" aria-labelledby="remote-cta-title">
          <div className="about-cta-inner">
            <h2 id="remote-cta-title">Need regular tech work, but not a full-time employee?</h2>
            <p>
              Tell us what comes up every day or week. We will suggest the right
              remote support shift and urgent-support arrangement.
            </p>
            <div className="about-cta-actions">
              <Link href="/contact" className="about-btn-primary">
                Book a consultation {arrow}
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

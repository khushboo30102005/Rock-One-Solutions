import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact | Rock One Solutions",
  description:
    "Tell us about your website, app, CRM, or automation project. Share a brief and get a scoped proposal within two working days.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | Rock One Solutions",
    description:
      "Tell Rock One Solutions about your website, app, CRM, automation, or growth project.",
    url: "/contact/",
    type: "website",
  },
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const reasons = [
  {
    title: "A new website or rebuild",
    body: "Design, build, and launch — including migration from whatever you are on today."
  },
  {
    title: "Custom software or CRM",
    body: "Internal systems that hold your operation on one record, from lead to invoice."
  },
  {
    title: "AI automation",
    body: "Agents, workflows, and hand-offs that remove the manual steps between tools."
  },
  {
    title: "Growth and performance",
    body: "SEO, paid media, and performance marketing measured against pipeline."
  }
];

const contactFaqs = [
  {
    q: "How soon will someone reply?",
    a: "Within one working day. If you send a brief with a goal and timeline, you will usually have a scoped proposal within two."
  },
  {
    q: "Do you have a minimum project size?",
    a: "Starting points are available on our pricing page. Smaller audits, improvements, and clearly defined additions may cost less. Every project receives a fixed price after we review the brief."
  },
  {
    q: "Can we start with a call instead?",
    a: "Yes. Call +91 8197731627 during business hours, or send your number through the form and we will arrange a time that suits you."
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with teams across time zones and agree an overlap window up front so reviews and hand-offs never stall."
  }
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />

      <main className="contact-main">
        <section className="contact-hero" aria-labelledby="contact-hero-title">
          <div className="contact-hero-inner">
            <span className="about-badge">Contact</span>
            <h1 id="contact-hero-title">
              Tell us what you are building,
              <span> and we will scope it.</span>
            </h1>
            <p>
              Share the goal, the timeline, and a budget range if you have one. You get a
              written scope, a milestone plan, and a fixed price — usually within two
              working days.
            </p>
          </div>
        </section>

        <section className="contact-body" aria-labelledby="contact-form-title">
          <div className="contact-body-inner">
            <div className="contact-form-panel">
              <span className="section-kicker about-kicker">Send a brief</span>
              <h2 id="contact-form-title">Start the conversation.</h2>
              <p>
                Every field helps us route your enquiry to the right person the first
                time. <Link href="/pricing">See starting points</Link> before you send it.
              </p>
              <ContactForm variant="full" />
            </div>

            <aside className="contact-aside">
              <div className="contact-aside-card">
                <h3>Reach us directly</h3>
                <TrackedContactLink href="tel:+918197731627">
                  <span>Phone</span>
                  <strong>+91 8197731627</strong>
                </TrackedContactLink>
                <TrackedContactLink href="mailto:Info@rockonesolutions.com">
                  <span>Email</span>
                  <strong>Info@rockonesolutions.com</strong>
                </TrackedContactLink>
                <div>
                  <span>Office</span>
                  <strong>Site No. 157, 9th Main, Sector 06, HSR Layout, Bengaluru, Karnataka, 560102</strong>
                </div>
                <div>
                  <span>Hours</span>
                  <strong>Mon–Sat, 11:00–20:00 IST</strong>
                </div>
              </div>

              <div className="contact-aside-card is-muted">
                <h3>What people contact us about</h3>
                <ul>
                  {reasons.map((reason) => (
                    <li key={reason.title}>
                      <strong>{reason.title}</strong>
                      <span>{reason.body}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="contact-aside-link">
                  Browse all services {arrow}
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-faq" aria-labelledby="contact-faq-title">
          <div className="about-faq-head">
            <span className="section-kicker about-kicker">Before you write</span>
            <h2 id="contact-faq-title">Quick answers.</h2>
            <p>
              The things most people ask before sending the first message.
            </p>
          </div>
          <div className="about-faq-list">
            {contactFaqs.map((faq) => (
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
      </main>

      <SiteFooter />
    </>
  );
}

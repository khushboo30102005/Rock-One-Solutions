import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AgileProcessSection from "@/components/AgileProcessSection";
import ClientReviewsCarousel from "@/components/ClientReviewsCarousel";
import CrmErpShowcase from "@/components/CrmErpShowcase";
import HeroBackgroundScene from "@/components/HeroBackgroundScene";
import IndustrySpecializations from "@/components/IndustrySpecializations";
import ScrollAnimator from "@/components/ScrollAnimator";
import ServiceStackShowcase from "@/components/ServiceStackShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TechStackMarquee from "@/components/TechStackMarquee";
import TrackedContactLink from "@/components/TrackedContactLink";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blog/blog-data";

export const metadata: Metadata = {
  openGraph: {
    url: "https://rockonesolutions.com/",
  },
};

type ClientLogo = {
  name: string;
  logo: string;
  tone?: "dark";
  fit?: "mark";
};

const clientLogos: ClientLogo[] = [
  { name: "MeeAutoParts", logo: "/client-logos/mee-auto-parts.png" },
  { name: "SSP group", logo: "/client-logos/ssp-group.png" },
  { name: "American Freight Hub", logo: "/client-logos/american-freight-hub.png", tone: "dark" },
  { name: "Ferme Foods", logo: "/client-logos/ferme-foods.png" },
  { name: "Mee Car Rentals", logo: "/client-logos/mee-car-rentals.png" },
  { name: "DriveX Auto Parts", logo: "/client-logos/drivex-auto-parts.png" },
  { name: "Intracia Technologies", logo: "/client-logos/intracia-technologies-client.png" },
  {
    name: "Pacific Express Trucking",
    logo: "/client-logos/pacific-express-trucking.png",
    fit: "mark",
  },
  {
    name: "Subhash Chandra Jyotish",
    logo: "/client-logos/subhash-chandra-jyotish-mark.png",
    fit: "mark",
  },
];

const systems = [
  {
    title: "Rock One Build",
    text: "Websites, apps, and CRM planned as one build.",
    href: "/rock-one-build"
  },
  {
    title: "Rock One Automation",
    text: "Lead handoff, alerts, and follow-up without manual chasing.",
    href: "/rock-one-automation"
  },
  {
    title: "Agents & AI Consultation",
    text: "Practical AI use cases, agents, and future voice scope.",
    href: "/rock-one-agents-ai-consultation"
  },
  {
    title: "Revenue with Rock One",
    text: "Performance signals turned into clearer growth decisions.",
    href: "/revenue-with-rock-one-solution"
  }
];

const platformCards = [
  {
    title: "WordPress",
    focus: "Content-led business websites",
    logo: "/platform-logos/wordpress.svg",
    body: "Editorial pages, service websites, landing pages, and admin-friendly content updates."
  },
  {
    title: "Shopify",
    focus: "Product and commerce storefronts",
    logo: "/platform-logos/shopify.svg",
    body: "Product catalogs, conversion-focused storefronts, payments, checkout, and tracking."
  },
  {
    title: "Magento",
    focus: "Catalog-heavy commerce",
    logo: "/platform-logos/magento.svg",
    body: "Structured commerce for larger catalogs, pricing rules, and operation-heavy stores."
  }
];

const insightCards = blogPosts.slice(0, 3);

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rock%20One%20Solutions%20Bengaluru";

const clientReviews = [
  {
    quote:
      "Our Mee Car Rentals site needed to be quick and easy on mobile. Rock One Solutions delivered that. Clear pages, fast load, and a form customers actually use. Happy with the work.",
    name: "Info Mee Car Rentals",
    date: "September 2026",
    rating: 5,
  },
  {
    quote:
      "Rock One Solutions developed the DriveX Auto Parts website. It is clear, easy to use, and works well for our used-engine and transmission business. Good communication and a site we are happy to send customers to.",
    name: "DriveX Auto Parts",
    date: "September 2026",
    rating: 5,
  },
  {
    quote:
      "Rock One Solutions built our CRM at MEE Auto Parts.\n\nThis was our first time working with an Indian software company and it went well. They understood what we needed, delivered on time, and the system is easy for the team to use.\n\nLeads, orders, and documents are now in one place. It is fast on desktop and on the phone. We would use them again.\n\nMEE Auto Parts",
    name: "MEE Autoparts",
    date: "September 2026",
    rating: 5,
  },
  {
    quote:
      "Rock One Solutions handles our IT support and website updates, and the arrangement works well for us.\n\nWe did not want a full-time developer for regular site changes and small technical issues. Their remote team picks up the work, completes it, and keeps us updated. Website updates, fixes, and day-to-day IT support are handled without us chasing anyone.\n\nResponse is quick, the work is clean, and they already understand our setup, so we do not start from zero every time. Happy to continue with them and would recommend them for ongoing website and IT support.\n\nAyan Das\n\nCEO, Intracia Technologies",
    name: "Ayan Das",
    date: "September 2026",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="home" tone="dark" />

      <main className="alex-home">
        <section className="alex-hero" aria-labelledby="home-title">
          <HeroBackgroundScene />

          <div className="alex-hero-meta">
            <span>Bengaluru, India</span>
            <span>Development · AI Automation · Revenue Systems</span>
          </div>

          <div className="alex-hero-grid">
            <div className="alex-hero-main">
              <h1 id="home-title">
                A DIGITAL GROWTH STUDIO THAT BUILDS WEBSITES, CRM & AUTOMATION FOR BUSINESSES READY TO SCALE
              </h1>
            </div>

            <aside className="alex-hero-side" aria-label="Rock One capabilities">
              <span>5+ growth capabilities</span>
              <div className="alex-skill-stack">
                <Link href="/services/custom-website-development">WEB DEVELOPMENT</Link>
                <Link href="/rock-one-build">SOFTWARE & CRM</Link>
                <Link href="/rock-one-automation">AI AUTOMATION</Link>
                <Link href="/revenue-with-rock-one-solution">SEO + REVENUE</Link>
              </div>
              <p>
                We build polished digital systems your team can run with confidence.
              </p>
            </aside>
          </div>

        </section>

        <section className="alex-systems alex-systems-strip" aria-label="Rock One growth layers">
          <div className="alex-system-grid">
            {systems.map((item, index) => (
              <Link href={item.href} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="alex-logo-marquee" aria-label="Selected client partnerships">
          <div className="alex-logo-copy">
            <span>Selected client partnerships</span>
            <strong>Trusted by operators who need cleaner digital execution.</strong>
          </div>
          <div className="alex-logo-rail">
            <div className="alex-logo-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <span
                  className={`alex-logo-plate${client.tone ? ` is-${client.tone}` : ""}${client.fit ? ` is-${client.fit}` : ""}`}
                  key={`${client.name}-${index}`}
                >
                  <Image
                    src={client.logo}
                    alt={index < clientLogos.length ? `${client.name} logo` : ""}
                    width={client.fit === "mark" ? 128 : 260}
                    height={client.fit === "mark" ? 128 : 86}
                  />
                </span>
              ))}
            </div>
          </div>
        </section>

        <ServiceStackShowcase />

        <section className="crm-erp-section flow-section" id="crm-erp" aria-labelledby="crm-erp-title">
          <CrmErpShowcase />
        </section>

        <section className="platform-section flow-section flow-left" aria-labelledby="platform-title">
          <div className="platform-copy">
            <span className="section-kicker platform-kicker">CMS platforms tailored for client needs</span>
            <h2 id="platform-title">A CMS your team can actually run.</h2>
            <p>
              We choose the platform around how your team publishes, sells, and manages daily updates.
            </p>
          </div>

          <div className="platform-grid">
            {platformCards.map((platform, index) => (
              <article className="platform-card" key={platform.title}>
                <span className="platform-badge">
                  {platform.logo ? (
                    <img
                      src={platform.logo}
                      alt={`${platform.title} logo`}
                      className="platform-badge-logo"
                      width={28}
                      height={28}
                    />
                  ) : (
                    <strong>CS</strong>
                  )}
                </span>
                <div className="platform-card-body">
                  <div className="platform-card-titles">
                    <h3>{platform.title}</h3>
                    <span className="platform-focus">{platform.focus}</span>
                  </div>
                  <p>{platform.body}</p>
                </div>
                <span className="platform-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        <AgileProcessSection />

        <TechStackMarquee />

        <ClientReviewsCarousel reviews={clientReviews} listingUrl={googleReviewsUrl} />

        <IndustrySpecializations />

        <section className="alex-insights flow-section" id="blog" aria-labelledby="insights-title">
          <div className="alex-section-title">
            <span className="alex-label">(BLOG)</span>
            <h2 id="insights-title">Growth notes</h2>
          </div>
          <div className="alex-insight-grid">
            {insightCards.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <span>{post.category}</span>
                <h3>{post.cardTitle ?? post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="alex-contact flow-section" id="contact" aria-labelledby="contact-title">
          <div className="alex-contact-copy">
            <span className="alex-label">(CONTACT)</span>
            <h2 id="contact-title">Ready to build something cleaner?</h2>
            <p>
              Tell us what you want to improve. We will map the right next step.
            </p>
            <div className="alex-contact-links">
              <TrackedContactLink href="tel:+918197731627">+91 8197731627</TrackedContactLink>
              <TrackedContactLink href="mailto:Info@rockonesolutions.com">
                Info@rockonesolutions.com
              </TrackedContactLink>
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
          <div className="alex-contact-form-panel">
            <span>Project intake</span>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

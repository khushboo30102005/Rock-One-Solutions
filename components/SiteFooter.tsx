import type { ReactNode } from "react";
import Link from "next/link";
import { serviceCategories } from "@/app/services/services-data";
import TrackedContactLink from "@/components/TrackedContactLink";
import { SOCIAL_PROFILES } from "@/lib/schema/site";

const socialIcons: Record<(typeof SOCIAL_PROFILES)[number]["name"], ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-3.93z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
};

const footerServiceGroups = serviceCategories.map((category) => ({
  name: category.name,
  services: category.services.map((service) => ({
    label: service.title,
    slug: service.slug
  }))
}));

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="footer-inner">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand" aria-label="Rock One Solutions home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-monogram">R</span>
              <span className="brand-one">1</span>
            </span>
            <span className="brand-text">
              <strong>Rock One</strong>
              <small>Solutions</small>
            </span>
          </Link>
          <p>
            Premium websites, CRM-connected workflows, and growth systems for
            businesses that want a sharper digital front door.
          </p>
          <Link className="footer-cta" href="/contact">
            Start a Project
          </Link>
        </div>

        <div className="footer-columns">
          <div className="footer-link-group">
            <strong>Company</strong>
            <Link href="/work">Work</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/remote-tech-team">Remote Team</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-link-group footer-contact-group">
            <strong>Contact</strong>
            <TrackedContactLink href="tel:+918197731627">+91 8197731627</TrackedContactLink>
            <TrackedContactLink href="mailto:Info@rockonesolutions.com">
              Info@rockonesolutions.com
            </TrackedContactLink>
            <span>
              QUBEX SPACES Workspace - Site No. 157, Sector 06, 9th Main, HSR
              Layout, Bangalore - 560102, India
            </span>
            <span>GSTIN:- 29PAVPS8370D1ZI</span>
            <div className="footer-social">
              {SOCIAL_PROFILES.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Rock One Solutions on ${profile.name}`}
                >
                  {socialIcons[profile.name]}
                  {profile.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <section className="footer-services-section" aria-label="Footer services">
          <div className="footer-services-head">
            <strong>Services</strong>
            <Link href="/services">View all services</Link>
          </div>
          <div className="footer-service-groups">
            {footerServiceGroups.map((group) => (
              <div className="footer-service-group" key={group.name}>
                <span className="footer-service-category">{group.name}</span>
                <div className="footer-services-list">
                  {group.services.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-legal">
          <span>&copy; 2026 Rock One Solutions. All rights reserved.</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-bottom-meta">
          <span>Development | AI Automation | Revenue Systems</span>
          <a
            className="footer-directory-link"
            href="https://www.designrush.com/agency/website-design-development"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
          >
            DesignRush Verified Agency
          </a>
        </div>
      </div>
    </footer>
  );
}

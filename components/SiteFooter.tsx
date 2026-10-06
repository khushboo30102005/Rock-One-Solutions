import Link from "next/link";
import { serviceCategories } from "@/app/services/services-data";
import TrackedContactLink from "@/components/TrackedContactLink";

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

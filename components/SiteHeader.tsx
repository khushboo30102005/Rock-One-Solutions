"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavKey =
  | "home"
  | "about"
  | "services"
  | "pricing"
  | "remote"
  | "work"
  | "case-studies"
  | "blog"
  | "contact";

const navItems: { label: string; href: string; key: NavKey }[] = [
  { label: "Pricing", href: "/pricing", key: "pricing" },
  { label: "Work", href: "/work", key: "work" },
  { label: "Case Studies", href: "/case-studies", key: "case-studies" },
  { label: "Remote Team", href: "/remote-tech-team", key: "remote" },
  { label: "Blog", href: "/blog", key: "blog" },
  { label: "About", href: "/about", key: "about" }
];

const serviceGroups = [
  {
    label: "Build",
    services: [
      {
        label: "Website Development",
        slug: "custom-website-development",
        description: "Fast, conversion-focused websites"
      },
      {
        label: "Software Development",
        slug: "custom-software-development",
        description: "Purpose-built operational tools"
      },
      {
        label: "App Development",
        slug: "app-development",
        description: "Focused mobile products"
      },
      {
        label: "UX / UI Design",
        slug: "ux-ui-design",
        description: "Clear interfaces and user flows"
      }
    ]
  },
  {
    label: "Operate",
    services: [
      {
        label: "CRM Systems",
        slug: "crm-systems",
        description: "Leads, owners and follow-up in one place"
      },
      {
        label: "Workflow Automation",
        slug: "workflow-automation",
        description: "Less repetitive work between teams"
      },
      {
        label: "AI Voice Agent",
        slug: "ai-voice-agent",
        description: "Calls and follow-up at scale"
      },
      {
        label: "Search Optimization",
        slug: "seo",
        description: "Technical SEO and useful growth"
      }
    ]
  }
];

export default function SiteHeader({
  active,
  /** `dark` connects the navigation to pages with a dark hero or page ground. */
  tone = "light"
}: {
  active?: NavKey;
  tone?: "light" | "dark";
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`site-header${tone === "dark" ? " is-dark" : ""}${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Rock One Solutions home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-monogram">R</span>
            <span className="brand-one">1</span>
          </span>
          <span className="brand-text">
            <strong>Rock One</strong>
            <small>Solutions</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={`nav-link${active === "home" ? " active" : ""}`}>
            Home
          </Link>
          <div className="nav-dropdown">
            <Link
              href="/services"
              className={`nav-link has-chevron${active === "services" ? " active" : ""}`}
            >
              Services
            </Link>
            <div className="dropdown-panel" aria-label="Services menu">
              <div className="dropdown-intro">
                <span>What we build</span>
                <strong>Digital systems made for daily business.</strong>
                <p>From the first customer touchpoint to the work that follows.</p>
                <Link className="dropdown-view-all" href="/services">
                  View all services
                </Link>
              </div>
              <div className="dropdown-groups">
                {serviceGroups.map((group) => (
                  <div className="dropdown-group" key={group.label}>
                    <span>{group.label}</span>
                    {group.services.map((service) => (
                      <Link href={`/services/${service.slug}`} key={service.slug}>
                        <strong>{service.label}</strong>
                        <small>{service.description}</small>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {navItems.map((item) => (
            <Link
              className={`nav-link${active === item.key ? " active" : ""}`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className={`header-cta${active === "contact" ? " active" : ""}`} href="/contact">
          <span>Start a Project</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <span className="mobile-menu-eyebrow">Navigation</span>
            <Link className={active === "home" ? "active" : ""} href="/">
              Home
            </Link>
            <details className="mobile-services">
              <summary className={active === "services" ? "active" : ""}>Services</summary>
              <div>
                <Link className="mobile-services-all" href="/services">
                  View all services
                </Link>
                {serviceGroups.map((group) => (
                  <section key={group.label}>
                    <span>{group.label}</span>
                    {group.services.map((service) => (
                      <Link href={`/services/${service.slug}`} key={service.slug}>
                        {service.label}
                      </Link>
                    ))}
                  </section>
                ))}
              </div>
            </details>
            {navItems.map((item) => (
              <Link
                className={active === item.key ? "active" : ""}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
            <Link className={`mobile-cta${active === "contact" ? " active" : ""}`} href="/contact">
              Start a Project
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

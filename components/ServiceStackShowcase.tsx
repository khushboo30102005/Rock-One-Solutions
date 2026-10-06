"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Websites engineered for real business results",
    description:
      "Premium websites, landing pages, and redesigns built around trust, speed, and conversion.",
    cta: "Website Development",
    href: "/services/custom-website-development",
    image: "/service-visuals/compact/website-development.png"
  },
  {
    title: "Software and CRM built around your daily workflow",
    description:
      "Custom apps, client portals, CRM setup, and internal systems that make work easier to track.",
    cta: "Software & CRM",
    href: "/rock-one-build",
    image: "/service-visuals/compact/software-crm.png"
  },
  {
    title: "Automation that moves work without manual chasing",
    description:
      "Form routing, alerts, follow-up, and status updates connected into a cleaner operating flow.",
    cta: "Workflow Automation",
    href: "/rock-one-automation",
    image: "/service-visuals/compact/workflow-automation.png"
  },
  {
    title: "Growth systems focused on leads, not noise",
    description:
      "SEO, paid campaigns, tracking, and performance reviews shaped around qualified opportunities.",
    cta: "Revenue Growth",
    href: "/revenue-with-rock-one-solution",
    image: "/service-visuals/compact/seo-revenue.png"
  },
  {
    title: "AI consultation for practical business use cases",
    description:
      "Agent planning, AI-assisted workflows, and automation ideas designed for real operations.",
    cta: "AI Consultation",
    href: "/rock-one-agents-ai-consultation",
    image: "/service-visuals/compact/ai-consultation.png"
  },
  {
    title: "Remote tech support with priority execution",
    description:
      "Recurring website, software, CRM, SEO, and marketing tasks handled during your agreed shift.",
    cta: "Remote Team",
    href: "/remote-tech-team",
    image: "/service-visuals/compact/remote-support.png"
  }
];

export default function ServiceStackShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = services[activeIndex];

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4600);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  return (
    <section className="what-we-do-section flow-section" aria-labelledby="what-we-do-title">
      <div
        className="service-feature-showcase"
        role="region"
        aria-roledescription="carousel"
        aria-label="Services"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsPaused(false);
          }
        }}
      >
        <div className="service-feature-copy">
          <span className="section-kicker what-we-do-kicker">What can we do for you</span>
          <h2 id="what-we-do-title" key={active.title}>
            {active.title}
          </h2>
          <span className="service-title-rule" aria-hidden="true" />
        </div>

        <div className="service-feature-stage" aria-live="polite">
          <figure className="service-feature-visual" key={active.image}>
            <img src={active.image} alt="" />
          </figure>

          <p key={active.description}>{active.description}</p>
          <div className="service-feature-action">
            <Link className="service-feature-link" href={active.href}>
              {active.cta}
            </Link>
          </div>

          <div className="service-feature-navigation" aria-label="Carousel controls">
            <button
              type="button"
              className="service-feature-arrow"
              aria-label="Previous service"
              title="Previous service"
              onClick={showPrevious}
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div className="service-feature-dots" aria-label="Service slides">
              {services.map((service, index) => (
                <button
                  type="button"
                  key={service.cta}
                  aria-label={`Show ${service.cta}`}
                  aria-pressed={activeIndex === index}
                  className={activeIndex === index ? "is-active" : ""}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="service-feature-arrow"
              aria-label="Next service"
              title="Next service"
              onClick={showNext}
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

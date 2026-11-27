"use client";

import Link from "next/link";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent
} from "react";
import "./service-stack-showcase.css";

const services = [
  {
    label: "Website Development",
    title: "Websites engineered for real business results",
    description:
      "Premium websites, landing pages, and redesigns built around trust, speed, and conversion.",
    href: "/services/custom-website-development",
    tags: ["Landing pages", "Redesigns", "Conversion-focused"],
    image: "/service-visuals/compact-clear/website-development.png"
  },
  {
    label: "Software & CRM",
    title: "Software and CRM built around your daily workflow",
    description:
      "Custom apps, client portals, CRM setup, and internal systems that make work easier to track.",
    href: "/rock-one-build",
    tags: ["Client portals", "CRM setup", "Internal tools"],
    image: "/service-visuals/compact-clear/software-crm.png"
  },
  {
    label: "Workflow Automation",
    title: "Automation that moves work without manual chasing",
    description:
      "Form routing, alerts, follow-up, and status updates connected into a cleaner operating flow.",
    href: "/rock-one-automation",
    tags: ["Form routing", "Instant alerts", "Auto follow-ups"],
    image: "/service-visuals/compact-clear/workflow-automation.png"
  },
  {
    label: "Revenue Growth",
    title: "Growth systems focused on leads, not noise",
    description:
      "SEO, paid campaigns, tracking, and performance reviews shaped around qualified opportunities.",
    href: "/revenue-with-rock-one-solution",
    tags: ["SEO", "Paid campaigns", "Lead tracking"],
    image: "/service-visuals/compact-clear/seo-revenue.png"
  },
  {
    label: "AI Consultation",
    title: "AI consultation for practical business use cases",
    description:
      "Agent planning, AI-assisted workflows, and automation ideas designed for real operations.",
    href: "/rock-one-agents-ai-consultation",
    tags: ["Agent planning", "AI workflows", "Use-case mapping"],
    image: "/service-visuals/compact-clear/ai-consultation.png"
  },
  {
    label: "Remote Team",
    title: "Remote tech support with priority execution",
    description:
      "Recurring website, software, CRM, SEO, and marketing tasks handled during your agreed shift.",
    href: "/remote-tech-team",
    tags: ["Dedicated shift", "Priority tasks", "Ongoing support"],
    image: "/service-visuals/compact-clear/remote-support.png"
  }
];

const ROTATE_MS = 6000;
const SWIPE_PX = 50;
const pad = (n: number) => String(n).padStart(2, "0");

export default function ServiceStackShowcase() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [entered, setEntered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const swipeStart = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Rotate only while visible; play the entrance once.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setEntered(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const autoplay = inView && !isPaused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % services.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [active, autoplay]);

  const go = (index: number) => setActive((index + services.length) % services.length);

  // Pointer tilt + spotlight on the active slide (mouse only; writes CSS vars, no re-render).
  const onSlideMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || reducedMotion) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--wwd-mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--wwd-my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--wwd-rx", `${((0.5 - y) * 10).toFixed(2)}deg`);
    el.style.setProperty("--wwd-ry", `${((x - 0.5) * 14).toFixed(2)}deg`);
    el.classList.add("is-hover");
  };

  const onSlideLeave = (event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    el.style.setProperty("--wwd-rx", "0deg");
    el.style.setProperty("--wwd-ry", "0deg");
    el.classList.remove("is-hover");
  };

  // Touch swipe.
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") swipeStart.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStart.current === null) return;
    const dx = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      ref={sectionRef}
      // Adds the shared flow-section "is-visible" itself, so the reveal never depends
      // on the global ScrollAnimator having observed this exact DOM node.
      className={`what-we-do-section wwd flow-section${entered ? " is-in is-visible" : ""}${autoplay ? " is-playing" : ""}`}
      aria-labelledby="what-we-do-title"
    >
      <header className="wwd-header">
        <div className="wwd-heading">
          <span className="section-kicker what-we-do-kicker">What can we do for you</span>
          <h2 id="what-we-do-title">
            One partner for the work <em>behind your growth.</em>
          </h2>
        </div>

        <div className="wwd-controls">
          <span className="wwd-counter" aria-hidden="true">
            <strong key={active}>{pad(active + 1)}</strong> / {pad(services.length)}
          </span>
          <button
            type="button"
            className="wwd-arrow"
            onClick={() => go(active - 1)}
            aria-label="Previous service"
          >
            &larr;
          </button>
          <button
            type="button"
            className="wwd-arrow"
            onClick={() => go(active + 1)}
            aria-label="Next service"
          >
            &rarr;
          </button>
        </div>
      </header>

      <div
        className="wwd-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Our services"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsPaused(false);
          }
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
      >
        <div className="wwd-track">
          {services.map((service, index) => {
            const isActive = index === active;
            return (
              <article
                key={service.href}
                className={`wwd-slide${isActive ? " is-active" : index < active ? " is-before" : " is-after"}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${services.length}: ${service.label}`}
                aria-hidden={!isActive}
                inert={!isActive}
                onPointerMove={onSlideMove}
                onPointerLeave={onSlideLeave}
              >
                <span className="wwd-spotlight" aria-hidden="true" />

                <figure className="wwd-visual">
                  <span className="wwd-orbit wwd-orbit-outer" aria-hidden="true">
                    <i />
                  </span>
                  <span className="wwd-orbit wwd-orbit-inner" aria-hidden="true" />
                  <span className="wwd-tilt">
                    <span className="wwd-visual-glow" aria-hidden="true" />
                    <img src={service.image} alt="" width={300} height={300} />
                  </span>
                </figure>

                <div className="wwd-copy">
                  <span className="wwd-eyebrow">{service.label}</span>
                  <h3 className="wwd-title">
                    {service.title.split(" ").map((word, i) => (
                      <Fragment key={`${word}-${i}`}>
                        {i > 0 && " "}
                        <span className="wwd-word">
                          <span style={{ "--wwd-w": i } as CSSProperties}>{word}</span>
                        </span>
                      </Fragment>
                    ))}
                  </h3>
                  <p>{service.description}</p>
                  <ul className="wwd-tags" aria-label={`${service.label} includes`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <Link className="wwd-link" href={service.href}>
                    Explore {service.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="wwd-steps" role="tablist" aria-label="Choose a service">
        {services.map((service, index) => (
          <button
            key={service.href}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={service.label}
            className={`wwd-step${index === active ? " is-active" : ""}${index < active ? " is-done" : ""}`}
            onClick={() => go(index)}
          >
            <span className="wwd-step-bar">
              <span
                key={index === active ? `run-${active}` : "idle"}
                style={{ animationDuration: `${ROTATE_MS}ms` }}
              />
            </span>
            <span className="wwd-step-label">{service.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

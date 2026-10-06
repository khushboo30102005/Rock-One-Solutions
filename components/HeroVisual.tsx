"use client";

import RevenueFlowScene from "@/components/RevenueFlowScene";
import { useEffect, useState } from "react";

const capabilityCards = [
  {
    id: "web",
    label: "Web",
    status: "Build Ready",
    eyebrow: "Website development",
    title: "Premium websites that convert",
    body: "Responsive, fast pages with clear UX, persuasive sections, and clean conversion paths.",
    steps: [
      "Brand-first architecture",
      "Conversion UX and landing pages",
      "Performance-ready frontend"
    ],
    note: "A premium front door for trust, leads, and revenue.",
    tone: "tone-web"
  },
  {
    id: "automation",
    label: "Automation",
    status: "Connected",
    eyebrow: "Revenue automation",
    title: "Website to revenue workflow",
    body: "Forms, landing pages, CRM routing, follow-up, and reporting connected in one flow.",
    steps: [
      "Capture each inquiry",
      "Route the right workflow",
      "Trigger follow-up reports"
    ],
    note: "Frontend and automation architecture working as one system.",
    tone: "tone-automation"
  },
  {
    id: "marketing",
    label: "Marketing",
    status: "Tracking",
    eyebrow: "Digital marketing",
    title: "Campaigns connected to outcomes",
    body: "SEO, paid media, and reporting loops aligned to the pages and pipelines that grow revenue.",
    steps: [
      "Match traffic to intent",
      "Track lead quality",
      "Report revenue outcomes"
    ],
    note: "Marketing that feeds decisions, not just dashboards.",
    tone: "tone-marketing"
  }
];

export default function HeroVisual() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % capabilityCards.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual">
      <RevenueFlowScene />
      <aside
        className="automation-panel"
        aria-label="Rotating service capability preview"
      >
        <div className="panel-topline">
          <span>Rock One delivery layer</span>
          <strong>Live System</strong>
        </div>
        <div className="capability-stack">
          <div className="capability-track">
            {capabilityCards.map((card) => (
              <article
                className={`capability-card ${card.tone}${capabilityCards[activeCard].id === card.id ? " is-active" : ""}`}
                key={card.id}
              >
                <div className="pipeline-card">
                  <div>
                    <span>{card.eyebrow}</span>
                    <strong>{card.title}</strong>
                  </div>
                  <p>{card.body}</p>
                </div>
                <div className="workflow-list">
                  {card.steps.map((step, index) => (
                    <div className="workflow-step" key={step}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                      <strong>{index === card.steps.length - 1 ? "Live" : "Auto"}</strong>
                    </div>
                  ))}
                </div>
                <div className="automation-note">
                  <span />
                  <p>{card.note}</p>
                </div>
                <div className="capability-status">{card.status}</div>
              </article>
            ))}
          </div>
        </div>
        <div className="deck-indicators" aria-label="Select service card">
          {capabilityCards.map((card, index) => (
            <button
              className={activeCard === index ? "is-active" : ""}
              key={card.id}
              type="button"
              onClick={() => setActiveCard(index)}
            >
              {card.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}

import type { ReactNode } from "react";
import type { IndustryName } from "./industry-names";

/* `name` is typed against the shared list so this grid and the contact form's
   industry dropdown can never drift apart. */
type Industry = { name: IndustryName; icon: ReactNode };

const s = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

const industries: Industry[] = [
  {
    name: "Ecommerce",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="9" cy="20" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
        <path d="M2 3h2.2l2.3 12.1a1.8 1.8 0 0 0 1.8 1.5h8.5a1.8 1.8 0 0 0 1.8-1.4L21 7H5" />
      </svg>
    )
  },
  {
    name: "Manufacturing",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 21V11l5 3.2V11l5 3.2V8l4 2.2h1.8V21z" />
        <path d="M17 7l.5-3h1.6L20 7" />
        <path d="M3 21h18" />
      </svg>
    )
  },
  {
    name: "Travel & Hospitality",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.2" />
        <path d="M3.8 12h16.4" />
        <path d="M12 3.8c2.4 2.2 3.6 5.1 3.6 8.2s-1.2 6-3.6 8.2c-2.4-2.2-3.6-5.1-3.6-8.2S9.6 6 12 3.8Z" />
      </svg>
    )
  },
  {
    name: "Logistic",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M2.5 6.5h11v10h-11z" />
        <path d="M13.5 9.5h3.6l3.4 3.4v3.6h-7z" />
        <circle cx="6.5" cy="17.5" r="1.7" />
        <circle cx="17" cy="17.5" r="1.7" />
      </svg>
    )
  },
  {
    name: "Food",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 10.5a8 8 0 0 1 16 0z" />
        <path d="M3.6 13.5h16.8" />
        <path d="M5.5 16.5h13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2Z" />
      </svg>
    )
  },
  {
    name: "Automotive",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4.5 15.5 6.4 9.8A2.7 2.7 0 0 1 9 8h6a2.7 2.7 0 0 1 2.6 1.8l1.9 5.7" />
        <path d="M3 15.5h18v3.2a1.3 1.3 0 0 1-1.3 1.3H4.3A1.3 1.3 0 0 1 3 18.7z" />
        <path d="M5.5 12h13M6.5 15.5h2M15.5 15.5h2" />
      </svg>
    )
  },
  {
    name: "Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="m3 10 9-7 9 7" />
        <path d="M5.5 9v11h13V9M9.5 20v-6h5v6" />
      </svg>
    )
  }
];

export default function IndustrySpecializations() {
  return (
    <section className="industry-section" aria-labelledby="industry-title">
      <div className="industry-head">
        <h2 id="industry-title">Where this work shows up</h2>
        <p>
          Focused sectors where websites, CRM, follow-up, and daily operations need
          to stay connected.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((industry) => (
          <article className="industry-card" key={industry.name}>
            <span className="industry-icon">{industry.icon}</span>
            <span>{industry.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

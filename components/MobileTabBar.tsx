"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export default function MobileTabBar() {
  const pathname = usePathname() || "/";

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isAbout = pathname === "/about";
  const isRemote = pathname === "/remote-tech-team";

  return (
    <nav className="mobile-tabbar" aria-label="Mobile navigation">
      <Link href="/" className={`mobile-tab${isHome ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v9h12v-9" />
        </svg>
        <span>Home</span>
      </Link>

      <Link href="/services" className={`mobile-tab${isServices ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.6" />
          <rect x="13" y="13" width="7" height="7" rx="1.6" />
        </svg>
        <span>Services</span>
      </Link>

      <Link href="/contact" className="mobile-tab-cta" aria-label="Start a project">
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Link>

      <Link href="/remote-tech-team" className={`mobile-tab${isRemote ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <circle cx="8" cy="8.5" r="3" />
          <path d="M3.5 19c0-3 2-5 4.5-5s4.5 2 4.5 5" />
          <path d="M14.5 6.5h6M14.5 10h4.5M14.5 15h6M14.5 18.5h4" />
        </svg>
        <span>Team</span>
      </Link>

      <Link href="/about" className={`mobile-tab${isAbout ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <circle cx="12" cy="8.5" r="3.4" />
          <path d="M5.5 19c0-3 2.9-5 6.5-5s6.5 2 6.5 5" />
        </svg>
        <span>About</span>
      </Link>
    </nav>
  );
}

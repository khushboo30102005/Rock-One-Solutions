import type { ReactNode, SVGProps } from "react";
import type { Platform } from "./creators-data";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps, children: ReactNode, filled = false) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
    {...(filled
      ? { fill: "currentColor" }
      : {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.8,
          strokeLinecap: "round" as const,
          strokeLinejoin: "round" as const,
        })}
    {...props}
  >
    {children}
  </svg>
);

export const InstagramIcon = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </>
  );

export const YouTubeIcon = (p: IconProps) =>
  base(
    p,
    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.1V8.9l5.2 3.1z" />,
    true
  );

export const FacebookIcon = (p: IconProps) =>
  base(
    p,
    <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" />,
    true
  );

export const LinkedInIcon = (p: IconProps) =>
  base(
    p,
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-3.93z" />,
    true
  );

export const GlobeIcon = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  );

export const ArrowIcon = (p: IconProps) => base(p, <path d="M5 12h14M13 6l6 6-6 6" />);

export const ArrowUpRightIcon = (p: IconProps) => base(p, <path d="M7 17 17 7M8 7h9v9" />);

export const CheckIcon = (p: IconProps) => base(p, <path d="M5 12.5l4 4 10-10" />);

export const MailIcon = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  );

export const PhoneIcon = (p: IconProps) =>
  base(
    p,
    <path d="M6.6 3.5h2.6l1.4 4-2 1.4a12 12 0 0 0 6.5 6.5l1.4-2 4 1.4v2.6a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
  );

export const platformIcons: Record<Platform, (p: IconProps) => ReactNode> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
};

/* Niche glyphs — simple line marks, one per audience type. */
export const nicheIcons: Record<string, ReactNode> = {
  gaming: base(
    {},
    <>
      <path d="M7.5 8h9a4.5 4.5 0 0 1 4.3 5.8l-.9 3a2.4 2.4 0 0 1-4.1.9L14 15.5h-4l-1.8 2.2a2.4 2.4 0 0 1-4.1-.9l-.9-3A4.5 4.5 0 0 1 7.5 8z" />
      <path d="M8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01" />
    </>
  ),
  comedy: base(
    {},
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14.5c1 1.4 2.4 2 4 2s3-.6 4-2M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  cooking: base(
    {},
    <>
      <path d="M6 11h12v2a6 6 0 0 1-12 0z" />
      <path d="M4 11h16M9 4.5c0 1.2 1 1.2 1 2.5M13 4.5c0 1.2 1 1.2 1 2.5" />
    </>
  ),
  pets: base(
    {},
    <>
      <circle cx="7" cy="9" r="1.6" />
      <circle cx="11" cy="6.5" r="1.6" />
      <circle cx="15" cy="6.5" r="1.6" />
      <circle cx="18.5" cy="10" r="1.6" />
      <path d="M8.5 16.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 1.6-1.2 2.5-2.6 2.5-.7 0-1-.3-1.4-.3s-.7.3-1.4.3c-1.4 0-2.6-.9-2.6-2.5z" />
    </>
  ),
  ai: base(
    {},
    <>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M9.5 10.5h.01M14.5 10.5h.01M10 14h4M12 3v3M12 18v3M3 12h3M18 12h3" />
    </>
  ),
  movies: base(
    {},
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M7 5v14M17 5v14M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" />
    </>
  ),
};

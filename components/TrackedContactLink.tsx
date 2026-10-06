"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEmailClick, trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

type TrackedContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

function getTracker(href: string) {
  const normalizedHref = href.toLowerCase();

  if (normalizedHref.startsWith("tel:")) return trackPhoneCall;
  if (normalizedHref.startsWith("mailto:")) return trackEmailClick;
  if (normalizedHref.includes("wa.me") || normalizedHref.includes("whatsapp")) {
    return trackWhatsApp;
  }

  return undefined;
}

export default function TrackedContactLink({
  children,
  href,
  onClick,
  ...props
}: TrackedContactLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        getTracker(href)?.();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

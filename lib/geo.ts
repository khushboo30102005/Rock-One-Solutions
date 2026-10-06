"use client";

import { useEffect, useState } from "react";

// Since the site is a static export (no server), the visitor's country is
// resolved in the browser via a free IP-geolocation lookup. The result is
// cached at module scope and shared across every component that asks, so the
// network request happens at most once per page load.

let cachedIsInternational: boolean | null = null;
let inFlight: Promise<boolean> | null = null;
const subscribers = new Set<(value: boolean) => void>();

async function detectIsInternational(): Promise<boolean> {
  if (cachedIsInternational !== null) return cachedIsInternational;
  if (inFlight) return inFlight;

  inFlight = (async () => {
    let outsideIndia = false; // default to India / INR on any failure
    try {
      const res = await fetch("https://ipwho.is/?fields=country_code", {
        cache: "no-store"
      });
      const data = await res.json();
      const code =
        typeof data?.country_code === "string"
          ? data.country_code.toUpperCase()
          : "";
      if (code && code !== "IN") outsideIndia = true;
    } catch {
      outsideIndia = false;
    }
    cachedIsInternational = outsideIndia;
    subscribers.forEach((cb) => cb(outsideIndia));
    return outsideIndia;
  })();

  return inFlight;
}

export type GeoState = {
  /** True once the lookup has resolved (or failed). */
  ready: boolean;
  /** True when the visitor appears to be outside India. */
  isInternational: boolean;
};

export function useIsInternational(): GeoState {
  const [state, setState] = useState<GeoState>(
    cachedIsInternational === null
      ? { ready: false, isInternational: false }
      : { ready: true, isInternational: cachedIsInternational }
  );

  useEffect(() => {
    if (cachedIsInternational !== null) {
      setState({ ready: true, isInternational: cachedIsInternational });
      return;
    }
    const cb = (value: boolean) =>
      setState({ ready: true, isInternational: value });
    subscribers.add(cb);
    void detectIsInternational();
    return () => {
      subscribers.delete(cb);
    };
  }, []);

  return state;
}

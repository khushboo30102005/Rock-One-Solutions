"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import TrackedContactLink from "@/components/TrackedContactLink";

export default function ConsultationPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setDismissed(true);
    document.body.style.overflow = "";
    try {
      sessionStorage.setItem("consultation_popup_dismissed", "1");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("consultation_popup_dismissed") === "1") {
        setDismissed(true);
        return;
      }
    } catch {}

    // Trigger 1: after 60 seconds
    const timer = setTimeout(() => {
      if (!dismissed) show();
    }, 60_000);

    // Trigger 2: exit intent (mouse leaves viewport top)
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        show();
      }
    };

    // Trigger 2b: beforeunload for mobile / tab close
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // We can't show a custom popup on beforeunload,
      // but the exit-intent mouse handler covers desktop.
      // On mobile, the timer is the primary trigger.
    };

    document.addEventListener("mouseout", handleExitIntent);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleExitIntent);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dismissed, show]);

  // Also listen for visibilitychange (user switching tabs on mobile)
  useEffect(() => {
    if (dismissed) return;

    const handleVisibility = () => {
      if (document.visibilityState === "hidden" && !dismissed) {
        // Can't show popup when hidden, but mark intent
        // Show when they come back
      }
      if (document.visibilityState === "visible" && !visible && !dismissed) {
        // If they come back after trying to leave, show popup
      }
    };

    let hasBeenVisible = false;
    const handleVisChange = () => {
      if (document.visibilityState === "hidden") {
        hasBeenVisible = true;
      }
      if (document.visibilityState === "visible" && hasBeenVisible && !dismissed) {
        show();
      }
    };

    document.addEventListener("visibilitychange", handleVisChange);
    return () => document.removeEventListener("visibilitychange", handleVisChange);
  }, [dismissed, visible, show]);

  if (!visible) return null;

  return (
    <div className="consultation-overlay" onClick={close}>
      <div
        className="consultation-popup"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Free consultation"
      >
        <button className="consultation-close" onClick={close} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="consultation-badge">
          <span className="consultation-dot" />
          FREE CONSULTATION
        </div>

        <h2 className="consultation-title">
          Talk strategy with us,<br />
          take your business<br />
          to the next level.
        </h2>

        <p className="consultation-desc">
          A free 20-minute call on your goals and what we&apos;d do first to grow.
        </p>

        <Link href="/contact" className="consultation-cta-primary" onClick={close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h18" />
          </svg>
          Schedule a call
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="consultation-arrow">
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </Link>

        <div className="consultation-secondary-row">
          <TrackedContactLink
            href="https://wa.me/918197731627?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
            className="consultation-cta-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp
          </TrackedContactLink>

          <TrackedContactLink
            href="tel:+918197731627"
            className="consultation-cta-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call now
          </TrackedContactLink>
        </div>

        <button className="consultation-dismiss" onClick={close}>
          Maybe later
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver drives every scroll reveal on the site.
 *
 * Two ways to opt in:
 *   - legacy: a class from `animatedSelector` below
 *   - preferred: `data-reveal="up | left | right | scale"` on any element
 *
 * Elements are indexed **within their parent**, so a grid of six cards always
 * staggers 0..5 regardless of what came before it in the document.
 */

const animatedSelector = [
  ".flow-section",
  ".pillar-card",
  ".platform-card",
  ".review-card",
  ".insight-card",
  ".crm-module-card",
  ".contact-panel",
  ".site-footer",
  "[data-reveal]"
].join(",");

const MAX_STAGGER_STEPS = 7;

export default function ScrollAnimator() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(animatedSelector));

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    // Stagger index resets per parent so each grid counts from zero.
    const seenPerParent = new Map<Element, number>();

    elements.forEach((element) => {
      const parent = element.parentElement;
      let index = 0;

      if (parent) {
        index = seenPerParent.get(parent) ?? 0;
        seenPerParent.set(parent, index + 1);
      }

      element.style.setProperty(
        "--reveal-index",
        `${Math.min(index, MAX_STAGGER_STEPS - 1)}`
      );
      observer.observe(element);
    });

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Pointer effects for the creator cards: a spotlight that follows the cursor
 * (--mx / --my) and a gentle 3D tilt (--rx / --ry). Cards opt in with
 * `data-fx-card`. Only runs on devices with a fine pointer; the tilt is
 * skipped when the visitor prefers reduced motion. All drawing is in CSS.
 */
export default function CardFx({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-fx-card]"));
    const frames = new Map<HTMLElement, number>();
    const MAX_TILT = 3.2;

    const handleMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frames.get(card) ?? 0);
      frames.set(
        card,
        requestAnimationFrame(() => {
          card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
          if (!reduceMotion) {
            card.style.setProperty("--rx", `${((0.5 - y) * MAX_TILT * 2).toFixed(2)}deg`);
            card.style.setProperty("--ry", `${((x - 0.5) * MAX_TILT * 2).toFixed(2)}deg`);
          }
        })
      );
    };

    const handleLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      cancelAnimationFrame(frames.get(card) ?? 0);
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    };

    cards.forEach((card) => {
      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);
    });

    return () => {
      frames.forEach((frame) => cancelAnimationFrame(frame));
      cards.forEach((card) => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      });
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

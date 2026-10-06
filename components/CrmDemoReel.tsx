"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { crmScreens } from "./CrmMockScreens";

/**
 * The hero "demo reel": the six recreated CRM screens auto-cycling so the
 * product reads as running rather than as a screenshot.
 *
 * Enhanced with a video-like progress bar and smooth cinematic crossfades
 * so the screens feel like a continuous product walkthrough video.
 */

const STEP_MS = 4200; // Time per slide

export default function CrmDemoReel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);

  /* Don't burn a timer while the reel is scrolled out of view. */
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setActive((current) => (current + 1) % crmScreens.length);
    setProgressKey((k) => k + 1);
  }, []);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgressKey((k) => k + 1);
  }, []);

  /* Auto-advance timer — always runs when visible and not paused */
  useEffect(() => {
    if (paused || !visible) return;

    const timer = window.setInterval(goNext, STEP_MS);
    return () => window.clearInterval(timer);
  }, [paused, visible, goNext]);

  const current = crmScreens[active];

  return (
    <div
      className="cs-reel"
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* The monitor shell */}
      <div className="cs-monitor">
        <div className="cs-monitor-body">
          <div className="cs-monitor-screen">
            <div className="cs-reel-screens">
              {crmScreens.map((screen, index) => (
                <div
                  className={`cs-reel-screen${active === index ? " is-active" : ""}`}
                  key={screen.id}
                  aria-hidden={active !== index}
                >
                  <div className="crm-frame cs-reel-frame">
                    <div className="crm-frame-chrome" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>{screen.url}</span>
                    </div>
                    {screen.node}
                  </div>
                </div>
              ))}

              {/* Decorative pointer */}
              <span className="cs-reel-cursor" aria-hidden="true" key={active}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 3l14 8.5-6.2 1.3L9.6 19z"
                    fill="#ffffff"
                    stroke="rgba(0,0,0,0.45)"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <span className="cs-monitor-glare" aria-hidden="true" />
          </div>

          <div className="cs-monitor-chin" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="cs-monitor-neck" aria-hidden="true" />
        <div className="cs-monitor-foot" aria-hidden="true" />
      </div>

      {/* Legend with progress-bar pips */}
      <div className="cs-reel-legend">
        <p className="cs-reel-label">
          <span>{String(active + 1).padStart(2, "0")}</span>
          {current.module}
        </p>
        <div className="cs-reel-pips" role="tablist" aria-label="Demo screens">
          {crmScreens.map((screen, index) => (
            <button
              type="button"
              role="tab"
              key={screen.id}
              aria-selected={active === index}
              aria-label={screen.module}
              className={active === index ? "is-active" : index < active ? "is-done" : ""}
              onClick={() => goTo(index)}
            >
              {/* Progress fill bar — only animates on the active pip */}
              {active === index && !paused && visible && (
                <span
                  className="cs-pip-progress"
                  key={progressKey}
                  style={{
                    animationDuration: `${STEP_MS}ms`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

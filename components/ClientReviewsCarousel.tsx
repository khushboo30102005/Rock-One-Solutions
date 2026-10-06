"use client";

import { useEffect, useState } from "react";

type Review = {
  quote: string;
  name: string;
  date: string;
  rating: number;
};

type ClientReviewsCarouselProps = {
  reviews: Review[];
  listingUrl: string;
};

export default function ClientReviewsCarousel({
  reviews,
  listingUrl,
}: ClientReviewsCarouselProps) {
  const [visible, setVisible] = useState(2);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1080px)");
    const apply = () => setVisible(mq.matches ? 1 : 2);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const pageCount = Math.max(1, reviews.length - visible + 1);
  const activeIndex = Math.min(index, pageCount - 1);

  useEffect(() => {
    if (pageCount <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % pageCount);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  return (
    <section
      id="google-reviews"
      className="proof-section flow-section flow-left reviews-section"
      aria-labelledby="proof-title"
    >
      <div className="reviews-copy">
        <h2 id="proof-title" className="reviews-heading">
          Google reviews
          <span>from recent clients</span>
        </h2>
        <p>
          A 5.0 rating across four public Google reviews for website, CRM, and
          ongoing technical support work.
        </p>
        <a className="review-google-summary" href={listingUrl} target="_blank" rel="noreferrer">
          <span className="review-google-mark" aria-hidden="true">G</span>
          <span>
            <strong>5.0 / 5</strong>
            <small>4 reviews on Google</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="reviews-carousel">
        <div className="review-viewport">
          <div
            className="review-track"
            style={{
              ["--i" as string]: activeIndex,
              ["--visible" as string]: visible
            }}
          >
            {reviews.map((review, i) => {
              const isOpen = expanded === i;
              const isLong = review.quote.length > 220;
              return (
                <article className="review-slide" key={review.name}>
                  <div className="review-quote-card">
                    <div className="review-platform-row">
                      <span className="review-google-source">
                        <b aria-hidden="true">G</b>
                        Verified on Google
                      </span>
                      <span className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                        {Array.from({ length: review.rating }).map((_, star) => (
                          <svg key={star} viewBox="0 0 24 24" aria-hidden="true">
                            <path d="m12 2.7 2.85 5.78 6.38.93-4.61 4.49 1.09 6.35L12 17.25l-5.71 3 1.09-6.35-4.61-4.49 6.38-.93L12 2.7Z" />
                          </svg>
                        ))}
                    </span>
                    </div>

                    <p className={`review-quote-text${isOpen ? " is-open" : ""}`}>
                      {review.quote}
                    </p>

                    {isLong ? (
                      <button
                        type="button"
                        className="review-readmore"
                        onClick={() => setExpanded(isOpen ? null : i)}
                      >
                        {isOpen ? "Read less" : "Read full review"}
                      </button>
                    ) : null}

                    <div className="review-person">
                      <strong>{review.name}</strong>
                      <span>{review.date}</span>
                    </div>
                    <a className="review-source-link" href={listingUrl} target="_blank" rel="noreferrer">
                      View on Google <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="review-nav">
          <button
            type="button"
            className="review-arrow"
            aria-label="Previous testimonial"
            onClick={() => setIndex((activeIndex - 1 + pageCount) % pageCount)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="review-dots" role="tablist" aria-label="Testimonials navigation">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`review-dot${activeIndex === i ? " is-active" : ""}`}
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="review-arrow"
            aria-label="Next testimonial"
            onClick={() => setIndex((activeIndex + 1) % pageCount)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { formatPostDate } from "./blog-data";
import { getAllBlogPosts } from "@/lib/sanity.content";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog | Rock One Solutions",
  description:
    "Practical notes on websites, custom software, CRM hand-offs, AI automation, and performance marketing — written for operators, not for search engines.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog | Rock One Solutions",
    description:
      "Practical notes on websites, custom software, CRM hand-offs, AI automation, and performance marketing.",
    url: "/blog/",
    type: "website",
  },
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default async function BlogIndexPage() {
  const blogPosts = await getAllBlogPosts();
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <SiteHeader active="blog" />

      <main className="blog-main">
        <section className="blog-hero" aria-labelledby="blog-hero-title">
          <div className="blog-hero-inner">
            <span className="about-badge">Growth notes</span>
            <h1 id="blog-hero-title">
              Sharper thinking for websites,
              <span> automation, and revenue.</span>
            </h1>
            <p>
              Short, practical pieces on the things that actually move the number —
              written from projects we have shipped, not from a keyword list.
            </p>
          </div>
        </section>

        <section className="blog-featured" aria-labelledby="blog-featured-title">
          <span className="section-kicker about-kicker">Latest</span>
          <Link className="blog-featured-card" href={`/blog/${featured.slug}`}>
            <div className="blog-featured-meta">
              <span className="blog-tag">{featured.category}</span>
              <span>{formatPostDate(featured.date)}</span>
              <span>{featured.readTime}</span>
            </div>
            <h2 id="blog-featured-title">{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className="blog-more">Read the note {arrow}</span>
          </Link>
        </section>

        <section className="blog-list" aria-labelledby="blog-list-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">All notes</span>
            <h2 id="blog-list-title">Everything we have written so far.</h2>
          </div>
          <div className="blog-grid">
            {rest.map((post) => (
              <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <div className="blog-card-top">
                  <span className="blog-tag">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-foot">
                  <span>{formatPostDate(post.date)}</span>
                  <span className="blog-more">Read {arrow}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-cta" aria-labelledby="blog-cta-title">
          <div className="about-cta-inner">
            <h2 id="blog-cta-title">Want this applied to your business?</h2>
            <p>
              We design and build the websites, systems, and automation these notes
              describe — then measure them against revenue.
            </p>
            <div className="about-cta-actions">
              <Link href="/contact" className="about-btn-primary">
                Start a project {arrow}
              </Link>
              <Link href="/services" className="about-btn-ghost about-btn-ghost-dark">
                Explore services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

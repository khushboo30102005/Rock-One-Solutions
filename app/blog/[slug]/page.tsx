import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  formatPostDate,
  type BlogBlock
} from "../blog-data";
import { getAllBlogSlugs, getBlogPostBySlug, getAllBlogPosts } from "@/lib/sanity.content";
import "../blog.css";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article | Rock One Solutions" };
  }

  const canonical = `/blog/${post.slug}/`;
  const socialImage = post.socialImage ?? post.heroImage?.src;

  return {
    title: `${post.title} | Rock One Solutions`,
    description: post.excerpt,
    alternates: {
      canonical
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      authors: [post.author],
      images: socialImage
        ? [
            {
              url: socialImage,
              alt: post.heroImage?.alt ?? post.title
            }
          ]
        : undefined
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: socialImage ? [socialImage] : undefined
    }
  };
}

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "rich":
      return (
        <p>
          {block.parts.map((part, index) =>
            part.href ? (
              <Link href={part.href} key={`${part.href}-${index}`}>
                {part.text}
              </Link>
            ) : (
              <span key={`${part.text}-${index}`}>{part.text}</span>
            )
          )}
        </p>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  // Build related posts from all available posts
  const allPosts = await getAllBlogPosts();
  const sameCategory = allPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const others = allPosts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  const related = [...sameCategory, ...others].slice(0, 3);
  const canonicalUrl = `https://rockonesolutions.com/blog/${post.slug}/`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.socialImage
      ? `https://rockonesolutions.com${post.socialImage}`
      : undefined,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://rockonesolutions.com/"
    },
    publisher: {
      "@type": "Organization",
      name: "Rock One Solutions",
      url: "https://rockonesolutions.com/"
    },
    mainEntityOfPage: canonicalUrl
  };
  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;
  const schemaJson = (value: object) =>
    JSON.stringify(value).replace(/</g, "\\u003c");

  return (
    <>
      <SiteHeader active="blog" />

      <main className="blog-post-main">
        <article className="blog-post">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaJson(articleSchema) }}
          />
          {faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: schemaJson(faqSchema) }}
            />
          )}

          <header className="blog-post-head">
            <nav className="blog-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Blog</Link>
            </nav>

            <span className="blog-tag">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>

            <div className="blog-post-meta">
              <span>{post.author}</span>
              <span>{formatPostDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {post.heroImage && (
            <figure className="blog-post-figure">
              <Image
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                title="Excel, Canva, and paper documents versus one CRM record"
                width={1600}
                height={900}
                sizes="(max-width: 900px) 100vw, 1160px"
                priority
              />
              <figcaption>{post.heroImage.caption}</figcaption>
            </figure>
          )}

          <div className="blog-post-body">
            {post.body.map((block, index) => (
              <Block block={block} key={index} />
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <section className="blog-post-faq" aria-labelledby="blog-faq-title">
                <h2 id="blog-faq-title">Frequently asked questions</h2>
                <div className="blog-faq-list">
                  {post.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          <footer className="blog-post-foot">
            <Link href="/blog" className="about-btn-ghost">
              All notes
            </Link>
            <Link href="/contact" className="about-btn-primary">
              Talk to us about this {arrow}
            </Link>
          </footer>
        </article>

        {related.length > 0 && (
          <section className="blog-related" aria-labelledby="blog-related-title">
            <div className="about-section-head">
              <span className="section-kicker about-kicker">Keep reading</span>
              <h2 id="blog-related-title">More notes worth your time.</h2>
            </div>
            <div className="blog-grid">
              {related.map((item) => (
                <Link className="blog-card" href={`/blog/${item.slug}`} key={item.slug}>
                  <div className="blog-card-top">
                    <span className="blog-tag">{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="blog-card-foot">
                    <span>{formatPostDate(item.date)}</span>
                    <span className="blog-more">Read {arrow}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}

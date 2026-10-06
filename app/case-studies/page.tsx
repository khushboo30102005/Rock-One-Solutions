import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { workProjects } from "@/app/work/work-data";
import "../work/work.css";

export const metadata: Metadata = {
  title: "Case Studies | Rock One Solutions",
  description:
    "Read how Rock One Solutions turns operational problems into focused digital products, workflows, and measurable improvements.",
  alternates: { canonical: "/case-studies/" },
  openGraph: {
    title: "Case Studies | Rock One Solutions",
    description: "The decisions, systems, and outcomes behind selected Rock One projects.",
    url: "https://rockonesolutions.com/case-studies/"
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="case-studies" />
      <main className="work-main">
        <section className="work-index-hero is-case-study">
          <p className="work-kicker">Case studies</p>
          <h1>The business problem, the product decisions, and what changed.</h1>
          <p className="work-index-intro">
            A closer look at how we map real operations, remove weak handoffs, and build
            software teams can rely on every day.
          </p>
        </section>

        <section className="case-index" aria-label="Case studies">
          {workProjects.map((project, index) => (
            <article className="case-index-item" key={project.slug} data-reveal="up">
              <div className="case-index-copy">
                <span className="work-project-number">{String(index + 1).padStart(2, "0")}</span>
                <p className="work-client">{project.client}</p>
                <h2>{project.title}</h2>
                <p className="case-index-lede">{project.summary}</p>
                <dl className="case-index-facts">
                  <div><dt>Problem</dt><dd>Critical sales and fulfilment work was split across disconnected tools.</dd></div>
                  <div><dt>Intervention</dt><dd>One role-based product connecting the full order lifecycle.</dd></div>
                  <div><dt>Result</dt><dd>A visible record from lead capture through delivery and follow-up.</dd></div>
                </dl>
                <div className="work-project-actions">
                  <Link className="work-button work-button-primary" href={project.caseStudyHref}>
                    Read case study <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className="work-text-link" href={project.projectHref}>
                    View product <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <Link className="case-index-media" href={project.caseStudyHref}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1904}
                  height={940}
                  sizes="(max-width: 1100px) 100vw, 58vw"
                  priority={index === 0}
                />
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

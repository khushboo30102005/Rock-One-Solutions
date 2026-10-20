import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { websiteLaunches as localWebsiteLaunches, workProjects as localWorkProjects } from "./work-data";
import { getAllWorkProjects, getWebsiteLaunches } from "@/lib/sanity.content";
import "./work.css";

export const metadata: Metadata = {
  title: "Work | Digital Products and Business Systems | Rock One Solutions",
  description:
    "Explore websites, CRM platforms, connected business systems, and remote team engagements delivered by Rock One Solutions.",
  alternates: { canonical: "/work/" },
  openGraph: {
    title: "Work | Rock One Solutions",
    description:
      "Selected websites, digital products, operating systems, and remote team engagements delivered by Rock One Solutions.",
    url: "https://rockonesolutions.com/work/"
  }
};

export default async function WorkPage() {
  const workProjects = await getAllWorkProjects();
  const websiteLaunches = getWebsiteLaunches();

  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="work" />
      <main className="work-main">
        <section className="work-index-hero">
          <p className="work-kicker">Selected work</p>
          <h1>Digital systems built around the way a business actually works.</h1>
          <p className="work-index-intro">
            Client websites, product interfaces, connected workflows, and ongoing digital
            execution shaped around real teams, decisions, and handoffs.
          </p>
        </section>

        <section id="crm-development" className="work-projects" aria-label="Selected CRM projects">
          {workProjects.map((project, index) => (
            <article id={project.slug} className="work-project" key={project.slug} data-reveal="up">
              <Link className="work-project-media" href={project.projectHref}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1904}
                  height={940}
                  sizes="(max-width: 1100px) 100vw, 68vw"
                  priority={index === 0}
                />
              </Link>
              <div className="work-project-copy">
                <div className="work-project-number">{String(index + 1).padStart(2, "0")}</div>
                <p className="work-client">{project.client}</p>
                <h2>{project.title}</h2>
                <p className="work-project-summary">{project.summary}</p>
                <p>{project.description}</p>
                <ul className="work-service-list" aria-label="Project services">
                  {project.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
                <div className="work-project-actions">
                  <Link className="work-button work-button-primary" href={project.projectHref}>
                    View project <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className="work-text-link" href={project.caseStudyHref}>
                    Read case study <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="web-development" className="work-launches" aria-labelledby="work-launches-title">
          <header className="work-section-head" data-reveal="up">
            <div>
              <p className="work-kicker">Website development</p>
              <h2 id="work-launches-title">Digital front doors built for the business behind them.</h2>
            </div>
            <p>
              Three distinct businesses, each with a clearer way to explain the offer,
              establish trust, and turn attention into a useful enquiry.
            </p>
          </header>

          <div className="work-launch-grid">
            {websiteLaunches.map((project, index) => (
              <article id={project.slug} className="work-launch-card" key={project.slug} data-reveal="up">
                <div className={`work-launch-media is-${project.imageMode}`}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
                <div className="work-launch-copy">
                  <div className="work-launch-meta">
                    <span>{String(index + 2).padStart(2, "0")}</span>
                    <span>Website development</span>
                  </div>
                  <p className="work-client">{project.client}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="work-service-list" aria-label={`${project.client} services`}>
                    {project.services.map((service) => <li key={service}>{service}</li>)}
                  </ul>
                  {project.external ? (
                    <a className="work-text-link" href={project.href} target="_blank" rel="noreferrer">
                      {project.cta} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link className="work-text-link" href={project.href}>
                      {project.cta} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="remote-team" className="work-remote-band" aria-labelledby="work-remote-title">
          <div className="work-remote-inner">
            <div className="work-remote-identity" data-reveal="up">
              <span>Embedded remote execution</span>
              <Image
                src="/client-logos/intracia-technologies-client.png"
                alt="Intracia Technologies logo"
                width={760}
                height={250}
                sizes="(max-width: 760px) 80vw, 520px"
              />
            </div>
            <div className="work-remote-copy" data-reveal="up">
              <div className="work-launch-meta work-launch-meta-light">
                <span>05</span>
                <span>Remote Team</span>
              </div>
              <p className="work-client">Intracia Technologies</p>
              <h2 id="work-remote-title">A dependable execution layer for ongoing digital work.</h2>
              <p>
                A remote partnership designed around changing priorities, visible progress,
                and consistent technical execution without rebuilding the team for every task.
              </p>
              <ul className="work-remote-points">
                <li>Dedicated working capacity</li>
                <li>Priority-led task planning</li>
                <li>Ongoing technical support</li>
              </ul>
              <Link className="work-button work-button-light" href="/remote-tech-team/">
                Explore Remote Team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="work-index-close" data-reveal="up">
          <p className="work-kicker">Next project</p>
          <h2>Need a stronger website, working system, or dependable execution team?</h2>
          <Link className="work-button work-button-primary" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

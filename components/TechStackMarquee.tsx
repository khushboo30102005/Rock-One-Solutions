type Tech = { name: string; src: string };

const techRows: Tech[][] = [
  [
    { name: "WordPress", src: "/platform-logos/wordpress.svg" },
    { name: "Shopify", src: "/platform-logos/shopify.svg" },
    { name: "React", src: "/tech-logos/react.svg" },
    { name: "Next.js", src: "/tech-logos/nextdotjs.svg" },
    { name: "TypeScript", src: "/tech-logos/typescript.svg" },
    { name: "Node.js", src: "/tech-logos/nodedotjs.svg" }
  ],
  [
    { name: "HubSpot", src: "/tech-logos/hubspot.svg" },
    { name: "Laravel", src: "/tech-logos/laravel.svg" },
    { name: "PHP", src: "/tech-logos/php.svg" },
    { name: "Python", src: "/tech-logos/python.svg" },
    { name: "JavaScript", src: "/tech-logos/javascript.svg" },
    { name: "HTML5", src: "/tech-logos/html5.svg" },
    { name: "CSS3", src: "/tech-logos/css3.svg" }
  ],
  [
    { name: "Magento", src: "/platform-logos/magento.svg" },
    { name: "Sanity", src: "/tech-logos/sanity.svg" },
    { name: "Docker", src: "/tech-logos/docker.svg" },
    { name: "DigitalOcean", src: "/tech-logos/digitalocean.svg" }
  ]
];

export default function TechStackMarquee() {
  return (
    <section className="tech-section" aria-labelledby="tech-title">
      <div className="tech-head">
        <span className="section-kicker tech-kicker">Technologies we master</span>
        <h2 id="tech-title">
          The stack stays practical.
        </h2>
        <p>
          We choose tools around what your team needs to run: websites, storefronts,
          CRM layers, automations, and reporting that can be maintained after launch.
        </p>
      </div>

      <div className="tech-marquees">
        {techRows.map((row, rowIndex) => {
          const loopRow = Array.from(
            { length: Math.ceil(12 / row.length) },
            () => row
          ).flat();

          return (
            <div className="tech-marquee" key={rowIndex}>
              <div
                className={`tech-marquee-track${rowIndex % 2 === 1 ? " is-reverse" : ""}`}
                style={{ ["--duration" as string]: `${54 + rowIndex * 6}s` }}
              >
                {[0, 1].map((copy) => (
                  <div className="tech-marquee-group" key={copy} aria-hidden={copy === 1}>
                    {loopRow.map((tech, itemIndex) => (
                      <span
                        className="tech-pill"
                        key={`${tech.name}-${itemIndex}`}
                        aria-hidden={copy === 1 || itemIndex >= row.length}
                      >
                        <img
                          src={tech.src}
                          alt=""
                          className="tech-pill-logo"
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

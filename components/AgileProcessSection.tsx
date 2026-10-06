const processSteps = [
  {
    number: "01",
    label: "Align",
    title: "Scope the real work",
    body: "We define goals, pages, flows, integrations, and success markers before production starts."
  },
  {
    number: "02",
    label: "Shape",
    title: "Design the working system",
    body: "Layouts, content, CRM fields, handoffs, and reporting needs are planned together."
  },
  {
    number: "03",
    label: "Build",
    title: "Develop in visible stages",
    body: "Your website, software, or automation is built in clear parts, with progress you can review."
  },
  {
    number: "04",
    label: "Launch",
    title: "Test, deploy, and improve",
    body: "We check key flows, launch carefully, and keep the system ready for the next improvement."
  }
];

export default function AgileProcessSection() {
  return (
    <section className="agile-section flow-section flow-left" aria-labelledby="agile-title">
      <div className="agile-copy">
        <span className="section-kicker agile-kicker">How we work</span>
        <h2 id="agile-title" className="agile-heading">
          A clear build process without the noise.
        </h2>
      </div>

      <div className="agile-method-board" aria-label="Rock One delivery model">
        {processSteps.map((step) => (
          <article className="agile-method-card" key={step.number}>
            <div className="agile-method-top">
              <span>{step.number}</span>
              <small>{step.label}</small>
            </div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

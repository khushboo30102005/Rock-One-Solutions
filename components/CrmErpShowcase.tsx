import Link from "next/link";

const systemPoints = [
  {
    label: "CRM",
    title: "Lead and client follow-up",
    body: "Capture inquiries, assign responsibility, and keep every conversation easy to track."
  },
  {
    label: "ERP",
    title: "Daily operations",
    body: "Organize orders, approvals, documents, billing, inventory, and delivery updates."
  },
  {
    label: "Reports",
    title: "Clear business visibility",
    body: "See what is moving, what is delayed, and what needs attention without searching everywhere."
  }
];

export default function CrmErpShowcase() {
  return (
    <div className="crm-simple" aria-label="CRM and ERP system explanation">
      <div className="crm-simple-intro">
        <span>(CONNECTED BUSINESS SOFTWARE)</span>
        <h2 id="crm-erp-title">Less scattered work. Cleaner daily control.</h2>
      </div>

      <div className="crm-simple-list">
        {systemPoints.map((point, index) => (
          <article className="crm-simple-row" key={point.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{point.label}</small>
              <h4>{point.title}</h4>
              <p>{point.body}</p>
            </div>
          </article>
        ))}
      </div>

      <Link className="crm-simple-link" href="/services/crm-systems">
        Explore CRM Systems
      </Link>
    </div>
  );
}

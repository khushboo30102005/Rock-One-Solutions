import type { ReactNode } from "react";

/**
 * Pixel-recreations of the Auto Parts CRM interface, rebuilt in HTML/CSS
 * instead of screenshots so the case study stays crisp at any viewport.
 * All sizing is in `em`; the mock root font-size is driven by container
 * queries in crm-mock.css, so a screen scales as one piece.
 */

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  gauge: <Svg><path d="M12 14l4-4" /><circle cx="12" cy="14" r="8" /><path d="M4.5 20a10 10 0 1115 0" /></Svg>,
  phone: <Svg><path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2.2 2A17 17 0 013 6.2 2 2 0 015 4z" /></Svg>,
  clipboard: <Svg><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 3h6v3H9z" /><path d="M9 11h6M9 15h4" /></Svg>,
  truck: <Svg><rect x="2" y="7" width="12" height="9" rx="1.5" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.8" /><circle cx="17.5" cy="18" r="1.8" /></Svg>,
  card: <Svg><rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M2.5 10h19" /></Svg>,
  file: <Svg><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></Svg>,
  users: <Svg><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 5.5a3 3 0 010 5.6M17.5 20a5.6 5.6 0 00-1.4-3.7" /></Svg>,
  bell: <Svg><path d="M18 9a6 6 0 10-12 0c0 5-2 6-2 6h16s-2-1-2-6z" /><path d="M10.5 20a2 2 0 003 0" /></Svg>,
  logout: <Svg><path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3" /><path d="M10 16l-4-4 4-4M6 12h9" /></Svg>,
  eye: <Svg><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z" /><circle cx="12" cy="12" r="2.6" /></Svg>,
  download: <Svg><path d="M12 4v10M8 11l4 4 4-4" /><path d="M4 18h16" /></Svg>,
  pencil: <Svg><path d="M4 20l4-1 10-10a2 2 0 00-3-3L5 16z" /></Svg>,
  send: <Svg><path d="M21 4L3 11l7 3 3 7z" /><path d="M21 4l-11 10" /></Svg>,
  link: <Svg><path d="M10 13a4 4 0 006 .5l2-2a4 4 0 00-6-6l-1 1" /><path d="M14 11a4 4 0 00-6-.5l-2 2a4 4 0 006 6l1-1" /></Svg>,
  plus: <Svg><path d="M12 5v14M5 12h14" /></Svg>,
  search: <Svg><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></Svg>,
  arrowRight: <Svg><path d="M5 12h13M13 6l6 6-6 6" /></Svg>,
  arrowLeft: <Svg><path d="M19 12H6M11 6l-6 6 6 6" /></Svg>,
  check: <Svg><circle cx="12" cy="12" r="8.5" /><path d="M8.5 12.4l2.5 2.4 4.5-4.8" /></Svg>,
  calendar: <Svg><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3.5v3M16 3.5v3" /></Svg>,
  dollar: <Svg><path d="M12 3v18" /><path d="M16 7.5A3.5 3.5 0 0012.5 5h-1a3 3 0 000 6h1a3 3 0 010 6h-1A3.5 3.5 0 018 15.5" /></Svg>,
  alert: <Svg><path d="M12 4l9 16H3z" /><path d="M12 10v4M12 17.2v.1" /></Svg>,
  clock: <Svg><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Svg>,
  chart: <Svg><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></Svg>,
  trend: <Svg><path d="M3 16l5-5 4 3 6-7" /><path d="M15 7h4v4" /></Svg>,
  refresh: <Svg><path d="M20 12a8 8 0 01-13.7 5.6L4 15.5" /><path d="M4 12a8 8 0 0113.7-5.6L20 8.5" /><path d="M4 20v-4.5h4.5M20 4v4.5h-4.5" /></Svg>,
  target: <Svg><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></Svg>,
  history: <Svg><path d="M3.5 12a8.5 8.5 0 108.5-8.5A8.4 8.4 0 005.6 6.4" /><path d="M3.5 3.8v3.4h3.4" /><path d="M12 8v4.3l2.8 1.7" /></Svg>,
  notePlus: <Svg><path d="M20 12.5V6a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2h5l3.5 3v-3" /><path d="M17.5 15.5v5M15 18h5" /></Svg>,
  invoice: <Svg><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /><path d="M9 12h6M9 16h6" /></Svg>,
  panel: <Svg><rect x="3.5" y="4" width="17" height="16" rx="2.5" /><path d="M9 4v16" /></Svg>,
  chevron: <Svg><path d="M6 9l6 6 6-6" /></Svg>,
  chevronLeft: <Svg><path d="M14 6l-6 6 6 6" /></Svg>,
  chevronRight: <Svg><path d="M10 6l6 6-6 6" /></Svg>,
  wrench: <Svg><path d="M14.5 6.5a4 4 0 105 5l-9 9a2.5 2.5 0 01-3.5-3.5l9-9z" /></Svg>
};

type Role = "admin" | "sales";

const adminNav = [
  { label: "Dashboard", icon: icons.gauge },
  { label: "Leads", icon: icons.phone },
  { label: "Orders", icon: icons.clipboard },
  { label: "Shipments", icon: icons.truck },
  { label: "Costs", icon: icons.card },
  { label: "Notes", icon: icons.file },
  { label: "User Center", icon: icons.users }
];

const salesNav = [
  { label: "Dashboard", icon: icons.gauge },
  { label: "Leads", icon: icons.phone },
  { label: "Orders", icon: icons.clipboard },
  { label: "Notes", icon: icons.file }
];

function Sidebar({ active, role }: { active: string; role: Role }) {
  const nav = role === "admin" ? adminNav : salesNav;
  return (
    <aside className="cm-side">
      <div className="cm-brand">
        <span className="cm-brand-collapse">{icons.panel}</span>
        <span className="cm-brand-mark">{icons.wrench}</span>
        <span className="cm-brand-word">
          <b>MEE</b>AUTOPARTS
        </span>
        <span className="cm-brand-sub">Motor Equipment Essentials</span>
      </div>

      <nav className="cm-nav">
        {nav.map((item) => (
          <span key={item.label} className={`cm-nav-item${active === item.label ? " is-active" : ""}`}>
            <i>{item.icon}</i>
            {item.label}
          </span>
        ))}
      </nav>

      <div className="cm-side-foot">
        <span>Auto Parts CRM</span>
        <span>Version 1.0.0</span>
        <span>© Intracia Technologies</span>
      </div>
    </aside>
  );
}

function TopBar({ title, role, userName = "John Doe", userEmail = "john.doe@example.com" }: { title: string; role: Role; userName?: string; userEmail?: string }) {
  return (
    <header className="cm-top">
      <span className="cm-top-title">{title}</span>
      <div className="cm-top-right">
        {role === "sales" ? (
          <span className="cm-top-user">
            <b>{userName}</b>
            <small>{userEmail}</small>
          </span>
        ) : null}
        <span className="cm-pill">{role === "admin" ? "Admin" : "Sales"}</span>
        <span className="cm-icon-btn">
          {icons.bell}
          {role === "sales" ? <em className="cm-badge-dot">17</em> : null}
        </span>
        <span className="cm-btn cm-btn-ghost">
          {icons.logout}
          Logout
        </span>
      </div>
    </header>
  );
}

function Shell({
  title,
  active,
  role,
  userName,
  userEmail,
  children
}: {
  title: string;
  active: string;
  role: Role;
  userName?: string;
  userEmail?: string;
  children: ReactNode;
}) {
  return (
    <div className="cm-app">
      <Sidebar active={active} role={role} />
      <div className="cm-body">
        <TopBar title={title} role={role} userName={userName} userEmail={userEmail} />
        <div className="cm-canvas">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="cm-field">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}

/* ---------------------------------------------------------------- Dashboard */

const pipeline = [
  { label: "Prospect", value: 5, pct: 100 },
  { label: "Quoted", value: 0, pct: 0 },
  { label: "Call back later", value: 1, pct: 20 },
  { label: "Shopping around", value: 0, pct: 0 },
  { label: "Not Interested", value: 1, pct: 20 },
  { label: "Needs locally", value: 1, pct: 20 }
];

const kpis = [
  { label: "New leads today", value: "0", note: "9 total assigned leads", icon: icons.users, tone: "blue" },
  { label: "Open follow-ups", value: "1", note: "Quoted, callback, and shopping around leads", icon: icons.clock, tone: "amber" },
  { label: "Orders created today", value: "0", note: "4 orders in current view", icon: icons.check, tone: "green" },
  { label: "Pending shipments", value: "1", note: "0 delayed shipments need attention", icon: icons.truck, tone: "blue" }
];

const revenueCards = [
  { label: "Paid revenue", value: "$7,272", note: "Paid or active fulfilled order statuses", icon: icons.dollar, tone: "green" },
  { label: "Partially paid value", value: "$0", note: "Total sale value for partial orders", icon: icons.dollar, tone: "amber" },
  { label: "Outstanding balance", value: "$0", note: "Remaining balance from partial payments", icon: icons.alert, tone: "red" }
];

const week = [
  { day: "Fri", bars: [4, 4, 4] },
  { day: "Sat", bars: [4, 4, 4] },
  { day: "Sun", bars: [4, 4, 4] },
  { day: "Mon", bars: [4, 4, 4] },
  { day: "Tue", bars: [4, 52, 64] },
  { day: "Wed", bars: [4, 4, 4] },
  { day: "Thu", bars: [4, 4, 4] }
];

export function DashboardScreen() {
  return (
    <Shell title="Dashboard" active="Dashboard" role="sales" userName="Tom Ryder" userEmail="tom@meeautoparts.com">
      <section className="cm-hero">
        <div className="cm-hero-copy">
          <span className="cm-eyebrow">{icons.target} Sales command center</span>
          <h1>Good day, Tom.</h1>
          <p>
            Your dashboard now highlights pipeline health, priority follow-ups, shipment alerts,
            and revenue signals in one focused workspace.
          </p>
          <div className="cm-hero-actions">
            <span className="cm-btn cm-btn-primary">{icons.plus} Create Lead</span>
            <span className="cm-btn cm-btn-white">{icons.file} Create Order</span>
            <span className="cm-btn cm-btn-white">View Open Leads</span>
            <span className="cm-btn cm-btn-white">View My Orders</span>
          </div>
        </div>
        <div className="cm-hero-filter">
          <span className="cm-hero-filter-head">{icons.calendar} Dashboard Date Filter</span>
          <span className="cm-label">Date filter</span>
          <span className="cm-select">All time {icons.chevron}</span>
          <div className="cm-hero-filter-grid">
            <div>
              <span className="cm-label">Visible quoted</span>
              <b>$6,495</b>
            </div>
            <div>
              <span className="cm-label">Visible revenue</span>
              <b>$7,272</b>
            </div>
          </div>
        </div>
      </section>

      <section className="cm-kpis">
        {kpis.map((kpi) => (
          <article className="cm-card cm-kpi" key={kpi.label}>
            <div className="cm-kpi-head">
              <span className="cm-label">{kpi.label}</span>
              <i className={`cm-kpi-icon is-${kpi.tone}`}>{kpi.icon}</i>
            </div>
            <strong>{kpi.value}</strong>
            <small>{kpi.note}</small>
          </article>
        ))}
      </section>

      <section className="cm-two-col">
        <article className="cm-card cm-pipeline">
          <header className="cm-card-head">
            <span className="cm-card-title">{icons.clipboard} Lead Pipeline</span>
            <span className="cm-chip is-blue">6 open</span>
          </header>
          <div className="cm-bars">
            {pipeline.map((row) => (
              <div className="cm-bar-row" key={row.label}>
                <span className="cm-bar-label">
                  {row.label}
                  <b>{row.value}</b>
                </span>
                <span className="cm-bar-track">
                  <span className="cm-bar-fill" style={{ width: `${row.pct}%` }} />
                </span>
              </div>
            ))}
          </div>
        </article>

        <div className="cm-revenue">
          {revenueCards.map((card) => (
            <article className="cm-card cm-revenue-card" key={card.label}>
              <i className={`cm-round-icon is-${card.tone}`}>{card.icon}</i>
              <div>
                <span className="cm-label">{card.label}</span>
                <strong>{card.value}</strong>
                <small>{card.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cm-two-col cm-two-col-b">
        <article className="cm-card">
          <header className="cm-card-head">
            <span className="cm-card-title">{icons.trend} Conversion Metrics</span>
          </header>
          <div className="cm-conv">
            <div className="cm-conv-card">
              <span>
                Leads to Orders <b className="cm-chip is-green">33%</b>
              </span>
              <span className="cm-bar-track">
                <span className="cm-bar-fill is-green" style={{ width: "33%" }} />
              </span>
              <small>3 converted from 9</small>
            </div>
            <div className="cm-conv-card">
              <span>
                Quoted to Paid <b className="cm-chip is-green">0%</b>
              </span>
              <span className="cm-bar-track">
                <span className="cm-bar-fill is-green" style={{ width: "1%" }} />
              </span>
              <small>Quoted leads that reached paid order flow</small>
            </div>
          </div>
        </article>

        <article className="cm-card">
          <header className="cm-card-head">
            <span className="cm-card-title">{icons.chart} 7-Day Performance</span>
            <span className="cm-chip">$7.3K</span>
          </header>
          <div className="cm-legend">
            <span className="is-blue">Leads</span>
            <span className="is-green">Orders</span>
            <span className="is-amber">Revenue</span>
          </div>
          <div className="cm-week">
            {week.map((day) => (
              <div className="cm-week-col" key={day.day}>
                <div className="cm-week-bars">
                  {day.bars.map((height, index) => (
                    <span key={index} className={`cm-week-bar s${index}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <small>{day.day}</small>
              </div>
            ))}
          </div>
        </article>
      </section>
    </Shell>
  );
}

/* -------------------------------------------------------------------- Leads */

/* All customer records below are fictional sample data. */
const leads = [
  { date: "Jul 29, 2026", name: "John Doe", phone: "(555) 010-1234", vehicle: "2004 Honda Civic", quote: "$12.00", status: "Converted" },
  { date: "Jul 29, 2026", name: "Jane Roe", phone: "(555) 010-2245", vehicle: "2004 Honda Civic", quote: "$12.00", status: "Call back later" },
  { date: "Jul 28, 2026", name: "Sam Carter", phone: "(555) 010-3390", vehicle: "2004 Honda Civic", quote: "CA$12.00", status: "Needs locally" },
  { date: "Jul 28, 2026", name: "Alex Moore", phone: "(555) 010-4417", vehicle: "--", quote: "$12.00", status: "We don't sale" },
  { date: "Jul 24, 2026", name: "Chris Blake", phone: "(555) 010-5528", vehicle: "2004 Honda Civic", quote: "$1,000.00", status: "Prospect" },
  { date: "Jul 22, 2026", name: "Pat Rivera", phone: "(555) 010-6634", vehicle: "2004 Honda Civic", quote: "$12.00", status: "Prospect" },
  { date: "Jun 22, 2026", name: "Dana Fox", phone: "(555) 010-7742", vehicle: "--", quote: "$575.00", status: "Converted" },
  { date: "Jun 22, 2026", name: "Richard Roe", phone: "(555) 010-8859", vehicle: "--", quote: "$2,460.00", status: "Converted" },
  { date: "Jun 22, 2026", name: "Mary Major", phone: "(555) 010-9961", vehicle: "--", quote: "$2,400.00", status: "Prospect" }
];

export function LeadsScreen() {
  return (
    <Shell title="Leads" active="Leads" role="sales">
      <article className="cm-card cm-sheet">
        <header className="cm-sheet-head">
          <div>
            <h2>Leads workspace</h2>
            <p>Create leads, track conversion readiness, and push qualified work into orders.</p>
          </div>
          <div className="cm-sheet-tools">
            <div className="cm-filter">
              <span className="cm-label">Date filter</span>
              <span className="cm-select">All time {icons.chevron}</span>
            </div>
            <span className="cm-btn cm-btn-primary">{icons.plus} Create lead</span>
          </div>
        </header>

        <div className="cm-toolbar">
          <span className="cm-search">
            {icons.search} Search by customer, email, phone, adviser, CMPT, state, or vehicle
          </span>
          <span className="cm-select">All leads {icons.chevron}</span>
          <span className="cm-select">All statuses {icons.chevron}</span>
        </div>

        <table className="cm-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Phone no.</th>
              <th>Vehicle</th>
              <th>Quote</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.date}</td>
                <td className="cm-strong">{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.vehicle}</td>
                <td className="cm-strong">{lead.quote}</td>
                <td>{lead.status}</td>
                <td className="cm-row-actions">
                  {lead.status === "Converted" ? (
                    <span className="cm-link">View order {icons.arrowRight}</span>
                  ) : (
                    <>
                      <span className="cm-mini-btn">{icons.pencil} Edit</span>
                      <span className="cm-mini-btn">{icons.refresh} Convert to order</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="cm-pager">
          <span>1-9 of 9 leads</span>
          <div>
            <span className="cm-mini-btn">{icons.chevronLeft} Previous</span>
            <span>Page 1 of 1</span>
            <span className="cm-mini-btn">Next {icons.chevronRight}</span>
          </div>
        </footer>
      </article>
    </Shell>
  );
}

/* ------------------------------------------------------------------- Orders */

const orders = [
  { id: "MAP08042602", created: "Created Aug 4, 2026, 10:45 PM", customer: "John Doe", part: "2004 Honda Civic XL", total: "$12.00", shipping: "No shipment" },
  { id: "MAP07272604", created: "Created Jul 28, 2026, 4:18 AM", customer: "Mary Major", part: "2017 Dodge Truck-1500 Bumper Assy Front, Tradesman, painted cover (fog lamps)", total: "$2,000.00", shipping: "No shipment" },
  { id: "MAP07022601", created: "Created Jul 2, 2026, 4:07 PM", customer: "Richard Roe", part: "Honda Civic", total: "$2,800.00", shipping: "In transit" },
  { id: "MAP06232601", created: "Created Jun 23, 2026, 9:31 PM", customer: "Jane Roe", part: "2008 Subaru Legacy Engine 2.5L (VIN 6, 6th digit), SOHC, MT, Federal emissions", total: "$2,460.00", shipping: "No shipment" }
];

export function OrdersScreen() {
  return (
    <Shell title="Orders" active="Orders" role="sales">
      <article className="cm-card cm-sheet">
        <header className="cm-sheet-head">
          <div>
            <h2>Orders table</h2>
          </div>
          <div className="cm-sheet-tools">
            <div className="cm-filter">
              <span className="cm-label">Date filter</span>
              <span className="cm-select">All time {icons.chevron}</span>
            </div>
            <span className="cm-btn cm-btn-primary">{icons.plus} Create order</span>
          </div>
        </header>

        <div className="cm-toolbar">
          <span className="cm-search">{icons.search} Search by order number, customer, email, or part</span>
          <span className="cm-select">All shipping statuses {icons.chevron}</span>
        </div>

        <table className="cm-table cm-table-orders">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Part</th>
              <th>Total sale amount</th>
              <th>Shipping status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <span className="cm-link-strong">{order.id}</span>
                  <small>{order.created}</small>
                </td>
                <td className="cm-strong">{order.customer}</td>
                <td>{order.part}</td>
                <td className="cm-strong">{order.total}</td>
                <td>
                  {order.shipping === "In transit" ? (
                    <span className="cm-chip is-blue is-dot">In transit</span>
                  ) : (
                    <span className="cm-muted">{order.shipping}</span>
                  )}
                </td>
                <td className="cm-row-actions">
                  <span className="cm-mini-btn">{icons.pencil} Edit</span>
                  <span className="cm-link">View {icons.arrowRight}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="cm-pager">
          <span>1-4 of 4 orders</span>
          <div>
            <span className="cm-mini-btn">{icons.chevronLeft} Previous</span>
            <span>Page 1 of 1</span>
            <span className="cm-mini-btn">Next {icons.chevronRight}</span>
          </div>
        </footer>
      </article>
    </Shell>
  );
}

/* ------------------------------------------------------------- Order detail */

const notes = [
  { time: "Aug 5, 2026, 1:25 AM", body: "New invoice signing link generated: MAP08042603" },
  { time: "Aug 5, 2026, 12:47 AM", body: "Invoice signature request resent: MAP08042603" },
  { time: "Aug 5, 2026, 12:44 AM", body: "Invoice generated and sent for signature" }
];

export function OrderDetailScreen() {
  return (
    <Shell title="Orders" active="Orders" role="admin">
      <article className="cm-card cm-invoice">
        <header className="cm-invoice-head">
          <div>
            <span className="cm-card-title">{icons.invoice} Invoice Management</span>
            <p>Generate, view, and download the purchase invoice.</p>
          </div>
          <span className="cm-mini-btn">{icons.arrowLeft} Back to orders</span>
        </header>
        <div className="cm-invoice-actions">
          <span className="cm-chip is-green is-outline">{icons.check} Invoiced</span>
          <span className="cm-btn cm-btn-white">{icons.eye} View Invoice</span>
          <span className="cm-btn cm-btn-primary">{icons.download} Download Invoice (PDF)</span>
          <span className="cm-btn cm-btn-white">{icons.pencil} Edit Invoice</span>
          <span className="cm-btn cm-btn-white">{icons.send} Resend Signature Request</span>
          <span className="cm-btn cm-btn-white">{icons.link} Generate New Signing Link</span>
        </div>
      </article>

      <div className="cm-detail-grid">
        <article className="cm-card cm-detail">
          <h2>Order details</h2>
          <p>Compact order, customer, vehicle, pricing, billing, and shipping details.</p>

          <h3>Basic Order Info</h3>
          <div className="cm-field-grid">
            <Field label="Order number" value="MAP08042603" />
            <Field label="Advisor name" value="Admin User" />
            <Field label="Date" value="Aug 5, 2026" />
          </div>

          <h3>Customer Info</h3>
          <div className="cm-field-grid">
            <Field label="Name" value="John Doe" />
            <Field label="Mobile" value="(555) 010-1234" />
            <Field label="Email" value="john.doe@example.com" />
          </div>

          <h3>Vehicle / Part Info</h3>
          <div className="cm-field-grid">
            <Field label="Parts" value="2026 Grenadier Grenadier Base Alternator Bracket" />
            <Field label="Make" value="Grenadier" />
            <Field label="Model" value="Grenadier Base" />
            <Field label="Year" value="2026" />
            <Field label="Variant" value="Base" />
            <Field label="VIN" value="1HGBH41JXMN••••••" />
          </div>
        </article>

        <article className="cm-card cm-notes">
          <header className="cm-notes-head">
            <span className="cm-card-title">{icons.history} Notes &amp; Edit History</span>
            <span className="cm-btn cm-btn-primary cm-btn-sm">{icons.notePlus} Add Note</span>
          </header>
          <p>Newest activity stays visible while reviewing order details.</p>
          <div className="cm-notes-meta">
            <span className="cm-label">Notes timeline</span>
            <span className="cm-count">9</span>
          </div>
          <div className="cm-notes-list">
            {notes.map((note) => (
              <div className="cm-note" key={note.time}>
                <span className="cm-note-top">
                  <em>Added note</em>
                  {note.time}
                </span>
                <b>Admin User</b>
                <p>{note.body}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Shell>
  );
}

/* ---------------------------------------------------------------- Shipments */

export function ShipmentsScreen() {
  return (
    <Shell title="Shipments" active="Shipments" role="admin">
      <article className="cm-card cm-range">
        <div className="cm-range-copy">
          <i className="cm-round-icon is-blue">{icons.calendar}</i>
          <div>
            <b>Created date</b>
            <small>Filter records by a preset window or a custom date range.</small>
          </div>
        </div>
        <div className="cm-filter">
          <span className="cm-label">Range</span>
          <span className="cm-select">All time {icons.chevron}</span>
        </div>
      </article>

      <section className="cm-stat-row">
        {[
          { label: "Total matching shipments", value: "1", note: "Search and filters are backed by the Shipments API.", tone: "" },
          { label: "In transit on this page", value: "1", note: "Use this to focus the active delivery workload first.", tone: "is-blue" },
          { label: "Delayed on this page", value: "0", note: "Delays are surfaced separately for fast exception handling.", tone: "is-amber" }
        ].map((stat) => (
          <article className="cm-card cm-stat" key={stat.label}>
            <span>{stat.label}</span>
            <strong className={stat.tone}>{stat.value}</strong>
            <small>{stat.note}</small>
          </article>
        ))}
      </section>

      <article className="cm-card cm-sheet">
        <header className="cm-sheet-head">
          <div>
            <h2>Shipment table</h2>
            <p>Track BOL and PRO numbers, carrier details, and shipment progress.</p>
          </div>
        </header>

        <div className="cm-toolbar">
          <span className="cm-search">{icons.search} Search by BOL, PRO, carrier, order, or customer</span>
          <span className="cm-select">All statuses {icons.chevron}</span>
        </div>

        <table className="cm-table">
          <thead>
            <tr>
              <th>BOL</th>
              <th>PRO</th>
              <th>Carrier</th>
              <th>Current status</th>
              <th>Tracking</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="cm-link-strong">BOL-65165165</span>
                <small>Updated Jul 2, 2026, 4:12 PM</small>
              </td>
              <td className="cm-strong">Pe2626256</td>
              <td>
                <span className="cm-strong">Carrier pending</span>
                <small>Order MAP07022601</small>
              </td>
              <td>
                <span className="cm-chip is-blue is-dot">In transit</span>
              </td>
              <td className="cm-muted">0 events | 0 notes</td>
              <td className="cm-row-actions">
                <span className="cm-link">View {icons.arrowRight}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <footer className="cm-pager">
          <span>1-1 of 1 shipments</span>
          <div>
            <span className="cm-mini-btn">{icons.chevronLeft} Previous</span>
            <span>Page 1 of 1</span>
            <span className="cm-mini-btn">Next {icons.chevronRight}</span>
          </div>
        </footer>
      </article>
    </Shell>
  );
}

/* -------------------------------------------------------------- User center */

const users = [
  { initials: "JD", name: "John Doe", email: "john.doe@example.com", role: "Shipping Account" },
  { initials: "JR", name: "Jane Roe", email: "jane.roe@example.com", role: "Shipping Account" },
  { initials: "RR", name: "Richard Roe", email: "richard.roe@example.com", role: "Shipping Account" },
  { initials: "MM", name: "Mary Major", email: "mary.major@example.com", role: "Sales Agent" },
  { initials: "SC", name: "Sam Carter", email: "sam.carter@example.com", role: "Sales Agent" },
  { initials: "AM", name: "Alex Moore", email: "alex.moore@example.com", role: "Shipping Account" },
  { initials: "PR", name: "Pat Rivera", email: "pat.rivera@example.com", role: "Sales Agent" }
];

export function UsersScreen() {
  return (
    <Shell title="User Center" active="User Center" role="admin">
      <div className="cm-users-head">
        <h2>User Center</h2>
        <p>Manage team access, user details, and secure password updates.</p>
      </div>

      <div className="cm-users-grid">
        <article className="cm-card cm-user-form">
          <span className="cm-chip is-violet">{icons.users} Add user</span>
          <h3>Create New User Account</h3>
          <p>Admins can create sales agents and shipping accounts from this workspace.</p>

          <div className="cm-callout">
            <i className="cm-round-icon is-green">{icons.users}</i>
            <div>
              <b>Sales and shipping access</b>
              <small>Choose the right role for each new team member before they sign in.</small>
            </div>
          </div>

          <label className="cm-input">
            <span>Full Name</span>
            <em>John Doe</em>
          </label>
          <label className="cm-input">
            <span>Email</span>
            <em>agent@example.com</em>
          </label>
          <label className="cm-input">
            <span>Role</span>
            <b>
              Sales Agent {icons.chevron}
            </b>
          </label>
          <label className="cm-input">
            <span>Password</span>
            <em>
              Minimum 8 characters <i>{icons.eye}</i>
            </em>
          </label>
          <span className="cm-btn cm-btn-primary cm-btn-block">{icons.users} Create User Account</span>
        </article>

        <article className="cm-card cm-user-list">
          <span className="cm-chip is-blue">{icons.users} Team</span>
          <h3>All Users</h3>
          <p>14 users registered in the system.</p>

          <table className="cm-table cm-table-users">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>
                    <span className="cm-avatar">{user.initials}</span>
                    <span className="cm-strong">{user.name}</span>
                  </td>
                  <td className="cm-muted">{user.email}</td>
                  <td>
                    <span className={`cm-chip ${user.role === "Sales Agent" ? "is-green" : "is-blue"}`}>{user.role}</span>
                  </td>
                  <td>
                    <span className="cm-chip is-green">Active</span>
                  </td>
                  <td className="cm-row-actions">
                    <i className="cm-eye">{icons.eye}</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </Shell>
  );
}

export type CrmChapter = {
  id: string;
  tab: string;
  /** Workspace name as it appears in the app's sidebar. */
  module: string;
  title: string;
  blurb: string;
  /** What this module was designed to protect. */
  protects: string;
  url: string;
  node: ReactNode;
  /** Optional alternative node for the stage / prototyping section. */
  stageNode?: ReactNode;
};

/**
 * Six chapters, each pairing one recreated screen with the design intent behind
 * it. Drives the pinned scroll sequence on the case study page.
 */
export const crmScreens: CrmChapter[] = [
  {
    id: "dashboard",
    tab: "Dashboard",
    module: "Dashboard",
    title: "A command center built around the next action",
    blurb:
      "Pipeline health, open follow-ups, shipment alerts, and revenue signals in one view — scoped to whoever is signed in.",
    protects:
      "Every card leads with the figure at display weight, then explains it. A manager scanning the dashboard reads values before they read words.",
    url: "crm.meeautoparts.com/dashboard",
    node: (
      <img
        src="/images/crm-dashboard.png"
        alt="Auto Parts CRM Dashboard"
        className="cm-screen-img"
      />
    ),
    stageNode: (
      <img
        src="/images/crm-dashboard-stage.jpg"
        alt="Auto Parts CRM Dashboard"
        className="cm-screen-img"
      />
    )
  },
  {
    id: "leads",
    tab: "Leads",
    module: "Leads",
    title: "Every inquiry captured with a status that means something",
    blurb:
      "Six pipeline stages, adviser ownership, quote value, and a one-click path from a qualified lead into a live order.",
    protects:
      "Prospect, quoted, call back later, shopping around, needs locally, and we don't sell. Losses are recorded with a reason so the pipeline reflects reality instead of optimism.",
    url: "crm.meeautoparts.com/leads",
    node: <LeadsScreen />
  },
  {
    id: "orders",
    tab: "Orders",
    module: "Orders",
    title: "Orders that carry the whole story",
    blurb:
      "Order number, customer, part, sale value, and live shipping status in a single searchable table with date scoping.",
    protects:
      "Adviser, customer, vehicle, VIN, variant, pricing, billing, and shipping live together — searchable by order number, customer, email, or part.",
    url: "crm.meeautoparts.com/orders",
    node: <OrdersScreen />
  },
  {
    id: "invoice",
    tab: "Invoice",
    module: "Invoicing",
    title: "Invoice, signature, and audit trail in one place",
    blurb:
      "Generate, send, re-send, and re-sign an invoice without leaving the order — every action written to the notes timeline.",
    protects:
      "The invoice panel exposes every action a sales admin actually needs, and each one writes to a timeline with author and timestamp. Disputes get answered from the record.",
    url: "crm.meeautoparts.com/orders/MAP08042603",
    node: <OrderDetailScreen />
  },
  {
    id: "shipments",
    tab: "Shipments",
    module: "Shipments",
    title: "BOL and PRO tracking with exceptions pulled forward",
    blurb:
      "Delayed shipments are counted separately from in-transit ones so the team works the exceptions first.",
    protects:
      "The shipment view counts in-transit and delayed loads separately, so the team opens the day on the shipments that are slipping, not the ones that are fine.",
    url: "crm.meeautoparts.com/shipments",
    node: <ShipmentsScreen />
  },
  {
    id: "users",
    tab: "User Center",
    module: "Access",
    title: "Role-based access the admin controls",
    blurb:
      "Admins, sales agents, and shipping accounts each see a different app — created and revoked from one screen.",
    protects:
      "Admins create sales agents and shipping accounts with status control — no developer involvement to onboard or revoke a user.",
    url: "crm.meeautoparts.com/user-center",
    node: <UsersScreen />
  }
];

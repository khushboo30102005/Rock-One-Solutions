export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "rich"; parts: { text: string; href?: string }[] }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Optional shorter title for compact cards; the article H1 and SEO title stay unchanged. */
  cardTitle?: string;
  excerpt: string;
  category: string;
  readTime: string;
  /** ISO date — formatted at render time. */
  date: string;
  /** ISO date for meaningful content updates. */
  updatedDate?: string;
  author: string;
  heroImage?: {
    src: string;
    alt: string;
    caption: string;
  };
  socialImage?: string;
  faqs?: BlogFaq[];
  body: BlogBlock[];
};

/* Newest first. The homepage teaser reads the first three. */
export const blogPosts: BlogPost[] = [
  {
    slug: "open-source-crm-software-for-small-business",
    title: "Open source CRM software for a small business still running follow-ups from sheets",
    cardTitle: "When sheets and follow-ups need one CRM",
    excerpt:
      "Small and mid-size teams comparing open source CRM software with Excel, shared folders, and Canva: what belongs in one system and what a first build should cover.",
    category: "CRM",
    readTime: "8 min read",
    date: "2026-09-17",
    updatedDate: "2026-09-20",
    author: "Rock One Solutions",
    heroImage: {
      src: "/images/blog/open-source-crm-software-small-business-workflow.png",
      alt: "Desk with an Excel sheet, quotation, warranty documents, and a CRM customer record shown on a laptop and phone",
      caption:
        "The week many small teams are still running: spreadsheets, separate documents, and follow-up notes beside the same customer held in one CRM record."
    },
    socialImage: "/images/blog/open-source-crm-software-small-business-og.jpg",
    body: [
      {
        type: "p",
        text: "You are not searching for another dashboard. You are searching because the week is already full, the business is ready to grow, and the customer record still lives in too many places."
      },
      {
        type: "p",
        text: "Follow-ups sit in a chat thread. The order sits in a sheet. The quotation lives in a file someone renamed twice. The warranty letter is a Canva template sent from a personal email. A replacement request arrives, and nobody is sure which version of the document is current. Manual entries keep the operation moving until one missed cell, one unshared folder, or one person on leave makes the next step disappear."
      },
      {
        type: "p",
        text: "That is the job open source CRM software is supposed to take. The useful question is not which logo appears on a comparison table. The useful question is whether the system can hold leads, the order path, document templates, replacements, and warranty files in one place - and whether the same record is usable on a phone when the team is not at a desk."
      },
      { type: "h2", text: "What is actually stuck this week" },
      {
        type: "p",
        text: "For a small or mid-size team, the bottleneck is rarely that the business has no software. It is that every stage of the customer still requires a hand copy."
      },
      {
        type: "p",
        text: "A new enquiry arrives from the website, WhatsApp, or a call. Someone types it into a sheet so it is not lost. A follow-up is promised, then remembered only if the same person opens that sheet again. When the conversation turns into an order, a second file appears. When the client asks for a letter, invoice layout, replacement note, or warranty document, the work moves to Canva or a shared drive. Each hop is a chance to enter the name wrong, attach the old template, or leave the next owner uninformed."
      },
      {
        type: "p",
        text: "The mess is not dramatic. It is repetitive. Growth makes it worse, because more orders mean more documents, more follow-ups, and more people touching the same record. Spreadsheets do not assign ownership. A design file does not remind anyone to call. A folder does not show what is waiting, what is late, and what has already been sent."
      },
      {
        type: "p",
        text: "If that is the week you are in, you do not need a heavier reporting suite. You need one record that follows the customer from first contact through the documents your operation already produces."
      },
      { type: "h2", text: "What all in one place has to cover" },
      {
        type: "p",
        text: "A CRM that only stores names and a pipeline stage will not remove the work you are doing by hand. For the businesses this article is written for, the system has to cover the jobs that currently live outside the sheet."
      },
      {
        type: "ul",
        items: [
          "Leads and follow-ups: who owns the enquiry, what was last said, and what happens next without relying on memory or a personal chat list.",
          "The order path you already run: confirmation, documents, delivery or fulfilment notes, and a status the floor or office can see without asking.",
          "Templates the client requires: quotations, letters, order papers, replacement notes, and warranty documents generated from the same record.",
          "Document management: one place to find what was sent, what was approved, and what must go out when a part is replaced or a warranty is claimed.",
          "Mobile access: follow-up and status available to the person who can close the loop, even when they are away from a desk."
        ]
      },
      {
        type: "p",
        text: "That list is the test. When someone compares open source CRM software for a small business, they should score the product - or the build - against those jobs, not against a feature matrix written for a different company."
      },
      { type: "h2", text: "Why this search keeps landing on open source" },
      {
        type: "p",
        text: "Teams look at open source CRM software for practical reasons. They do not want a per-user bill that grows whenever a coordinator, salesperson, or warehouse contact needs a login. They want fields and stages that match their order, not a pipeline invented for a SaaS demo. They want to begin with what is breaking this month and add documents, replacements, warranty, and reporting later. They also want the data to remain theirs if the tool or vendor changes."
      },
      {
        type: "p",
        text: "Those reasons are sound. The failure mode is also familiar. An empty open-source installation still asks someone to design the fields, templates, permissions, and hand-off from the website form. If that work is skipped, the team goes back to the sheet in two weeks and the CRM becomes another login nobody opens."
      },
      {
        type: "quote",
        text: "The decision is not open source versus a paid brand. It is whether you are buying a box of parts or having the operating layer fitted to the way your business already works."
      },
      {
        type: "rich",
        parts: [
          { text: "Rock One Solutions is a Bengaluru studio that builds that layer. The work sits under " },
          { text: "CRM Systems", href: "/services/crm-systems/" },
          { text: ": lead capture, ownership, follow-up, records, and reporting a manager can read without exporting five files. Where the operation is heavier - quoting through fulfilment on a single record - the same idea is visible in the " },
          { text: "Auto Parts CRM", href: "/work/auto-parts-crm/" },
          { text: " build: one path instead of a stack of disconnected tools." }
        ]
      },
      { type: "h2", text: "What changes when the same record is on the phone" },
      {
        type: "p",
        text: "Belief usually shifts at the point the team stops asking where a file is."
      },
      {
        type: "p",
        text: "A follow-up is a task on the record, not a message that vanished in a group chat. An order status is visible to the person who needs it, including on mobile. A warranty or replacement request opens against the original order, so the template is filled from data that already exists. The design-and-attach step becomes a document generated from the CRM, stored against the client, and reusable the next time the same paper is required."
      },
      {
        type: "p",
        text: "That is the change to expect from a properly scoped build: the work becomes faster because it is no longer re-typed, re-designed, and re-shared. It does not become faster because the software looks busy."
      },
      { type: "h2", text: "What determines the cost of a CRM build" },
      {
        type: "p",
        text: "CRM work is quoted around the process it has to replace. The number changes with pipeline stages, team roles, integrations, document templates, reporting, mobile access, and the amount of historical data that must move into the system. We define those requirements before sending one fixed project price."
      },
      {
        type: "p",
        text: "The first version should still attack the leak you can name this week: missed follow-ups, order status that exists only in a sheet, or documents that live in Canva and email. Extra modules can wait until that version is in daily use, but the first quote must cover enough of the real workflow to become the team's working system rather than another partial tool."
      },
      {
        type: "quote",
        text: "You are not paying for a catalogue of features you will not open. You are paying to stop manual entry from being the integration layer."
      },
      { type: "h2", text: "What to send when comparing the sheet with a system" },
      {
        type: "p",
        text: "This article is for teams ready to buy the work, not collect another product shortlist. Send a short brief; two paragraphs is enough."
      },
      {
        type: "ul",
        items: [
          "Where enquiries arrive today: website form, WhatsApp, phone, marketplace, or walk-in.",
          "What you currently keep in Excel, shared folders, and Canva.",
          "The documents you must issue: quotation, order, replacement, warranty, or others.",
          "Who follows up and whether they need the record on a phone.",
          "What must exist in the first version and what can wait."
        ]
      },
      {
        type: "p",
        text: "We reply with a written scope, milestone plan, and fixed price for that version. Project work is priced against the scope. If you later want more of the order path in the same system, that is a separate, visible addition - not a surprise seat licence."
      },
      {
        type: "p",
        text: "If the week is still running on sheets and templates, the next step is the brief, not another comparison tab."
      }
    ],
    faqs: [
      {
        question: "Can this replace the Excel files, shared documents, and Canva templates we use every day?",
        answer:
          "For the jobs those files are doing - follow-ups, order status, client documents, replacement papers, and warranty papers - yes, that is the point of the first version. The CRM should hold the record and produce the template from it. If a file has a purpose the system has not been scoped to cover, it stays outside until you add that piece."
      },
      {
        question: "Is there a per-user cost as the team grows?",
        answer:
          "Our custom CRM build is priced against the agreed scope rather than sold as a public per-user package. Team roles and access requirements are included in the quote. Any third-party software or infrastructure with its own user fees is identified separately before work begins."
      },
      {
        question: "Can we start with leads and follow-ups and add orders, replacements, and warranty documents later?",
        answer:
          "Yes. The first version should match what is breaking now. Later stages attach to the same customer and order record so the team does not have to migrate twice."
      }
    ]
  },
  {
    slug: "designing-for-trust-before-traffic",
    title: "Designing for trust before traffic",
    excerpt:
      "Most sites chase visitors before they have earned belief. Fix the credibility layer first and the same traffic converts harder.",
    category: "Web Design",
    readTime: "4 min read",
    date: "2026-07-28",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Every website brief we receive asks the same thing first: how do we get more traffic? It is almost never the binding constraint. If a hundred people land on a page and two believe you enough to enquire, doubling the traffic does not fix the problem — it doubles the number of people who decide you are not credible."
      },
      { type: "h2", text: "What visitors are actually checking" },
      {
        type: "p",
        text: "In the first few seconds, a visitor is running an unconscious checklist. Not about your services — about whether you are a real, competent business that will still exist in six months."
      },
      {
        type: "ul",
        items: [
          "Is it obvious what this company does, in plain language?",
          "Has anyone else trusted them, and can I see who?",
          "Do the details look maintained, or abandoned two years ago?",
          "If I wanted to talk to a human right now, could I?"
        ]
      },
      {
        type: "p",
        text: "None of that is a design flourish. It is evidence. A site that answers all four beats a prettier one that answers none."
      },
      { type: "h2", text: "Order the work correctly" },
      {
        type: "p",
        text: "Fix the credibility layer before you spend on acquisition. That usually means a clear positioning line above the fold, real client names, real work with real outcomes, and a contact path that takes one click rather than three."
      },
      {
        type: "quote",
        text: "Traffic is a multiplier. If the thing you are multiplying is a low conversion rate, you are buying a bigger version of the same problem."
      },
      {
        type: "p",
        text: "Once the page earns belief, every channel you turn on afterwards performs better — because you fixed the denominator instead of inflating the numerator."
      }
    ]
  },
  {
    slug: "turning-campaigns-into-measurable-handoffs",
    title: "Turning campaigns into measurable hand-offs",
    excerpt:
      "The gap between a click and a salesperson picking up the phone is where most marketing budgets quietly disappear.",
    category: "Automation",
    readTime: "5 min read",
    date: "2026-07-14",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Marketing reports impressions and clicks. Sales reports closed deals. Between those two numbers sits an unmeasured stretch where a form submission becomes — or fails to become — a conversation. That stretch is where budget goes missing."
      },
      { type: "h2", text: "The hand-off is a system, not an intention" },
      {
        type: "p",
        text: "A lead arriving in an inbox is not a hand-off. It is a hope that someone checks the inbox. A real hand-off has an owner, a timestamp, and a state that someone can query later."
      },
      {
        type: "ul",
        items: [
          "Every lead lands in the CRM with its source attached, not just the message",
          "An owner is assigned automatically, not by whoever notices first",
          "A follow-up task exists with a due time, so silence is visible",
          "Outcome is written back, so the channel can be judged on revenue"
        ]
      },
      { type: "h2", text: "Attribution only works if the loop closes" },
      {
        type: "p",
        text: "You cannot decide where to spend next quarter without knowing which campaign produced deals, not just enquiries. That requires the closing outcome to travel back to the source record. Without the write-back, attribution reporting is guesswork with a chart attached."
      },
      {
        type: "quote",
        text: "If nobody can answer 'which campaign did this customer come from' six months later, the campaign was never really measured."
      },
      {
        type: "p",
        text: "Build the hand-off once and every channel you run afterwards reports honestly. Skip it and you will keep optimising against numbers that describe activity rather than income."
      }
    ]
  },
  {
    slug: "using-automation-where-it-actually-helps",
    title: "Using automation where it actually helps",
    excerpt:
      "Automating a broken process gives you a broken process that runs faster. Here is how to choose what to automate first.",
    category: "Growth",
    readTime: "3 min read",
    date: "2026-06-30",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Automation is sold as a way to do more. Used well, it is a way to do less — specifically, less of the repetitive, low-judgement work that quietly consumes a team's week."
      },
      { type: "h2", text: "A simple filter" },
      {
        type: "p",
        text: "Before automating any step, ask three questions. If the answer to all three is yes, automate it. If not, fix the process first."
      },
      {
        type: "ul",
        items: [
          "Does this task happen the same way every time?",
          "Does a human add no judgement when doing it?",
          "Would a delay in doing it cost money or trust?"
        ]
      },
      { type: "h2", text: "Where teams usually get it wrong" },
      {
        type: "p",
        text: "The common failure is automating the visible task rather than the expensive one. Sending an automatic acknowledgement email feels productive. Ensuring the enquiry reaches an owner with a deadline is what actually protects the sale."
      },
      {
        type: "quote",
        text: "Automate the hand-off, not the pleasantry."
      },
      {
        type: "p",
        text: "Start with one workflow that leaks money today. Prove it, measure it, then move to the next. A small automation that runs reliably beats an ambitious one nobody trusts."
      }
    ]
  },
  {
    slug: "what-ai-agents-are-actually-good-at",
    title: "What AI agents are actually good at in a business workflow",
    excerpt:
      "Beyond the demos: the narrow, boring places where an AI agent earns its keep — and the places it will cost you.",
    category: "AI",
    readTime: "6 min read",
    date: "2026-06-16",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "The demo always looks the same: someone types a sentence and a complete deliverable appears. Real workflows are less theatrical. The value shows up in narrow places where the task is repetitive, the input is messy, and a near-right answer reviewed by a human beats a perfect answer that takes three days."
      },
      { type: "h2", text: "Where agents genuinely help" },
      {
        type: "ul",
        items: [
          "Turning unstructured input — call notes, emails, forms — into structured records",
          "Drafting the first version of routine replies for a human to approve",
          "Summarising long threads so whoever picks up the account has context",
          "Flagging records that look wrong, rather than deciding what to do about them"
        ]
      },
      { type: "h2", text: "Where they cost you" },
      {
        type: "p",
        text: "Any step where being confidently wrong is expensive. Pricing, contractual commitments, compliance answers, and anything a customer will treat as a promise. In those places an agent should prepare the work, never publish it."
      },
      {
        type: "quote",
        text: "Use AI where review is cheap and error is recoverable. Keep humans where being wrong has a cost you cannot claw back."
      },
      { type: "h2", text: "The practical shape" },
      {
        type: "p",
        text: "The systems that work in production tend to look boring: an agent that reads incoming enquiries, extracts the fields, writes a CRM record, drafts a reply, and stops. A person spends fifteen seconds approving rather than four minutes typing. Multiply that across a week and the return is obvious — without betting the customer relationship on a model's confidence."
      }
    ]
  },
  {
    slug: "crm-handoffs-that-do-not-drop-the-lead",
    title: "CRM hand-offs that do not drop the lead",
    excerpt:
      "Most CRMs are not underused because the software is bad. They are underused because the hand-offs around them were never designed.",
    category: "CRM",
    readTime: "5 min read",
    date: "2026-05-29",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Companies rarely abandon a CRM in a single decision. It decays. One person stops logging calls because it is faster to remember. Another keeps a private spreadsheet because the fields do not fit. Within a quarter the system holds a partial truth, and partial truth is worse than none — because people still quote from it."
      },
      { type: "h2", text: "Design the moments, not the database" },
      {
        type: "p",
        text: "A CRM succeeds or fails at four moments: when a lead arrives, when it changes hands, when it goes quiet, and when it closes. Get those right and the record stays accurate almost by accident."
      },
      {
        type: "ul",
        items: [
          "Arrival: the record is created by the system, not typed by a person",
          "Hand-off: ownership changes explicitly, with context carried across",
          "Silence: an untouched lead surfaces itself instead of waiting to be found",
          "Close: the outcome and the reason are both captured, including the losses"
        ]
      },
      { type: "h2", text: "Capture the losses honestly" },
      {
        type: "p",
        text: "Teams instinctively record wins in detail and losses as a shrug. But the loss reasons are the more useful dataset — they tell you whether you are losing on price, on timing, or on something you could actually fix."
      },
      {
        type: "quote",
        text: "A pipeline that only reflects optimism is a forecast of nothing."
      },
      {
        type: "p",
        text: "When the four moments are designed, adoption stops being a training problem. People use the system because it is the shortest path to doing their job, not because they were told to."
      }
    ]
  },
  {
    slug: "performance-marketing-measured-against-pipeline",
    title: "Performance marketing, measured against pipeline",
    excerpt:
      "Cost per lead is a comfortable number. Cost per qualified opportunity is the one that decides whether the channel survives.",
    category: "Performance",
    readTime: "5 min read",
    date: "2026-05-12",
    author: "Rock One Solutions",
    body: [
      {
        type: "p",
        text: "Every paid channel can be made to look good if you pick a shallow enough metric. Impressions flatter reach. Clicks flatter creative. Cost per lead flatters the form. None of them tell you whether the money produced revenue."
      },
      { type: "h2", text: "Move the measurement one step deeper" },
      {
        type: "p",
        text: "The useful question is not what a lead costs, but what a lead that a salesperson would actually want costs. Those two numbers can differ by an order of magnitude across channels that look identical on a cost-per-lead report."
      },
      {
        type: "ul",
        items: [
          "Tag every lead with its channel, campaign, and creative at capture",
          "Let sales mark qualification honestly, including the fast rejections",
          "Report cost per qualified opportunity, not cost per form fill",
          "Review at a cadence slow enough to be statistically real"
        ]
      },
      { type: "h2", text: "Expect the ranking to change" },
      {
        type: "p",
        text: "The first time a team sees spend ranked by qualified pipeline instead of lead volume, the ordering usually inverts. The cheapest leads are frequently the least serious, and the channel that looked expensive turns out to be the one producing customers."
      },
      {
        type: "quote",
        text: "You cannot optimise toward revenue using a metric that stops at the form."
      },
      {
        type: "p",
        text: "The tracking work is unglamorous and takes a fortnight. It is also the difference between a marketing budget you can defend and one you can only describe."
      }
    ]
  },
  {
    slug: "scale-tech-infrastructure-dedicated-remote-teams",
    title: "How to Scale Your Tech Infrastructure with Dedicated Remote Teams Without Quality Compromise",
    cardTitle: "Scaling tech infrastructure with dedicated remote teams",
    excerpt:
      "Learn how growing tech companies scale engineering infrastructure using dedicated remote teams without sacrificing code quality, velocity, or control.",
    category: "Remote Tech Teams & Hiring",
    readTime: "7 min read",
    date: "2026-10-15",
    author: "Rock One Solutions Team",
    body: [
      {
        type: "p",
        text: "In today’s hyper-competitive digital economy, technology companies and expanding enterprises face a critical growth bottleneck: finding, hiring, and retaining top-tier software engineering talent. As local talent pools become saturated and compensation demands surge, tech leaders are often forced to choose between two undesirable options—paying exorbitant local salaries or compromising on engineering quality by rushing hires."
      },
      {
        type: "p",
        text: "To overcome this dilemma, forward-thinking CTOs, Founders, and Product Managers are turning to a proven operational model: Dedicated Remote Tech Teams."
      },
      {
        type: "p",
        text: "Unlike traditional transactional freelancing or low-cost gig outsourcing, dedicated remote engineering teams operate as a seamless extension of your in-house product organization. They adopt your development culture, integrate into your communication channels, and execute against your core product roadmap."
      },
      { type: "h2", text: "The Local Hiring Crisis Facing Growing Tech Companies" },
      {
        type: "p",
        text: "Scaling a modern tech platform requires specialized talent across frontend engineering, backend architecture, cloud infrastructure, AI development, and UI/UX design. However, building an entirely local engineering team creates severe operational friction:"
      },
      {
        type: "ul",
        items: [
          "Astronomical Recruitment Costs and Lengthy Hiring Cycles: Recruiting a senior full-stack developer locally often takes anywhere from 60 to 90 days, draining substantial capital before production code is written.",
          "High Attrition Rates and Knowledge Loss: Local tech hubs suffer from aggressive headhunting, causing product velocity to stall when developers leave every 12 to 18 months.",
          "Geographical Talent Constraints: Limiting hiring radius to a single city restricts specialized skill pipelines like React Native, AI/LLM, or custom CRM architects."
        ]
      },
      { type: "h2", text: "Dedicated Remote Teams vs. Traditional Gig Outsourcing" },
      {
        type: "p",
        text: "A common concern among engineering leaders is that remote hiring might mirror legacy project-based outsourcing. It is essential to distinguish between project outsourcing and a dedicated remote engineering team."
      },
      {
        type: "ul",
        items: [
          "Team Focus: Dedicated talent works exclusively on your codebase, unlike shared agency developers.",
          "Code Ownership: Full adherence to your internal architecture and code standards.",
          "Workflow Integration: Direct embedding into daily standups, Jira, and GitHub workflows.",
          "Scalability: Agile capacity adjustments as your product roadmap evolves."
        ]
      },
      { type: "h2", text: "Key Strategies to Maintain High Engineering Quality Remotely" },
      {
        type: "p",
        text: "Building a high-performing remote team requires deliberate operational structures. Here is how modern tech leaders maintain velocity and code quality across distributed teams:"
      },
      {
        type: "ul",
        items: [
          "Implement Rigorous Technical Vetting Upfront: Multi-stage live coding assessments, system architecture reviews, and communication checks.",
          "Standardize CI/CD and Code Review Workflows: Strict PR templates, automated linting, unit testing suites, and continuous deployment pipelines.",
          "Treat Remote Engineers as Core Team Members: Full participation in agile standups, sprint planning, and architectural discussions."
        ]
      },
      { type: "h2", text: "Core Roles You Can Scale with a Dedicated Remote Team" },
      {
        type: "p",
        text: "Whether you are rebuilding legacy enterprise software or launching a brand-new digital product, dedicated remote talent can scale every layer of your technology stack:"
      },
      {
        type: "ul",
        items: [
          "Frontend Developers: React.js, Next.js, and TypeScript experts building responsive, high-converting interfaces.",
          "Mobile Engineers: Specialized React Native developers shipping cross-platform iOS and Android apps.",
          "Backend & API Engineers: Architects engineering scalable microservices and secure database integrations.",
          "Automation & CRM Specialists: Engineers building custom CRM workflows and internal business tools."
        ]
      },
      { type: "quote", text: "Scaling your technology infrastructure does not require compromising on code quality or development velocity." },
      {
        type: "rich",
        parts: [
          { text: "At Rock One Solutions, we remove the friction of global engineering recruitment. Explore our " },
          { text: "Dedicated Remote Tech Teams", href: "/remote-tech-team/" },
          { text: " service to scale your product roadmap with confidence." }
        ]
      }
    ],
    faqs: [
      {
        question: "How fast can a dedicated remote developer be onboarded?",
        answer: "Fully aligned, pre-vetted senior developers can be integrated into your existing Jira and GitHub workflows within days, bypassing the typical 60 to 90-day local hiring cycle."
      },
      {
        question: "Will the remote team work exclusively on our project?",
        answer: "Yes. Unlike shared agency models, our dedicated remote engineers work 100% exclusively on your codebase and report directly to your product leadership."
      }
    ]
  },

  
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string, category: string) {
  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === category
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== category
  );
  return [...sameCategory, ...others].slice(0, 3);
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

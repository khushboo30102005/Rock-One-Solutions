export type PillarPage = {
  slug: string;
  label: string;
  title: string;
  accent: string;
  image: string;
  imageAlt: string;
  description: string;
  heroNote: string;
  bestFor: string[];
  metrics: { value: string; label: string }[];
  businessCase: {
    kicker: string;
    title: string;
    body: string;
    points: string[];
  };
  processTitle: string;
  stages: { title: string; body: string }[];
  capabilitiesTitle: string;
  capabilities: string[];
  operatingModel: { label: string; title: string; body: string }[];
  outcomesTitle: string;
  outcomes: string[];
  proof: { title: string; body: string }[];
  cta: string;
};

export const pillarPages: Record<string, PillarPage> = {
  "rock-one-build": {
    slug: "rock-one-build",
    label: "Rock One Build",
    title: "The website your team can sell from and operate from.",
    accent: "#1c5fb8",
    image: "/pillar-images/rock-one-build.png",
    imageAlt: "Premium workspace showing website, app, and CRM interface planning",
    description:
      "Rock One Build is our development layer for companies that need more than a website. We plan the website, app experience, CRM structure, and operational handoff together so the whole digital system feels connected from day one.",
    heroNote: "A premium front-end, practical backend, and CRM-ready architecture delivered as one build.",
    bestFor: [
      "Service brands rebuilding their website into a working sales system",
      "Teams that need website, app, and CRM logic planned together",
      "Founders who want one partner for public pages and internal operations"
    ],
    metrics: [
      { value: "01", label: "Website experience" },
      { value: "02", label: "App or portal layer" },
      { value: "03", label: "CRM foundation" }
    ],
    businessCase: {
      kicker: "Business situation",
      title: "When your website needs to become the front door of operations.",
      body:
        "Most growing companies outgrow a simple website when inquiries, records, approvals, and follow-up start living in different places. This page is for businesses that want the website, app, and CRM foundation designed as one practical system.",
      points: [
        "Website inquiries should become usable CRM records without manual copying.",
        "Your team needs admin screens, portals, or dashboards behind the public site.",
        "The launch should improve daily work, not only the first impression."
      ]
    },
    processTitle: "How we turn a website brief into a usable business system.",
    stages: [
      {
        title: "Experience architecture",
        body: "We map the pages, user journeys, forms, dashboards, and CRM fields before design starts."
      },
      {
        title: "Premium interface build",
        body: "We create responsive websites, apps, and portals with polished UI, clear UX, and strong performance."
      },
      {
        title: "CRM-ready handoff",
        body: "Every inquiry, account, task, and update is shaped so it can move cleanly into your CRM workflow."
      },
      {
        title: "Launch and training",
        body: "We test the full journey, launch carefully, and hand over a system your team can actually use."
      }
    ],
    capabilitiesTitle: "What we build when the front-end and operations need to work together.",
    capabilities: [
      "Custom website development",
      "Landing pages and conversion sections",
      "Web apps and business portals",
      "CRM structure and lead capture",
      "Admin panels and internal tools",
      "Performance-ready frontend builds"
    ],
    operatingModel: [
      {
        label: "Public front door",
        title: "The website explains, qualifies, and converts.",
        body: "We structure pages, forms, CTAs, service proof, and conversion paths around how your buyer actually decides."
      },
      {
        label: "Work layer",
        title: "The app or portal supports the team behind the site.",
        body: "Admin flows, records, permissions, and internal screens are planned for the people who manage the work after launch."
      },
      {
        label: "CRM foundation",
        title: "Lead data lands where action happens.",
        body: "Fields, statuses, notifications, and handoff points are shaped before development so the system is ready to operate."
      }
    ],
    outcomesTitle: "What should feel different after the build is live.",
    outcomes: [
      "A website that builds trust quickly",
      "A CRM foundation ready for growth",
      "Less duplicate work across tools",
      "Cleaner handoff from visitor to lead"
    ],
    proof: [
      {
        title: "Designed for first impression",
        body: "Your website becomes a credible front door, not a brochure that sits separately from operations."
      },
      {
        title: "Built for the team behind it",
        body: "Forms, dashboards, and admin flows are planned for the people who manage the work after launch."
      }
    ],
    cta: "Plan your build"
  },
  "rock-one-automation": {
    slug: "rock-one-automation",
    label: "Rock One Automation",
    title: "Stop chasing work across forms, chats, sheets, and CRM.",
    accent: "#0f9f7a",
    image: "/pillar-images/rock-one-automation.png",
    imageAlt: "Workflow automation interfaces connecting leads, alerts, tasks, and CRM handoffs",
    description:
      "Rock One Automation connects your website, CRM, alerts, follow-ups, and reporting so your team does not need to manually chase every next step. The goal is simple: fewer missed actions, faster response, and cleaner visibility.",
    heroNote: "From form submission to CRM routing, alerts, follow-up, and status reporting in one connected flow.",
    bestFor: [
      "Companies losing speed between inquiry, assignment, and follow-up",
      "Teams using forms, WhatsApp, sheets, email, and CRM in separate pockets",
      "Businesses that want reserved execution during agreed working shifts"
    ],
    metrics: [
      { value: "Lead", label: "Captured instantly" },
      { value: "CRM", label: "Routed clearly" },
      { value: "Team", label: "Notified fast" }
    ],
    businessCase: {
      kicker: "Business situation",
      title: "When the work is real, but the next step keeps getting delayed.",
      body:
        "Automation is not about adding fancy tools. It is about making sure every inquiry, support request, internal task, and follow-up reaches the right person with the right context at the right time.",
      points: [
        "Leads are coming in, but ownership and response time are inconsistent.",
        "Your team repeats the same updates across CRM, sheets, email, and chat.",
        "Managers need visibility without asking for status every day."
      ]
    },
    processTitle: "How we remove the manual chase from your daily workflow.",
    stages: [
      {
        title: "Workflow mapping",
        body: "We understand what happens after a lead, order, support request, or internal task enters your business."
      },
      {
        title: "Trigger and routing design",
        body: "We define the rules for who receives what, when it moves, and what data must travel with it."
      },
      {
        title: "Automation setup",
        body: "We connect forms, CRM, notifications, sheets, email, dashboards, and internal tools."
      },
      {
        title: "Monitoring and refinement",
        body: "We review the flow after launch and improve weak points based on real usage."
      }
    ],
    capabilitiesTitle: "What we connect, route, and monitor inside the workflow.",
    capabilities: [
      "CRM lead routing",
      "Website form automation",
      "Email and WhatsApp alerts",
      "Task assignment flows",
      "Follow-up reminders",
      "Reporting and status dashboards"
    ],
    operatingModel: [
      {
        label: "Trigger",
        title: "Every important action starts a clear flow.",
        body: "Forms, inquiries, campaign leads, internal requests, and support updates become structured events your system can act on."
      },
      {
        label: "Assignment",
        title: "The right person gets the right work.",
        body: "Rules decide ownership, priority, notifications, and next action without the team manually checking every source."
      },
      {
        label: "Visibility",
        title: "Progress becomes easy to see.",
        body: "Status, follow-up, missed actions, and completion signals are visible in the places your team already uses."
      }
    ],
    outcomesTitle: "What automation should improve inside the business.",
    outcomes: [
      "Faster lead response",
      "Fewer missed handoffs",
      "Clear team ownership",
      "More work completed without extra headcount"
    ],
    proof: [
      {
        title: "Built around your real process",
        body: "We automate the work your team already does instead of forcing your business into a random template."
      },
      {
        title: "Visibility at every step",
        body: "The right people can see where work stands, what is pending, and what needs attention next."
      }
    ],
    cta: "Map your workflow"
  },
  "rock-one-agents-ai-consultation": {
    slug: "rock-one-agents-ai-consultation",
    label: "Rock One Agents & AI Consultation",
    title: "Use AI where it saves team time and protects control.",
    accent: "#7c3aed",
    image: "/pillar-images/rock-one-agents-ai-consultation.png",
    imageAlt: "AI agent workflow planning session with abstract assistant interface overlays",
    description:
      "Rock One Agents & AI Consultation helps businesses understand where AI should actually fit. We identify useful automation opportunities, design agent workflows, and prepare your systems for future voice agents when the use case is ready.",
    heroNote: "AI planning, agent workflows, and future-ready voice-agent thinking without hype.",
    bestFor: [
      "Owners who want AI clarity before buying tools or hiring teams",
      "Sales, support, and operations teams handling repeated questions or research",
      "Companies preparing for controlled AI and future voice-agent use cases"
    ],
    metrics: [
      { value: "Audit", label: "AI opportunities" },
      { value: "Agent", label: "Workflow design" },
      { value: "Future", label: "Voice-ready roadmap" }
    ],
    businessCase: {
      kicker: "Business situation",
      title: "When AI sounds useful, but the business use case is still unclear.",
      body:
        "Most companies do not need random AI features. They need to know where AI can reduce repetitive work, improve response quality, and support the team without creating risk or confusion.",
      points: [
        "Your team repeats research, qualification, support, reporting, or document tasks.",
        "You want agents that work with your data, CRM, website, and approvals.",
        "You need a roadmap for AI now, with room for voice agents later."
      ]
    },
    processTitle: "How we move AI from idea to controlled business use.",
    stages: [
      {
        title: "AI opportunity audit",
        body: "We review your sales, support, operations, and reporting workflows to find useful AI opportunities."
      },
      {
        title: "Agent workflow planning",
        body: "We define what the agent should know, what it should do, and where human approval is needed."
      },
      {
        title: "Prototype and integration",
        body: "We design practical AI-assisted flows that connect with your CRM, website, documents, or internal tools."
      },
      {
        title: "Voice agent readiness",
        body: "When voice agents fit your business, this page can expand into live call handling, booking, and support use cases."
      }
    ],
    capabilitiesTitle: "What we design before AI becomes part of your workflow.",
    capabilities: [
      "AI consultation roadmap",
      "Agent workflow design",
      "Knowledge-base planning",
      "CRM and support assistant flows",
      "Lead qualification agents",
      "Future voice-agent strategy"
    ],
    operatingModel: [
      {
        label: "Audit",
        title: "Find the repetitive work worth automating.",
        body: "We study where your team spends time on sorting, answering, researching, reporting, or preparing next actions."
      },
      {
        label: "Agent design",
        title: "Define what the agent can and cannot do.",
        body: "We map knowledge sources, actions, guardrails, approvals, and escalation so the agent supports the team responsibly."
      },
      {
        label: "Rollout",
        title: "Start with useful flows, then expand.",
        body: "We help you move from assistant workflows to deeper CRM, support, sales, and future voice-agent capability."
      }
    ],
    outcomesTitle: "What practical AI should improve for your team.",
    outcomes: [
      "Clear AI use cases",
      "Less manual research and sorting",
      "Smarter follow-up support",
      "A roadmap for future voice agents"
    ],
    proof: [
      {
        title: "Practical before flashy",
        body: "We focus on AI that saves time, improves response, or gives your team better decision support."
      },
      {
        title: "Human-controlled automation",
        body: "We design agents with clear guardrails, review points, and fallback paths."
      }
    ],
    cta: "Explore AI consultation"
  },
  "revenue-with-rock-one-solution": {
    slug: "revenue-with-rock-one-solution",
    label: "Revenue with Rock One Solution",
    title: "Find the leaks between lead, follow-up, and revenue.",
    accent: "#f35a2b",
    image: "/pillar-images/revenue-with-rock-one-solution.png",
    imageAlt: "Revenue dashboard and performance analytics review in a professional workspace",
    description:
      "Revenue with Rock One Solution is our growth intelligence layer. We track how visitors become leads, how leads move through follow-up, and where performance is leaking so we can improve decisions and generate more revenue from the same digital system.",
    heroNote: "Lead quality, follow-up performance, campaign data, and revenue signals analyzed together.",
    bestFor: [
      "Teams running SEO, ads, or campaigns without clear lead quality visibility",
      "Businesses that need to know where revenue leaks after inquiry",
      "Owners who want reporting connected to decisions, not vanity numbers"
    ],
    metrics: [
      { value: "Track", label: "Lead sources" },
      { value: "Read", label: "Performance signals" },
      { value: "Grow", label: "Revenue outcomes" }
    ],
    businessCase: {
      kicker: "Business situation",
      title: "When marketing is active, but revenue visibility is weak.",
      body:
        "Traffic and leads do not automatically become revenue. This layer helps you see which sources bring serious buyers, where follow-up slows down, and what needs to change to improve conversion.",
      points: [
        "You cannot clearly connect lead source, follow-up, and final business outcome.",
        "Campaigns are running, but decisions still depend on guesswork.",
        "Your team needs cleaner reporting before spending more on growth."
      ]
    },
    processTitle: "How we connect performance signals to revenue decisions.",
    stages: [
      {
        title: "Data capture",
        body: "We connect forms, campaigns, CRM, analytics, and lead sources so important signals are not lost."
      },
      {
        title: "Follow-up visibility",
        body: "We help you see which leads were contacted, which were missed, and what follow-up needs to happen next."
      },
      {
        title: "Performance analysis",
        body: "We review traffic, conversion, campaign quality, and pipeline movement to find where revenue can improve."
      },
      {
        title: "Revenue experiments",
        body: "We improve landing pages, messaging, automations, and reports based on real performance data."
      }
    ],
    capabilitiesTitle: "What we measure, review, and improve for growth.",
    capabilities: [
      "Lead source tracking",
      "CRM performance reporting",
      "Follow-up analysis",
      "Campaign conversion review",
      "Landing page improvement",
      "Revenue dashboard planning"
    ],
    operatingModel: [
      {
        label: "Capture",
        title: "Lead and campaign signals are recorded cleanly.",
        body: "We connect forms, CRM, ads, analytics, landing pages, and follow-up data so nothing important disappears."
      },
      {
        label: "Analyze",
        title: "The team can see what is working and what is leaking.",
        body: "Source quality, response speed, contact status, conversion points, and campaign performance become easier to compare."
      },
      {
        label: "Improve",
        title: "Revenue experiments are based on real signals.",
        body: "We adjust pages, messages, follow-up timing, routing, and reporting based on what the data shows."
      }
    ],
    outcomesTitle: "What should improve when revenue signals become clear.",
    outcomes: [
      "Better lead quality decisions",
      "Faster follow-up discipline",
      "Clearer campaign ROI",
      "More revenue from existing traffic"
    ],
    proof: [
      {
        title: "Data that explains what to do next",
        body: "Reports should guide action, not just show numbers. We turn performance signals into practical improvements."
      },
      {
        title: "Revenue loop, not marketing noise",
        body: "Website, automation, and campaign data are reviewed together so growth decisions become sharper."
      }
    ],
    cta: "Analyze your revenue flow"
  }
};

export const pillarOrder = [
  "rock-one-build",
  "rock-one-automation",
  "rock-one-agents-ai-consultation",
  "revenue-with-rock-one-solution"
];

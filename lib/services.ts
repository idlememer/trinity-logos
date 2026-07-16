export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string;
  category: "Talent" | "Technology" | "Strategy";

  /** Long-form intro shown at the top of the detail page (2–3 short paragraphs) */
  overview: string[];
  /** Concrete deliverables the client receives */
  whatWeDeliver: string[];
  /** How the engagement runs, step-by-step */
  howWeWork: { title: string; body: string }[];
  /** Types of clients / situations that benefit most */
  whoItsFor: string[];
  /** Details for the engagement panel */
  engagement: {
    model: string;
    kickoff: string;
    pricing: string;
    sla: string;
  };
  /** Frequently-asked questions */
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "hr-recruitment",
    name: "HR Recruitment",
    short: "End-to-end talent acquisition for high-growth enterprises.",
    description:
      "From sourcing to onboarding — we build hiring pipelines that scale with your business. Specialized recruiters, AI-assisted screening, and 30-day placement guarantees.",
    bullets: [
      "Executive search",
      "Volume hiring",
      "Tech & non-tech roles",
      "30-day replacement guarantee",
    ],
    icon: "users",
    category: "Talent",
    overview: [
      "Our HR Recruitment practice is built around one idea — hiring should feel like an unfair advantage, not a chore. We pair specialist recruiters with a tuned screening process to give you calibrated shortlists in days, not weeks.",
      "Every mandate is owned by a named recruiter who understands your business, your bar, and the market. We do the sourcing, the outreach, the calibration calls, the feedback loops — you spend your time only on the interviews that matter.",
    ],
    whatWeDeliver: [
      "Calibrated shortlist of 4–6 candidates within 5–7 business days",
      "Full candidate briefs — CV, screening notes, comp expectations, notice period, motivation",
      "Interview scheduling and reminders handled end-to-end",
      "Structured feedback loop after every stage",
      "Offer negotiation support and joining assurance",
      "30-day replacement guarantee if a hire drops off",
    ],
    howWeWork: [
      {
        title: "Kick-off & calibration",
        body: "60-minute alignment call with the hiring manager. We nail the role definition, must-haves, deal-breakers, and comp band before touching a single candidate.",
      },
      {
        title: "Sourcing sprint",
        body: "Multi-channel outreach across our network, referrals, and targeted headhunting. Every profile is screened by a human recruiter — no auto-forwarded resumes.",
      },
      {
        title: "Shortlist & handover",
        body: "You receive a curated shortlist with detailed notes. We set up interviews and manage the schedule so you never chase candidates.",
      },
      {
        title: "Offer & joining",
        body: "We help negotiate offers, keep candidates warm through notice periods, and follow up post-joining to catch and address any friction.",
      },
    ],
    whoItsFor: [
      "Companies making their first India engineering / operations hires",
      "Growth-stage teams scaling from 10 → 50 in a critical function",
      "Enterprises replacing an underperforming recruiter or agency",
      "Confidential leadership searches where discretion matters",
    ],
    engagement: {
      model: "Contingent or retained · per role or bundled",
      kickoff: "≤ 3 business days",
      pricing: "Fixed % of CTC — no hidden fees",
      sla: "First shortlist in 5–7 days · 30-day replacement",
    },
    faqs: [
      {
        q: "How is this different from a typical recruitment agency?",
        a: "We work with a limited number of concurrent mandates so every role gets a senior recruiter's undivided attention. You'll speak to the person doing the work — not a manager who handed it to a junior.",
      },
      {
        q: "What roles do you specialize in?",
        a: "Engineering, data, product, cloud/DevOps, security, and mid-to-senior operations roles across India. We also handle confidential leadership searches (Director / VP / CXO).",
      },
      {
        q: "How does the replacement guarantee work?",
        a: "If a placed candidate leaves within 30 days of joining, we source a replacement at no additional fee. In practice, our first-year retention runs above 92%.",
      },
    ],
  },
  {
    slug: "staffing-solutions",
    name: "Staffing Solutions",
    short: "Contract, contract-to-hire, and managed staffing.",
    description:
      "Deploy vetted talent in days, not months. Flexible engagement models with full statutory compliance across India and overseas.",
    bullets: [
      "Contract staffing",
      "Contract-to-hire",
      "Bench mobilization",
      "Pan-India coverage",
    ],
    icon: "userPlus",
    category: "Talent",
    overview: [
      "Staffing is about speed, compliance, and quality — in that order. Our staffing practice deploys pre-vetted talent on your payroll or ours, with full statutory coverage from day one.",
      "Whether you're scaling a project team, filling a maternity gap, or trying out a candidate before converting them, we structure the engagement to fit — and handle every piece of the compliance stack.",
    ],
    whatWeDeliver: [
      "Pre-vetted candidates available for deployment in days",
      "PF, ESIC, professional tax, TDS — all statutory compliance handled",
      "Monthly invoicing with transparent margin breakdown",
      "Dedicated engagement manager per account",
      "Seamless conversion path when contract-to-hire",
    ],
    howWeWork: [
      {
        title: "Requirement scoping",
        body: "We understand headcount, skills, duration, location, and any client-specific compliance requirements.",
      },
      {
        title: "Rapid deployment",
        body: "Candidates are drawn from our pre-vetted bench where possible; targeted sourcing fills any gap within 7–10 days.",
      },
      {
        title: "Compliance & payroll",
        body: "We manage onboarding paperwork, statutory registrations, and monthly payroll. You get a single invoice.",
      },
      {
        title: "Ongoing engagement",
        body: "Quarterly reviews, performance check-ins, and easy off-boarding / conversion when the project changes.",
      },
    ],
    whoItsFor: [
      "Project teams with fixed durations (6–24 months)",
      "Companies wanting to try before making a permanent hire",
      "Enterprises with hiring freezes but real work to do",
      "Teams needing pan-India coverage without setting up local entities",
    ],
    engagement: {
      model: "Monthly retainer per FTE · payroll-inclusive",
      kickoff: "≤ 5 business days",
      pricing: "Transparent margin on candidate CTC",
      sla: "Deployment in 7–10 days · zero compliance defects",
    },
    faqs: [
      {
        q: "Who does the candidate technically work for?",
        a: "They're on our payroll (or on the client's, if preferred). Either way, we take care of compliance, payroll, benefits, and HR support so the client can focus on the work.",
      },
      {
        q: "Can we convert a contract candidate to a full-time hire?",
        a: "Yes — our contract-to-hire model builds in a conversion window (typically 3–6 months) with a pre-agreed conversion fee.",
      },
      {
        q: "Do you handle overseas staffing?",
        a: "We support India-based and India-remote staffing directly. For overseas placements we partner with vetted local providers.",
      },
    ],
  },
  {
    slug: "outsourcing",
    name: "Outsourcing",
    short: "Business process and IT outsourcing built for scale.",
    description:
      "Hand off entire functions to a dedicated, SLA-backed team. From back-office to engineering, we operate as your extended workforce.",
    bullets: [
      "Process outsourcing",
      "IT-managed services",
      "Dedicated teams",
      "SLA-backed delivery",
    ],
    icon: "globe",
    category: "Strategy",
    overview: [
      "Outsourcing works when it's treated as a partnership, not a transaction. We take ownership of a defined function — hiring operations, IT support, back-office processing, first-line customer service — and run it against measurable SLAs.",
      "Our teams sit either at our Visakhapatnam operations centre or embedded at client sites, depending on the model. Reporting is transparent and monthly business reviews are standard.",
    ],
    whatWeDeliver: [
      "Dedicated team ramped up and trained on your process",
      "Documented SOPs and knowledge transfer artefacts",
      "SLA-based delivery with monthly performance reports",
      "Escalation paths and business continuity coverage",
      "Continuous improvement — process optimisation baked in",
    ],
    howWeWork: [
      {
        title: "Discovery & scoping",
        body: "We map current-state process, volumes, quality bars, and pain points. Deliverable: an operating-model proposal.",
      },
      {
        title: "Team assembly",
        body: "Recruiters + operations leads assemble the team; specialised roles are sourced in parallel.",
      },
      {
        title: "Transition & shadow",
        body: "Structured knowledge transfer with parallel run before full cutover. Typically 4–8 weeks depending on complexity.",
      },
      {
        title: "Steady-state operations",
        body: "Monthly business reviews, quarterly optimisation cycles, and quarterly executive readouts.",
      },
    ],
    whoItsFor: [
      "Enterprises with well-defined, repeatable processes that don't need to be in-house",
      "Teams wanting a lower-cost delivery base in India without setting up a subsidiary",
      "IT organisations needing 24×7 NOC or L1/L2 support coverage",
      "Companies looking to convert a fixed-cost operation to a variable-cost one",
    ],
    engagement: {
      model: "Monthly SLA-backed managed service",
      kickoff: "6–10 weeks (including transition)",
      pricing: "Per-FTE, per-transaction, or outcome-based",
      sla: "Tiered SLAs with monthly credits on breach",
    },
    faqs: [
      {
        q: "What processes are best suited to outsource?",
        a: "Volume-driven, well-documented processes — talent operations, back-office finance, IT support, customer response — see the largest gains. Highly bespoke or judgement-heavy work is typically better kept in-house.",
      },
      {
        q: "How do you handle data protection?",
        a: "We work under signed MSAs with data-handling addendums. GDPR-grade practices, ISO-27001-aligned controls, and client-specific security requirements are supported.",
      },
      {
        q: "Can we start small?",
        a: "Yes — most engagements start with a pilot team of 5–15 and scale up over 6–12 months as trust builds and processes stabilise.",
      },
    ],
  },
  {
    slug: "consulting",
    name: "Consulting",
    short: "Strategic advisory for talent, technology and transformation.",
    description:
      "Org design, workforce planning, digital transformation roadmaps. We bring senior consultants who have scaled enterprises across India.",
    bullets: [
      "Org & workforce design",
      "Transformation strategy",
      "M&A talent diligence",
      "Operating model redesign",
    ],
    icon: "compass",
    category: "Strategy",
    overview: [
      "Our consulting practice partners with leadership teams on decisions that matter — how you organise, where you invest, what you build, and what you outsource.",
      "Every engagement is delivered by senior consultants (not analysts) who have run the functions they now advise on. We ship written recommendations, not slideware.",
    ],
    whatWeDeliver: [
      "Diagnostic reports with clear findings and recommendations",
      "Operating-model designs with role definitions and RACI",
      "Workforce plans tied to business milestones",
      "Transformation roadmaps sequenced by dependency and value",
      "Implementation support — we stay in the room during execution",
    ],
    howWeWork: [
      {
        title: "Discovery",
        body: "Structured interviews with 8–15 stakeholders + data review. Duration: 1–2 weeks.",
      },
      {
        title: "Diagnosis",
        body: "Synthesis workshop with leadership. We surface findings, prioritise problems, and align on scope for the recommendation phase.",
      },
      {
        title: "Recommendation",
        body: "Written report with rationale, options, trade-offs, and a phased plan. Every recommendation has an owner and a sequence.",
      },
      {
        title: "Implementation support",
        body: "Optional — we stay on retainer during the first 3–6 months of execution to unblock, adjust, and accelerate.",
      },
    ],
    whoItsFor: [
      "Leadership teams facing a scaling inflection point",
      "PE-backed companies going through org redesign or M&A integration",
      "CIOs planning a multi-year transformation roadmap",
      "Founders needing an outside perspective on hiring strategy or talent architecture",
    ],
    engagement: {
      model: "Fixed-fee project + optional implementation retainer",
      kickoff: "≤ 2 weeks",
      pricing: "Fixed-fee based on scope",
      sla: "Written deliverables at each milestone",
    },
    faqs: [
      {
        q: "How is this different from a Big-4 consultant?",
        a: "We're smaller and more senior per engagement. You'll work directly with the partner or director who scoped your project — not a rotating cast of associates.",
      },
      {
        q: "Do you stay through implementation?",
        a: "We prefer to. Recommendations only matter if they're executed, and most of our value shows up in the first six months of change management.",
      },
      {
        q: "How long do engagements typically run?",
        a: "Discovery + recommendation is usually 6–10 weeks. Implementation support runs 3–6 months at a lighter cadence.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    short: "Custom enterprise software, web, and mobile platforms.",
    description:
      "Production-grade engineering across web, mobile, cloud and AI. Dedicated pods that ship — from MVP to enterprise rollout.",
    bullets: [
      "Web & mobile apps",
      "Cloud & DevOps",
      "AI & data platforms",
      "Modernization",
    ],
    icon: "code",
    category: "Technology",
    overview: [
      "Our engineering studio builds production software for clients who care about craft. Every pod is a self-contained delivery unit — engineers, a designer, and a product manager — that owns the outcome, not just the tickets.",
      "We work in two-week sprints with weekly demos and monthly business reviews. Code is written to production standards from the first commit, with test coverage, CI/CD, and observability baked in.",
    ],
    whatWeDeliver: [
      "Working software shipped every sprint",
      "Full source code and documentation, owned by you",
      "CI/CD pipelines, monitoring, and alerting configured",
      "Design system and component library where the scope warrants",
      "Handover playbook for your team to take over or extend",
    ],
    howWeWork: [
      {
        title: "Product discovery",
        body: "1–2 weeks of scoping — user research, competitive review, feature prioritisation. Output: a lean product spec + roadmap.",
      },
      {
        title: "Design + technical architecture",
        body: "Wireframes, key screens, and a technical architecture document. Nothing gets built until this is signed off.",
      },
      {
        title: "Two-week delivery sprints",
        body: "Backlog → sprint planning → build → demo → retrospective. Every fortnight ships something usable.",
      },
      {
        title: "Launch & handover",
        body: "Production deployment, monitoring setup, KT sessions with your team. Optional 3-month warranty / retainer.",
      },
    ],
    whoItsFor: [
      "Founders taking an MVP from prototype to production",
      "Enterprises building internal tools or customer portals",
      "Product teams that need extra capacity for a specific push",
      "CTOs modernising legacy systems into cloud-native services",
    ],
    engagement: {
      model: "Dedicated pod (3–8 people) · monthly retainer",
      kickoff: "≤ 2 weeks",
      pricing: "Per-pod monthly, or fixed-fee for scoped MVPs",
      sla: "Sprint-cadence delivery + quality gates",
    },
    faqs: [
      {
        q: "What stack do you use?",
        a: "Default modern stack — TypeScript, React/Next.js, Node.js, Postgres, AWS/GCP. For mobile: React Native or native as fits. For data/AI: Python, PyTorch, vector DBs. We match the stack to the problem, not the reverse.",
      },
      {
        q: "Who owns the code?",
        a: "You do — fully. Repositories are set up in your organisation from day one. There's no IP encumbrance and no lock-in.",
      },
      {
        q: "Can we hire the team afterwards?",
        a: "Yes. Many engagements transition team members onto client payroll at the end of the project — that pathway is built into the contract.",
      },
    ],
  },
  {
    slug: "it-solutions",
    name: "IT Solutions",
    short: "Infrastructure, integration, and managed IT.",
    description:
      "End-to-end IT — from cloud migration and ERP rollouts to network operations and 24×7 support.",
    bullets: ["Cloud migration", "ERP & CRM", "Network & security", "24×7 NOC"],
    icon: "server",
    category: "Technology",
    overview: [
      "Our IT Solutions practice takes ownership of the infrastructure, platforms, and support functions that keep your business running. From cloud migrations to ERP rollouts to 24×7 network operations, we deliver measurable, SLA-backed outcomes.",
      "We work with mid-market companies and enterprises who want the reliability of a large IT services firm without the layers of overhead — you deal directly with the senior engineer who owns your account.",
    ],
    whatWeDeliver: [
      "Cloud migration and modernisation programmes (AWS / Azure / GCP)",
      "ERP and CRM rollouts (SAP, Odoo, Salesforce, HubSpot)",
      "Network design, security architecture, and hardening",
      "24×7 NOC / SOC with defined escalation matrices",
      "Managed endpoint, patching, and identity administration",
    ],
    howWeWork: [
      {
        title: "Current-state assessment",
        body: "We audit infrastructure, applications, and operational processes. Deliverable: a written baseline + risk register.",
      },
      {
        title: "Target-state design",
        body: "Architecture diagrams, migration plan, and cost model. Signed off before any change is made.",
      },
      {
        title: "Delivery & migration",
        body: "Phased cutover with rollback plans at every step. Zero-surprise execution is the goal.",
      },
      {
        title: "Managed operations",
        body: "Ongoing NOC coverage, monthly service reviews, and continuous cost/performance optimisation.",
      },
    ],
    whoItsFor: [
      "Companies migrating from on-prem to cloud",
      "Enterprises consolidating ERP / CRM landscapes",
      "IT leaders needing 24×7 coverage without hiring shift teams",
      "Growing businesses whose IT function has outgrown a single admin",
    ],
    engagement: {
      model: "Project-based delivery + managed-services retainer",
      kickoff: "≤ 3 weeks",
      pricing: "Fixed-fee projects · monthly retainer for managed services",
      sla: "Tiered response SLAs · 99.9% availability targets",
    },
    faqs: [
      {
        q: "Do you resell software licences?",
        a: "We don't — we're vendor-neutral. We help you procure directly from the OEM and negotiate on your behalf if useful.",
      },
      {
        q: "Can you take over an existing environment?",
        a: "Yes. Our onboarding process is designed for takeovers — 30–60 days of discovery, documentation, and shadowing before we assume operational responsibility.",
      },
      {
        q: "Do you offer 24×7 coverage?",
        a: "Yes, via our NOC team. Coverage tiers range from business-hours + on-call to full 24×7×365 with defined response times.",
      },
    ],
  },
  {
    slug: "talent-acquisition",
    name: "Talent Acquisition",
    short: "RPO and embedded recruiters for enterprise hiring.",
    description:
      "Run your talent function as a service. Embedded recruiters, structured pipelines, and weekly executive dashboards.",
    bullets: [
      "RPO engagements",
      "Embedded TA pods",
      "Diversity hiring",
      "Hiring analytics",
    ],
    icon: "search",
    category: "Talent",
    overview: [
      "RPO (Recruitment Process Outsourcing) is the right answer when hiring becomes a strategic function, not a set of one-off searches. We embed recruiters into your business, adopt your ATS and employer brand, and run your entire talent function against defined KPIs.",
      "Every engagement includes weekly ops dashboards, monthly hiring reviews, and a named account lead who reports to your Head of People or CHRO.",
    ],
    whatWeDeliver: [
      "Embedded recruiters operating as extensions of your team",
      "End-to-end hiring — sourcing, screening, scheduling, offer",
      "Weekly funnel metrics and pipeline health dashboards",
      "Structured interview kits, scorecards, and calibration sessions",
      "Diversity hiring frameworks with measurable targets",
    ],
    howWeWork: [
      {
        title: "Baseline & design",
        body: "Audit current hiring metrics, tooling, and process. Design a target operating model with clear KPIs.",
      },
      {
        title: "Team ramp-up",
        body: "Deploy embedded recruiters — typically 1 recruiter per 6–10 concurrent open roles. Onboard onto your ATS and playbooks.",
      },
      {
        title: "Steady-state hiring",
        body: "Run the funnel end-to-end. Weekly stand-ups with your HRBP, monthly reviews with leadership.",
      },
      {
        title: "Quarterly optimisation",
        body: "Every quarter we review metrics, sourcing channels, and interview processes and propose improvements.",
      },
    ],
    whoItsFor: [
      "Companies with 30+ open roles that a single in-house recruiter can't cover",
      "Enterprises building a new India org from scratch",
      "Talent leaders who want data-driven hiring but don't have the analytics team",
      "Businesses under hiring freeze relief — need a fast, elastic team",
    ],
    engagement: {
      model: "Monthly RPO retainer, scoped by hiring plan",
      kickoff: "3–4 weeks",
      pricing: "Per-recruiter monthly + per-hire success fee (optional)",
      sla: "Filled roles vs. plan · time-to-hire vs. baseline",
    },
    faqs: [
      {
        q: "Do the recruiters use our ATS?",
        a: "Yes. We operate on your systems and under your employer brand. Candidates never know they're speaking to an external firm.",
      },
      {
        q: "What happens if hiring slows down?",
        a: "The engagement flexes with your plan. Team size is reviewed quarterly and adjusted based on the rolling hiring forecast.",
      },
      {
        q: "Can you handle niche or leadership hires alongside volume?",
        a: "Yes — we blend a leadership specialist into the pod for confidential VP+ searches without disrupting the volume workflow.",
      },
    ],
  },
  {
    slug: "workforce-management",
    name: "Workforce Management",
    short: "Onboarding, payroll, compliance — fully managed.",
    description:
      "We handle the people, paperwork and policy. Stay focused on your business while we keep the workforce running like clockwork.",
    bullets: [
      "Onboarding & exits",
      "Statutory compliance",
      "Payroll & benefits",
      "HR helpdesk",
    ],
    icon: "shield",
    category: "Talent",
    overview: [
      "Workforce Management is the operational HR spine that most companies never want to build in-house. We take on onboarding, payroll, statutory compliance, benefits administration, and the day-to-day HR helpdesk — with full audit trails and zero-surprise execution.",
      "It's the layer that lets a 30-person team feel like a 300-person operation from the employee's perspective — because the process is that tight.",
    ],
    whatWeDeliver: [
      "New-joiner onboarding — offer letter to Day 1 in ≤ 5 days",
      "Monthly payroll processing with statutory deductions",
      "PF, ESIC, PT, TDS, gratuity — filed and reconciled monthly",
      "Group Mediclaim and benefits administration",
      "HR helpdesk covering employees during business hours",
      "Exit management with F&F, relieving letters, PF withdrawal support",
    ],
    howWeWork: [
      {
        title: "Baseline setup",
        body: "We map your policies, workflows, and current tooling. Any gaps in policy documentation are closed in weeks 1–4.",
      },
      {
        title: "Migration",
        body: "Existing employee data, active payroll, and benefits are migrated onto our operational platform with parallel-run cover.",
      },
      {
        title: "Steady-state operations",
        body: "Monthly payroll cycles, statutory filings, benefits admin — all handled. Monthly ops reports to your CHRO.",
      },
      {
        title: "Annual reviews",
        body: "Policy refresh, benefits benchmarking, and compliance calendar for the year ahead.",
      },
    ],
    whoItsFor: [
      "Companies with 20–500 employees where HR is a founder's part-time job",
      "Global companies establishing an India presence",
      "Businesses tired of juggling multiple vendors for payroll, compliance, benefits",
      "Teams needing a real HR helpdesk without hiring a full ops team",
    ],
    engagement: {
      model: "Per-employee per-month, all-inclusive",
      kickoff: "3–4 weeks",
      pricing: "Transparent per-head monthly fee",
      sla: "100% payroll accuracy · 100% statutory compliance",
    },
    faqs: [
      {
        q: "Do you handle multi-state statutory compliance?",
        a: "Yes. We're set up for pan-India operations with state-specific compliance handled centrally.",
      },
      {
        q: "What HRIS or payroll platform do you use?",
        a: "We use an in-house workflow layer over standard payroll platforms — clients can integrate with their preferred HRIS if desired.",
      },
      {
        q: "What happens on the last working day for exits?",
        a: "We handle F&F calculations, statutory clearances, PF/gratuity releases, relieving letters, and any post-exit correspondence.",
      },
    ],
  },
  {
    slug: "corporate-hiring",
    name: "Corporate Hiring",
    short: "Specialist hiring for senior and leadership roles.",
    description:
      "Curated executive search for VP, Director and CXO-level mandates. Confidential, calibrated, and globally networked.",
    bullets: [
      "Executive search",
      "Leadership mapping",
      "Confidential mandates",
      "Global talent pools",
    ],
    icon: "briefcase",
    category: "Talent",
    overview: [
      "Corporate Hiring is our senior executive search practice — CXO, VP, Director-level mandates where confidentiality, calibration, and network reach matter more than volume.",
      "Every mandate is owned by a senior partner. Search discipline is retained-style: mapping, off-market outreach, and structured assessment. We aim to present 4–6 truly-qualified candidates, not 25 CVs.",
    ],
    whatWeDeliver: [
      "Comprehensive talent map of the target function/market",
      "Off-market outreach to passive candidates",
      "Structured leadership assessments with behavioural interviews",
      "Reference checks and back-channel due diligence",
      "Offer negotiation and 90-day onboarding support",
    ],
    howWeWork: [
      {
        title: "Search kick-off",
        body: "Deep-dive with the CEO / board on the role, success profile, competitive landscape. We agree on target companies, functions, geographies.",
      },
      {
        title: "Talent mapping",
        body: "Full map of the target market — org charts, tenure, motivation signals. Delivered as a research report.",
      },
      {
        title: "Approach & assess",
        body: "Structured outreach to 40–80 mapped candidates. Assessments, reference calls, and leadership interviews narrow to 4–6.",
      },
      {
        title: "Presentation & close",
        body: "Detailed candidate dossiers, coordinated interviews, offer negotiation, and 90-day post-joining check-ins.",
      },
    ],
    whoItsFor: [
      "Boards recruiting for CEO / CFO / CTO / CHRO positions",
      "PE-backed companies filling senior mandates post-investment",
      "Growth-stage founders hiring their first outside leader",
      "Confidential replacements where discretion is non-negotiable",
    ],
    engagement: {
      model: "Retained search · 3-payment structure",
      kickoff: "≤ 2 weeks",
      pricing: "Fixed retainer based on role level and complexity",
      sla: "First presentation ≤ 6 weeks · 90-day guarantee",
    },
    faqs: [
      {
        q: "How is this different from your HR Recruitment practice?",
        a: "Corporate Hiring is retained executive search — dedicated senior partner, exhaustive mapping, off-market outreach, and multi-stage assessment. HR Recruitment is contingent, volume-friendly, and focused on individual contributor to mid-management roles.",
      },
      {
        q: "Do you handle board-level and CXO searches?",
        a: "Yes — this is our primary focus. We work directly with boards, PE sponsors, and CEOs on their most sensitive senior mandates.",
      },
      {
        q: "What's the 90-day guarantee?",
        a: "If a placed executive leaves or is terminated for cause within 90 days of joining, we redo the search at no fee.",
      },
    ],
  },
];

export const serviceCategories = [
  { id: "Talent", label: "Talent & Recruitment" },
  { id: "Technology", label: "Technology & Software" },
  { id: "Strategy", label: "Strategy & Outsourcing" },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

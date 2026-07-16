export type Job = {
  id: string;
  title: string;
  company: string;
  department:
    | "Engineering"
    | "Data & AI"
    | "Product"
    | "People"
    | "Sales"
    | "Operations"
    | "Cloud & DevOps"
    | "Cybersecurity";
  location: string;
  remote: "On-site" | "Hybrid" | "Remote";
  type: "Full-time" | "Contract" | "Contract-to-Hire";
  experience: string;
  salaryRange: string;
  skills: string[];
  posted: string;
  featured?: boolean;
  urgent?: boolean;

  /** 2–3 short paragraphs describing the role, team, and product context */
  description: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatYouGet: string[];
  /** Short outline of the interview loop */
  process: string[];
};

const commonWhatYouGet = [
  "Direct recruiter and hiring-manager access — no black-hole applications",
  "Structured, timely feedback after every stage",
  "Honest guidance on compensation, notice period, and market",
  "Onboarding support in the first 30 days after joining",
];

export const jobs: Job[] = [
  {
    id: "LT-2026-001",
    title: "Senior Java Backend Engineer",
    company: "BFSI Client (Confidential)",
    department: "Engineering",
    location: "Hyderabad",
    remote: "Hybrid",
    type: "Full-time",
    experience: "6 – 10 yrs",
    salaryRange: "₹28 – 42 LPA",
    skills: ["Java 17", "Spring Boot", "Kafka", "AWS", "Microservices"],
    posted: "2 days ago",
    featured: true,
    urgent: true,
    description: [
      "A leading BFSI (banking, financial services & insurance) organisation is scaling its core-services platform. You'll join a mature engineering group modernising monolithic services into a Kafka-driven microservices estate on AWS.",
      "This is a hands-on senior IC role — you'll design and ship production services, mentor two-three engineers, and take ownership of the reliability of the domain you lead.",
    ],
    responsibilities: [
      "Design, build and operate JVM microservices in Java 17 + Spring Boot 3.x",
      "Own event-driven flows on Apache Kafka — schema design, delivery semantics, DLQs",
      "Partner with SRE on production readiness — dashboards, alerts, SLOs",
      "Code review + mentorship for 2–3 mid-level engineers",
      "Contribute to architecture reviews and long-range technical planning",
    ],
    requirements: [
      "6+ years of production Java experience with recent Spring Boot",
      "Strong Kafka fundamentals (partitioning, consumer groups, exactly-once)",
      "AWS at working depth — ECS/EKS, RDS, MSK, CloudWatch",
      "Comfort with distributed systems trade-offs (CAP, consistency, back-pressure)",
      "Experience in BFSI, payments, or a similarly regulated domain",
    ],
    niceToHave: [
      "Kubernetes / Istio",
      "Kotlin exposure",
      "Prior experience in scale-up modernisation programmes",
      "Contributions to open-source Java libraries",
    ],
    whatYouGet: [
      "Compensation aligned with senior-IC market rates in Hyderabad",
      "Hybrid schedule (3 days in Gachibowli, 2 remote)",
      "Structured L&D budget + conference support",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Technical screen — coding + system design (75 min)",
      "Hiring manager conversation (45 min)",
      "On-site: architecture, bar-raiser, cross-functional (half day)",
    ],
  },
  {
    id: "LT-2026-002",
    title: "Lead Data Scientist — GenAI",
    company: "Global Retail Major",
    department: "Data & AI",
    location: "Bengaluru",
    remote: "Hybrid",
    type: "Full-time",
    experience: "7 – 12 yrs",
    salaryRange: "₹40 – 60 LPA",
    skills: ["LLMs", "PyTorch", "MLOps", "Python", "Vector DBs"],
    posted: "1 day ago",
    featured: true,
    description: [
      "A global retail organisation is building a GenAI capability that spans merchandising, marketing, and customer operations. This role leads the platform side — the models, evaluation harness, and MLOps that everything else builds on.",
      "You will define the roadmap alongside the VP of Data and manage a growing team of applied scientists and ML engineers.",
    ],
    responsibilities: [
      "Own the LLM platform strategy — model selection, fine-tuning, evaluation",
      "Build and maintain the shared prompt/agent framework used across business teams",
      "Lead a team of 4–6 applied scientists + ML engineers",
      "Set the evaluation harness — offline + online, safety + performance",
      "Represent the platform in enterprise architecture reviews",
    ],
    requirements: [
      "7+ years in data science / ML with 2+ leading a team",
      "Deep hands-on GenAI experience — LLMs, RAG, agents, evals",
      "PyTorch fluency + production MLOps (Ray, Kubeflow, or equivalent)",
      "Vector database experience (pgvector / Pinecone / Weaviate)",
      "Track record of shipping ML systems to production",
    ],
    niceToHave: [
      "Published research or open-source ML contributions",
      "Experience in retail / e-commerce data",
      "Fine-tuning open-weight models (Llama, Mistral)",
    ],
    whatYouGet: [
      "Top-quartile compensation for GenAI leadership in Bengaluru",
      "Compute budget for research and evaluation",
      "Direct executive sponsorship and roadmap authority",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Technical + case discussion (90 min)",
      "Leadership panel (60 min)",
      "Executive conversation with VP Data (45 min)",
    ],
  },
  {
    id: "LT-2026-003",
    title: "Talent Acquisition Lead",
    company: "Logos Trinity Technologies",
    department: "People",
    location: "Visakhapatnam",
    remote: "On-site",
    type: "Full-time",
    experience: "5 – 9 yrs",
    salaryRange: "₹14 – 22 LPA",
    skills: ["Tech Hiring", "Stakeholder Mgmt", "ATS", "Headhunting"],
    posted: "3 days ago",
    featured: true,
    description: [
      "We're hiring the person who will scale our own recruitment practice. You'll own tech and non-tech hiring across client mandates and internal roles, mentor a small pod of recruiters, and shape how we work.",
      "This is a builder role — most decisions about tools, playbooks, and process are still yours to make.",
    ],
    responsibilities: [
      "Lead 6–10 concurrent hiring mandates across engineering, data, and product",
      "Mentor 2–3 recruiters and grow the team as pipeline grows",
      "Own our internal ATS and hiring analytics dashboards",
      "Design interview loops, scorecards, and calibration processes",
      "Represent us with senior client stakeholders in weekly ops reviews",
    ],
    requirements: [
      "5+ years in tech recruitment (agency, RPO, or in-house)",
      "Demonstrated ability to close senior engineers in a competitive market",
      "Comfort with data — funnel metrics, source-of-hire, time-to-hire",
      "Strong written communication for stakeholder updates",
      "Based in or willing to relocate to Visakhapatnam",
    ],
    niceToHave: [
      "Prior experience in an RPO or embedded model",
      "Exposure to Ashby, Greenhouse, or similar modern ATSs",
      "Executive-search or leadership-hiring experience",
    ],
    whatYouGet: [
      "Founding-team energy with the safety of an established client book",
      "Meaningful ESOPs after year one",
      "Direct exposure to CXO-level clients from day one",
      ...commonWhatYouGet,
    ],
    process: [
      "Founder screen (30 min)",
      "Case study — a live mandate discussion (60 min)",
      "Stakeholder simulation + culture (45 min)",
    ],
  },
  {
    id: "LT-2026-004",
    title: "Cloud DevOps Architect",
    company: "Enterprise SaaS",
    department: "Cloud & DevOps",
    location: "Pune",
    remote: "Remote",
    type: "Contract-to-Hire",
    experience: "8 – 12 yrs",
    salaryRange: "₹35 – 55 LPA",
    skills: ["AWS", "Terraform", "Kubernetes", "GitOps", "Observability"],
    posted: "4 days ago",
    featured: true,
    description: [
      "An enterprise SaaS platform is investing in platform engineering as a strategic function. You'll be the architect setting the direction for infrastructure-as-code, GitOps, and multi-region reliability.",
      "12-month contract-to-hire — with a strong preference to convert to full-time at month 9.",
    ],
    responsibilities: [
      "Own AWS multi-region architecture and cost model",
      "Set the IaC standard (Terraform + custom modules) and GitOps flow",
      "Design Kubernetes multi-tenancy, secrets, and admission control",
      "Lead observability stack — metrics, logs, traces, SLO dashboards",
      "Coach 6–8 SREs and platform engineers",
    ],
    requirements: [
      "8+ years across DevOps / SRE / platform engineering",
      "Deep AWS + Kubernetes production expertise",
      "Terraform at scale, module design, drift management",
      "Experience running multi-region production workloads",
      "Track record of leading platform teams",
    ],
    niceToHave: [
      "CNCF project contributions",
      "SaaS multi-tenancy patterns",
      "FinOps / cost-engineering background",
    ],
    whatYouGet: [
      "Fully remote, India timezone",
      "Full architectural mandate — no legacy politics",
      "Conversion to permanent CTC at month 9 if both parties agree",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "System design + coding (90 min)",
      "Founder / VP Eng conversation (60 min)",
    ],
  },
  {
    id: "LT-2026-005",
    title: "Senior React Engineer",
    company: "FinTech Unicorn",
    department: "Engineering",
    location: "Bengaluru",
    remote: "Hybrid",
    type: "Full-time",
    experience: "4 – 8 yrs",
    salaryRange: "₹22 – 38 LPA",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Design Systems"],
    posted: "5 days ago",
    featured: true,
    description: [
      "Join the platform team of a well-known Indian FinTech. You'll work on the customer-facing app used by millions, building performant flows in React + Next.js and contributing to the internal design system.",
      "This is a senior IC role focused on frontend craft — accessibility, performance, and design-engineering collaboration.",
    ],
    responsibilities: [
      "Build user-facing flows in Next.js with strict TypeScript",
      "Own components in the internal design system — API, docs, examples",
      "Work closely with designers on prototypes → production",
      "Optimise Core Web Vitals — LCP, INP, CLS",
      "Contribute to frontend architecture and code standards",
    ],
    requirements: [
      "4+ years shipping production React with TypeScript",
      "Deep Next.js knowledge (App Router, RSC, caching)",
      "Understanding of accessibility standards (WCAG 2.1)",
      "Track record of shipping polished, performant UI",
      "Strong sense of design collaboration",
    ],
    niceToHave: [
      "Contribution to a design system used across products",
      "Experience with GraphQL clients (Apollo, urql)",
      "Interest in animation (Framer Motion / GSAP)",
    ],
    whatYouGet: [
      "Compensation in the top quartile for Bengaluru senior FE",
      "Hybrid schedule (3 days in Koramangala)",
      "Regular design-engineering collaboration time",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Take-home component build (asynchronous, 4 hrs)",
      "Pairing interview + system design (75 min)",
      "Culture + hiring manager (60 min)",
    ],
  },
  {
    id: "LT-2026-006",
    title: "Application Security Engineer",
    company: "Confidential — Govt. Sector",
    department: "Cybersecurity",
    location: "Chennai",
    remote: "On-site",
    type: "Full-time",
    experience: "5 – 9 yrs",
    salaryRange: "₹24 – 36 LPA",
    skills: ["OWASP", "SAST/DAST", "Threat Modelling", "Cloud Security"],
    posted: "1 week ago",
    description: [
      "A government-adjacent programme is standing up its application-security function. You'll define secure-SDLC practices, run threat modelling exercises, and partner with product teams to close vulnerabilities.",
      "On-site role in Chennai with strong process ownership and executive access.",
    ],
    responsibilities: [
      "Run threat-modelling sessions with product and engineering teams",
      "Own SAST/DAST tooling and triage flow",
      "Lead security reviews of new features + architecture proposals",
      "Coordinate penetration tests and manage remediation",
      "Report security posture to the CISO monthly",
    ],
    requirements: [
      "5+ years in application security or product security engineering",
      "Fluency with OWASP Top 10 and modern web/API attack patterns",
      "Hands-on with SAST/DAST tools (Snyk, Semgrep, Burp)",
      "Cloud security fundamentals (AWS or Azure)",
      "Strong written communication for security findings",
    ],
    niceToHave: [
      "CISSP / OSCP",
      "Experience in regulated / government sectors",
      "Prior threat-modelling facilitation experience",
    ],
    whatYouGet: [
      "Central role in a strategically important programme",
      "Direct CISO exposure",
      "Structured career track — Senior → Staff → Principal",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Technical + scenario (75 min)",
      "CISO conversation (45 min)",
    ],
  },
  {
    id: "LT-2026-007",
    title: "Product Manager — Enterprise",
    company: "B2B SaaS",
    department: "Product",
    location: "Bengaluru / Visakhapatnam",
    remote: "Hybrid",
    type: "Full-time",
    experience: "5 – 8 yrs",
    salaryRange: "₹28 – 42 LPA",
    skills: ["Roadmapping", "B2B SaaS", "Discovery", "Analytics"],
    posted: "6 days ago",
    description: [
      "A growth-stage B2B SaaS company is expanding its enterprise product surface. You'll own a strategic module used by admin and IT personas across large customers.",
      "Hybrid role, based in either Bengaluru or Visakhapatnam. You'll partner with a senior tech lead and a dedicated designer.",
    ],
    responsibilities: [
      "Own the module roadmap end-to-end — from discovery to launch",
      "Run customer discovery — 4–6 conversations per month minimum",
      "Write concise PRDs and outcome specs",
      "Partner with engineering and design in daily standups",
      "Represent the product in customer QBRs",
    ],
    requirements: [
      "5+ years of product management in B2B SaaS",
      "Prior experience owning enterprise / admin-facing product surfaces",
      "Comfort with SQL and product analytics tools (Mixpanel / Amplitude)",
      "Track record of shipping — with metrics to prove it",
      "Excellent written communication",
    ],
    niceToHave: [
      "Prior experience in workflow / IT / dev-tools product spaces",
      "Managed pricing and packaging decisions",
      "Speaking / writing publicly about product craft",
    ],
    whatYouGet: [
      "Genuine ownership — no proxy product management",
      "Regular time with enterprise customers",
      "Executive sponsorship on strategic bets",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Product case study — take-home + review (90 min)",
      "Cross-functional loop — engineering, design, sales (2 hrs total)",
    ],
  },
  {
    id: "LT-2026-008",
    title: "Enterprise Sales Manager",
    company: "Logos Trinity Technologies",
    department: "Sales",
    location: "Mumbai",
    remote: "Hybrid",
    type: "Full-time",
    experience: "6 – 10 yrs",
    salaryRange: "₹18 – 30 LPA + variable",
    skills: ["Enterprise Sales", "Staffing", "RFP", "C-level Engagement"],
    posted: "2 days ago",
    description: [
      "We're hiring the person who will own our Mumbai enterprise pipeline — BFSI, retail, and enterprise-technology accounts. You'll lead the full sales cycle from prospecting to close, working alongside the founders.",
      "It's a hunter role for the first year, with a clear path to building and leading a team once the book is established.",
    ],
    responsibilities: [
      "Build and manage a pipeline of 40–60 target enterprise accounts",
      "Lead RFP responses and pricing discussions",
      "Own C-level relationships across your book",
      "Coordinate with delivery leads on scoping and pilots",
      "Feed the marketing team with sharp customer intelligence",
    ],
    requirements: [
      "6+ years in enterprise services sales (staffing, IT services, or consulting)",
      "Existing relationships in the Mumbai enterprise market",
      "Track record of closing ₹5cr+ deals",
      "Comfort with structured account planning and pipeline hygiene",
      "Excellent written English",
    ],
    niceToHave: [
      "Prior BFSI or retail vertical experience",
      "Team-leadership experience",
      "Direct experience with modern staffing pricing models",
    ],
    whatYouGet: [
      "Uncapped variable + accelerators over quota",
      "Full P&L visibility on your book",
      "Path to Regional Head within 18–24 months",
      ...commonWhatYouGet,
    ],
    process: [
      "Founder screen (30 min)",
      "Deal review + written case (60 min + take-home)",
      "Executive conversation (45 min)",
    ],
  },
  {
    id: "LT-2026-009",
    title: "Site Reliability Engineer (SRE)",
    company: "Healthcare Platform",
    department: "Cloud & DevOps",
    location: "Hyderabad",
    remote: "Remote",
    type: "Contract",
    experience: "5 – 9 yrs",
    salaryRange: "₹26 – 40 LPA",
    skills: ["SLOs", "Prometheus", "GCP", "Incident Mgmt"],
    posted: "3 days ago",
    description: [
      "A healthcare platform serving hospitals across India is scaling its SRE function. 12-month contract to build the SLO framework, incident-management practice, and observability stack.",
      "Fully remote, India timezone. Ideal for a senior SRE who wants a focused, defined engagement.",
    ],
    responsibilities: [
      "Define SLIs and SLOs across critical services",
      "Own the Prometheus + Grafana stack, including alert quality",
      "Lead incident-management drills and postmortem culture",
      "Coach engineering teams on production ownership",
      "Ship internal tooling for runbooks and on-call ergonomics",
    ],
    requirements: [
      "5+ years in SRE / production engineering",
      "GCP fluency (GKE, Cloud SQL, Pub/Sub)",
      "Deep Prometheus experience — recording rules, alert design",
      "Incident-management leadership in past roles",
      "Postmortem writing skills",
    ],
    niceToHave: [
      "Healthcare / HIPAA background",
      "Cloud Native landscape contributor",
      "Chaos-engineering experience",
    ],
    whatYouGet: [
      "Fully remote, focused mandate",
      "Direct working relationship with VP Engineering",
      "Extension option based on business need at month 10",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "SRE technical + system design (90 min)",
      "Culture + VPE (45 min)",
    ],
  },
  {
    id: "LT-2026-010",
    title: "Operations Lead — Workforce Mgmt",
    company: "Logos Trinity Technologies",
    department: "Operations",
    location: "Visakhapatnam",
    remote: "On-site",
    type: "Full-time",
    experience: "6 – 10 yrs",
    salaryRange: "₹12 – 18 LPA",
    skills: ["WFM", "Payroll", "Compliance", "Stakeholder Mgmt"],
    posted: "1 day ago",
    description: [
      "You'll own our Workforce Management operations — the layer that runs onboarding, payroll, statutory compliance, and HR helpdesk for our staffed and outsourced workforce.",
      "This is a leadership role. You'll build the team, own the SLAs, and be the point of accountability for our people-operations service line.",
    ],
    responsibilities: [
      "Own end-to-end WFM operations across all active engagements",
      "Manage a team of 6–10 operations executives and specialists",
      "Ensure 100% statutory compliance across PF, ESIC, PT, TDS, gratuity",
      "Own vendor relationships — payroll, insurance, benefits",
      "Present operations metrics in monthly client and internal reviews",
    ],
    requirements: [
      "6+ years in HR / people-operations, ideally in staffing or RPO",
      "Deep hands-on knowledge of Indian labour law and compliance",
      "Track record of managing a 5+ person operations team",
      "Vendor management experience",
      "Based in or willing to relocate to Visakhapatnam",
    ],
    niceToHave: [
      "Prior work with startups scaling headcount rapidly",
      "Automation experience with modern payroll platforms",
      "Six Sigma or process-improvement certification",
    ],
    whatYouGet: [
      "Function-head role reporting to the Managing Partner",
      "Full mandate to redesign the ops stack",
      "Meaningful ESOPs after year one",
      ...commonWhatYouGet,
    ],
    process: [
      "Founder screen (30 min)",
      "Ops deep-dive + case (75 min)",
      "Cross-team simulation (45 min)",
    ],
  },
  {
    id: "LT-2026-011",
    title: "ML Platform Engineer",
    company: "AI Startup (Series B)",
    department: "Data & AI",
    location: "Bengaluru",
    remote: "Hybrid",
    type: "Full-time",
    experience: "4 – 7 yrs",
    salaryRange: "₹30 – 50 LPA",
    skills: ["MLOps", "Ray", "Kubernetes", "Feature Stores"],
    posted: "4 days ago",
    description: [
      "A Series-B AI startup is investing heavily in ML infrastructure. You'll be one of the founding ML platform engineers, building the training and inference platform that the entire research team relies on.",
      "Hybrid in Koramangala. High bar, high autonomy, high learning velocity.",
    ],
    responsibilities: [
      "Design and operate the training platform (Ray on Kubernetes)",
      "Own feature store, model registry, and lineage tooling",
      "Ship inference infrastructure with hard latency guarantees",
      "Partner closely with research on new model architectures",
      "Set the internal MLOps standard",
    ],
    requirements: [
      "4+ years in ML engineering / MLOps / platform",
      "Strong Kubernetes production experience",
      "Ray, Kubeflow, or similar distributed-training experience",
      "Feature-store patterns (Feast or equivalent)",
      "Python fluency, comfort with C++ / Rust for hot paths a plus",
    ],
    niceToHave: [
      "Contributions to Ray / KubeFlow / MLflow",
      "Experience with LLM training or fine-tuning at scale",
      "GPU cluster operations",
    ],
    whatYouGet: [
      "Meaningful equity in a well-funded AI company",
      "Direct impact on research productivity",
      "Access to substantial GPU compute for internal projects",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Take-home MLOps design (asynchronous)",
      "Pairing + system design (90 min)",
      "Team + founder (60 min)",
    ],
  },
  {
    id: "LT-2026-012",
    title: "UX Designer — Enterprise SaaS",
    company: "Logistics Tech",
    department: "Product",
    location: "Remote (India)",
    remote: "Remote",
    type: "Full-time",
    experience: "4 – 7 yrs",
    salaryRange: "₹18 – 28 LPA",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    posted: "1 week ago",
    description: [
      "A logistics-tech company serving 3PLs across South and Southeast Asia is expanding its design team. You'll own workflow design for their operations product used by warehouse and dispatch teams daily.",
      "Fully remote (India timezone). You'll collaborate with a small, senior design team and have direct exposure to end users.",
    ],
    responsibilities: [
      "Own end-to-end design for 1–2 workflow modules",
      "Run weekly user-research calls with warehouse operators",
      "Contribute to the shared design system",
      "Prototype flows in Figma with realistic data",
      "Partner tightly with a dedicated PM and eng team",
    ],
    requirements: [
      "4+ years designing enterprise SaaS or workflow tools",
      "Strong Figma craft — components, variants, tokens",
      "Comfort running your own user research",
      "Prior experience contributing to a design system",
      "Portfolio showing information-dense enterprise UI",
    ],
    niceToHave: [
      "Logistics / operations domain background",
      "Prototyping with code (React) or advanced Figma prototypes",
      "Design leadership experience",
    ],
    whatYouGet: [
      "Fully remote, India timezone",
      "Direct customer contact — you design what users actually asked for",
      "Focused role, small team, no design-by-committee",
      ...commonWhatYouGet,
    ],
    process: [
      "Recruiter screen (30 min)",
      "Portfolio walk-through (60 min)",
      "Design exercise + review (2 hrs total)",
      "Team fit + founder (45 min)",
    ],
  },
];

export const departments = [
  "All",
  "Engineering",
  "Data & AI",
  "Cloud & DevOps",
  "Product",
  "Cybersecurity",
  "People",
  "Sales",
  "Operations",
] as const;

export const locations = [
  "All locations",
  "Visakhapatnam",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Chennai",
  "Remote",
] as const;

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

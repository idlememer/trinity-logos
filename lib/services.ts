export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string;
  category: "Talent" | "Technology" | "Strategy";
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
  },
  {
    slug: "consulting",
    name: "Consulting",
    short: "Strategic advisory for talent, technology and transformation.",
    description:
      "Org design, workforce planning, digital transformation roadmaps. We bring senior consultants who have scaled enterprises across India, GCC and APAC.",
    bullets: [
      "Org & workforce design",
      "Transformation strategy",
      "M&A talent diligence",
      "Operating model redesign",
    ],
    icon: "compass",
    category: "Strategy",
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
  },
  {
    slug: "it-solutions",
    name: "IT Solutions",
    short: "Infrastructure, integration, and managed IT.",
    description:
      "End-to-end IT — from cloud migration and ERP rollouts to network operations and 24×7 support.",
    bullets: [
      "Cloud migration",
      "ERP & CRM",
      "Network & security",
      "24×7 NOC",
    ],
    icon: "server",
    category: "Technology",
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
  },
];

export const serviceCategories = [
  { id: "Talent", label: "Talent & Recruitment" },
  { id: "Technology", label: "Technology & Software" },
  { id: "Strategy", label: "Strategy & Outsourcing" },
] as const;

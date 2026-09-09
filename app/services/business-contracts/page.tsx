import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { company } from "@/lib/company";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Building,
  Cpu,
  Shield,
} from "@/lib/icons";

export const metadata: Metadata = {
  title: "Business Establishment Contracts — turnkey setup for every sector",
  description:
    "End-to-end contracts for restaurants, software companies, hospitals, corporate offices, retail and manufacturing. Interiors, equipment, systems and licences — every aspect handled by one accountable partner.",
};

const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
  "Enquiry — Business Establishment Contract"
)}&body=${encodeURIComponent(
  [
    "Hello Logos Trinity team,",
    "",
    "I'd like to discuss a turnkey establishment contract.",
    "",
    "Sector (restaurant / software / hospital / corporate / retail / manufacturing / other): ",
    "Location(s): ",
    "Expected go-live: ",
    "Approximate size (sq ft / seats / beds): ",
    "Notes: ",
    "",
    "— sent from logostrinitytechnologies.com/services/business-contracts",
  ].join("\n")
)}`;

/* ------------------------------------------------------------------ */
/* Inline sector-specific icons                                       */
/* ------------------------------------------------------------------ */

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 22,
  height: 22,
};

const ChefIcon = () => (
  <svg {...iconBase}>
    <path d="M7 10a4 4 0 1 1 3-6 4 4 0 0 1 4 0 4 4 0 1 1 3 6v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6z" />
    <path d="M7 14h10" />
  </svg>
);

const CodeIcon = () => (
  <svg {...iconBase}>
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
  </svg>
);

const CrossIcon = () => (
  <svg {...iconBase}>
    <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg {...iconBase}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const BagIcon = () => (
  <svg {...iconBase}>
    <path d="M6 3h12l2 5H4l2-5z" />
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <path d="M9 12a3 3 0 0 0 6 0" />
  </svg>
);

const FactoryIcon = () => (
  <svg {...iconBase}>
    <path d="M3 21V11l6 4V11l6 4V7l6 4v10z" />
    <path d="M9 21v-4M15 21v-4" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

type Group = { label: string; items: string[] };
type Sector = {
  slug: string;
  name: string;
  tagline: string;
  Icon: () => JSX.Element;
  groups: Group[];
};

const pillars = [
  {
    Icon: Building,
    title: "Physical setup",
    body:
      "Interior fit-out, furniture, fixtures, equipment and signage — sourced, delivered, installed and signed off.",
  },
  {
    Icon: Cpu,
    title: "Systems & technology",
    body:
      "IT infrastructure, sector-specific software, integrations, security and monitoring — day-one ready.",
  },
  {
    Icon: Shield,
    title: "Licensing & compliance",
    body:
      "Every licence, registration and statutory filing your sector requires — completed in your name.",
  },
];

const sectors: Sector[] = [
  {
    slug: "restaurants",
    name: "Restaurants & F&B",
    tagline: "From vacant lot to soft launch.",
    Icon: ChefIcon,
    groups: [
      {
        label: "Physical",
        items: [
          "Interior design & full fit-out",
          "Commercial kitchen equipment & refrigeration",
          "Dining furniture, décor & signage",
          "POS terminals & bar counters",
        ],
      },
      {
        label: "Systems",
        items: [
          "POS + inventory + billing software",
          "Reservation & delivery-platform integrations",
          "Kitchen display systems & recipe control",
          "CCTV, alarms & Wi-Fi backbone",
        ],
      },
      {
        label: "Compliance",
        items: [
          "FSSAI food licence",
          "GST + local trade permits",
          "Fire safety NOC, health permits",
          "Labour law, PF, ESIC compliance",
        ],
      },
    ],
  },
  {
    slug: "software",
    name: "Software & IT Companies",
    tagline: "From empty floor to shipping product.",
    Icon: CodeIcon,
    groups: [
      {
        label: "Physical",
        items: [
          "Office fit-out (workstations, war rooms, breakout)",
          "Ergonomic furniture & meeting rooms",
          "Secure server / networking room",
          "Cafeteria, reception, signage",
        ],
      },
      {
        label: "Systems",
        items: [
          "Cloud accounts (AWS / GCP / Azure) provisioned",
          "CI/CD, monitoring, identity & SSO",
          "Endpoint management, VPN, MDM",
          "HRIS, payroll, project tooling",
        ],
      },
      {
        label: "Compliance",
        items: [
          "Company + STPI / SEZ registrations",
          "GST, TDS, statutory filings",
          "SOC 2 / ISO 27001 preparation",
          "Data protection & GDPR readiness",
        ],
      },
    ],
  },
  {
    slug: "hospitals",
    name: "Hospitals & Healthcare",
    tagline: "From shell building to patient-ready.",
    Icon: CrossIcon,
    groups: [
      {
        label: "Physical",
        items: [
          "OT, ICU, ward & OPD fit-out",
          "Medical equipment & imaging suites",
          "Laboratory instruments",
          "Biomedical waste-handling infrastructure",
        ],
      },
      {
        label: "Systems",
        items: [
          "HIS / EMR / HMS deployment",
          "Billing, appointments, e-pharmacy",
          "PACS for imaging, LIS for lab",
          "Telehealth & patient-portal setup",
        ],
      },
      {
        label: "Compliance",
        items: [
          "NABH / NABL accreditation prep",
          "Drug licence, biomedical waste NOC",
          "Radiation safety (AERB)",
          "Fire safety NOC, labour compliance",
        ],
      },
    ],
  },
  {
    slug: "corporates",
    name: "Corporate Offices",
    tagline: "From bare shell to a running office.",
    Icon: BriefcaseIcon,
    groups: [
      {
        label: "Physical",
        items: [
          "Interior fit-out, workstations, meeting rooms",
          "Reception, cafeteria & breakout areas",
          "AV, signage & branding",
          "Facility management setup",
        ],
      },
      {
        label: "Systems",
        items: [
          "Networking, Wi-Fi, VoIP, access control",
          "HRIS, payroll, ERP, ticketing",
          "Endpoint management, MDM, VPN",
          "Video-conferencing & AV integration",
        ],
      },
      {
        label: "Compliance",
        items: [
          "Business & GST registrations",
          "Shops & Establishments Act",
          "Labour law, PF, ESIC, PT filings",
          "Data-protection policies",
        ],
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail & Multi-outlet",
    tagline: "From site survey to opening day.",
    Icon: BagIcon,
    groups: [
      {
        label: "Physical",
        items: [
          "Store fit-out, fixtures, display units",
          "POS terminals & payment devices",
          "Storage, back-of-house, security",
          "Signage, branding, window design",
        ],
      },
      {
        label: "Systems",
        items: [
          "POS + inventory + billing",
          "E-commerce & marketplace integration",
          "CRM, loyalty, gift-card platforms",
          "CCTV, alarms, footfall analytics",
        ],
      },
      {
        label: "Compliance",
        items: [
          "Trade licence, shop & establishment",
          "State-wise GST registrations",
          "Weights & measures / consumer laws",
          "Labour & wage compliance",
        ],
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "From land allotment to first shipment.",
    Icon: FactoryIcon,
    groups: [
      {
        label: "Physical",
        items: [
          "Plant layout & civil coordination",
          "Machinery procurement & installation",
          "Safety, PPE, first-response setup",
          "Warehousing & material handling",
        ],
      },
      {
        label: "Systems",
        items: [
          "ERP + MES + quality-management systems",
          "SCADA / IoT integration",
          "HRIS, payroll, time & attendance",
          "Supplier & vendor portals",
        ],
      },
      {
        label: "Compliance",
        items: [
          "Factory licence, pollution control NOC",
          "Fire & safety, boiler / electrical approvals",
          "Contract Labour (R&A) Act",
          "Statutory PF / ESIC / bonus / gratuity",
        ],
      },
    ],
  },
];

const phases = [
  {
    n: "01",
    title: "Discovery & scoping",
    body:
      "On-site walk-through + stakeholder interviews. We map the sector-specific requirement stack and produce a written scope with a clear cost model.",
  },
  {
    n: "02",
    title: "Master service agreement",
    body:
      "One MSA covering every pillar, with pricing, milestones, SLAs and escalation matrices. No parallel contracts per function.",
  },
  {
    n: "03",
    title: "Mobilisation",
    body:
      "Parallel workstreams: fit-out & equipment, systems provisioning, licensing and statutory registrations. Weekly progress dashboards to the client.",
  },
  {
    n: "04",
    title: "Go-live",
    body:
      "Dry runs, snag lists, statutory sign-offs, and vendor handover. Day-1 support on-site until steady-state confirmed.",
  },
  {
    n: "05",
    title: "Steady-state operations",
    body:
      "Named delivery lead. Monthly SLA scorecards, quarterly executive readouts, continuous improvement backlog on systems and compliance.",
  },
];

const faqs = [
  {
    q: "Do we buy the equipment / furniture ourselves, or does Logos Trinity?",
    a: "Either model works. Most clients let us procure in their name — we handle supplier selection, pricing, delivery, install and warranty registration. If you have preferred vendors, we coordinate with them instead. Ownership always stays with the client.",
  },
  {
    q: "How do you price a multi-scope contract like this?",
    a: "Two components. A one-time transition fee that covers scoping, procurement management, mobilisation and licensing. A monthly managed-service fee that covers ongoing systems support, compliance filings and account leadership. Big-ticket assets (equipment, furniture, machinery) are billed at cost.",
  },
  {
    q: "Can you scope only part of it — say, compliance but not fit-out?",
    a: "Yes. The three pillars can be engaged in any combination. Many clients start with a subset (e.g. just fit-out + licensing) and expand as they see the operating rhythm work.",
  },
  {
    q: "What sectors do you not take on?",
    a: "We do not take on scopes that require an operating licence we cannot sub-contract responsibly — for example, on-premise armed security, or clinical practice on our own account. We coordinate with specialist licensed partners in those cases.",
  },
  {
    q: "How long does a typical mobilisation take?",
    a: "Restaurants: 10–14 weeks from MSA to soft launch. Corporate offices: 8–12 weeks. Software offices: 6–10 weeks. Hospitals: 20+ weeks depending on accreditation. Manufacturing: 6–18 months depending on plant complexity. We share an indicative timeline in scoping.",
  },
];

/* ------------------------------------------------------------------ */
/* Reusable UI                                                        */
/* ------------------------------------------------------------------ */

function PillarCard({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-6 ring-border transition-all hover:-translate-y-1 hover:border-navy-700/25 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03]">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700/10 text-navy-700 dark:bg-white/10 dark:text-navy-100">
        <Icon size={22} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-navy-700 dark:text-navy-200/85">
        {body}
      </p>
    </div>
  );
}

function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const { Icon } = sector;
  return (
    <article
      id={sector.slug}
      className="group relative scroll-mt-32 overflow-hidden rounded-3xl border border-navy-700/10 bg-white ring-border dark:border-white/10 dark:bg-white/[0.03]"
    >
      {/* Accent header */}
      <div className="relative overflow-hidden border-b border-navy-700/10 p-6 dark:border-white/5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-navy-700/8 blur-3xl transition-all duration-500 group-hover:bg-navy-700/20"
        />
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_10px_20px_-8px_rgba(0,56,184,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, #001C66 0%, #002C8C 50%, #0038B8 100%)",
              }}
            >
              <Icon />
            </span>
            <div>
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-navy-700 dark:text-navy-300">
                {String(index + 1).padStart(2, "0")} · Sector
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-navy-900 dark:text-white sm:text-2xl">
                {sector.name}
              </h3>
              <p className="mt-1 text-[13.5px] italic text-navy-700 dark:text-navy-200/85">
                {sector.tagline}
              </p>
            </div>
          </div>
          <a
            href={mailtoHref}
            aria-label={`Enquire about ${sector.name} contract`}
            className="hidden shrink-0 rounded-full bg-flame-500 px-3.5 py-2 text-[11.5px] font-semibold text-white transition-colors hover:bg-flame-600 sm:inline-flex"
          >
            Enquire
          </a>
        </div>
      </div>

      {/* Three groups — vertical stack with dividers */}
      <div className="divide-y divide-navy-700/10 dark:divide-white/5">
        {sector.groups.map((g) => (
          <div key={g.label} className="p-6">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-navy-700 dark:text-navy-300">
              {g.label}
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13.5px] leading-relaxed text-navy-800 dark:text-navy-100"
                >
                  <Check
                    size={13}
                    className="mt-1 shrink-0 text-navy-700 dark:text-navy-300"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile enquire */}
      <div className="border-t border-navy-700/10 p-4 dark:border-white/5 sm:hidden">
        <a
          href={mailtoHref}
          aria-label={`Enquire about ${sector.name} contract`}
          className="btn-primary w-full !py-2.5 text-sm"
        >
          Enquire about {sector.name}
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function BusinessContractsPage() {
  return (
    <>
      <PageHeader
        eyebrow="End-to-end contracts"
        title={
          <>
            One partner.{" "}
            <span className="text-gradient-blue">Every establishment.</span>
            <br />
            From scratch to steady-state.
          </>
        }
        description="Interiors, equipment, systems and licences — everything a business needs to open its doors and run, tailored to your sector. One MSA, one accountable lead, one monthly invoice."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href={mailtoHref} className="btn-primary">
            Start the conversation
            <ArrowRight size={16} />
          </a>
          <Link href="#sectors" className="btn-ghost">
            See sector solutions
          </Link>
        </div>
      </PageHeader>

      {/* Four pillars */}
      <section className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>The three pillars</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                Every establishment we hand over is built on the same three
                pillars.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-pretty leading-relaxed text-navy-700 dark:text-navy-200/85 sm:text-lg">
                The specifics change from a restaurant to a hospital to a
                software office — but every project touches these three things.
                We own all three so nothing falls between vendors.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <RevealItem key={p.title}>
                <PillarCard Icon={p.Icon} title={p.title} body={p.body} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Sector solutions */}
      <section id="sectors" className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionLabel>Sector solutions</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                What we deliver for each kind of establishment.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-pretty leading-relaxed text-navy-700 dark:text-navy-200/85 sm:text-lg">
                Pick the sector closest to your business — every card lists the
                exact physical setup, systems and compliance we take on for
                that kind of establishment.
              </p>
            </Reveal>
          </div>

          {/* Quick-jump chips */}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {sectors.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-700/15 bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-navy-800 transition-colors hover:border-navy-700/30 hover:bg-navy-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-100"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 0.05}>
                <SectorCard sector={sector} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy-700/10 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03] sm:flex-row">
              <p className="text-center text-sm text-navy-800 dark:text-navy-100 sm:text-left">
                Your sector not on the list?{" "}
                <span className="text-navy-700/70 dark:text-navy-300">
                  We build the same four-pillar scope for any commercial
                  establishment.
                </span>
              </p>
              <a href={mailtoHref} className="btn-primary text-sm">
                Tell us about it
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>How we work</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                A single delivery process, adapted to your sector.
              </h2>
            </Reveal>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <li className="relative h-full overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-700 dark:text-navy-300">
                    Step {p.n}
                  </p>
                  <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-navy-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700 dark:text-navy-200/85">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Engagement summary */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl border border-navy-700/10 bg-white p-8 ring-border dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <SectionLabel>Engagement</SectionLabel>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy-900 dark:text-white">
                    One master service agreement. One accountable lead. One
                    monthly invoice.
                  </h3>
                  <p className="mt-4 leading-relaxed text-navy-700 dark:text-navy-200/85">
                    We are the single accountability point for every function
                    inside the three pillars. Sub-contracts, vendor coordination,
                    and internal team management are handled inside our
                    engagement — never dropped on you.
                  </p>
                  <a
                    href={mailtoHref}
                    className="btn-primary mt-6 text-sm"
                  >
                    Start a conversation
                    <ArrowRight size={14} />
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
                  <DetailBox
                    label="Model"
                    value="Master service agreement · 12–36 month term"
                  />
                  <DetailBox
                    label="Time to kick-off"
                    value="≤ 4 weeks including scoping"
                  />
                  <DetailBox
                    label="Pricing"
                    value="One-time transition + monthly managed-service + assets at cost"
                  />
                  <DetailBox
                    label="SLAs"
                    value="Tiered SLAs across build-out, workforce, systems and compliance"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>Common questions</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                Everything else, answered.
              </h2>
            </Reveal>

            <div className="mt-10 divide-y divide-navy-700/10 rounded-3xl border border-navy-700/10 bg-white ring-border dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.03]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5 open:pb-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">
                      {f.q}
                    </h3>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-700 transition-transform group-open:rotate-45 dark:bg-white/[0.04] dark:text-navy-200">
                      ＋
                    </span>
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-navy-700 dark:text-navy-200/85">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactTeaser />
    </>
  );
}

function DetailBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-navy-700/10 bg-mist-100 p-5 dark:border-white/10 dark:bg-white/[0.02]">
      <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-navy-700/70 dark:text-navy-300/70">
        {label}
      </p>
      <p className="mt-1.5 font-display text-sm font-semibold text-navy-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

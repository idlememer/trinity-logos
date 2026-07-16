import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { jobs, getJobById } from "@/lib/jobs";
import { company } from "@/lib/company";
import {
  MapPin,
  Briefcase,
  Bolt,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "@/lib/icons";

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const j = getJobById(params.id);
  if (!j) return { title: "Role" };
  return {
    title: `${j.title} — ${j.location}`,
    description: `${j.title} at ${j.company}. ${j.experience} · ${j.salaryRange} · ${j.type} · ${j.remote}.`,
  };
}

export default function JobDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const j = getJobById(params.id);
  if (!j) notFound();

  const applyHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Application — ${j.title} (${j.id})`
  )}&body=${encodeURIComponent(
    [
      `Hello Logos Trinity team,`,
      ``,
      `I'd like to apply for the ${j.title} role (${j.id}) at ${j.company} — ${j.location}.`,
      ``,
      `A little about me:`,
      `Name: `,
      `Email: `,
      `Phone: `,
      `Current company / role: `,
      `Total years of experience: `,
      `Notice period: `,
      `Current CTC: `,
      `Expected CTC: `,
      `LinkedIn: `,
      ``,
      `Please find my CV attached.`,
      ``,
      `— sent from logostrinitytechnologies.com/careers/${j.id}`,
    ].join("\n")
  )}`;

  const related = jobs
    .filter((x) => x.id !== j.id && x.department === j.department)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`${j.department} · ${j.id}`}
        title={<>{j.title}</>}
        description={`${j.company} · Posted ${j.posted}`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href={applyHref} className="btn-primary">
            Apply now
            <ArrowRight size={16} />
          </a>
          <Link href="/careers" className="btn-ghost">
            Back to all roles
          </Link>
          {j.urgent && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-700 px-3 py-2 text-[11.5px] font-semibold uppercase tracking-wider text-white">
              <Bolt size={12} />
              Urgent hire
            </span>
          )}
        </div>
      </PageHeader>

      {/* Snapshot grid */}
      <section className="pb-4 pt-0">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-navy-700/10 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03] sm:grid-cols-3 lg:grid-cols-6">
            <Snapshot label="Location" value={j.location} icon={<MapPin size={14} />} />
            <Snapshot label="Work mode" value={j.remote} />
            <Snapshot label="Type" value={j.type} icon={<Briefcase size={14} />} />
            <Snapshot label="Experience" value={j.experience} />
            <Snapshot label="Compensation" value={j.salaryRange} />
            <Snapshot label="Posted" value={j.posted} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section pt-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left: content */}
            <div className="lg:col-span-8">
              <Reveal>
                <SectionLabel>About the role</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-pretty leading-relaxed text-navy-800 dark:text-navy-100/90 sm:text-lg">
                  {j.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Block title="What you'll do" items={j.responsibilities} />
              <Block title="What we're looking for" items={j.requirements} />
              <Block title="Nice to have" items={j.niceToHave} tone="soft" />
              <Block title="What you get" items={j.whatYouGet} />

              <div className="mt-12">
                <Reveal>
                  <SectionLabel>Interview process</SectionLabel>
                </Reveal>
                <Reveal delay={0.1}>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy-900 dark:text-white">
                    Structured, timely, and short.
                  </h3>
                </Reveal>
                <ol className="mt-6 space-y-3">
                  {j.process.map((step, i) => (
                    <Reveal key={i} delay={i * 0.04}>
                      <li className="flex items-start gap-4 rounded-2xl border border-navy-700/10 bg-white p-4 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-700 dark:text-navy-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[14.5px] leading-relaxed text-navy-800 dark:text-navy-100">
                          {step}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <a href={applyHref} className="btn-primary">
                  Apply now
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(
                    `Question — ${j.title} (${j.id})`
                  )}`}
                  className="btn-ghost"
                >
                  Ask a question first
                </a>
              </div>
            </div>

            {/* Right: sticky apply panel */}
            <div className="lg:col-span-4">
              <Reveal delay={0.15}>
                <aside className="sticky top-32 rounded-3xl border border-navy-700/10 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                    Apply for this role
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
                    {j.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-700 dark:text-navy-200/80">
                    {j.company} · {j.location}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {j.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-navy-700/10 bg-mist-100 px-2.5 py-0.5 text-[11px] text-navy-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={applyHref}
                    className="btn-primary mt-6 w-full !py-2.5 text-sm"
                  >
                    Apply now
                    <ArrowRight size={14} />
                  </a>
                  <p className="mt-3 text-center text-[11px] text-navy-700/70 dark:text-navy-300/60">
                    Opens your email with a template · attach your CV
                  </p>

                  <div className="mt-5 border-t border-navy-700/10 pt-4 text-sm text-navy-700 dark:border-white/5 dark:text-navy-300">
                    Prefer to talk first?{" "}
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="font-medium text-navy-900 underline decoration-navy-700/30 underline-offset-2 hover:decoration-navy-700 dark:text-white"
                    >
                      {company.phone}
                    </a>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related roles */}
      {related.length > 0 && (
        <section className="section pt-0">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <SectionLabel>Similar roles</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                  Other {j.department} openings.
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Reveal key={r.id}>
                  <Link
                    href={`/careers/${r.id}`}
                    className="group block h-full rounded-3xl border border-navy-700/10 bg-white p-6 ring-border transition-all hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
                  >
                    <span className="rounded-md bg-navy-100 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
                      {r.department}
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-navy-900 dark:text-white">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-navy-700 dark:text-navy-200/80">
                      {r.location} · {r.experience}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-navy-700 group-hover:text-navy-900 dark:text-navy-300 dark:group-hover:text-white">
                      View role
                      <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactTeaser />
    </>
  );
}

function Snapshot({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-navy-700/70 dark:text-navy-300/70">
        {icon}
        {label}
      </p>
      <p className="mt-1 font-display text-sm font-semibold text-navy-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function Block({
  title,
  items,
  tone = "solid",
}: {
  title: string;
  items: string[];
  tone?: "solid" | "soft";
}) {
  return (
    <div className="mt-12">
      <Reveal>
        <SectionLabel>{title}</SectionLabel>
      </Reveal>
      <ul className="mt-5 space-y-2">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <li className="flex items-start gap-3 rounded-2xl border border-navy-700/10 bg-white p-4 ring-border dark:border-white/10 dark:bg-white/[0.03]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-700/12 text-navy-700 dark:bg-white/10 dark:text-white">
                <Check size={12} />
              </span>
              <p
                className={`text-[14.5px] leading-relaxed ${
                  tone === "soft"
                    ? "text-navy-700 dark:text-navy-200/85"
                    : "text-navy-800 dark:text-navy-100"
                }`}
              >
                {item}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

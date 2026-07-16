import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { services, getServiceBySlug } from "@/lib/services";
import { company } from "@/lib/company";
import {
  ServiceIcon,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "@/lib/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getServiceBySlug(params.slug);
  if (!s) return { title: "Service" };
  return {
    title: s.name,
    description: s.short,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const s = getServiceBySlug(params.slug);
  if (!s) notFound();

  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Enquiry — ${s.name}`
  )}&body=${encodeURIComponent(
    `Hello Logos Trinity team,\n\nI'd like to speak with you about your ${s.name} practice.\n\n— sent from logostrinitytechnologies.com/services/${s.slug}`
  )}`;

  const related = services
    .filter((x) => x.slug !== s.slug && x.category === s.category)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={s.category}
        title={<>{s.name}</>}
        description={s.short}
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href={mailtoHref} className="btn-primary">
            Engage this practice
            <ArrowRight size={16} />
          </a>
          <Link href="/services" className="btn-ghost">
            All services
          </Link>
        </div>
      </PageHeader>

      {/* Overview + engagement side panel */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left: overview */}
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Overview</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-pretty leading-relaxed text-navy-800 dark:text-navy-100/90 sm:text-lg">
                  {s.overview.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: engagement panel */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <aside className="sticky top-32 rounded-3xl border border-navy-700/10 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
                      <ServiceIcon
                        name={
                          s.icon as React.ComponentProps<
                            typeof ServiceIcon
                          >["name"]
                        }
                        size={20}
                      />
                    </span>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                        Engagement
                      </p>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
                        {s.name}
                      </h3>
                    </div>
                  </div>

                  <dl className="mt-6 space-y-4">
                    <DetailRow label="Model" value={s.engagement.model} />
                    <DetailRow
                      label="Time to kick-off"
                      value={s.engagement.kickoff}
                    />
                    <DetailRow label="Pricing" value={s.engagement.pricing} />
                    <DetailRow label="SLA" value={s.engagement.sla} />
                  </dl>

                  <a
                    href={mailtoHref}
                    className="btn-primary mt-6 w-full !py-2.5 text-sm"
                  >
                    Start a conversation
                    <ArrowRight size={14} />
                  </a>
                  <p className="mt-3 text-center text-[11px] text-navy-700/70 dark:text-navy-300/60">
                    Opens your mail client · pre-filled
                  </p>
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>What we deliver</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                Concrete outputs, every engagement.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {s.whatWeDeliver.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="flex items-start gap-4 rounded-2xl border border-navy-700/10 bg-white p-5 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-700/12 text-navy-700 dark:bg-white/10 dark:text-white">
                    <Check size={14} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-navy-800 dark:text-navy-100">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — timeline */}
      <section className="section pt-0">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>How we work</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                A repeatable delivery process — no surprises.
              </h2>
            </Reveal>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {s.howWeWork.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li className="relative h-full overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-700 dark:text-navy-300">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-navy-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700 dark:text-navy-200/85">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>Who it's for</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                  If any of these sound familiar, we can help.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {s.whoItsFor.map((item, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex items-start gap-3 rounded-2xl border border-navy-700/10 bg-white p-5 text-[15px] leading-relaxed text-navy-800 ring-border dark:border-white/10 dark:bg-white/[0.03] dark:text-navy-100">
                      <ArrowUpRight
                        size={18}
                        className="mt-0.5 shrink-0 text-navy-700 dark:text-navy-300"
                      />
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
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
              {s.faqs.map((f, i) => (
                <details key={i} className="group px-6 py-5 open:pb-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">
                      {f.q}
                    </h3>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-700 transition-transform group-open:rotate-45 dark:bg-white/[0.04] dark:text-navy-200">
                      <span className="block h-3 w-3 leading-none">＋</span>
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

      {/* Related services */}
      {related.length > 0 && (
        <section className="section pt-0">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <SectionLabel>Related practices</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                  Often engaged together.
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group block h-full rounded-3xl border border-navy-700/10 bg-white p-6 ring-border transition-all hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
                      <ServiceIcon
                        name={
                          r.icon as React.ComponentProps<
                            typeof ServiceIcon
                          >["name"]
                        }
                        size={20}
                      />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700 dark:text-navy-200/80">
                      {r.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-navy-700 group-hover:text-navy-900 dark:text-navy-300 dark:group-hover:text-white">
                      Learn more
                      <ArrowRight size={13} />
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

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-navy-700/10 pt-3 first:border-t-0 first:pt-0 dark:border-white/5">
      <dt className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-navy-700/70 dark:text-navy-300/70">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-navy-900 dark:text-white">
        {value}
      </dd>
    </div>
  );
}

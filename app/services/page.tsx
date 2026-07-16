import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Process } from "@/components/home/Process";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { services } from "@/lib/services";
import { ServiceIcon, ArrowRight, Check } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services — Talent, Technology & Strategy",
  description:
    "Nine integrated practices spanning recruitment, staffing, outsourcing, consulting, software development and IT services for modern enterprises.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our practices"
        title={
          <>
            From <span className="text-gradient-blue">first hire</span> to{" "}
            <span className="text-gradient-blue">first deployment.</span>
          </>
        }
        description="Nine practice areas, one delivery standard. Wherever you are on your growth curve, we'll meet you with senior talent, expert consultants, and engineering pods that ship."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Talk to an expert
            <ArrowRight size={16} />
          </Link>
          <Link href="/careers" className="btn-ghost">
            Browse open roles
          </Link>
        </div>
      </PageHeader>

      {/* Service detail blocks */}
      <section className="section">
        <div className="container space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="group relative grid scroll-mt-32 grid-cols-1 gap-8 overflow-hidden rounded-4xl border border-navy-200/60 bg-white p-8 ring-border transition-all dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-12 lg:p-12"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-navy-600/10 blur-3xl transition-all duration-700 group-hover:bg-navy-600/25"
                />

                <div className="relative lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
                      <ServiceIcon
                        name={s.icon as React.ComponentProps<typeof ServiceIcon>["name"]}
                        size={22}
                      />
                    </span>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                        {String(i + 1).padStart(2, "0")} · {s.category}
                      </p>
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900 dark:text-white sm:text-3xl">
                        {s.name}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-navy-700 dark:text-navy-200/85">
                    {s.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-navy-800 dark:text-navy-100"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-700/12 text-navy-700 dark:bg-white/10 dark:text-navy-200">
                          <Check size={12} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${s.slug}`}
                      className="btn-primary !px-5 !py-2.5 text-sm"
                    >
                      See full details
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/careers"
                      className="text-sm font-medium text-navy-700 hover:text-navy-900 dark:text-navy-200 dark:hover:text-white"
                    >
                      View related jobs →
                    </Link>
                  </div>
                </div>

                <div className="relative lg:col-span-5">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Engagement", value: "Project / Retainer" },
                      { label: "Kick-off", value: "≤ 7 days" },
                      { label: "Cost model", value: "Fixed / T&M" },
                      { label: "SLA", value: "Tiered" },
                    ].map((d) => (
                      <div
                        key={d.label}
                        className="rounded-2xl border border-navy-200/60 bg-mist-50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
                      >
                        <p className="text-[10.5px] uppercase tracking-wider text-navy-600/70 dark:text-navy-300/70">
                          {d.label}
                        </p>
                        <p className="mt-1.5 font-display text-sm font-semibold text-navy-900 dark:text-white">
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />

      <ContactTeaser />
    </>
  );
}

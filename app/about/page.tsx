import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About — Talent, Technology, Transformation",
  description:
    "Founded in Visakhapatnam, Logos Trinity Technologies is a modern talent and technology partner — serving enterprises across India.",
};

const timeline = [
  {
    year: "2021",
    title: "Founded in Visakhapatnam",
    body: "Three founders, one mission — bring world-class talent and technology craftsmanship to India's mid-market enterprises.",
  },
  {
    year: "2022",
    title: "First 50 placements",
    body: "Began working with mid-market clients across Hyderabad, Bengaluru and Visakhapatnam. Built the first version of our internal ATS.",
  },
  {
    year: "2023",
    title: "Software studio launched",
    body: "Software engineering pods spun up. Delivered first enterprise customer portal in 14 weeks for a growth-stage client.",
  },
  {
    year: "2024",
    title: "Crossed 200 placements",
    body: "Expanded into Pune and Chennai. Crossed 200 placements and 20+ enterprise engagements across BFSI, retail and technology.",
  },
  {
    year: "2026",
    title: "AI-assisted matching",
    body: "Rolled out an in-house screening engine that cut median time-to-hire to 14 days while preserving recruiter judgement.",
  },
];

const leadership = [
  {
    name: "Founder & Managing Partner",
    role: "Strategy · Operations",
    body: "A decade across recruitment, IT services and enterprise consulting.",
  },
  {
    name: "Director of Technology",
    role: "Engineering · Product",
    body: "Senior engineer with a background in data platforms and developer tooling.",
  },
  {
    name: "Director of Talent",
    role: "Recruitment · People",
    body: "Built talent functions across growth-stage and enterprise clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Logos Trinity"
        title={
          <>
            We connect great <span className="text-gradient-blue">people</span>{" "}
            to ambitious <span className="text-gradient-blue">enterprises.</span>
          </>
        }
        description="Logos Trinity Technologies LLP is a modern recruitment ecosystem, an enterprise consulting house, and a software engineering studio — all under one roof. Born in Visakhapatnam, built for the world."
      />

      <About />

      {/* Timeline */}
      <section id="timeline" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionLabel>Our journey</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                Five years. 300+ placements.{" "}
                <span className="text-gradient-blue">One trajectory.</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <article className="relative h-full overflow-hidden rounded-3xl border border-navy-200/60 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                    {t.year}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700 dark:text-navy-200/80">
                    {t.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Leadership */}
      <section id="leadership" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionLabel>Leadership</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                Operators, engineers and recruiters — built this for the long
                game.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-6 ring-border transition-all hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40">
                  <div className="aspect-[5/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-700 to-navy-500 ring-1 ring-navy-200/40 dark:ring-white/10">
                    <div className="flex h-full w-full items-end justify-end p-4">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                        {l.role}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-navy-900 dark:text-white">
                    {l.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700 dark:text-navy-200/80">
                    {l.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactTeaser />
    </>
  );
}

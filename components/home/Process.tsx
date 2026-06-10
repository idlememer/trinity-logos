"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Consultation",
    body: "Deep-dive discovery session. We map your business goals, talent gaps, and tech landscape — typically within 48 hours.",
    accent: ["Stakeholder workshop", "Goal mapping", "Gap analysis"],
  },
  {
    n: "02",
    title: "Strategy",
    body: "Tailored proposal with delivery model, SLAs and timelines. Full transparency on cost, capacity and milestones.",
    accent: ["Engagement model", "Pricing & SLAs", "Roadmap"],
  },
  {
    n: "03",
    title: "Recruitment",
    body: "AI-assisted sourcing plus senior recruiter judgement. Calibrated shortlists in 5–7 days, every time.",
    accent: ["Sourcing pipeline", "Screening", "Interview support"],
  },
  {
    n: "04",
    title: "Development",
    body: "For tech mandates, our pods spin up in <2 weeks. Sprint-based delivery with weekly demos and milestone reviews.",
    accent: ["Pod assembly", "Sprint rituals", "Quality gates"],
  },
  {
    n: "05",
    title: "Deployment",
    body: "Onboarding for new hires, production cutover for software — orchestrated with zero-surprise execution.",
    accent: ["Onboarding", "Cutover plans", "Knowledge transfer"],
  },
  {
    n: "06",
    title: "Ongoing Support",
    body: "Quarterly business reviews, account leadership, and 30-day replacement guarantees. We stay invested.",
    accent: ["QBRs", "Account leadership", "Replacement guarantee"],
  },
];

export function Process() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={sectionRef} className="section">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
              A delivery process tuned over
              <span className="text-gradient-blue"> 12,500 placements </span>
              and 180 enterprise engagements.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20">
          {/* Animated vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 hidden h-full w-px bg-navy-200/60 dark:bg-white/10 lg:left-1/2 lg:block lg:-translate-x-px"
          >
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="h-full w-full origin-top"
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #001033 0%, #001C66 25%, #0038B8 60%, #5B82EE 100%)",
                }}
              />
            </motion.div>
          </div>

          <ol className="relative space-y-6 lg:space-y-16">
            {steps.map((step, i) => (
              <ProcessStep key={step.n} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const isLeft = index % 2 === 0;
  return (
    <li
      className={cn(
        "relative grid grid-cols-1 gap-4 lg:grid-cols-9 lg:gap-8",
        "lg:items-center"
      )}
    >
      {/* Node */}
      <motion.span
        aria-hidden="true"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 top-0 z-10 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-navy-200/60 dark:bg-navy-950 dark:ring-white/10">
          <span className="absolute inset-1 rounded-full bg-gradient-to-br from-navy-500 via-navy-700 to-navy-900" />
          <span className="relative font-display text-[11px] font-bold tracking-wider text-white">
            {step.n}
          </span>
          <span className="absolute -inset-1 rounded-full bg-navy-600/30 blur-md animate-pulse-soft" />
        </span>
      </motion.span>

      {/* Card */}
      <div
        className={cn(
          "col-start-1 pl-14 lg:pl-0",
          isLeft
            ? "lg:col-span-4 lg:text-right"
            : "lg:col-start-6 lg:col-span-4"
        )}
      >
        <Reveal y={20}>
          <div className="rounded-3xl border border-navy-200/60 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
              Step {step.n}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-navy-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-700 dark:text-navy-200/80">
              {step.body}
            </p>
            <div
              className={cn(
                "mt-4 flex flex-wrap gap-1.5",
                isLeft ? "lg:justify-end" : ""
              )}
            >
              {step.accent.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-navy-200/60 bg-mist-50 px-2.5 py-0.5 text-[11px] font-medium text-navy-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-200"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </li>
  );
}

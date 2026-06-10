"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  Shield,
  Bolt,
  Layers,
  Compass,
  Sparkle,
  Globe,
} from "@/lib/icons";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Shield,
    title: "Trusted workforce partner",
    body: "Statutory compliance, candidate verification, GDPR-grade data handling — built in from day one.",
    metric: "100%",
    metricLabel: "Audit pass rate",
    accent: false,
  },
  {
    icon: Bolt,
    title: "Faster time-to-hire",
    body: "AI-assisted screening + recruiter precision. 38% faster than industry average across senior roles.",
    metric: "14d",
    metricLabel: "Median TTH",
    accent: true,
  },
  {
    icon: Layers,
    title: "Scalable hiring solutions",
    body: "From 1 specialized hire to 200-person operations — the same delivery standard, end to end.",
    metric: "12.5k+",
    metricLabel: "Placements",
    accent: false,
  },
  {
    icon: Compass,
    title: "Strategic consulting",
    body: "Senior consultants with FAANG / Big-4 backgrounds. Not just sourcing — advising.",
    metric: "180+",
    metricLabel: "Clients served",
    accent: false,
  },
  {
    icon: Sparkle,
    title: "Modern technology DNA",
    body: "Engineering pods, GenAI, cloud-native. We build the future we recruit for.",
    metric: "96%",
    metricLabel: "12-mo retention",
    accent: false,
  },
  {
    icon: Globe,
    title: "Long-term partnership",
    body: "Quarterly business reviews, multi-year roadmaps, dedicated account leadership. Always.",
    metric: "4.9★",
    metricLabel: "Client NPS",
    accent: false,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 grid-bg"
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Why enterprises choose us</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
              Six reasons we're the
              <span className="text-gradient-blue"> default partner </span>
              for ambitious leaders.
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <RevealItem key={r.title}>
              <ReasonCard {...r} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ReasonCard({
  icon: Icon,
  title,
  body,
  metric,
  metricLabel,
  accent,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  metric: string;
  metricLabel: string;
  accent?: boolean;
}) {
  return (
    <Spotlight className="h-full rounded-3xl" color="rgba(0,56,184,0.16)" size={420}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border p-6 ring-border transition-all duration-300",
        accent
          ? "border-navy-700/30 bg-navy-700/5 dark:border-navy-400/30 dark:bg-white/[0.06]"
          : "border-navy-700/10 bg-white hover:border-navy-700/30 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
      )}
    >
      {accent && (
        <span
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-navy-600/20 blur-3xl"
        />
      )}

      <div className="relative flex items-start justify-between">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            accent
              ? "bg-navy-700 text-white"
              : "bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200"
          )}
        >
          <Icon size={20} />
        </span>
        <div className="text-right">
          <p
            className={cn(
              "font-display text-2xl font-semibold text-gradient-blue",
              accent && "dark:text-white"
            )}
          >
            {metric}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-navy-600/70 dark:text-navy-300/70">
            {metricLabel}
          </p>
        </div>
      </div>

      <h3 className="relative mt-6 font-display text-lg font-semibold tracking-tight text-navy-900 transition-colors group-hover:text-navy-700 dark:text-white">
        {title}
      </h3>
      <p className="relative mt-2 text-[14px] leading-relaxed text-navy-700 dark:text-navy-200/80">
        {body}
      </p>
    </motion.div>
    </Spotlight>
  );
}

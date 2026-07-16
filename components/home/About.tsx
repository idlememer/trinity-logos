"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/testimonials";
import { Target, Sparkle, Rocket, ArrowRight } from "@/lib/icons";

type AboutProps = {
  /** Hide the "About Logos Trinity" eyebrow + big H2 when a parent page
   *  already introduces the section (e.g. /about with a PageHeader). */
  showHeading?: boolean;
};

export function About({ showHeading = true }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="container relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left side: copy */}
          <div className="lg:col-span-6">
            {showHeading && (
              <>
                <Reveal>
                  <SectionLabel>About Logos Trinity</SectionLabel>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                    A technology-driven workforce partner — built for the next
                    decade of enterprise.
                  </h2>
                </Reveal>
              </>
            )}
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-700 dark:text-navy-200/85">
                Established in Visakhapatnam in {2026}, Logos Trinity Technologies
                LLP is a modern recruitment ecosystem, an enterprise consulting
                house, and a software engineering studio — all under one roof.
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-navy-700 dark:text-navy-200/80">
                We work with high-growth companies and global enterprises to
                place exceptional people, design resilient operating models,
                and ship technology that compounds.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <PrincipleCard
                  icon={<Target size={20} />}
                  title="Our Mission"
                  body="Make world-class talent and technology accessible to every ambitious business — from challenger startups to Fortune-1000 enterprises."
                />
                <PrincipleCard
                  icon={<Sparkle size={20} />}
                  title="Our Vision"
                  body="To be India's most trusted talent and technology partner, recognized globally for craft, integrity and outcomes."
                />
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
              >
                Read our story
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          {/* Right side: stats grid */}
          <div className="lg:col-span-6">
            <RevealStagger className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <RevealItem
                  key={stat.label}
                  className={i % 2 === 1 ? "sm:mt-10" : ""}
                >
                  <StatCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal delay={0.4}>
              <div className="mt-8 rounded-3xl border border-navy-200/60 bg-white p-6 ring-border dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
                    <Rocket size={20} />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-navy-900 dark:text-white">
                      Established 2026. Every commitment kept.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700 dark:text-navy-200/80">
                      A focused Visakhapatnam team backed by decades of prior
                      experience across recruitment, consulting and
                      engineering — building for the long run.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-navy-200/60 bg-white p-5 transition-colors hover:border-navy-700/30 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
    >
      <span className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-navy-600/0 blur-2xl transition-all duration-500 group-hover:bg-navy-600/30" />
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
        {icon}
      </span>
      <h3 className="relative mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">
        {title}
      </h3>
      <p className="relative mt-2 text-[13.5px] leading-relaxed text-navy-700 dark:text-navy-200/80">
        {body}
      </p>
    </motion.div>
  );
}

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-navy-200/60 bg-white p-6 ring-border transition-all dark:border-white/10 dark:bg-white/[0.03]">
      <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-navy-600/10 blur-3xl transition-all duration-500 group-hover:bg-navy-600/30" />
      <p className="relative font-display text-4xl font-semibold tracking-tight text-navy-900 dark:text-white sm:text-5xl">
        <AnimatedCounter to={value} suffix={suffix} />
      </p>
      <p className="relative mt-2 text-[12px] uppercase tracking-wider text-navy-600 dark:text-navy-300/70">
        {label}
      </p>
    </div>
  );
}

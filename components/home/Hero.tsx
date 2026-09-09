"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle, Briefcase } from "@/lib/icons";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { Tilt } from "@/components/ui/Tilt";
import { Spotlight } from "@/components/ui/Spotlight";

/**
 * Minimal, centred hero. White canvas, blue type, orange CTAs.
 * Inspired by Stripe / Linear / Vercel — lots of breathing room, single message,
 * a clean visual that doesn't compete with the headline.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-56">
      <GradientOrbs intensity="subtle" />

      <div className="container relative">
        {/* Centered content stack */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 bg-white px-3.5 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.18em] text-navy-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-200"
          >
            <Sparkle size={13} className="text-navy-700" />
            Talent · Technology · Transformation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-display-lg text-balance font-semibold tracking-tight text-navy-900 dark:text-white"
          >
            <span className="text-gradient-blue">
              Empowering talent. Building technology that transforms business.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-navy-700/85 dark:text-navy-200/85 sm:text-lg"
          >
            Recruitment, consulting, outsourcing and software engineering —
            one trusted partner for modern enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/services" className="btn-primary">
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link href="/careers" className="btn-ghost">
              Discover Opportunities
            </Link>
          </motion.div>

          {/* Standout announcement banner — end-to-end contracts */}
          <motion.aside
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <Link
              href="/services/business-contracts"
              aria-label="Learn about end-to-end business establishment contracts"
              className="group relative block overflow-hidden rounded-3xl p-[1.5px] shadow-[0_18px_40px_-16px_rgba(0,56,184,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-14px_rgba(0,56,184,0.6)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,122,0,0.55) 45%, rgba(255,255,255,0.25) 100%)",
              }}
            >
              {/* Inner navy card */}
              <span
                className="relative flex flex-col items-stretch gap-4 rounded-[calc(1.5rem-1.5px)] p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #001C66 0%, #002C8C 50%, #0038B8 100%)",
                }}
              >
                {/* Decorative glow on top-right */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-flame-500/40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-navy-500/40 blur-3xl"
                />
                {/* Subtle sheen sweep on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                />

                <span className="relative flex items-center gap-3 sm:contents">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm">
                    <Briefcase size={22} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_2px_6px_-2px_rgba(255,122,0,0.6)] sm:hidden">
                    New
                  </span>
                </span>

                <span className="relative flex-1 min-w-0">
                  <span className="hidden items-center gap-2 sm:flex">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_2px_6px_-2px_rgba(255,122,0,0.7)]">
                      New
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      End-to-end contracts
                    </span>
                  </span>
                  <p className="mt-1.5 text-[15px] leading-snug text-white/95 sm:text-base">
                    Comprehensive solutions for{" "}
                    <span className="font-bold text-white">
                      corporates, restaurants, hospitals
                    </span>{" "}
                    and other commercial organizations.
                  </p>
                </span>

                <span className="relative inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-flame-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(255,122,0,0.65)] transition-all group-hover:bg-flame-400 group-hover:shadow-[0_6px_18px_-4px_rgba(255,122,0,0.85)] sm:self-center">
                  Enquire
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </span>
            </Link>
          </motion.aside>
        </div>

        {/* Single, clean visual element — no floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <Tilt max={3} scale={1.005} glow>
            <HeroVisual />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft glow under the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -bottom-10 -top-2 -z-10 rounded-[3rem] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(0,56,184,0.15), transparent 70%)",
        }}
      />

      <div className="overflow-hidden rounded-3xl border border-navy-700/10 bg-white shadow-soft ring-border transition-shadow duration-500 hover:shadow-glow dark:border-white/10 dark:bg-navy-900/60">
        {/* Top chrome */}
        <div className="flex items-center justify-between border-b border-navy-100 bg-mist-100/60 px-5 py-3 dark:border-white/5 dark:bg-navy-950/60">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
          </div>
          <span className="rounded-md bg-white px-2.5 py-1 font-mono text-[10.5px] text-navy-700 ring-1 ring-navy-700/10 dark:bg-navy-950/80 dark:text-navy-200 dark:ring-white/5">
            logostrinity.com / talent
          </span>
          <span className="h-2.5 w-12" />
        </div>

        {/* Body — single panel, no clutter */}
        <div className="grid grid-cols-1 gap-6 p-7 md:grid-cols-3 md:p-10">
          <Metric label="Talent placed" value="300+" tone="blue" />
          <Metric label="Enterprise clients" value="30+" tone="blue" />
          <Metric label="Avg. time-to-hire" value="14 days" tone="blue" />
        </div>

        <div className="px-7 pb-8 md:px-10 md:pb-10">
          <div className="rounded-2xl border border-navy-700/10 bg-mist-100 p-6 dark:border-white/5 dark:bg-navy-950/40">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-navy-700/70 dark:text-navy-300/70">
                  Hiring velocity — last 12 weeks
                </p>
                <p className="mt-1 font-display text-base font-semibold text-navy-900 dark:text-white">
                  38% faster than industry average
                </p>
              </div>
              <span className="rounded-full bg-navy-700/10 px-2.5 py-1 text-[10.5px] font-semibold text-navy-700 dark:bg-white/10 dark:text-navy-200">
                ↑ 38%
              </span>
            </div>
            <HeroChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "orange";
}) {
  return (
    <div className="border-l border-navy-700/10 pl-5 first:border-l-0 first:pl-0 dark:border-white/10 md:border-l-0 md:pl-0">
      <p className="text-[10.5px] uppercase tracking-[0.18em] text-navy-700/70 dark:text-navy-300/70">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-gradient-blue md:text-4xl">
        {value}
      </p>
    </div>
  );
}

function HeroChart() {
  return (
    <svg viewBox="0 0 480 100" className="h-24 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0038B8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0038B8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroChartLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#001C66" />
          <stop offset="100%" stopColor="#5B82EE" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C40,72 70,75 100,70 C140,62 170,68 210,55 C250,42 290,50 330,42 C370,34 410,22 480,12 L480,100 L0,100 Z"
        fill="url(#heroChartFill)"
      />
      <path
        d="M0,80 C40,72 70,75 100,70 C140,62 170,68 210,55 C250,42 290,50 330,42 C370,34 410,22 480,12"
        stroke="url(#heroChartLine)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="480" cy="12" r="4" fill="#0038B8" />
      <circle cx="480" cy="12" r="9" fill="#0038B8" opacity="0.25" />
    </svg>
  );
}

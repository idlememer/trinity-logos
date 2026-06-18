"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "@/lib/icons";
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
    <section className="relative isolate overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-72">
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

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Spotlight } from "@/components/ui/Spotlight";
import { ServiceIcon, ArrowUpRight, Check } from "@/lib/icons";
import { services, serviceCategories } from "@/lib/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [filter, setFilter] = React.useState<string>("All");
  const visible =
    filter === "All" ? services : services.filter((s) => s.category === filter);

  return (
    <section id="services" className="section">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>What we do</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
              One partner for the entire
              <span className="text-gradient-blue"> talent-to-tech </span>
              spectrum.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-navy-700 dark:text-navy-200/80 sm:text-lg">
              Nine integrated practices, one delivery standard. Scale your
              workforce, modernize your stack, and unlock new growth.
            </p>
          </Reveal>
        </div>

        {/* Filter pills */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <FilterPill
              active={filter === "All"}
              onClick={() => setFilter("All")}
            >
              All services
            </FilterPill>
            {serviceCategories.map((c) => (
              <FilterPill
                key={c.id}
                active={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </FilterPill>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <RevealStagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <RevealItem key={s.slug}>
              <ServiceCard
                name={s.name}
                short={s.short}
                bullets={s.bullets}
                icon={s.icon as React.ComponentProps<typeof ServiceIcon>["name"]}
                href={`/services/${s.slug}`}
                category={s.category}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function FilterPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "border-navy-700/30 bg-navy-700/8 text-navy-700 dark:border-navy-400/40 dark:bg-white/[0.06] dark:text-navy-200"
          : "border-navy-700/10 bg-white text-navy-700 hover:border-navy-700/30 hover:text-navy-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-navy-200"
      )}
    >
      {children}
    </button>
  );
}

function ServiceCard({
  name,
  short,
  bullets,
  icon,
  href,
  category,
}: {
  name: string;
  short: string;
  bullets: string[];
  icon: React.ComponentProps<typeof ServiceIcon>["name"];
  href: string;
  category: string;
}) {
  return (
    <Spotlight className="h-full rounded-3xl">
      <motion.div whileHover="hover" initial="rest" animate="rest" className="h-full">
      <Link
        href={href}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-6 ring-border transition-all duration-300 hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
      >
        {/* Glow effect */}
        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-navy-600/15 blur-3xl"
        />

        <div className="relative flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-100 text-navy-700 transition-all duration-300 group-hover:-rotate-6 group-hover:bg-navy-700 group-hover:text-white dark:bg-white/[0.04] dark:text-navy-200 dark:group-hover:bg-navy-600">
            <ServiceIcon name={icon} size={22} />
          </span>
          <span className="rounded-full border border-navy-700/10 bg-mist-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-navy-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-300">
            {category}
          </span>
        </div>

        <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight text-navy-900 dark:text-white">
          {name}
        </h3>
        <p className="relative mt-2 text-[14px] leading-relaxed text-navy-700 dark:text-navy-200/80">
          {short}
        </p>

        <ul className="relative mt-5 space-y-1.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-[12.5px] text-navy-600 dark:text-navy-200/70"
            >
              <Check size={12} className="text-navy-700 dark:text-navy-300" />
              {b}
            </li>
          ))}
        </ul>

        <div className="relative mt-6 flex items-center justify-between border-t border-navy-700/10 pt-4 dark:border-white/5">
          <span className="text-sm font-medium text-navy-800 transition-colors group-hover:text-navy-900 dark:text-navy-100">
            Learn more
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-700/15 text-navy-700 transition-all duration-300 group-hover:rotate-45 group-hover:border-navy-700 group-hover:bg-navy-700 group-hover:text-white dark:border-white/10 dark:text-navy-100">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
      </motion.div>
    </Spotlight>
  );
}

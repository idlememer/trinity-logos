"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Search, MapPin, Briefcase, Bolt, ArrowUpRight } from "@/lib/icons";
import { jobs, departments, locations, type Job } from "@/lib/jobs";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const types = ["All", "Full-time", "Contract", "Contract-to-Hire"] as const;
const remoteOpts = ["All", "On-site", "Hybrid", "Remote"] as const;

export function CareerBoard() {
  const [query, setQuery] = React.useState("");
  const [dept, setDept] = React.useState<string>("All");
  const [loc, setLoc] = React.useState<string>("All locations");
  const [type, setType] = React.useState<(typeof types)[number]>("All");
  const [remote, setRemote] = React.useState<(typeof remoteOpts)[number]>(
    "All"
  );

  const filtered = React.useMemo(() => {
    return jobs.filter((j) => {
      if (dept !== "All" && j.department !== dept) return false;
      if (loc !== "All locations" && !j.location.includes(loc)) return false;
      if (type !== "All" && j.type !== type) return false;
      if (remote !== "All" && j.remote !== remote) return false;
      if (query) {
        const q = query.toLowerCase();
        const matches =
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.skills.some((s) => s.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [query, dept, loc, type, remote]);

  return (
    <section className="pb-24">
      <div className="container">
        {/* Filter bar */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-navy-200/60 bg-white p-3 shadow-soft ring-border dark:border-white/10 dark:bg-white/[0.03]">
            <label className="flex items-center gap-3 rounded-2xl px-3 py-2">
              <Search size={18} className="text-navy-600 dark:text-navy-300" />
              <input
                type="text"
                placeholder="Search by title, company, or skill (e.g. React, Java, MLOps)…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-navy-900 placeholder:text-navy-600/50 focus:outline-none dark:text-white dark:placeholder:text-navy-300/50"
              />
              <span className="rounded-full bg-navy-700/10 px-3 py-1 text-[11px] font-semibold text-navy-700 dark:bg-white/10 dark:text-white">
                {filtered.length} roles
              </span>
            </label>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-navy-200/60 p-2 dark:border-white/5 md:grid-cols-4">
              <Select
                value={dept}
                onChange={setDept}
                options={[...departments]}
                label="Department"
              />
              <Select
                value={loc}
                onChange={setLoc}
                options={[...locations]}
                label="Location"
              />
              <Select
                value={type}
                onChange={(v) => setType(v as (typeof types)[number])}
                options={[...types]}
                label="Type"
              />
              <Select
                value={remote}
                onChange={(v) => setRemote(v as (typeof remoteOpts)[number])}
                options={[...remoteOpts]}
                label="Work mode"
              />
            </div>
          </div>
        </Reveal>

        {/* Job list */}
        <RevealStagger className="mt-10 grid grid-cols-1 gap-4">
          {filtered.map((j) => (
            <RevealItem key={j.id}>
              <JobRow job={j} />
            </RevealItem>
          ))}
        </RevealStagger>

        {filtered.length === 0 && (
          <Reveal>
            <div className="mt-12 rounded-3xl border border-dashed border-navy-200 p-12 text-center dark:border-white/10">
              <p className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                No roles match those filters.
              </p>
              <p className="mt-2 text-sm text-navy-700 dark:text-navy-200/80">
                Drop your CV at{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-navy-700 hover:underline dark:text-navy-300"
                >
                  {company.email}
                </a>{" "}
                — we'll alert you the moment a fit opens up.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Select({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  label: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1.5 text-[9.5px] font-medium uppercase tracking-wider text-navy-600/70 dark:text-navy-300/70">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 w-full appearance-none rounded-2xl bg-mist-50 px-3 pt-5 pb-1 text-sm font-medium text-navy-900 ring-1 ring-navy-100 focus:outline-none focus:ring-navy-700 dark:bg-white/[0.04] dark:text-white dark:ring-white/10"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Link
        href={`#${job.id}`}
        id={job.id}
        className={cn(
          "group relative flex scroll-mt-32 flex-col gap-5 overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-6 ring-border transition-all hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40",
          "lg:flex-row lg:items-center lg:gap-6"
        )}
      >
        {job.urgent && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-navy-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            <Bolt size={11} />
            Urgent
          </span>
        )}

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 via-navy-700 to-navy-900 font-display text-base font-semibold text-white">
          {job.department
            .split(" ")
            .map((p) => p[0])
            .join("")
            .slice(0, 2)}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-navy-100 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
              {job.department}
            </span>
            <span className="text-[11px] text-navy-600/70 dark:text-navy-300/60">
              {job.id} · posted {job.posted}
            </span>
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-navy-900 group-hover:text-navy-700 dark:text-white sm:text-xl">
            {job.title}
          </h3>
          <p className="mt-1 text-sm text-navy-700 dark:text-navy-200/80">
            {job.company}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-navy-600 dark:text-navy-300/80">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase size={12} />
              {job.type} · {job.remote}
            </span>
            <span>{job.experience}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {job.skills.slice(0, 5).map((s) => (
              <span
                key={s}
                className="rounded-full border border-navy-200/60 bg-mist-50 px-2.5 py-0.5 text-[11px] text-navy-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-end justify-between gap-4 lg:flex-col lg:items-end">
          <div className="text-right">
            <p className="text-[10.5px] uppercase tracking-wider text-navy-600/70 dark:text-navy-300/70">
              Compensation
            </p>
            <p className="mt-1 font-display text-base font-semibold text-navy-900 dark:text-white">
              {job.salaryRange}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-navy-700/10 px-4 py-2 text-[12.5px] font-semibold text-navy-700 transition-all group-hover:bg-navy-700 group-hover:text-white dark:bg-white/10 dark:text-white">
            Apply now
            <ArrowUpRight size={13} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Search, MapPin, Briefcase, ArrowUpRight, ArrowRight, Bolt } from "@/lib/icons";
import { jobs, departments, locations, type Job } from "@/lib/jobs";
import { cn } from "@/lib/utils";

export function JobsPreview() {
  const [dept, setDept] = React.useState<string>("All");
  const [query, setQuery] = React.useState<string>("");

  const filtered = React.useMemo(() => {
    const featured = jobs.filter((j) => j.featured);
    return featured.filter((j) => {
      const matchesDept = dept === "All" || j.department === dept;
      const matchesQuery =
        !query ||
        j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.skills.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
        j.location.toLowerCase().includes(query.toLowerCase());
      return matchesDept && matchesQuery;
    });
  }, [dept, query]);

  return (
    <section id="careers" className="section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 0%, rgba(255,122,0,0.08), transparent 70%)",
        }}
      />
      <div className="container relative">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Open opportunities</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                A smarter job portal — built for{" "}
                <span className="text-gradient-blue">ambitious careers.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-navy-700 dark:text-navy-200/80 sm:text-lg">
                Hand-curated roles from India's leading enterprises and global
                clients. Direct recruiter access — no resume black holes.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Reveal delay={0.25}>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
              >
                Browse all jobs
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Search Bar */}
        <Reveal delay={0.3}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-navy-200/60 bg-white p-2 shadow-soft ring-border dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3">
                <Search
                  size={18}
                  className="text-navy-600 dark:text-navy-300"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search title, skill, or location…"
                  className="flex-1 bg-transparent text-sm text-navy-900 placeholder:text-navy-600/50 focus:outline-none dark:text-white dark:placeholder:text-navy-300/50"
                />
              </label>
              <div className="hidden h-8 w-px bg-navy-200 dark:bg-white/10 md:block" />
              <div className="relative">
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="h-12 appearance-none rounded-2xl bg-mist-50 pl-10 pr-9 text-sm font-medium text-navy-900 ring-1 ring-navy-100 focus:outline-none focus:ring-navy-700 dark:bg-white/[0.04] dark:text-white dark:ring-white/10 md:w-56"
                >
                  {departments.map((d) => (
                    <option key={d} value={d}>
                      {d === "All" ? "All departments" : d}
                    </option>
                  ))}
                </select>
                <Briefcase
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-600 dark:text-navy-300"
                />
              </div>
              <Link
                href="/careers"
                className="btn-primary !rounded-2xl !px-6 !py-3 text-sm"
              >
                Search Jobs
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-1.5 px-3 pb-2">
              <span className="text-[11px] uppercase tracking-wider text-navy-600/70 dark:text-navy-300/60">
                Popular:
              </span>
              {["React", "Java", "Data Science", "DevOps", "Hyderabad", "Remote"].map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="rounded-full border border-navy-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-navy-700 hover:border-navy-700/30 hover:text-navy-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-200"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </Reveal>

        {/* Job grid */}
        <RevealStagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.slice(0, 6).map((j) => (
            <RevealItem key={j.id}>
              <JobCard job={j} />
            </RevealItem>
          ))}
        </RevealStagger>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-navy-200 p-12 text-center text-navy-700 dark:border-white/10 dark:text-navy-200/80">
            <p>No matching roles right now. We'll keep your alert active.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
      <Link
        href={`/careers#${job.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-200/60 bg-white p-6 ring-border transition-all hover:border-navy-700/30 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
      >
        {job.urgent && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-navy-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            <Bolt size={11} />
            Urgent
          </span>
        )}
        <span className="rounded-md bg-navy-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-navy-700 self-start dark:bg-white/[0.04] dark:text-navy-200">
          {job.department}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-navy-900 group-hover:text-navy-700 dark:text-white">
          {job.title}
        </h3>
        <p className="mt-1 text-sm text-navy-700 dark:text-navy-200/80">
          {job.company}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] text-navy-600 dark:text-navy-300/80">
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} />
            {job.location}
          </span>
          <span>•</span>
          <span>{job.remote}</span>
          <span>•</span>
          <span>{job.experience}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.skills.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-navy-200/60 bg-mist-50 px-2 py-0.5 text-[10.5px] text-navy-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-navy-200/60 pt-4 dark:border-white/5">
          <span className="font-display text-[15px] font-semibold text-navy-900 dark:text-white">
            {job.salaryRange}
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] font-medium text-navy-700 group-hover:gap-2 group-hover:text-navy-900 transition-all dark:text-navy-300 dark:group-hover:text-white">
            Apply now
            <ArrowUpRight size={13} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

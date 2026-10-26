"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Search, MapPin, Briefcase, Bolt, ArrowUpRight } from "@/lib/icons";
import { jobs, departments, locations, type Job } from "@/lib/jobs";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const types = [
  "All",
  "Internship",
  "Full-time",
  "Contract",
  "Contract-to-Hire",
] as const;
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
    // Sort order: new/opening-soon roles first, then regular open, then occupied.
    const statusRank = (s: Job["status"]) =>
      s === "opening-soon" ? 0 : s === "new" ? 1 : s === "occupied" ? 3 : 2;
    return jobs
      .filter((j) => {
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
      })
      .sort((a, b) => statusRank(a.status) - statusRank(b.status));
  }, [query, dept, loc, type, remote]);

  const openingSoonCount = React.useMemo(
    () => jobs.filter((j) => j.status === "opening-soon").length,
    []
  );
  const openJobs = React.useMemo(
    () => jobs.filter((j) => !j.status),
    []
  );

  return (
    <section className="pb-24">
      <div className="container">
        {/* Actively Hiring banner — highlights the currently-open roles */}
        {openJobs.length > 0 && (
          <Reveal>
            <div
              className="mb-6 overflow-hidden rounded-3xl p-[1.5px] shadow-[0_14px_32px_-14px_rgba(255,122,0,0.45)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,122,0,0.75) 50%, rgba(255,255,255,0.25) 100%)",
              }}
            >
              <div
                className="relative flex flex-col items-start gap-4 overflow-hidden rounded-[calc(1.5rem-1.5px)] p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #001C66 0%, #002C8C 55%, #0038B8 100%)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-flame-500/50 blur-3xl"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-navy-500/40 blur-3xl"
                />

                <span className="relative flex items-center gap-2 self-stretch sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_2px_6px_-2px_rgba(255,122,0,0.75)]">
                    <span className="relative inline-flex h-1.5 w-1.5">
                      <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-80" />
                      <span className="absolute inset-0 rounded-full bg-white" />
                    </span>
                    Actively Hiring
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20">
                    {openJobs.length} open
                  </span>
                </span>

                <div className="relative flex-1 min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                    Currently open
                  </p>
                  <ul className="mt-1 space-y-0.5 text-[14.5px] leading-snug text-white/95 sm:text-base">
                    {openJobs.slice(0, 3).map((j) => (
                      <li key={j.id}>
                        <Link
                          href={`/careers/${j.id}`}
                          className="group inline-flex flex-wrap items-baseline gap-x-2 hover:text-white"
                        >
                          <span className="font-semibold text-white underline decoration-white/30 decoration-1 underline-offset-4 group-hover:decoration-white">
                            {j.title}
                          </span>
                          <span className="text-[12.5px] text-white/70">
                            {j.location} · {j.salaryRange}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {openJobs.length === 1 && (
                  <Link
                    href={`/careers/${openJobs[0].id}`}
                    className="relative inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-flame-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(255,122,0,0.7)] transition-colors hover:bg-flame-400 sm:self-center"
                  >
                    View role
                    <ArrowUpRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {/* Opening Soon banner — only renders if any role has that status */}
        {openingSoonCount > 0 && (
          <Reveal>
            <div
              className="mb-6 overflow-hidden rounded-3xl p-[1.5px] shadow-[0_12px_30px_-14px_rgba(0,56,184,0.4)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,122,0,0.5) 50%, rgba(255,255,255,0.2) 100%)",
              }}
            >
              <div
                className="relative flex flex-col items-start gap-4 overflow-hidden rounded-[calc(1.5rem-1.5px)] p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #001C66 0%, #002C8C 50%, #0038B8 100%)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-flame-500/40 blur-3xl"
                />
                <span className="relative flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_2px_6px_-2px_rgba(255,122,0,0.7)]">
                    Opening Soon
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20">
                    {openingSoonCount} intern {openingSoonCount === 1 ? "role" : "roles"}
                  </span>
                </span>
                <p className="relative flex-1 text-[14.5px] leading-snug text-white/95 sm:text-base">
                  Internship openings are launching soon —{" "}
                  <span className="font-semibold text-white">
                    AI Engineer Intern
                  </span>{" "}
                  &amp;{" "}
                  <span className="font-semibold text-white">
                    Full Stack Development Intern
                  </span>
                  . All other roles below are currently{" "}
                  <span className="font-semibold text-white">occupied</span>.
                </p>
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(
                    "Register interest — Logos Trinity internships"
                  )}&body=${encodeURIComponent(
                    [
                      "Hello Logos Trinity team,",
                      "",
                      "I'd like to register my interest for your upcoming internship openings.",
                      "",
                      "Preferred role (AI Engineer Intern / Full Stack Development Intern / either): ",
                      "Name: ",
                      "College + year: ",
                      "Email: ",
                      "Phone: ",
                      "Portfolio / GitHub / LinkedIn: ",
                      "",
                      "Please notify me when applications open.",
                    ].join("\n")
                  )}`}
                  className="relative inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-flame-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(255,122,0,0.7)] transition-colors hover:bg-flame-400 sm:self-center"
                >
                  Register interest
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>
        )}

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
  const occupied = job.status === "occupied";
  const soon = job.status === "opening-soon";
  const open = !occupied && !soon;

  // Open roles get a gradient-border wrapper so they visually pop.
  const card = (
    <motion.div
      whileHover={occupied ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/careers/${job.id}`}
        aria-disabled={occupied}
        className={cn(
          "group relative flex scroll-mt-32 flex-col gap-5 overflow-hidden rounded-3xl border p-6 ring-border transition-all",
          "lg:flex-row lg:items-center lg:gap-6",
          occupied
            ? "border-navy-700/12 bg-navy-100/50 dark:border-white/10 dark:bg-white/[0.02]"
            : soon
            ? "border-navy-700/20 bg-white hover:-translate-y-0.5 hover:border-navy-700/40 hover:shadow-card dark:border-white/15 dark:bg-white/[0.03]"
            : "border-transparent bg-white hover:-translate-y-0.5 hover:shadow-card dark:border-white/5 dark:bg-white/[0.03]"
        )}
      >
        {/* Status chips — in flow on mobile (above the dept icon so they
            can't overlap it), floated to the top-right corner on lg+. */}
        <div className="flex flex-wrap items-center gap-1.5 lg:absolute lg:right-5 lg:top-5 lg:justify-end">
          {open && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_2px_6px_-2px_rgba(255,122,0,0.6)]">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-80" />
                <span className="absolute inset-0 rounded-full bg-white" />
              </span>
              Hiring Now
            </span>
          )}
          {open && job.urgent && (
            <span className="inline-flex items-center gap-1 rounded-full bg-navy-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              <Bolt size={11} />
              Urgent
            </span>
          )}
          {soon && (
            <>
              <span className="inline-flex items-center gap-1 rounded-full bg-flame-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_2px_6px_-2px_rgba(255,122,0,0.6)]">
                New
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-navy-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Opening Soon
              </span>
            </>
          )}
          {occupied && (
            <span className="inline-flex items-center gap-1 rounded-full bg-navy-700/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-700 dark:bg-white/10 dark:text-navy-200">
              Occupied
            </span>
          )}
        </div>

        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-base font-semibold text-white",
            occupied
              ? "bg-navy-400"
              : "bg-gradient-to-br from-navy-500 via-navy-700 to-navy-900"
          )}
        >
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
              {job.id} · {occupied ? "position filled" : `posted ${job.posted}`}
            </span>
          </div>
          <h3
            className={cn(
              "mt-2 font-display text-lg font-semibold tracking-tight sm:text-xl",
              occupied
                ? "text-navy-800 dark:text-navy-100"
                : "text-navy-900 group-hover:text-navy-700 dark:text-white"
            )}
          >
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
              {occupied ? "Status" : "Compensation"}
            </p>
            <p
              className={cn(
                "mt-1 font-display text-base font-semibold",
                occupied
                  ? "text-navy-700/70 dark:text-navy-300"
                  : "text-navy-900 dark:text-white"
              )}
            >
              {occupied ? "Filled" : job.salaryRange}
            </p>
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-4 py-2 text-[12.5px] font-semibold transition-all",
              occupied
                ? "bg-navy-700/8 text-navy-700/70 dark:bg-white/5 dark:text-navy-300"
                : soon
                ? "bg-flame-500 text-white shadow-[0_2px_8px_-2px_rgba(255,122,0,0.6)] group-hover:bg-flame-400"
                : "bg-navy-700/10 text-navy-700 group-hover:bg-navy-700 group-hover:text-white dark:bg-white/10 dark:text-white"
            )}
          >
            {occupied
              ? "View details"
              : soon
              ? "Register interest"
              : "Apply now"}
            <ArrowUpRight size={13} />
          </span>
        </div>
      </Link>
    </motion.div>
  );

  // Open roles get an orange→navy gradient halo so they stand out from the
  // flat Occupied cards above and below them.
  if (open) {
    return (
      <div
        className="rounded-[26px] p-[2px] shadow-[0_14px_30px_-14px_rgba(255,122,0,0.4)]"
        style={{
          background:
            "linear-gradient(135deg, #FF7A00 0%, #FF924D 35%, #0038B8 100%)",
        }}
      >
        {card}
      </div>
    );
  }
  return card;
}

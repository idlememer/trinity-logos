"use client";

import * as React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Phone, Mail, MapPin, ArrowRight } from "@/lib/icons";
import { company, fullAddress } from "@/lib/company";

export function ContactTeaser() {
  return (
    <section id="contact" className="section">
      <div className="container relative">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-navy-200/60 bg-white shadow-soft dark:border-white/10 dark:bg-navy-900/60">
          {/* gradient flare */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,122,0,0.25), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(29,91,170,0.3), transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-10 p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <Reveal>
                <SectionLabel>Start the conversation</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
                  Hire smarter, build faster, scale further — with{" "}
                  <span className="text-gradient-blue">one partner.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 text-pretty leading-relaxed text-navy-700 dark:text-navy-200/85">
                  Book a 30-minute consultation with our enterprise team. We'll
                  send a tailored proposal — costs, capacity, milestones — within
                  48 hours.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="btn-primary">
                    Contact Us
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/careers" className="btn-ghost">
                    Apply Now
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="space-y-3">
              <ContactRow
                icon={<Phone size={16} />}
                label="Speak to a recruiter"
                value={company.phone}
                href={`tel:${company.phoneRaw}`}
              />
              <ContactRow
                icon={<Mail size={16} />}
                label="Email"
                value={company.email}
                href={`mailto:${company.email}`}
              />
              <ContactRow
                icon={<MapPin size={16} />}
                label="Visit our HQ"
                value={fullAddress}
                href="/contact"
                multiline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  multiline,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  multiline?: boolean;
}) {
  return (
    <a
      href={href}
      className="group flex items-start gap-4 rounded-2xl border border-navy-700/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40"
    >
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white dark:bg-white/[0.04] dark:text-navy-200">
        {icon}
      </span>
      <div className="flex-1">
        <p className="text-[11px] uppercase tracking-[0.18em] text-navy-600/80 dark:text-navy-300/70">
          {label}
        </p>
        <p
          className={`mt-1 font-display text-navy-900 dark:text-white ${multiline ? "text-[14px] font-medium leading-relaxed" : "text-base font-semibold"}`}
        >
          {value}
        </p>
      </div>
      <ArrowRight
        size={16}
        className="mt-1 text-navy-400 transition-all group-hover:translate-x-0.5 group-hover:text-navy-700"
      />
    </a>
  );
}

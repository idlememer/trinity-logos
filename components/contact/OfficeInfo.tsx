"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, Mail, MapPin, Globe, ArrowRight, ArrowUpRight } from "@/lib/icons";
import { company, fullAddress } from "@/lib/company";

const mapsQuery = encodeURIComponent(
  "Logos Trinity Technologies, HB Colony, PM Palem, Visakhapatnam 530041, Andhra Pradesh, India"
);
const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export function OfficeInfo() {
  return (
    <Reveal delay={0.15}>
      <div className="space-y-6">
        {/* Google Maps embed */}
        <div className="relative overflow-hidden rounded-3xl border border-navy-700/10 bg-mist-100 ring-border dark:border-white/10">
          <div className="relative aspect-[5/4] w-full">
            <iframe
              title="Logos Trinity Technologies — Office Location"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.15] saturate-[1.1]"
              style={{ border: 0 }}
              allowFullScreen
            />
            {/* tint overlay for premium feel */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,56,184,0.06) 0%, transparent 40%, transparent 70%, rgba(0,56,184,0.1) 100%)",
              }}
            />
          </div>

          {/* Floating address card on map */}
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10">
            <div className="pointer-events-auto rounded-2xl border border-navy-700/10 bg-white/95 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/90">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                    Headquarters
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-navy-900 dark:text-white">
                    {company.legalName}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-navy-700 dark:text-navy-200/80">
                    {fullAddress}
                  </p>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-flame-500 px-3 py-2 text-[11.5px] font-semibold text-white transition-all hover:bg-flame-600 hover:shadow-glow-orange"
                  aria-label="Get directions on Google Maps"
                >
                  Directions
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact rows */}
        <div className="space-y-2">
          <Row
            icon={<Phone size={16} />}
            label="Talk to a recruiter"
            value={company.phone}
            sub="Mon – Sat · 9 AM to 7 PM IST"
            href={`tel:${company.phoneRaw}`}
          />
          <Row
            icon={<Mail size={16} />}
            label="Email us"
            value={company.email}
            sub="We respond within 4 business hours"
            href={`mailto:${company.email}`}
          />
          <Row
            icon={<Globe size={16} />}
            label="Visit our website"
            value={company.website}
            sub="Open in a new tab"
            href={company.websiteUrl}
            external
          />
          <Row
            icon={<MapPin size={16} />}
            label="Office hours"
            value="Monday – Saturday"
            sub="9:00 AM – 7:00 PM (IST)"
          />
        </div>
      </div>
    </Reveal>
  );
}

function Row({
  icon,
  label,
  value,
  sub,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  href?: string;
  external?: boolean;
}) {
  const className =
    "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-navy-700/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-700/30 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-navy-400/40";

  const content = (
    <>
      {/* hover sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-navy-700/10 to-transparent transition-all duration-500 group-hover:w-2/3"
      />
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white dark:bg-white/[0.04] dark:text-navy-200">
        {icon}
      </span>
      <div className="relative flex-1">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-navy-700/70 dark:text-navy-300/70">
          {label}
        </p>
        <p className="mt-0.5 font-display text-sm font-semibold text-navy-900 dark:text-white">
          {value}
        </p>
        {sub && (
          <p className="text-[11.5px] text-navy-700/80 dark:text-navy-300/70">
            {sub}
          </p>
        )}
      </div>
      {href && (
        <ArrowRight
          size={14}
          className="relative text-navy-400 transition-all group-hover:translate-x-0.5 group-hover:text-navy-700"
        />
      )}
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

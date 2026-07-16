"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { company, fullAddress } from "@/lib/company";
import { services } from "@/lib/services";
import {
  Mail,
  Phone,
  MapPin,
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  ArrowRight,
} from "@/lib/icons";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-navy-200/60 bg-mist-50 dark:border-white/5 dark:bg-navy-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-radial-fade opacity-50"
      />
      <div className="container relative pb-10 pt-20">
        {/* Top: CTA card */}
        <div className="mb-16 overflow-hidden rounded-4xl border border-navy-200/60 bg-white p-8 ring-border dark:border-white/10 dark:bg-navy-900/60 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Let's build together</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                Ready to scale your workforce or your product?
              </h2>
              <p className="mt-3 max-w-lg text-navy-700 dark:text-navy-200/80">
                Schedule a free 30-minute consultation with our enterprise team.
                Get a tailored proposal within 48 hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link href="/careers" className="btn-ghost">
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Mid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-700 dark:text-navy-200/80">
              {company.legalName} — a modern recruitment, consulting,
              outsourcing and software development partner for forward-thinking
              enterprises across India and the world.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`tel:${company.phoneRaw}`}
                className="group flex items-start gap-3 text-navy-800 transition-colors hover:text-navy-900 dark:text-navy-200"
              >
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-navy-100 text-navy-700 group-hover:bg-navy-700 group-hover:text-navy-900 dark:bg-white/[0.04] dark:text-navy-200">
                  <Phone size={14} />
                </span>
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-3 break-all text-navy-800 transition-colors hover:text-navy-900 dark:text-navy-200"
              >
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-navy-100 text-navy-700 group-hover:bg-navy-700 group-hover:text-navy-900 dark:bg-white/[0.04] dark:text-navy-200">
                  <Mail size={14} />
                </span>
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-navy-800 dark:text-navy-200">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-navy-100 text-navy-700 dark:bg-white/[0.04] dark:text-navy-200">
                  <MapPin size={14} />
                </span>
                <span className="leading-relaxed">{fullAddress}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn
              title="Services"
              links={services.slice(0, 6).map((s) => ({
                label: s.name,
                href: `/services/${s.slug}`,
              }))}
            />
            <FooterColumn
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Newsroom", href: "/about#timeline" },
                { label: "Leadership", href: "/about#leadership" },
              ]}
            />
            <FooterColumn
              title="Resources"
              links={[
                { label: "Job Board", href: "/careers" },
                { label: "Apply Now", href: "/careers" },
                { label: "Refer Talent", href: "/contact" },
                { label: "Hire with Us", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-navy-200/60 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-navy-900 dark:text-white">
              Get the Logos Trinity briefing
            </p>
            <p className="mt-1 text-sm text-navy-700 dark:text-navy-200/80">
              Monthly market signals on talent, tech and transformation.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="flex w-full max-w-md items-center gap-2"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 flex-1 rounded-full border border-navy-200 bg-white px-4 text-sm text-navy-900 placeholder:text-navy-600/50 focus:border-navy-700 focus:outline-none dark:border-white/10 dark:bg-navy-950/50 dark:text-white dark:placeholder:text-navy-300/40"
            />
            <button
              type="submit"
              className="btn-primary !px-5 !py-2.5 text-sm"
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-navy-200/60 pt-6 text-xs text-navy-600 dark:border-white/5 dark:text-navy-300/70 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved. Headquartered in Visakhapatnam, Andhra Pradesh — India.
          </p>
          <div className="flex items-center gap-2">
            <SocialIcon href={company.social.linkedin} label="LinkedIn">
              <LinkedIn size={14} />
            </SocialIcon>
            <SocialIcon href={company.social.twitter} label="X / Twitter">
              <Twitter size={14} />
            </SocialIcon>
            <SocialIcon href={company.social.instagram} label="Instagram">
              <Instagram size={14} />
            </SocialIcon>
            <SocialIcon href={company.social.facebook} label="Facebook">
              <Facebook size={14} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-600 dark:text-navy-300/80">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-sm text-navy-800 transition-colors hover:text-navy-900 dark:text-navy-100 dark:hover:text-white"
            >
              {l.label}
              <ArrowRight
                size={12}
                className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-navy-700/40 hover:text-navy-900 dark:border-white/10 dark:text-navy-200"
    >
      {children}
    </a>
  );
}

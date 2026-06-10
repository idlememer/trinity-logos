"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, X, ArrowRight } from "@/lib/icons";
import { company } from "@/lib/company";

export function FloatingContactPanel() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact panel" : "Open contact panel"}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-glow-orange transition-transform hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, #FF924D 0%, #FF7A00 50%, #E66A00 100%)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "phone"}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            {open ? <X size={22} /> : <Phone size={22} />}
          </motion.span>
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inset-0 rounded-full bg-flame-300 animate-ping" />
            <span className="absolute inset-0.5 rounded-full bg-white" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-40 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-navy-200/60 bg-white/95 p-6 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-navy-950/95"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                  We're online
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  Talk to our team
                </h3>
              </div>
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                <span className="absolute inset-0 rounded-full bg-emerald-500" />
              </span>
            </div>
            <p className="text-sm leading-relaxed text-navy-700 dark:text-navy-200/80">
              Recruitment, consulting, or technology — reach the right specialist
              in under 60 seconds.
            </p>

            <div className="mt-5 space-y-2">
              <ContactRow
                icon={<Phone size={14} />}
                label="Call now"
                value={company.phone}
                href={`tel:${company.phoneRaw}`}
              />
              <ContactRow
                icon={<Mail size={14} />}
                label="Email recruiter"
                value={company.email}
                href={`mailto:${company.email}`}
              />
              <ContactRow
                icon={<MapPin size={14} />}
                label="Visit office"
                value="HB Colony, PM Palem, Visakhapatnam"
                href="/contact"
              />
            </div>

            <a
              href="/contact"
              className="btn-primary mt-5 w-full !py-2.5 text-sm"
            >
              Book a consultation
              <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-navy-200/60 hover:bg-mist-50 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-100 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white dark:bg-white/[0.04] dark:text-navy-200">
        {icon}
      </span>
      <div className="flex-1 text-left">
        <p className="text-[11px] uppercase tracking-wider text-navy-600/70 dark:text-navy-300/70">
          {label}
        </p>
        <p className="text-sm font-medium text-navy-900 dark:text-white">
          {value}
        </p>
      </div>
      <ArrowRight
        size={14}
        className="text-navy-400 transition-all group-hover:translate-x-0.5 group-hover:text-navy-700"
      />
    </a>
  );
}

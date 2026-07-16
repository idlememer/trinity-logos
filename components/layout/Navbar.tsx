"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown, ArrowRight } from "@/lib/icons";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  mega?: "services" | null;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: "services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScroll = React.useRef(0);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 32);

    const delta = v - lastScroll.current;

    // Always show near the top of the page
    if (v < 50) {
      setHidden(false);
    }
    // Scrolling down (past a small hysteresis threshold) → hide
    else if (delta > 5 && v > 120 && !mobileOpen && megaOpen === null) {
      setHidden(true);
    }
    // Even the slightest scroll up → show
    else if (delta < -2) {
      setHidden(false);
    }

    lastScroll.current = v;
  });

  React.useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [pathname]);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = (k: string | null) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMegaOpen(k);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(null), 120);
  };

  return (
    <motion.div
      animate={{
        y: hidden ? -110 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        y: { type: "spring", stiffness: 130, damping: 26, mass: 0.75 },
        opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ pointerEvents: hidden ? "none" : "auto" }}
      className="fixed inset-x-0 top-0 z-50 will-change-transform"
      onMouseLeave={scheduleClose}
    >
      <div
        className={cn(
          "flex justify-center px-3 transition-all duration-500 sm:px-6",
          scrolled ? "pt-3 lg:pt-4" : "pt-5 lg:pt-7"
        )}
      >
        <motion.header
          layout
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex w-full max-w-7xl items-center justify-between overflow-visible rounded-full border px-4 py-2.5 transition-colors duration-300 sm:px-5 lg:px-7 lg:py-3.5",
            scrolled
              ? "border-navy-700/15 bg-white shadow-[0_4px_16px_-8px_rgba(0,28,102,0.15)] dark:border-white/10 dark:bg-navy-950"
              : "border-navy-700/10 bg-white dark:border-white/10 dark:bg-navy-950"
          )}
        >
          <Logo size="sm" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href ||
                pathname?.startsWith(item.href + "/");
              const triggers = item.mega === "services";
              return (
                <div
                  key={item.href}
                  onMouseEnter={() => openMega(item.mega ?? null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={() => openMega(null)}
                    className={cn(
                      "group relative inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-[20px] font-medium transition-colors",
                      active
                        ? "text-navy-900 dark:text-white"
                        : "text-navy-800 hover:text-navy-900 dark:text-navy-100 dark:hover:text-white"
                    )}
                  >
                    {item.label}
                    {item.mega && (
                      <ChevronDown
                        size={18}
                        className={cn(
                          "opacity-60 transition-transform duration-300",
                          triggers && megaOpen === "services" && "rotate-180"
                        )}
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-navy-700/10 ring-1 ring-navy-700/25 dark:bg-white/10 dark:ring-white/20"
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 lg:gap-3">
            <ThemeToggle className="hidden md:inline-flex lg:h-12 lg:w-12 lg:[&_svg]:scale-110" />
            <Link
              href="/careers"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-navy-700/15 bg-white px-4 py-2 text-[13px] font-medium text-navy-800 transition-colors hover:border-navy-700/40 hover:bg-navy-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-100 dark:hover:bg-white/[0.08] lg:gap-2 lg:px-5 lg:py-3 lg:text-base"
            >
              Browse Jobs
            </Link>
            <Link
              href="/contact"
              aria-label="Join Us Now — go to contact"
              className="hidden md:inline-flex btn-primary items-center !gap-2.5 !px-5 !py-2 lg:!px-6 lg:!py-2.5"
            >
              <span className="flex flex-col items-start leading-[1.1] text-left">
                <span className="text-[13px] font-semibold uppercase tracking-wide lg:text-[15px]">
                  Join Us
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-90 lg:text-[13px]">
                  Now
                </span>
              </span>
              <ArrowRight size={16} className="lg:hidden" />
              <ArrowRight size={18} className="hidden lg:inline" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-700/15 text-navy-800 lg:hidden dark:border-white/10 dark:text-navy-100"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mega menu — sibling of header, centered on viewport.
          Positioning (translate-x) goes on the outer div; motion handles the
          enter/exit transform separately so the two can't clobber each other. */}
      <div
        className="pointer-events-none absolute left-1/2 top-full hidden w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 lg:block"
        aria-hidden={megaOpen !== "services"}
      >
        <AnimatePresence>
          {megaOpen === "services" && (
            <motion.div
              key="mega"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto pt-3"
              onMouseEnter={() => openMega("services")}
              onMouseLeave={scheduleClose}
            >
              <div className="overflow-hidden rounded-3xl border border-navy-700/10 bg-white/95 p-7 shadow-soft backdrop-blur-2xl ring-border dark:border-white/10 dark:bg-navy-950/95">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                  <p className="text-[10.5px] uppercase tracking-[0.18em] text-navy-700 dark:text-navy-300">
                    Our practice
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-tight text-navy-900 dark:text-white">
                    From talent to technology — one trusted partner.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700 dark:text-navy-200/80">
                    Nine practice areas, one delivery standard. Scale your
                    workforce, modernize your stack, transform your business.
                  </p>
                  <Link
                    href="/services"
                    onClick={() => openMega(null)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
                  >
                    Explore all services <ArrowRight size={14} />
                  </Link>
                </div>
                <ul className="col-span-8 grid grid-cols-2 gap-1.5">
                  {services.slice(0, 8).map((s, i) => (
                    <motion.li
                      key={s.slug}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.03 + i * 0.025,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={() => openMega(null)}
                        className="group relative flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-navy-700/10 hover:bg-mist-100 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-[10px] font-semibold text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white dark:bg-white/[0.04] dark:text-navy-200">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-navy-900 dark:text-white">
                              {s.name}
                            </p>
                            <ArrowRight
                              size={13}
                              className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </div>
                          <p className="mt-0.5 line-clamp-1 text-[11.5px] text-navy-700/70 dark:text-navy-300/70">
                            {s.short}
                          </p>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/85 backdrop-blur-xl dark:bg-navy-950/80 lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-20 rounded-3xl border border-navy-700/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-navy-950/95"
            >
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium",
                      pathname?.startsWith(item.href)
                        ? "bg-navy-700/10 text-navy-900 dark:bg-white/10 dark:text-white"
                        : "text-navy-800 hover:bg-mist-100 dark:text-navy-100 dark:hover:bg-white/[0.04]"
                    )}
                  >
                    {item.label}
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex items-center justify-between gap-3">
                <ThemeToggle />
                <Link
                  href="/contact"
                  aria-label="Join Us Now — go to contact"
                  className="btn-primary flex-1 items-center !gap-2.5 !py-2.5"
                >
                  <span className="flex flex-col items-start leading-[1.1] text-left">
                    <span className="text-[13px] font-semibold uppercase tracking-wide">
                      Join Us
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-90">
                      Now
                    </span>
                  </span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

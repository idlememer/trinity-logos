"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/ui/Marquee";
import { Star } from "@/lib/icons";
import { testimonials, type Testimonial } from "@/lib/testimonials";

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section id="testimonials" className="section">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>What partners say</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white">
              Stories from leaders who've
              <span className="text-gradient-blue"> scaled with us.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 space-y-6">
            <Marquee
              speed={50}
              items={row1.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            />
            <Marquee
              speed={62}
              reverse
              items={row2.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="glass-strong relative w-[min(440px,calc(100vw-3rem))] shrink-0 rounded-3xl p-6 ring-border">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-navy-700 dark:text-navy-300" />
        ))}
      </div>
      <p className="mt-4 text-[14.5px] leading-relaxed text-navy-900 dark:text-white/95">
        "{t.quote}"
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-navy-200/60 pt-4 dark:border-white/5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-600 to-navy-800 text-[12px] font-semibold text-white">
          {t.name
            .split(" ")
            .map((p) => p[0])
            .join("")}
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-900 dark:text-white">
            {t.name}
          </p>
          <p className="text-[11.5px] text-navy-600 dark:text-navy-300/80">
            {t.role} · {t.company}
          </p>
        </div>
        <span className="ml-auto rounded-full border border-navy-200/60 bg-mist-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-navy-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-200">
          {t.industry}
        </span>
      </div>
    </article>
  );
}

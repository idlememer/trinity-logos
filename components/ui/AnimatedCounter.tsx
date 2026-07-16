"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  format?: (v: number) => string;
};

/**
 * Counts up from `from` to `to` when the element scrolls into view.
 * Renders the FINAL `to` value on SSR/first paint so search engines,
 * screen readers, and users above-the-fold never see a stale "0".
 * The animation only kicks in when the element is actually scrolled to.
 */
export function AnimatedCounter({
  to,
  from = 0,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className,
  format,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  const fmt = React.useCallback(
    (v: number) =>
      `${prefix}${format ? format(v) : v.toLocaleString("en-IN")}${suffix}`,
    [prefix, suffix, format]
  );

  React.useEffect(() => {
    if (!inView || !ref.current || reduce) return;
    const node = ref.current;
    // Snap to start value, then animate up to `to`.
    node.textContent = fmt(from);
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        node.textContent = fmt(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, fmt, reduce]);

  return (
    <span ref={ref} className={className}>
      {fmt(to)}
    </span>
  );
}

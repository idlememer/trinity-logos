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

  React.useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const start = reduce ? to : from;
    const controls = animate(start, to, {
      duration: reduce ? 0 : duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        const v = Math.round(value);
        node.textContent = `${prefix}${
          format ? format(v) : v.toLocaleString("en-IN")
        }${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, prefix, suffix, format, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {from}
      {suffix}
    </span>
  );
}

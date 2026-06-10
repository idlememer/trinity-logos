"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  type = "button",
  ariaLabel,
}: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px * 0.25);
    y.set(py * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    variant === "primary" ? "btn-primary" : "btn-ghost";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(base, "select-none", className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-block">
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

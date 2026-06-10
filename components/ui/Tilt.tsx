"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /** Scale on hover (1 = no scale) */
  scale?: number;
  /** Show a hover glow on top */
  glow?: boolean;
};

/**
 * Pointer-tracked 3D tilt wrapper. Subtle by default — meant for hero visuals
 * and feature cards, not every element.
 */
export function Tilt({
  children,
  className,
  max = 6,
  scale = 1.01,
  glow = true,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduce ? undefined : { scale }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className={cn("relative", className)}
    >
      {glow && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] opacity-0 blur-3xl transition-opacity duration-500 hover:opacity-100"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0,56,184,0.18), transparent 70%)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft custom cursor glow that follows the pointer on desktop. Tracks
 * `hover` state of nearest interactive ancestor for size/colour tweaks.
 * Falls back to default cursor on touch / coarse pointers.
 */
export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });
  const [hovering, setHovering] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  React.useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
      );
      setHovering(!!interactive);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{
            width: hovering ? 56 : 20,
            height: hovering ? 56 : 20,
            opacity: hovering ? 0.55 : 0.8,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,122,0,0.55) 0%, rgba(255,122,0,0) 70%)",
            filter: "blur(2px)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{
            width: hovering ? 10 : 6,
            height: hovering ? 10 : 6,
            backgroundColor: hovering ? "#FF7A00" : "#FFFFFF",
          }}
          transition={{ duration: 0.18 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
        />
      </motion.div>
    </>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** color of the spotlight (rgba or hex). Defaults to orange tint. */
  color?: string;
  /** size of the spotlight in px (diameter) */
  size?: number;
};

/**
 * A mouse-tracked spotlight effect. Wrap any card; on hover a soft radial
 * gradient follows the cursor inside the element's bounds.
 */
export function Spotlight({
  children,
  className,
  color = "rgba(255,122,0,0.18)",
  size = 360,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: -1000, y: -1000 });
  const [active, setActive] = React.useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseMove={handleMove}
      onMouseLeave={() => setActive(false)}
      className={cn("group/spotlight relative", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 50%)`,
          opacity: active ? 1 : 0,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

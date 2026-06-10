"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  items: React.ReactNode[];
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: number; // seconds per loop
};

export function Marquee({
  items,
  className,
  pauseOnHover = true,
  reverse = false,
  speed = 40,
}: Props) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden mask-fade-r",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-12",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

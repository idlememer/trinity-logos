import * as React from "react";
import { cn } from "@/lib/utils";

export function GridBackdrop({
  className,
  fade = true,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        fade && "mask-fade-b",
        className
      )}
    >
      <div className="absolute inset-0 grid-bg" />
    </div>
  );
}

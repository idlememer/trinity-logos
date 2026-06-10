import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 shadow-sm",
        "dark:border-white/10 dark:bg-white/[0.04] dark:text-navy-200",
        className
      )}
    >
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inset-0 rounded-full bg-navy-700" />
        <span className="absolute inset-0 rounded-full bg-navy-700 animate-ping opacity-75" />
      </span>
      {children}
    </span>
  );
}

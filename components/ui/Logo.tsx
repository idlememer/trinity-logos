import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** "full" = mark + wordmark text | "mark" = mark image only */
  variant?: "full" | "mark";
  href?: string | null;
  size?: "sm" | "md" | "lg";
};

/**
 * Brand logo: image mark from /public/logo.png + wordmark text alongside.
 * Sizes are intentionally generous — the brand should read at a glance.
 */
export function Logo({
  className,
  variant = "full",
  href = "/",
  size = "md",
}: LogoProps) {
  const dims =
    size === "sm"
      ? {
          // Used in the navbar — modest on mobile, doubled on lg+ per request.
          h: "h-12 lg:h-24",
          hpx: 96,
          title: "text-[17px] lg:text-[34px]",
          sub: "text-[10.5px] lg:text-[18px]",
          gap: "gap-3 lg:gap-5",
        }
      : size === "lg"
      ? {
          h: "h-16",
          hpx: 64,
          title: "text-2xl",
          sub: "text-[12px]",
          gap: "gap-3.5",
        }
      : {
          h: "h-14",
          hpx: 56,
          title: "text-xl",
          sub: "text-[11.5px]",
          gap: "gap-3",
        };

  const inner = (
    <span className={cn("flex items-center", dims.gap, className)}>
      <Image
        src="/logo.png"
        alt="Logos Trinity Technologies LLP"
        width={dims.hpx}
        height={dims.hpx}
        priority
        sizes="(min-width: 1024px) 64px, 56px"
        className={cn(
          dims.h,
          "w-auto object-contain transition-transform duration-300 group-hover/logo:scale-[1.04]"
        )}
      />
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-navy-900 dark:text-white",
              dims.title
            )}
          >
            Logos Trinity
          </span>
          <span
            className={cn(
              "mt-1.5 font-medium uppercase tracking-[0.22em] text-navy-700/70 dark:text-navy-200/70",
              dims.sub
            )}
          >
            Technologies LLP
          </span>
        </span>
      )}
    </span>
  );

  if (!href) return inner;
  return (
    <Link
      href={href}
      aria-label="Logos Trinity Technologies — Home"
      className="group/logo inline-flex items-center"
    >
      {inner}
    </Link>
  );
}

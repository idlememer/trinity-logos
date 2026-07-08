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
 * Both wordmark lines share the same left edge for clean alignment.
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
          h: "h-14 lg:h-20",
          hpx: 80,
          title: "text-[19px] lg:text-[28px]",
          sub: "text-[10px] lg:text-[14px]",
          gap: "gap-3 lg:gap-4",
        }
      : size === "lg"
      ? {
          h: "h-20",
          hpx: 80,
          title: "text-[28px]",
          sub: "text-[14px]",
          gap: "gap-4",
        }
      : {
          h: "h-16",
          hpx: 64,
          title: "text-[22px]",
          sub: "text-[12px]",
          gap: "gap-3.5",
        };

  const inner = (
    <span className={cn("flex items-center", dims.gap, className)}>
      <Image
        src="/logo.png"
        alt="Logos Trinity Technologies LLP"
        width={dims.hpx}
        height={dims.hpx}
        priority
        sizes="(min-width: 1024px) 80px, 56px"
        className={cn(
          dims.h,
          "w-auto object-contain transition-transform duration-300 group-hover/logo:scale-[1.04]"
        )}
      />
      {variant === "full" && (
        <span className="flex flex-col items-start whitespace-nowrap leading-none">
          <span
            className={cn(
              "font-display font-bold uppercase tracking-[0.02em] text-navy-900 dark:text-white",
              dims.title
            )}
          >
            LOGOS TRINITY
          </span>
          <span
            className={cn(
              "mt-1 font-semibold uppercase tracking-[0.14em] text-navy-700/75 dark:text-navy-200/75",
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

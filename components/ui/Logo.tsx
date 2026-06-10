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
 * The image alone is rendered when `variant="mark"`.
 */
export function Logo({
  className,
  variant = "full",
  href = "/",
  size = "md",
}: LogoProps) {
  const dims =
    size === "sm"
      ? { h: "h-10", hpx: 40, title: "text-[15px]", sub: "text-[9.5px]" }
      : size === "lg"
      ? { h: "h-14", hpx: 56, title: "text-lg", sub: "text-[10.5px]" }
      : { h: "h-11", hpx: 44, title: "text-base", sub: "text-[10px]" };

  const inner = (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="Logos Trinity Technologies LLP"
        width={dims.hpx}
        height={dims.hpx}
        priority
        sizes="(min-width: 1024px) 56px, 44px"
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
              "mt-1 font-medium uppercase tracking-[0.22em] text-navy-700/70 dark:text-navy-200/70",
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

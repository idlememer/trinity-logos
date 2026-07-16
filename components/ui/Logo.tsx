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
 * The image is rendered at a comfortable size but with a request-width 2×
 * the display size so it stays crisp on high-DPI screens.
 *
 * In the navbar the surrounding pill uses overflow-visible, so the image
 * can visually overflow the pill (making the mark feel prominent) without
 * inflating the navbar's actual height.
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
          // Rendered bigger than the pill height — allowed to overflow.
          h: "h-16 lg:h-24",
          hpx: 96,
          title: "text-[19px] lg:text-[26px]",
          sub: "text-[10px] lg:text-[13px]",
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
        width={dims.hpx * 2}
        height={dims.hpx * 2}
        priority
        quality={90}
        sizes="(min-width: 1024px) 192px, 128px"
        className={cn(
          dims.h,
          "w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,28,102,0.12)] transition-transform duration-300 group-hover/logo:scale-[1.04]"
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

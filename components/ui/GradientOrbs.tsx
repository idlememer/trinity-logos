import * as React from "react";
import { cn } from "@/lib/utils";

type OrbsProps = {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
};

/**
 * Soft, light Israel-blue gradient orbs over a white canvas.
 * Way more subtle than a typical dark-saas hero — designed to feel airy.
 */
export function GradientOrbs({ className, intensity = "subtle" }: OrbsProps) {
  const opacityClass =
    intensity === "subtle"
      ? "opacity-60 dark:opacity-40"
      : intensity === "strong"
      ? "opacity-90 dark:opacity-70"
      : "opacity-75 dark:opacity-55";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full blur-3xl",
          opacityClass
        )}
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(0,56,184,0.10), transparent 65%)",
        }}
      />
      <div
        className={cn(
          "absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl",
          opacityClass
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,122,0,0.07), transparent 65%)",
        }}
      />
      <div
        className={cn(
          "absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl",
          opacityClass
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(91,130,238,0.08), transparent 65%)",
        }}
      />
    </div>
  );
}

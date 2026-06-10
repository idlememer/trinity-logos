"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { GradientOrbs } from "./GradientOrbs";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-36 lg:pb-20 lg:pt-44">
      <GradientOrbs intensity="subtle" />
      <div className="container relative">
        <div
          className={cn(
            "mx-auto max-w-4xl",
            align === "center" ? "text-center" : "text-left"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>{eyebrow}</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-display-md text-balance font-semibold tracking-tight text-navy-900 dark:text-white lg:text-display-lg"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "mt-6 max-w-2xl text-pretty text-base leading-relaxed text-navy-700 dark:text-navy-200/85 sm:text-lg",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

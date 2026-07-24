"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function Section({
  children,
  index,
  label,
  id,
  className,
  classNameWrapper,
}: {
  children: React.ReactNode;
  /** Sheet index, e.g. "01" — rendered in the mono label row */
  index?: string;
  /** Mono uppercase label, e.g. "Work" */
  label?: string;
  id?: string;
  className?: string;
  classNameWrapper?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className="border-b border-line last:border-b-0 scroll-mt-14"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px 0px" }}
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : { type: "spring", bounce: 0, duration: 0.55 }
      }
    >
      {label && (
        <div className="flex items-baseline justify-between border-b border-line px-5 py-2">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            {index && (
              <span aria-hidden className="text-accent">
                {index}&ensp;
              </span>
            )}
            {label}
          </h2>
          <span
            aria-hidden
            className="font-mono text-[11px] leading-none text-ink-faint select-none"
          >
            +
          </span>
        </div>
      )}
      <div className={cn("p-5", className)}>
        <div className={cn(classNameWrapper)}>{children}</div>
      </div>
    </motion.section>
  );
}

export default Section;

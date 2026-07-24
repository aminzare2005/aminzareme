"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

const RESUME_URL = "/dl/aminzare-resume.pdf";

export function ResumeDownload() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={RESUME_URL}
      download="Amin-Zare-Resume.pdf"
      title="Download Amin Zare resume (PDF)"
      className="mt-2 flex w-full max-w-sm items-center gap-3.5 rounded-xl border border-line bg-surface px-4 py-3.5 text-left transition-colors duration-150 hover:border-ink/25 motion-reduce:transition-none"
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={
        reduceMotion
          ? { duration: 0.15 }
          : { type: "spring", bounce: 0, duration: 0.35 }
      }
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-line text-ink-muted">
        <ArrowDownToLine className="size-4.25" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold leading-tight tracking-tight text-ink">
          AminZare-Resume.PDF
        </span>
        <span className="mt-0.5 block font-mono text-[11px] leading-snug text-ink-faint">
          my cv resume file
        </span>
      </span>
    </motion.a>
  );
}

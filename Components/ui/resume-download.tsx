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
      className="mt-4 flex w-full max-w-sm items-center gap-3.5 rounded-xl border border-black/10 bg-zinc-50/90 px-4 py-3.5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-colors duration-150 hover:bg-zinc-100/90 active:bg-zinc-200/60 supports-backdrop-filter:bg-white/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 motion-reduce:transition-none"
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={
        reduceMotion
          ? { duration: 0.15 }
          : { type: "spring", bounce: 0, duration: 0.35 }
      }
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-black/6 text-gray-700">
        <ArrowDownToLine className="size-4.25" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold leading-tight tracking-tight text-gray-900">
          AminZare-Resume.PDF
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-gray-500">
          my cv resume file
        </span>
      </span>
    </motion.a>
  );
}

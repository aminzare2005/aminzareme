"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Section from "../section";
import type { GitHubStats } from "@/lib/github";

function CountUpStat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `${Math.round(v)}`);
  const [text, setText] = useState("0");

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.jump(0);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on("change", (v) => setText(v));
  }, [display]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 p-4">
      <motion.div
        dir="ltr"
        className="text-5xl font-extrabold tracking-tighter tabular-nums md:text-6xl"
      >
        <span aria-hidden className="text-accent">
          +
        </span>
        {text}
      </motion.div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
    </div>
  );
}

export default function StatusClient({ stats }: { stats: GitHubStats }) {
  const items = [
    { value: stats.followers, label: "github followers" },
    { value: stats.publicRepos, label: "github projects" },
  ];

  return (
    <Section id="status" index="04" label="Numbers" className="p-0">
      <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-2 md:divide-y-0 md:divide-x">
        {items.map((item) => (
          <CountUpStat key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </Section>
  );
}

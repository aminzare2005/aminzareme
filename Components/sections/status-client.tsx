"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Section from "../section";
import type { GitHubStats } from "@/lib/github";

function CountUpStat({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `+${Math.round(v)}`);
  const [text, setText] = useState("+0");

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on("change", (v) => setText(v));
  }, [display]);

  return (
    <div ref={ref} className="flex p-2 justify-center items-center flex-col">
      <motion.div
        dir="ltr"
        className="md:text-7xl text-5xl font-extrabold tracking-tight drop-shadow-2xl"
      >
        {text}
      </motion.div>
      <p>{label}</p>
    </div>
  );
}

export default function StatusClient({ stats }: { stats: GitHubStats }) {
  const items = [
    { value: stats.followers, label: "Github Followers" },
    { value: stats.publicRepos, label: "Github Projects" },
  ];

  return (
    <Section id="status">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        {items.map((item) => (
          <CountUpStat key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </Section>
  );
}

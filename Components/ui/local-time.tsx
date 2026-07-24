"use client";

import { useEffect, useState } from "react";

function formatTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Tehran",
  }).format(new Date());
}

/** Amin's local time — small proof of a real human on the other side. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime());
    const interval = setInterval(() => setTime(formatTime()), 15_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      IRAN, shiraz&nbsp;{time ?? "--:--"}
    </span>
  );
}

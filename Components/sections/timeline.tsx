import Section from "../section";

const MILESTONES = [
  {
    year: "2023",
    title: "Good but not for me!",
    description:
      "My first income was from Instagram brands that got millions of views.",
  },
  {
    year: "2024",
    title: "Time to earn",
    description:
      "I started learning modern frontend tech like Next.js, Tailwind & Expo.",
  },
  {
    year: "2025",
    title: "Real career starts",
    description:
      "I joined different startups, made connections, bootcamps, and learned PM basics.",
  },
  {
    year: "2026",
    title: "JUST BUILD IT",
    description:
      "Launching products, building teams, going all-in on business.",
  },
] as const;

function Timeline() {
  return (
    <Section id="path" index="02" label="Path">
      <ol className="relative ms-2 space-y-2 border-s border-line ps-6">
        {MILESTONES.map((milestone, i) => (
          <li key={milestone.year} className="relative">
            <span
              aria-hidden
              className={`absolute flex -inset-s-6 top-1.25 size-4 -translate-x-1/2 select-none items-center justify-center bg-surface font-mono text-sm leading-none ${
                i === MILESTONES.length - 1 ? "text-accent" : "text-ink-faint"
              }`}
            >
              ✶
            </span>
            <time className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              {milestone.year}
            </time>
            <h3 className="mt-0.5 font-bold tracking-tight">
              {milestone.title}
            </h3>
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-ink-muted">
              {milestone.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Timeline;

import Image from "next/image";
import Section from "../section";
import { WORK_ITEMS } from "@/constants/items";
import { ArrowUpRight } from "lucide-react";

function Work() {
  return (
    <Section id="work" index="01" label="Work" className="p-0">
      <ul className="divide-y divide-line">
        {WORK_ITEMS.map((item) => (
          <li key={item.company} className="flex gap-3.5 px-5 py-4">
            <Image
              src={item.image}
              alt={item.company}
              width={60}
              height={60}
              draggable="false"
              className="mt-0.5 size-10 shrink-0 rounded-lg ring-1 ring-line"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <b className="text-[15px] tracking-tight">{item.position}</b>
                <span className="font-mono text-xs text-ink-faint">
                  {item.company}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
              {item.link && (
                <a
                  className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link.href}
                >
                  {item.link.title}
                  <ArrowUpRight className="size-3.5 text-ink-faint" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Work;

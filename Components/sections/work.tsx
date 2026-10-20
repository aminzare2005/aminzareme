import Image from "next/image";
import Section from "../section";
import { WORK_ITEMS } from "@/constants/items";
import { ArrowUpRight } from "lucide-react";

function Work() {
  return (
    <Section id="work" index="01" label="Work" className="p-0">
      <ul className="divide-y divide-line">
        {WORK_ITEMS.map((item) => (
          <li key={item.company} className="flex items-center gap-3.5 px-5 py-4">
            <Image
              src={item.image}
              alt={item.company}
              width={60}
              height={60}
              draggable="false"
              className="size-8 shrink-0 rounded-lg ring-1 mb-0.5 ring-line"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <b className="text-[14px] tracking">{item.position}</b>
                <span className="font-mono tracking-wider text-sm text-ink-faint">
                  {item.company}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Work;

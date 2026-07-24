import Section from "../section";
import { COMMUNITY_ITEMS } from "@/constants/items";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Communities() {
  return (
    <Section id="communities" index="03" label="Communities" className="p-0">
      <ul className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-line sm:divide-y-0 sm:divide-x">
        {COMMUNITY_ITEMS.map((item) => (
          <li key={item.name}>
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-3.5 px-5 py-4 transition-colors duration-150 hover:bg-ink/[0.03] active:scale-[0.99] motion-reduce:active:scale-100"
            >
              <Image
                draggable={false}
                width={56}
                height={56}
                src={item.logo || ""}
                alt={item.name}
                className="size-11 shrink-0 rounded-lg object-contain ring-1 ring-line"
              />
              <div className="min-w-0 flex-1">
                <b className="block truncate text-[15px] tracking-tight">
                  {item.name}
                </b>
                <span className="font-mono text-xs text-ink-faint">
                  {item.role}
                </span>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-ink-faint transition-colors group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

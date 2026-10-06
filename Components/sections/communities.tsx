import Section from "../section";
import { COMMUNITY_ITEMS } from "@/constants/items";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Communities() {
  return (
    <Section id="communities" index="03" label="Communities" className="p-0">
      <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {COMMUNITY_ITEMS.map((item) => (
          <li key={item.name}>
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full items-center gap-2 overflow-hidden px-5 py-4 transition-[transform] duration-150 active:scale-[0.99] motion-reduce:active:scale-100"
              style={{
                background: `linear-gradient(to right, #${item.color}10, #${item.color}05)`,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                style={{
                  background: `linear-gradient(to right, #${item.color}05, #${item.color}12)`,
                }}
              />
              <Image
                draggable={false}
                width={56}
                height={56}
                src={item.logo || ""}
                alt={item.name}
                className="relative size-11 shrink-0 rounded-lg object-contain"
              />
              <div className="relative flex min-w-0 flex-1 flex-col">
                <b className="block truncate text-[15px] tracking-tight">
                  {item.name}
                </b>
                <span className="font-mono text-xs text-ink-faint">
                  {item.role}
                </span>
              </div>
              <ArrowUpRight className="relative size-4 shrink-0 text-ink-faint transition-colors duration-200" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

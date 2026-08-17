import React from "react";
import Section from "../section";
import { COMMUNITY_ITEMS } from "@/constants/items";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

function CommunityCard({ item }: { item: (typeof COMMUNITY_ITEMS)[number] }) {
  return (
    <Link
      href={item.link.href}
      target="_blank"
      draggable="false"
      rel="noopener noreferrer"
      style={{
        background: `linear-gradient(160deg, #${item.color}20 0%, #ffffff 70%)`,
      }}
      className={cn(
        "flex flex-col gap-3 overflow-hidden p-4 border-b sm:border-b-0 sm:border-r border-black/5 last:border-0 md:p-5",
      )}
    >
      <div className="flex w-full items-center gap-3">
        <Image
          draggable={false}
          width={56}
          height={56}
          src={item.logo || ""}
          alt={item.name}
          className="size-12 shrink-0 rounded-lg object-contain md:size-14"
        />

        <div className="min-w-0 flex flex-col">
          <b className="text-lg">{item.name}</b>
          <span className="tracking-wider text-sm font-light opacity-85">
            {item.role}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Communities() {
  return (
    <Section
      id="communities"
      className="p-0"
      classNameWrapper="grid grid-cols-1 sm:grid-cols-2"
    >
      {COMMUNITY_ITEMS.map((item) => (
        <CommunityCard key={item.name} item={item} />
      ))}
    </Section>
  );
}

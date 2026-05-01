import React from "react";
import Section from "../section";
import { COMMUNITY_ITEMS } from "@/constants/items";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Communities() {
  return (
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {COMMUNITY_ITEMS.map((item, i) => (
          <div
            key={item.name}
            className={cn(
              "relative flex flex-col w-full group justify-between items-center border overflow-hidden border-black/10 rounded-xl hover:translate-y-px duration-300",
            )}
          >
            <div
              className="w-full bg-linear-to-b h-full flex justify-center items-center"
              style={{
                background: `linear-gradient(to bottom, #${item.color}20 0%, rgba(0,0,0,0) 100%)`,
              }}
            >
              <Image
                draggable={false}
                width={150}
                height={150}
                src={item.logo || ""}
                alt={item.name}
                className={cn("w-full h-auto px-6 md:px-12 pt-4")}
              />
            </div>
            <div className="p-4 z-10 flex flex-col justify-center items-center">
              <b className="text-lg">{item.name}</b>
              <p className="opacity-85 leading-tight">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../section";
import { WORK_ITEMS } from "@/constants/items";
import { Link2Icon } from "lucide-react";

function Work() {
  return (
    <Section classNameWrapper="flex flex-col gap-4">
      {WORK_ITEMS.map((item, i) => (
        <div
          key={item.compony}
          className="bg-white p-6 border border-black/10 rounded-xl hover:translate-y-px duration-300"
        >
          <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.compony}
                    width={60}
                    height={60}
                    draggable="false"
                    className="size-10 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <b>{item.position}</b>
                    <span className="tracking-wider text-sm font-light opacity-85">
                      {item.compony}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="opacity-85">{item.description}</p>
                {item.link && (
                  <Link
                    className="flex py-1 gap-1 text-blue-500 text-sm w-fit"
                    target="_blank"
                    href={item.link.href}
                  >
                    <Link2Icon size={18} />
                    {item.link.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Work;

import Image from "next/image";
import Link from "next/link";
import Section from "../section";
import { WORK_ITEMS } from "@/constants/items";
import { Link2Icon } from "lucide-react";

function Work() {
  return (
    <Section id="work" classNameWrapper="flex flex-col gap-4">
      {WORK_ITEMS.map((item) => (
        <div
          key={item.company}
          className="bg-white p-4 border border-black/10 rounded-xl hover:translate-y-px duration-300"
        >
          <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.company}
                    width={60}
                    height={60}
                    draggable="false"
                    className="size-10 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <b>{item.position}</b>
                    <span className="tracking-wider text-sm font-light opacity-85">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="opacity-85">{item.description}</p>
                {item.link && (
                  <Link
                    className="flex mt-1 gap-1 text-blue-500 text-sm w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
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

import { PROJECTS_ITEMS } from "@/constants/items";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

function Projects() {
  return (
    <Section
      title="Projects"
      classNameWrapper="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {PROJECTS_ITEMS.map((item, i) => (
        <div
          key={i}
          className="flex flex-col w-full group justify-between items-center bg-white border overflow-hidden border-black/10 rounded-xl hover:translate-y-px duration-300"
        >
          <div className="flex flex-col w-full gap-2">
            {/* بخش تصویر یا ویدیو */}
            {/* replace hidden w flex */}
            <div className="w-full hidden justify-start bg-zinc-100">
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={160}
                draggable="false"
                className="w-full group-hover:scale-103 duration-300 object-cover aspect-video rounded-t-xl"
              />
            </div>
            <div className="flex flex-col px-4 pt-4">
              <div className="inline-flex w-full justify-start rtl:justify-end mb-1 gap-2 flex-wrap">
                {item.items.map((ii, i) => (
                  <div
                    className="px-1 font-mono bg-black/5 border border-black/20 opacity-80 text-sm rounded-sm"
                    key={i}
                  >
                    {ii}
                  </div>
                ))}
              </div>
              <b className="text-lg">{item.title}</b>
              <p className="opacity-85 leading-tight">{item.description}</p>
            </div>
          </div>

          {/* بخش محتوا */}
          {/* replace hidden w flex */}
          <div className="w-full flex flex-col gap-1 px-4 pb-2">
            <Link
              className="self-start py-1 gap-1 flex justify-start text-blue-500 items-center text-sm hover:text-blue-700 transition-colors"
              target="_blank"
              href={item.link.href}
            >
              <Link2Icon size={18} />
              {item.link.title}
            </Link>
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Projects;

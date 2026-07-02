import { PROJECTS_ITEMS } from "@/constants/items";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, Link2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

function ProjectCard({
  item,
  featured = false,
}: {
  item: (typeof PROJECTS_ITEMS)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-full group justify-between items-center bg-white border overflow-hidden border-black/10 rounded-xl hover:translate-y-px duration-300 py-3",
        featured && "md:col-span-1",
      )}
    >
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col px-4">
          <div className="inline-flex w-full justify-start rtl:justify-end mb-1 gap-2 flex-wrap">
            {featured && (
              <div className="px-1 font-mono bg-green-200 text-green-900 border-green-950/10 border text-sm rounded-sm">
                featured
              </div>
            )}
            {item.stack.map((tag) => (
              <div
                className="px-1 font-mono bg-black/5 border border-black/20 opacity-80 text-sm rounded-sm"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
          <b className="text-lg">{item.title}</b>
          <p className="opacity-85 leading-tight">{item.description}</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 px-4">
        <Link
          className="flex py-1 gap-1 text-blue-500 text-sm w-fit"
          target="_blank"
          rel="noopener noreferrer"
          href={item.link.href}
        >
          <Link2Icon size={18} />
          {item.link.title}
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      classNameWrapper="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {PROJECTS_ITEMS.map((item) => (
        <ProjectCard key={item.slug} item={item} />
      ))}
    </Section>
  );
}

export default Projects;

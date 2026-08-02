import { PROJECTS_ITEMS } from "@/constants/items";
import Section from "../section";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

function ProjectCard({
  item,
}: {
  item: (typeof PROJECTS_ITEMS)[number];
}) {
  const isExternal = item.link.href.startsWith("http");

  return (
    <Link
      href={item.link.href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex flex-col w-full group justify-between items-center bg-white border overflow-hidden border-black/10 rounded-xl hover:translate-y-px duration-300 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    >
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col px-4">
          <div className="inline-flex w-full justify-start rtl:justify-end mb-1 gap-2 flex-wrap">
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
        <span className="flex py-1 gap-1 text-blue-500 text-sm w-fit">
          <Link2Icon size={18} />
          {item.link.title}
        </span>
      </div>
    </Link>
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

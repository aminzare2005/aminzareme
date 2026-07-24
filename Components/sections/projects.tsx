import { PROJECTS_ITEMS, type ProjectItem } from "@/constants/items";
import Section from "../section";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function ProjectCard({ item }: { item: ProjectItem }) {
  const isInternal = item.link.href.startsWith("/");
  const Arrow = isInternal ? ArrowRight : ArrowUpRight;

  return (
    <Link
      href={item.link.href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      className={cn(
        "group flex flex-col justify-between gap-5 rounded-xl border border-line bg-surface p-4 transition-[border-color,transform] duration-150 hover:border-ink/25 active:scale-[0.985] motion-reduce:active:scale-100",
        item.featured && "md:col-span-2",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <b className="text-[15px] tracking-tight">{item.title}</b>
          <Arrow className="size-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 motion-reduce:transition-none" />
        </div>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
          {item.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-ink-faint">
        {item.featured && (
          <span className="rounded-sm border border-accent/30 px-1.5 py-0.5 text-accent">
            featured
          </span>
        )}
        {item.stack.map((tag) => (
          <span key={tag} className="rounded-sm border border-line px-1.5 py-0.5">
            {tag}
          </span>
        ))}
        <span className="ms-auto hidden sm:block">{item.link.title}</span>
      </div>
    </Link>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      index="06"
      label="Projects"
      classNameWrapper="grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      {PROJECTS_ITEMS.map((item) => (
        <ProjectCard key={item.slug} item={item} />
      ))}
    </Section>
  );
}

export default Projects;

import Section from "../section";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function Education() {
  return (
    <Section id="education" index="05" label="Certificates" className="p-0">
      <div className="flex gap-3.5 px-5 py-4">
        <Image
          src="/images/be5t.jpg"
          alt="AIPM Touring Bootcamp certificate from be5t.ir"
          width={60}
          height={60}
          draggable="false"
          className="mt-0.5 size-10 shrink-0 rounded-lg ring-1 ring-line"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <b className="text-[15px] tracking-tight">AIPM</b>
            <span className="font-mono text-xs text-ink-faint">
              touring bootcamp — be5t.ir
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            learned the basics of PM and AIPM with guidance from top industry
            mentors
          </p>
          <a
            className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            target="_blank"
            rel="noopener noreferrer"
            href="https://be5t.ir/validation/cert?id=aa54c49a-86ea-4863-a500-98998cb23912"
          >
            visit certificate
            <ArrowUpRight className="size-3.5 text-ink-faint" />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Education;

import Section from "../section";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CERT_URL =
  "https://be5t.ir/validation/cert?id=aa54c49a-86ea-4863-a500-98998cb23912";

function Education() {
  return (
    <Section id="education" index="05" label="Certificates" className="p-0">
      <div className="flex gap-3.5 px-5 py-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <b className="text-[14px] tracking-tight">AIPM</b>
            <span className="font-mono tracking-wider text-xs text-ink-faint">
              Touring Bootcamp @ BE5T.IR
            </span>
          </div>
          <p className="text-sm leading-relaxed text-ink-muted">
            learned the basics of PM and AIPM with guidance from top industry
            mentors
          </p>
          <a
            className="inline-flex items-center gap-1 text-sm link-styling"
            target="_blank"
            rel="noopener noreferrer"
            href="https://be5t.ir/validation/cert?id=aa54c49a-86ea-4863-a500-98998cb23912"
          >
            visit certificate
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Education;

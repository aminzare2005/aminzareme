import Section from "../section";
import CalculateAge from "../calculateAge";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, OPEN_TO_WORK } from "@/constants/site";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LocalTime } from "../ui/local-time";

const TAGS = [
  "digital creator",
  "product manager",
  "frontend developer",
] as const;

async function Hero() {
  return (
    <Section id="hero" className="p-0">
      <div className="overflow-hidden">
        {/* Status ticker — signal that this page is alive */}
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em]">
          {OPEN_TO_WORK ? (
            <span className="flex min-w-0 items-center gap-2 text-accent">
              <span className="relative flex size-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              <span className="truncate">open to collab</span>
            </span>
          ) : (
            <span className="flex min-w-0 items-center gap-2 text-ink-faint">
              <span
                aria-hidden
                className="inline-flex size-1.5 shrink-0 rounded-full bg-ink-faint"
              />
              <span className="truncate">fully booked — busy shipping</span>
            </span>
          )}
          <span className="shrink-0 text-ink-faint">
            <LocalTime />
          </span>
        </div>

        {/* Identity */}
        <div className="flex flex-col items-center gap-5 px-5 py-8 text-center">
          <div className="relative size-28 shrink-0 md:size-32">
            <Image
              draggable="false"
              className="rounded-2xl object-cover"
              alt="Portrait of Amin Zare"
              src="https://github.com/aminzare2005.png"
              fill
              sizes="128px"
              loading="eager"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-line"
            />
          </div>

          <div className="mx-auto max-w-sm">
            <h1 className="text-3xl font-extrabold tracking-tighter text-ink md:text-4xl">
              Hey, I&apos;m Amin
              <span aria-hidden className="ml-2 text-accent">
                ✶
              </span>
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted md:text-base">
              building cool products with ai
              <br />
              trying to connect tech to creative industry
            </p>
          </div>

          <ul
            className="flex flex-wrap justify-center -mt-2 gap-1.5 font-mono text-xs text-ink-muted"
            aria-label="Roles"
          >
            <li className="rounded-md border border-line px-2 py-1">
              <CalculateAge />
            </li>
            {TAGS.map((tag) => (
              <li key={tag} className="rounded-md border border-line px-2 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions — one primary, one secondary */}
        <div className="flex flex-col gap-2 px-5 pb-5">
          {OPEN_TO_WORK && (
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 rounded-xl bg-accent/10 border border-accent/10 px-4 py-3 transition-[transform,opacity] duration-150 hover:opacity-90 active:scale-[0.985] motion-reduce:active:scale-100"
            >
              <p className="text-sm font-semibold">Open to Collaboration</p>
              <p className="text-xs inline-flex gap-0.5">
                Book a Meeting
                <ArrowUpRight className="size-3 mt-0.5" />
              </p>
            </Link>
          )}
          <Link
            href="#projects"
            className="group flex min-h-12 items-center justify-between gap-2 rounded-xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:bg-ink/5 active:scale-[0.985] motion-reduce:active:scale-100"
          >
            See my projects
            <ArrowDown className="size-4 text-ink-faint" />
          </Link>

          {/* <a
            href="https://github.com/aminzare2005"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex w-fit items-center gap-1.5 px-1 font-mono text-[11px] text-ink-faint transition-colors hover:text-accent"
          >
            <span aria-hidden>▸</span> now building: selka
          </a> */}
        </div>
      </div>
    </Section>
  );
}

export default Hero;

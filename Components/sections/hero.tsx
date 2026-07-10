import Section from "../section";
import CalculateAge from "../calculateAge";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, OPEN_TO_WORK } from "@/constants/site";
import { ArrowUpRight } from "lucide-react";

const TAGS = ["frontend dev", "product manager", "creative"] as const;

async function Hero() {
  return (
    <Section id="hero" className="p-0">
      <div className="overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-2 text-xs font-mono">
          <div
            // href="/projects/payload-blog"
            className="inline-flex animate-pulse min-w-0 items-center gap-2 text-emerald-700 transition-opacity hover:opacity-70"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span className="truncate">now building payload-blog</span>
            {/* <ArrowUpRight className="size-3 shrink-0" /> */}
          </div>
          {OPEN_TO_WORK && (
            <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-emerald-800">
              available
            </span>
          )}
        </div>

        <div className="flex flex-col gap-5 p-4 md:flex-row md:items-center md:gap-6 md:px-6">
          <div className="relative mx-auto size-28 shrink-0 md:mx-0 md:size-32">
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
          </div>

          <div className="min-w-0 flex-1 text-center flex items-center md:items-start flex-col md:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Hey, I&apos;m Amin 👋🏻
            </h1>
            <p className="mt-2 text-sm leading-relaxed opacity-75 w-3/4 md:text-base">
              digital creator & frontend developer building cool products with
              ai
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 px-4 pb-3 md:justify-start md:px-6">
          <span className="rounded-lg border border-black/10 bg-black/5 px-2.5 py-1 text-sm">
            <CalculateAge />
          </span>
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-black/10 bg-black/5 px-2.5 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 border-t border-black/10 sm:grid-cols-2">
          {OPEN_TO_WORK && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 border-b border-black/10 px-4 py-3.5 text-sm font-medium transition-colors hover:bg-black/[0.02] sm:border-b-0 sm:border-r md:px-6"
            >
              Book a Meeting
              <ArrowUpRight className="size-4 opacity-50" />
            </a>
          )}
          <Link
            href="#projects"
            className="flex items-center justify-between gap-2 px-4 py-3.5 text-sm font-medium transition-colors hover:bg-black/[0.02] md:px-6"
          >
            See my projects
            <ArrowUpRight className="size-4 opacity-50" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Hero;

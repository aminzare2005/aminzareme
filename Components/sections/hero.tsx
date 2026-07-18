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
        {/* Status — secondary context, not competing with identity */}
        <Link
          href={"/projects/payload-blog"}
          className="flex items-center gap-2 border-b border-black/10 px-4 py-2.5 font-mono text-xs text-emerald-700 md:px-6"
        >
          <span
            className="size-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500"
            aria-hidden
          />
          <span className="truncate">now building payload-blog</span>
        </Link>

        {/* Identity — one composition: face, name, role */}
        <div className="flex flex-col items-center gap-5 px-4 py-6 text-center md:px-6">
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
          </div>

          <div className="mx-auto max-w-sm">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Hey, I&apos;m Amin 👋🏻
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
              digital creator & frontend developer building cool products with
              ai
            </p>
          </div>

          <ul
            className="flex flex-wrap justify-center gap-2"
            aria-label="Roles"
          >
            <li className="rounded-lg border border-black/10 bg-black/5 px-2.5 py-1 text-sm text-gray-800">
              <CalculateAge />
            </li>
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-black/10 bg-black/5 px-2.5 py-1 text-sm text-gray-800"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions — clear primary vs secondary hierarchy */}
        <div className="flex flex-col gap-2 px-4 md:px-6 pb-5">
          {OPEN_TO_WORK && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block min-h-11 cursor-pointer rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-left transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-100/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <span className="block font-mono text-[10px] font-medium uppercase tracking-widest text-emerald-700">
                available
              </span>
              <span className="mt-1 block text-base font-bold text-gray-900">
                Open to Collaboration
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-emerald-800">
                Book a Meeting
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          )}
          <Link
            href="#projects"
            className="flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            See my projects
            <ArrowUpRight className="size-4 opacity-40" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Hero;

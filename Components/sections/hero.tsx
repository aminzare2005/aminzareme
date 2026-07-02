import Section from "../section";
import CalculateAge from "../calculateAge";
import Image from "next/image";
import BentoCard from "../ui/bento-card";
import { getGitHubStats } from "@/lib/github";
import { BOOKING_URL, OPEN_TO_WORK } from "@/constants/site";
import { cn } from "@/lib/utils";

const smallCardClass =
  "col-span-1 flex h-full flex-col justify-center p-3 md:p-4";

async function Hero() {
  const stats = await getGitHubStats();

  return (
    <Section
      id="hero"
      classNameWrapper="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto md:auto-rows-fr"
    >
      <BentoCard className="col-span-2 md:col-span-2 md:row-span-2 flex flex-col gap-4 md:justify-between md:min-h-44">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Hey, I&apos;m Amin 👋🏻
          </h1>
          <p className="mt-2 opacity-80 text-sm md:text-base">
            digital creator & frontend developer building cool products with ai
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-sm border border-black/10 rounded-lg bg-black/5">
            <CalculateAge />
          </span>
          <span className="px-2 py-1 text-sm border border-black/10 rounded-lg bg-black/5">
            frontend dev
          </span>
          <span className="px-2 py-1 text-sm border border-black/10 rounded-lg bg-black/5">
            product manager
          </span>
          <span className="px-2 py-1 text-sm border border-black/10 rounded-lg bg-black/5">
            creative
          </span>
        </div>
      </BentoCard>

      <BentoCard className="col-span-1 h-full p-0">
        <div className="relative h-full w-full aspect-square md:min-h-0 md:aspect-square">
          <Image
            draggable="false"
            className="object-cover brightness-90 rounded-2xl"
            alt="Portrait of Amin Zare"
            src="https://github.com/aminzare2005.png"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            loading="eager"
            priority
          />
        </div>
      </BentoCard>

      <BentoCard className={smallCardClass}>
        <span className="text-xs opacity-60">GitHub followers</span>
        <span dir="ltr" className="text-2xl md:text-3xl font-extrabold">
          +{stats.followers}
        </span>
      </BentoCard>

      {OPEN_TO_WORK && (
        <BentoCard
          href={BOOKING_URL}
          external
          className={cn(
            "col-span-2 flex h-full flex-col justify-center",
            "gap-1 bg-emerald-50 border-emerald-200",
          )}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700">
            Available
          </span>
          <span className="font-bold text-sm leading-tight">
            Open to Collaboration
          </span>
          <span className="text-xs text-emerald-700">Book a Meeting →</span>
        </BentoCard>
      )}

      {/* <BentoCard href="/projects/vlonefarsi" className={smallCardClass}>
        <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 mb-1">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Now building
        </span>
        <span className="font-bold text-sm leading-tight">vlonefarsi.ir</span>
      </BentoCard> */}
    </Section>
  );
}

export default Hero;

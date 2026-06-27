import Section from "../section";
import CalculateAge from "../calculateAge";
import Image from "next/image";
import InlineItemCard from "../ui/inline-item-card";

function Hero() {
  return (
    <Section classNameWrapper="flex items-center">
      <div className="w-auto sm:w-4/5">
        <h1 className="text-3xl mb-4 text-start md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Hey, I&apos;m Amin 👋🏻
        </h1>
        <div className="flex flex-row justify-between items-end md:items-start gap-4">
          <div className="flex flex-wrap sm:w-2/3 justify-start gap-2">
            <InlineItemCard item={<CalculateAge />} />
            <InlineItemCard item="digital creator" />
            <InlineItemCard item="product manager" />
            <InlineItemCard item="frontend dev" />
          </div>

          <div className="relative">
            <div className="relative block sm:hidden">
              <div className="size-28 md:size-24">
                <Image
                  draggable="false"
                  className="object-cover brightness-90 rounded-2xl md:rounded-3xl from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br"
                  alt="Portrait of Amin Zare"
                  src={"https://github.com/aminzare2005.png"}
                  fill
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-28 w-28 hidden sm:block">
        <Image
          draggable="false"
          className="object-cover brightness-90 h-full w-full rounded-2xl md:rounded-3xl from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br"
          alt="Portrait of Amin Zare"
          height={96}
          width={96}
          src={"https://github.com/aminzare2005.png"}
          loading="eager"
          priority
        />
      </div>
    </Section>
  );
}

export default Hero;

import Image from "next/image";
import Section from "../section";
import { WORK_ITEMS } from "@/constants/items";
import { cn } from "@/lib/utils";

function WorkCard({ item }: { item: (typeof WORK_ITEMS)[number] }) {
  const className = cn(
    "bg-white p-4 border border-black/10 rounded-xl hover:translate-y-px duration-300 block",
  );

  const content = (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={item.image}
              alt={item.company}
              width={60}
              height={60}
              draggable="false"
              className="size-10 rounded-lg"
            />
            <div className="flex flex-col">
              <b>{item.position}</b>
              <span className="tracking-wider text-sm font-light opacity-85">
                {item.company}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="opacity-85">{item.description}</p>
        </div>
      </div>
    </div>
  );
  return <div className={className}>{content}</div>;
}

function Work() {
  return (
    <Section id="work" classNameWrapper="flex flex-col gap-4">
      {WORK_ITEMS.map((item) => (
        <WorkCard key={item.company} item={item} />
      ))}
    </Section>
  );
}

export default Work;

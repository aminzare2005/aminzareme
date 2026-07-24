import Section from "../section";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/constants/items";

function Gallery() {
  return (
    <Section id="moments" index="07" label="Moments">
      <div className="md:columns-2 columns-1 gap-2 space-y-2">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.url} className="break-inside-avoid">
            <Image
              draggable={false}
              src={item.url}
              alt={item.title}
              width={400}
              height={400}
              sizes="(max-width: 768px) 50vw, 336px"
              loading="lazy"
              className="w-full rounded-lg ring-1 ring-line saturate-[0.7] transition-[filter] duration-300 hover:saturate-100 motion-reduce:transition-none"
            />
            <figcaption className="mt-1.5 mb-2 truncate font-mono text-[10px] text-ink-faint">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export default Gallery;

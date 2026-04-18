import React from "react";
import Section from "../section";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/constants/items";

function Gallery() {
  return (
    <Section classNameWrapper="columns-1 md:columns-2 gap-2 space-y-2 pt-4">
      {GALLERY_ITEMS.map((item) => (
        <div key={item.url} className="break-inside-avoid">
          <Image
            draggable={false}
            src={item.url}
            alt={item.title}
            width={300}
            height={300}
            loading="lazy"
            className="w-full saturate-25"
          />
        </div>
      ))}
    </Section>
  );
}

export default Gallery;

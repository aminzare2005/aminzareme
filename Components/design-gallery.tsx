"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { DESIGNS_ITEMS } from "@/constants/items";

export default function DesignGallery() {
  const [lightbox, setLightbox] = useState<
    (typeof DESIGNS_ITEMS)[number] | null
  >(null);

  const items = [...DESIGNS_ITEMS].reverse();

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Design Gallery</h1>
          <Link href="/" className="text-sm text-blue-500 hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </div>

      <div className="md:columns-2 columns-1 gap-4 space-y-4">
        {items.map((item) => (
          <button
            key={item.url}
            type="button"
            onClick={() => setLightbox(item)}
            className="break-inside-avoid cursor-pointer w-full text-left group relative rounded-xl overflow-hidden"
          >
            <Image
              alt={item.title}
              src={item.url}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-xl group-hover:scale-[1.02] duration-300"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-white/80 text-xs">made for {item.brand}</p>
            </div>
          </button>
        ))}
      </div>

      {/* TODO: better popover */}
      {lightbox && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div
            className="flex md:py-20 h-full flex-col items-center justify-center mx-auto md:h-dvh w-full"
            onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            <Image
              src={lightbox.url}
              alt={lightbox.title}
              width={1200}
              height={1200}
              className="w-auto mx-auto md:h-full rounded-xl"
              draggable={false}
            />
            <div className="mt-3 text-white text-center">
              <p className="font-semibold">{lightbox.title}</p>
              <p className="text-sm text-white/70">made for {lightbox.brand}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

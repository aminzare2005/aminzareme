"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DESIGNS_ITEMS } from "@/constants/items";

export default function DesignGallery() {
  const [lightbox, setLightbox] = useState<
    (typeof DESIGNS_ITEMS)[number] | null
  >(null);
  const reduceMotion = useReducedMotion();

  const items = [...DESIGNS_ITEMS].reverse();

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5" />
          back to portfolio
        </Link>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tighter text-ink md:text-3xl">
          Design Gallery
          <span aria-hidden className="ml-2 text-accent">
            ✶
          </span>
        </h1>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted md:text-base">
          a collection of things I&apos;ve designed as a part-time graphic
          designer. banners, logos, stickers & more, made for brands,
          communities and personal projects.
        </p>
      </div>

      <div className="columns-1 gap-3 space-y-3 md:columns-2">
        {items.map((item) => (
          <button
            key={item.url}
            type="button"
            onClick={() => setLightbox(item)}
            className="group relative w-full cursor-pointer break-inside-avoid overflow-hidden rounded-xl text-left ring-1 ring-line active:scale-[0.99] motion-reduce:active:scale-100"
          >
            <Image
              alt={item.title}
              src={item.url}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="font-mono text-[11px] text-white/70">
                {item.brand}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:h-dvh md:py-20"
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : { type: "spring", bounce: 0, duration: 0.4 }
              }
            >
              <Image
                src={lightbox.url}
                alt={lightbox.title}
                width={1200}
                height={1200}
                className="mx-auto w-auto rounded-xl md:h-full"
                draggable={false}
              />
              <div className="mt-3 text-center text-white">
                <p className="font-semibold">{lightbox.title}</p>
                <p className="font-mono text-xs text-white/70">
                  made for {lightbox.brand}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

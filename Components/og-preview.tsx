"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

function PreviewLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
      {children}
    </h2>
  );
}

export default function OgPreview() {
  const [version, setVersion] = useState(() => Date.now());
  const [loading, setLoading] = useState(false);

  const reload = () => {
    setLoading(true);
    setVersion(Date.now());
  };

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5" />
          back to portfolio
        </Link>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tighter text-ink md:text-3xl">
          OG Image Preview
          <span aria-hidden className="ml-2 text-accent">
            ✶
          </span>
        </h1>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
          live render of{" "}
          <code className="rounded-sm border border-line px-1 py-0.5 font-mono text-xs">
            app/opengraph-image.tsx
          </code>
          . edit the file, then hit reload to see the fresh render.
        </p>
      </div>

      {/* Live dynamic OG image */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <PreviewLabel>
            og:image — dynamic · 1200 × 630 · /opengraph-image
          </PreviewLabel>
          <button
            type="button"
            onClick={reload}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink active:scale-[0.97] motion-reduce:active:scale-100"
          >
            <RefreshCw
              className={`size-3.5 ${loading ? "animate-spin" : ""}`}
            />
            reload
          </button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={version}
          src={`/opengraph-image?v=${version}`}
          alt="Live preview of the dynamic Open Graph image"
          width={1200}
          height={630}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          className={`aspect-1200/630 w-full rounded-xl ring-1 ring-line transition-opacity duration-200 ${
            loading ? "opacity-50" : "opacity-100"
          }`}
          draggable={false}
        />
      </div>

      {/* X / Twitter card mockup */}
      <div className="space-y-2.5">
        <PreviewLabel>how it looks on x.com</PreviewLabel>
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/opengraph-image?v=${version}`}
              alt=""
              width={1200}
              height={630}
              className="aspect-1200/630 w-full object-cover"
              draggable={false}
            />
            <div className="border-t border-line px-3 py-2.5">
              <p className="font-mono text-[11px] text-ink-faint">
                aminzare.me
              </p>
              <p className="mt-0.5 truncate text-sm font-medium text-ink">
                Amin Zare (@cwpslxck)
              </p>
              <p className="truncate text-xs text-ink-muted">
                Digital Creator & Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function NotFound() {
  return (
    <div
      aria-labelledby="not-found-title"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-16"
    >
      <div className="space-y-2 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          error 404
          <span aria-hidden className="ml-2 text-accent">
            ✶
          </span>
        </p>
        <h1
          id="not-found-title"
          className="text-6xl font-black tracking-tighter md:text-8xl"
        >
          Lost?
        </h1>
        <p className="mx-auto max-w-sm text-ink-muted">
          This page doesn&apos;t exist — but my work, designs, and projects do.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <Link
          href="/"
          className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-opacity hover:opacity-90 active:scale-[0.98] motion-reduce:active:scale-100"
        >
          Go home
        </Link>
        <Link
          href="/design"
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink/5"
        >
          View designs
        </Link>
        <Link
          href="/#projects"
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink/5"
        >
          See projects
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

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
      className="min-h-[60vh] flex flex-col justify-center items-center gap-6 px-4"
    >
      <div className="text-center space-y-2">
        <p className="text-sm font-mono uppercase tracking-widest opacity-50">
          Error 404
        </p>
        <h1
          id="not-found-title"
          className="text-6xl md:text-8xl font-black tracking-tighter"
        >
          Lost?
        </h1>
        <p className="opacity-70 max-w-sm mx-auto">
          This page doesn&apos;t exist — but my work, designs, and projects do.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Link
          href="/"
          className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Go home
        </Link>
        <Link
          href="/design"
          className="border border-black/15 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black/5 transition-colors"
        >
          View designs
        </Link>
        <Link
          href="/#projects"
          className="border border-black/15 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black/5 transition-colors"
        >
          See projects
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

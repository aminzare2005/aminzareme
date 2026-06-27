import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

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
      className="min-h-[60vh] flex flex-col justify-center items-center gap-4"
    >
      <h1 id="not-found-title" className="text-9xl font-black">
        404
      </h1>
      <p>Page not found</p>
      <div className="flex gap-2">
        <Link
          title="Visit home page"
          href={"/"}
          className="bg-black text-white px-6 rounded py-2"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

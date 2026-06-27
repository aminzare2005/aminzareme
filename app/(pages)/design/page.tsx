import type { Metadata } from "next";
import { DESIGNS_ITEMS } from "@/constants/items";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Design Gallery | Amin Zare",
  description: "A curated gallery of design work by Amin Zare.",
  alternates: {
    canonical: "/design",
  },
  openGraph: {
    title: "Design Gallery | Amin Zare",
    description: "A curated gallery of design work by Amin Zare.",
    url: "https://aminzare.me/design",
    siteName: "Amin Zare Portfolio",
    images: [
      {
        url: "/assets/preview-twitter.png",
        width: 1200,
        height: 630,
        alt: "Design Gallery by Amin Zare",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/preview-twitter.png",
    title: "Design Gallery | Amin Zare",
    description: "A curated gallery of design work by Amin Zare.",
  },
};

export default function DesignsPage() {
  return (
    <div className="px-4 pb-10 pt-4">
      <h1 className="sr-only">Design gallery by Amin Zare</h1>
      <div className="md:columns-2 columns-1 gap-4 space-y-4">
        {[...DESIGNS_ITEMS].reverse().map((item) => (
          <div key={item.url} className="break-inside-avoid">
            <Image
              alt={item.title}
              src={item.url}
              width={200}
              height={200}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-xl"
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

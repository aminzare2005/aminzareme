import type { Metadata } from "next";
import DesignGallery from "@/Components/design-gallery";

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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Gallery | Amin Zare",
    description: "A curated gallery of design work by Amin Zare.",
  },
};

export default function DesignsPage() {
  return (
    <div className="px-4 pb-10 pt-4">
      <DesignGallery />
    </div>
  );
}

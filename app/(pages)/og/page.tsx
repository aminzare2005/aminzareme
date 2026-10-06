import type { Metadata } from "next";
import OgPreview from "@/Components/og-preview";

export const metadata: Metadata = {
  title: "OG Image Preview | Amin Zare",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OgPreviewPage() {
  return (
    <div className="px-5 pb-10 pt-5">
      <OgPreview />
    </div>
  );
}

import { DESIGNS_ITEMS } from "@/constants/items";
import Image from "next/image";

export default function DesignsPage() {
  return (
    <div className="px-4 pb-10 pt-4">
      <div className="md:columns-2 columns-1 gap-4 space-y-4">
        {[...DESIGNS_ITEMS].reverse().map((item) => (
          <div key={item.url} className="break-inside-avoid">
            <Image
              alt={item.title}
              src={item.url}
              width={200}
              height={200}
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

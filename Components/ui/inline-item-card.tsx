import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  item: ReactNode;
  size?: "normal" | "sm";
};

function InlineItemCard({ item, size = "normal" }: Props) {
  return (
    <span
      className={cn(
        size === "sm" && "text-sm py-0.5 px-2 font-semibold",
        size === "normal" && "py-1 px-2 font-medium",
        "mx-1 from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br rounded-full",
      )}
    >
      ✦ {item}
    </span>
  );
}

export default InlineItemCard;

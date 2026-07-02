import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BentoCard({
  children,
  className,
  href,
  external,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
}) {
  const card = (
    <div
      className={cn(
        "bg-white border border-black/10 rounded-2xl p-4 hover:translate-y-px duration-300 overflow-hidden h-full",
        href && "hover:border-black/20",
        className,
      )}
    >
      {children}
    </div>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("block h-full", className)}
        >
          {card}
        </a>
      );
    }

    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}

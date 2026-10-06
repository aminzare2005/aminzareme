"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GithubIcon,
  HouseIcon,
  ImagesIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import ReactLenis from "lenis/react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    href: "/github",
    icon: <GithubIcon />,
    label: "GitHub",
    external: true,
  },
  {
    href: "/linkedin",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "/x",
    icon: <BsTwitterX />,
    label: "X (Twitter)",
    external: true,
  },
  {
    href: "/ig",
    icon: <InstagramIcon />,
    label: "Instagram",
    external: true,
  },
];

function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <ReactLenis root />
      <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full justify-center bg-linear-to-b from-transparent to-paper/60 px-2 py-4 md:px-0">
        <nav
          aria-label="Primary"
          dir="ltr"
          className="flex max-w-none h-14 md:w-full md:max-w-xs items-center justify-between rounded-full border border-line bg-surface/70 px-4 shadow-ink/5 backdrop-blur-xl backdrop-saturate-150"
        >
          {menuItems.map((item) => {
            const isActive = !item.external && pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
                className={cn(
                  "relative flex h-full p-4 w-full items-center justify-center transition-[color,transform] duration-150 active:scale-90 motion-reduce:active:scale-100 [&_svg]:size-5",
                  isActive ? "text-ink" : "text-ink hover:text-accent",
                )}
              >
                {item.icon}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute bottom-2 size-1 rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

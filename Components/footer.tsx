"use client";

import Link from "next/link";
import {
  GithubIcon,
  HouseIcon,
  ImagesIcon,
  LinkedinIcon,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import ReactLenis from "lenis/react";

const menuItems = [
  {
    href: "/",
    icon: <HouseIcon />,
    label: "Home",
    external: false,
  },
  {
    href: "/design",
    icon: <ImagesIcon />,
    label: "Design gallery",
    external: false,
  },
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
];

function Footer() {
  return (
    <footer>
      <ReactLenis root />
      <div className="w-full px-2 md:px-0 right-0 left-0 py-4 z-50 flex justify-center fixed bottom-0 bg-linear-to-b from-transparent via-white/10 to-white/20">
        <nav
          aria-label="Primary"
          dir="ltr"
          className="bg-white/30 px-6 border text-black max-w-xl text-xl border-black/5 backdrop-blur-xl rounded-full h-14 w-full flex justify-between items-center"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="w-full h-full flex items-center justify-center [&_svg]:size-6"
            >
              {item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

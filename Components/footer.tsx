import Link from "next/link";
import {
  GithubIcon,
  HouseIcon,
  ImagesIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const menuItems = [
  {
    title: "Visit home page",
    href: "/",
    icon: <HouseIcon />,
    external: false,
  },
  {
    title: "Visit design page",
    href: "/design",
    icon: <ImagesIcon />,
    external: false,
  },
  {
    title: "Visit my Github",
    href: "/github",
    icon: <GithubIcon />,
    external: true,
  },
  {
    title: "Visit my LinkedIn",
    href: "/linkedin",
    icon: <LinkedinIcon />,
    external: true,
  },
  {
    title: "Visit my Instagram",
    href: "/instagram",
    icon: <InstagramIcon />,
    external: true,
  },
  {
    title: "Visit my X (Twitter)",
    href: "/x",
    icon: <BsTwitterX />,
    external: true,
  },
];

function Footer() {
  return (
    <div className="w-full px-2 md:px-0 right-0 left-0 py-4 z-50 flex justify-center fixed bottom-0 bg-linear-to-b from-transparent via-white/10 to-white/20">
      <div
        dir="ltr"
        className="bg-white/30 px-6 border text-black max-w-xl text-xl border-black/5 backdrop-blur-xl rounded-full h-14 w-full flex justify-between items-center"
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            title={item.title}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            className="size-12 rounded-full flex items-center justify-center"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;

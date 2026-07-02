import React from "react";
import Section from "../section";
import { BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { SiKick } from "react-icons/si";
import { cn } from "@/lib/utils";
import Link from "next/link";

const socials = [
    {
        title: "X (Twitter)",
        href: "/x",
        icon: <BsTwitterX size={18} />,
        color: "to-zinc-600"
    },
    {
        title: "Youtube",
        href: "/youtube",
        icon: <BsYoutube size={18} />,
        color: "to-red-500"
    },
    {
        title: "Kick",
        href: "/kick",
        icon: <SiKick size={18} />,
        color: "to-lime-500"
    },
    {
        title: "Linkedin",
        href: "/linkedin",
        icon: <BsLinkedin size={18} />,
        color: "to-blue-500"
    },
]

function Socials() {
  return (
    <Section id="socials">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {socials.map((item) => (
                <Link
                key={item.title}
                href={item.href}
                draggable='false'
                className={cn(item.color ,"flex w-full group justify-between items-center gap-2 bg-gradient-to-r from-black p-4 text-white rounded-xl hover:translate-y-[1px] duration-300")}
                >
                <span>{item.title}</span>
                {item.icon}
            </Link>
            ))}
        </div>
    </Section>
  );
}

export default Socials;

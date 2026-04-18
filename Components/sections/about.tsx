import React from "react";
import Section from "../section";
import Link from "next/link";
import { Download } from "lucide-react";

function About() {
  return (
    <Section classNameWrapper="space-y-3 flex flex-col justify-center items-center">
      <Link
        className="px-4 hover:scale-101 transition-transform py-2 bg-linear-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
        href={"/downloads/aminzare-resume.pdf"}
        target="_blank"
      >
        <Download size={18} />
        <h2>Download Resume File</h2>
      </Link>
      <div className="opacity-90 text-center max-w-md mx-auto leading-snug">
        i’m currently working with several startups and products as
        <b> frontend developer </b>
        and
        <b> product manager</b>
        .
        <br />
        <div className="w-full h-2"></div>
        alongside, i work part-time with brands and communities as
        <b> graphic designer </b>
        and
        <b> creative manager</b>.
      </div>
    </Section>
  );
}

export default About;

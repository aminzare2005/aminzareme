import React from "react";
import Section from "../section";
import Link from "next/link";
import { Download } from "lucide-react";

function About() {
  return (
    <Section classNameWrapper="space-y-3 flex flex-col justify-center items-center">
      <Link
        className="px-4 hover:scale-101 transition-transform py-2 bg-linear-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
        href={"/dl/aminzare-resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download size={18} />
        <span>Download Resume File</span>
      </Link>
      <div className="opacity-90 text-center max-w-105">
        i work as
        <b> product manager </b>
        and
        <b> frontend developer </b>
        with multiple startups.
        <br />
        alongside, as
        <b> creativity manager </b>
        and
        <b> graphic designer </b>i collaborate with brands and communities.
      </div>
    </Section>
  );
}

export default About;

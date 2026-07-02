import React from "react";
import Section from "../section";
import Image from "next/image";

function Timeline() {
  return (
    <Section>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-bold">Good but not for me!</div>
            <p className="leading-tight">
              My first income was from Instagram brands that
              got millions of views.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-bold">Time to earn</div>
            <p className="leading-tight">
              I started learning modern frontend tech like nextjs & tailwind &
              expo
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-bold">Real career starts</div>
            <p className="leading-tight">
              I joined different startups,
              <br />
              made connections, bootcamps,
              <br />
              and learned pm basics.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end">
            <time className="font-mono italic">2026</time>
            <div className="text-lg font-bold">A defining year!</div>
            <p>
              Launching products, building teams, going all-in on business,
              <br />
              and maybe youtube videos!
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}

export default Timeline;

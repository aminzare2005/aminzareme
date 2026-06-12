import React from "react";
import Section from "../section";
import { DisplayVersion } from "../displayVersion";

function Connect() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-3 py-6">
        <p className="text-3xl md:text-4xl font-bold">Collabrate with me</p>
        <p className="text-center text-base md:text-xl leading-tight">
          contact me via
          <br />
          <a
            title="Email me for projects & connection"
            className="text-blue-500 hover:underline"
            href="mailto:hi@aminzare.me"
          >
            hi@aminzare.me
          </a>{" "}
          or
          <br />
          connect with me on linkedin and x
        </p>
        <div
          dir="ltr"
          className="w-full pt-6 text-sm flex gap-1 justify-center items-center"
        >
          Amin Zare <span>✶</span>
          <DisplayVersion />
        </div>
      </div>
    </Section>
  );
}

export default Connect;

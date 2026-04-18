import React from "react";
import Section from "../section";

function Status() {
  return (
    <Section>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex justify-center items-center flex-col">
          <div
            dir="ltr"
            className="md:text-7xl text-5xl font-extrabold tracking-tight drop-shadow-xl"
          >
            +15
          </div>
          <p>Github Repos</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div
            dir="ltr"
            className="md:text-7xl text-5xl font-extrabold tracking-tight drop-shadow-xl"
          >
            +210
          </div>
          <p>Github Followers</p>
        </div>
      </div>
    </Section>
  );
}

export default Status;

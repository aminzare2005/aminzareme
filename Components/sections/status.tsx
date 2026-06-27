import React from "react";
import Section from "../section";
import { STATUS_ITEMS } from "@/constants/items";

function Status() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        {STATUS_ITEMS.map((item) => (
          <div
            key={item.name}
            className="flex p-2 justify-center items-center flex-col"
          >
            <div
              dir="ltr"
              className="md:text-7xl text-5xl font-extrabold tracking-tight drop-shadow-2xl"
            >
              {item.number}
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Status;

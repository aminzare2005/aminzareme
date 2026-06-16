import React from "react";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

function Education() {
  return (
    <Section className="grid grid-cols-1" title="Certificates">
      <div className="flex flex-col w-full group justify-center items-center gap-2 bg-white p-6 border border-black/10 rounded-xl hover:translate-y-px duration-300">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/be5t.jpg"
              alt={""}
              width={60}
              height={60}
              draggable="false"
              className="size-12 rounded-lg"
            />
            <div className="flex flex-col">
              <b>AIPM</b>
              <span className="tracking-wider text-sm font-light opacity-85">
                Touring Bootcamp (be5t.ir)
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="opacity-85">
            learned the basics of PM and AIPM with guidance from top industry
            mentors
          </p>
          <Link
            className="flex py-1 gap-1 text-blue-500 text-sm w-fit"
            target="_blank"
            href={
              "https://be5t.ir/validation/cert?id=aa54c49a-86ea-4863-a500-98998cb23912"
            }
          >
            <Link2Icon size={18} />
            visit certificate
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Education;

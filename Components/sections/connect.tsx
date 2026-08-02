import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { SHOW_RESUME_DOWNLOAD } from "@/constants/site";
import Section from "../section";
import { ResumeDownload } from "../ui/resume-download";

const EMAIL = "2005aminzare@gmail.com";

function getVersion() {
  const packageJson = JSON.parse(
    readFileSync(path.join(process.cwd(), "package.json"), "utf-8"),
  );
  return (packageJson.version as string) || "0.0.0";
}

function Connect() {
  const version = getVersion();

  return (
    <Section id="connect">
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Collaborate
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            say hi — projects, ideas, collabs
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-2">
          <a
            href={`mailto:${EMAIL}`}
            title="Email me for projects & connection"
            className="group flex min-h-12 items-center justify-between gap-2 rounded-xl border border-black bg-black px-4 py-3.5 text-left text-white transition-colors duration-150 hover:bg-neutral-900 active:bg-neutral-950 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <span className="inline-flex items-center gap-2.5">
              <Mail className="size-4 opacity-70" aria-hidden />
              <span className="text-sm font-bold">{EMAIL}</span>
            </span>
            <ArrowUpRight className="size-4 opacity-50 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            href="/x"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-12 items-center justify-between gap-2 rounded-xl border border-black/10 bg-white px-4 py-3.5 text-left text-gray-900 transition-colors duration-150 hover:bg-black/5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            <span className="inline-flex items-center gap-2.5">
              <BsTwitterX className="size-3.5 opacity-70" aria-hidden />
              <span className="text-sm font-bold">connect on X</span>
            </span>
            <ArrowUpRight className="size-4 opacity-40 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {SHOW_RESUME_DOWNLOAD && (
            <div className="flex justify-center pt-1 [&_a]:mt-0 [&_a]:max-w-none">
              <ResumeDownload />
            </div>
          )}
        </div>

        <div
          dir="ltr"
          className="w-full pt-6 text-sm flex gap-1 justify-center items-center text-gray-500"
        >
          Amin Zare <span>✶</span>
          {version}
        </div>
      </div>
    </Section>
  );
}

export default Connect;

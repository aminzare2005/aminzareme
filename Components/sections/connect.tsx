import Section from "../section";
import { DisplayVersion } from "../displayVersion";
import { ResumeDownload } from "../ui/resume-download";

function Connect() {
  return (
    <Section id="connect" index="08" label="Connect">
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <h2 className="max-w-sm text-3xl font-extrabold tracking-tighter md:text-4xl">
          Let&apos;s build something
          <span aria-hidden className="ml-2 text-accent">
            ✶
          </span>
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted md:text-base">
          reach me at{" "}
          <a
            title="Email me for projects & connection"
            className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            href="mailto:hi@aminzare.me"
          >
            hi@aminzare.me
          </a>
          <br />
          or connect with me on{" "}
          <a
            className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            href="https://x.com/cwpslxck"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
        </p>

        <ResumeDownload />

        <div
          dir="ltr"
          className="flex w-full items-center justify-center gap-1.5 pt-6 font-mono text-[11px] text-ink-faint"
        >
          Amin Zare
          <span aria-hidden className="text-accent">
            ✶
          </span>
          v<DisplayVersion />
        </div>
      </div>
    </Section>
  );
}

export default Connect;

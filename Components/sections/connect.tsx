import Section from "../section";
import { DisplayVersion } from "../displayVersion";
import { ResumeDownload } from "../ui/resume-download";

function Connect() {
  return (
    <Section id="connect" index="08" label="Connect">
      <div className="flex flex-col items-center gap-5 py-8 text-center">
        <div className="space-y-2.5">
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">
            Let&apos;s build something
            <span aria-hidden className="ml-2 text-accent">
              ✶
            </span>
          </h2>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-ink-muted md:text-base">
            reach me at{" "}
            <a
              title="Email me for projects & connection"
              className="font-medium text-ink transition-colors hover:text-accent"
              href="mailto:hi@aminzare.me"
            >
              hi@aminzare.me
            </a>{" "}
            or on x
          </p>
        </div>

        <ResumeDownload />

        <div
          dir="ltr"
          className="flex items-center justify-center gap-1.5 font-mono text-[11px] text-ink-faint"
        >
          Amin Zare ✶ v<DisplayVersion />
        </div>
      </div>
    </Section>
  );
}

export default Connect;

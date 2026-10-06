import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, getCaseStudySlugs } from "@/constants/case-studies";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Page Not Found" };

  return {
    title: `${study.title} | Amin Zare`,
    description: study.subtitle,
    alternates: { canonical: `/projects/${slug}` },
  };
}

function CaseSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </h2>
      {children}
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="space-y-6 px-5 py-5">
      <header className="space-y-3">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5" />
          back to projects
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tighter md:text-4xl">
          {study.title}
        </h1>
        <p className="text-lg leading-relaxed text-ink-muted">
          {study.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-ink-faint">
          <span>{study.role}</span>
          <span aria-hidden>✶</span>
          <span>{study.timeline}</span>
        </div>
      </header>

      {study.images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-video w-full overflow-hidden rounded-xl ring-1 ring-line"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
      ))}

      <div className="flex flex-col items-center gap-2">
        {study.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-between gap-2 rounded-xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:bg-ink/5 active:scale-[0.985] motion-reduce:active:scale-100 w-full"
          >
            {link.title}
            <ArrowUpRight className="size-3.5 text-ink-faint" />
          </Link>
        ))}
      </div>  

      <CaseSection label="Problem">
        <p className="leading-relaxed">{study.problem}</p>
      </CaseSection>

      <CaseSection label="Solution">
        <p className="leading-relaxed">{study.solution}</p>
      </CaseSection>

      <CaseSection label="Tech stack">
        <div className="flex flex-wrap gap-1.5">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line px-2 py-1 font-mono text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </CaseSection>

      <CaseSection label="Outcomes">
        <ul className="space-y-1.5">
          {study.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex gap-2 leading-relaxed"
            >
              <span aria-hidden className="text-ink-muted">
                ✶
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </CaseSection>
    </article>
  );
}

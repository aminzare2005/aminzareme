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
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} Case Study | Amin Zare`,
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
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
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
    <article className="space-y-8 px-5 pb-16 pt-5">
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
          <span aria-hidden className="text-accent">
            ✶
          </span>
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

      <CaseSection label="Problem">
        <p className="leading-relaxed text-ink-muted">{study.problem}</p>
      </CaseSection>

      <CaseSection label="Solution">
        <p className="leading-relaxed text-ink-muted">{study.solution}</p>
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
            <li key={outcome} className="flex gap-2 leading-relaxed text-ink-muted">
              <span aria-hidden className="mt-0.5 text-accent">
                ✶
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </CaseSection>

      <div className="flex flex-wrap gap-4 border-t border-line pt-6">
        {study.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            {link.title}
            <ArrowUpRight className="size-3.5 text-ink-faint" />
          </Link>
        ))}
      </div>
    </article>
  );
}

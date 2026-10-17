import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CASE_STUDIES,
  getCaseStudy,
  getCaseStudySlugs,
} from "@/constants/case-studies";
import { Markdown } from "@/Components/ui/markdown";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Page Not Found | Amin Zare" };

  return {
    title: `${study.title} — Case Study | Amin Zare`,
    description: study.subtitle,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${study.title} | Amin Zare`,
      description: study.subtitle,
      url: `https://aminzare.me/projects/${slug}`,
      siteName: "Amin Zare Portfolio",
      type: "article",
    },
  };
}

function CaseSection({
  label,
  badge,
  children,
}: {
  label: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3.5 pt-3">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {label}
        </h2>
        {badge && (
          <span className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const primaryImage = study.images?.[0];
  const remainingImages = study.images?.slice(1) ?? [];
  const otherStudies = CASE_STUDIES.filter((s) => s.slug !== slug);

  return (
    <article className="space-y-8 px-5 py-6 md:px-7 md:py-8">
      {/* Top navigation & breadcrumbs */}
      <nav aria-label="Breadcrumb">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" />
          <span>projects</span>
          <span aria-hidden className="text-line">
            /
          </span>
          <span className="text-ink-muted">{study.slug}</span>
        </Link>
      </nav>

      {/* Header & Meta */}
      <header className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tighter text-ink md:text-4xl">
            {study.title}
          </h1>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            {study.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-ink-muted">
          <span className="rounded-md border border-line bg-surface px-2.5 py-1">
            {study.role}
          </span>
          <span aria-hidden className="text-ink-faint">
            ✶
          </span>
          <span className="rounded-md border border-line bg-surface px-2.5 py-1">
            {study.timeline}
          </span>
        </div>
      </header>

      {/* Primary / Hero Cover Image */}
      {primaryImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            className={
              primaryImage.fit === "contain"
                ? "object-contain p-6 md:p-8"
                : "object-cover object-top"
            }
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
      )}

      {/* External Links */}
      {study.links && study.links.length > 0 && (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {study.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium text-ink card-interactive hover:bg-ink/5"
            >
              <span>{link.title}</span>
              <ArrowUpRight className="size-4 text-ink-faint transition-colors group-hover:text-ink" />
            </Link>
          ))}
        </div>
      )}

      {/* Problem Section (Markdown) */}
      <CaseSection label="The Challenge">
        <Markdown content={study.problem} />
      </CaseSection>

      {/* Solution Section (Markdown) */}
      <CaseSection label="Architecture & Implementation">
        <Markdown content={study.solution} />
      </CaseSection>

      {/* Tech Stack */}
      <CaseSection label="Tech Stack">
        <div className="flex flex-wrap gap-1.5">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      </CaseSection>

      {/* Key Outcomes */}
      <CaseSection label="Key Outcomes & Impact">
        <ul className="space-y-2.5">
          {study.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/90 md:text-[15px]"
            >
              <span
                aria-hidden
                className="mt-1 select-none font-mono text-xs text-accent"
              >
                ✶
              </span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      {/* Additional Showcase / Gallery Images (2nd image onwards) */}
      {remainingImages.length > 0 && (
        <CaseSection label="Gallery & Previews">
          <div className="space-y-4">
            {remainingImages.map((image) => {
              const isContain = image.fit === "contain";
              return (
                <div
                  key={image.src}
                  className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={
                      isContain
                        ? "object-contain p-6 md:p-8"
                        : "object-cover object-top"
                    }
                    sizes="(max-width: 768px) 100vw, 672px"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </CaseSection>
      )}

      {/* More Projects Section */}
      {otherStudies.length > 0 && (
        <section className="space-y-4 border-t border-line pt-8">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Other Projects
            </h2>
            <Link
              href="/#projects"
              className="font-mono text-[11px] uppercase tracking-wider text-accent transition-colors hover:underline"
            >
              view all
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {otherStudies.slice(0, 2).map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="group flex flex-col justify-between gap-2 rounded-xl border border-line bg-surface p-4 card-interactive hover:border-ink/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <b className="text-sm font-semibold tracking-tight text-ink">
                      {other.title}
                    </b>
                    <ArrowRight className="size-3.5 text-ink-faint transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                    {other.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[10px] text-ink-faint">
                  {other.stack.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-line px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Back Button */}
      <div className="pt-2">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink card-interactive hover:bg-ink/5"
        >
          <ArrowLeft className="size-4" />
          Back to all projects
        </Link>
      </div>
    </article>
  );
}

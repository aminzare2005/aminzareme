import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, getCaseStudySlugs } from "@/constants/case-studies";
import { Link2Icon } from "lucide-react";

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

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="px-4 pb-16 pt-4 space-y-8">
      <header className="space-y-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← Back to portfolio
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold">{study.title}</h1>
        <p className="text-lg opacity-80">{study.subtitle}</p>
        <div className="flex flex-wrap gap-3 text-sm opacity-70">
          <span>{study.role}</span>
          <span>✶</span>
          <span>{study.timeline}</span>
        </div>
      </header>

      {study.images.map((image) => (
        <div
          key={image.src}
          className={`relative w-full aspect-video rounded-xl overflow-hidden border border-black/10 ${
            image.fit === "contain" ? "bg-black" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={
              image.fit === "contain" ? "object-contain" : "object-cover"
            }
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
      ))}

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Problem</h2>
        <p className="opacity-85 leading-relaxed">{study.problem}</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Solution</h2>
        <p className="opacity-85 leading-relaxed">{study.solution}</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Tech stack</h2>
        <div className="flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <div
            key={tech}
            className="rounded-lg border border-black/10 bg-black/5 px-2.5 py-1 text-sm text-gray-800"
          >
            {tech}
          </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Outcomes</h2>
        <ul className="list-disc pl-5 space-y-1 opacity-85">
          {study.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {study.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-sm font-bold text-gray-900 transition-colors duration-200 hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            <Link2Icon size={16} className="opacity-50" />
            {link.title}
          </Link>
        ))}
      </div>
    </article>
  );
}

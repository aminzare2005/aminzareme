import { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/constants/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aminzare.me";

  const projectPages = getCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectPages,
  ];
}

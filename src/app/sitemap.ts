import type { MetadataRoute } from "next";
import { absoluteUrl } from "../../site.config";
import { sitePages } from "../content/marketing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sitePages.map((page) => ({
      url: absoluteUrl(page.href),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/privacy/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/terms/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

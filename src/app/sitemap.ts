import type { MetadataRoute } from "next";
import { absoluteUrl } from "../../site.config";

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
    {
      url: absoluteUrl("/privacy/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/terms/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

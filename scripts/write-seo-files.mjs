#!/usr/bin/env node
/**
 * Next MetadataRoute strips the trailing slash from the site root <loc>,
 * which mismatches trailingSlash: true. Write final robots/sitemap into out/.
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");
const origin = "https://hoon-chang.github.io/barem-site";

const pages = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/for-whom/", priority: "0.8", changefreq: "monthly" },
  { path: "/scenarios/", priority: "0.8", changefreq: "monthly" },
  { path: "/guide/", priority: "0.8", changefreq: "monthly" },
  { path: "/features/", priority: "0.8", changefreq: "monthly" },
  { path: "/tour/", priority: "0.8", changefreq: "monthly" },
  { path: "/security/", priority: "0.8", changefreq: "monthly" },
  { path: "/contact/", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy/", priority: "0.5", changefreq: "yearly" },
  { path: "/terms/", priority: "0.5", changefreq: "yearly" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const urls = pages
  .map(({ path, priority, changefreq }) => {
    const loc = path === "/" ? `${origin}/` : `${origin}${path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow:

Sitemap: ${origin}/sitemap.xml
`;

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(join(outDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(outDir, "robots.txt"), robots, "utf8");
console.log("Wrote out/sitemap.xml and out/robots.txt");

import type { NextConfig } from "next";
import { siteConfig } from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: siteConfig.basePath || undefined,
  assetPrefix: siteConfig.basePath || undefined,
};

export default nextConfig;

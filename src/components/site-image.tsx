import Image, { type ImageProps } from "next/image";
import { withBase } from "../../site.config";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/** Bump when replacing same-named screenshot PNGs so CDN/browser caches refresh. */
const SCREENSHOT_CACHE_BUST = "20260923b";

/** Public asset paths that include GitHub Pages basePath. */
export function SiteImage({ src, alt, ...rest }: SiteImageProps) {
  let path = src;
  if (!src.startsWith("http") && src.includes("/screenshots/")) {
    const sep = src.includes("?") ? "&" : "?";
    path = `${src}${sep}v=${SCREENSHOT_CACHE_BUST}`;
  }
  const resolved = path.startsWith("http") ? path : withBase(path);
  return <Image src={resolved} alt={alt} unoptimized {...rest} />;
}

import Image, { type ImageProps } from "next/image";
import { withBase } from "../../site.config";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/** Public asset paths that include GitHub Pages basePath. */
export function SiteImage({ src, alt, ...rest }: SiteImageProps) {
  const resolved = src.startsWith("http") ? src : withBase(src);
  return <Image src={resolved} alt={alt} unoptimized {...rest} />;
}

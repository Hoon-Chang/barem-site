import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * App screenshot with device bezel baked into the PNG.
 * Do not add a second CSS chassis — that double-frames the phone.
 */
export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] drop-shadow-[0_28px_60px_rgba(15,61,44,0.35)] ${className}`}
    >
      <SiteImage
        src={src}
        alt={alt}
        width={560}
        height={1186}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 70vw, 280px"
        priority={priority}
      />
    </div>
  );
}

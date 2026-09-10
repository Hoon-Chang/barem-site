import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Store screenshots already include device chrome (status bar / island).
 * Do not wrap them in another phone bezel.
 */
export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] overflow-hidden rounded-[1.75rem] shadow-[0_28px_60px_-24px_rgba(15,61,44,0.45)] ${className}`}
    >
      <SiteImage
        src={src}
        alt={alt}
        width={414}
        height={900}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 70vw, 280px"
        priority={priority}
      />
    </div>
  );
}

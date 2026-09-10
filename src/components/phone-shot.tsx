import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Device bezel around raw app screenshots.
 * Screenshots already include status bar / Dynamic Island — do not draw a second notch.
 */
export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] overflow-hidden rounded-[2.1rem] border-[6px] border-[#1a2a22] bg-[#1a2a22] shadow-[0_28px_60px_-24px_rgba(15,61,44,0.55)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.55rem] bg-cream">
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
    </div>
  );
}

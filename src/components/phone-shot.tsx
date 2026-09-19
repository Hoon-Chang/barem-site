import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Device bezel around raw app screenshots (canonical site format).
 * PNG must be app UI only at 414×900 — no baked chassis.
 * Screenshots already include status bar / Dynamic Island — do not draw a second notch.
 * Refresh: ../barem/tool/export_site_screenshots.sh (see README 「스크린샷」).
 *
 * Radius uses container query units so hero side phones stay proportional.
 * ~8% of width (not 12%+) — CSS circular corners read rounder than Apple’s
 * continuous curve, so a lower % matches real iPhone silhouette better.
 */
export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  return (
    <div
      className={`@container relative mx-auto w-[min(100%,280px)] ${className}`}
    >
      <div className="overflow-hidden rounded-[8cqw] border-[length:max(3px,1.55cqw)] border-solid border-[#1a2a22] bg-[#1a2a22] shadow-[0_28px_60px_-24px_rgba(15,61,44,0.55)]">
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

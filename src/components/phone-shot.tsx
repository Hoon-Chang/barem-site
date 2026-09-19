import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Thin CSS chassis around raw app screenshots (canonical site format).
 * PNG must be app UI only at 414×900 — no baked device bezel.
 * Screenshots already include status bar / Dynamic Island — do not draw a second notch.
 * Refresh: ../barem/tool/export_site_screenshots.sh (see README 「스크린샷」).
 *
 * Proportions (container-query % of frame width):
 * - Outer chassis ≈ 5.5cqw — CSS circular arcs read rounder than Apple’s
 *   continuous corner, so keep this well below the physical ~12–14%.
 * - Bezel ≈ 0.85cqw (min 2px) — modern edge-to-edge look, not a thick picture frame.
 * - Screen radius = outer − bezel so curves stay concentric.
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
      <div className="rounded-[5.5cqw] bg-[#1a2a22] p-[max(2px,0.85cqw)] shadow-[0_28px_60px_-24px_rgba(15,61,44,0.55)]">
        <div className="overflow-hidden rounded-[calc(5.5cqw-max(2px,0.85cqw))] bg-[#F7F6F3]">
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
    </div>
  );
}

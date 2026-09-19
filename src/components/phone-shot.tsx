import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * App screenshot composited into an original SVG iPhone Pro–style chassis.
 * PNG must be app UI only at 414×900 (status bar + Dynamic Island) — no baked bezel.
 * Frame owns the silhouette; do not also apply CSS pill borders.
 * Refresh screenshots: ../barem/tool/export_site_screenshots.sh
 *
 * Screen hole matches public/brand/iphone-pro-frame.svg (viewBox -4 0 398 816):
 * inset (12,12) size 366×792, corner 38.
 */
const FRAME = {
  vbW: 398,
  vbH: 816,
  screenX: 12 - -4,
  screenY: 12,
  screenW: 366,
  screenH: 792,
  screenR: 38,
} as const;

export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  const left = (FRAME.screenX / FRAME.vbW) * 100;
  const top = (FRAME.screenY / FRAME.vbH) * 100;
  const width = (FRAME.screenW / FRAME.vbW) * 100;
  const height = (FRAME.screenH / FRAME.vbH) * 100;
  const radiusX = (FRAME.screenR / FRAME.screenW) * 100;
  const radiusY = (FRAME.screenR / FRAME.screenH) * 100;

  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] ${className}`}
      style={{ aspectRatio: `${FRAME.vbW} / ${FRAME.vbH}` }}
    >
      <div
        className="absolute overflow-hidden bg-[#F7F6F3]"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${width}%`,
          height: `${height}%`,
          borderRadius: `${radiusX}% / ${radiusY}%`,
        }}
      >
        <SiteImage
          src={src}
          alt={alt}
          width={414}
          height={900}
          className="block h-full w-full object-cover object-top"
          sizes="(max-width: 768px) 70vw, 280px"
          priority={priority}
        />
      </div>
      <SiteImage
        src="/brand/iphone-pro-frame.svg"
        alt=""
        width={FRAME.vbW}
        height={FRAME.vbH}
        className="pointer-events-none absolute inset-0 h-full w-full select-none drop-shadow-[0_28px_60px_rgba(15,61,44,0.45)]"
        sizes="(max-width: 768px) 70vw, 280px"
        aria-hidden
      />
    </div>
  );
}

import { withBase } from "../../site.config";
import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * App screenshot inside original SVG iPhone Pro–style chassis.
 * PNG: app UI only 414×900 (status bar + Dynamic Island). No baked bezel.
 * Frame SVG owns silhouette — no CSS pill borders on the chassis.
 *
 * Screen hole (viewBox -4 0 398 816): inset (16,16) size 358×784, r=24.
 */
const FRAME = {
  vbW: 398,
  vbH: 816,
  screenX: 16 - -4,
  screenY: 16,
  screenW: 358,
  screenH: 784,
  screenR: 24,
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
      {/* eslint-disable-next-line @next/next/no-img-element -- raw SVG chassis */}
      <img
        src={withBase("/brand/iphone-pro-frame.svg")}
        alt=""
        width={FRAME.vbW}
        height={FRAME.vbH}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none drop-shadow-[0_28px_60px_rgba(15,61,44,0.45)]"
        draggable={false}
        aria-hidden
      />
    </div>
  );
}

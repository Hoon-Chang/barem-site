import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * App screenshot inside an original inline SVG iPhone Pro–style chassis.
 * PNG: app UI only 414×900 (status bar + Dynamic Island). No baked bezel.
 * SVG owns the silhouette — no CSS pill borders on the chassis.
 *
 * viewBox -4 0 398 816; screen inset 17, size 356×782, r=18.
 */
const FRAME = {
  vbW: 398,
  vbH: 816,
  screenX: 17 - -4,
  screenY: 17,
  screenW: 356,
  screenH: 782,
  screenR: 18,
} as const;

function IphoneProFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 0 398 816"
      className={className}
      fill="none"
      aria-hidden
    >
      <rect x="-3" y="150" width="3" height="26" rx="1.2" fill="#1a2a22" />
      <rect x="-3" y="200" width="3" height="52" rx="1.2" fill="#1a2a22" />
      <rect x="-3" y="262" width="3" height="52" rx="1.2" fill="#1a2a22" />
      <rect x="390" y="220" width="3" height="80" rx="1.2" fill="#1a2a22" />
      <path
        fill="#1a2a22"
        fillRule="evenodd"
        d="M28 0H362A28 28 0 0 1 390 28V788A28 28 0 0 1 362 816H28A28 28 0 0 1 0 788V28A28 28 0 0 1 28 0ZM35 17H355A18 18 0 0 1 373 35V781A18 18 0 0 1 355 799H35A18 18 0 0 1 17 781V35A18 18 0 0 1 35 17Z"
      />
    </svg>
  );
}

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
      <IphoneProFrame className="pointer-events-none absolute inset-0 z-10 h-full w-full drop-shadow-[0_28px_60px_rgba(15,61,44,0.45)]" />
    </div>
  );
}

import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * App screenshot composited into a real iPhone 16 Pro frame PNG
 * (Black Titanium — hardware Dynamic Island kept on the frame).
 *
 * Screenshot PNGs are UI-only 414×900 (status bar + UI, no island in the
 * shot). The frame PNG supplies the only Dynamic Island.
 *
 * Screen rect from template.json: x=102 y=100 w=1206 h=2622 in 1406×2822.
 * Filename suffix `-v2` busts CDN/browser cache when the frame asset changes.
 */
const FRAME = {
  src: "/brand/iphone-16-pro-frame-v2.png",
  w: 1406,
  h: 2822,
  screen: { x: 102, y: 100, w: 1206, h: 2622 },
} as const;

export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  const { x, y, w, h } = FRAME.screen;

  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] ${className}`}
      style={{ aspectRatio: `${FRAME.w} / ${FRAME.h}` }}
    >
      <div
        className="absolute overflow-hidden bg-[#F7F6F3]"
        style={{
          left: `${(x / FRAME.w) * 100}%`,
          top: `${(y / FRAME.h) * 100}%`,
          width: `${(w / FRAME.w) * 100}%`,
          height: `${(h / FRAME.h) * 100}%`,
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
        src={FRAME.src}
        alt=""
        width={FRAME.w}
        height={FRAME.h}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full drop-shadow-[0_28px_60px_rgba(15,61,44,0.45)]"
        sizes="(max-width: 768px) 70vw, 280px"
        priority={priority}
      />
    </div>
  );
}

import { SiteImage } from "./site-image";

type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Device-style frame for App Store screenshots */
export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneShotProps) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] overflow-hidden rounded-[2rem] border-[5px] border-[#1a2a22] bg-[#1a2a22] shadow-[0_28px_60px_-24px_rgba(15,61,44,0.55)] ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
      <SiteImage
        src={src}
        alt={alt}
        width={416}
        height={900}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 70vw, 280px"
        priority={priority}
      />
    </div>
  );
}

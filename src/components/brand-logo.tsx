import Image from "next/image";
import { siteConfig } from "../../site.config";

type BrandLogoProps = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
  inverted?: boolean;
};

export function BrandLogo({
  size = 36,
  showWordmark = true,
  className = "",
  wordmarkClassName = "",
  inverted = false,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/barem_icon.png"
        alt=""
        width={size}
        height={size}
        className="rounded-[22%] shadow-sm"
        priority
      />
      {showWordmark ? (
        <span
          className={`font-[family-name:var(--font-display)] font-semibold tracking-tight ${
            inverted ? "text-white" : "text-green-deep"
          } ${wordmarkClassName}`}
        >
          {siteConfig.brand.shortNameKo}
          <span
            className={`ml-2 text-[0.55em] font-medium tracking-[0.16em] ${
              inverted ? "text-white/65" : "text-muted"
            }`}
          >
            {siteConfig.brand.legalNameEn}
          </span>
        </span>
      ) : null}
    </span>
  );
}

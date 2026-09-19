import Link from "next/link";
import { siteConfig } from "../../site.config";
import { SiteImage } from "./site-image";

export function SiteFooter() {
  const { brand, business, contact } = siteConfig;
  const reg =
    business.registrationNumber &&
    !business.registrationNumber.startsWith("000-")
      ? business.registrationNumber
      : null;

  return (
    <footer id="contact" className="border-t border-line bg-green-deep text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <SiteImage
            src="/brand/barem_icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[22%] ring-1 ring-white/20"
          />
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
            {brand.shortNameKo}
            <span className="ml-2 text-sm font-medium tracking-[0.16em] text-white/65">
              {brand.legalNameEn}
            </span>
          </p>
        </div>

        <p className="text-sm leading-relaxed text-white/75">
          {brand.legalNameEn}
          {business.representative ? ` · 대표 ${business.representative}` : ""}
          {reg ? ` · ${reg}` : ""}
          {" · "}
          <a
            href={`mailto:${contact.email}`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
        </p>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {brand.legalNameEn}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy/" className="hover:text-white">
              개인정보처리방침
            </Link>
            <Link href="/terms/" className="hover:text-white">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../site.config";

export function SiteFooter() {
  const { brand, business, contact } = siteConfig;

  return (
    <footer id="contact" className="border-t border-line bg-green-deep text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-3">
            <Image
              src="/brand/barem_icon.png"
              alt=""
              width={40}
              height={40}
              className="rounded-[22%] ring-1 ring-white/20"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                {brand.shortNameKo}
              </p>
              <p className="text-sm tracking-[0.18em] text-white/70">
                {brand.legalNameEn}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {brand.appNameKo} — 온디바이스로 안전하게 기록하는 건강 다이어리.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-5 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
        </div>

        <div className="space-y-3 text-sm text-white/80">
          <p>
            <span className="text-white/50">Legal Entity / 상호</span>
            <br />
            <span className="font-semibold text-white">{brand.legalNameEn}</span>
          </p>
          <p>
            <span className="text-white/50">Business Type</span>
            <br />
            {business.typeKo} ({business.typeEn})
          </p>
          <p>
            <span className="text-white/50">Representative / 대표</span>
            <br />
            {business.representative}
          </p>
          <p>
            <span className="text-white/50">Business Registration No. / 사업자등록번호</span>
            <br />
            {business.registrationNumber}
          </p>
          {business.address ? (
            <p>
              <span className="text-white/50">Address</span>
              <br />
              {business.address}
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {brand.legalNameEn}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy/" className="hover:text-white">
              개인정보처리방침 (Privacy Policy)
            </Link>
            <Link href="/terms/" className="hover:text-white">
              이용약관 (Terms of Service)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

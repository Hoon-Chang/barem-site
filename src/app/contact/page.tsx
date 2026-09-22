import type { Metadata } from "next";
import Link from "next/link";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { absoluteUrl, siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: "고객 문의",
  description: `${siteConfig.brand.appNameKo} 고객 문의 · ${siteConfig.contact.supportEmail}`,
  alternates: { canonical: absoluteUrl("/contact/") },
};

export default function ContactPage() {
  const { brand, contact, business } = siteConfig;
  const email = contact.supportEmail || contact.email;

  return (
    <>
      <PageShell
        title="고객 문의"
        lead="앱 이용·개인정보·스토어 관련 문의는 이메일로 남겨 주세요."
      >
        <div className="max-w-xl space-y-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
              이메일
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-lg font-semibold text-green underline-offset-4 hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="border-t border-line pt-8 text-sm leading-relaxed text-muted">
            <p>
              {brand.legalNameEn}
              {business.representative ? ` · 대표 ${business.representative}` : null}
            </p>
            <p className="mt-3">
              <Link href="/privacy/" className="text-green hover:underline">
                개인정보처리방침
              </Link>
              <span className="mx-2 text-line">·</span>
              <Link href="/terms/" className="text-green hover:underline">
                이용약관
              </Link>
            </p>
          </div>
        </div>
      </PageShell>
      <DownloadBand />
    </>
  );
}

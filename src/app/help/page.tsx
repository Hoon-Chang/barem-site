import type { Metadata } from "next";
import Link from "next/link";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { GuideContent } from "../../components/sections/guide";
import { FaqAccordion } from "../../components/faq-accordion";
import { absoluteUrl, siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: "가이드 & FAQ",
  description:
    "바램 퀵스타트 가이드, 자주 묻는 질문, 고객 문의. 설치 후 목적만 고르면 바로 시작할 수 있습니다.",
  alternates: { canonical: absoluteUrl("/help/") },
};

export default function HelpPage() {
  const email =
    siteConfig.contact.supportEmail || siteConfig.contact.email;

  return (
    <>
      <PageShell
        eyebrow="가이드 & FAQ"
        title="첫 주 가이드와 자주 묻는 질문"
        lead="설치 후 목적만 고르면 바로 쓸 수 있어요. 막히는 부분은 FAQ와 이메일 문의로 이어집니다."
      >
        <div className="space-y-16 sm:space-y-20">
          <p className="rounded-2xl border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-muted">
            항암일지·항암일기를 앱으로 남기는 방법이 궁금하시면{" "}
            <Link
              href="/chemo-diary/"
              className="font-semibold text-green underline-offset-4 hover:underline"
            >
              항암일지 가이드
            </Link>
            를 먼저 보세요.
          </p>
          <GuideContent />

          <div className="border-t border-line pt-14 sm:pt-16">
            <FaqAccordion />
          </div>

          <section
            id="contact"
            className="scroll-mt-24 border-t border-line pt-14 sm:pt-16"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
              고객 문의
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              이메일로 문의하기
            </h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
              앱 이용·개인정보·스토어 관련 문의는 이메일로 남겨 주세요.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-4 inline-block text-lg font-semibold text-green underline-offset-4 hover:underline"
            >
              {email}
            </a>
            <p className="mt-6 text-sm text-muted">
              <Link href="/privacy/" className="text-green hover:underline">
                개인정보처리방침
              </Link>
              <span className="mx-2 text-line">·</span>
              <Link href="/terms/" className="text-green hover:underline">
                이용약관
              </Link>
            </p>
          </section>
        </div>
      </PageShell>
      <DownloadBand />
    </>
  );
}

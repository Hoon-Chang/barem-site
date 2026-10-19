import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { FeaturesContent } from "../../components/sections/features";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "주요 기능",
  description:
    "검사 OCR·발열 안심 가이드·진료 브리핑·암호화 가족 연동을 탭으로 체험하고, 실제 화면으로 앱을 둘러보세요.",
  alternates: { canonical: absoluteUrl("/features/") },
};

export default function FeaturesPage() {
  return (
    <>
      <PageShell
        surface
        eyebrow="주요 기능"
        title="핵심 기능을 탭으로 체험하세요"
        lead="검사 OCR, 발열 가이드, 진료 브리핑, 가족 연동 — 네 가지를 고른 뒤, 아래에서 실제 화면까지 이어서 보세요."
      >
        <FeaturesContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

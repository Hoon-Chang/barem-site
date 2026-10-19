import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { FeaturesContent } from "../../components/sections/features";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "기능 소개",
  description:
    "검사 OCR·발열 안심 가이드·진료 브리핑·암호화 가족 연동을 탭으로 체험하고, 오늘 미션·간편사용·복약까지 이어 보세요.",
  alternates: { canonical: absoluteUrl("/features/") },
};

export default function FeaturesPage() {
  return (
    <>
      <PageShell
        surface
        title="핵심 기능을 탭으로 체험하세요"
        lead="검사 OCR, 발열 가이드, 진료 브리핑, 가족 연동 — 네 가지를 골라 화면과 혜택을 바로 확인하세요."
      >
        <FeaturesContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

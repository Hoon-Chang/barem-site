import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { GuideContent } from "../../components/sections/guide";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "시작 가이드",
  description:
    "목적 고르기부터 일정·검사·컨디션·가족 연동·잠금까지 — 첫 주에 이것만 하면 됩니다.",
  alternates: { canonical: absoluteUrl("/guide/") },
};

export default function GuidePage() {
  return (
    <>
      <PageShell
        title="첫 주에 이것만"
        lead="설치 후 목적만 고르면 바로 쓸 수 있어요. 필요할 때 가족 안심 연동과 잠금만 더하면 됩니다."
      >
        <GuideContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

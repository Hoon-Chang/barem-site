import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { GuideContent } from "../../components/sections/guide";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "시작 가이드",
  description:
    "목적 고르기부터 일정·검사·컨디션·잠금까지 — 첫 주에 이것만 하면 됩니다.",
  alternates: { canonical: absoluteUrl("/guide/") },
};

export default function GuidePage() {
  return (
    <>
      <PageShell
        title="첫 주에 이것만"
        lead="설치만 하면, 목적 고르기부터 바로 시작할 수 있습니다."
      >
        <GuideContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

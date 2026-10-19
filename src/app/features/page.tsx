import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { FeaturesContent } from "../../components/sections/features";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "기능 소개",
  description:
    "오늘 미션·맞춤 홈·가족 안심 연동·간편사용·복약 알림·케어 리포트·검사 OCR·바이탈·식단·일정·PDF·잠금 등 바램 핵심 기능.",
  alternates: { canonical: absoluteUrl("/features/") },
};

export default function FeaturesPage() {
  return (
    <>
      <PageShell
        surface
        title="무엇을 할 수 있나요"
        lead="오늘 미션과 가족 연동부터, 간편사용·복약·검사·일정까지. 필요한 기능만 보면 됩니다."
      >
        <FeaturesContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

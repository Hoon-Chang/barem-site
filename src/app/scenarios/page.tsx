import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { ScenariosContent } from "../../components/sections/scenarios";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "사용 예시",
  description:
    "항암 투여 주간, 채혈·외래, 차수 비교, 케어 리포트, 보호자, 추적 관찰 — 이럴 때 바램을 쓰는 방법.",
  alternates: { canonical: absoluteUrl("/scenarios/") },
};

export default function ScenariosPage() {
  return (
    <>
      <PageShell
        surface
        eyebrow="사용 예시"
        title="이럴 때, 이렇게 쓰면 좋아요"
        lead="모든 기능을 다 쓸 필요는 없어요. 오늘 기록부터 외래 전 케어 리포트까지, 지금 필요한 것만 골라 보세요."
      >
        <ScenariosContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { ScenariosContent } from "../../components/sections/scenarios";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "사용 예시",
  description:
    "항암 3주 주기 환자 타임라인과 멀리 계신 부모님 안심 연동, 케어 리포트 4종 미리보기까지 — 이럴 때 바램을 쓰는 방법.",
  alternates: { canonical: absoluteUrl("/scenarios/") },
};

export default function ScenariosPage() {
  return (
    <>
      <PageShell
        surface
        eyebrow="사용 예시"
        title={
          <>
            항암 주기와 원격 부모님,
            <br className="hidden sm:block" />
            두 가지 흐름으로 보세요
          </>
        }
        lead="환자 본인의 3주 주기 기록부터, 멀리 계신 부모님을 챙기는 안심 연동까지. 필요한 시나리오 탭만 골라 보시면 됩니다."
      >
        <ScenariosContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

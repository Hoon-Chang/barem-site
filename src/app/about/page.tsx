import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { ForWhomContent } from "../../components/sections/for-whom";
import { ScenariosContent } from "../../components/sections/scenarios";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "서비스 소개",
  description:
    "항암 환자·원격 보호자·회복기 활용 시나리오와 Before/After. 바램으로 흩어진 기록을 안심 검사노트로 모읍니다.",
  alternates: { canonical: absoluteUrl("/about/") },
};

export default function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="서비스 소개"
        title={
          <>
            나와 가족 중 누구에게든,
            <br className="hidden sm:block" />
            오늘의 기록이 필요하신 분
          </>
        }
        lead="환자·보호자·회복기별 상황과 실제 활용 시나리오를 한곳에서 보세요. 캡처 한 장과 안심 보관으로 외래 준비를 돕습니다."
      >
        <div className="space-y-16 sm:space-y-20">
          <ForWhomContent />
          <div id="scenarios" className="scroll-mt-24 border-t border-line pt-14 sm:pt-16">
            <ScenariosContent />
          </div>
        </div>
      </PageShell>
      <DownloadBand />
    </>
  );
}

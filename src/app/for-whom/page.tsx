import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { ForWhomContent } from "../../components/sections/for-whom";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "이런 분께",
  description:
    "항암 치료 중인 환자, 원격 보호자, 회복기·일상 관리를 위한 바램. Before/After로 흩어진 기록과 안심 검사노트를 비교해 보세요.",
  alternates: { canonical: absoluteUrl("/for-whom/") },
};

export default function ForWhomPage() {
  return (
    <>
      <PageShell
        eyebrow="이런 분께"
        title={
          <>
            나와 가족 중 누구에게든,
            <br className="hidden sm:block" />
            오늘의 기록이 필요하신 분
          </>
        }
        lead="바램은 암 치료·회복 중 스스로 기록을 정리하려고 만들었습니다. 병원 앱 스크린샷 대신, 캡처 한 장과 안심 보관으로 외래 준비를 돕습니다."
      >
        <ForWhomContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

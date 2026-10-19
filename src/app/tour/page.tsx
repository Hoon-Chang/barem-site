import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { TourContent } from "../../components/sections/tour";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "앱 둘러보기",
  description:
    "실제 화면으로 보는 바램의 홈·오늘 미션·가족 연동·간편사용·복약·검사·기록·일정 흐름.",
  alternates: { canonical: absoluteUrl("/tour/") },
};

export default function TourPage() {
  return (
    <>
      <PageShell
        title="앱 둘러보기"
        lead="실제 화면으로 보는 바램의 주요 흐름입니다. 간편사용은 오늘·약·더보기 세 탭입니다."
      >
        <TourContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

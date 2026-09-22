import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { TourContent } from "../../components/sections/tour";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "앱 둘러보기",
  description: "실제 화면으로 보는 바램의 홈·검사·기록·일정·프로필 흐름.",
  alternates: { canonical: absoluteUrl("/tour/") },
};

export default function TourPage() {
  return (
    <>
      <PageShell
        title="앱 둘러보기"
        lead="실제 화면으로 보는 바램의 주요 흐름입니다."
      >
        <TourContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

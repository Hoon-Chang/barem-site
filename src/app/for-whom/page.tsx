import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { ForWhomContent } from "../../components/sections/for-whom";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "이런 분께",
  description:
    "항암·수술·외래가 이어질 때 오늘 기록을 한곳에. 멀리 있는 가족과 안심 연동·회복·일상에도.",
  alternates: { canonical: absoluteUrl("/for-whom/") },
};

export default function ForWhomPage() {
  return (
    <>
      <PageShell
        eyebrow="이런 분께"
        title={
          <>
            항암·수술·외래가 이어질 때,
            <br className="hidden sm:block" />
            오늘을 한곳에 — 필요할 때 가족과
          </>
        }
        lead="바램은 암 치료·회복 중 스스로 기록을 정리하려고 만들었습니다. 기본 기록은 기기 안에만 두고, 원할 때만 가족 안심 연동으로 보호자 기기에 암호화해 전달합니다."
      >
        <ForWhomContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

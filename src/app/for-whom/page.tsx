import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { ForWhomContent } from "../../components/sections/for-whom";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "이런 분께",
  description:
    "항암·수술·외래가 이어질 때 차수·검사·컨디션을 한곳에. 보호자·회복·일상에도.",
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
            차수·검사·컨디션을 한곳에
          </>
        }
        lead="바램은 암 치료·회복 중 스스로 기록을 정리하려고 만들었습니다. 민감한 데이터는 서버로 보내지 않고, 쓰는 사람 기기에만 둡니다."
      >
        <ForWhomContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

import type { Metadata } from "next";
import { DownloadBand, PageShell } from "../../components/page-chrome";
import { SecurityContent } from "../../components/sections/security";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "데이터 보안",
  description:
    "Local-First·기기 암호화·계정 없음. 건강 기록을 서버에 올리지 않습니다.",
  alternates: { canonical: absoluteUrl("/security/") },
};

export default function SecurityPage() {
  return (
    <>
      <PageShell
        surface
        title="데이터 보안"
        lead="광고·마케팅을 위한 건강 데이터 판매·공유는 하지 않습니다. 원칙은 내 기기에만 두는 것입니다."
      >
        <SecurityContent />
      </PageShell>
      <DownloadBand />
    </>
  );
}

import type { Metadata } from "next";
import { RedirectClient } from "../../components/redirect-client";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "시작 가이드",
  description: "가이드 & FAQ 페이지로 이동했습니다.",
  alternates: { canonical: absoluteUrl("/help/") },
  robots: { index: false, follow: true },
};

export default function GuideRedirectPage() {
  return <RedirectClient to={"/help/"} />;
}

import type { Metadata } from "next";
import { RedirectClient } from "../../components/redirect-client";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "고객 문의",
  description: "가이드 & FAQ 페이지로 이동했습니다.",
  alternates: { canonical: absoluteUrl("/help/") },
  robots: { index: false, follow: true },
};

export default function ContactRedirectPage() {
  return <RedirectClient to={"/help/#contact"} />;
}

import type { Metadata } from "next";
import { RedirectClient } from "../../components/redirect-client";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "이런 분께",
  description: "서비스 소개 페이지로 이동했습니다.",
  alternates: { canonical: absoluteUrl("/about/") },
  robots: { index: false, follow: true },
};

export default function ForWhomRedirectPage() {
  return <RedirectClient to={"/about/"} />;
}

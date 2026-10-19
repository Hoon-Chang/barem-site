import type { Metadata } from "next";
import { RedirectClient } from "../../components/redirect-client";
import { absoluteUrl } from "../../../site.config";

export const metadata: Metadata = {
  title: "앱 둘러보기",
  description: "주요 기능 페이지로 이동했습니다.",
  alternates: { canonical: absoluteUrl("/features/") },
  robots: { index: false, follow: true },
};

export default function TourRedirectPage() {
  return <RedirectClient to={"/features/#tour"} />;
}

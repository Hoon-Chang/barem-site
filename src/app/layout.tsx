import type { Metadata } from "next";
import { Noto_Sans_KR, Outfit } from "next/font/google";
import { HashScroll } from "../components/hash-scroll";
import { SiteAnalytics } from "../components/site-analytics";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { absoluteUrl, siteConfig, withBase } from "../../site.config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seo.titleKo,
    template: `%s | ${siteConfig.brand.legalNameEn}`,
  },
  description: siteConfig.seo.descriptionKo,
  applicationName: siteConfig.brand.appNameKo,
  authors: [{ name: siteConfig.brand.legalNameEn }],
  keywords: [
    "바램",
    "BAREM",
    "항암일지",
    "항암일기",
    "항암 일지",
    "항암 일기",
    "암 환자",
    "항암",
    "피검사",
    "ANC",
    "호중구",
    "검사결과",
    "온디바이스",
    "진료 브리핑",
    "발열",
    "가족 연동",
    "건강 기록",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.seo.ogLocale,
    url: absoluteUrl("/"),
    siteName: siteConfig.brand.legalNameEn,
    title: siteConfig.seo.titleKo,
    description: siteConfig.seo.descriptionKo,
    images: [
      {
        url: absoluteUrl("/brand/barem_icon_lg.png"),
        width: 512,
        height: 512,
        alt: "바램 (BAREM) 앱 아이콘",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.titleKo,
    description: siteConfig.seo.descriptionKo,
    images: [absoluteUrl("/brand/barem_icon_lg.png")],
  },
  icons: {
    icon: [
      { url: withBase("/favicon.ico"), sizes: "48x48", type: "image/x-icon" },
      { url: withBase("/brand/logo.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: withBase("/brand/logo.png"),
  },
  robots: { index: true, follow: true },
  ...(siteConfig.googleSiteVerification
    ? {
        verification: {
          google: siteConfig.googleSiteVerification,
        },
      }
    : {}),
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${outfit.variable} ${notoSansKr.variable} min-h-screen antialiased`}
      >
        <SiteHeader />
        <HashScroll />
        <main>{children}</main>
        <SiteFooter />
        <SiteAnalytics />
      </body>
    </html>
  );
}

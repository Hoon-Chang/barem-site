import type { Metadata } from "next";
import Link from "next/link";
import { DownloadBand, PageShell, TextLink } from "../../components/page-chrome";
import { absoluteUrl, siteConfig } from "../../../site.config";

const pageDescription =
  "항암일지·항암일기를 종이 대신 앱으로. 바램은 항암 차수·피검사·체온·식사·일정을 기기에만 모아, 외래 전 진료 브리핑까지 정리합니다.";

export const metadata: Metadata = {
  title: "항암일지·항암일기 앱 | 바램",
  description: pageDescription,
  keywords: [
    "항암일지",
    "항암일기",
    "항암 일지",
    "항암 일기",
    "항암 기록 앱",
    "암 환자 일기",
    "바램",
    "BAREM",
  ],
  alternates: { canonical: absoluteUrl("/chemo-diary/") },
  openGraph: {
    title: "항암일지·항암일기 앱 | 바램",
    description:
      "항암일지·항암일기를 기기에만 안전하게. 피검사 OCR, 차수 비교, 가족 안심 연동까지.",
    url: absoluteUrl("/chemo-diary/"),
  },
};

const steps = [
  {
    title: "투여일(D0)과 차수를 먼저 남깁니다",
    body: "항암일지의 기준은 날짜순보다 주기입니다. 바램에 항암 투여일과 차수를 등록하면 이후 기록이 D+N으로 묶입니다.",
  },
  {
    title: "체온·증상·식사를 하루 한 줄이라도",
    body: "힘든 날에는 빈칸을 다 채우지 않아도 됩니다. 발열·컨디션·식사만 남겨도 외래에서 말할 근거가 됩니다.",
  },
  {
    title: "피검사 결과지를 찍어 추이로 봅니다",
    body: "병원 앱 캡처나 종이 결과지를 OCR로 읽고, ANC·WBC 등 수치를 차수별로 비교할 수 있습니다.",
  },
  {
    title: "외래 전에 1페이지로 모읍니다",
    body: "진료 브리핑 리포트로 최고 체온·체중·질문·영양을 A4 한 장에 모아 상담 준비를 합니다.",
  },
] as const;

const faqs = [
  {
    q: "항암일지 앱과 종이 일지 중 무엇이 나을까요?",
    a: "원칙은 같습니다. 주기 기준으로 적고, 부작용을 일상 수행으로 남기며, 진료 전 세 줄로 정리하는 것입니다. 바램은 그 정리를 차수·그래프·리포트로 줄여 줍니다.",
  },
  {
    q: "항암일기 검색으로 바램을 찾아도 되나요?",
    a: "네. 바램은 항암일지·항암일기처럼 치료 중 기록을 남기는 온디바이스 건강 기록 앱입니다. App Store와 Google Play에서 「바램」으로 설치할 수 있습니다.",
  },
  {
    q: "기록이 서버에 올라가나요?",
    a: "기본 기록은 이 기기 안에서만 암호화해 보관합니다. 가족 안심 연동을 켠 경우에만 암호문이 잠시 중계됩니다.",
  },
] as const;

export default function ChemoDiaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "항암일지·항암일기 앱 | 바램",
    description: pageDescription,
    url: absoluteUrl("/chemo-diary/"),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.brand.legalNameEn,
      url: absoluteUrl("/"),
    },
    about: {
      "@type": "SoftwareApplication",
      name: "바램",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageShell
        eyebrow="항암일지 · 항암일기"
        title={
          <>
            항암일지·항암일기,
            <br className="hidden sm:block" />
            종이 대신 바램으로
          </>
        }
        lead="항암일지를 쓰다가 진료에서 안 쓰였다면, 정리 방식이 문제인 경우가 많습니다. 바램은 투여일 기준으로 기록하고, 피검사·체온·식사를 한곳에 모아 외래 전 요약까지 돕습니다."
      >
        <div className="space-y-14 sm:space-y-16">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              왜 바램으로 항암일지를 남기나요?
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <li>
                <span className="font-semibold text-ink">일지에서 진료까지:</span>{" "}
                항암일기·항암일지를 찾는 분들이 피검사 추이, 발열 체크, 차수
                비교, 가족 연동까지 한 앱에서 이어갈 수 있습니다.
              </li>
              <li>
                <span className="font-semibold text-ink">온디바이스:</span> 민감한
                치료 기록은 기본으로 기기에만 암호화해 둡니다.
              </li>
              <li>
                <span className="font-semibold text-ink">진료 준비:</span> 날짜순
                나열이 아니라 차수·리포트로 정리해 짧은 외래 시간을 돕습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              첫 주 항암일기 쓰는 법
            </h2>
            <ol className="mt-6 space-y-5">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-line bg-surface px-5 py-5"
                >
                  <p className="text-xs font-semibold tracking-[0.14em] text-green uppercase">
                    STEP {i + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-ink sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              자주 묻는 질문
            </h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map((item) => (
                <li key={item.q} className="py-5">
                  <h3 className="text-base font-semibold text-ink">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <p className="text-sm text-muted">
            더 알아보기:{" "}
            <TextLink href="/about/">서비스 소개</TextLink>
            <span className="mx-2 text-line">·</span>
            <TextLink href="/features/">주요 기능</TextLink>
            <span className="mx-2 text-line">·</span>
            <TextLink href="/help/">가이드 &amp; FAQ</TextLink>
            <span className="mx-2 text-line">·</span>
            <Link
              href="/#download"
              className="font-medium text-green underline-offset-4 hover:underline"
            >
              앱 다운로드
            </Link>
          </p>
        </div>
      </PageShell>
      <DownloadBand />
    </>
  );
}

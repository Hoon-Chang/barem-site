import Link from "next/link";
import { PhoneShot } from "../components/phone-shot";
import { HeroOcrDemo } from "../components/hero-ocr-demo";
import { HeroTrustBadges } from "../components/hero-trust-badges";
import { SiteImage } from "../components/site-image";
import { StoreButtons } from "../components/store-buttons";
import { DownloadBand } from "../components/page-chrome";
import { HomeCareSystem } from "../components/home-care-system";
import { CareReportGallery } from "../components/care-report-gallery";
import { FaqAccordion } from "../components/faq-accordion";
import {
  homeCoreFeatures,
  homeTestimonials,
  sitePages,
} from "../content/marketing";
import { siteConfig } from "../../site.config";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,#cfe6d8_0%,transparent_50%),radial-gradient(ellipse_at_95%_20%,#dce8e1_0%,transparent_40%),linear-gradient(180deg,#eef5f0_0%,var(--cream)_72%)]"
        />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-3">
              <SiteImage
                src="/brand/barem_icon_lg.png"
                alt="바램 앱 아이콘"
                width={72}
                height={72}
                className="rounded-[22%] shadow-[0_12px_32px_-12px_rgba(15,61,44,0.45)]"
                priority
              />
              <div>
                <p className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-green-deep sm:text-5xl">
                  {siteConfig.brand.shortNameKo}
                </p>
                <p className="mt-0.5 text-xs font-medium tracking-[0.28em] text-muted sm:text-sm">
                  {siteConfig.brand.legalNameEn}
                </p>
              </div>
            </div>

            <HeroTrustBadges />

            <h1 className="mt-5 max-w-xl text-[1.65rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
              완치를 향한 매일의 발걸음,
              <br />
              서버 전송 없는 100% 안심 검사노트
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              불안한 피검사 수치 추이부터 매일의 체온·식사, 3분 외래 진료
              준비까지 — 바램이 곁에서 함께합니다.
            </p>
            <div id="download" className="mt-8 scroll-mt-24">
              <StoreButtons />
            </div>
            <p className="mt-3 max-w-lg text-[13px] font-medium leading-relaxed text-green-deep sm:text-sm">
              ※ 어떠한 개인정보도 외부 서버로 전송되지 않으며, 비행기
              모드에서도 100% 정상 작동합니다.
            </p>
            <p className="mt-5 text-sm text-muted">
              <Link
                href="/about/"
                className="font-medium text-green underline-offset-4 transition hover:text-green-deep hover:underline"
              >
                서비스 소개 보기 →
              </Link>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/15 blur-3xl"
            />
            <div className="relative flex items-end justify-center gap-3 sm:gap-4">
              <div className="hidden w-[34%] translate-y-10 opacity-85 sm:block">
                <PhoneShot
                  src="/screenshots/03_labs.png"
                  alt="바램 검사 목록"
                />
              </div>
              <div className="z-10 w-[72%] sm:w-[58%]">
                <HeroOcrDemo />
                <p className="mt-3 text-center text-[12px] font-medium text-muted">
                  캡처 → ANC(호중구) 추이 그래프
                </p>
              </div>
              <div className="hidden w-[34%] translate-y-10 opacity-85 sm:block">
                <PhoneShot
                  src="/screenshots/01_home.png"
                  alt="바램 홈 화면"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
            핵심 가치
          </p>
          <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            안심하고 남기고, 외래 전에 한눈에
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {homeCoreFeatures.map((feature) => (
              <li
                key={feature.title}
                className="rounded-2xl border border-line bg-cream px-5 py-5 sm:px-6 sm:py-6"
              >
                <h3 className="text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeCareSystem />

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <CareReportGallery />
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
            안심 후기
          </p>
          <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            환자와 보호자가 느끼는 변화
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {homeTestimonials.map((item) => (
              <li
                key={item.role}
                className="border-t border-line pt-5 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0 first:sm:border-l-0 first:sm:pl-0"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-green uppercase">
                  {item.role}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  “{item.quote}”
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <FaqAccordion />
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            더 알아보기
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            네 가지 안내만 골라 보시면 됩니다.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {sitePages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex items-baseline justify-between gap-4 py-4 transition"
                >
                  <span>
                    <span className="text-base font-semibold text-ink group-hover:text-green">
                      {page.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {page.blurb}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-green transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DownloadBand />
    </>
  );
}

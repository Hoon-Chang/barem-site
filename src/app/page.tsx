import Link from "next/link";
import { PhoneShot } from "../components/phone-shot";
import { SiteImage } from "../components/site-image";
import { StoreButtons } from "../components/store-buttons";
import { DownloadBand } from "../components/page-chrome";
import { homeCareReport, sitePages } from "../content/marketing";
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
            <h1 className="mt-8 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
              치료 기록을, 혼자 안 맡기도록
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              암 치료·회복을 위해 만든 건강 기록 앱. 검사·일정·컨디션을 서버가
              아니라 내 기기에만 암호화해 둡니다.
            </p>
            <div id="download" className="mt-8 scroll-mt-24">
              <StoreButtons />
            </div>
            <p className="mt-5 text-sm text-muted">
              <Link
                href="/for-whom/"
                className="font-medium text-green underline-offset-4 transition hover:text-green-deep hover:underline"
              >
                이런 분께 →
              </Link>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/15 blur-3xl"
            />
            <div className="relative flex items-end justify-center gap-3 sm:gap-4">
              <div className="hidden w-[38%] translate-y-8 opacity-90 sm:block">
                <PhoneShot
                  src="/screenshots/05_today.png"
                  alt="바램 투데이 화면"
                />
              </div>
              <div className="z-10 w-[58%] sm:w-[48%]">
                <PhoneShot
                  src="/screenshots/01_home.png"
                  alt="바램 홈 화면"
                  priority
                />
              </div>
              <div className="hidden w-[38%] translate-y-8 opacity-90 sm:block">
                <PhoneShot
                  src="/screenshots/02_vital_trend.png"
                  alt="바램 바이탈 추이"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
              {homeCareReport.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {homeCareReport.title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              {homeCareReport.body}
            </p>
            <ul className="mt-6 space-y-3">
              {homeCareReport.reports.map((report) => (
                <li key={report.name} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                  />
                  <span>
                    <span className="font-semibold text-ink">{report.name}</span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {report.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link
                href={homeCareReport.ctaHref}
                className="font-medium text-green underline-offset-4 transition hover:text-green-deep hover:underline"
              >
                {homeCareReport.ctaLabel} →
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3">
            <div className="w-[min(46%,220px)]">
              <PhoneShot
                src={homeCareReport.src}
                alt={homeCareReport.alt}
              />
            </div>
            <div className="hidden w-[min(46%,220px)] sm:block">
              <PhoneShot
                src={homeCareReport.secondarySrc}
                alt={homeCareReport.secondaryAlt}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            더 알아보기
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            필요한 안내만 골라 보시면 됩니다.
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

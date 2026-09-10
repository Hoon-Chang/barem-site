import {
  Activity,
  Lock,
  FileSpreadsheet,
  ShieldCheck,
  Smartphone,
  Stethoscope,
} from "lucide-react";
import { StoreButtons } from "../components/store-buttons";
import { siteConfig } from "../../site.config";

const features = [
  {
    icon: Activity,
    title: "간편한 기록",
    body: "몇 번의 터치로 혈압, 혈당, 체온, 체중, 복약까지 빠르게 남길 수 있습니다.",
  },
  {
    icon: Lock,
    title: "데이터 프라이버시",
    body: "민감한 건강 정보는 기기 안 암호화 저장소에 보관됩니다. 무단으로 외부 서버에 보내지 않습니다.",
  },
  {
    icon: FileSpreadsheet,
    title: "의료진 상담 리포트",
    body: "주간·월간 추이 차트로 병원 방문 시 의사에게 직관적으로 보여줄 수 있습니다.",
  },
];

const securityPoints = [
  {
    icon: ShieldCheck,
    title: "Local-First",
    body: "건강 기록은 기본적으로 사용자 기기 안에서만 처리됩니다.",
  },
  {
    icon: Smartphone,
    title: "온디바이스 암호화",
    body: "로컬 DB와 OS 보안 저장소를 활용해 기기 분실·유출에 대비합니다.",
  },
  {
    icon: Stethoscope,
    title: "의료기기 아님",
    body: "바램은 진단·처방·치료를 대체하지 않는 개인 건강 기록 도구입니다.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,#cfe6d8_0%,transparent_55%),radial-gradient(ellipse_at_90%_10%,#e7efe9_0%,transparent_45%),linear-gradient(180deg,#eef5f0_0%,var(--cream)_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-green/10 blur-3xl"
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
          <p className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-green-deep sm:text-7xl">
            {siteConfig.brand.shortNameKo}
          </p>
          <p className="mt-2 text-sm font-medium tracking-[0.28em] text-muted sm:text-base">
            {siteConfig.brand.legalNameEn}
          </p>
          <h1 className="mt-8 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            매일의 건강을 기록하는 가장 편안하고 안전한 습관
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            혈압, 혈당, 복약, 체온까지 — 복잡함 없이 온전히 내 기기에 안전하게
            보관되는 나만의 건강 다이어리.
          </p>
          <div id="download" className="mt-8 scroll-mt-24">
            <StoreButtons />
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            핵심 기능
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            기록은 단순하게, 데이터는 안전하게. 바램이 매일의 건강 습관을
            지켜줍니다.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <li key={title} className="space-y-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-soft text-green">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="security" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            데이터 보안
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            광고·마케팅을 위한 건강 데이터 판매·공유는 하지 않습니다. 원칙은
            온디바이스입니다.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {securityPoints.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-line bg-green-soft/40 p-5"
              >
                <Icon className="text-green" size={22} aria-hidden />
                <h3 className="mt-3 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              지금 바로 시작하세요
            </h2>
            <p className="mt-2 text-muted">
              App Store에서 다운로드하거나, Google Play 출시 소식을 기다려 주세요.
            </p>
          </div>
          <StoreButtons />
        </div>
      </section>
    </>
  );
}

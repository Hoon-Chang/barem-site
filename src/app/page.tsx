import Image from "next/image";
import {
  Activity,
  CalendarDays,
  Camera,
  FileSpreadsheet,
  Lock,
  Pill,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Utensils,
} from "lucide-react";
import { PhoneShot } from "../components/phone-shot";
import { StoreButtons } from "../components/store-buttons";
import { siteConfig } from "../../site.config";

const highlights = [
  {
    icon: Camera,
    title: "검사결과 OCR",
    body: "결과지를 촬영하거나 앨범에서 고르면, 기기 안에서 글자를 인식한 뒤 직접 검토·저장합니다.",
  },
  {
    icon: Activity,
    title: "바이탈·추이",
    body: "혈압·혈당·체온·체중을 빠르게 남기고, 주간·월간 차트로 변화를 한눈에 봅니다.",
  },
  {
    icon: Pill,
    title: "복약·컨디션",
    body: "약 복용과 증상·수분·컨디션을 큰 버튼으로 기록해 치료·회복 일상을 정리합니다.",
  },
  {
    icon: Utensils,
    title: "자연어 식단",
    body: "평소 말하듯 식사를 적으면 칼로리·단백질 참고값을 계산합니다. (선택 시 공공 식품 DB)",
  },
  {
    icon: CalendarDays,
    title: "치료·진료 일정",
    body: "항암·외래·채혈 일정을 관리하고, 원하면 기기 캘린더와 연동합니다.",
  },
  {
    icon: FileSpreadsheet,
    title: "PDF 리포트",
    body: "병원 방문 전 로컬에서 PDF를 만들어 인쇄·공유할 수 있습니다. 서버 업로드 없음.",
  },
];

const deepFeatures = [
  {
    eyebrow: "홈",
    title: "오늘 해야 할 건강 기록이 한눈에",
    body: "홈에서 최근 수치·컨디션·다음 일정을 바로 확인합니다. 치료 중이든 일상 관리든, 복잡한 메뉴 없이 시작점 하나로 모읍니다.",
    points: [
      "검사·바이탈·식단·일정을 한 흐름으로 진입",
      "보호자 모드로 가족 기록도 정리 가능",
      "앱 잠금(Face ID / 지문 / 기기 암호) 지원",
    ],
    src: "/screenshots/01_home.png",
    alt: "바램 홈 화면",
  },
  {
    eyebrow: "검사 · 랩",
    title: "수치를 저장하고, 정상 구간과 함께 추이 확인",
    body: "ANC, WBC, Hb, PLT, 간·신장 수치 등을 기록하고 차트에서 변화를 봅니다. 결과지 OCR로 입력 부담을 줄입니다.",
    points: [
      "기기 안 OCR → 사용자가 검토 후 저장",
      "랩 목록과 항목별 추이 차트",
      "의료진 상담 시 보여주기 쉬운 화면 구성",
    ],
    src: "/screenshots/03_labs.png",
    alt: "바램 검사 결과 목록",
    secondarySrc: "/screenshots/04_lab_chart.png",
    secondaryAlt: "바램 검사 수치 추이 차트",
  },
  {
    eyebrow: "바이탈",
    title: "혈압·혈당 추이를 차분하게",
    body: "측정값을 남기면 추이 그래프로 이어집니다. 병원 전 며칠간의 패턴을 스스로 파악하는 데 도움이 됩니다.",
    points: [
      "혈압·혈당 등 핵심 바이탈 기록",
      "기간별 추이 시각화",
      "민감 화면 전환 시 가림으로 프라이버시 보호",
    ],
    src: "/screenshots/02_vital_trend.png",
    alt: "바램 바이탈 추이 화면",
  },
  {
    eyebrow: "투데이",
    title: "컨디션·식단·복약을 빠르게",
    body: "체온·체중·수분·증상·식사를 큰 터치로 남깁니다. 식단은 자연어로 적고, 칼로리·단백질 목표는 참고용으로 둡니다.",
    points: [
      "하루 컨디션을 빠르게 체크",
      "자연어 식단 기록 (참고용 영양 계산)",
      "Apple Health 걸음·활동 반영(선택)",
    ],
    src: "/screenshots/05_today.png",
    alt: "바램 투데이·컨디션 화면",
  },
  {
    eyebrow: "일정",
    title: "항암·외래·채혈 일정을 놓치지 않게",
    body: "치료·진료 일정을 앱에서 관리하고, 필요하면 기기 캘린더에 등록합니다. 다음 방문 전에 할 일을 미리 정리할 수 있습니다.",
    points: [
      "치료·외래·채혈 일정 관리",
      "기기 캘린더 연동(선택)",
      "홈·일정 화면에서 다가오는 일정 확인",
    ],
    src: "/screenshots/06_schedule.png",
    alt: "바램 일정 화면",
  },
  {
    eyebrow: "내 정보",
    title: "프로필·잠금·내보내기를 한곳에서",
    body: "질환·병원 메모, 앱 버전, 보안 설정, 데이터 관리를 프로필에서 다룹니다. 계정 로그인 없이 기기 안의 기록만 사용합니다.",
    points: [
      "Face ID / 생체 / 기기 암호 잠금",
      "로컬 PDF 리포트·데이터 관리",
      "외부 서버 계정·클라우드 동기화 없음",
    ],
    src: "/screenshots/07_profile.png",
    alt: "바램 프로필 화면",
  },
];

const securityPoints = [
  {
    icon: ShieldCheck,
    title: "Local-First",
    body: "건강 기록은 기본적으로 사용자 기기 안에서만 처리됩니다. 운영자 서버로 축적하지 않습니다.",
  },
  {
    icon: Lock,
    title: "온디바이스 암호화",
    body: "로컬 DB와 OS 키체인/키스토어를 활용합니다. 광고·마케팅용 판매·공유를 하지 않습니다.",
  },
  {
    icon: Smartphone,
    title: "계정 로그인 없음",
    body: "회원 가입 없이 바로 기록합니다. 식단용 공공 식품 DB만 기능을 켤 때 선택적으로 내려받습니다.",
  },
  {
    icon: Stethoscope,
    title: "의료기기 아님",
    body: "진단·처방·치료를 대체하지 않습니다. 수치·영양 해석은 참고용이며 의료진과 상의하세요.",
  },
];

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
              <Image
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
              매일의 건강을 기록하는 가장 편안하고 안전한 습관
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              검사결과·바이탈·복약·식단·일정까지 — 복잡함 없이, 온전히 내 기기에
              암호화되어 보관되는 건강 다이어리.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-green-deep sm:text-sm">
              {[
                "온디바이스",
                "OCR 검사결과",
                "추이 차트",
                "PDF 리포트",
                "Face ID 잠금",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-green/25 bg-white/70 px-3 py-1 font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div id="download" className="mt-8 scroll-mt-24">
              <StoreButtons />
            </div>
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

      <section id="features" className="scroll-mt-20 border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            무엇을 할 수 있나요
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            치료·회복 중에도, 일상 건강 관리에도. 바램은 기록을 한곳에 모으고
            민감한 데이터는 기기 밖으로 보내지 않습니다.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title, body }) => (
              <li key={title} className="space-y-3 rounded-2xl border border-line/80 p-5">
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

      <section id="tour" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            앱 둘러보기
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            실제 화면으로 보는 바램의 주요 흐름입니다.
          </p>

          <div className="mt-14 space-y-20">
            {deepFeatures.map((feature, index) => {
              const reverse = index % 2 === 1;
              return (
                <div
                  key={feature.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-green uppercase">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {feature.body}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {feature.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-ink"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`flex items-end justify-center gap-4 ${
                      feature.secondarySrc ? "sm:justify-center" : ""
                    }`}
                  >
                    <PhoneShot src={feature.src} alt={feature.alt} />
                    {feature.secondarySrc ? (
                      <div className="hidden w-[min(100%,240px)] translate-y-6 sm:block">
                        <PhoneShot
                          src={feature.secondarySrc}
                          alt={feature.secondaryAlt || ""}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="security" className="scroll-mt-20 border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            데이터 보안
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            광고·마케팅을 위한 건강 데이터 판매·공유는 하지 않습니다. 원칙은
            온디바이스입니다.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
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

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <Image
              src="/brand/barem_icon.png"
              alt=""
              width={48}
              height={48}
              className="rounded-[22%]"
            />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                지금 바로 시작하세요
              </h2>
              <p className="mt-2 text-muted">
                App Store에서 다운로드하거나, Google Play 출시 소식을 기다려
                주세요.
              </p>
            </div>
          </div>
          <StoreButtons />
        </div>
      </section>
    </>
  );
}

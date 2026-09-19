import {
  Activity,
  CalendarDays,
  Camera,
  FileSpreadsheet,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Target,
  Utensils,
} from "lucide-react";
import { PhoneShot } from "../components/phone-shot";
import { SiteImage } from "../components/site-image";
import { StoreButtons } from "../components/store-buttons";
import { siteConfig } from "../../site.config";

const highlights = [
  {
    icon: LayoutGrid,
    title: "맞춤 홈 화면",
    body: "치료·건강·보호자 목적에 맞춰 시작하고, 홈에 보일 항목을 켜고 끄며 순서까지 바꿀 수 있습니다.",
  },
  {
    icon: Camera,
    title: "검사결과 OCR",
    body: "결과지를 촬영하거나 앨범에서 고르면, 기기 안에서 글자를 인식한 뒤 직접 검토·저장합니다.",
  },
  {
    icon: Activity,
    title: "바이탈·기간 비교",
    body: "혈압·혈당·체온·체중을 남기고, 7일·30일 추이와 직전 기간 비교로 변화를 파악합니다.",
  },
  {
    icon: Target,
    title: "건강 목표",
    body: "목표 체중·혈당을 정해 두면 오늘 기록과 비교해 보여 줍니다. 치료 차수도 홈에서 바로 수정할 수 있습니다.",
  },
  {
    icon: Utensils,
    title: "자연어 식단",
    body: "평소 말하듯 식사를 적으면 칼로리·단백질 참고값을 계산합니다. (선택 시 공공 식품 DB)",
  },
  {
    icon: CalendarDays,
    title: "일정·로컬 알림",
    body: "항암·외래·채혈 일정을 관리하고, 원하면 기기 캘린더와 일정 미리 알림을 사용합니다.",
  },
  {
    icon: FileSpreadsheet,
    title: "PDF·백업",
    body: "로컬 PDF 리포트와 데이터 백업·삭제를 기기 안에서 처리합니다. 서버 업로드 없음.",
  },
  {
    icon: Lock,
    title: "잠금·프라이버시",
    body: "Face ID·지문·기기 암호 잠금과 앱 전환 시 화면 가림으로 민감한 기록을 지킵니다.",
  },
];

const deepFeatures = [
  {
    eyebrow: "홈",
    title: "오늘 해야 할 건강 기록이 한눈에",
    body: "케어 목적에 맞는 홈으로 시작하고, 보고 싶은 블록만 골라 순서를 바꿉니다. 목표 대비 체중·혈당과 미니 추이까지 한 화면에서 확인합니다.",
    points: [
      "홈 항목 표시·순서 직접 편집",
      "건강 목표와 오늘 기록 비교",
      "치료 진행·항암 차수 빠른 수정",
      "보호자 모드로 가족 기록도 정리 가능",
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
    title: "추이를 보고, 이전 기간과 비교",
    body: "측정값을 남기면 추이 그래프로 이어집니다. 최근 7일·30일을 고르고 직전 기간과 겹쳐 보며 평균 변화까지 확인합니다.",
    points: [
      "혈압·혈당·체온·체중·걸음 추이",
      "7일 / 30일 / 전체 기간 선택",
      "이전 기간 비교와 평균 변화 요약",
    ],
    src: "/screenshots/02_vital_trend.png",
    alt: "바램 바이탈 추이 화면",
  },
  {
    eyebrow: "투데이",
    title: "컨디션·식단을 빠르게",
    body: "체온·체중·수분·증상·식사를 큰 터치로 남깁니다. 식단은 자연어로 적고, 칼로리·단백질 목표는 참고용으로 둡니다.",
    points: [
      "하루 컨디션을 빠르게 체크",
      "자연어 식단 기록과 메뉴 매칭 개선",
      "Apple Health·Health Connect 걸음·활동(선택)",
    ],
    src: "/screenshots/05_today.png",
    alt: "바램 투데이·컨디션 화면",
  },
  {
    eyebrow: "일정",
    title: "항암·외래·채혈 일정을 놓치지 않게",
    body: "치료·진료 일정을 앱에서 관리하고, 필요하면 기기 캘린더와 로컬 미리 알림을 켭니다. 서버 푸시 없이 기기에서만 알려 드립니다.",
    points: [
      "치료·외래·채혈 일정 관리",
      "기기 캘린더 연동(선택)",
      "일정 1시간 전 로컬 알림(선택)",
    ],
    src: "/screenshots/06_schedule.png",
    alt: "바램 일정 화면",
  },
  {
    eyebrow: "내 정보",
    title: "프로필·목표·잠금·내보내기를 한곳에서",
    body: "케어 경로·건강 목표·보안·백업을 프로필에서 다룹니다. 계정 로그인 없이 기기 안의 기록만 사용합니다.",
    points: [
      "건강 목표·치료 경로 설정",
      "Face ID / 생체 / 기기 암호 잠금",
      "로컬 PDF·백업·데이터 삭제",
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
              매일의 건강을 기록하는 가장 편안하고 안전한 습관
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              검사결과·바이탈·식단·일정까지 — 홈을 내 목적에 맞게 구성하고,
              민감한 기록은 온전히 내 기기에 암호화되어 보관됩니다.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-green-deep sm:text-sm">
              {[
                "맞춤 홈",
                "건강 목표",
                "기간 비교 추이",
                "OCR 검사결과",
                "온디바이스",
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
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            <SiteImage
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
                App Store와 Google Play에서 바로 다운로드할 수 있어요.
              </p>
            </div>
          </div>
          <StoreButtons />
        </div>
      </section>
    </>
  );
}

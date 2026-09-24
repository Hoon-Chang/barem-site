import {
  Activity,
  CalendarDays,
  Camera,
  ClipboardList,
  FileSpreadsheet,
  GitCompareArrows,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Target,
  Type,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export type GuideStep = {
  step: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  secondarySrc?: string;
  secondaryAlt?: string;
};

export type DeepFeature = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  src: string;
  alt: string;
  secondarySrc?: string;
  secondaryAlt?: string;
};

export type IconBlurb = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const forWhomAlso: { icon: LucideIcon; label: string; body: string }[] =
  [
    {
      icon: Users,
      label: "보호자",
      body: "컨디션이 좋지 않거나 앱 조작이 어려울 때, 외래·채혈 동행하며 대신 남깁니다.",
    },
    {
      icon: Activity,
      label: "회복·일상",
      body: "치료 이후에도, 만성·평소 건강 관리에도 같은 습관으로 이어 갑니다.",
    },
  ];

/** 암 치료·회복 중 상황별 사용 예. */
export const usageScenarios = [
  {
    situation: "항암 투여 주간",
    title: "투여 일정과 당일 컨디션만 남겨도 충분합니다",
    body: "다음 항암일과 외래 일정을 먼저 등록해 두고, 평소에는 체온·증상·식사만 챙겨 적어보세요. 빈칸을 모두 채우는 것보다 매일 한 줄이라도 꾸준히 남기는 것이 외래 진료 시 의료진과 소통하는 데 훨씬 큰 도움이 됩니다.",
    steps: [
      "일정 등록: 캘린더에 항암 투여일과 외래 일정을 먼저 입력합니다.",
      "오늘 기록: 체온·증상·식사를 가볍게 기록합니다. 기력이 없을 때는 '손쉬움 화면'을 켜 큰 버튼으로 입력하세요.",
      "선택 기록: [기록]의 식단·증상에서 당일 컨디션(증상)을 남기고, 체중·혈압을 잰 날에는 바이탈 화면에 짧게 함께 남겨둡니다.",
    ],
    src: "/screenshots/s01_schedule.png",
    alt: "바램 일정 — 항암·외래 일정",
    secondarySrc: "/screenshots/s01_daily.png",
    secondaryAlt: "바램 기록 — 당일 체온·체중·혈압",
    tertiarySrc: "/screenshots/s01_condition.png",
    tertiaryAlt: "바램 기록 — 당일 컨디션(증상)",
  },
  {
    situation: "채혈 및 외래 직후",
    title: "결과지를 찍고, 숫자만 확인해 바로 저장하세요",
    body: "병원 결과지나 병원 앱 화면을 촬영(또는 캡처)하면 바램이 글자를 자동으로 읽어냅니다. 수치에 이상이 없는지만 가볍게 확인한 뒤 저장해 두면, 누적된 검사 추이를 이전 차수와 한눈에 비교할 수 있습니다.",
    steps: [
      "가져오기: [검사] 메뉴에서 결과지를 직접 촬영하거나 앨범 속 사진·캡처본을 불러옵니다.",
      "확인 및 저장: 자동으로 인식된 숫자를 살펴보고, 필요한 부분만 수정한 뒤 저장합니다.",
      "추이 확인: 외래 전, 궁금한 검사 항목의 변화 추이를 그래프로 미리 확인해 둡니다.",
    ],
    src: "/screenshots/s02_labs.png",
    alt: "바램 검사 — 결과 목록",
    secondarySrc: "/screenshots/s02_lab_chart.png",
    secondaryAlt: "바램 검사 — 수치 추이 차트",
  },
  {
    situation: "치료 차수가 2~3회 쌓였을 때",
    title: "지난 차수와 이번 차수의 회복 흐름을 나란히 비교해 보세요",
    body: "항암 투여일을 기준으로 치료 구간이 자동으로 정리됩니다. 진료 상담 전 비교하고 싶은 두 차수를 선택하면 검사 수치, 체중, 식사 상태를 겹쳐 볼 수 있어 집에서의 컨디션 변화를 말로만 설명하지 않아도 됩니다. (※ 자가 관찰 및 진료 참고용 자료입니다.)",
    steps: [
      "일정 확인: 각 차수별 투여일이 캘린더 및 치료 플랜에 맞게 등록되어 있는지 확인합니다.",
      "차수별 비교 진입: [홈] 치료 진행 카드의 [차수별 비교]로 들어갑니다.",
      "비교 분석: 비교할 두 차수를 고른 뒤, 컨디션이나 검사 수치가 달라진 구간을 확인합니다.",
    ],
    src: "/screenshots/s03_cycle_compare.png",
    alt: "바램 차수별 비교 화면",
  },
  {
    situation: "외래 진료 전 · 케어 리포트",
    title: "발열·체중·질문·영양을 한곳에 모아 상담 준비를 하세요",
    body: "기록이 쌓이면 홈에서 케어 리포트를 바로 열 수 있습니다. 진료 브리핑으로 재택 기간의 발열·체중·물어볼 질문을 한 페이지로 보고, 회복 타임라인·누적 독성·영양 방어 탭으로 차수 흐름과 식사·단백질까지 이어서 확인하세요. (※ 자가 관찰·상담 참고용이며 진단이 아닙니다.)",
    steps: [
      "진입: 홈의 다음 항암 안내에서 [진료 브리핑 보기]를 누르거나, 치료 진행 카드의 [케어 리포트]를 엽니다.",
      "브리핑 먼저: 발열 이력·체중 변화·의료진에게 물어볼 질문을 확인합니다.",
      "이어서 보기: 회복 타임라인·누적 독성·영양 방어 탭으로 차수별 흐름과 영양 상태를 살펴봅니다.",
    ],
    src: "/screenshots/13_care_report_briefing.png",
    alt: "바램 케어 리포트 — 진료 브리핑",
    secondarySrc: "/screenshots/14_care_report_timeline.png",
    secondaryAlt: "바램 케어 리포트 — 회복 타임라인",
    tertiarySrc: "/screenshots/16_care_report_nutrition.png",
    tertiaryAlt: "바램 케어 리포트 — 영양 방어",
  },
  {
    situation: "컨디션이 저하되었을 때 · 보호자 이용 시",
    title: "가족이 대신 기록하거나, 큰 버튼으로 편하게 쓰세요",
    body: "환자 본인이 직접 조작하기 힘들다면 사용 모드를 '보호자'로 설정하여 가족이 대신 남길 수 있습니다. 작은 글씨가 읽기 불편할 때는 '손쉬움 화면'을 켜 큰 글씨와 대형 버튼으로 체온·체중·식사만 빠르게 기록하세요.",
    steps: [
      "모드 켜기: [설정(내 정보)]에서 '보호자로 기록'을 선택하거나 '손쉬움 화면'을 활성화합니다.",
      "핵심만 기록: 오늘은 무리하지 않고 체온, 주요 증상, 투약 일정만 먼저 남깁니다.",
      "언제든 복귀: 기력을 회복하면 언제든 일반 화면으로 돌아와 검사지와 추이 분석을 이어갈 수 있습니다.",
    ],
    src: "/screenshots/s04_easy_home.png",
    alt: "바램 손쉬움 홈 — 큰 기록 버튼",
    secondarySrc: "/screenshots/s04_easy_daily.png",
    secondaryAlt: "바램 손쉬움 오늘 기록",
  },
  {
    situation: "추적 관찰 및 일상 건강 관리",
    title: "치료가 끝난 후에도 건강 기록 습관을 이어가세요",
    body: "항암 치료가 끝난 뒤에도 정기 외래 채혈 수치와 일상 컨디션을 계속 관리할 수 있습니다. 관리 목적을 '일반 건강 관리'로 전환하면, 일상 건강 상태에 맞춘 맞춤형 항목으로 기록을 유지할 수 있습니다.",
    steps: [
      "모드 전환: 관리 목적을 '건강 관리'로 변경하거나, 홈 화면에서 자주 쓰는 항목만 켜둡니다.",
      "일상 기록: 정기 채혈 결과는 [검사]에, 매일의 컨디션은 [기록]에 편하게 남깁니다.",
      "외래 진료 준비: 병원 정기 검진을 갈 때만 그동안 모인 추이 차트나 요약 PDF를 챙겨 활용하세요.",
    ],
    src: "/screenshots/s05_health_home.png",
    alt: "바램 홈 — 건강 관리 맞춤 화면",
    secondarySrc: "/screenshots/s05_health_condition.png",
    secondaryAlt: "바램 기록 — 건강 관리 오늘의 컨디션",
  },
] as const;

/** 홈 히어로 아래 — 케어 리포트 한 줄 소개. */
export const homeCareReport = {
  eyebrow: "케어 리포트",
  title: "외래 전에, 재택 기록을 네 장으로 정리합니다",
  body: "홈에서 바로 여는 케어 리포트입니다. 진료 브리핑으로 발열·체중·질문을 모으고, 회복·독성·영양까지 이어서 볼 수 있어요. 상담 참고용이며 진단이 아닙니다.",
  reports: [
    {
      name: "진료 브리핑",
      detail: "발열·체중 변화·의료진에게 물어볼 질문",
    },
    {
      name: "회복 타임라인",
      detail: "투여일(D0) 기준 차수별 회복 흐름",
    },
    {
      name: "누적 독성",
      detail: "차수별 당일 피검사 추이",
    },
    {
      name: "영양 방어",
      detail: "칼로리·단백질·알부민 참고",
    },
  ],
  src: "/screenshots/13_care_report_briefing.png",
  alt: "바램 케어 리포트 — 진료 브리핑",
  secondarySrc: "/screenshots/14_care_report_timeline.png",
  secondaryAlt: "바램 케어 리포트 — 회복 타임라인",
  tertiarySrc: "/screenshots/15_care_report_toxicity.png",
  tertiaryAlt: "바램 케어 리포트 — 누적 독성",
  ctaHref: "/scenarios/",
  ctaLabel: "사용 예시에서 흐름 보기",
} as const;

export const guideSteps: GuideStep[] = [
  {
    step: "01",
    title: "목적 고르기",
    body: "홈을 내 목적에 맞추면, 매일 볼 것만 남습니다. 온보딩에서 치료·건강·보호자 중 고르고 홈 구성을 잡습니다.",
    src: "/screenshots/08_onboarding_care_focus.png",
    alt: "바램 온보딩 — 지금 어떤 상황인가요 목적 선택",
  },
  {
    step: "02",
    title: "치료·일정 넣기",
    body: "다음 외래·항암 날짜만 먼저 넣어도 불안이 줄어듭니다. 차수별 투여일을 남기면 나중에 수치·체중·식사를 차수끼리 비교할 수 있습니다.",
    src: "/screenshots/06_schedule.png",
    alt: "바램 일정 화면",
  },
  {
    step: "03",
    title: "검사 한 장",
    body: "결과지는 촬영 후 직접 확인하고 저장합니다. 인식은 기기 안에서만 이뤄지며 서버로 보내지 않습니다.",
    src: "/screenshots/03_labs.png",
    alt: "바램 검사 결과 목록",
    secondarySrc: "/screenshots/04_lab_chart.png",
    secondaryAlt: "바램 검사 수치 추이 차트",
  },
  {
    step: "04",
    title: "오늘 컨디션",
    body: "컨디션은 완벽하게가 아니라, 남기는 게 목표입니다. 체온·증상과 함께, 식사도 문장으로 남기면 칼로리·단백질이 분석됩니다.",
    src: "/screenshots/05_today.png",
    alt: "바램 투데이·컨디션 화면",
    secondarySrc: "/screenshots/09_meal_analysis.png",
    secondaryAlt: "바램 식사 기록 후 영양 분석 화면",
  },
  {
    step: "05",
    title: "잠금·백업",
    body: "민감한 기록은 잠그고, 가끔 백업만 하세요. Face ID·지문·기기 암호와 로컬 백업을 프로필에서 설정합니다.",
    src: "/screenshots/07_profile.png",
    alt: "바램 프로필·잠금·백업 화면",
  },
];

export const highlights: IconBlurb[] = [
  {
    icon: LayoutGrid,
    title: "맞춤 홈 화면",
    body: "치료·건강·보호자 목적에 맞춰 시작하고, 홈에 보일 항목을 켜고 끄며 순서까지 바꿀 수 있습니다.",
  },
  {
    icon: Type,
    title: "손쉬움 화면",
    body: "큰 글씨·큰 버튼으로 오늘 기록만 단순하게. 어르신·큰 시스템 글씨에도 쓰기 편하고, 필요할 때 안내도 보여 드립니다.",
  },
  {
    icon: GitCompareArrows,
    title: "차수별 비교",
    body: "항암 차수를 골라 검사·체중·식사를 나란히 비교합니다. 투여일 기준 추이와 동시 변화 단서를 상담 참고용으로 모읍니다.",
  },
  {
    icon: ClipboardList,
    title: "케어 리포트",
    body: "진료 브리핑·회복 타임라인·누적 독성·영양 방어로 재택 기록을 외래 전에 정리합니다. 홈에서 바로 열 수 있어요.",
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

export const deepFeatures: DeepFeature[] = [
  {
    eyebrow: "홈",
    title: "오늘 해야 할 건강 기록이 한눈에",
    body: "케어 목적에 맞는 홈으로 시작하고, 보고 싶은 블록만 골라 순서를 바꿉니다. 목표 대비 체중·혈당과 미니 추이까지 한 화면에서 확인합니다.",
    points: [
      "홈 항목 표시·순서 직접 편집",
      "케어 목적에 맞춘 기본 홈 구성",
      "건강 목표와 오늘 기록 비교·미니 추이",
      "치료 진행·항암 차수 빠른 수정",
      "보호자 모드로 가족 기록도 정리 가능",
    ],
    src: "/screenshots/01_home.png",
    alt: "바램 홈 화면",
  },
  {
    eyebrow: "손쉬움",
    title: "큰 글씨·큰 버튼으로 오늘 기록만",
    body: "손쉬움 화면을 켜면 글씨와 버튼이 커지고, 홈·기록·검사·일정이 단순해집니다. 시스템 글씨가 크면 안내 팝업으로 알려 드리며, 필요할 때 일반 화면으로 돌아올 수 있습니다.",
    points: [
      "큰 글씨·큰 터치로 체온·체중·혈당·식사 기록",
      "어르신·큰 시스템 글씨에 맞춘 단순 레이아웃",
      "시스템 글씨가 크면 손쉬움 안내",
      "일반 화면으로 언제든 전환",
    ],
    src: "/screenshots/10_easy_home.png",
    alt: "바램 손쉬움 홈 — 큰 기록 버튼",
    secondarySrc: "/screenshots/11_easy_today.png",
    secondaryAlt: "바램 손쉬움 오늘 기록",
  },
  {
    eyebrow: "검사 · 랩",
    title: "수치를 저장하고, 정상 구간과 함께 추이·기간 비교",
    body: "ANC, WBC, Hb, PLT, 간·신장 수치 등을 기록하고 차트에서 변화를 봅니다. 케어 목적에 맞춰 검사 칩 색·짧은 이름으로 읽고, 탭해 항목을 걸러 볼 수 있어요. 7일·30일을 골라 직전 기간과 겹쳐 비교하고, 결과지 OCR로 입력 부담을 줄입니다.",
    points: [
      "기기 안 OCR → 사용자가 검토 후 저장",
      "랩 목록과 항목별 추이 차트",
      "케어 목적별 칩 색·짧은 이름·탭 필터",
      "7일·30일 이전 기간 비교와 평균 변화",
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
    body: "측정값을 남기면 추이 그래프로 이어집니다. 최근 7일·30일을 고르고 「이전 기간과 비교」로 직전 구간을 점선으로 겹쳐 보며, 평균 변화까지 확인합니다.",
    points: [
      "혈압·혈당·체온·체중·걸음 추이",
      "7일 / 30일 / 전체 기간 선택",
      "이전 기간 비교(점선 오버레이)와 평균 변화 요약",
    ],
    src: "/screenshots/02_vital_trend.png",
    alt: "바램 바이탈 추이 화면",
  },
  {
    eyebrow: "차수별 비교",
    title: "항암 차수를 골라 수치·체중·식사를 나란히",
    body: "투여일을 기준으로 차수 구간을 나누고, 비교할 차수를 직접 고릅니다. 검사·체중·칼로리·단백질 추이를 겹쳐 보고, 같은 구간에 함께 변한 기록만 상담 참고용으로 모아 둡니다. 원인 진단이 아닙니다.",
    points: [
      "차수 A·B 선택 비교",
      "투여일(D0) 기준 체중·식사 오버레이",
      "검사·컨디션 동시 변화 단서(참고용)",
      "케어 리포트 PDF에도 차수 인사이트 반영",
    ],
    src: "/screenshots/07_profile.png",
    alt: "바램 프로필 — 항암 차수·비교 진입",
    secondarySrc: "/screenshots/04_lab_chart.png",
    secondaryAlt: "바램 검사 수치 추이 차트",
  },
  {
    eyebrow: "케어 리포트",
    title: "외래 전, 재택 기록을 네 가지 관점으로",
    body: "홈의 케어 리포트에서 진료 브리핑·회복 타임라인·누적 독성·영양 방어를 한곳에서 봅니다. 다음 항암·외래가 다가오면 진료 브리핑으로 발열·체중·질문을 먼저 모으고, 필요하면 차수 흐름과 영양까지 이어서 확인합니다. 진단이 아닙니다.",
    points: [
      "진료 브리핑 — 발열·체중·의료진 질문 한 페이지",
      "회복 타임라인 — 투여일(D0) 기준 차수 흐름",
      "누적 독성 — 차수별 당일 피검사 추이",
      "영양 방어 — 칼로리·단백질·알부민 참고",
      "홈·내 정보에서 바로 진입",
    ],
    src: "/screenshots/13_care_report_briefing.png",
    alt: "바램 케어 리포트 — 진료 브리핑",
    secondarySrc: "/screenshots/14_care_report_timeline.png",
    secondaryAlt: "바램 케어 리포트 — 회복 타임라인",
  },
  {
    eyebrow: "투데이",
    title: "컨디션·식단을 빠르게",
    body: "체온·체중·수분·증상·식사를 큰 터치로 남깁니다. 식단은 자연어로 적으면 칼로리·단백질이 분석되고, 목표는 참고용으로 둡니다.",
    points: [
      "하루 컨디션을 빠르게 체크",
      "자연어 식단 기록과 영양 분석",
      "Apple Health·Health Connect 걸음·활동(선택)",
    ],
    src: "/screenshots/05_today.png",
    alt: "바램 투데이·컨디션 화면",
    secondarySrc: "/screenshots/09_meal_analysis.png",
    secondaryAlt: "바램 식사 기록 후 영양 분석 화면",
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

export const securityPoints: IconBlurb[] = [
  {
    icon: ShieldCheck,
    title: "Local-First",
    body: "건강 기록은 기본적으로 사용자 기기 안에서만 처리됩니다. 운영자 서버로 축적하지 않습니다.",
  },
  {
    icon: Lock,
    title: "내 기기에서 암호화",
    body: "기기에 저장된 기록과 시스템 보안 저장소를 활용합니다. 광고·마케팅용 판매·공유를 하지 않습니다.",
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

/** 상단 내비 · 사이트맵용 공개 페이지. */
export const sitePages = [
  {
    href: "/for-whom/",
    label: "이런 분께",
    blurb: "치료·보호자·회복에 맞춰 쓰는 이유",
  },
  {
    href: "/scenarios/",
    label: "사용 예시",
    blurb: "항암 주간·외래·차수 비교·케어 리포트, 이럴 때 이렇게",
  },
  {
    href: "/guide/",
    label: "시작 가이드",
    blurb: "첫 주에 이것만 하면 됩니다",
  },
  {
    href: "/features/",
    label: "기능 소개",
    blurb: "홈·검사·손쉬움·식단 등 핵심 기능",
  },
  {
    href: "/tour/",
    label: "앱 둘러보기",
    blurb: "실제 화면으로 보는 주요 흐름",
  },
  {
    href: "/security/",
    label: "데이터 보안",
    blurb: "기기 안 암호화·계정 없음",
  },
  {
    href: "/contact/",
    label: "고객 문의",
    blurb: "이메일로 문의하기",
  },
] as const;

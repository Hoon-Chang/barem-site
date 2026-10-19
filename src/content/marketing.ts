import {
  Activity,
  Bell,
  CalendarDays,
  Camera,
  ClipboardCheck,
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
  Watch,
  type LucideIcon,
} from "lucide-react";

export type GuideStep = {
  step: string;
  /** Optional deep-link id for /guide/#… */
  id?: string;
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
      label: "멀리 있는 가족·보호자",
      body: "QR로 가족 안심 연동하면 기록이 암호화되어 보호자 기기에만 읽기 전용으로 보입니다. 알림에는 가족 이름과 기록 종류만 넣고 수치는 넣지 않습니다.",
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
    id: "chemo-week",
    situation: "항암 투여 주간",
    title: "투여 일정과 당일 컨디션만 남겨도 충분합니다",
    body: "다음 항암일과 외래 일정을 먼저 등록해 두고, 평소에는 체온·증상·식사만 챙겨 적어보세요. 빈칸을 모두 채우는 것보다 매일 한 줄이라도 꾸준히 남기는 것이 외래 진료 시 의료진과 소통하는 데 훨씬 큰 도움이 됩니다.",
    steps: [
      "일정 등록: [일정]에 항암 투여일과 외래 일정을 먼저 입력합니다.",
      "오늘 기록: 홈 오늘 미션이나 중앙 [기록]에서 체온·증상·식사를 가볍게 남깁니다. 기력이 없을 때는 [내 정보]에서 간편사용을 켜세요.",
      "선택 기록: 체중·혈압을 잰 날에는 홈·기록에서 함께 남기고, 복약이 있으면 「먹었어요」로 확인합니다. 식사는 아침·점심·저녁을 모두 남겨야 오늘 식사가 완료됩니다.",
    ],
    src: "/screenshots/s01_schedule.png",
    alt: "바램 일정 — 항암·외래 일정",
    secondarySrc: "/screenshots/s01_daily.png",
    secondaryAlt: "바램 기록 — 당일 체온·체중·혈압",
    tertiarySrc: "/screenshots/s01_condition.png",
    tertiaryAlt: "바램 기록 — 당일 컨디션(증상)",
  },
  {
    id: "lab-ocr",
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
    id: "family",
    situation: "멀리 있는 가족과 함께 볼 때",
    title: "QR로 연결하면, 보호자 폰에서만 읽기 전용으로 보입니다",
    body: "환자 기기에서 남긴 기록은 암호화되어 보호자 기기로만 전달됩니다. 홈 위에서 「나」와 가족을 바로 전환하고, 체온·혈압·복약 변화가 있으면 이름과 기록 종류만 알려 드립니다. 같은 기기에서 대신 남길 때는 보호자 목적·간편사용을 쓸 수 있습니다.",
    steps: [
      "연동: 보호자는 [내 정보] → 가족 안심 연동에서 QR을 만들고, 환자는 그 QR을 스캔합니다.",
      "전환: 홈 상단에서 「나」와 연동된 가족을 바꿔 가며 오늘 기록을 확인합니다.",
      "알림: 체온·혈압·복약 등 변화가 있으면 보호자에게 알려 드리며, 알림에는 수치 없이 이름·기록 종류만 넣습니다.",
    ],
    src: "/screenshots/02_family.png",
    alt: "바램 홈 — 가족 기록 읽기 전용",
    secondarySrc: "/screenshots/01_home.png",
    secondaryAlt: "바램 홈 — 나와 가족 프로필 전환",
  },
  {
    id: "care-report",
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
    id: "cycle-compare",
    situation: "치료 차수가 2~3회 쌓였을 때",
    title: "지난 차수와 이번 차수의 회복 흐름을 나란히 비교해 보세요",
    body: "항암 투여일을 기준으로 치료 구간이 자동으로 정리됩니다. 진료 상담 전 비교하고 싶은 두 차수를 선택하면 검사 수치, 체중, 식사 상태를 겹쳐 볼 수 있어 집에서의 컨디션 변화를 말로만 설명하지 않아도 됩니다. (※ 자가 관찰 및 진료 참고용 자료입니다.)",
    steps: [
      "일정 확인: 각 차수별 투여일이 [일정] 및 치료 플랜에 맞게 등록되어 있는지 확인합니다.",
      "차수별 비교 진입: [홈] 치료 진행 카드의 [차수별 비교]로 들어갑니다.",
      "비교 분석: 비교할 두 차수를 고른 뒤, 컨디션이나 검사 수치가 달라진 구간을 확인합니다.",
    ],
    src: "/screenshots/s03_cycle_compare.png",
    alt: "바램 차수별 비교 화면",
  },
  {
    id: "easy-mode",
    situation: "컨디션이 저하되었을 때 · 간편사용",
    title: "큰 버튼으로 오늘 기록만 편하게 남기세요",
    body: "작은 글씨가 읽기 불편할 때는 [내 정보]에서 간편사용을 켜 보세요. 하단이 오늘·약·더보기 세 탭으로 바뀌고, 큰 글씨로 오늘 미션·복약만 먼저 챙길 수 있습니다. 같은 기기에서 가족이 대신 남길 때는 사용 목적을 '보호자'로 둘 수 있습니다.",
    steps: [
      "모드 켜기: [내 정보]에서 간편사용을 켜거나 사용 목적을 '보호자'로 둡니다.",
      "오늘·약: 「오늘」에서 체온·식사 미션을 체크하고, 「약」에서 「먹었어요」로 확인합니다.",
      "언제든 복귀: 「더보기」에서 일반 화면으로 돌아와 검사·일정·추이를 이어갈 수 있습니다.",
    ],
    src: "/screenshots/01_home.png",
    alt: "바램 홈 — 오늘 미션(간편사용에서도 같은 흐름)",
    secondarySrc: "/screenshots/07_profile.png",
    secondaryAlt: "바램 내 정보 — 간편사용 켜기",
  },
  {
    id: "health-focus",
    situation: "추적 관찰 및 일상 건강 관리",
    title: "치료가 끝난 후에도 건강 기록 습관을 이어가세요",
    body: "항암 치료가 끝난 뒤에도 정기 외래 채혈 수치와 일상 컨디션을 계속 관리할 수 있습니다. 관리 목적을 '일반 건강 관리'로 전환하면, 일상 건강 상태에 맞춘 맞춤형 항목으로 기록을 유지할 수 있습니다.",
    steps: [
      "모드 전환: [내 정보]에서 관리 목적을 '건강 관리'로 바꾸거나, 홈에서 자주 쓰는 항목만 켜둡니다.",
      "일상 기록: 정기 채혈은 [검사]에, 매일 컨디션·식사는 홈·중앙 [기록]에 남깁니다.",
      "외래 진료 준비: 정기 검진 전에 추이 차트나 PDF 리포트를 챙겨 활용하세요.",
    ],
    src: "/screenshots/s05_health_home.png",
    alt: "바램 홈 — 건강 관리 맞춤 화면",
    secondarySrc: "/screenshots/s05_health_condition.png",
    secondaryAlt: "바램 기록 — 건강 관리 오늘의 컨디션",
  },
] as const;

/** 홈 히어로 아래 — 가족 안심 연동 (1순위 스포트라이트). */
export const homeFamilyCare = {
  eyebrow: "가족 안심 연동",
  title: "멀리 있어도, 같은 오늘을 함께 봅니다",
  body: "QR로 연결하면 기록이 암호화되어 보호자 기기에만 읽기 전용으로 전달됩니다. 홈에서 「나」와 가족을 바로 바꾸고, 체온·혈압·복약 변화는 이름과 기록 종류만 알려 드립니다.",
  points: [
    {
      name: "QR 한 번으로 연결",
      detail: "원하는 가족과만 연결 · 환자→보호자 단방향",
    },
    {
      name: "보호자 기기에서만 열람",
      detail: "암호문만 잠시 중계 · 수신 후 전달용 사본 삭제",
    },
    {
      name: "홈에서 바로 전환",
      detail: "「나」와 연동 가족을 탭 한 번으로 전환 · 연동을 지워도 「나」는 남음",
    },
    {
      name: "수치 없는 알림",
      detail: "가족 이름·체온·혈압처럼 무엇을 챙길지만 · 수치는 앱에서",
    },
  ],
  src: "/screenshots/02_family.png",
  alt: "바램 홈 — 가족 기록 읽기 전용",
  secondarySrc: "/screenshots/01_home.png",
  secondaryAlt: "바램 홈 — 나와 가족 프로필 전환",
  ctaHref: "/scenarios/#family",
  ctaLabel: "사용 예시에서 연동 흐름 보기",
} as const;

/** 홈 — 오늘 미션 (일상 기록 습관). */
export const homeTodayMission = {
  eyebrow: "오늘 미션",
  title: "오늘 남길 것만, 홈에서 바로",
  body: "발열·복약·식사처럼 지금 필요한 한 가지를 먼저 보여 줍니다. 식사는 아침·점심·저녁을 모두 남겨야 오늘 식사가 완료로 표시됩니다.",
  points: [
    {
      name: "한 가지 미션",
      detail: "상황·일정에 맞춰 오늘 챙길 기록을 골라 안내",
    },
    {
      name: "빠른 기록 타일",
      detail: "체온·체중·혈압·식사를 홈에서 바로 확인·등록",
    },
    {
      name: "식사 완료 규칙",
      detail: "아침·점심·저녁을 모두 남겨야 오늘 식사 완료",
    },
  ],
  src: "/screenshots/01_home.png",
  alt: "바램 홈 — 오늘 미션",
  secondarySrc: "/screenshots/05_today.png",
  secondaryAlt: "바램 기록 — 오늘 컨디션",
  ctaHref: "/guide/#today-mission",
  ctaLabel: "시작 가이드 보기",
} as const;

/** 홈 — 케어 리포트 (치료 맥락 2순위). */
export const homeCareReport = {
  eyebrow: "케어 리포트",
  title: "외래 전에, 재택 기록을 네 장으로 정리합니다",
  body: "홈에서 여는 케어 리포트입니다. 진료 브리핑으로 발열·체중·질문을 모으고, 회복·독성·영양까지 이어서 볼 수 있어요. 상담 참고용이며 진단이 아닙니다.",
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
  ctaHref: "/scenarios/#care-report",
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
    id: "today-mission",
    title: "오늘 미션·복약",
    body: "홈 오늘 미션에서 오늘 남길 한 가지를 먼저 챙기고, [기록]에서 체온·증상을 이어 가세요. 식사는 문장으로 적어도 됩니다. 복약이 있으면 알림과 「먹었어요」로 확인하세요.",
    src: "/screenshots/01_home.png",
    alt: "바램 홈 — 오늘 미션",
    secondarySrc: "/screenshots/09_meal_analysis.png",
    secondaryAlt: "바램 식사 기록 후 영양 분석 화면",
  },
  {
    step: "05",
    title: "가족·잠금·백업",
    body: "멀리 있는 가족과 보려면 가족 안심 연동(QR)을 켭니다. 민감한 기록은 Face ID·지문으로 잠그고, 가끔 로컬 백업만 하세요. 기력이 없을 때는 간편사용(오늘·약·더보기)을 켜도 됩니다.",
    src: "/screenshots/07_profile.png",
    alt: "바램 프로필·가족 연동·잠금 화면",
    secondarySrc: "/screenshots/02_family.png",
    secondaryAlt: "바램 홈 — 가족 기록 읽기 전용",
  },
];

export const highlights: IconBlurb[] = [
  {
    icon: LayoutGrid,
    title: "맞춤 홈 화면",
    body: "치료·건강·보호자 목적에 맞춰 시작하고, 홈에 보일 항목을 켜고 끄며 순서까지 바꿀 수 있습니다. 「나」와 연동 가족도 홈에서 바로 전환합니다.",
  },
  {
    icon: ClipboardCheck,
    title: "오늘 미션",
    body: "오늘 챙길 한 가지를 홈에서 바로 안내합니다. 식사는 아침·점심·저녁을 모두 남겨야 오늘 식사가 완료로 표시됩니다.",
  },
  {
    icon: Users,
    title: "가족 안심 연동",
    body: "QR로 연결하면 기록이 암호화되어 보호자 기기에만 읽기 전용으로 보입니다. 알림에는 이름·기록 종류만 넣고 수치는 넣지 않습니다.",
  },
  {
    icon: Type,
    title: "간편사용",
    body: "오늘·약·더보기 탭으로 단순해집니다. 큰 글씨로 오늘 미션·복약을 남기고, 필요할 때 일반 화면으로 돌아옵니다.",
  },
  {
    icon: Bell,
    title: "복약 알림",
    body: "약 이름과 시각만 넣으면 알려 드리고, 홈·알림·간편사용 「약」에서 「먹었어요」로 확인합니다. 가족 연동 시 미복용은 수치 없이 보호자에게 알려 드립니다.",
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
    icon: GitCompareArrows,
    title: "차수별 비교",
    body: "항암 차수를 골라 검사·체중·식사를 나란히 비교합니다. 투여일 기준 추이와 동시 변화 단서를 상담 참고용으로 모읍니다.",
  },
  {
    icon: Activity,
    title: "바이탈·기간 비교",
    body: "혈압·혈당·체온·체중·걸음을 남기고, 7일·30일 추이와 직전 기간 비교로 변화를 파악합니다.",
  },
  {
    icon: Target,
    title: "건강 목표",
    body: "목표 체중·혈당·하루 칼로리를 정해 두면 오늘 기록과 비교해 보여 줍니다. 치료 차수도 홈에서 바로 수정할 수 있습니다.",
  },
  {
    icon: Utensils,
    title: "자연어 식단",
    body: "평소 말하듯 식사를 적으면 칼로리·단백질 참고값을 계산합니다. (선택 시 공공 식품 DB)",
  },
  {
    icon: CalendarDays,
    title: "일정·예약지 OCR",
    body: "항암·외래·채혈 일정을 관리하고, 예약 안내지 촬영으로 날짜를 가져올 수 있습니다. 기기 캘린더·로컬 미리 알림은 선택입니다.",
  },
  {
    icon: Watch,
    title: "워치·헬스 (선택)",
    body: "Apple Health 또는 Health Connect·갤럭시 워치로 걸음·심박·혈압 등을 가져와 오늘 기록에 반영할 수 있습니다.",
  },
  {
    icon: FileSpreadsheet,
    title: "PDF·백업",
    body: "진료 브리핑 PDF와 데이터 백업·삭제를 기기 안에서 처리합니다. PDF 자체는 클라우드에 올리지 않습니다.",
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
    body: "케어 목적에 맞는 홈으로 시작하고, 오늘 미션·빠른 기록 타일로 남길 것만 먼저 챙깁니다. 보고 싶은 블록은 켜고 끄며 순서를 바꾸고, 목표 대비 체중·혈당과 미니 추이까지 한 화면에서 확인합니다.",
    points: [
      "오늘 미션으로 지금 남길 한 가지 안내",
      "홈 항목 표시·순서 직접 편집",
      "케어 목적에 맞춘 기본 홈 구성",
      "건강 목표와 오늘 기록 비교·미니 추이",
      "치료 진행·항암 차수 빠른 수정",
      "홈 위에서 「나」와 연동 가족 바로 전환",
    ],
    src: "/screenshots/01_home.png",
    alt: "바램 홈 화면",
  },
  {
    eyebrow: "가족 안심 연동",
    title: "암호화해 보내고, 보호자 기기에서만 읽기",
    body: "원하는 가족과만 QR로 연결합니다. 환자 기기에서 남긴 기록은 암호화되어 보호자 기기로만 전달되고, 서버에는 수치·평문을 남기지 않습니다. 보호자는 읽기 전용으로 오늘을 함께 봅니다.",
    points: [
      "QR 페어링 · 환자→보호자 단방향",
      "암호문 중계 후 전달용 사본 삭제",
      "홈에서 가족 프로필 전환·읽기 전용",
      "알림에 이름·기록 종류만 · 수치 미포함",
      "연동 해제 후에도 받은 기록은 직접 지울 때까지 유지",
    ],
    src: "/screenshots/02_family.png",
    alt: "바램 홈 — 가족 기록 읽기 전용",
    secondarySrc: "/screenshots/01_home.png",
    secondaryAlt: "바램 홈 — 나와 가족 프로필 전환",
  },
  {
    eyebrow: "간편사용",
    title: "오늘·약·더보기로 단순하게",
    body: "간편사용을 켜면 하단이 오늘·약·더보기 세 탭으로 바뀌고 글씨·버튼이 커집니다. 시스템 글씨가 크면 안내를 보여 드리며, 필요할 때 일반 화면으로 돌아올 수 있습니다.",
    points: [
      "오늘 탭에서 미션·체온·체중·혈압·혈당·식사",
      "약 탭에서 「먹었어요」로 복용 확인",
      "더보기에서 검사·일정·설정 진입",
      "일반 화면으로 언제든 전환",
    ],
    src: "/screenshots/01_home.png",
    alt: "바램 홈 — 오늘 기록(간편사용 「오늘」과 같은 미션)",
    secondarySrc: "/screenshots/07_profile.png",
    secondaryAlt: "바램 내 정보 — 간편사용 토글",
  },
  {
    eyebrow: "복약",
    title: "정해진 시각에 「먹었어요」까지",
    body: "약 이름과 시각만 넣으면 한국 시간 기준으로 알려 드립니다. 홈·알림·간편사용 「약」에서 복용을 확인하고, 「먹었어요」를 누를 때까지 다시 알려 드립니다.",
    points: [
      "정시 복약 알림(한국 시간)",
      "홈·알림에서 바로 복용 확인",
      "간편사용 「약」 탭의 큰 「먹었어요」",
      "가족 연동 시 미복용은 수치 없이 보호자 알림",
    ],
    src: "/screenshots/01_home.png",
    alt: "바램 홈 — 오늘 복약·미션",
    secondarySrc: "/screenshots/07_profile.png",
    secondaryAlt: "바램 내 정보 — 복약·간편사용 설정",
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
    src: "/screenshots/05_today.png",
    alt: "바램 기록 — 바이탈·컨디션",
    secondarySrc: "/screenshots/02_vital_trend.png",
    secondaryAlt: "바램 바이탈 추이·기간 비교",
  },
  {
    eyebrow: "차수별 비교",
    title: "항암 차수를 골라 수치·체중·식사를 나란히",
    body: "투여일을 기준으로 차수 구간을 나누고, 비교할 차수를 직접 고릅니다. 검사·체중·칼로리·단백질 추이를 겹쳐 보고, 같은 구간에 함께 변한 기록만 상담 참고용으로 모아 둡니다. 원인 진단이 아닙니다.",
    points: [
      "차수 A·B 선택 비교",
      "투여일(D0) 기준 체중·식사 오버레이",
      "검사·컨디션 동시 변화 단서(참고용)",
      "케어 리포트에도 차수 흐름 반영",
    ],
    src: "/screenshots/s03_cycle_compare.png",
    alt: "바램 차수별 비교 화면",
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
    eyebrow: "기록",
    title: "컨디션·식단을 빠르게",
    body: "홈 미션과 중앙 [기록]에서 체온·체중·수분·증상·식사를 남깁니다. 식단은 자연어로 적으면 칼로리·단백질이 분석되고, 목표는 참고용으로 둡니다.",
    points: [
      "하루 컨디션을 빠르게 체크",
      "자연어 식단 기록과 영양 분석",
      "Apple Health·Health Connect 걸음·활동(선택)",
    ],
    src: "/screenshots/05_today.png",
    alt: "바램 기록·컨디션 화면",
    secondarySrc: "/screenshots/09_meal_analysis.png",
    secondaryAlt: "바램 식사 기록 후 영양 분석 화면",
  },
  {
    eyebrow: "일정",
    title: "항암·외래·채혈 일정을 놓치지 않게",
    body: "치료·진료 일정을 앱에서 관리하고, 필요하면 기기 캘린더와 로컬 미리 알림을 켭니다. 일정 알림은 기기에서만 울리며, 가족 연동 알림과는 별개입니다.",
    points: [
      "치료·외래·채혈 일정 관리",
      "진료 예약 전표 OCR(선택)",
      "기기 캘린더 연동·로컬 미리 알림(선택)",
    ],
    src: "/screenshots/06_schedule.png",
    alt: "바램 일정 화면",
  },
  {
    eyebrow: "내 정보",
    title: "가족 연동·목표·잠금·내보내기를 한곳에서",
    body: "케어 경로·건강 목표·가족 안심 연동·보안·백업을 프로필에서 다룹니다. 계정 로그인 없이 기본 기록은 기기 안에만 둡니다.",
    points: [
      "가족 안심 연동(QR)·과거 기록 다시 보내기",
      "건강 목표·치료 경로·간편사용 설정",
      "Face ID / 생체 / 기기 암호 잠금",
      "로컬 PDF·백업·데이터 삭제",
    ],
    src: "/screenshots/07_profile.png",
    alt: "바램 내 정보 화면",
  },
];

export const securityPoints: IconBlurb[] = [
  {
    icon: ShieldCheck,
    title: "Local-First",
    body: "건강 기록은 기본적으로 사용자 기기 안에서만 처리됩니다. 운영자 서버에 평문·수치를 쌓지 않습니다.",
  },
  {
    icon: Lock,
    title: "내 기기에서 암호화",
    body: "기기에 저장된 기록과 시스템 보안 저장소를 활용합니다. 광고·마케팅용 판매·공유를 하지 않습니다.",
  },
  {
    icon: Users,
    title: "가족 연동은 선택",
    body: "가족 안심 연동을 켠 경우에만 전달용 암호문이 잠시 중계되고, 보호자 기기에 저장된 뒤 전달용 사본은 지워집니다. 알림에는 수치를 넣지 않습니다.",
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
    blurb: "치료·가족 연동·회복에 맞춰 쓰는 이유",
  },
  {
    href: "/scenarios/",
    label: "사용 예시",
    blurb: "항암 주간·가족 연동·외래·케어 리포트, 이럴 때 이렇게",
  },
  {
    href: "/guide/",
    label: "시작 가이드",
    blurb: "첫 주에 이것만 하면 됩니다",
  },
  {
    href: "/features/",
    label: "기능 소개",
    blurb: "오늘 미션·가족 연동·간편사용·복약·케어 리포트·검사 OCR",
  },
  {
    href: "/tour/",
    label: "앱 둘러보기",
    blurb: "홈·가족·간편사용·복약·검사·기록 실제 화면",
  },
  {
    href: "/security/",
    label: "데이터 보안",
    blurb: "기기 안 암호화·선택적 가족 연동",
  },
  {
    href: "/contact/",
    label: "고객 문의",
    blurb: "이메일로 문의하기",
  },
] as const;

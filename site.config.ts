/**
 * 바램(BAREM) 공식 사이트 설정
 * ─────────────────────────────────────────
 * 배포 전에 아래 값을 실제 정보로 바꾸세요.
 * Google Search Console 인증 토큰도 여기에 넣습니다.
 */

export const siteConfig = {
  /** 사이트 공개 URL (끝 슬래시 없이). sitemap·OG·canonical에 사용 */
  siteUrl: "https://hoon-chang.github.io/barem-site",

  /**
   * GitHub Pages 프로젝트 사이트면 "/barem-site"
   * 커스텀 도메인·Vercel 루트면 "" (빈 문자열)
   */
  basePath: "/barem-site",

  /** Google Search Console HTML 태그 인증값. 없으면 빈 문자열 */
  googleSiteVerification: "",

  brand: {
    /** 영문 상호 (푸터·조직 인증용 — 반드시 영문 BAREM 노출) */
    legalNameEn: "BAREM",
    /** 국문 상호 / 앱 표시명 */
    appNameKo: "바램 - 건강 기록",
    appNameEn: "BAREM - Health Tracker",
    shortNameKo: "바램",
    shortNameEn: "BAREM",
    taglineKo: "완치를 향한 매일의 발걸음",
  },

  business: {
    /** 개인사업자 | 법인 등 */
    typeKo: "개인사업자",
    typeEn: "Sole Proprietorship",
    /** 대표자명 */
    representative: "장훈",
    /** 사업자등록번호 (하이픈 포함 권장) */
    registrationNumber: "000-00-00000",
    /** 사업장 주소 (선택 — 필요 시 푸터에 표시) */
    address: "",
  },

  contact: {
    email: "skywing090809@gmail.com",
    /** 고객 지원용 추가 이메일 (같으면 위와 동일하게) */
    supportEmail: "skywing090809@gmail.com",
  },

  privacy: {
    /** 개인정보처리방침 시행일 */
    effectiveDateKo: "2026년 9월 10일",
    effectiveDateEn: "September 10, 2026",
  },

  stores: {
    /**
     * App Store 링크. 심사 전이면 "" → 버튼이 안내 문구로 표시됩니다.
     */
    appStoreUrl: "https://apps.apple.com/kr/app/id6804392885",
    /**
     * Google Play 링크. 출시 전이면 "" → Coming Soon / 출시 알림.
     */
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.barem.barem",
    playComingSoonLabelKo: "Google Play 출시 예정",
    playComingSoonLabelEn: "Google Play — Coming Soon",
  },

  seo: {
    titleKo: "바램 - 건강 기록 | BAREM",
    descriptionKo:
      "암 치료·회복과 보호자, 일상 건강까지. 맞춤 홈·검사 OCR·차수별 비교·케어 리포트·추이·식단을 내 기기에만 암호화해 두는 건강 기록.",
    descriptionEn:
      "On-device health journal for cancer treatment and recovery — customizable home, lab OCR, cycle compare, care reports, trends; data stays encrypted on your device.",
    ogLocale: "ko_KR",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** basePath를 붙인 내부 경로 */
export function withBase(path: string): string {
  const base = siteConfig.basePath.replace(/\/$/, "");
  if (!path || path === "/") return base || "/";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function absoluteUrl(path = "/"): string {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  // trailingSlash: true — page URLs end with /; keep file paths (images etc.) as-is.
  if (!path || path === "/") return `${origin}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  if (/\.[a-z0-9]+$/i.test(p)) return `${origin}${p}`;
  const withSlash = p.endsWith("/") ? p : `${p}/`;
  return `${origin}${withSlash}`;
}

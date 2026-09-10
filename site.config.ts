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
     * 예: https://apps.apple.com/kr/app/idXXXXXXXX
     */
    appStoreUrl: "",
    /**
     * Google Play 링크. 출시 전이면 "" → Coming Soon / 출시 알림.
     * 예: https://play.google.com/store/apps/details?id=com.barem.barem
     */
    playStoreUrl: "",
    playComingSoonLabelKo: "Google Play 출시 예정",
    playComingSoonLabelEn: "Google Play — Coming Soon",
  },

  seo: {
    titleKo: "바램 - 건강 기록 | BAREM",
    descriptionKo:
      "혈압·혈당·체온·복약까지, 온디바이스로 안전하게 기록하는 건강 다이어리. 민감 정보는 기기 안에만 암호화 보관됩니다.",
    descriptionEn:
      "BAREM is an on-device health tracker. Blood pressure, glucose, temperature, and medication logs stay encrypted on your device — never sold or shared.",
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
  if (!path || path === "/") return origin;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

/**
 * 바램(BAREM) 공식 사이트 설정
 * ─────────────────────────────────────────
 * 배포 전에 아래 값을 실제 정보로 바꾸세요.
 * Google Search Console 인증 토큰도 여기에 넣습니다.
 */

export const siteConfig = {
  /** 사이트 공개 URL (끝 슬래시 없이). sitemap·OG·canonical에 사용 */
  siteUrl: "https://www.baremapp.com",

  /**
   * GitHub Pages 프로젝트 경로(`/barem-site`)일 때만 basePath 설정.
   * 커스텀 도메인(루트)에서는 "" — 이미지·JS가 /barem-site/… 로 깨지지 않게 함.
   */
  basePath: "",

  /** Google Search Console HTML 태그 인증값. 없으면 빈 문자열 */
  googleSiteVerification: "",

  /**
   * 웹사이트 방문 집계 (GoatCounter — 쿠키·개인 식별 없음).
   * https://www.goatcounter.com 에서 사이트 코드 생성 후 아래에 넣으세요.
   * 대시보드: https://{code}.goatcounter.com
   * 빈 문자열이면 스크립트를 넣지 않습니다.
   */
  analytics: {
    goatCounterCode: "barem",
  },

  brand: {
    /** 영문 상호 (푸터·조직 인증용 — 반드시 영문 BAREM 노출) */
    legalNameEn: "BAREM",
    /** 국문 상호 / 앱 표시명 */
    appNameKo: "바램 - 안심 검사결과 노트",
    appNameEn: "BAREM - On-device Lab Notebook",
    shortNameKo: "바램",
    shortNameEn: "BAREM",
    taglineKo: "완치를 향한 매일의 발걸음, 서버 전송 없는 100% 안심 검사노트",
  },

  business: {
    /** 개인사업자 | 법인 등 */
    typeKo: "개인사업자",
    typeEn: "Sole Proprietorship",
    /** 대표자명 (비우면 푸터·약관에 표시하지 않음) */
    representative: "",
    /** 사업자등록번호 (하이픈 포함 권장) */
    registrationNumber: "000-00-00000",
    /** 사업장 주소 (선택 — 필요 시 푸터에 표시) */
    address: "",
  },

  contact: {
    email: "barem.health@gmail.com",
    /** 고객 지원용 추가 이메일 (같으면 위와 동일하게) */
    supportEmail: "barem.health@gmail.com",
  },

  privacy: {
    /** 개인정보처리방침 시행일 */
    effectiveDateKo: "2026년 10월 19일",
    effectiveDateEn: "October 19, 2026",
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
    titleKo:
      "바램 - 항암일지·항암일기 앱 | 암 환자 검사결과·피검사 안심 노트",
    descriptionKo:
      "항암일지·항암일기를 기기에만 안전하게. 항암 피검사(ANC) 그래프, 37.8℃ 발열 체크, 차수 비교, 1페이지 진료 브리핑까지 바램 온디바이스 건강노트로 모으세요.",
    descriptionEn:
      "Chemo diary on-device—no cloud upload of your records by default. Track ANC labs, fever checks, cycle compare, and a one-page clinic briefing with Barem.",
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

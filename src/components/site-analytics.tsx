import Script from "next/script";
import { siteConfig } from "../../site.config";

/**
 * GoatCounter — 쿠키·개인 식별자 없는 방문 집계.
 * code가 비어 있으면 스크립트를 넣지 않습니다.
 */
export function SiteAnalytics() {
  const code = siteConfig.analytics.goatCounterCode.trim();
  if (!code) return null;

  const endpoint = `https://${code}.goatcounter.com/count`;

  return (
    <>
      <Script
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        data-goatcounter={endpoint}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${endpoint}?p=${encodeURIComponent("/")}`}
          alt=""
          width={1}
          height={1}
          className="hidden"
        />
      </noscript>
    </>
  );
}

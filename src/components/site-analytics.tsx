"use client";

import { useEffect } from "react";
import { siteConfig } from "../../site.config";

/**
 * GoatCounter — 쿠키·개인 식별자 없는 방문 집계.
 *
 * next/script의 data-* 속성은 count.js가 document.currentScript에서
 * 읽지 못하는 경우가 있어, 직접 script 노드를 붙입니다.
 */
export function SiteAnalytics() {
  const code = siteConfig.analytics.goatCounterCode.trim();

  useEffect(() => {
    if (!code) return;
    if (typeof window === "undefined") return;
    if (document.getElementById("goatcounter-script")) return;

    const endpoint = `https://${code}.goatcounter.com/count`;
    const s = document.createElement("script");
    s.id = "goatcounter-script";
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", endpoint);
    document.body.appendChild(s);
  }, [code]);

  if (!code) return null;

  const endpoint = `https://${code}.goatcounter.com/count`;

  return (
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
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PhoneShot } from "../phone-shot";
import {
  featureExperienceTabs,
  featureMoreHighlights,
} from "../../content/marketing";

function tabIdFromHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  if (featureExperienceTabs.some((t) => t.id === id)) return id;
  if (id === "family") return "family-sync";
  if (id === "labs" || id === "ocr") return "labs-ocr";
  if (id === "fever") return "fever-guide";
  if (id === "briefing" || id === "report") return "care-briefing";
  return null;
}

export function FeaturesContent() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>(
    featureExperienceTabs[0].id,
  );

  useEffect(() => {
    const applyHash = () => {
      const next = tabIdFromHash(window.location.hash);
      if (next) setActiveId(next);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [pathname]);

  const active =
    featureExperienceTabs.find((t) => t.id === activeId) ??
    featureExperienceTabs[0];

  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <div
          role="tablist"
          aria-label="핵심 기능"
          className="flex flex-wrap gap-2"
        >
          {featureExperienceTabs.map((tab) => {
            const selected = tab.id === active.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => {
                  setActiveId(tab.id);
                  window.history.replaceState(null, "", `#${tab.id}`);
                }}
                className={
                  "inline-flex items-center gap-2 rounded-full px-3.5 py-2.5 text-left text-sm font-semibold transition sm:px-4 " +
                  (selected
                    ? "bg-green text-white shadow-sm"
                    : "bg-cream text-green-deep ring-1 ring-line hover:bg-green-soft")
                }
              >
                <span aria-hidden className="shrink-0">
                  {tab.emoji}
                </span>
                <span className="leading-snug">{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          key={active.id}
          className="mt-8 scroll-mt-24 animate-[fade-rise_0.45s_ease-out_both]"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <div className="order-1 mx-auto w-[min(100%,240px)] lg:order-none">
              <PhoneShot src={active.src} alt={active.alt} priority />
            </div>

            <div className="order-2 lg:order-none">
              <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
                기능 체험
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {active.title}
              </h2>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                {active.lead}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {active.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-green-deep"
                  >
                    {badge}
                  </li>
                ))}
              </ul>

              <ol className="mt-7 space-y-4">
                {active.benefits.map((benefit, index) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink sm:text-base">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
          함께 쓰는 기능
        </p>
        <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          일상 기록까지 같은 앱에서
        </h2>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
          핵심 네 가지 외에, 오늘 미션·간편사용·복약·잠금도 이어서 쓸 수
          있습니다.
        </p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureMoreHighlights.map(({ icon: Icon, title, body }) => (
            <li key={title} className="space-y-3 border-t border-line pt-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-soft text-green">
                <Icon size={18} aria-hidden />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

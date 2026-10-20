"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneShot } from "./phone-shot";
import { homeCareSystemTabs } from "../content/marketing";

export function HomeCareSystem() {
  const [activeId, setActiveId] = useState<string>(homeCareSystemTabs[0].id);
  const active =
    homeCareSystemTabs.find((t) => t.id === activeId) ?? homeCareSystemTabs[0];

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
          바램 핵심 케어 시스템
        </p>
        <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          항암일기 · 가족 연동 · 오늘 미션 · 케어 리포트를 한곳에서
        </h2>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
          탭을 바꿔 가며 핵심 흐름만 빠르게 확인하세요.
        </p>

        <div
          role="tablist"
          aria-label="핵심 케어 시스템"
          className="mt-8 flex flex-wrap gap-2"
        >
          {homeCareSystemTabs.map((tab) => {
            const selected = tab.id === active.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`care-tab-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition " +
                  (selected
                    ? "bg-green text-white shadow-sm"
                    : "bg-cream text-green-deep ring-1 ring-line hover:bg-green-soft")
                }
              >
                <span aria-hidden>{tab.emoji}</span>
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`care-tab-${active.id}`}
          key={active.id}
          className="mt-8 grid items-center gap-10 animate-[fade-rise_0.4s_ease-out_both] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
              {active.eyebrow}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {active.title}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              {active.body}
            </p>
            <ul className="mt-6 space-y-3">
              {active.points.map((point) => (
                <li key={point.name} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                  />
                  <span>
                    <span className="font-semibold text-ink">{point.name}</span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {point.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link
                href={active.ctaHref}
                className="font-medium text-green underline-offset-4 transition hover:text-green-deep hover:underline"
              >
                {active.ctaLabel} →
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3">
            <div className="w-[min(46%,220px)]">
              <PhoneShot src={active.src} alt={active.alt} />
            </div>
            {"secondarySrc" in active && active.secondarySrc ? (
              <div className="hidden w-[min(46%,220px)] sm:block">
                <PhoneShot
                  src={active.secondarySrc}
                  alt={active.secondaryAlt || ""}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

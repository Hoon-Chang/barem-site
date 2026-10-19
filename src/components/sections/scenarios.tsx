"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PhoneShot } from "../phone-shot";
import { CareReportGallery } from "../care-report-gallery";
import { scenarioPlaybooks } from "../../content/marketing";

function playbookIdFromHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  if (id === "family") return "family";
  if (id === "chemo-cycle" || id === "chemo-week") return "chemo-cycle";
  return null;
}

export function ScenariosContent() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>(scenarioPlaybooks[0].id);

  useEffect(() => {
    const applyHash = () => {
      const next = playbookIdFromHash(window.location.hash);
      if (next) setActiveId(next);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [pathname]);

  const active =
    scenarioPlaybooks.find((p) => p.id === activeId) ?? scenarioPlaybooks[0];

  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <div
          role="tablist"
          aria-label="사용 시나리오"
          className="flex flex-wrap gap-2"
        >
          {scenarioPlaybooks.map((book) => {
            const selected = book.id === active.id;
            return (
              <button
                key={book.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`tab-${book.id}`}
                onClick={() => {
                  setActiveId(book.id);
                  window.history.replaceState(null, "", `#${book.id}`);
                }}
                className={
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition " +
                  (selected
                    ? "bg-green text-white shadow-sm"
                    : "bg-white text-green-deep ring-1 ring-line hover:bg-green-soft")
                }
              >
                <span aria-hidden>{book.emoji}</span>
                <span>{book.tabLabel}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          id={active.id}
          className="mt-8 scroll-mt-24"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
            시나리오
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {active.title}
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
            {active.lead}
          </p>

          <ol className="mt-8 space-y-8">
            {active.steps.map((step, index) => (
              <li
                key={step.label}
                className="grid items-center gap-6 rounded-2xl border border-line bg-surface px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1fr_0.72fr]"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-green uppercase">
                    {step.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-soft text-xs text-green">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {step.body}
                  </p>
                </div>
                <div className="mx-auto w-[min(100%,220px)]">
                  <PhoneShot src={step.src} alt={step.alt} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CareReportGallery title="외래 전에 열어보는 리포트 4종" />

      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        기록과 추이는 상담할 때 참고용입니다. 이상 증상이나 치료·식이 결정은
        반드시 의료진과 상의하세요.
      </p>
    </div>
  );
}

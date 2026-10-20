"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CareReportGallery } from "../care-report-gallery";
import { ScenarioPlaybookSteps } from "../scenario-playbook-steps";
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
          <ScenarioPlaybookSteps playbook={active} />
          {active.id === "chemo-cycle" ? (
            <p className="mt-6 text-sm text-muted">
              항암일지·항암일기로 쓰는 법이 궁금하시면{" "}
              <Link
                href="/chemo-diary/"
                className="font-semibold text-green underline-offset-4 hover:underline"
              >
                항암일지 가이드
              </Link>
              에서 같은 3주 주기와 FAQ를 이어서 보세요.
            </p>
          ) : null}
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

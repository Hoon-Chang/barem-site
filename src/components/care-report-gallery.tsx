"use client";

import { useState } from "react";
import { SiteImage } from "./site-image";
import { CareReportModal } from "./care-report-modal";
import { careReportPreviews } from "../content/marketing";

export function CareReportGallery({
  eyebrow = "케어 리포트",
  title = "A4 케어 리포트 4종 미리보기",
  lead = "썸네일을 누르면 실물 양식 샘플이 열립니다. 상담 참고용이며 진단이 아닙니다.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  const [modalId, setModalId] = useState<string | null>(null);
  const modalReport =
    careReportPreviews.find((r) => r.id === modalId) ?? null;

  return (
    <section id="care-reports" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
        {lead}
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {careReportPreviews.map((report) => (
          <li key={report.id}>
            <button
              type="button"
              onClick={() => setModalId(report.id)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left transition hover:border-green/35 hover:shadow-[0_14px_36px_-24px_rgba(15,61,44,0.45)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-green-soft/40">
                <SiteImage
                  src={report.src}
                  alt={report.alt}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-green px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  미리보기
                </span>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {report.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {report.summary}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <CareReportModal
        report={modalReport}
        onClose={() => setModalId(null)}
      />
    </section>
  );
}

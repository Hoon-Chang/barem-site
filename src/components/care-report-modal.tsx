"use client";

import { useEffect } from "react";
import { SiteImage } from "./site-image";
import type { careReportPreviews } from "../content/marketing";

type Report = (typeof careReportPreviews)[number];

export function CareReportModal({
  report,
  onClose,
}: {
  report: Report | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!report) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [report, onClose]);

  if (!report) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="care-report-modal-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl ring-1 ring-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-green uppercase">
              케어 리포트 샘플
            </p>
            <h3
              id="care-report-modal-title"
              className="mt-0.5 text-base font-semibold tracking-tight text-ink sm:text-lg"
            >
              {report.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{report.summary}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-green-deep ring-1 ring-line transition hover:bg-green-soft"
          >
            닫기
          </button>
        </div>

        <div className="overflow-y-auto bg-[#e8ebe8] px-3 py-4 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-[640px] rounded-sm bg-white p-3 shadow-[0_12px_40px_-16px_rgba(15,61,44,0.45)] ring-1 ring-black/5 sm:p-5">
            <div className="mb-3 flex items-center justify-between border-b border-line pb-2 text-[10px] text-muted sm:text-xs">
              <span>바램 · 케어 리포트 (샘플)</span>
              <span>A4 미리보기 · 진단 아님</span>
            </div>
            <SiteImage
              src={report.src}
              alt={report.alt}
              width={828}
              height={1800}
              className="mx-auto h-auto w-full object-contain object-top"
              sizes="(max-width: 768px) 92vw, 640px"
            />
            <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
              ※ 상담 참고용 샘플입니다. 의학적 진단·처방을 대체하지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteFaqs } from "../content/marketing";

export function FaqAccordion({
  eyebrow = "FAQ",
  title = "자주 묻는 질문",
  lead = "다운로드 전에 환자와 보호자가 가장 많이 묻는 질문입니다.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(siteFaqs[0]?.id ?? null);

  return (
    <section id="faq" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
        {lead}
      </p>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {siteFaqs.map((faq) => {
          const open = openId === faq.id;
          return (
            <li key={faq.id}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : faq.id)}
                className="flex w-full items-start justify-between gap-4 py-4 text-left"
              >
                <span className="text-sm font-semibold leading-snug text-ink sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={
                    "mt-0.5 shrink-0 text-green transition " +
                    (open ? "rotate-180" : "")
                  }
                />
              </button>
              {open ? (
                <p className="pb-4 pr-8 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {faq.answer}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

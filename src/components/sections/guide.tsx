import Link from "next/link";
import { PhoneShot } from "../phone-shot";
import { guideSteps } from "../../content/marketing";

export function GuideContent() {
  return (
    <>
      <div className="space-y-16 sm:space-y-20">
        {guideSteps.map((item, index) => {
          const reverse = index % 2 === 1;
          const hasSecondary = Boolean(item.secondarySrc);
          return (
            <div
              key={item.step}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-green">
                  STEP {item.step}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
              <div className="flex items-end justify-center gap-3 sm:gap-4">
                <div
                  className={
                    hasSecondary
                      ? "w-[min(46%,220px)]"
                      : "w-[min(100%,280px)]"
                  }
                >
                  <PhoneShot src={item.src} alt={item.alt} />
                </div>
                {item.secondarySrc ? (
                  <div className="w-[min(46%,220px)]">
                    <PhoneShot
                      src={item.secondarySrc}
                      alt={item.secondaryAlt || ""}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          바램은 의료기기가 아닙니다. 기록·추이는 참고용이며, 치료와 식이는
          의료진과 상의하세요.
        </p>
        <Link
          href="/#download"
          className="shrink-0 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-deep"
        >
          앱 받기
        </Link>
      </div>
    </>
  );
}

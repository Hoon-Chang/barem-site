import { PhoneShot } from "../phone-shot";
import { usageScenarios } from "../../content/marketing";

export function ScenariosContent() {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {usageScenarios.map((item) => {
          const shots = [
            { src: item.src, alt: item.alt },
            ...("secondarySrc" in item && item.secondarySrc
              ? [
                  {
                    src: item.secondarySrc,
                    alt:
                      "secondaryAlt" in item && item.secondaryAlt
                        ? item.secondaryAlt
                        : "",
                  },
                ]
              : []),
            ...("tertiarySrc" in item && item.tertiarySrc
              ? [
                  {
                    src: item.tertiarySrc,
                    alt:
                      "tertiaryAlt" in item && item.tertiaryAlt
                        ? item.tertiaryAlt
                        : "",
                  },
                ]
              : []),
          ];
          const shotCount = shots.length;
          const phoneWidth =
            shotCount >= 3
              ? "w-[min(31%,170px)]"
              : shotCount === 2
                ? "w-[min(46%,220px)]"
                : "w-[min(100%,280px)]";

          return (
            <article
              key={item.situation}
              className="grid gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-[1fr_0.95fr] lg:gap-12"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
                  {item.situation}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.body}
                </p>
                <ol className="mt-6 space-y-3">
                  {item.steps.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-soft text-xs font-semibold text-green"
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3">
                {shots.map((shot) => (
                  <div key={shot.src} className={phoneWidth}>
                    <PhoneShot src={shot.src} alt={shot.alt} />
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        기록과 추이는 상담할 때 참고용입니다. 이상 증상이나 치료·식이 결정은
        반드시 의료진과 상의하세요.
      </p>
    </>
  );
}

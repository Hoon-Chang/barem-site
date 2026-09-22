import { PhoneShot } from "../phone-shot";
import { deepFeatures } from "../../content/marketing";

export function TourContent() {
  return (
    <div className="space-y-20">
      {deepFeatures.map((feature, index) => {
        const reverse = index % 2 === 1;
        return (
          <div
            key={feature.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
              reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-green uppercase">
                {feature.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {feature.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {feature.body}
              </p>
              <ul className="mt-5 space-y-2">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex items-end justify-center gap-3 sm:gap-4 ${
                feature.secondarySrc ? "sm:justify-center" : ""
              }`}
            >
              <div
                className={
                  feature.secondarySrc
                    ? "w-[min(46%,220px)]"
                    : "w-[min(100%,280px)]"
                }
              >
                <PhoneShot src={feature.src} alt={feature.alt} />
              </div>
              {feature.secondarySrc ? (
                <div className="hidden w-[min(46%,220px)] sm:block">
                  <PhoneShot
                    src={feature.secondarySrc}
                    alt={feature.secondaryAlt || ""}
                  />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

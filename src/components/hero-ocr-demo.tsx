import { SiteImage } from "./site-image";

/**
 * Phone mock that loops: lab-report capture → scan → ANC trend chart.
 * Uses the same iPhone 16 Pro frame as PhoneShot.
 */
const FRAME = {
  src: "/brand/iphone-16-pro-frame-v2.png",
  w: 1406,
  h: 2822,
  screen: { x: 102, y: 100, w: 1206, h: 2622 },
} as const;

export function HeroOcrDemo({ className = "" }: { className?: string }) {
  const { x, y, w, h } = FRAME.screen;

  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] ${className}`}
      style={{ aspectRatio: `${FRAME.w} / ${FRAME.h}` }}
      aria-label="검사결과지 캡처가 ANC 추이 그래프로 바뀌는 시연"
    >
      <div
        className="absolute overflow-hidden bg-[#F7F6F3]"
        style={{
          left: `${(x / FRAME.w) * 100}%`,
          top: `${(y / FRAME.h) * 100}%`,
          width: `${(w / FRAME.w) * 100}%`,
          height: `${(h / FRAME.h) * 100}%`,
        }}
      >
        <div className="hero-ocr-stage relative h-full w-full">
          <div className="hero-ocr-paper absolute inset-0 flex flex-col bg-[#eef2ef] px-[8%] pt-[14%] pb-[10%]">
            <div className="rounded-md bg-white px-3 py-3 shadow-sm ring-1 ring-black/5">
              <p className="text-[10px] font-semibold tracking-wide text-[#5a6b62]">
                종합병원 · 혈액검사
              </p>
              <p className="mt-1 text-[11px] font-bold text-[#14201a]">
                CBC with Differential
              </p>
              <div className="mt-3 space-y-1.5 text-[10px] text-[#14201a]">
                <div className="flex justify-between border-b border-dashed border-[#d5e0d8] pb-1">
                  <span>WBC</span>
                  <span className="font-semibold">7.0</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-[#d5e0d8] pb-1">
                  <span>ANC (호중구)</span>
                  <span className="font-semibold text-[#1f6b4a]">2,400</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-[#d5e0d8] pb-1">
                  <span>Hb</span>
                  <span className="font-semibold">11.8</span>
                </div>
                <div className="flex justify-between">
                  <span>PLT</span>
                  <span className="font-semibold">205,000</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[10px] font-medium text-[#1f6b4a]">
              캡처 한 장으로 인식 중…
            </p>
            <div className="hero-ocr-scan pointer-events-none absolute inset-x-[6%] top-[12%] h-0.5 rounded-full bg-[#1f6b4a]/70 shadow-[0_0_12px_rgba(31,107,74,0.55)]" />
          </div>

          <div className="hero-ocr-chart absolute inset-0">
            <SiteImage
              src="/screenshots/04_lab_chart.png"
              alt="ANC 호중구 추이 그래프"
              width={414}
              height={900}
              className="block h-full w-full object-cover object-top"
              sizes="300px"
              priority
            />
          </div>
        </div>
      </div>

      <SiteImage
        src={FRAME.src}
        alt=""
        width={FRAME.w}
        height={FRAME.h}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full drop-shadow-[0_28px_60px_rgba(15,61,44,0.45)]"
        sizes="300px"
        priority
      />
    </div>
  );
}

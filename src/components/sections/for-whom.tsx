import Link from "next/link";
import { PhoneShot } from "../phone-shot";
import {
  forWhomBeforeAfter,
  forWhomPersonas,
} from "../../content/marketing";

export function ForWhomContent() {
  const { before, after } = forWhomBeforeAfter;

  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
          이런 분께 맞습니다
        </p>
        <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          상황만 달라도, 남기고 싶은 마음은 같습니다
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forWhomPersonas.map((persona) => (
            <li
              key={persona.title}
              className="flex flex-col rounded-2xl border border-line bg-surface px-5 py-6 shadow-[0_10px_28px_-24px_rgba(15,61,44,0.35)] sm:px-6"
            >
              <span
                aria-hidden
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-soft text-xl"
              >
                {persona.emoji}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink sm:text-lg">
                {persona.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {persona.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
          Before vs After
        </p>
        <h2 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          같은 기록, 다른 하루
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#e2b4b0] bg-[#fff7f6] px-5 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#a33b32] uppercase">
              {before.label}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#7a2a24]">
              {before.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {before.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-[#6b3531] sm:text-[0.95rem]"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c45c52]"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-green/25 bg-green-soft/70 px-5 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-green uppercase">
              {after.label}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-green-deep">
              {after.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {after.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-ink sm:text-[0.95rem]"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="grid items-center gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
            바로 시작
          </p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">
            목적만 고르면, 오늘 기록이 홈에 모입니다
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
            치료 진행·검사 수치·일정·컨디션을 목적에 맞게 구성하고, 외래 전에는
            케어 리포트로 정리할 수 있습니다. 기본 기록은 기기 안에만 둡니다.
          </p>
          <div className="mt-6">
            <Link
              href="/#download"
              className="inline-flex rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-deep"
            >
              앱으로 시작하기
            </Link>
            <p className="mt-3 text-sm text-muted">
              회원가입 없이 설치 즉시 사용할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-[min(100%,280px)] animate-[fade-rise_0.7s_ease-out_both]">
            <PhoneShot
              src="/screenshots/01_home.png"
              alt="바램 홈 — 치료 중 맞춤 화면"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

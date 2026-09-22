import Link from "next/link";
import { PhoneShot } from "../phone-shot";
import { forWhomAlso } from "../../content/marketing";

export function ForWhomContent() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
      <div className="space-y-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
            치료 중
          </p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">
            오늘 해야 할 기록이 홈에 모여 있습니다
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted">
            치료 진행·검사 수치·일정·컨디션을 목적에 맞게 구성하고, 차수별
            비교로 변화를 정리합니다.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {forWhomAlso.map(({ icon: Icon, label, body }) => (
            <li key={label} className="flex gap-4 py-5">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-soft text-green">
                <Icon size={18} aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/#download"
            className="inline-flex rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-deep"
          >
            앱으로 시작하기
          </Link>
          <p className="mt-3 text-sm text-muted">
            설치 후 목적만 고르면 바로 쓸 수 있습니다.
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
    </div>
  );
}

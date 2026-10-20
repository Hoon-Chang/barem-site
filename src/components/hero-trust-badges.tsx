import Link from "next/link";

const BADGES = [
  {
    icon: "📔",
    label: "항암일기",
    href: "/chemo-diary/",
  },
  {
    icon: "🔒",
    label: "서버 전송 0% (100% 온디바이스)",
    href: "/security/",
  },
  {
    icon: "⚡",
    label: "회원가입 없이 즉시 시작",
    href: "/#download",
  },
  {
    icon: "📸",
    label: "병원 앱 캡처 1초 OCR",
    href: "/features/#labs-ocr",
  },
] as const;

export function HeroTrustBadges() {
  return (
    <ul className="mt-6 flex max-w-xl flex-wrap gap-2">
      {BADGES.map((badge) => (
        <li key={badge.label}>
          <Link
            href={badge.href}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium leading-none text-green-deep transition hover:bg-[rgba(46,125,50,0.14)]"
            style={{ background: "rgba(46, 125, 50, 0.08)" }}
          >
            <span aria-hidden className="text-[12px]">
              {badge.icon}
            </span>
            <span>{badge.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

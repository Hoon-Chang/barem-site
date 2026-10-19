import Link from "next/link";
import { StoreButtons } from "./store-buttons";
import { SiteImage } from "./site-image";

/** 하위 페이지 하단 공통 CTA. */
export function DownloadBand() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <SiteImage
            src="/brand/barem_icon.png"
            alt=""
            width={48}
            height={48}
            className="rounded-[22%]"
          />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]">
              완치를 향한 매일의 안심 기록, 지금 시작하세요
            </h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
              가입 절차와 데이터 유출 걱정 없이, 설치 즉시 내 폰 안에서 안전하게
              시작하실 수 있습니다.
            </p>
          </div>
        </div>
        <div>
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}

export function PageShell({
  eyebrow,
  title,
  lead,
  children,
  surface = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  children: React.ReactNode;
  surface?: boolean;
}) {
  return (
    <div className={surface ? "bg-surface" : undefined}>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.18em] text-green uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl ${
            eyebrow ? "mt-3" : ""
          }`}
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {lead}
          </p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-medium text-green underline-offset-4 transition hover:text-green-deep hover:underline"
    >
      {children}
    </Link>
  );
}

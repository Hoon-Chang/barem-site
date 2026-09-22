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
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              지금 바로 시작하세요
            </h2>
            <p className="mt-2 text-muted">
              App Store와 Google Play에서 바로 다운로드할 수 있어요.
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

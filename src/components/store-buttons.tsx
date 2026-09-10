import { siteConfig } from "../../site.config";

function StoreButton({
  href,
  title,
  subtitle,
  disabled,
}: {
  href?: string;
  title: string;
  subtitle: string;
  disabled?: boolean;
}) {
  const className =
    "inline-flex min-w-[11.5rem] flex-col rounded-xl border px-4 py-3 text-left transition " +
    (disabled
      ? "cursor-default border-line bg-white/60 text-muted"
      : "border-green/30 bg-green text-white hover:bg-green-deep");

  if (!href || disabled) {
    return (
      <span className={className} aria-disabled="true">
        <span className="text-[11px] opacity-80">{subtitle}</span>
        <span className="text-sm font-semibold tracking-tight">{title}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="text-[11px] opacity-80">{subtitle}</span>
      <span className="text-sm font-semibold tracking-tight">{title}</span>
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  const { stores } = siteConfig;
  const appReady = Boolean(stores.appStoreUrl);
  const playReady = Boolean(stores.playStoreUrl);

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <StoreButton
        href={stores.appStoreUrl || undefined}
        disabled={!appReady}
        subtitle={appReady ? "Download on the" : "Coming soon on the"}
        title="App Store"
      />
      <StoreButton
        href={stores.playStoreUrl || undefined}
        disabled={!playReady}
        subtitle={playReady ? "Get it on" : stores.playComingSoonLabelEn}
        title={playReady ? "Google Play" : stores.playComingSoonLabelKo}
      />
    </div>
  );
}

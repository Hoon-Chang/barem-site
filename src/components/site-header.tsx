"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";

const nav = [
  { href: "/#features", label: "기능 소개" },
  { href: "/#tour", label: "앱 둘러보기" },
  { href: "/#security", label: "데이터 보안" },
  { href: "/privacy/", label: "개인정보처리방침" },
  { href: "/#contact", label: "고객 문의" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="바램 홈">
          <BrandLogo size={32} wordmarkClassName="text-base sm:text-lg" />
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#download"
            className="rounded-full bg-green px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-green-deep sm:text-sm"
          >
            앱 받기
          </Link>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-muted lg:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-cream px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-2.5 text-sm text-ink hover:bg-green-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Legacy /scenarios → /about (preserve scenario hashes). */
export default function ScenariosRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash === "family") {
      router.replace("/about/#family");
      return;
    }
    if (hash === "chemo-cycle" || hash === "chemo-week") {
      router.replace("/about/#chemo-cycle");
      return;
    }
    router.replace("/about/#scenarios");
  }, [router]);

  return (
    <main className="mx-auto max-w-lg px-5 py-24 text-center">
      <p className="text-base text-muted">서비스 소개 페이지로 이동합니다.</p>
      <p className="mt-3">
        <a
          href="/about/#scenarios"
          className="font-semibold text-green underline-offset-4 hover:underline"
        >
          /about/ 로 이동 →
        </a>
      </p>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Client replace for static-export redirects (GitHub Pages). */
export function RedirectClient({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <main className="mx-auto max-w-lg px-5 py-24 text-center">
      <p className="text-base text-muted">페이지를 옮겼습니다.</p>
      <p className="mt-3">
        <a
          href={to}
          className="font-semibold text-green underline-offset-4 hover:underline"
        >
          {to} 로 이동 →
        </a>
      </p>
    </main>
  );
}

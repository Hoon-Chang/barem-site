"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Sticky header offset — keep in sync with header h-14 / sm:h-16. */
const HEADER_OFFSET_PX = 72;

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

/**
 * Next.js App Router + static export often lands on the page top when
 * navigating with a hash. Re-apply hash scroll after the target mounts.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const apply = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };
    apply();
    // Images / PhoneShot can shift layout after first paint.
    const t1 = window.setTimeout(apply, 120);
    const t2 = window.setTimeout(apply, 500);
    const onHash = () => apply();
    window.addEventListener("hashchange", onHash);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", onHash);
    };
  }, [pathname]);

  return null;
}

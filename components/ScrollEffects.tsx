"use client";

import { useEffect } from "react";

type ScrollEffectsProps = {
  selector?: string;
};

export function ScrollEffects({ selector = "[data-reveal]" }: ScrollEffectsProps) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      for (const el of elements) el.classList.add("is-revealed");
      return;
    }

    for (const el of elements) el.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.classList.add("is-revealed");
          observer.unobserve(target);
        }
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [selector]);

  return null;
}


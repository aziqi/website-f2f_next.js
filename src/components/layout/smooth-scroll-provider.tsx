"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Lenis is for wheel/trackpad. Touch devices use native scroll — faster & smoother.
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouchDevice) return;

    const lenis = new Lenis({
      lerp: 0.15,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    let rafId = 0;
    function raf(time: number) {
      if (!document.hidden) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Allow any component (e.g. modals) to pause/resume Lenis
    const onStop = () => lenis.stop();
    const onStart = () => lenis.start();
    window.addEventListener("lenis:stop", onStop);
    window.addEventListener("lenis:start", onStart);

    // Anchor link smooth scroll via Lenis
    const handleAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -20, duration: 1.4 });
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("lenis:stop", onStop);
      window.removeEventListener("lenis:start", onStart);
      document.removeEventListener("click", handleAnchor);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

"use client";

import { useEffect } from "react";

interface ScrollMotionBlurProps {
  targetSelector?: string;
  maxBlur?: number;
  sensitivity?: number;
}

/**
 * ScrollMotionBlur
 * Menghitung kecepatan gulir (scroll velocity) secara real-time dan menerapkan
 * efek filter motion blur yang halus dan terakselerasi GPU pada konten halaman saat scroll.
 * Efek memudar secara mulus (decay lerp) kembali ke 0px saat berhenti agar teks tetap tajam.
 */
export function ScrollMotionBlur({
  targetSelector = "#main",
  maxBlur = 4.0,
  sensitivity = 0.08,
}: ScrollMotionBlurProps) {
  useEffect(() => {
    // Hormati preferensi aksesibilitas pengguna
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let targetElement = document.querySelector<HTMLElement>(targetSelector);
    let lastScrollY = window.scrollY;
    let currentBlur = 0;
    let targetBlur = 0;
    let rafId = 0;
    let isRunning = true;

    const updateBlur = () => {
      if (!isRunning) return;

      if (!targetElement) {
        targetElement = document.querySelector<HTMLElement>(targetSelector);
      }

      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Ambang batas (threshold): abaikan getaran mikro (<3px) agar teks tetap tajam saat baca lambat
      if (delta > 3) {
        targetBlur = Math.min((delta - 3) * sensitivity, maxBlur);
      } else {
        targetBlur = 0;
      }

      // Smooth decay / lerp spring untuk transisi yang natural dan elastis
      currentBlur += (targetBlur - currentBlur) * 0.28;

      if (targetElement) {
        if (currentBlur > 0.12) {
          targetElement.style.filter = `blur(${currentBlur.toFixed(2)}px)`;
          targetElement.style.willChange = "filter";
        } else if (targetElement.style.filter) {
          targetElement.style.filter = "";
          targetElement.style.willChange = "";
        }
      }

      rafId = requestAnimationFrame(updateBlur);
    };

    rafId = requestAnimationFrame(updateBlur);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
      if (targetElement) {
        targetElement.style.filter = "";
        targetElement.style.willChange = "";
      }
    };
  }, [targetSelector, maxBlur, sensitivity]);

  return null;
}

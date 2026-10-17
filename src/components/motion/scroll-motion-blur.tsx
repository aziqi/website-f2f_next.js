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
  maxBlur = 2.2,
  sensitivity = 0.06,
}: ScrollMotionBlurProps) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let targetElement = document.querySelector<HTMLElement>(targetSelector);
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let currentBlur = 0;
    let targetBlur = 0;
    let lastAppliedBlur = 0;
    let hasGpuPromotion = false;
    let rafId = 0;
    let isRunning = true;

    const updateBlur = (now: number) => {
      if (!isRunning) return;

      if (!targetElement) {
        targetElement = document.querySelector<HTMLElement>(targetSelector);
      }

      const dt = Math.max(1, Math.min(now - lastTime, 100));
      lastTime = now;

      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Normalize velocity to 60fps frame equivalent so blur remains identical across 60Hz/120Hz/144Hz/180Hz
      const normalizedSpeed = (delta / dt) * 16.67;

      if (normalizedSpeed > 2.0) {
        targetBlur = Math.min((normalizedSpeed - 2.0) * sensitivity, maxBlur);
      } else {
        targetBlur = 0;
      }

      // Smooth decay using framerate-independent easing curve
      const decayFactor = 1 - Math.exp(-dt / 60);
      currentBlur += (targetBlur - currentBlur) * Math.min(1, Math.max(0.18, decayFactor));

      if (targetElement) {
        // Skip DOM writes if delta between frames is microscopic (< 0.04px) to preserve GPU fill rate
        if (Math.abs(currentBlur - lastAppliedBlur) > 0.04) {
          if (currentBlur > 0.1) {
            targetElement.style.filter = `blur(${currentBlur.toFixed(2)}px)`;
            if (!hasGpuPromotion) {
              targetElement.style.willChange = "filter, transform";
              targetElement.style.transform = "translate3d(0, 0, 0)";
              targetElement.style.backfaceVisibility = "hidden";
              hasGpuPromotion = true;
            }
            lastAppliedBlur = currentBlur;
          } else if (hasGpuPromotion) {
            targetElement.style.filter = "";
            targetElement.style.willChange = "";
            targetElement.style.transform = "";
            targetElement.style.backfaceVisibility = "";
            hasGpuPromotion = false;
            lastAppliedBlur = 0;
          }
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
        targetElement.style.transform = "";
        targetElement.style.backfaceVisibility = "";
      }
    };
  }, [targetSelector, maxBlur, sensitivity]);

  return null;
}

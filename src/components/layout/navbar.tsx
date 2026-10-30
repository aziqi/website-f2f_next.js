"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Download,
  Menu,
  X,
  Github,
  Instagram,
  Home,
  Cpu,
  Leaf,
  Smartphone,
  MoreHorizontal,
} from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimatePresence, motion } from "framer-motion";
import { MusicToggleButton } from "@/components/audio/music-toggle-button";

const navLinks = [
  { id: "video", href: "/#video", label: "Video Demo" },
  { id: "sistem", href: "/#sistem", label: "Sistem IoT" },
  { id: "fitur", href: "/#fitur", label: "7 Parameter" },
  { id: "tampilan", href: "/#tampilan", label: "Aplikasi" },
  { id: "dokumen", href: "/#dokumen", label: "Dokumen" },
  { id: "tim", href: "/#tim", label: "Tim" },
  { id: "galeri", href: "/#galeri", label: "Galeri" },
  { id: "faq", href: "/#faq", label: "FAQ" },
];

const secondaryLinks = [
  { id: "video", href: "/#video", label: "Video Demo" },
  { id: "dokumen", href: "/#dokumen", label: "Dokumen & Riset" },
  { id: "tim", href: "/#tim", label: "Tim Peneliti" },
  { id: "galeri", href: "/#galeri", label: "Galeri Dokumentasi" },
  { id: "faq", href: "/#faq", label: "Tanya Jawab (FAQ)" },
];

const bottomNavItems = [
  { id: "top", href: "/#top", icon: Home, label: "Beranda" },
  { id: "sistem", href: "/#sistem", icon: Cpu, label: "IoT" },
  { id: "fitur", href: "/#fitur", label: "Fitur", icon: Leaf },
  { id: "tampilan", href: "/#tampilan", icon: Smartphone, label: "App" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If close to top, clear active section
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      // If scrolled to bottom of page, highlight the last section (FAQ)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("faq");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver for robust section detection
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersecting = entries.filter((entry) => entry.isIntersecting);
      if (intersecting.length > 0) {
        // Pick the intersecting section closest to the top
        const sorted = [...intersecting].sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        if (sorted[0]?.target.id && window.scrollY >= 120) {
          setActiveSection(sorted[0].target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0, 0.2, 0.5],
    });

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-6 lg:px-8 pt-2.5 sm:pt-4 pointer-events-none">
        <div
          className={`relative max-w-7xl mx-auto flex items-center justify-between pointer-events-auto rounded-full transition-all duration-300 px-3 sm:px-6 py-1.5 sm:py-2.5 overflow-hidden ${
            isScrolled
              ? "bg-[#05140D]/85 backdrop-blur-2xl backdrop-saturate-150 border border-[#22C55E]/35 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),inset_0_1.5px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(34,197,94,0.3),0_0_30px_rgba(34,197,94,0.18)] ring-1 ring-white/10"
              : "bg-[#06170E]/60 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.65),inset_0_1.5px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(34,197,94,0.2),0_0_20px_rgba(34,197,94,0.12)]"
          }`}
        >
          {/* Specular Glaze Rims (Liquid Glass Highlights) */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="pointer-events-none absolute inset-x-12 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#22C55E]/35 to-transparent" />
          <div className="pointer-events-none absolute -top-8 left-1/4 w-40 h-16 bg-[#22C55E]/10 rounded-full blur-2xl transform -rotate-12" />

          {/* Brand Logo */}
          <Link
            href="/#top"
            onClick={() => setActiveSection("")}
            className="relative z-10 flex items-center group focus:outline-none focus:ring-2 focus:ring-[#F58220] rounded-full px-1.5 py-0.5 transition-transform hover:scale-105 shrink-0"
          >
            <span className="font-display font-bold text-base sm:text-xl tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] whitespace-nowrap">
              Flood<span className="text-[#F58220] drop-shadow-[0_0_12px_rgba(245,130,32,0.4)]">2</span>Food
            </span>
          </Link>

          {/* Desktop Nav Links Dock with Animated Sliding Pill */}
          <nav
            className="hidden xl:flex items-center gap-0.5 2xl:gap-1 bg-black/45 backdrop-blur-xl p-1 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.6)] relative z-10 whitespace-nowrap shrink-0"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 flex items-center whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#A3C2AF] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22C55E]/25 via-[#16a34a]/35 to-[#22C55E]/25 border border-[#22C55E]/60 shadow-[0_0_15px_rgba(34,197,94,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center whitespace-nowrap">
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E,0_0_4px_#ffffff] mr-1.5 shrink-0 animate-pulse"
                      />
                    )}
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Actions Group */}
          <div className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Liquid Glass Ambient Music Controller Pill */}
            <Magnetic strength={0.2}>
              <MusicToggleButton variant="navbar-pill" />
            </Magnetic>

            {/* Instagram Official Link Button */}
            <a
              href="https://www.instagram.com/flood2food"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-[#E1306C]/25 hover:border-[#E1306C]/60 border border-white/15 text-[#A3C2AF] hover:text-[#E1306C] flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] shrink-0"
              aria-label="Instagram Resmi Flood2Food"
              title="Instagram: @flood2food"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            {/* GitHub Repository Link Button */}
            <a
              href="https://github.com/aziqi/Flood2Food"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/20 border border-white/15 text-[#A3C2AF] hover:text-white flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0"
              aria-label="Repository GitHub Flood2Food"
              title="GitHub: aziqi/Flood2Food"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            {/* Tablet & Desktop Liquid Amber Download Button */}
            <div className="hidden sm:block">
              <Magnetic strength={0.25}>
                <Link
                  href="/#unduh"
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs text-[#081A10] bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#F58220] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_4px_20px_rgba(245,130,32,0.4),inset_0_1.5px_1px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 group overflow-hidden"
                >
                  <span className="relative z-10">Download APK</span>
                  <span className="relative z-10 w-5 h-5 rounded-full bg-black/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Download className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </Link>
              </Magnetic>
            </div>

            {/* Mobile & Tablet More / Menu Button */}
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              className="xl:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/15 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0 flex items-center justify-center"
              aria-label={moreMenuOpen ? "Tutup menu tambahan" : "Buka menu lainnya"}
              aria-expanded={moreMenuOpen}
            >
              {moreMenuOpen ? (
                <X className="w-3.5 h-3.5" />
              ) : (
                <MoreHorizontal className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Compact More Drawer (Liquid Glass Sheet) */}
        <AnimatePresence>
          {moreMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden max-w-7xl mx-auto mt-2 pointer-events-auto rounded-2xl sm:rounded-3xl bg-[#06170E]/90 backdrop-blur-2xl backdrop-saturate-150 border border-[#22C55E]/30 p-3.5 sm:p-5 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.25),0_0_25px_rgba(34,197,94,0.15)] ring-1 ring-white/10"
            >
              <div className="flex flex-col gap-1.5">
                {/* On mobile (< sm): secondary links only */}
                <div className="flex flex-col gap-1 sm:hidden">
                  <div className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#A3C2AF]/60">
                    Menu Lainnya
                  </div>
                  {secondaryLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.id);
                          setMoreMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                          isActive
                            ? "bg-[#22C55E]/20 border border-[#22C55E]/40 text-white font-semibold shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                            : "text-[#A3C2AF] hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* On tablet (sm to xl): show all nav links */}
                <div className="hidden sm:flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.id);
                          setMoreMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all ${
                          isActive
                            ? "bg-[#22C55E]/20 border border-[#22C55E]/40 text-white font-semibold shadow-[0_0_15px_rgba(34,197,94,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]"
                            : "text-[#A3C2AF] hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E] animate-pulse" />
                          )}
                          <span>{link.label}</span>
                        </div>
                        {isActive && (
                          <span className="text-[10px] uppercase font-mono tracking-wider text-[#22C55E] bg-[#22C55E]/15 px-2 py-0.5 rounded-full border border-[#22C55E]/30 shadow-sm">
                            Aktif
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Music Controller in Drawer */}
                <div className="mt-1 pt-2 border-t border-white/10">
                  <MusicToggleButton variant="row" />
                </div>

                {/* Tablet only direct download button in drawer */}
                <Link
                  href="/#unduh"
                  onClick={() => setMoreMenuOpen(false)}
                  className="hidden sm:flex mt-1 items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#F58220] text-[#081A10] shadow-[0_4px_20px_rgba(245,130,32,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download APK Flood2Food</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Fixed Bottom Navigation Dock — Mobile Only (< sm) */}
      <nav
        aria-label="Navigasi Bawah"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 pointer-events-auto bg-[#05140D]/92 backdrop-blur-2xl backdrop-saturate-150 border-t border-[#22C55E]/25 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-stretch h-14">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeSection === item.id ||
              (item.id === "top" && activeSection === "");
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id === "top" ? "" : item.id)}
                aria-label={item.label}
                className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all relative ${
                  isActive
                    ? "text-[#22C55E]"
                    : "text-[#A3C2AF]/70 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-active"
                    className="absolute inset-x-1 top-1.5 bottom-1.5 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="text-[9px] font-mono uppercase tracking-wider relative z-10 font-semibold">
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Direct CTA Download APK — Amber Gradient */}
          <Link
            href="/#unduh"
            aria-label="Download APK Flood2Food"
            className="flex-[1.2] flex flex-col items-center justify-center gap-0.5 bg-gradient-to-b from-[#F58220] to-[#E06D10] text-[#081A10] font-bold active:brightness-90 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] relative overflow-hidden"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[9px] font-mono uppercase tracking-wider font-extrabold">
              Download
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}


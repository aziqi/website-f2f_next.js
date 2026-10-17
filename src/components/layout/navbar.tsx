"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/#video", label: "Video Demo" },
  { href: "/#sistem", label: "Sistem IoT" },
  { href: "/#fitur", label: "7 Parameter" },
  { href: "/#tampilan", label: "Aplikasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/#tim", label: "Tim" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between pointer-events-auto rounded-full transition-all duration-300 px-3 sm:px-5 py-2 sm:py-2.5 border ${
          isScrolled
            ? "bg-[#081A10]/95 backdrop-blur-xl border-[#22C55E]/30 shadow-2xl shadow-black/80 ring-1 ring-white/10"
            : "bg-[#081A10]/80 backdrop-blur-md border-white/15 shadow-xl shadow-black/40"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/#top"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#F58220] rounded-full p-0.5"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-white/10 p-1 border border-white/20 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/assets/logos/flood2food.png"
              alt="Logo Flood2Food"
              fill
              className="object-contain"
              sizes="36px"
              priority
            />
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
            Flood<span className="text-[#F58220]">2</span>Food
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-[#F58220]/20 text-[#F58220] border border-[#F58220]/30">
            PKM-KC USU
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden xl:flex items-center gap-0.5 bg-black/30 px-3 py-1 rounded-full border border-white/10"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-[#A3C2AF] hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Magnetic strength={0.2}>
            <a
              href="https://drive.google.com/file/d/1jhWta2ZYSled7e52_J57GJ2Pi7ih6qtr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nested hidden sm:inline-flex bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] text-xs font-semibold py-1.5 px-3.5 shadow-lg shadow-[#F58220]/25"
            >
              <span>Download APK</span>
              <span className="btn-nested-icon w-6 h-6 bg-black/15">
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </a>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden max-w-6xl mx-auto mt-2 pointer-events-auto rounded-3xl bg-[#081A10]/98 border border-white/15 px-6 py-6 overflow-hidden shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#A3C2AF] hover:text-[#F58220] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1jhWta2ZYSled7e52_J57GJ2Pi7ih6qtr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#F58220] text-[#081A10] shadow-md shadow-[#F58220]/20"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download APK Flood2Food</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

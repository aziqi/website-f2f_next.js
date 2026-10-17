"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#video", label: "Video Demo" },
  { href: "#masalah", label: "Masalah" },
  { href: "#sistem", label: "Sistem IoT" },
  { href: "#fitur", label: "7 Parameter" },
  { href: "#simulator", label: "Simulator" },
  { href: "#tampilan", label: "Aplikasi" },
  { href: "#hasil", label: "Hasil Uji" },
  { href: "#tim", label: "Tim" },
  { href: "#faq", label: "FAQ" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#081A10]/90 backdrop-blur-md border-b border-[#A7C7B5]/15 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F58220] rounded-lg p-1"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/assets/logos/flood2food.png"
              alt="Logo Flood2Food"
              fill
              className="object-contain"
              sizes="36px"
              priority
            />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
            Flood<span className="text-[#F58220]">2</span>Food
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-[#F58220]/20 text-[#F58220] border border-[#F58220]/30">
            PKM-KC USU
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden xl:flex items-center gap-1 bg-[#0F2E1B]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-[#A3C2AF] hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-3">
          <Magnetic strength={0.2}>
            <a
              href="https://drive.google.com/file/d/1jhWta2ZYSled7e52_J57GJ2Pi7ih6qtr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] shadow-lg shadow-[#F58220]/25 hover:shadow-[#F58220]/40 transition-all duration-200"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download APK</span>
            </a>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="xl:hidden bg-[#081A10]/98 border-b border-white/10 px-6 py-6 overflow-hidden"
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

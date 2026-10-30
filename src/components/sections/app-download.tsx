"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import {
  Download,
  QrCode,
  Smartphone,
  Bluetooth,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Cpu,
  Github,
  BookOpen,
} from "lucide-react";

const APK_DOWNLOAD_URL =
  "https://github.com/aziqi/Flood2Food/releases/download/v1.0.0/Flood2Food-arm64-v8a-release.apk";
const GITHUB_RELEASE_URL =
  "https://github.com/aziqi/Flood2Food/releases/tag/v1.0.0";

const installSteps = [
  {
    step: "01",
    title: "Unduh File APK",
    desc: "Klik tombol unduh atau pindai QR Code melalui kamera smartphone Anda.",
  },
  {
    step: "02",
    title: "Izinkan Instalasi",
    desc: "Buka file unduhan dan aktifkan izin 'Instal dari sumber tidak dikenal' di Android.",
  },
  {
    step: "03",
    title: "Hubungkan via BLE",
    desc: "Buka aplikasi, aktifkan Bluetooth, dan hubungkan langsung ke Gateway LoRa.",
  },
];

export function AppDownload() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(APK_DOWNLOAD_URL);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = APK_DOWNLOAD_URL;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Gagal menyalin tautan:", err);
    }
  };

  return (
    <section id="unduh" className="relative py-10 sm:py-20 lg:py-28 overflow-hidden bg-[#081A10]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-3 sm:mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Aplikasi Mobile Android · PKM-KC USU 2026</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-xl sm:text-5xl tracking-tight text-white leading-tight">
              Unduh Aplikasi <span className="text-[#F58220]">Flood2Food</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#A3C2AF] leading-relaxed">
              Pantau 7 parameter kesuburan tanah sawah secara real-time, kendalikan telemetri mandiri,
              dan konsultasi cerdas bersama AI Tanya Bimo langsung dari smartphone Anda.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column (7 Cols): Specifications, Primary Download CTA, Installation Steps */}
          <Reveal delay={0.2} className="lg:col-span-7 flex flex-col">
            <div className="bezel-shell h-full flex flex-col">
              <div className="bezel-core p-4 sm:p-8 flex flex-col justify-between h-full space-y-5 sm:space-y-8">
                <div>
                  {/* Technical Spec Badges */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                      <Cpu className="w-3.5 h-3.5" />
                      v1.0.0 Release
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F58220]/15 text-[#F58220] border border-[#F58220]/30">
                      <Smartphone className="w-3.5 h-3.5" />
                      Android 8.0+ (ARM64)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                      <Bluetooth className="w-3.5 h-3.5" />
                      BLE (Bluetooth Low Energy)
                    </span>
                  </div>

                  {/* Highlight Heading & Pitch */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    Instalasi Mandiri Cepat &amp; Kompatibel Luas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed mb-6">
                    Aplikasi dirancang ringan untuk mendukung gawai penyuluh dan petani di lapangan.
                    Menyimpan cache offline otomatis, hemat baterai, dan langsung terhubung dengan
                    sensor node tanpa memerlukan kuota internet saat sinkronisasi lokal.
                  </p>

                  {/* Action Buttons Hub */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <a
                      href={APK_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-nested bg-[#22C55E] hover:bg-[#16a34a] text-[#081A10] font-bold text-xs sm:text-sm py-2.5 px-5 shadow-xl shadow-[#22C55E]/20 group transition-all"
                    >
                      <span>Unduh File APK Sekarang</span>
                      <span className="btn-nested-icon w-8 h-8 rounded-full bg-black/15 flex items-center justify-center">
                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      </span>
                    </a>

                    <a
                      href="/docs/Manual-Book-Flood2Food.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-[#22C55E]/15 hover:border-[#22C55E]/40 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                      title="Baca Buku Panduan Lengkap Flood2Food (PDF)"
                    >
                      <BookOpen className="w-4 h-4 text-[#22C55E]" />
                      <span>Manual Book (PDF)</span>
                    </a>

                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                      aria-label="Salin tautan unduhan APK Flood2Food"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#22C55E]" />
                          <span className="text-[#22C55E]">Tautan Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#A3C2AF]" />
                          <span>Salin Tautan Unduhan</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://github.com/aziqi/Flood2Food"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                      title="Lihat Repositori Resmi di GitHub"
                    >
                      <Github className="w-4 h-4 text-[#A3C2AF]" />
                      <span>Source Code GitHub</span>
                    </a>
                  </div>
                </div>

                {/* 3 Steps Installation Guide */}
                <div className="pt-6 border-t border-[#A7C7B5]/10">
                  <div className="text-xs font-mono text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
                    <span>3 Langkah Mudah Pemasangan</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {installSteps.map((step) => (
                      <div
                        key={step.step}
                        className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#22C55E]/30 transition-colors"
                      >
                        <div className="font-mono text-[11px] font-bold text-[#F58220] mb-1">
                          Langkah {step.step}
                        </div>
                        <h4 className="font-display font-semibold text-xs sm:text-sm text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-[#A3C2AF] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust and Safety Badges */}
                <div className="pt-4 border-t border-[#A7C7B5]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#A3C2AF]">
                  <div className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                    <span>Google Play Protect Verified</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Bebas Virus &amp; Malware</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#F58220]" />
                    <span>100% Gratis &amp; Tanpa Iklan</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column (5 Cols): Interactive QR Code Scanner Card */}
          <Reveal delay={0.3} className="lg:col-span-5 flex flex-col">
            <div className="bezel-shell h-full flex flex-col">
              <div className="bezel-core p-4 sm:p-8 flex flex-col items-center justify-between text-center relative overflow-hidden h-full space-y-5 sm:space-y-6">
                {/* Header QR Card */}
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#22C55E]/10">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                    Pindai Cepat Lewat Kamera HP
                  </h3>
                  <p className="text-xs text-[#A3C2AF] max-w-xs mx-auto leading-relaxed">
                    Arahkan kamera smartphone Anda ke QR Code di bawah untuk membuka tautan unduhan langsung di browser ponsel.
                  </p>
                </div>

                {/* QR Code Container with Glowing Scanner Animation */}
                <div className="relative p-5 sm:p-6 bg-white rounded-3xl shadow-2xl shadow-black/80 ring-4 ring-black/40 group overflow-hidden">
                  {/* Subtle Radar Scanner Line */}
                  <motion.div
                    className="absolute left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent pointer-events-none shadow-[0_0_12px_#22C55E] z-10"
                    animate={{ top: ["10%", "90%", "10%"] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#22C55E] pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#22C55E] pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#22C55E] pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#22C55E] pointer-events-none" />

                  {/* Actual QR Image */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <Image
                      src="/assets/qr-download.png"
                      alt="QR Code Unduh Flood2Food Mobile APK"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 192px, 224px"
                      priority
                    />
                  </div>
                </div>

                {/* Bottom Guide & Direct Link */}
                <div className="w-full space-y-3">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-[#A3C2AF] flex items-center justify-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#F58220] shrink-0" />
                    <span>Mendukung semua merk smartphone Android</span>
                  </div>

                  <a
                    href={GITHUB_RELEASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#22C55E] hover:text-[#4ade80] transition-colors"
                  >
                    <span>Buka Halaman GitHub Release Langsung</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

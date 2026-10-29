"use client";

import { Reveal } from "@/components/motion/reveal";
import {
  Award,
  BookOpen,
  Download,
  ExternalLink,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  Building2,
  Users2,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";

const COPYRIGHT_PDF_URL = "/docs/SuratCiptaan_EC002026204846.pdf";
const MANUAL_BOOK_PDF_URL = "/docs/Manual-Book-Flood2Food.pdf";

export function Documents() {
  return (
    <section id="dokumen" className="relative py-20 sm:py-28 overflow-hidden bg-[#06140D] border-b border-[#A7C7B5]/10">
      {/* Radial lighting background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[32rem] h-[32rem] bg-[#F58220]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Dokumentasi Resmi &amp; Legalitas Intelektual</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              Legalitas Hak Cipta &amp; <span className="text-[#F58220]">Manual Book</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-sm sm:text-base text-[#A3C2AF] leading-relaxed">
              Inovasi Flood2Food dilindungi secara hukum oleh Kementerian Hukum Republik Indonesia dan
              didukung buku panduan teknis operasional lengkap untuk petani, penyuluh, dan teknisi lapangan.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Bento Grid for Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Surat Pencatatan Hak Cipta Kemenkumham */}
          <Reveal delay={0.2} className="flex flex-col">
            <div className="bezel-shell h-full flex flex-col group">
              <div className="bezel-core p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F58220]/15 text-[#F58220] border border-[#F58220]/30">
                      <Award className="w-3.5 h-3.5" />
                      Kemenkumham RI
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                      <FileCheck2 className="w-3.5 h-3.5" />
                      No. 001556368
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-white/70 bg-white/5 border border-white/10">
                      Program Komputer
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    Surat Pencatatan Ciptaan — Flood2Food
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed mb-6">
                    Sertifikat resmi perlindungan kekayaan intelektual atas perangkat lunak dan sistem Flood2Food
                    sesuai Pasal 72 Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta.
                  </p>

                  {/* Detailed Specification List */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white/60 text-[11px] font-mono">Pemegang Hak Cipta</div>
                        <div className="text-white font-medium">
                          Direktorat Penulisan, Publikasi dan Penerbitan Ilmiah — Universitas Sumatera Utara
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <Users2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white/60 text-[11px] font-mono">Tim Pencipta Terdaftar</div>
                        <div className="text-white font-medium">
                          Zikri Noer, Muhammad Abduh Akram Agus, Syakirah Fathanah, M. Ghozi Muzakki, Aziqi Arifian Dova, Isrok Tenggar Martua, Athallah Muhammad Maajid
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-[11px]">
                      <div>
                        <span className="text-white/60 block">Nomor Permohonan:</span>
                        <span className="text-[#22C55E] font-semibold">EC002026204846</span>
                      </div>
                      <div>
                        <span className="text-white/60 block">Masa Berlaku:</span>
                        <span className="text-white font-semibold">50 Tahun Pelindungan</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust & Actions */}
                <div className="pt-4 border-t border-[#A7C7B5]/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#22C55E]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Disahkan oleh Balai Besar Sertifikasi Elektronik (BSrE)</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={COPYRIGHT_PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-nested inline-flex bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] font-bold text-xs sm:text-sm py-2.5 px-4 shadow-lg shadow-[#F58220]/20 group transition-all"
                    >
                      <span>Buka Dokumen Sertifikat</span>
                      <span className="btn-nested-icon w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
                        <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      </span>
                    </a>

                    <a
                      href={COPYRIGHT_PDF_URL}
                      download="SuratCiptaan_Flood2Food_EC002026204846.pdf"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                    >
                      <Download className="w-4 h-4 text-[#A3C2AF]" />
                      <span>Unduh Berkas PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Manual Book & Petunjuk Teknis */}
          <Reveal delay={0.3} className="flex flex-col">
            <div className="bezel-shell h-full flex flex-col group">
              <div className="bezel-core p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                      <BookOpen className="w-3.5 h-3.5" />
                      Manual Book Resmi
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                      <Layers className="w-3.5 h-3.5" />
                      F2F-MAN-001 · Rev 1.0
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-white/70 bg-white/5 border border-white/10">
                      20 Halaman
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    Manual Book Alat &amp; Aplikasi Flood2Food
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed mb-6">
                    Buku panduan resmi pengoperasian, perakitan mekanik, arsitektur LoRa-ESP32,
                    protokol keselamatan, serta data validasi lapangan dan kalibrasi laboratorium BBPPMPU Sumut.
                  </p>

                  {/* Document Chapter Highlights */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white/60 text-[11px] font-mono">Bagian A — Panduan Pengguna</div>
                        <div className="text-white font-medium">
                          Panduan cepat 3 langkah petani, pengoperasian aplikasi Android, gamifikasi misi harian, dan tabel troubleshooting.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <Layers className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white/60 text-[11px] font-mono">Bagian B — Panduan Teknis &amp; Riset</div>
                        <div className="text-white font-medium">
                          Skema firmware ESP32, telemetri LoRa 915 MHz, hasil uji lapangan 14 hari di Deli Serdang, dan uji tanah BBPPMPU.
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#F58220]" />
                        <span className="text-white/80">Edisi Oktober 2026</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[#22C55E] font-semibold">Format Dokumen: PDF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust & Actions */}
                <div className="pt-4 border-t border-[#A7C7B5]/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#22C55E]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Disusun oleh Tim PKM-KC Flood2Food Universitas Sumatera Utara</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={MANUAL_BOOK_PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-nested inline-flex bg-[#22C55E] hover:bg-[#16a34a] text-[#081A10] font-bold text-xs sm:text-sm py-2.5 px-4 shadow-lg shadow-[#22C55E]/20 group transition-all"
                    >
                      <span>Baca Manual Book (PDF)</span>
                      <span className="btn-nested-icon w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
                        <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      </span>
                    </a>

                    <a
                      href={MANUAL_BOOK_PDF_URL}
                      download="Manual-Book-Flood2Food.pdf"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                    >
                      <Download className="w-4 h-4 text-[#A3C2AF]" />
                      <span>Unduh Manual Book</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

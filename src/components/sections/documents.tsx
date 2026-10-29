"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  Eye,
  X,
  Maximize2,
} from "lucide-react";

interface DocumentData {
  id: "hak-cipta" | "manual-book";
  title: string;
  badge: string;
  badgeCode: string;
  pdfUrl: string;
  previewImg: string;
  totalPages: string;
  downloadFilename: string;
}

const documents: DocumentData[] = [
  {
    id: "hak-cipta",
    title: "Surat Pencatatan Ciptaan — Flood2Food",
    badge: "Kemenkumham RI",
    badgeCode: "No. 001556368",
    pdfUrl: "/docs/SuratCiptaan_EC002026204846.pdf",
    previewImg: "/docs/preview-hak-cipta.png",
    totalPages: "2 Halaman Sertifikat",
    downloadFilename: "SuratCiptaan_Flood2Food_EC002026204846.pdf",
  },
  {
    id: "manual-book",
    title: "Manual Book Alat & Aplikasi Flood2Food",
    badge: "Buku Panduan Resmi",
    badgeCode: "F2F-MAN-001 · Rev 1.0",
    pdfUrl: "/docs/Manual-Book-Flood2Food.pdf",
    previewImg: "/docs/preview-manual-book.png",
    totalPages: "20 Halaman Lengkap",
    downloadFilename: "Manual-Book-Flood2Food.pdf",
  },
];

export function Documents() {
  const [activeDoc, setActiveDoc] = useState<DocumentData | null>(null);

  const handleClose = useCallback(() => {
    setActiveDoc(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (activeDoc) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDoc, handleClose]);

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

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    Surat Pencatatan Ciptaan — Flood2Food
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed mb-6">
                    Sertifikat resmi perlindungan kekayaan intelektual atas perangkat lunak dan sistem Flood2Food
                    sesuai Pasal 72 Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta.
                  </p>

                  {/* Document Visual Preview & Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 items-center">
                    {/* Visual Thumbnail Stage */}
                    <div
                      onClick={() => setActiveDoc(documents[0])}
                      className="sm:col-span-5 relative aspect-[1/1.41] rounded-xl overflow-hidden bg-black/60 border border-white/20 shadow-xl group/thumb cursor-pointer select-none"
                      title="Klik untuk membuka pratinjau isi dokumen PDF lengkap"
                    >
                      <Image
                        src="/docs/preview-hak-cipta.png"
                        alt="Pratinjau Sertifikat Hak Cipta Kemenkumham RI Flood2Food"
                        fill
                        className="object-cover object-top group-hover/thumb:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 text-center">
                        <span className="w-9 h-9 rounded-full bg-[#F58220] text-[#081A10] flex items-center justify-center shadow-lg">
                          <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                        </span>
                        <span className="text-[11px] font-semibold text-white tracking-wide">Pratinjau PDF</span>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90 text-center flex items-center justify-center gap-1.5">
                        <Eye className="w-3 h-3 text-[#F58220]" />
                        <span>Pratinjau Dokumen Asli</span>
                      </div>
                    </div>

                    {/* Metadata Specs */}
                    <div className="sm:col-span-7 space-y-3 text-xs">
                      <div>
                        <div className="text-white/60 text-[11px] font-mono">Pemegang Hak Cipta</div>
                        <div className="text-white font-medium text-xs leading-snug">
                          Direktorat Penulisan, Publikasi dan Penerbitan Ilmiah — Universitas Sumatera Utara
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <div className="text-white/60 text-[11px] font-mono">Tim Pencipta Terdaftar</div>
                        <div className="text-white font-medium text-[11px] leading-snug">
                          Zikri Noer, Muhammad Abduh Akram Agus, Syakirah Fathanah, M. Ghozi Muzakki, Aziqi Arifian Dova, Isrok Tenggar Martua, Athallah Muhammad Maajid
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-[11px]">
                        <div>
                          <span className="text-white/60 block text-[10px]">Permohonan:</span>
                          <span className="text-[#22C55E] font-semibold">EC002026204846</span>
                        </div>
                        <div>
                          <span className="text-white/60 block text-[10px]">Pelindungan:</span>
                          <span className="text-white font-semibold">50 Tahun</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust & Actions */}
                <div className="pt-4 border-t border-[#A7C7B5]/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#22C55E]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Disahkan secara elektronik oleh Balai Besar Sertifikasi Elektronik (BSrE)</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => setActiveDoc(documents[0])}
                      className="btn-nested inline-flex bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] font-bold text-xs sm:text-sm py-2.5 px-4 shadow-lg shadow-[#F58220]/20 group transition-all cursor-pointer"
                    >
                      <span>Lihat Pratinjau PDF</span>
                      <span className="btn-nested-icon w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
                        <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      </span>
                    </button>

                    <a
                      href={documents[0].pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all shadow-md"
                      title="Buka PDF di tab browser baru"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#A3C2AF]" />
                      <span>Tab Baru</span>
                    </a>

                    <a
                      href={documents[0].pdfUrl}
                      download={documents[0].downloadFilename}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <Download className="w-3.5 h-3.5 text-[#A3C2AF]" />
                      <span>Unduh</span>
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

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    Manual Book Alat &amp; Aplikasi Flood2Food
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed mb-6">
                    Buku panduan resmi pengoperasian, perakitan mekanik, arsitektur LoRa-ESP32,
                    protokol keselamatan, serta data validasi lapangan dan kalibrasi laboratorium BBPPMPU Sumut.
                  </p>

                  {/* Document Visual Preview & Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 items-center">
                    {/* Visual Thumbnail Stage */}
                    <div
                      onClick={() => setActiveDoc(documents[1])}
                      className="sm:col-span-5 relative aspect-[1/1.41] rounded-xl overflow-hidden bg-black/60 border border-white/20 shadow-xl group/thumb cursor-pointer select-none"
                      title="Klik untuk membuka pratinjau isi Manual Book PDF lengkap"
                    >
                      <Image
                        src="/docs/preview-manual-book.png"
                        alt="Pratinjau Cover Manual Book Alat dan Aplikasi Flood2Food"
                        fill
                        className="object-cover object-top group-hover/thumb:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 text-center">
                        <span className="w-9 h-9 rounded-full bg-[#22C55E] text-[#081A10] flex items-center justify-center shadow-lg">
                          <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                        </span>
                        <span className="text-[11px] font-semibold text-white tracking-wide">Baca Manual Book</span>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90 text-center flex items-center justify-center gap-1.5">
                        <Eye className="w-3 h-3 text-[#22C55E]" />
                        <span>Pratinjau 20 Halaman</span>
                      </div>
                    </div>

                    {/* Content Highlights */}
                    <div className="sm:col-span-7 space-y-3 text-xs">
                      <div>
                        <div className="text-white/60 text-[11px] font-mono">Bagian A — Panduan Pengguna</div>
                        <div className="text-white font-medium text-xs leading-snug">
                          Panduan cepat 3 langkah petani, pengoperasian aplikasi Android, gamifikasi misi harian, dan tabel troubleshooting.
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <div className="text-white/60 text-[11px] font-mono">Bagian B — Panduan Teknis &amp; Riset</div>
                        <div className="text-white font-medium text-[11px] leading-snug">
                          Skema firmware ESP32, telemetri LoRa 915 MHz, hasil uji lapangan 14 hari di Deli Serdang, dan uji tanah BBPPMPU.
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-[11px]">
                        <div>
                          <span className="text-white/60 block text-[10px]">Penyusun:</span>
                          <span className="text-white font-semibold">Tim PKM-KC USU</span>
                        </div>
                        <div>
                          <span className="text-white/60 block text-[10px]">Format Berkas:</span>
                          <span className="text-[#22C55E] font-semibold">PDF Resmi</span>
                        </div>
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

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => setActiveDoc(documents[1])}
                      className="btn-nested inline-flex bg-[#22C55E] hover:bg-[#16a34a] text-[#081A10] font-bold text-xs sm:text-sm py-2.5 px-4 shadow-lg shadow-[#22C55E]/20 group transition-all cursor-pointer"
                    >
                      <span>Baca Manual Book (PDF)</span>
                      <span className="btn-nested-icon w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
                        <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      </span>
                    </button>

                    <a
                      href={documents[1].pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all shadow-md"
                      title="Buka PDF di tab browser baru"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#A3C2AF]" />
                      <span>Tab Baru</span>
                    </a>

                    <a
                      href={documents[1].pdfUrl}
                      download={documents[1].downloadFilename}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <Download className="w-3.5 h-3.5 text-[#A3C2AF]" />
                      <span>Unduh</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Interactive Lightbox / Modal PDF Viewer */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl bg-[#081A10] border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/50 border-b border-white/15">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="w-8 h-8 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </span>
                  <div className="truncate">
                    <h3 className="text-sm font-semibold text-white truncate">{activeDoc.title}</h3>
                    <div className="text-[11px] font-mono text-[#A3C2AF] flex items-center gap-2">
                      <span>{activeDoc.badgeCode}</span>
                      <span>•</span>
                      <span>{activeDoc.totalPages}</span>
                    </div>
                  </div>
                </div>

                {/* Modal Header Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeDoc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Tab Penuh</span>
                  </a>

                  <a
                    href={activeDoc.pdfUrl}
                    download={activeDoc.downloadFilename}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-[#081A10] text-xs font-bold transition-all shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Unduh PDF</span>
                  </a>

                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                    aria-label="Tutup pratinjau dokumen"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Embedded PDF Stage */}
              <div className="relative flex-1 w-full bg-[#0a1a12] overflow-hidden">
                <iframe
                  src={`${activeDoc.pdfUrl}#toolbar=1&navpanes=1&view=FitH`}
                  title={activeDoc.title}
                  className="w-full h-full border-0 bg-white"
                />
              </div>

              {/* Modal Mobile Helper Bar */}
              <div className="sm:hidden px-4 py-2 bg-black/60 border-t border-white/10 text-center text-[11px] text-[#A3C2AF] flex items-center justify-between">
                <span>Dokumen resmi terverifikasi</span>
                <a
                  href={activeDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22C55E] font-semibold underline underline-offset-2"
                >
                  Buka Viewer Penuh
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
} from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";

export default function GaleriPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Active item in modal
  const activeItem: GalleryItem | null =
    activeImageIndex !== null ? galleryItems[activeImageIndex] ?? null : null;

  // Keyboard navigation for Lightbox
  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => ((prev ?? 0) + 1) % galleryItems.length);
  }, [activeImageIndex]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      (prev ?? 0) === 0 ? galleryItems.length - 1 : (prev ?? 0) - 1
    );
  }, [activeImageIndex]);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, handleNext, handlePrev, handleClose]);

  return (
    <div className="min-h-screen bg-[#081A10] text-[#F4F8F5] selection:bg-[#F58220] selection:text-[#081A10] flex flex-col justify-between">
      {/* Top Floating Glass Island Bar */}
      <header className="sticky top-4 z-40 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-[#081A10]/85 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A3C2AF] hover:text-white transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E]/15 transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </span>
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-md overflow-hidden bg-white/10 p-0.5 border border-white/20">
                <Image
                  src="/assets/logos/flood2food.png"
                  alt="Logo Flood2Food"
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </div>
              <span className="font-display font-bold text-sm text-white hidden sm:inline">
                Flood<span className="text-[#F58220]">2</span>Food
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 w-full">
        {/* Title & Badge (Preserved as requested) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi Riset &amp; Pengujian Lapangan</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight">
            Galeri Riset <span className="text-[#F58220]">Flood2Food</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#A3C2AF] leading-relaxed">
            Dokumentasi komprehensif mulai dari perakitan hardware transmisi LoRa, kalibrasi sensor di laboratorium,
            hingga validasi telemetri di petak sawah pascabanjir Deli Serdang.
          </p>
        </div>

        {/* Clean Density Grid (Pure images without text) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              onClick={() => setActiveImageIndex(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#22C55E]/60 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-[#22C55E]/15 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={`Dokumentasi Flood2Food ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={index < 8 ? "eager" : "lazy"}
              />

              {/* Minimal Clean Hover Overlay without any text */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-[#22C55E]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Interactive Full-Screen Lightbox Modal (Pure Image Focus) */}
      <AnimatePresence>
        {activeItem && activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none"
            onClick={handleClose}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/10 text-[#22C55E] border border-white/15">
                {activeImageIndex + 1} / {galleryItems.length}
              </span>

              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Tutup foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display Stage */}
            <div
              className="relative flex-1 flex items-center justify-center my-2 overflow-hidden w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#22C55E] hover:text-[#081A10] border border-white/20 flex items-center justify-center text-white transition-all shadow-xl cursor-pointer"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Active Image */}
              <motion.div
                key={activeItem.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={activeItem.src}
                    alt={`Dokumentasi Flood2Food ${activeImageIndex + 1}`}
                    width={activeItem.width || 1600}
                    height={activeItem.height || 1200}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                    priority
                  />
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#22C55E] hover:text-[#081A10] border border-white/20 flex items-center justify-center text-white transition-all shadow-xl cursor-pointer"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Empty spacer for bottom balance */}
            <div className="h-6" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#06140D] py-8 text-center text-xs font-mono text-[#A3C2AF]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 Tim Peneliti Flood2Food USU · Program Kreativitas Mahasiswa (PKM-KC)</div>
          <div className="text-[11px] text-white/30">This website made by AI</div>
        </div>
      </footer>
    </div>
  );
}

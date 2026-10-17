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
  MapPin,
  Camera,
  Layers,
  Sparkles,
  Download,
} from "lucide-react";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("Semua");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems =
    selectedCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Active item in modal
  const activeItem: GalleryItem | null =
    activeImageIndex !== null ? filteredItems[activeImageIndex] ?? null : null;

  // Keyboard navigation for Lightbox
  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
  }, [activeImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      (prev ?? 0) === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1
    );
  }, [activeImageIndex, filteredItems.length]);

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
        {/* Title & Badge */}
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

        {/* Category Filter Pills (Compact Segmented Control) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {galleryCategories.map((cat) => {
            const count =
              cat === "Semua"
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveImageIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#22C55E] text-[#081A10] font-bold shadow-lg shadow-[#22C55E]/20 scale-105"
                    : "bg-[#0F2E1B]/70 text-[#A3C2AF] hover:text-white border border-white/10 hover:border-[#22C55E]/30"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-[#081A10]/20 text-[#081A10]" : "bg-white/10 text-[#A3C2AF]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact Density Grid (Anti-Scroll Fatigue: 2-Col Mobile, 3-Col Tablet, 4-Col Desktop) */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveImageIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#22C55E]/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-[#22C55E]/10 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Controlled Aspect Ratio */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/60">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 8 ? "eager" : "lazy"}
                  />

                  {/* Hover Overlay with Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-wider block font-semibold mb-0.5">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Compact Permanent Card Footer */}
                <div className="p-3 bg-[#0F2E1B]/60 border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="truncate">
                    <span className="text-xs font-semibold text-white truncate block">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-[#A3C2AF] font-mono flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="w-2.5 h-2.5 text-[#F58220] shrink-0" />
                      <span className="truncate">{item.location || item.category}</span>
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#A3C2AF]/60 shrink-0">
                    #{String(item.id).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Interactive Full-Screen Lightbox Modal */}
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
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-[#22C55E] border border-white/15">
                  Foto {activeImageIndex + 1} dari {filteredItems.length}
                </span>
                <span className="text-xs font-mono text-[#A3C2AF] hidden sm:inline">
                  {activeItem.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Tutup foto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display Stage */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
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
                className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    width={activeItem.width}
                    height={activeItem.height}
                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
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

            {/* Modal Footer Caption */}
            <div
              className="max-w-3xl mx-auto w-full bg-[#081A10]/80 border border-white/10 rounded-2xl p-4 sm:p-5 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-1">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed max-w-2xl mx-auto">
                {activeItem.description}
              </p>
              {activeItem.location && (
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-[#F58220]">
                  <MapPin className="w-3 h-3" />
                  <span>{activeItem.location}</span>
                </div>
              )}
            </div>
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

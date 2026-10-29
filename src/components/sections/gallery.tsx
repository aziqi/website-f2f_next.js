"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Instagram, ExternalLink } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";

export function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeImageIndex !== null ? galleryItems[activeImageIndex] ?? null : null;

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
    <section id="galeri" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#22C55E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi Riset &amp; Pengujian Lapangan</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Dokumentasi Riset Lapangan &amp; Perakitan Sensor
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Telusuri 22 dokumentasi komprehensif pengujian sensor sawah pascabanjir di Pagar Merbau II Deli Serdang,
            kalibrasi telemetri LoRa jarak jauh, hingga perakitan sensor node mandiri.
          </p>
        </Reveal>

        {/* Dynamic CSS Multi-Column Masonry preserving natural aspect ratios */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 lg:gap-5 space-y-3 sm:space-y-4 lg:space-y-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
              onClick={() => setActiveImageIndex(index)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#22C55E]/60 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-[#22C55E]/15 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={index < 8 ? "eager" : "lazy"}
              />

              {/* Minimal Clean Hover Overlay */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#22C55E] uppercase tracking-wider">{item.category}</div>
                  <div className="text-white text-xs font-semibold line-clamp-1">{item.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Follow Callout Strip */}
        <Reveal delay={0.2} className="mt-10 sm:mt-14 flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-xl w-full justify-between">
            <div className="flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-lg shadow-[#DD2A7B]/20 shrink-0">
                <Instagram className="w-5 h-5" />
              </span>
              <div className="text-left">
                <div className="text-white text-xs sm:text-sm font-semibold">Ikuti Dokumentasi Riset di Instagram</div>
                <div className="text-[#A3C2AF] text-[11px] font-mono">Story lapangan, pengujian alat, & info terkini</div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/flood2food"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#E1306C] hover:bg-[#c1275d] text-white text-xs font-semibold shadow-md transition-all shrink-0 w-full sm:w-auto"
            >
              <span>@flood2food</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>

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
                className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    width={activeItem.width || 1600}
                    height={activeItem.height || 1200}
                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
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

            {/* Modal Informative Caption */}
            <div
              className="w-full max-w-3xl mx-auto px-5 py-3 bg-black/70 rounded-2xl border border-white/10 backdrop-blur-md text-center text-xs text-[#A3C2AF] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white font-semibold text-sm">{activeItem.title}</div>
              <div className="text-[11px] text-[#22C55E] font-mono mt-0.5">
                {activeItem.location ? `${activeItem.location} · ` : ""}{activeItem.category}
              </div>
              <p className="mt-1 text-white/80 text-xs leading-relaxed">{activeItem.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
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

        {/* Pure Image Density Grid without text labels */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
              onClick={() => setActiveImageIndex(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#22C55E]/60 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-[#22C55E]/15 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={`Dokumentasi Riset Flood2Food ${index + 1}`}
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
                className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={activeItem.src}
                    alt={`Dokumentasi Riset Flood2Food ${activeImageIndex + 1}`}
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

            {/* Bottom Balance Spacer */}
            <div className="h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

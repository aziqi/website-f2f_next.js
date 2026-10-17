"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const sponsors = [
  {
    name: "Kemendiktisaintek",
    title: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI",
    src: "/assets/logos/kemendiktisaintek.png",
    heightClass: "h-11 sm:h-14 lg:h-16",
    width: 2048,
    height: 2048,
  },
  {
    name: "Diktisaintek Berdampak",
    title: "Diktisaintek Berdampak",
    src: "/assets/logos/diktisaintek-berdampak.png",
    heightClass: "h-8 sm:h-10 lg:h-12",
    width: 1630,
    height: 481,
  },
  {
    name: "Belmawa",
    title: "Direktorat Pembelajaran dan Kemahasiswaan — Belmawa",
    src: "/assets/logos/belmawa.png",
    heightClass: "h-9 sm:h-11 lg:h-13",
    width: 1212,
    height: 643,
  },
  {
    name: "SIMBELMAWA",
    title: "Sistem Informasi Pembelajaran dan Kemahasiswaan",
    src: "/assets/logos/simbelmawa.png",
    heightClass: "h-9 sm:h-11 lg:h-13",
    width: 1500,
    height: 647,
  },
  {
    name: "USU",
    title: "Universitas Sumatera Utara (USU)",
    src: "/assets/logos/usu.png",
    heightClass: "h-11 sm:h-14 lg:h-16",
    width: 1200,
    height: 1200,
  },
  {
    name: "PIMNAS 39",
    title: "PIMNAS 39 — Pekan Ilmiah Mahasiswa Nasional 2026 Universitas Diponegoro",
    src: "/assets/logos/pimnas-39.png",
    heightClass: "h-9 sm:h-11 lg:h-13",
    width: 1024,
    height: 334,
  },
  {
    name: "PKM Center USU",
    title: "PKM Center USU — Innovation, Collaboration, Transformation",
    src: "/assets/logos/pkm-center-usu.png",
    heightClass: "h-9 sm:h-11 lg:h-13",
    width: 1329,
    height: 351,
  },
  {
    name: "Flood2Food",
    title: "Flood2Food — Sistem Cerdas Pemulihan Lahan Sawah",
    src: "/assets/logos/flood2food.png",
    heightClass: "h-11 sm:h-14 lg:h-16",
    width: 1359,
    height: 1157,
  },
];

export function SponsorsBar() {
  return (
    <section id="mitra" className="relative py-12 sm:py-16 border-b border-[#A7C7B5]/15 bg-gradient-to-b from-[#081A10] via-[#0A2215] to-[#081A10]" aria-label="Mitra dan Sponsor Resmi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          {/* Header Label with High Contrast */}
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-14 h-0.5 bg-[#22C55E]/50 rounded-full" />
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#22C55E]">
              Didukung &amp; Dibiayai Secara Resmi Oleh
            </span>
            <span className="w-10 sm:w-14 h-0.5 bg-[#22C55E]/50 rounded-full" />
          </div>

          {/* White Card Container: 4-Column Balanced Grid */}
          <div className="w-full max-w-5xl bg-white rounded-3xl py-8 px-6 sm:px-12 shadow-2xl shadow-black/50 border border-white/50 ring-1 ring-black/5 hover:shadow-[#22C55E]/15 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
              {sponsors.map((item) => (
                <div
                  key={item.name}
                  className="relative group flex items-center justify-center w-full h-14 sm:h-16 px-2 transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
                  title={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="max-h-11 sm:max-h-13 max-w-[90%] w-auto object-contain filter drop-shadow-sm select-none"
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Sub-label */}
          <p className="text-[11px] sm:text-xs text-[#A3C2AF] font-medium tracking-wide max-w-2xl">
            Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) 2026 · Kemendiktisaintek RI &amp; Universitas Sumatera Utara
          </p>
        </Reveal>
      </div>
    </section>
  );
}

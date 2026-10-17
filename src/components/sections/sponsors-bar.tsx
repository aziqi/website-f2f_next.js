"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const sponsors = [
  {
    name: "Kemendiktisaintek",
    title: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI",
    src: "/assets/logos/kemendiktisaintek.png",
    width: 44,
    height: 44,
  },
  {
    name: "Diktisaintek Berdampak",
    title: "Diktisaintek Berdampak",
    src: "/assets/logos/diktisaintek-berdampak.png",
    width: 135,
    height: 38,
  },
  {
    name: "Belmawa",
    title: "Direktorat Pembelajaran dan Kemahasiswaan — Belmawa",
    src: "/assets/logos/belmawa.png",
    width: 90,
    height: 44,
  },
  {
    name: "SIMBELMAWA",
    title: "Sistem Informasi Pembelajaran dan Kemahasiswaan",
    src: "/assets/logos/simbelmawa.png",
    width: 115,
    height: 44,
  },
  {
    name: "USU",
    title: "Universitas Sumatera Utara (USU)",
    src: "/assets/logos/usu.png",
    width: 44,
    height: 44,
  },
  {
    name: "PIMNAS",
    title: "PIMNAS — The Era of Ultimate Excellence",
    src: "/assets/logos/pimnas.png",
    width: 125,
    height: 44,
  },
  {
    name: "PKM Center USU",
    title: "PKM Center USU — Innovation, Collaboration, Transformation",
    src: "/assets/logos/pkm-center-usu.png",
    width: 98,
    height: 44,
  },
  {
    name: "Flood2Food",
    title: "Flood2Food — Sistem Cerdas Pemulihan Lahan Sawah",
    src: "/assets/logos/flood2food.png",
    width: 52,
    height: 44,
    isBrand: true,
  },
];

export function SponsorsBar() {
  return (
    <section id="mitra" className="relative py-8 sm:py-10 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] to-[#0A2014]" aria-label="Mitra dan Sponsor Resmi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#A7C7B5]/30"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A3C2AF]">
              Didukung &amp; Dibiayai Secara Resmi Oleh
            </span>
            <span className="w-8 h-px bg-[#A7C7B5]/30"></span>
          </div>

          {/* White Card Container for Full Color Contrast */}
          <div className="w-full max-w-5xl bg-white rounded-2xl py-3 px-6 sm:px-10 shadow-2xl shadow-black/40 border border-white/20 hover:shadow-[#22C55E]/10 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-5 sm:gap-7">
              {sponsors.map((item) => (
                <div
                  key={item.name}
                  className="relative group transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
                  title={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="h-8 sm:h-10 w-auto object-contain filter drop-shadow-sm select-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

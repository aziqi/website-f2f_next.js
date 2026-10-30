"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const sponsors = [
  {
    name: "Kemendiktisaintek",
    title: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI",
    src: "/assets/logos/kemendiktisaintek.png",
    width: 2048,
    height: 2048,
  },
  {
    name: "Diktisaintek Berdampak",
    title: "Diktisaintek Berdampak",
    src: "/assets/logos/diktisaintek-berdampak.png",
    width: 1630,
    height: 481,
  },
  {
    name: "Belmawa",
    title: "Direktorat Pembelajaran dan Kemahasiswaan Belmawa",
    src: "/assets/logos/belmawa.png",
    width: 1212,
    height: 643,
  },
  {
    name: "SIMBELMAWA",
    title: "Sistem Informasi Pembelajaran dan Kemahasiswaan",
    src: "/assets/logos/simbelmawa.png",
    width: 1500,
    height: 647,
  },
  {
    name: "PKM",
    title: "Program Kreativitas Mahasiswa (PKM) Kemendiktisaintek RI",
    src: "/assets/logos/pkm.png",
    width: 683,
    height: 385,
  },
  {
    name: "PIMNAS",
    title: "PIMNAS — The Era of Ultimate Excellence",
    src: "/assets/logos/pimnas.png",
    width: 825,
    height: 309,
  },
  {
    name: "USU",
    title: "Universitas Sumatera Utara (USU)",
    src: "/assets/logos/usu.png",
    width: 1200,
    height: 1200,
  },
  {
    name: "PIMNAS 39",
    title: "PIMNAS 39 — Pekan Ilmiah Mahasiswa Nasional 2026",
    src: "/assets/logos/pimnas-39.png",
    width: 1024,
    height: 334,
  },
  {
    name: "PKM Center USU",
    title: "PKM Center USU — Innovation, Collaboration, Transformation",
    src: "/assets/logos/pkm-center-usu.png",
    width: 1329,
    height: 351,
  },
  {
    name: "Flood2Food",
    title: "Flood2Food — Sistem Cerdas Pemulihan Lahan Sawah",
    src: "/assets/logos/flood2food.png",
    width: 1359,
    height: 1157,
  },
];

const marqueeList = [...sponsors, ...sponsors];

export function SponsorsBar() {
  return (
    <section id="mitra" className="relative py-6 sm:py-12 lg:py-16 border-b border-[#A7C7B5]/15 bg-gradient-to-b from-[#081A10] via-[#0A2215] to-[#081A10]" aria-label="Mitra dan Sponsor Resmi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-3 sm:gap-5 text-center">
          {/* Header Label */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-14 h-0.5 bg-[#22C55E]/50 rounded-full" />
            <span className="font-mono text-[10px] sm:text-sm font-semibold uppercase tracking-widest text-[#22C55E]">
              Didukung & Dibiayai Secara Resmi Oleh
            </span>
            <span className="w-6 sm:w-14 h-0.5 bg-[#22C55E]/50 rounded-full" />
          </div>

          {/* Marquee White Card Container */}
          <div className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl py-3.5 px-3 sm:py-7 sm:px-8 shadow-2xl shadow-black/50 border border-white/50 ring-1 ring-black/5 overflow-hidden relative group">
            {/* Edge Fade Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            <style>{`
              @keyframes f2f-marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-f2f-marquee {
                display: flex;
                width: max-content;
                animation: f2f-marquee 30s linear infinite;
              }
              .animate-f2f-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

            {/* Scrolling Track */}
            <div className="animate-f2f-marquee items-center gap-6 sm:gap-12 lg:gap-16">
              {marqueeList.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 h-9 sm:h-14 lg:h-16 px-1.5 sm:px-2 transition-transform duration-200 hover:scale-105"
                  title={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="max-h-6 sm:max-h-10 lg:max-h-12 w-auto object-contain filter drop-shadow-sm select-none"
                    style={{ width: "auto", height: "auto" }}
                    priority={idx < 8}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Sub-label */}
          <p className="text-[11px] sm:text-xs text-[#A3C2AF] font-medium tracking-wide max-w-2xl">
            Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) 2026 · Kemendiktisaintek RI & Universitas Sumatera Utara
          </p>
        </Reveal>
      </div>
    </section>
  );
}


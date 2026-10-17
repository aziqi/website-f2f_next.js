"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const sponsors = [
  { name: "Kemendiktisaintek", src: "/assets/logos/kemendiktisaintek.png", width: 36, height: 36 },
  { name: "Diktisaintek Berdampak", src: "/assets/logos/diktisaintek-berdampak.png", width: 105, height: 30 },
  { name: "Belmawa", src: "/assets/logos/belmawa.png", width: 70, height: 36 },
  { name: "SIMBELMAWA", src: "/assets/logos/simbelmawa.png", width: 85, height: 36 },
  { name: "USU", src: "/assets/logos/usu.png", width: 36, height: 36 },
  { name: "PIMNAS", src: "/assets/logos/pimnas.png", width: 95, height: 36 },
  { name: "PKM Center USU", src: "/assets/logos/pkm-center-usu.png", width: 75, height: 36 },
  { name: "Flood2Food", src: "/assets/logos/flood2food.png", width: 42, height: 36 },
];

export function Footer() {
  return (
    <footer className="relative bg-[#06140D] border-t border-[#A7C7B5]/15 pt-16 pb-12 text-[#A3C2AF] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#A7C7B5]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#top" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 p-0.5 border border-white/20">
                <Image
                  src="/assets/logos/flood2food.png"
                  alt="Logo Flood2Food"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Flood<span className="text-[#F58220]">2</span>Food
              </span>
            </Link>
            <p className="text-xs text-[#A3C2AF] leading-relaxed max-w-sm">
              Sistem Cerdas Pemantauan &amp; Percepatan Pemulihan Lahan Sawah Pascabanjir Berbasis Sensor Fusion 7-in-1,
              Transmisi LoRa Jarak Jauh, dan Kecerdasan Buatan AI Tanya Bimo.
            </p>
            <div className="text-xs font-mono text-[#22C55E]">
              Program Kreativitas Mahasiswa — Karsa Cipta (PKM-KC) 2026<br />
              Universitas Sumatera Utara (USU)
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-mono text-white uppercase tracking-wider text-[11px] mb-3">Navigasi</div>
              <ul className="space-y-2">
                <li><Link href="#video" className="hover:text-white transition-colors">Video Demo</Link></li>
                <li><Link href="#masalah" className="hover:text-white transition-colors">Masalah Lahan</Link></li>
                <li><Link href="#sistem" className="hover:text-white transition-colors">Sistem IoT</Link></li>
                <li><Link href="#fitur" className="hover:text-white transition-colors">7 Parameter</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-white uppercase tracking-wider text-[11px] mb-3">Dokumentasi</div>
              <ul className="space-y-2">
                <li><Link href="#tampilan" className="hover:text-white transition-colors">Aplikasi Mobile</Link></li>
                <li><Link href="#hasil" className="hover:text-white transition-colors">Hasil Uji BPTP</Link></li>
                <li><Link href="#tim" className="hover:text-white transition-colors">Tim Peneliti</Link></li>
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#mitra" className="hover:text-white transition-colors">Mitra Resmi</Link></li>
              </ul>
            </div>
          </div>

          {/* Download & Credentials */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-white uppercase tracking-wider text-[11px] mb-2">Aplikasi Mobile</div>
            <a
              href="https://drive.google.com/file/d/1jhWta2ZYSled7e52_J57GJ2Pi7ih6qtr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] transition-colors"
            >
              <Download className="w-4 h-4 stroke-[2.2]" />
              <span>Unduh File APK (.apk)</span>
            </a>
            <p className="text-[11px] text-[#A3C2AF] leading-snug">
              Terakreditasi laboratorium penguji BPTP Sumut (KAN LP-863-IDN). Hak cipta software &amp; desain sistem terdaftar.
            </p>
          </div>
        </div>

        {/* Institutional Sponsor Ribbon in Footer */}
        <div className="py-8 border-b border-[#A7C7B5]/10 flex flex-col items-center gap-4 text-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#A3C2AF]">
            Didukung &amp; Dibiayai Secara Resmi Oleh:
          </span>
          <div className="w-full max-w-4xl bg-white rounded-xl py-2.5 px-6 shadow-lg border border-white/20">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4">
              {sponsors.map((item) => (
                <div key={item.name} className="relative select-none hover:scale-105 transition-transform">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="h-7 w-auto object-contain filter drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Slogan */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A3C2AF]">
          <div>
            © 2026 Tim Peneliti Flood2Food USU · Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC).
          </div>
          <div className="text-[#22C55E] font-bold tracking-wider">
            #TANAH SEHAT, SAWAH KUAT.
          </div>
        </div>
      </div>
    </footer>
  );
}

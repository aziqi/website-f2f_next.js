"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Github, ExternalLink } from "lucide-react";

const sponsors = [
  { name: "Kemendiktisaintek", src: "/assets/logos/kemendiktisaintek.png", width: 36, height: 36 },
  { name: "Diktisaintek Berdampak", src: "/assets/logos/diktisaintek-berdampak.png", width: 105, height: 30 },
  { name: "Belmawa", src: "/assets/logos/belmawa.png", width: 70, height: 36 },
  { name: "SIMBELMAWA", src: "/assets/logos/simbelmawa.png", width: 85, height: 36 },
  { name: "USU", src: "/assets/logos/usu.png", width: 36, height: 36 },
  { name: "PIMNAS 39", src: "/assets/logos/pimnas-39.png", width: 110, height: 36 },
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
            <Link href="/#top" className="flex items-center gap-3">
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
            <div className="flex flex-col gap-2">
              <div className="text-xs font-mono text-[#22C55E]">
                Program Kreativitas Mahasiswa — Karsa Cipta (PKM-KC) 2026<br />
                Universitas Sumatera Utara (USU)
              </div>
              <div>
                <a
                  href="https://github.com/aziqi/Flood2Food"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white hover:border-[#22C55E]/40 hover:bg-white/10 transition-all"
                  title="Repositori Resmi Flood2Food di GitHub"
                >
                  <Github className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>github.com/aziqi/Flood2Food</span>
                  <ExternalLink className="w-3 h-3 text-[#A3C2AF]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-mono text-white uppercase tracking-wider text-[11px] mb-3">Navigasi</div>
              <ul className="space-y-2">
                <li><Link href="/#video" className="hover:text-white transition-colors">Video Demo</Link></li>
                <li><Link href="/#sistem" className="hover:text-white transition-colors">Sistem IoT</Link></li>
                <li><Link href="/#fitur" className="hover:text-white transition-colors">7 Parameter</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-white uppercase tracking-wider text-[11px] mb-3">Dokumentasi</div>
              <ul className="space-y-2">
                <li><Link href="/#tampilan" className="hover:text-white transition-colors">Aplikasi Mobile</Link></li>
                <li><Link href="/#tim" className="hover:text-white transition-colors">Tim Peneliti</Link></li>
                <li><Link href="/#galeri" className="text-[#22C55E] hover:text-[#4ade80] font-medium transition-colors">Galeri Dokumentasi</Link></li>
                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li>
                  <a
                    href="https://github.com/aziqi/Flood2Food"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#F58220] hover:text-[#ea7310] font-medium transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download & Credentials */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-white uppercase tracking-wider text-[11px] mb-2">Aplikasi Mobile</div>
            <Link
              href="/#unduh"
              className="btn-nested inline-flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] transition-all shadow-md group"
            >
              <span>Unduh File APK (.apk)</span>
              <span className="btn-nested-icon w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center">
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </Link>
            <p className="text-[11px] text-[#A3C2AF] leading-snug">
              Terakreditasi laboratorium penguji BPTP Sumut (KAN LP-863-IDN). Hak cipta software &amp; desain sistem terdaftar.
            </p>
          </div>
        </div>

        {/* Institutional Sponsor Ribbon in Footer */}
        <div className="py-10 border-b border-[#A7C7B5]/15 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-[#22C55E]/50 rounded-full" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#22C55E]">
              Didukung &amp; Dibiayai Secara Resmi Oleh
            </span>
            <span className="w-8 h-0.5 bg-[#22C55E]/50 rounded-full" />
          </div>
          <div className="w-full max-w-5xl bg-white rounded-2xl py-6 px-6 sm:px-10 shadow-xl border border-white/40 ring-1 ring-black/5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
              {sponsors.map((item) => (
                <div key={item.name} className="relative select-none hover:scale-105 transition-transform flex items-center justify-center w-full h-11 sm:h-12 px-2">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="max-h-9 sm:max-h-11 max-w-[88%] w-auto object-contain filter drop-shadow-sm transition-all"
                    style={{ width: "auto", height: "auto" }}
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

        {/* AI Attribution Note */}
        <div className="pt-4 text-center text-[11px] font-mono text-white/30 tracking-wider">
          This website made by AI
        </div>
      </div>
    </footer>
  );
}

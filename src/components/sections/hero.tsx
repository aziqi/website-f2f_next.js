"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Cpu } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-[#A7C7B5]/10">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#22C55E]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#F58220]/08 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* PIMNAS Ribbon Badge */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] text-xs font-mono tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
                <span>PIMNAS 2026 · PKM-KC Universitas Sumatera Utara</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white">
              Flood<span className="text-[#F58220] drop-shadow-[0_0_35px_rgba(245,130,32,0.45)]">2</span>Food
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-semibold text-[#22C55E] tracking-tight">
              Sistem Cerdas Pemulihan Lahan Sawah Pascabanjir
            </p>

            {/* Lead description */}
            <Reveal delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-[#A3C2AF] max-w-2xl leading-relaxed">
                Flood2Food membaca <strong>7 parameter tanah sekaligus</strong> melalui sensor fusion antikorosi tahan lumpur.
                Datanya dikirimkan <strong>tanpa sinyal seluler</strong> lewat transmisi LoRa sejauh 10,64 km, lalu dianalisis oleh{" "}
                <strong>AI Tanya Bimo</strong> di aplikasi Android untuk menentukan dosis remediasi presisi.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.25}>
                  <Link
                    href="#unduh"
                    className="btn-nested bg-gradient-to-r from-[#F58220] via-[#F58220] to-[#E06D10] text-[#081A10] font-bold text-sm tracking-wide shadow-xl shadow-[#F58220]/25 hover:shadow-[#F58220]/45"
                  >
                    <span>Download APK Flood2Food</span>
                    <span className="btn-nested-icon bg-black/15 text-[#081A10]">
                      <Download className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </Link>
                </Magnetic>

                <Magnetic strength={0.15}>
                  <Link
                    href="#sistem"
                    className="btn-nested bg-[#0F2E1B]/80 hover:bg-[#153e25] text-white border border-[#A7C7B5]/25 hover:border-[#22C55E]/50 text-sm font-semibold"
                  >
                    <span>Jelajahi Sistem IoT</span>
                    <span className="btn-nested-icon bg-white/10 text-[#22C55E]">
                      <Cpu className="w-4 h-4" />
                    </span>
                  </Link>
                </Magnetic>
              </div>
            </Reveal>

          </div>

          {/* Right Column: 3D Mascot "Si Bimo" with Ambient Halo & Interactive Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            <Reveal delay={0.25} className="relative w-[300px] sm:w-[360px] lg:w-[410px] flex flex-col items-center">
              {/* Dual Glow Ambient Aura (Emerald + Solar Marigold) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] h-[340px] sm:h-[400px] bg-gradient-to-tr from-[#22C55E]/20 via-[#F58220]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Floating Pedestal Ground Shadow */}
              <div className="absolute -bottom-3 w-48 sm:w-64 h-8 bg-black/60 rounded-full blur-md" />

              {/* Mascot Animated Floating Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full"
              >
                <Image
                  src="/assets/mascot/cheerful-buffalo-mascot.png"
                  alt="Maskot Si Bimo Flood2Food: Kerbau Cerdas Bertenaga Surya dan Kecerdasan Buatan Agronomi"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)] select-none pointer-events-none"
                  priority
                />
              </motion.div>

            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Cpu, Radio, CheckCircle2 } from "lucide-react";
import { Reveal, SplitWords } from "@/components/motion/reveal";
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

            {/* SplitWords Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
              <SplitWords text="Pulihkan lahan sawah pasca banjir" />{" "}
              <span className="text-[#22C55E] drop-shadow-[0_0_30px_rgba(34,197,94,0.35)]">
                <SplitWords text="berbasis data," delay={0.2} />
              </span>{" "}
              <SplitWords text="bukan perkiraan." delay={0.35} />
            </h1>

            {/* Lead description */}
            <Reveal delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-[#A3C2AF] max-w-2xl leading-relaxed">
                Flood2Food membaca <strong>7 parameter tanah sekaligus</strong> melalui sensor fusion antikorosi tahan lumpur.
                Datanya dikirimkan <strong>tanpa sinyal seluler</strong> lewat transmisi LoRa sejauh 10,64 km, lalu dianalisis oleh{" "}
                <strong>AI Tanya Bimo</strong> di aplikasi Android untuk menentukan dosis remediasi presisi.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            {/* CTA Buttons */}
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.25}>
                  <a
                    href="https://drive.google.com/file/d/1jhWta2ZYSled7e52_J57GJ2Pi7ih6qtr/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-nested bg-gradient-to-r from-[#F58220] via-[#F58220] to-[#E06D10] text-[#081A10] font-bold text-sm tracking-wide shadow-xl shadow-[#F58220]/25 hover:shadow-[#F58220]/45"
                  >
                    <span>Download APK Flood2Food</span>
                    <span className="btn-nested-icon bg-black/15 text-[#081A10]">
                      <Download className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </a>
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

            {/* Key Metric Stats Grid: Responsive Deck */}
            <Reveal delay={0.5} className="w-full mt-12 pt-8 border-t border-[#A7C7B5]/15">
              {/* Desktop 4-Col Grid / Mobile Horizontal Snap Deck */}
              <div className="flex md:grid md:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                <div className="min-w-[140px] md:min-w-0 p-4 rounded-2xl bg-[#0F2E1B]/50 border border-white/5 flex flex-col justify-between shrink-0 md:shrink">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white leading-none">
                    7
                  </div>
                  <div className="mt-2 text-xs font-medium text-[#A3C2AF] tracking-wide">
                    Parameter Tanah
                  </div>
                </div>

                <div className="min-w-[155px] md:min-w-0 p-4 rounded-2xl bg-[#0F2E1B]/50 border border-white/5 flex flex-col justify-between shrink-0 md:shrink">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white leading-none flex items-baseline gap-1">
                    10,64 <span className="text-xs font-sans text-[#22C55E]">km</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-[#A3C2AF] tracking-wide">
                    Jangkauan LoRa
                  </div>
                </div>

                <div className="min-w-[155px] md:min-w-0 p-4 rounded-2xl bg-[#0F2E1B]/50 border border-white/5 flex flex-col justify-between shrink-0 md:shrink">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white leading-none flex items-baseline gap-1">
                    ≤5<span className="text-xs font-sans text-[#22C55E]">%</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-[#A3C2AF] tracking-wide">
                    Maks. Galat BPTP
                  </div>
                </div>

                <div className="min-w-[140px] md:min-w-0 p-4 rounded-2xl bg-[#0F2E1B]/50 border border-white/5 flex flex-col justify-between shrink-0 md:shrink">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white leading-none flex items-baseline gap-1">
                    14 <span className="text-xs font-sans text-[#F58220]">hari</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-[#A3C2AF] tracking-wide">
                    Uji Tanpa Korosi
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Mockup with Floating Telemetry Chips */}
          <div className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0">
            <Reveal delay={0.25} className="relative w-[280px] sm:w-[320px]">
              {/* Glow Aura */}
              <div className="absolute inset-0 bg-[#22C55E]/15 rounded-[44px] blur-2xl transform scale-95" />

              {/* Phone Case */}
              <div className="relative rounded-[44px] border-[10px] border-[#122b1c] bg-black overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-white/10">
                <Image
                  src="/assets/screens/02_dashboard_screen.png"
                  alt="Dashboard Aplikasi Flood2Food: Telemetri dan Status Kesehatan Tanah"
                  width={320}
                  height={693}
                  className="w-full h-auto block"
                  priority
                />
              </div>

              {/* Floating Chip Top: LoRa Status */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-0 sm:-left-8 bg-[#081A10]/95 backdrop-blur-md border border-[#A7C7B5]/30 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-xl shadow-black/60 z-20"
              >
                <Radio className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide">
                  LoRa Aktif · 10,64 km
                </span>
              </motion.div>

              {/* Floating Chip Bottom: BPTP Error Rate */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 right-0 sm:-right-8 bg-[#081A10]/95 backdrop-blur-md border border-[#A7C7B5]/30 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-xl shadow-black/60 z-20"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide">
                  Galat Ukur ≤5% BPTP
                </span>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

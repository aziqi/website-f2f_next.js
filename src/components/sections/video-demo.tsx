"use client";

import { Reveal } from "@/components/motion/reveal";
import { Play, ExternalLink, Radio, Cpu, Sparkles } from "lucide-react";

const YOUTUBE_VIDEO_URL = "https://youtu.be/JC81Xr8ajPM";

export function VideoDemo() {
  return (
    <section id="video" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0A2216] to-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Video Prototipe Fungsional · PKM-KC USU 2026</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Bukti Nyata Pengujian Prototipe Fungsional di Persawahan Pagar Merbau II
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Saksikan demonstrasi langsung prototipe fungsional Flood2Food saat beroperasi di genangan lumpur sawah pascabanjir —
            mulai dari pembacaan 7 parameter tanah sekaligus, transmisi LoRa mandiri tanpa sinyal seluler hingga radius 10,64 km,
            serta sinkronisasi data telemetri real-time ke aplikasi Android.
          </p>
        </Reveal>

        {/* 16:9 Video Frame Showcase with Glowing Border */}
        <Reveal delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-1 sm:p-2 bg-gradient-to-r from-[#22C55E]/30 via-[#F58220]/30 to-[#22C55E]/30 shadow-2xl shadow-black/80">
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/10">
              <iframe
                src="https://www.youtube-nocookie.com/embed/JC81Xr8ajPM?rel=0&amp;modestbranding=1"
                title="Inovasi IoT &amp; AI Pemulih Lahan Sawah Pascabanjir | Video Prototipe PKM-KC USU 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Under-Player Metadata & CTA Hub */}
          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#A3C2AF]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-white">
                <Play className="w-3.5 h-3.5 text-[#F58220] fill-[#F58220]" />
                <span>Desa Pagar Merbau II, Deli Serdang</span>
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[#22C55E]">
                <Radio className="w-3.5 h-3.5" />
                <span>LoRa 915 MHz (Radius 10,64 km)</span>
              </span>
            </div>

            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F58220] hover:bg-[#ea7310] text-[#081A10] font-bold text-xs transition-all shadow-md group shrink-0"
              title="Tonton video resolusi penuh di YouTube"
            >
              <span>Tonton di YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Github, Instagram } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 14 });

  const rotateX = useTransform(springY, [-150, 150], [10, -10]);
  const rotateY = useTransform(springX, [-150, 150], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
            {/* PIMNAS Ribbon Badge with animated rotating border */}
            <Reveal delay={0.1}>
              <div className="relative inline-flex p-[1px] rounded-full overflow-hidden mb-6 group">
                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#081A10_0%,#F58220_50%,#22C55E_100%)] opacity-80" />
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081A10] text-xs font-mono tracking-wide relative z-10 border border-[#A7C7B5]/15">
                  <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
                  <span className="text-[#F58220] font-semibold">PIMNAS 39</span>
                  <span className="text-white/30">/</span>
                  <span className="text-[#A3C2AF]">PKM-KC Universitas Sumatera Utara</span>
                </div>
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
            <Reveal delay={0.2}>
              <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] max-w-2xl leading-relaxed">
                Flood2Food membaca <strong>7 parameter tanah sekaligus</strong> melalui sensor fusion antikorosi tahan lumpur.
                Datanya dikirimkan <strong>tanpa sinyal seluler</strong> lewat transmisi LoRa sejauh 10,64 km, lalu dianalisis oleh{" "}
                <strong>AI Tanya Bimo</strong> di aplikasi Android untuk menentukan dosis remediasi presisi.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.3}>
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
                  <a
                    href="https://www.instagram.com/flood2food"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-nested bg-gradient-to-r from-[#E1306C]/15 via-[#C13584]/20 to-[#833AB4]/15 hover:from-[#E1306C]/30 hover:to-[#833AB4]/30 text-white border border-[#E1306C]/40 hover:border-[#E1306C]/70 text-sm font-semibold shadow-lg shadow-[#E1306C]/10 transition-all group"
                    title="Instagram Resmi @flood2food"
                  >
                    <span>Instagram</span>
                    <span className="btn-nested-icon bg-[#E1306C]/20 group-hover:bg-[#E1306C]/30 text-[#E1306C] transition-colors">
                      <Instagram className="w-4 h-4" />
                    </span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.15}>
                  <a
                    href="https://github.com/aziqi/Flood2Food"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-nested bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-sm font-semibold"
                    title="Lihat Repositori Resmi di GitHub"
                  >
                    <span>GitHub</span>
                    <span className="btn-nested-icon bg-white/10 text-white">
                      <Github className="w-4 h-4" />
                    </span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>

          </div>

          {/* Right Column: 3D Interactive Mascot "Si Bimo" with Ambient Halo & 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            <Reveal delay={0.25} className="relative w-[300px] sm:w-[360px] lg:w-[410px] flex flex-col items-center">
              {/* Dual Glow Ambient Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] h-[340px] sm:h-[400px] bg-gradient-to-tr from-[#22C55E]/20 via-[#F58220]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Floating Pedestal Ground Shadow */}
              <div className="absolute -bottom-3 w-48 sm:w-64 h-8 bg-black/60 rounded-full blur-md" />

              {/* 3D Tilt Wrapper */}
              <div
                style={{ perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full cursor-pointer"
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ y: [0, -10, 0] }}
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
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


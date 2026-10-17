"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Users, Crown, Code2, Zap, Wheat, Dna, GraduationCap } from "lucide-react";

const teamMembers = [
  {
    name: "Syakirah Fathanah",
    nim: "NIM 230805053",
    prodi: "S-1 Biologi, FMIPA '23",
    role: "Ketua Tim",
    focus: "Formulasi Biologi Pemulihan & Manajemen Riset",
    avatar: "SF",
    icon: Crown,
    theme: {
      border: "border-[#F58220]/40",
      bg: "bg-[#F58220]/10",
      text: "text-[#F58220]",
      badge: "bg-[#F58220]/20 text-[#F58220] border-[#F58220]/30",
    },
  },
  {
    name: "Athallah M. Maajid",
    nim: "NIM 251401040",
    prodi: "S-1 Ilmu Komputer, Fasilkom-TI '25",
    role: "Software Lead",
    focus: "Arsitektur Mobile Android, BLE & Algoritma Rekomendasi",
    avatar: "AM",
    icon: Code2,
    theme: {
      border: "border-[#38BDF8]/40",
      bg: "bg-[#38BDF8]/10",
      text: "text-[#38BDF8]",
      badge: "bg-[#38BDF8]/20 text-[#38BDF8] border-[#38BDF8]/30",
    },
  },
  {
    name: "Aziqi Arifian Dova",
    nim: "NIM 241757008",
    prodi: "D-4 Rek. Instrumentasi, F. Vokasi '24",
    role: "Hardware Lead",
    focus: "Node Sensor 7-in-1, Transmisi LoRa & Power Circuit",
    avatar: "AA",
    icon: Zap,
    theme: {
      border: "border-[#22C55E]/40",
      bg: "bg-[#22C55E]/10",
      text: "text-[#22C55E]",
      badge: "bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/30",
    },
  },
  {
    name: "M. Ghozi Muzakki",
    nim: "NIM 230305048",
    prodi: "S-1 Tek. Pangan, FP '23",
    role: "Agronomi & Mutu Pangan",
    focus: "Validasi Lapangan Sawah & Evaluasi Pascapanen",
    avatar: "GM",
    icon: Wheat,
    theme: {
      border: "border-[#EAB308]/40",
      bg: "bg-[#EAB308]/10",
      text: "text-[#EAB308]",
      badge: "bg-[#EAB308]/20 text-[#EAB308] border-[#EAB308]/30",
    },
  },
  {
    name: "Isrok Tenggar Martua",
    nim: "NIM 240805059",
    prodi: "S-1 Biologi, FMIPA '24",
    role: "Riset Ekologi Tanah",
    focus: "Analisis Dinamika Hara NPK & Biokimia Tanah",
    avatar: "IT",
    icon: Dna,
    theme: {
      border: "border-[#A855F7]/40",
      bg: "bg-[#A855F7]/10",
      text: "text-[#A855F7]",
      badge: "bg-[#A855F7]/20 text-[#A855F7] border-[#A855F7]/30",
    },
  },
];

export function Team() {
  return (
    <section id="tim" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] text-xs font-mono tracking-wide mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Peneliti &amp; Pengembang</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Orang di Balik Data — Tim PKM-KC USU 2026
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Kolaborasi lintas disiplin ilmu mahasiswa Universitas Sumatera Utara dari Fakultas Pertanian, FMIPA,
            Fasilkom-TI, dan Fakultas Vokasi yang mendedikasikan teknologi untuk kedaulatan pangan petani.
          </p>
        </Reveal>

        {/* Official Team Photo Banner */}
        <Reveal delay={0.1} className="mb-14 rounded-3xl overflow-hidden border border-[#A7C7B5]/20 shadow-2xl shadow-black/60 bg-black/40">
          <div className="relative w-full aspect-[16/9] max-h-[500px]">
            <Image
              src="/assets/team/dengan-nama.png"
              alt="Foto Resmi Tim Peneliti Flood2Food USU 2026"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </Reveal>

        {/* 5 Distinct Colorful Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <Reveal
                key={member.name}
                delay={idx * 0.1}
                className={`p-6 rounded-3xl bg-[#0F2E1B]/70 border ${member.theme.border} hover:bg-[#0F2E1B] transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${member.theme.bg} ${member.theme.text} font-mono font-bold flex items-center justify-center text-sm border border-white/10`}>
                      {member.avatar}
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${member.theme.badge}`}>
                      <Icon className="w-3 h-3" />
                      {member.role}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-[11px] font-mono text-[#F58220] mb-0.5">{member.nim}</div>
                  <div className="text-xs text-[#A3C2AF] mb-4">{member.prodi}</div>
                </div>

                <div className="pt-3 border-t border-[#A7C7B5]/10 mt-auto">
                  <span className="text-[11px] text-[#F4F8F5] leading-snug block">
                    {member.focus}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Dosen Pembimbing Banner */}
        <Reveal delay={0.3} className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F2E1B] via-[#12361E] to-[#0F2E1B] border border-[#22C55E]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center shrink-0 text-[#22C55E]">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#22C55E] uppercase tracking-wider block">Dosen Pembimbing PKM</span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-0.5">
                Dr. Ir. Zikri Noer, S.Si., M.Si.
              </h3>
              <p className="text-xs text-[#A3C2AF] mt-1">
                NIDN 0021019402 · Fakultas Vokasi Universitas Sumatera Utara
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-[#F58220] px-4 py-2 rounded-full bg-black/40 border border-white/10 shrink-0">
            Universitas Sumatera Utara
          </div>
        </Reveal>
      </div>
    </section>
  );
}

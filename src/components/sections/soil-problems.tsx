"use client";

import { Reveal } from "@/components/motion/reveal";
import { AlertTriangle, Clock, CalendarDays } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    value: "±4.500 ha",
    accentColor: "text-[#EF4444]",
    bgAccent: "bg-[#EF4444]/10",
    borderAccent: "border-[#EF4444]/20",
    title: "Lahan Sawah Gagal Panen",
    description:
      "Luas sawah terdampak banjir berulang di wilayah Sumatera. Petani sering memaksakan tanam ulang tanpa mengetahui sisa hara di dalam lumpur.",
  },
  {
    icon: Clock,
    value: "30–60 mnt",
    accentColor: "text-[#F58220]",
    bgAccent: "bg-[#F58220]/10",
    borderAccent: "border-[#F58220]/20",
    title: "Uji Manual per Sampel",
    description:
      "Alat uji konvensional (soil test kit kimia) butuh 30–60 menit per sampel, memakai reagen sekali pakai, dan rentan salah baca di bawah terik matahari.",
  },
  {
    icon: CalendarDays,
    value: "14 Hari",
    accentColor: "text-[#38BDF8]",
    bgAccent: "bg-[#38BDF8]/10",
    borderAccent: "border-[#38BDF8]/20",
    title: "Jendela Emas Remediasi",
    description:
      "Masa pemulihan kritis tanah pascabanjir terjadi dalam 14 hari pertama. Keputusan dosis kapur dan pupuk harus presisi agar tanah kembali seimbang.",
  },
];

export function SoilProblems() {
  return (
    <section id="masalah" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#EF4444] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <span>Fakta Lapangan</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Air surut belum tentu lahan siap ditanami kembali
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Genangan banjir mengikis topsoil humus, memicu deplesi hara makro secara drastis,
            meningkatkan kemasaman tanah, serta memadatkan rongga aerasi. Penanganan tanpa data
            menyebabkan risiko gagal panen berulang.
          </p>
        </Reveal>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={idx * 0.15}
                className="group relative p-8 rounded-3xl bg-[#0F2E1B]/70 border border-[#A7C7B5]/15 hover:border-[#22C55E]/40 hover:bg-[#0F2E1B] transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.bgAccent} ${item.borderAccent} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${item.accentColor}`} />
                  </div>
                  <div className={`font-mono font-bold text-3xl sm:text-4xl ${item.accentColor} mb-2 tracking-tight`}>
                    {item.value}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A3C2AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { AlertTriangle, Clock, CalendarDays, ArrowRight, TrendingDown } from "lucide-react";

export function SoilProblems() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const problemsData = [
    {
      id: "luas",
      tag: "Dampak Regional",
      icon: AlertTriangle,
      metric: "±4.500 ha",
      title: "Lahan Sawah Gagal Panen Berulang",
      subtitle: "Luas sawah terdampak banjir berulang di wilayah Deli Serdang & Sumatera Utara.",
      description:
        "Genangan banjir merusak struktur agregat tanah, memicu reduksi besi (Fe) dan mangan (Mn) menjadi racun terlarut, serta mengikis lapisan humus topsoil yang kaya bahan organik. Petani kerap memaksakan tanam ulang tanpa mengetahui tingkat kerusakan hara, berujung kerugian hingga puluhan juta per hektar.",
      badge: "Risiko Kerugian: Rp 18,2 Miliar/Musim",
      stats: [
        { label: "Deplesi Hara NPK", value: "-62%" },
        { label: "Pemadatan Agregat", value: "+84%" },
        { label: "Ancaman Toksisitas Besi", value: "Tinggi" },
      ],
    },
    {
      id: "waktu",
      tag: "Kelemahan Alat Konvensional",
      icon: Clock,
      metric: "30–60 mnt",
      title: "Uji Kimia Lambat per Titik",
      subtitle: "Metode konvensional memakai tabung reagen sekali pakai yang lambat dan subjektif.",
      description:
        "Petani dan penyuluh harus mengambil sampel tanah, mencampurnya dengan cairan kimia, dan mencocokkan gradasi warna kertas di bawah terik matahari. Proses butuh 30–60 menit per titik, mahal, dan tidak memberikan dosis kapur/pupuk presisi yang dibutuhkan tanah pascabanjir.",
      badge: "Konvensional vs Flood2Food (<2 Detik)",
      stats: [
        { label: "Waktu Uji", value: "30-60 mnt" },
        { label: "Biaya Reagen", value: "Berulang" },
        { label: "Subjektivitas Mata", value: "Rentan Bias" },
      ],
    },
    {
      id: "jendela",
      tag: "Fase Kritis Agronomi",
      icon: CalendarDays,
      metric: "14 Hari",
      title: "Jendela Emas Remediasi",
      subtitle: "Waktu krusial netralisasi tanah pascabanjir sebelum terjadi piritisasi permanen.",
      description:
        "Tanah sawah yang terendam banjir mengalami kondisi anaerobik ekstrem. Dalam rentang 14 hari pertama, aplikasi amelioran (kapur dolomit, mikoriza, dan mikroorganisme dekomposer) wajib diberikan dengan takaran eksak berdasarkan pH dan EC riil agar bibit padi baru tidak mati lemas.",
      badge: "Periode Kunci Penyelamatan Sawah",
      stats: [
        { label: "Deteksi Dini", value: "Hari 1-3" },
        { label: "Aplikasi Dosis", value: "Hari 4-7" },
        { label: "Siap Tanam Ulang", value: "Hari 14" },
      ],
    },
  ];

  return (
    <section id="masalah" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#EF4444] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
            <span>Fakta Lapangan Pascabanjir</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Air surut bukan berarti lahan siap ditanami kembali
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Genangan banjir meninggalkan lumpur beracun yang mengikis hara makro, meningkatkan keasaman ekstrem,
            serta memadatkan rongga aerasi akar. Memulai tanam ulang secara membabi buta adalah jaminan gagal panen.
          </p>
        </Reveal>

        {/* Mobile Tab Selector (Visible on small screens < 1024px) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 -mx-4 px-4">
          {problemsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-semibold shrink-0 transition-all ${
                activeTab === idx
                  ? "bg-[#EF4444] text-white shadow-lg shadow-[#EF4444]/30"
                  : "bg-[#0F2E1B] text-[#A3C2AF] border border-white/5 hover:bg-[#153e25]"
              }`}
            >
              {item.metric} · {item.id === "luas" ? "Lahan Gagal" : item.id === "waktu" ? "Uji Lambat" : "Jendela 14 Hari"}
            </button>
          ))}
        </div>

        {/* Mobile View: Single Focused Dynamic Card (< 1024px) */}
        <div className="lg:hidden">
          {problemsData.map((item, idx) => {
            if (idx !== activeTab) return null;
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bezel-shell p-2 animate-in fade-in zoom-in-95 duration-300"
              >
                <div className="bezel-core p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#EF4444] uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444]">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="font-mono text-4xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A3C2AF] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                    {item.stats.map((s) => (
                      <div key={s.label} className="p-2.5 rounded-xl bg-white/5 text-center">
                        <div className="text-[10px] text-[#A3C2AF] font-medium leading-tight">{s.label}</div>
                        <div className="text-xs font-mono font-bold text-[#F4F8F5] mt-1">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Asymmetrical Bento Diagnostic Grid (≥ 1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Dominant Diagnostic Hero (7 Columns) */}
          <Reveal delay={0.1} className="lg:col-span-7 bezel-shell">
            <div className="bezel-core p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#EF4444] text-xs font-mono font-semibold uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {problemsData[0].tag}
                  </span>
                  <span className="text-xs font-mono text-[#A3C2AF]">Status: Kritis Lapangan</span>
                </div>

                <div className="font-mono text-5xl font-extrabold text-white tracking-tight mb-3">
                  {problemsData[0].metric}
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {problemsData[0].title}
                </h3>

                <p className="text-sm text-[#A3C2AF] leading-relaxed mb-6">
                  {problemsData[0].description}
                </p>

                {/* Simulated Soil Layer Cross-Section Visual */}
                <div className="p-5 rounded-2xl bg-[#0F2E1B]/80 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono text-white mb-3">
                    <span className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-[#EF4444]" />
                      Degradasi Lapisan Sawah Pascabanjir
                    </span>
                    <span className="text-[#EF4444] font-bold">pH Drop 6.8 → 3.2</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-between text-xs">
                      <span className="text-red-200">Lapisan Lumpur Banjir (Endapan Pirit &amp; Toksik)</span>
                      <span className="font-mono text-red-400 font-bold">Anaerobik</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#081A10] border border-white/5 flex items-center justify-between text-xs text-[#A3C2AF]">
                      <span>Lapisan Perakaran Padi (Topsoil Terosi)</span>
                      <span className="font-mono text-amber-400 font-bold">Hara Hilang</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                {problemsData[0].stats.map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-white/5">
                    <div className="text-[11px] text-[#A3C2AF] font-medium">{s.label}</div>
                    <div className="text-base font-mono font-bold text-[#F4F8F5] mt-1">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column Stack: Card 2 & Card 3 (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Uji Manual */}
            <Reveal delay={0.2} className="bezel-shell flex-1">
              <div className="bezel-core p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#F58220] uppercase tracking-wider font-semibold">
                      {problemsData[1].tag}
                    </span>
                    <Clock className="w-5 h-5 text-[#F58220]" />
                  </div>

                  <div className="font-mono text-3xl font-bold text-[#F58220] mb-1">
                    {problemsData[1].metric}
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    {problemsData[1].title}
                  </h4>
                  <p className="text-xs text-[#A3C2AF] leading-relaxed">
                    {problemsData[1].description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A3C2AF]">Metode Manual: 60 mnt</span>
                  <span className="text-[#22C55E] font-bold">Flood2Food: &lt;2 Detik</span>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Jendela Emas 14 Hari */}
            <Reveal delay={0.3} className="bezel-shell flex-1">
              <div className="bezel-core p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-semibold">
                      {problemsData[2].tag}
                    </span>
                    <CalendarDays className="w-5 h-5 text-[#38BDF8]" />
                  </div>

                  <div className="font-mono text-3xl font-bold text-[#38BDF8] mb-1">
                    {problemsData[2].metric}
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    {problemsData[2].title}
                  </h4>
                  <p className="text-xs text-[#A3C2AF] leading-relaxed">
                    {problemsData[2].description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A3C2AF]">Hari 1: Deteksi</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[#A3C2AF]">Hari 7: Remediasi</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[#22C55E] font-bold">Hari 14: Siap</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

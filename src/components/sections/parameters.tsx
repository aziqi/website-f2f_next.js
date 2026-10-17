"use client";

import { Reveal } from "@/components/motion/reveal";
import { Droplets, Thermometer, Activity, Sparkles } from "lucide-react";

const parameters = [
  {
    code: "pH",
    name: "Derajat Kemasaman",
    unit: "pH",
    optimal: "6.0 – 6.8",
    role: "Menentukan ketersediaan seluruh unsur hara makro dan mikro.",
    action: "Menghitung kebutuhan aplikasi kapur pertanian (dolomit).",
    tagColor: "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30",
  },
  {
    code: "N",
    name: "Nitrogen Tanah",
    unit: "mg/kg (ppm)",
    optimal: "150 – 250",
    role: "Komponen utama pembentukan klorofil dan pertumbuhan vegetatif daun.",
    action: "Menentukan dosis pupuk Urea secara adaptif.",
    tagColor: "bg-[#F58220]/15 text-[#F58220] border-[#F58220]/30",
  },
  {
    code: "P",
    name: "Fosfor Tersedia",
    unit: "mg/kg (ppm)",
    optimal: "20 – 40",
    role: "Merangsang pembentukan akar pascabanjir dan percepatan anakan.",
    action: "Menghitung dosis pupuk SP-36 presisi.",
    tagColor: "bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30",
  },
  {
    code: "K",
    name: "Kalium Tanah",
    unit: "mg/kg (ppm)",
    optimal: "150 – 300",
    role: "Meningkatkan daya tahan tanaman terhadap rebah dan serangan patogen.",
    action: "Rekomendasi takaran pupuk KCl atau NPK berimbang.",
    tagColor: "bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/30",
  },
  {
    code: "MC",
    name: "Kelembapan Tanah",
    unit: "% RH",
    optimal: "60 – 80%",
    role: "Menjaga aerasi pori tanah dan mencegah anaerobik pascagenangan.",
    action: "Pedoman jadwal drainase macak-macak.",
    tagColor: "bg-[#06B6D4]/15 text-[#06B6D4] border-[#06B6D4]/30",
  },
  {
    code: "ST",
    name: "Suhu Tanah",
    unit: "°C",
    optimal: "25 – 32°C",
    role: "Mengendalikan laju mineralisasi bahan organik oleh mikrobioma.",
    action: "Monitoring dekomposisi sisa gulma dan jerami.",
    tagColor: "bg-[#EAB308]/15 text-[#EAB308] border-[#EAB308]/30",
  },
  {
    code: "EC",
    name: "Konduktivitas Listrik",
    unit: "µS/cm",
    optimal: "500 – 1500",
    role: "Mendeteksi tingkat salinitas dan akumulasi garam terlarut.",
    action: "Indikator pencucian (leaching) bila lumpur terlalu pekat garam.",
    tagColor: "bg-[#EC4899]/15 text-[#EC4899] border-[#EC4899]/30",
  },
];

export function Parameters() {
  return (
    <section id="fitur" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Sensor Fusion 7-in-1</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Tujuh Parameter Kimia-Fisika Tanah dalam Sekali Tancap
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Menghilangkan ketergantungan pada uji tabung kimiawi yang memakan waktu.
            Satu probe stainless steel membaca keseimbangan unsur hara lengkap dalam hitungan detik.
          </p>
        </Reveal>

        {/* 7 Parameter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parameters.map((param, idx) => (
            <Reveal
              key={param.code}
              delay={idx * 0.08}
              className={`p-6 rounded-3xl bg-[#0F2E1B]/70 border border-[#A7C7B5]/15 hover:border-[#22C55E]/40 hover:bg-[#0F2E1B] transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between ${
                idx === 0 ? "lg:col-span-2 bg-[#0F2E1B] border-[#22C55E]/30" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${param.tagColor}`}>
                    {param.code}
                  </span>
                  <span className="font-mono text-xs text-[#A3C2AF]">{param.unit}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{param.name}</h3>
                <p className="text-xs text-[#A3C2AF] mb-4 leading-relaxed">{param.role}</p>
              </div>

              <div className="pt-4 border-t border-[#A7C7B5]/10 mt-auto">
                <div className="text-[11px] font-mono text-[#F58220] mb-1">Rentang Optimal: {param.optimal}</div>
                <div className="text-xs text-[#F4F8F5] font-medium leading-snug">{param.action}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

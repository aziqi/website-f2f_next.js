"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ChevronRight } from "lucide-react";

const parameters = [
  {
    code: "pH",
    name: "Derajat Kemasaman",
    unit: "pH",
    optimal: "6.0 – 6.8",
    category: "kimia",
    risk: "Kemasaman ekstrem pascabanjir mengikat unsur P dan memicu keracunan aluminium (Al) serta besi (Fe).",
    action: "Menghitung kebutuhan aplikasi kapur pertanian (dolomit CaCO3) adaptif per meter persegi.",
    tagColor: "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30",
    color: "#22C55E",
  },
  {
    code: "N",
    name: "Nitrogen Tanah",
    unit: "mg/kg (ppm)",
    optimal: "150 – 250",
    category: "kimia",
    risk: "Hanyut terbawa limpasan banjir (leaching), menyebabkan daun padi kerdil dan menguning.",
    action: "Menentukan dosis pupuk Urea secara bertahap saat bibit baru mulai berakar.",
    tagColor: "bg-[#F58220]/15 text-[#F58220] border-[#F58220]/30",
    color: "#F58220",
  },
  {
    code: "P",
    name: "Fosfor Tersedia",
    unit: "mg/kg (ppm)",
    optimal: "20 – 40",
    category: "kimia",
    risk: "Terfiksasi oleh ion besi (Fe-P) dalam lumpur asam sehingga tidak dapat diserap akar.",
    action: "Menghitung dosis SP-36 presisi dan rekomendasi inokulasi mikoriza pemecah fosfat.",
    tagColor: "bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30",
    color: "#38BDF8",
  },
  {
    code: "K",
    name: "Kalium Tanah",
    unit: "mg/kg (ppm)",
    optimal: "150 – 300",
    category: "kimia",
    risk: "Pencucian hara kalium melemahkan batang padi sehingga mudah rebah saat terhempas angin sawah.",
    action: "Rekomendasi takaran pupuk KCl atau NPK majemuk berimbang.",
    tagColor: "bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/30",
    color: "#A855F7",
  },
  {
    code: "EC",
    name: "Konduktivitas Listrik",
    unit: "µS/cm",
    optimal: "500 – 1500",
    category: "kimia",
    risk: "Mendeteksi tingkat salinitas dan akumulasi garam terlarut dari air limpasan banjir.",
    action: "Indikator jadwal pencucian (leaching) bila lumpur sawah terlalu pekat garam.",
    tagColor: "bg-[#EC4899]/15 text-[#EC4899] border-[#EC4899]/30",
    color: "#EC4899",
  },
  {
    code: "MC",
    name: "Kelembapan Tanah",
    unit: "% RH",
    optimal: "60 – 80%",
    category: "fisika",
    risk: "Kondisi jenuh air berlebih memicu pembusukan akar padi dan perkembangan jamur parasit.",
    action: "Pedoman jadwal drainase macak-macak untuk memulihkan rongga aerasi oksigen.",
    tagColor: "bg-[#06B6D4]/15 text-[#06B6D4] border-[#06B6D4]/30",
    color: "#06B6D4",
  },
  {
    code: "ST",
    name: "Suhu Tanah",
    unit: "°C",
    optimal: "25 – 32°C",
    category: "fisika",
    risk: "Fluktuasi suhu tanah ekstrem menghambat metabolisme mikroorganisme dekomposer sisa jerami.",
    action: "Monitoring masa inkubasi pupuk hayati dan bahan organik pembenah tanah.",
    tagColor: "bg-[#EAB308]/15 text-[#EAB308] border-[#EAB308]/30",
    color: "#EAB308",
  },
];

export function Parameters() {
  const [filter, setFilter] = useState<"all" | "kimia" | "fisika">("all");
  const [selectedCode, setSelectedCode] = useState<string>("pH");

  const filteredParams = parameters.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const activeParam = parameters.find((p) => p.code === selectedCode) || parameters[0];

  return (
    <section id="fitur" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Sensor Fusion 7-in-1 Heavy Duty</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Tujuh Parameter Kimia-Fisika Tanah dalam Sekali Tancap
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Menghilangkan ketergantungan pada uji tabung kimiawi yang memakan waktu.
            Satu probe stainless steel membaca keseimbangan unsur hara lengkap secara simultan di bawah 2 detik.
          </p>
        </Reveal>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all shrink-0 ${
              filter === "all"
                ? "bg-[#22C55E] text-[#081A10] shadow-md shadow-[#22C55E]/20"
                : "bg-white/5 text-[#A3C2AF] hover:bg-white/10"
            }`}
          >
            Semua Parameter (7)
          </button>
          <button
            onClick={() => setFilter("kimia")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all shrink-0 ${
              filter === "kimia"
                ? "bg-[#22C55E] text-[#081A10] shadow-md shadow-[#22C55E]/20"
                : "bg-white/5 text-[#A3C2AF] hover:bg-white/10"
            }`}
          >
            Kimia &amp; Hara (pH, N, P, K, EC)
          </button>
          <button
            onClick={() => setFilter("fisika")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all shrink-0 ${
              filter === "fisika"
                ? "bg-[#22C55E] text-[#081A10] shadow-md shadow-[#22C55E]/20"
                : "bg-white/5 text-[#A3C2AF] hover:bg-white/10"
            }`}
          >
            Fisika &amp; Lingkungan (Suhu, MC)
          </button>
        </div>

        {/* Active Inspection Cockpit Panel */}
        <Reveal delay={0.1} className="mb-10 bezel-shell">
          <div className="bezel-core p-6 sm:p-8 bg-gradient-to-r from-[#0F2E1B] via-[#0D2918] to-[#0F2E1B]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-extrabold text-2xl text-white shadow-lg border border-white/15"
                  style={{ backgroundColor: `${activeParam.color}25`, borderColor: activeParam.color }}
                >
                  {activeParam.code}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A3C2AF]">
                      Cockpit Agronomi Terpilih
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeParam.color }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mt-0.5">
                    {activeParam.name} ({activeParam.code})
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[#A3C2AF] block text-[10px]">Rentang Optimal Sawah:</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{activeParam.optimal} {activeParam.unit}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-xs leading-relaxed">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <span className="font-mono text-[#EF4444] font-semibold uppercase tracking-wider block mb-1">
                  Bahaya Sawah Pascabanjir:
                </span>
                <p className="text-red-200">{activeParam.risk}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-[#22C55E]/30">
                <span className="font-mono text-[#22C55E] font-semibold uppercase tracking-wider block mb-1">
                  Formula Tindakan Flood2Food:
                </span>
                <p className="text-emerald-100">{activeParam.action}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Responsive Grid of Parameters (Clickable to inspect in cockpit) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredParams.map((param, idx) => {
            const isSelected = selectedCode === param.code;
            return (
              <button
                key={param.code}
                onClick={() => setSelectedCode(param.code)}
                className={`text-left p-5 sm:p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? "bg-[#0F2E1B] border-[#22C55E] ring-2 ring-[#22C55E]/20 shadow-xl shadow-black/50 scale-[1.02]"
                    : "bg-[#0F2E1B]/50 border-white/5 hover:border-white/20 hover:bg-[#0F2E1B]/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-mono font-bold border"
                      style={{
                        backgroundColor: `${param.color}20`,
                        color: param.color,
                        borderColor: `${param.color}40`,
                      }}
                    >
                      {param.code}
                    </span>
                    <span className="font-mono text-[11px] text-[#A3C2AF]">{param.unit}</span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-[#22C55E] transition-colors">
                    {param.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#F58220] mb-3">
                    Optimal: {param.optimal}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                  <span>{isSelected ? "Aktif di Cockpit" : "Klik Inspeksi"}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#22C55E] translate-x-1" : "text-white/40 group-hover:translate-x-1"}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

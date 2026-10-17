"use client";

import { useState, useMemo } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Sliders, RefreshCw, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

export function Simulator() {
  const [pH, setPH] = useState(4.8);
  const [nitrogen, setNitrogen] = useState(95);
  const [phosphorus, setPhosphorus] = useState(14);
  const [potassium, setPotassium] = useState(90);
  const [moisture, setMoisture] = useState(88);

  // Preset Handlers
  const handlePreset = (type: "critical" | "remedy" | "optimal") => {
    if (type === "critical") {
      setPH(4.8);
      setNitrogen(95);
      setPhosphorus(14);
      setPotassium(90);
      setMoisture(88);
    } else if (type === "remedy") {
      setPH(5.8);
      setNitrogen(165);
      setPhosphorus(25);
      setPotassium(175);
      setMoisture(74);
    } else {
      setPH(6.5);
      setNitrogen(225);
      setPhosphorus(35);
      setPotassium(240);
      setMoisture(68);
    }
  };

  // Dynamic Health Score Calculation
  const healthScore = useMemo(() => {
    let score = 0;
    // pH component (max 30)
    const phDiff = Math.abs(pH - 6.5);
    score += Math.max(0, 30 - phDiff * 16);

    // N component (max 25)
    if (nitrogen >= 180 && nitrogen <= 250) score += 25;
    else score += Math.max(0, 25 - Math.abs(nitrogen - 200) * 0.15);

    // P component (max 20)
    if (phosphorus >= 25 && phosphorus <= 40) score += 20;
    else score += Math.max(0, 20 - Math.abs(phosphorus - 30) * 0.6);

    // K component (max 25)
    if (potassium >= 180 && potassium <= 300) score += 25;
    else score += Math.max(0, 25 - Math.abs(potassium - 220) * 0.15);

    return Math.round(Math.min(100, Math.max(10, score)));
  }, [pH, nitrogen, phosphorus, potassium]);

  // Dynamic Remediation Dose
  const recommendations = useMemo(() => {
    const limeNeeded = pH < 6.0 ? Math.round((6.5 - pH) * 950) : 0;
    const ureaNeeded = nitrogen < 180 ? Math.round((200 - nitrogen) * 1.25) : 0;
    const sp36Needed = phosphorus < 25 ? Math.round((30 - phosphorus) * 3.8) : 0;
    const kclNeeded = potassium < 180 ? Math.round((220 - potassium) * 1.1) : 0;

    let statusLabel = "Kondisi Kritis Pascabanjir";
    let statusColor = "text-[#EF4444]";
    if (healthScore >= 80) {
      statusLabel = "Lahan Sehat & Siap Tanam";
      statusColor = "text-[#22C55E]";
    } else if (healthScore >= 55) {
      statusLabel = "Fase Pemulihan Berjalan Baik";
      statusColor = "text-[#F58220]";
    }

    return { limeNeeded, ureaNeeded, sp36Needed, kclNeeded, statusLabel, statusColor };
  }, [pH, nitrogen, phosphorus, potassium, healthScore]);

  return (
    <section id="simulator" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0A2216] to-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] text-xs font-mono tracking-wide mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulator Interaktif</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Uji Simulasi Telemetri &amp; Rekomendasi Remediasi
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Geser slider parameter tanah di bawah ini untuk melihat langsung bagaimana kecerdasan Flood2Food
            menganalisis Health Score lahan dan menghitung takaran remediasi pupuk secara otomatis.
          </p>
        </Reveal>

        {/* Preset Condition Buttons */}
        <Reveal delay={0.1} className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => handlePreset("critical")}
            className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#EF4444] hover:bg-[#EF4444]/25 transition-colors"
          >
            ⚠️ Preset: Pascabanjir Kritis (Hari 1)
          </button>
          <button
            onClick={() => handlePreset("remedy")}
            className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#F58220]/15 border border-[#F58220]/40 text-[#F58220] hover:bg-[#F58220]/25 transition-colors"
          >
            🔄 Preset: Remediasi Berjalan (Hari 7)
          </button>
          <button
            onClick={() => handlePreset("optimal")}
            className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] hover:bg-[#22C55E]/25 transition-colors"
          >
            ✨ Preset: Siap Tanam Prima (Hari 14)
          </button>
        </Reveal>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Panel */}
          <Reveal delay={0.2} className="lg:col-span-7 p-8 rounded-3xl bg-[#0F2E1B]/80 border border-[#A7C7B5]/20 shadow-2xl shadow-black/50 space-y-6">
            <h3 className="font-display font-bold text-xl text-white flex items-center justify-between">
              <span>Kontrol Parameter Lapangan</span>
              <span className="text-xs font-mono text-[#A3C2AF]">Geser untuk Mengubah</span>
            </h3>

            {/* pH Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white font-semibold">Derajat Kemasaman (pH)</span>
                <span className="text-[#22C55E] font-bold text-sm">{pH.toFixed(1)} pH</span>
              </div>
              <input
                type="range"
                min="3.5"
                max="8.5"
                step="0.1"
                value={pH}
                onChange={(e) => setPH(parseFloat(e.target.value))}
                className="w-full accent-[#22C55E] h-2 bg-black/40 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A3C2AF] font-mono">
                <span>3.5 (Sangat Asam)</span>
                <span>6.5 (Optimal)</span>
                <span>8.5 (Alkali)</span>
              </div>
            </div>

            {/* Nitrogen Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white font-semibold">Nitrogen (N)</span>
                <span className="text-[#F58220] font-bold text-sm">{nitrogen} mg/kg</span>
              </div>
              <input
                type="range"
                min="30"
                max="350"
                step="5"
                value={nitrogen}
                onChange={(e) => setNitrogen(parseInt(e.target.value))}
                className="w-full accent-[#F58220] h-2 bg-black/40 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A3C2AF] font-mono">
                <span>30 (Kritis)</span>
                <span>200 (Optimal)</span>
                <span>350 (Tinggi)</span>
              </div>
            </div>

            {/* Phosphorus Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white font-semibold">Fosfor Tersedia (P)</span>
                <span className="text-[#38BDF8] font-bold text-sm">{phosphorus} mg/kg</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={phosphorus}
                onChange={(e) => setPhosphorus(parseInt(e.target.value))}
                className="w-full accent-[#38BDF8] h-2 bg-black/40 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A3C2AF] font-mono">
                <span>5 (Defisit)</span>
                <span>30 (Optimal)</span>
                <span>60 (Kaya)</span>
              </div>
            </div>

            {/* Potassium Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white font-semibold">Kalium (K)</span>
                <span className="text-[#A855F7] font-bold text-sm">{potassium} mg/kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="400"
                step="5"
                value={potassium}
                onChange={(e) => setPotassium(parseInt(e.target.value))}
                className="w-full accent-[#A855F7] h-2 bg-black/40 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A3C2AF] font-mono">
                <span>40 (Rendah)</span>
                <span>220 (Optimal)</span>
                <span>400 (Sangat Tinggi)</span>
              </div>
            </div>
          </Reveal>

          {/* Real-time Health Cockpit & Recommendations */}
          <Reveal delay={0.3} className="lg:col-span-5 space-y-6">
            {/* Speedometer Card */}
            <div className="p-8 rounded-3xl bg-[#0F2E1B] border border-[#22C55E]/30 shadow-2xl shadow-black/60 text-center relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-widest text-[#A3C2AF] mb-3">
                Indeks Kesehatan Lahan
              </div>

              {/* Score Display */}
              <div className="relative inline-flex items-center justify-center my-4">
                <div className="font-mono text-7xl font-bold tracking-tight text-white">
                  {healthScore}
                </div>
                <span className="text-2xl font-mono text-[#22C55E] ml-1">/100</span>
              </div>

              <div className={`font-display font-bold text-lg ${recommendations.statusColor} mt-1`}>
                {recommendations.statusLabel}
              </div>
            </div>

            {/* Prescriptive Remediation Output */}
            <div className="p-6 rounded-3xl bg-[#0F2E1B]/60 border border-[#A7C7B5]/20 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Rekomendasi Presisi AI Tanya Bimo</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[#A3C2AF] block text-[11px]">Kapur Pertanian (Dolomit)</span>
                  <span className="font-mono font-bold text-white text-base">
                    {recommendations.limeNeeded} <span className="text-xs font-normal">kg/ha</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[#A3C2AF] block text-[11px]">Pupuk Urea (N)</span>
                  <span className="font-mono font-bold text-white text-base">
                    {recommendations.ureaNeeded} <span className="text-xs font-normal">kg/ha</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[#A3C2AF] block text-[11px]">Pupuk SP-36 (P)</span>
                  <span className="font-mono font-bold text-white text-base">
                    {recommendations.sp36Needed} <span className="text-xs font-normal">kg/ha</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[#A3C2AF] block text-[11px]">Pupuk KCl (K)</span>
                  <span className="font-mono font-bold text-white text-base">
                    {recommendations.kclNeeded} <span className="text-xs font-normal">kg/ha</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

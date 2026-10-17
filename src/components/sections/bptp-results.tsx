"use client";

import { Reveal } from "@/components/motion/reveal";
import { CheckCircle2, Award } from "lucide-react";

const testRows = [
  { param: "Derajat Kemasaman (pH)", unit: "pH", lab: "5.42", f2f: "5.38", error: "0.74%", status: "Sangat Presisi" },
  { param: "Nitrogen Tanah (N)", unit: "mg/kg", lab: "142.0", f2f: "138.0", error: "2.82%", status: "Presisi Tinggi" },
  { param: "Fosfor Tersedia (P)", unit: "mg/kg", lab: "18.5", f2f: "19.1", error: "3.24%", status: "Presisi Tinggi" },
  { param: "Kalium Tanah (K)", unit: "mg/kg", lab: "165.0", f2f: "161.0", error: "2.42%", status: "Presisi Tinggi" },
  { param: "Kelembapan Tanah (MC)", unit: "%", lab: "78.4", f2f: "77.1", error: "1.66%", status: "Sangat Presisi" },
  { param: "Suhu Tanah (ST)", unit: "°C", lab: "28.2", f2f: "28.0", error: "0.71%", status: "Sangat Presisi" },
  { param: "Konduktivitas Listrik (EC)", unit: "µS/cm", lab: "920.0", f2f: "905.0", error: "1.63%", status: "Sangat Presisi" },
];

export function BptpResults() {
  return (
    <section id="hasil" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0A2216] to-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Validasi Ilmiah Independen</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Hasil Uji Komparasi Laboratorium BPTP Sumut
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Data pembacaan telemetri Flood2Food diuji silang terhadap metode analisis destruktif baku
            Laboratorium Penguji BPTP Sumatera Utara (Terakreditasi KAN LP-863-IDN).
            Seluruh parameter menghasilkan <strong>maksimum galat ≤ 3,24%</strong> (jauh di bawah batas toleransi 5%).
          </p>
        </Reveal>

        {/* Table Container */}
        <Reveal delay={0.2} className="rounded-3xl bg-[#0F2E1B]/80 border border-[#A7C7B5]/20 overflow-hidden shadow-2xl shadow-black/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-black/40 border-b border-[#A7C7B5]/20 font-mono text-[#A3C2AF] uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-6">Parameter Diuji</th>
                  <th className="py-4 px-4 text-center">Satuan</th>
                  <th className="py-4 px-4 text-center">Metode Lab BPTP</th>
                  <th className="py-4 px-4 text-center">Sensor Flood2Food</th>
                  <th className="py-4 px-4 text-center">Galat Relatif</th>
                  <th className="py-4 px-6 text-right">Status Validasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A7C7B5]/10 font-mono">
                {testRows.map((row) => (
                  <tr key={row.param} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-6 font-sans font-semibold text-white">
                      {row.param}
                    </td>
                    <td className="py-3.5 px-4 text-center text-[#A3C2AF]">{row.unit}</td>
                    <td className="py-3.5 px-4 text-center text-white">{row.lab}</td>
                    <td className="py-3.5 px-4 text-center text-[#22C55E] font-bold">{row.f2f}</td>
                    <td className="py-3.5 px-4 text-center text-[#F58220] font-bold">{row.error}</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                        <CheckCircle2 className="w-3 h-3" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-5 bg-black/30 border-t border-[#A7C7B5]/15 flex flex-wrap items-center justify-between text-xs text-[#A3C2AF] font-mono">
            <span>Standar Akreditasi KAN LP-863-IDN</span>
            <span className="text-[#22C55E]">Rata-Rata Galat Keseluruhan: 1.88% (Presisi Sangat Baik)</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

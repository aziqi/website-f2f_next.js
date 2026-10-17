"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Cpu, Radio, Smartphone, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export function IotSystem() {
  return (
    <section id="sistem" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0B2416] to-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Rekayasa Ketahanan IoT &amp; Hardware</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Satu Ekosistem Cerdas, Nol Ketergantungan Sinyal Seluler
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Arsitektur transmisi terdistribusi yang dirancang beroperasi 24/7 di tengah sawah dan kawasan
            pedesaan tanpa jaringan seluler (*blank spot*) melalui integrasi daya surya mandiri dan frekuensi radio jarak jauh.
          </p>
        </Reveal>


        {/* Engineering Schematic Pipeline (Desktop 3-Node Connected / Mobile Vertical Step Journey) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 relative">
          {/* Node 1: Sensor Node Lapangan */}
          <Reveal delay={0.15} className="bezel-shell relative group">
            <div className="bezel-core p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-xs font-mono font-bold text-[#22C55E]">
                    01 · Node Lapangan
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">Sensor Node 7-in-1</h3>
                <p className="text-xs text-[#A3C2AF] mb-6 leading-relaxed">
                  Tertanam langsung di lahan sawah berlumpur, bekerja mandiri 24/7 dengan catu daya panel surya.
                </p>

                <ul className="space-y-3 text-xs text-[#F4F8F5]">
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#22C55E] font-bold">✓</span>
                    <span><strong>Probe Stainless 316L:</strong> RS485 Modbus RTU Heavy-Duty (GX16 Aviation)</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#22C55E] font-bold">✓</span>
                    <span><strong>Mikrokontroler:</strong> ESP32 Dual-Core + Deep Sleep Power Management</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#22C55E] font-bold">✓</span>
                    <span><strong>Catu Daya Mandiri:</strong> Panel Surya 10 Wp + Baterai LiFePO4 + SCC</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#22C55E] font-bold">✓</span>
                    <span><strong>Proteksi Fisik:</strong> Box Enclosure Weatherproof Tahan Cuaca Tropis</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                <span>Status Daya: Mandiri Solar</span>
                <span className="text-[#22C55E] font-bold">Transmisi: LoRa TX</span>
              </div>
            </div>
          </Reveal>

          {/* Node 2: Gateway Portabel */}
          <Reveal delay={0.25} className="bezel-shell relative group">
            <div className="bezel-core p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-xs font-mono font-bold text-[#F58220]">
                    02 · Base Station
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center text-[#F58220]">
                    <Radio className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">Gateway Portabel</h3>
                <p className="text-xs text-[#A3C2AF] mb-6 leading-relaxed">
                  Ditempatkan di rumah petani atau pos poktan, menangkap data radio LoRa hingga radius 10,64 km.
                </p>

                <ul className="space-y-3 text-xs text-[#F4F8F5]">
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#F58220] font-bold">✓</span>
                    <span><strong>Transceiver:</strong> LoRa E220-900T22D (915 MHz) + Antena High Gain</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#F58220] font-bold">✓</span>
                    <span><strong>Custom PCB:</strong> FR4 Dual Layer Type-C Power Rail terstandarisasi</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#F58220] font-bold">✓</span>
                    <span><strong>Display &amp; Audio:</strong> LCD 20x4 I2C + Buzzer Notifikasi Ambang Bahaya</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#F58220] font-bold">✓</span>
                    <span><strong>Konektivitas Lokal:</strong> BLE Bridge instan ke Smartphone Android</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                <span>Pencadangan: MicroSD Offline</span>
                <span className="text-[#F58220] font-bold">Bridge: LoRa ↔ BLE</span>
              </div>
            </div>
          </Reveal>

          {/* Node 3: Mobile App & AI */}
          <Reveal delay={0.35} className="bezel-shell relative group">
            <div className="bezel-core p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-xs font-mono font-bold text-[#38BDF8]">
                    03 · Antarmuka AI
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">Aplikasi Mobile AI</h3>
                <p className="text-xs text-[#A3C2AF] mb-6 leading-relaxed">
                  Pusat kalkulasi takaran remediasi instan di genggaman petani tanpa butuh paket internet.
                </p>

                <ul className="space-y-3 text-xs text-[#F4F8F5]">
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#38BDF8] font-bold">✓</span>
                    <span><strong>Health Score:</strong> Speedometer 0-100 &amp; Indikator Kritis 7 Parameter</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#38BDF8] font-bold">✓</span>
                    <span><strong>AI Tanya Bimo:</strong> Konsultasi Agronomi Cerdas Terkalibrasi Formula BPTP</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#38BDF8] font-bold">✓</span>
                    <span><strong>Dosis Presisi:</strong> Kalkulator Kebutuhan Kapur Dolomit &amp; Pupuk NPK</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 flex items-start gap-2.5">
                    <span className="text-[#38BDF8] font-bold">✓</span>
                    <span><strong>Gamifikasi:</strong> Misi Harian Remediasi, Poin XP &amp; Riwayat Lapangan</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                <span>Database: Offline SQLite</span>
                <span className="text-[#38BDF8] font-bold">Engine: TinyML</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Real Hardware Artifacts Photography Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Reveal delay={0.2} className="bezel-shell">
            <div className="bezel-core p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/10 shrink-0">
                <Image
                  src="/assets/sensor-node.png"
                  alt="Sensor Node Lapangan Flood2Food"
                  fill
                  className="object-contain p-2"
                  sizes="176px"
                />
              </div>
              <div>
                <span className="font-mono text-xs text-[#22C55E] uppercase tracking-wider font-semibold">
                  Modul Hardware Lapangan
                </span>
                <h4 className="font-display font-bold text-xl text-white mt-1">Sensor Node 7-in-1</h4>
                <p className="text-xs text-[#A3C2AF] mt-2.5 leading-relaxed">
                  Box enclosure weatherproof dengan konektor GX16 aviation grade dan probe stainless steel 316L antikorosi yang telah diuji rendam di lumpur sawah selama 14 hari penuh.
                </p>
                <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-[#22C55E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  <span>RS485 Modbus RTU · IP Enclosure Weatherproof</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="bezel-shell">
            <div className="bezel-core p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/10 shrink-0">
                <Image
                  src="/assets/gateway.png"
                  alt="Gateway Portabel Flood2Food"
                  fill
                  className="object-contain p-2"
                  sizes="176px"
                />
              </div>
              <div>
                <span className="font-mono text-xs text-[#F58220] uppercase tracking-wider font-semibold">
                  Modul Hardware Penerima
                </span>
                <h4 className="font-display font-bold text-xl text-white mt-1">Gateway Portabel &amp; BLE Bridge</h4>
                <p className="text-xs text-[#A3C2AF] mt-2.5 leading-relaxed">
                  Pusat penerima mandiri dengan layar LCD 20x4 dan slot microSD logging untuk pencadangan data offline ketika smartphone petani tidak terhubung.
                </p>
                <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-[#F58220]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                  <span>Transceiver E220-900T22D · BLE 5.0</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

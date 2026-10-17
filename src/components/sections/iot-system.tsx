"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Cpu, Radio, Smartphone, Zap, ShieldCheck } from "lucide-react";

export function IotSystem() {
  return (
    <section id="sistem" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0B2416] to-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Rekayasa Ketahanan IoT &amp; Hardware</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Satu Ekosistem Cerdas, Nol Ketergantungan Sinyal
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Arsitektur terdistribusi yang dirancang beroperasi 24/7 di tengah sawah dan kawasan
            pedesaan tanpa jaringan seluler (blank spot) melalui integrasi daya surya mandiri dan frekuensi radio jarak jauh.
          </p>
        </Reveal>

        {/* 3-Stage Distributed Flow Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Node 1 */}
          <Reveal delay={0.1} className="p-8 rounded-3xl bg-[#0F2E1B]/80 border border-[#A7C7B5]/15 relative">
            <div className="flex items-center gap-3 text-xs font-mono text-[#22C55E] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span>Stasiun Lapangan</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Sensor Node 7-in-1</h3>
            <p className="text-xs text-[#A3C2AF] mb-6">
              Tertanam langsung di lahan sawah berlumpur, bekerja mandiri dengan catu daya surya.
            </p>
            <ul className="space-y-3 text-xs text-[#F4F8F5]">
              <li className="flex items-start gap-2">
                <span className="text-[#22C55E] font-bold">·</span>
                <span><strong>Probe Sensor:</strong> RS485 Modbus RTU Heavy-Duty (GX16)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#22C55E] font-bold">·</span>
                <span><strong>Mikrokontroler:</strong> ESP32 Dual-Core + Deep Sleep Power Management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#22C55E] font-bold">·</span>
                <span><strong>Catu Daya:</strong> Panel Surya 10 Wp + LiFePO4 12V 8Ah + SCC</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#22C55E] font-bold">·</span>
                <span><strong>Redundansi:</strong> MicroSD Data Logging Offline + RTC DS1307</span>
              </li>
            </ul>
          </Reveal>

          {/* Node 2 */}
          <Reveal delay={0.2} className="p-8 rounded-3xl bg-[#0F2E1B]/80 border border-[#F58220]/30 relative">
            <div className="flex items-center gap-3 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F58220]" />
              <span>Pusat Penerima Portabel</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Gateway Portabel</h3>
            <p className="text-xs text-[#A3C2AF] mb-6">
              Ditempatkan di pos pemantauan atau rumah petani, menangkap data radio LoRa hingga 10,64 km.
            </p>
            <ul className="space-y-3 text-xs text-[#F4F8F5]">
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold">·</span>
                <span><strong>Hardware:</strong> ESP32 Type-C, Custom PCB FR4 Dual Layer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold">·</span>
                <span><strong>Transceiver:</strong> LoRa E220-400T22D (915 MHz) + Antena Omnidirectional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold">·</span>
                <span><strong>Display:</strong> LCD 20x4 I2C Telemetri + Buzzer Notifikasi Ambang Batas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F58220] font-bold">·</span>
                <span><strong>Sinkronisasi:</strong> Bluetooth Low Energy (BLE) ke Ponsel</span>
              </li>
            </ul>
          </Reveal>

          {/* Node 3 */}
          <Reveal delay={0.3} className="p-8 rounded-3xl bg-[#0F2E1B]/80 border border-[#38BDF8]/20 relative">
            <div className="flex items-center gap-3 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>Antarmuka Pengguna</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Mobile App Android</h3>
            <p className="text-xs text-[#A3C2AF] mb-6">
              Pusat analitik dan rekomendasi remediasi instan di genggaman petani.
            </p>
            <ul className="space-y-3 text-xs text-[#F4F8F5]">
              <li className="flex items-start gap-2">
                <span className="text-[#38BDF8] font-bold">·</span>
                <span><strong>Dashboard:</strong> Speedometer Health Score &amp; Status 7 Parameter Real-Time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38BDF8] font-bold">·</span>
                <span><strong>AI Asisten:</strong> Tanya Bimo (Agronomist Cerdas Terkalibrasi BPTP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38BDF8] font-bold">·</span>
                <span><strong>Gamifikasi:</strong> Misi Harian Remediasi, Leveling &amp; Poin XP Petani</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38BDF8] font-bold">·</span>
                <span><strong>Kalibrasi:</strong> Kalibrasi Spasial 3 Titik Lapangan Berbasis GPS</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Real Hardware Artifacts Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.2} className="rounded-3xl bg-[#0F2E1B]/50 border border-[#A7C7B5]/15 p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
              <Image
                src="/assets/sensor-node.png"
                alt="Sensor Node Lapangan Flood2Food"
                fill
                className="object-contain p-2"
                sizes="176px"
              />
            </div>
            <div>
              <span className="font-mono text-xs text-[#22C55E]">Modul Hardware Lapangan</span>
              <h4 className="font-display font-bold text-lg text-white mt-1">Sensor Node 7-in-1 Berpelindung IP68</h4>
              <p className="text-xs text-[#A3C2AF] mt-2 leading-relaxed">
                Dilengkapi box enclosure kedap air, konektor GX16 aviation, dan sensor stainless steel antikorosi yang diuji rendam 14 hari tanpa oksidasi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="rounded-3xl bg-[#0F2E1B]/50 border border-[#A7C7B5]/15 p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
              <Image
                src="/assets/gateway.png"
                alt="Gateway Portabel Flood2Food"
                fill
                className="object-contain p-2"
                sizes="176px"
              />
            </div>
            <div>
              <span className="font-mono text-xs text-[#F58220]">Modul Hardware Penerima</span>
              <h4 className="font-display font-bold text-lg text-white mt-1">Gateway Portabel &amp; BLE Bridge</h4>
              <p className="text-xs text-[#A3C2AF] mt-2 leading-relaxed">
                Unit mandiri dengan layar LCD 20x4 dan slot microSD logging untuk pencadangan data offline saat ponsel petani tidak terhubung.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

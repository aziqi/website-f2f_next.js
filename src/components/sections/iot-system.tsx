"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Cpu, Radio, Smartphone, Zap, Activity, Terminal, ArrowRight, ShieldCheck } from "lucide-react";

const SIMULATED_PACKETS = [
  {
    node: "F2F-NODE-01",
    time: "21:14:02.104",
    freq: "915.00 MHz",
    payload: "pH:5.24 · N:142 · P:18 · K:211 · EC:890 · MC:74.2% · ST:29.3°C",
    rssi: "-82 dBm",
    snr: "+8.5 dB",
    crc: "0x9E21A4F1 (VALID)",
  },
  {
    node: "F2F-NODE-01",
    time: "21:14:04.608",
    freq: "915.00 MHz",
    payload: "pH:5.22 · N:141 · P:18 · K:210 · EC:892 · MC:74.0% · ST:29.4°C",
    rssi: "-81 dBm",
    snr: "+8.8 dB",
    crc: "0x8F44C102 (VALID)",
  },
  {
    node: "F2F-NODE-01",
    time: "21:14:07.112",
    freq: "915.00 MHz",
    payload: "pH:5.23 · N:143 · P:19 · K:212 · EC:889 · MC:74.5% · ST:29.2°C",
    rssi: "-83 dBm",
    snr: "+8.2 dB",
    crc: "0x3C10E89A (VALID)",
  },
];

export function IotSystem() {
  const [activePacketIndex, setActivePacketIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePacketIndex((prev) => (prev + 1) % SIMULATED_PACKETS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentPacket = SIMULATED_PACKETS[activePacketIndex];

  return (
    <section id="sistem" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0B2416] to-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Rekayasa Ketahanan IoT & Hardware</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Satu Ekosistem Cerdas, Nol Ketergantungan Sinyal Seluler
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Arsitektur telemetri terdistribusi yang dirancang beroperasi 24/7 di tengah sawah dan kawasan
            pedesaan tanpa jaringan seluler (<em>blank spot</em>) melalui integrasi daya surya mandiri dan frekuensi radio LoRa 915 MHz.
          </p>
        </Reveal>

        {/* 3-Node Connected Architecture Grid */}
        <div className="relative mb-12">
          {/* Animated Desktop Connector Lines */}
          <div className="hidden lg:block absolute top-[110px] left-[28%] w-[13%] border-t-2 border-dashed border-[#22C55E]/40 z-20 pointer-events-none">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#081A10] border border-[#22C55E]/30 text-[9px] font-mono text-[#22C55E] whitespace-nowrap">
              LoRa 915MHz · 10.64km
            </div>
            <div className="w-2 h-2 rounded-full bg-[#22C55E] absolute -top-[5px] animate-[ping_2s_infinite]" />
          </div>

          <div className="hidden lg:block absolute top-[110px] right-[28%] w-[13%] border-t-2 border-dashed border-[#F58220]/40 z-20 pointer-events-none">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#081A10] border border-[#F58220]/30 text-[9px] font-mono text-[#F58220] whitespace-nowrap">
              BLE 5.0 Local Sync
            </div>
            <div className="w-2 h-2 rounded-full bg-[#F58220] absolute -top-[5px] right-0 animate-[ping_2s_infinite_0.5s]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {/* Node 1: Sensor Node Lapangan */}
            <Reveal delay={0.15} className="bezel-shell relative group">
              <div className="bezel-core p-6 sm:p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-xs font-mono font-bold text-[#22C55E]">
                      01 / Node Lapangan
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-2">Sensor Node 7-in-1</h3>
                  <p className="text-xs text-[#A3C2AF] mb-5 leading-relaxed">
                    Tertanam langsung di lahan sawah pascabanjir, bekerja mandiri 24/7 dengan catu daya panel surya.
                  </p>

                  {/* Technical Spec Matrix (Anti-Slop: No generic checkmarks) */}
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Interface Bus</div>
                      <div className="text-white font-semibold mt-0.5">RS485 Modbus</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Material Probe</div>
                      <div className="text-[#22C55E] font-semibold mt-0.5">SS316L Heavy</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Mikrokontroler</div>
                      <div className="text-white font-semibold mt-0.5">ESP32 Dual-Core</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Catu Daya</div>
                      <div className="text-[#F58220] font-semibold mt-0.5">10Wp + LiFePO4</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                    <span>Konektor Industri</span>
                    <span className="text-[#22C55E] font-semibold">GX16 Aviation 4-Pin</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Node 2: Gateway Portabel */}
            <Reveal delay={0.25} className="bezel-shell relative group">
              <div className="bezel-core p-6 sm:p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-xs font-mono font-bold text-[#F58220]">
                      02 / Base Station
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center text-[#F58220]">
                      <Radio className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-2">Gateway Portabel</h3>
                  <p className="text-xs text-[#A3C2AF] mb-5 leading-relaxed">
                    Ditempatkan di rumah kelompok tani, menangkap transmisi radio LoRa hingga radius 10,64 km LoS.
                  </p>

                  {/* Technical Spec Matrix */}
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">RF Transceiver</div>
                      <div className="text-[#F58220] font-semibold mt-0.5">SX1262 915MHz</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">RF Output Power</div>
                      <div className="text-white font-semibold mt-0.5">+22 dBm High</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Papan Sirkuit</div>
                      <div className="text-white font-semibold mt-0.5">FR4 Dual-Layer</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Backup Storage</div>
                      <div className="text-[#22C55E] font-semibold mt-0.5">MicroSD FAT32</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                    <span>Output Visual / Audio</span>
                    <span className="text-[#F58220] font-semibold">LCD 20x4 + Buzzer</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Node 3: Mobile App & AI */}
            <Reveal delay={0.35} className="bezel-shell relative group">
              <div className="bezel-core p-6 sm:p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-xs font-mono font-bold text-[#38BDF8]">
                      03 / On-Device AI
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                      <Smartphone className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-2">Aplikasi Mobile AI</h3>
                  <p className="text-xs text-[#A3C2AF] mb-5 leading-relaxed">
                    Pusat inferensi remediasi di genggaman petani yang berjalan 100% lokal tanpa pulsa data.
                  </p>

                  {/* Technical Spec Matrix */}
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Mesin AI</div>
                      <div className="text-[#38BDF8] font-semibold mt-0.5">Tanya Bimo Edge</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Basis Pengetahuan</div>
                      <div className="text-white font-semibold mt-0.5">Formula BPTP RI</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Kalkulasi Dosis</div>
                      <div className="text-[#22C55E] font-semibold mt-0.5">Dolomit & NPK</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">Protokol Sync</div>
                      <div className="text-white font-semibold mt-0.5">BLE GATT Server</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A3C2AF]">
                    <span>Target Latensi Inferensi</span>
                    <span className="text-[#38BDF8] font-semibold">&lt; 2.0 Detik Offline</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Live Telemetry Simulation Terminal Card */}
        <Reveal delay={0.4} className="mb-16">
          <div className="rounded-2xl bg-[#05130A] border border-[#22C55E]/30 overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-black/60 border-b border-[#22C55E]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex items-center gap-2 ml-3 font-mono text-xs text-[#A3C2AF]">
                  <Terminal className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>LoRa Radio Telemetry Console · 915 MHz Channel 0</span>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[#22C55E] uppercase tracking-wider font-semibold">RX REALTIME</span>
              </div>
            </div>

            <div className="p-5 font-mono text-xs text-[#F4F8F5] space-y-2 overflow-x-auto">
              <div className="text-[#A3C2AF]/60 text-[11px]">
                # Baudrate: 9600 bps | Spreading Factor: SF9 | Bandwidth: 125 kHz | Coding Rate: 4/5
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[#F58220] font-bold">[{currentPacket.node}]</span>{" "}
                  <span className="text-[#A3C2AF]/80">{currentPacket.time}</span>{" "}
                  <span className="text-[#22C55E] font-semibold">{currentPacket.payload}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#A3C2AF] shrink-0 font-semibold">
                  <span>RSSI: {currentPacket.rssi}</span>
                  <span>SNR: {currentPacket.snr}</span>
                  <span className="text-[#22C55E]">{currentPacket.crc}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#A3C2AF]/60 pt-1">
                <span>Simulasi transmisi paket data LoRa setiap 2.500 ms</span>
                <span>Enkripsi Frame: AES-128 Payload Protected</span>
              </div>
            </div>
          </div>
        </Reveal>

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


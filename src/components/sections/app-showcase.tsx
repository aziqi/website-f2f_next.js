"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Smartphone, LayoutDashboard, CheckSquare, MessageSquare, Bluetooth, MapPin, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const screens = [
  {
    id: "dashboard",
    title: "Dashboard Telemetri",
    subtitle: "Health Score & 7 Parameter Live",
    icon: LayoutDashboard,
    image: "/assets/screens/02_dashboard_screen.png",
    description:
      "Tampilan komprehensif indikator kesehatan tanah sawah pascabanjir lengkap dengan grafik tren real-time, status koneksi LoRa, dan alert darurat.",
  },
  {
    id: "tasks",
    title: "Misi Harian & Gamifikasi",
    subtitle: "Poin XP & Leveling Petani",
    icon: CheckSquare,
    image: "/assets/screens/03_tasks_screen.png",
    description:
      "Gamifikasi interaktif memandu petani langkah demi langkah: mulai dari penaburan kapur dolomit, drainase macak-macak, hingga pencucian garam berlebih.",
  },
  {
    id: "chat",
    title: "AI Tanya Bimo",
    subtitle: "Agronomist Cerdas di Saku Anda",
    icon: MessageSquare,
    image: "/assets/screens/04_chat_screen.png",
    description:
      "Konsultasi cerdas dua arah berbasis model AI agronomi lokal. Menjawab pertanyaan seputar dosis pupuk spesifik petak sawah dan gejala defisiensi tanaman.",
  },
  {
    id: "log",
    title: "Log Data Sensor",
    subtitle: "Riwayat & Ekspor CSV",
    icon: Database,
    image: "/assets/screens/06_sensor_log_screen.png",
    description:
      "Pencatatan riwayat telemetri otomatis per 15 menit dengan opsi ekspor format CSV untuk keperluan validasi ilmiah maupun laporan kelompok tani.",
  },
  {
    id: "ble",
    title: "Koneksi BLE Gateway",
    subtitle: "Sinkronisasi Tanpa Internet",
    icon: Bluetooth,
    image: "/assets/screens/07_bluetooth_scan_screen.png",
    description:
      "Pemasangan cepat satu sentuhan ke Gateway Portabel menggunakan Bluetooth Low Energy (BLE) hemat daya.",
  },
  {
    id: "spatial",
    title: "Kalibrasi Spasial",
    subtitle: "Pemetaan 3 Titik Petak",
    icon: MapPin,
    image: "/assets/screens/10_spatial_calibration_screen.png",
    description:
      "Algoritma interpolasi spasial menggabungkan pembacaan 3 titik sensor di pematang berbeda untuk mendapatkan akurasi rata-rata seluruh petak sawah.",
  },
];

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeScreen = screens[activeTab];

  return (
    <section id="tampilan" className="relative py-10 sm:py-20 lg:py-32 border-b border-[#A7C7B5]/10 bg-[#081A10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono tracking-wide mb-3 sm:mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Tampilan Aplikasi Mobile Android</span>
          </div>
          <h2 className="font-display font-bold text-xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Antarmuka Ramah Petani dengan Kecerdasan Buatan AI
          </h2>
          <p className="mt-3 sm:mt-5 text-xs sm:text-lg text-[#A3C2AF] leading-relaxed">
            Didesain intuitif dengan bahasa Indonesia sederhana, tipografi kontras tinggi untuk penggunaan di bawah sinar matahari sawah,
            dan kalkulator dosis presisi yang beroperasi tanpa sinyal internet.
          </p>
        </Reveal>

        {/* Mobile Screen Experience (< 1024px) */}
        <div className="lg:hidden">
          {/* Horizontal Thumb Scroller Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 -mx-4 px-4">
            {screens.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-mono font-semibold flex items-center gap-2 shrink-0 transition-all ${
                    isActive
                      ? "bg-[#22C55E] text-[#081A10] shadow-md shadow-[#22C55E]/20"
                      : "bg-[#0F2E1B] text-[#A3C2AF] border border-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Centered Phone Preview for Mobile */}
          <div className="flex flex-col items-center">
            <div className="relative w-[190px] sm:w-[260px] mb-6">
              <div className="absolute inset-0 bg-[#22C55E]/15 rounded-[40px] blur-2xl transform scale-95" />
              <div className="relative rounded-[40px] border-[8px] border-[#13261b] bg-black overflow-hidden shadow-2xl shadow-black/90 ring-1 ring-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full aspect-[9/19.5]"
                  >
                    <Image
                      src={activeScreen.image}
                      alt={activeScreen.title}
                      fill
                      className="object-cover"
                      sizes="290px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Screen Experience (≥ 1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center">
          {/* Left: Tab Selectors */}
          <Reveal delay={0.1} className="lg:col-span-7 space-y-3">
            {screens.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? "bg-[#0F2E1B] border-[#22C55E]/50 shadow-xl shadow-black/40 ring-1 ring-[#22C55E]/20"
                      : "bg-[#0F2E1B]/30 border-white/5 hover:bg-[#0F2E1B]/60 hover:border-white/10"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? "bg-[#22C55E] text-[#081A10]" : "bg-white/5 text-[#A3C2AF]"
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display font-bold text-base ${isActive ? "text-white" : "text-[#A3C2AF]"}`}>
                        {item.title}
                      </h3>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      )}
                    </div>
                    <div className="text-xs font-mono text-[#F58220] mt-0.5">{item.subtitle}</div>
                    {isActive && (
                      <p className="text-xs text-[#A3C2AF] mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </Reveal>

          {/* Right: Phone Frame Preview */}
          <Reveal delay={0.25} className="lg:col-span-5 flex justify-center">
            <div className="relative w-[300px] sm:w-[320px]">
              <div className="absolute inset-0 bg-[#22C55E]/15 rounded-[44px] blur-2xl transform scale-95" />
              <div className="relative rounded-[44px] border-[10px] border-[#13261b] bg-black overflow-hidden shadow-2xl shadow-black/90 ring-1 ring-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full aspect-[9/19.5]"
                  >
                    <Image
                      src={activeScreen.image}
                      alt={activeScreen.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Status pill under phone */}
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20">
                  {activeScreen.title} · v1.0.0 Release
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

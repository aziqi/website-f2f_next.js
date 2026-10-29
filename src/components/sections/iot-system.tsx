"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import {
  Cpu,
  Radio,
  Smartphone,
  Zap,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Sun,
  Battery,
  Layers,
  Wifi,
  Maximize2,
  X,
  FileText,
  Sliders,
  Volume2,
  Database,
  Bluetooth,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA TELEMETRI & LOGS ---
const SIMULATED_PACKETS = [
  {
    node: "F2F-NODE-01",
    time: "21:14:02.104",
    freq: "915.00 MHz",
    payload: "pH:5.24 · N:142 · P:18 · K:211 · EC:890 · MC:74.2% · ST:29.3°C",
    rawHex: "01 03 0E 02 0C 00 8E 00 12 00 D3 03 7A 02 E6 01 25 A4 F1",
    rssi: "-82 dBm",
    snr: "+8.5 dB",
    crc: "0x9E21A4F1 (VALID)",
  },
  {
    node: "F2F-NODE-01",
    time: "21:14:04.608",
    freq: "915.00 MHz",
    payload: "pH:5.22 · N:141 · P:18 · K:210 · EC:892 · MC:74.0% · ST:29.4°C",
    rawHex: "01 03 0E 02 0A 00 8D 00 12 00 D2 03 7C 02 E4 01 26 C1 02",
    rssi: "-81 dBm",
    snr: "+8.8 dB",
    crc: "0x8F44C102 (VALID)",
  },
  {
    node: "F2F-NODE-01",
    time: "21:14:07.112",
    freq: "915.00 MHz",
    payload: "pH:5.23 · N:143 · P:19 · K:212 · EC:889 · MC:74.5% · ST:29.2°C",
    rawHex: "01 03 0E 02 0B 00 8F 00 13 00 D4 03 79 02 E9 01 24 E8 9A",
    rssi: "-83 dBm",
    snr: "+8.2 dB",
    crc: "0x3C10E89A (VALID)",
  },
];

const CSV_LOG_LINES = [
  "timestamp,node_id,pH,N_mgkg,P_mgkg,K_mgkg,EC_uscm,MC_pct,ST_c,batt_v,rssi_dbm,snr_db,crc",
  "2026-10-29 21:13:30,F2F-NODE-01,5.25,140,18,210,885,74.1,29.2,12.78,-82,+8.4,VALID",
  "2026-10-29 21:13:45,F2F-NODE-01,5.24,142,18,211,890,74.2,29.3,12.77,-82,+8.5,VALID",
  "2026-10-29 21:14:02,F2F-NODE-01,5.24,142,18,211,890,74.2,29.3,12.76,-82,+8.5,VALID",
  "2026-10-29 21:14:04,F2F-NODE-01,5.22,141,18,210,892,74.0,29.4,12.75,-81,+8.8,VALID",
  "2026-10-29 21:14:07,F2F-NODE-01,5.23,143,19,212,889,74.5,29.2,12.74,-83,+8.2,VALID",
];

const BLE_JSON_PAYLOAD = JSON.stringify(
  {
    device_name: "Flood2Food_GW",
    service_uuid: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E",
    protocol: "Nordic UART Service (NUS) · BLE 5.0",
    mtu_bytes: 247,
    packet_seq: 14820,
    timestamp_epoch: 1793301247,
    sensor_telemetry: {
      ph_value: 5.23,
      nitrogen_mg_kg: 143,
      phosphorus_mg_kg: 19,
      potassium_mg_kg: 212,
      electrical_cond_us_cm: 889,
      moisture_pct: 74.5,
      soil_temperature_c: 29.2,
      salinity_mg_l: 445,
    },
    rf_link: {
      rssi_dbm: -82,
      snr_db: 8.5,
      frequency_mhz: 915.0,
      packet_loss_rate_pct: 0.8,
    },
    power_health: {
      node_lifepo4_volts: 12.74,
      gateway_supply_volts: 5.05,
      solar_charge_active: true,
    },
  },
  null,
  2
);

// --- KOMPONEN ANATOMI SENSOR NODE (8 MODUL) ---
interface AnatomyItem {
  id: number;
  pinNumber: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  specs: { label: string; value: string }[];
  hotspot: { top: string; left: string };
}

const SENSOR_NODE_COMPONENTS: AnatomyItem[] = [
  {
    id: 1,
    pinNumber: "01",
    title: "Manajemen Energi Surya Mandiri 24/7",
    badge: "10 Wp + SCC + LiFePO4",
    badgeColor: "text-[#F58220] bg-[#F58220]/10 border-[#F58220]/30",
    desc: "Panel Surya Monokristalin 10 Wp di puncak tiang dipadukan dengan Solar Charge Controller (SCC), baterai LiFePO4 12V 8Ah (dengan proteksi low-voltage cutoff 11,5V), dan Step-Down Buck Converter LM2596 (output presisi 5,0V).",
    specs: [
      { label: "Solar Harvester", value: "Monocrystalline 10 Wp" },
      { label: "Baterai Utama", value: "LiFePO4 12V 8Ah (Cutoff 11.5V)" },
      { label: "Voltage Regulator", value: "LM2596 Step-Down (5.0V)" },
      { label: "Autonomi Baterai", value: "> 5 Hari Mendung Penuh" },
    ],
    hotspot: { top: "60%", left: "47%" },
  },
  {
    id: 2,
    pinNumber: "02",
    title: "Proteksi Mekanik Lapangan IP65",
    badge: "Weatherproof Enclosure",
    badgeColor: "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/30",
    desc: "Tiang penyangga besi kokoh dengan Box Panel Outdoor 20 x 30 x 12 cm standar IP65 kedap debu dan semburan air hujan deras, soket logam Aviation GX16 4-pin, serta Cable Gland PG7 kedap air.",
    specs: [
      { label: "Dimensi Box", value: "20 x 30 x 12 cm (IP65)" },
      { label: "Konektor Sensor", value: "GX16 Aviation 4-Pin Logam" },
      { label: "Proteksi Kabel", value: "Cable Gland PG7 Waterproof" },
      { label: "Mounting Frame", value: "Tiang Besi Galvanis Anti-Karat" },
    ],
    hotspot: { top: "28%", left: "48%" },
  },
  {
    id: 3,
    pinNumber: "03",
    title: "Transceiver Radio Jarak Jauh LoRa",
    badge: "LoRa 915 MHz · 10,64 km",
    badgeColor: "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/30",
    desc: "Modul LoRa E220-900T22D (SX1262) frekuensi 915 MHz via antarmuka UART transparan (pin AUX/M0/M1) dilengkapi antena omnidirectional eksternal high-gain untuk transmisi menembus halangan tanpa kuota seluler.",
    specs: [
      { label: "Modul Radio", value: "E220-900T22D (SX1262)" },
      { label: "Frekuensi Kerja", value: "915 MHz ISM Band" },
      { label: "Daya Pancar", value: "+22 dBm (160 mW)" },
      { label: "Jangkauan Uji", value: "10,64 km Line-of-Sight" },
    ],
    hotspot: { top: "4%", left: "23%" },
  },
  {
    id: 4,
    pinNumber: "04",
    title: "Otak Pemrosesan & PCB Custom FR4",
    badge: "ESP32 Dual-Core · 9x15 cm",
    badgeColor: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    desc: "Mikrokontroler ESP32 Dual-Core (Type-C) terintegrasi pada papan sirkuit cetak PCB FR4 Double-Layer ukuran 9 x 15 cm dengan jalur ground-plane tebal untuk reduksi derau elektromagnetik dan stabilitas tinggi.",
    specs: [
      { label: "MCU", value: "ESP32-WROOM-32 (240 MHz)" },
      { label: "Papan Sirkuit", value: "FR4 Double-Layer 9x15 cm" },
      { label: "Flash / SRAM", value: "4 MB Flash / 520 KB SRAM" },
      { label: "Pemrograman", value: "Native C++ Non-Blocking" },
    ],
    hotspot: { top: "43%", left: "52%" },
  },
  {
    id: 5,
    pinNumber: "05",
    title: "Saklar Daya MOSFET Efisiensi Ekstrem",
    badge: "IRLZ44N Deep Sleep < 1mA",
    badgeColor: "text-[#F58220] bg-[#F58220]/10 border-[#F58220]/30",
    desc: "Pin GPIO ESP32 mengendalikan gate MOSFET IRLZ44N sebagai saklar elektronik pemutus catu daya modul sensor secara total saat tidak melakukan pembacaan, menekan arus konsumsi standby ke level mikroampere.",
    specs: [
      { label: "Komponen Saklar", value: "N-Channel MOSFET IRLZ44N" },
      { label: "Kendali Gate", value: "Logic-Level 3.3V GPIO" },
      { label: "Konsumsi Standby", value: "< 1 mA (Ultra Deep Sleep)" },
      { label: "Duty Cycle", value: "Aktif 15 dtk / Siklus 30 mnt" },
    ],
    hotspot: { top: "52.5%", left: "44%" },
  },
  {
    id: 6,
    pinNumber: "06",
    title: "Bus Komunikasi Industri RS485 & MAX485",
    badge: "Modbus RTU Diferensial",
    badgeColor: "text-[#A3C2AF] bg-white/5 border-white/10",
    desc: "Transmisi sinyal data berdiferensial (A+ / B-) melalui IC transceiver MAX485 dengan protokol industri Modbus RTU standar agrikultur. Pengambilan sampel dijalankan 3 kali per siklus demi konsistensi data tertinggi.",
    specs: [
      { label: "Protokol Bus", value: "Modbus RTU (Baud 9600 8N1)" },
      { label: "Transceiver IC", value: "MAX485 / SP3485 Diferensial" },
      { label: "Redundansi Baca", value: "3x Sampling Median Filter" },
      { label: "Kekebalan Derau", value: "Immune to EMI & Ground Loop" },
    ],
    hotspot: { top: "74%", left: "33%" },
  },
  {
    id: 7,
    pinNumber: "07",
    title: "Redundansi Data Lokal & Waktu Presisi",
    badge: "RTC DS3231 + MicroSD FAT32",
    badgeColor: "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/30",
    desc: "Modul jam mandiri bersuhu terkompensasi RTC DS3231 (I2C) memberi stempel waktu akurat, MicroSD 8 GB (SPI) mencadangkan data telemetri jika terjadi anomali transmisi, serta LCD 20x4 dan Buzzer untuk diagnostik teknis.",
    specs: [
      { label: "RTC Module", value: "DS3231 Precision TCXO (I2C)" },
      { label: "Cadangan Offline", value: "MicroSD 8 GB FAT32 (SPI)" },
      { label: "Antarmuka Lokal", value: "LCD 20x4 Karakter + Buzzer" },
      { label: "Backup Data", value: "Autosave data_npk.csv" },
    ],
    hotspot: { top: "39%", left: "47.4%" },
  },
  {
    id: 8,
    pinNumber: "08",
    title: "Tiang Penyangga Besi & Rangka Dudukan Kokoh",
    badge: "Rangka Baja Galvanis Heavy-Duty",
    badgeColor: "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/30",
    desc: "Rangka struktur baja galvanis kokoh sebagai penopang stasiun sensor di lahan sawah agar tahan terhadap terpaan angin kencang, genangan banjir aktif, dan getaran mekanik lingkungan ekstrem.",
    specs: [
      { label: "Material Rangka", value: "Baja Las Galvanis Tahan Karat" },
      { label: "Ketinggian Tiang", value: "1,5 Meter Bebas Genangan Air" },
      { label: "Dudukan Boks", value: "Bracket Baut Baja Stainless M8" },
      { label: "Stabilitas", value: "Tahan Angin Kencang & Gempa Ringan" },
    ],
    hotspot: { top: "89%", left: "48%" },
  },
];

// --- KOMPONEN ANATOMI GATEWAY (7 MODUL) ---
const GATEWAY_COMPONENTS: AnatomyItem[] = [
  {
    id: 1,
    pinNumber: "01",
    title: "Transceiver Penerima Jarak Jauh LoRa",
    badge: "LoRa 915 MHz · Packet Loss < 1.5%",
    badgeColor: "text-[#F58220] bg-[#F58220]/10 border-[#F58220]/30",
    desc: "Modul penerima LoRa E220-900T22D (SX1262) 915 MHz dengan antena eksternal berkekuatan tinggi. Menangkap paket telemetri dari sawah hingga radius 10,64 km dengan tingkat packet loss di bawah 1,5% pada radius kerja 1-3 km.",
    specs: [
      { label: "Transceiver RF", value: "E220-900T22D High-Sensitivity" },
      { label: "Sensitivitas", value: "-148 dBm LoRa SF9" },
      { label: "Verifikasi Paket", value: "Hardware CRC16 Verification" },
      { label: "Radius Tangkap", value: "Hingga 10,64 km Line-of-Sight" },
    ],
    hotspot: { top: "10%", left: "70%" },
  },
  {
    id: 2,
    pinNumber: "02",
    title: "Arsitektur Inti & Papan Sirkuit FR4",
    badge: "ESP32 Type-C · Box Casing X6",
    badgeColor: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    desc: "Mikrokontroler ESP32 Type-C dengan firmware non-blocking state-machine di atas papan sirkuit PCB FR4 Double-Layer (8 x 12 cm) terlindung di dalam boks casing X6 berdimensi ringkas yang ditempatkan di rumah petani.",
    specs: [
      { label: "Controller", value: "ESP32 Dual-Core (FreeRTOS)" },
      { label: "Papan Sirkuit", value: "PCB FR4 Double-Layer 8x12 cm" },
      { label: "Enclosure", value: "Casing Box X6 Desktop Ergonomic" },
      { label: "Arsitektur FW", value: "Event-Driven Asynchronous" },
    ],
    hotspot: { top: "26%", left: "28%" },
  },
  {
    id: 3,
    pinNumber: "03",
    title: "Visualisasi Mandiri Tanpa Ponsel",
    badge: "Layar LCD 20x4 I2C Blue Backlight",
    badgeColor: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    desc: "Layar LCD 20x4 baris berlatar biru dengan antarmuka modul I2C (PCF8574). Menampilkan nilai 7 parameter tanah terbaru, RSSI, waktu panen, dan status microSD secara instan tanpa petani perlu membuka ponsel.",
    specs: [
      { label: "Tipe Display", value: "LCD Alphanumeric 20x4 Karakter" },
      { label: "Antarmuka Data", value: "I2C Bus (Address 0x27)" },
      { label: "Backlight", value: "High-Contrast Blue & White" },
      { label: "Pembaruan Layar", value: "Realtime tiap paket LoRa diterima" },
    ],
    hotspot: { top: "37%", left: "50%" },
  },
  {
    id: 4,
    pinNumber: "04",
    title: "Kendali Fisik Zero-Lag",
    badge: "Tactile Switch Hardware Interrupt",
    badgeColor: "text-[#A3C2AF] bg-white/5 border-white/10",
    desc: "Tombol navigasi tactile switch berbasis Hardware Interrupt (ISR) dan debouncing internal untuk perpindahan halaman menu LCD yang responsif tanpa jeda, tanpa resiko ghost-touch saat jari petani kotor/basah.",
    specs: [
      { label: "Tombol Navigasi", value: "Industrial Tactile Push-Buttons" },
      { label: "Metode Deteksi", value: "GPIO Hardware External Interrupt" },
      { label: "Debounce", value: "50ms Software Filtering" },
      { label: "Fungsi", value: "Ganti Halaman Info / Mute Buzzer" },
    ],
    hotspot: { top: "53%", left: "50%" },
  },
  {
    id: 5,
    pinNumber: "05",
    title: "Indikator Audio & Alarm Kritis",
    badge: "Passive Buzzer Alert",
    badgeColor: "text-[#F58220] bg-[#F58220]/10 border-[#F58220]/30",
    desc: "Buzzer pasif berfrekuensi ganda yang memberikan bunyi 'bip' pendek sebagai konfirmasi paket LoRa berhasil masuk, dan pola nada peringatan khusus ketika terdeteksi kondisi tanah ekstrem (misal pH < 4,5 atau salinitas tinggi).",
    specs: [
      { label: "Transduser Audio", value: "Electromagnetic Passive Buzzer" },
      { label: "Frekuensi Kerja", value: "2.7 kHz Resonant Frequency" },
      { label: "Pola Bunyi", value: "Single Beep (RX) / Triple (Alert)" },
      { label: "Output Akustik", value: "85 dB pada jarak 10 cm" },
    ],
    hotspot: { top: "63%", left: "32%" },
  },
  {
    id: 6,
    pinNumber: "06",
    title: "Perekam Data Mandiri (Offline Logger)",
    badge: "MicroSD 8GB FAT32 · data_npk.csv",
    badgeColor: "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/30",
    desc: "MicroSD Card Reader (SPI) yang menyimpan seluruh riwayat telemetri, stempel waktu RTC, nilai SNR, RSSI, dan voltase baterai ke dalam berkas data_npk.csv dengan sistem rotasi harian dan proteksi integritas file.",
    specs: [
      { label: "Media Penyimpan", value: "MicroSD Card 8 GB FAT32 (SPI)" },
      { label: "Format File", value: "CSV Standar Agrikultur Terindeks" },
      { label: "Sistem Rotasi", value: "Auto-Split Harian (YYYYMMDD.csv)" },
      { label: "Kapasitas", value: "> 5 Tahun Riwayat Telemetri" },
    ],
    hotspot: { top: "71%", left: "68%" },
  },
  {
    id: 7,
    pinNumber: "07",
    title: "Jembatan BLE 5.0 & Catu Daya DC 5V",
    badge: "Nordic UART Service · 10-15m",
    badgeColor: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    desc: "Pemancar Bluetooth Low Energy (BLE 5.0) Nordic UART Service dengan broadcast ID 'Flood2Food_GW' menghubungkan data ke aplikasi Android berjarak 10-15 meter tanpa pulsa, ditenagai adaptor DC 5V 1A hemat energi.",
    specs: [
      { label: "Protokol BLE", value: "BLE 5.0 Nordic UART Service (NUS)" },
      { label: "Nama Perangkat", value: "Flood2Food_GW" },
      { label: "Radius BLE", value: "10-15 Meter di dalam Rumah" },
      { label: "Catu Daya", value: "Adaptor DC 5V 1A (USB-C / Jack DC)" },
    ],
    hotspot: { top: "84%", left: "50%" },
  },
];

export function IotSystem() {
  const [activePacketIndex, setActivePacketIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"lora" | "csv" | "ble">("lora");
  const [activeNodeHotspot, setActiveNodeHotspot] = useState<number>(1);
  const [activeGatewayHotspot, setActiveGatewayHotspot] = useState<number>(1);
  const [lightboxData, setLightboxData] = useState<{
    src: string;
    title: string;
    subtitle: string;
    type: "node" | "gateway";
  } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePacketIndex((prev) => (prev + 1) % SIMULATED_PACKETS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Handle ESC key for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxData(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentPacket = SIMULATED_PACKETS[activePacketIndex];

  return (
    <section
      id="sistem"
      className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0B2416] to-[#081A10] overflow-hidden"
    >
      {/* Background Decorative Mesh & Radial Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#22C55E]/05 rounded-full blur-[140px]" />
        <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-[#F58220]/05 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Rekayasa Ketahanan IoT &amp; Hardware</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Satu Ekosistem Cerdas, Nol Ketergantungan Sinyal Seluler
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Arsitektur telemetri terdistribusi yang dirancang beroperasi 24/7 di tengah sawah dan kawasan pedesaan tanpa
            jaringan seluler (<em>blank spot</em>) melalui integrasi daya surya mandiri dan frekuensi radio LoRa 915 MHz.
          </p>
        </Reveal>

        {/* STEP 2: DEDICATED SIGNAL PIPELINE HEADER BAR (FIX OVERLAPPING BADGES) */}
        <Reveal delay={0.1} className="mb-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#05130A] border border-[#22C55E]/25 shadow-xl relative overflow-hidden">
            {/* Ambient Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#22C55E08_1px,transparent_1px),linear-gradient(to_bottom,#22C55E08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Stage 1: Sensor Node */}
              <div className="flex items-center gap-3 w-full lg:w-auto p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] shrink-0 font-mono font-bold text-xs">
                  01
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#22C55E] font-semibold">
                    Stasiun Lapangan Sawah
                  </div>
                  <div className="text-white font-display font-bold text-sm">Sensor Node 7-in-1</div>
                </div>
              </div>

              {/* Data Link 1: LoRa Long-Range */}
              <div className="flex-1 flex flex-col items-center justify-center w-full px-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                  <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[10px] font-mono font-bold text-[#22C55E] tracking-tight">
                    LoRa E220-900T22D · 915 MHz · 10,64 km LoS
                  </span>
                </div>
                {/* Traveling Pulse Line */}
                <div className="relative w-full h-[2px] bg-gradient-to-r from-[#22C55E]/20 via-[#22C55E] to-[#F58220]/20 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent"
                    animate={{ left: ["-20%", "120%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="text-[9px] font-mono text-[#A3C2AF]/60 mt-1">Transmisi Radio RF Tanpa Pulsa Seluler</div>
              </div>

              {/* Stage 2: Gateway Portabel */}
              <div className="flex items-center gap-3 w-full lg:w-auto p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#F58220]/20 border border-[#F58220]/40 flex items-center justify-center text-[#F58220] shrink-0 font-mono font-bold text-xs">
                  02
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#F58220] font-semibold">
                    Pusat Penerima Petani
                  </div>
                  <div className="text-white font-display font-bold text-sm">Gateway &amp; SD Logger</div>
                </div>
              </div>

              {/* Data Link 2: BLE Sync */}
              <div className="flex-1 flex flex-col items-center justify-center w-full px-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                  <span className="px-2.5 py-0.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[10px] font-mono font-bold text-[#38BDF8] tracking-tight">
                    BLE 5.0 Nordic UART · 10-15m
                  </span>
                </div>
                {/* Traveling Pulse Line */}
                <div className="relative w-full h-[2px] bg-gradient-to-r from-[#F58220]/20 via-[#38BDF8] to-[#38BDF8]/20 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent"
                    animate={{ left: ["-20%", "120%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                </div>
                <div className="text-[9px] font-mono text-[#A3C2AF]/60 mt-1">Sinkronisasi Lokal Nirkabel Instan</div>
              </div>

              {/* Stage 3: Mobile App AI */}
              <div className="flex items-center gap-3 w-full lg:w-auto p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0 font-mono font-bold text-xs">
                  03
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">
                    Inferensi Cerdas Petani
                  </div>
                  <div className="text-white font-display font-bold text-sm">Aplikasi Tanya Bimo</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3-Node Connected Architecture Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {/* Card 1: Node Lapangan */}
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
                  Tertanam langsung di lahan sawah pascabanjir, bekerja mandiri 24/7 dengan catu daya panel surya dan
                  baterai LiFePO4.
                </p>

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

          {/* Card 2: Gateway Portabel */}
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
                  Ditempatkan di rumah kelompok tani, menangkap transmisi radio LoRa hingga radius 10,64 km LoS tanpa
                  jeda.
                </p>

                <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-[#A3C2AF]/60 uppercase text-[9px] tracking-wider">RF Transceiver</div>
                    <div className="text-[#F58220] font-semibold mt-0.5">E220 915MHz</div>
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

          {/* Card 3: Mobile App & AI */}
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
                  Pusat inferensi remediasi di genggaman petani yang berjalan 100% lokal tanpa pulsa data melalui model
                  Tanya Bimo.
                </p>

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
                    <div className="text-[#22C55E] font-semibold mt-0.5">Dolomit &amp; NPK</div>
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

        {/* ========================================================================= */}
        {/* STEP 3 - SHOWCASE A: SENSOR NODE 7-IN-1 (FULL-WIDTH BENTO DECK)            */}
        {/* ========================================================================= */}
        <Reveal delay={0.2} className="mb-24">
          <div className="rounded-3xl bg-[#05130A] border border-[#22C55E]/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Top Deck Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#22C55E]/20 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-xs font-mono font-bold text-[#22C55E] mb-2">
                  <span>SHOWCASE A · STASIUN LAPANGAN SAWAH</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Anatomi Lengkap Sensor Node 7-in-1
                </h3>
                <p className="text-xs sm:text-sm text-[#A3C2AF] mt-1">
                  Inspeksi 8 modul perangkat keras mandiri energi surya dan probe tanah tahan korosi lumpur 14 hari.
                </p>
              </div>

              {/* Quick Info Badge */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxData({
                      src: "/assets/sensor-node-clean.png",
                      title: "Sensor Node 7-in-1 Stasiun Lapangan",
                      subtitle: "Pintu Boks Terbuka: Layar LCD Biru, PCB ESP32 Type-C, Modul LoRa, Baterai LiFePO4, & Soket GX16",
                      type: "node",
                    })
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#22C55E]/15 hover:bg-[#22C55E]/25 text-[#22C55E] border border-[#22C55E]/30 text-xs font-mono font-bold transition-all"
                  title="Klik untuk membuka Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspeksi High-Res</span>
                </button>
              </div>
            </div>

            {/* 12-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left 5 Cols: Massive Sensor Node Photo Pedestal with Interactive Hotspots */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[560px] rounded-2xl bg-gradient-to-b from-black/80 via-[#0A2216]/60 to-black/90 border border-[#22C55E]/20 flex items-center justify-center p-6 overflow-hidden group">
                  {/* Radial Spotlight Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#22C55E]/25 via-[#22C55E]/05 to-transparent pointer-events-none" />

                  {/* Blueprint Grid Lines Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e0a_1px,transparent_1px),linear-gradient(to_bottom,#22c55e0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                  {/* High-Res Image with Gentle Floating Animation */}
                  <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[520px] flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="/assets/sensor-node-clean.png"
                        alt="Sensor Node Lapangan Flood2Food Bersih Transparan"
                        fill
                        className="object-contain drop-shadow-[0_25px_50px_rgba(34,197,94,0.22)] select-none cursor-pointer"
                        sizes="(max-width: 1024px) 100vw, 420px"
                        priority
                        onClick={() =>
                          setLightboxData({
                            src: "/assets/sensor-node-clean.png",
                            title: "Sensor Node 7-in-1 Stasiun Lapangan",
                            subtitle: "Pintu Boks Terbuka: Layar LCD Biru, PCB ESP32 Type-C, Modul LoRa, Baterai LiFePO4, & Soket GX16",
                            type: "node",
                          })
                        }
                      />
                    </motion.div>
                  </div>

                  {/* Click to Expand Prompt */}
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#A3C2AF]/70 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 pointer-events-none">
                    <Maximize2 className="w-3 h-3 text-[#22C55E]" />
                    <span>Klik foto untuk Fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Detailed Component Anatomy Grid (8 Modules) */}
              <div className="lg:col-span-7">
                {/* Desktop/Tablet Grid View */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-3.5">
                  {SENSOR_NODE_COMPONENTS.map((comp) => {
                    const isActive = activeNodeHotspot === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setActiveNodeHotspot(comp.id)}
                        className={`p-4 rounded-xl cursor-pointer transition-all border ${
                          isActive
                            ? "bg-[#0A2616] border-[#22C55E] shadow-lg shadow-[#22C55E]/15 scale-[1.01]"
                            : "bg-black/40 border-white/5 hover:border-[#22C55E]/30 hover:bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                              isActive ? "bg-[#22C55E] text-[#081A10]" : "bg-white/10 text-[#22C55E]"
                            }`}
                          >
                            {comp.pinNumber}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${comp.badgeColor}`}>
                            {comp.badge}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-sm text-white mb-1.5">{comp.title}</h4>
                        <p className="text-[11px] text-[#A3C2AF] leading-relaxed mb-3 line-clamp-3">{comp.desc}</p>

                        {/* Specs Mini Table */}
                        <div className="space-y-1 pt-2 border-t border-white/5 font-mono text-[10px]">
                          {comp.specs.slice(0, 2).map((s, idx) => (
                            <div key={idx} className="flex justify-between text-[#A3C2AF]">
                              <span className="text-[#A3C2AF]/60">{s.label}:</span>
                              <span className="text-white font-semibold">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Horizontal Swipeable Carousel */}
                <div className="sm:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pt-1 scrollbar-thin">
                  {SENSOR_NODE_COMPONENTS.map((comp) => {
                    const isActive = activeNodeHotspot === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setActiveNodeHotspot(comp.id)}
                        className={`min-w-[270px] max-w-[280px] snap-center p-4 rounded-xl border shrink-0 transition-all ${
                          isActive
                            ? "bg-[#0A2616] border-[#22C55E] shadow-md shadow-[#22C55E]/15"
                            : "bg-black/50 border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                              isActive ? "bg-[#22C55E] text-[#081A10]" : "bg-white/10 text-[#22C55E]"
                            }`}
                          >
                            {comp.pinNumber}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${comp.badgeColor}`}>
                            {comp.badge}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-sm text-white mb-1">{comp.title}</h4>
                        <p className="text-[11px] text-[#A3C2AF] leading-relaxed mb-2.5">{comp.desc}</p>

                        <div className="space-y-1 pt-2 border-t border-white/5 font-mono text-[10px]">
                          {comp.specs.map((s, idx) => (
                            <div key={idx} className="flex justify-between text-[#A3C2AF]">
                              <span className="text-[#A3C2AF]/60">{s.label}:</span>
                              <span className="text-white font-semibold">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Highlight Focus Detail Card */}
                {(() => {
                  const activeComp = SENSOR_NODE_COMPONENTS.find((c) => c.id === activeNodeHotspot);
                  if (!activeComp) return null;
                  return (
                    <div className="mt-4 p-4 rounded-xl bg-black/60 border border-[#22C55E]/30 font-mono text-xs text-[#A3C2AF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[#22C55E] font-bold">Fokus Modul {activeComp.pinNumber}:</span>{" "}
                        <span className="text-white font-semibold">{activeComp.title}</span> — {activeComp.specs[0].label}:{" "}
                        <span className="text-[#22C55E]">{activeComp.specs[0].value}</span>
                      </div>
                      <span className="text-[10px] text-[#A3C2AF]/60 shrink-0">Status: Operasional 24/7 Terverifikasi</span>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* STEP 3 - SHOWCASE B: GATEWAY PORTABEL & BLE BRIDGE (FULL-WIDTH BENTO DECK) */}
        {/* ========================================================================= */}
        <Reveal delay={0.25} className="mb-24">
          <div className="rounded-3xl bg-[#05130A] border border-[#F58220]/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Top Deck Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#F58220]/20 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-xs font-mono font-bold text-[#F58220] mb-2">
                  <span>SHOWCASE B · STASIUN PENERIMA DI RUMAH PETANI</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Anatomi Gateway Portabel &amp; BLE Bridge
                </h3>
                <p className="text-xs sm:text-sm text-[#A3C2AF] mt-1">
                  Pusat penerima radio LoRa 10,64 km, LCD 20x4 tanpa ponsel, offline SD logger, dan BLE 5.0 Nordic UART.
                </p>
              </div>

              {/* Quick Info Badge */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxData({
                      src: "/assets/gateway-clean.png",
                      title: "Gateway Portabel & BLE Bridge",
                      subtitle: "Layar LCD 20x4 I2C Blue Backlight, Tombol Navigasi Taktil, Antena LoRa 915 MHz, & BLE 5.0",
                      type: "gateway",
                    })
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F58220]/15 hover:bg-[#F58220]/25 text-[#F58220] border border-[#F58220]/30 text-xs font-mono font-bold transition-all"
                  title="Klik untuk membuka Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspeksi High-Res</span>
                </button>
              </div>
            </div>

            {/* 12-Column Grid (Desktop Alternating: Left 7 cols cards, Right 5 cols photo) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left 7 Cols on Desktop: Component Anatomy Grid (7 Modules) */}
              <div className="order-2 lg:order-1 lg:col-span-7">
                {/* Desktop/Tablet Grid View */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-3.5">
                  {GATEWAY_COMPONENTS.map((comp) => {
                    const isActive = activeGatewayHotspot === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setActiveGatewayHotspot(comp.id)}
                        className={`p-4 rounded-xl cursor-pointer transition-all border ${
                          isActive
                            ? "bg-[#25170B] border-[#F58220] shadow-lg shadow-[#F58220]/15 scale-[1.01]"
                            : "bg-black/40 border-white/5 hover:border-[#F58220]/30 hover:bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                              isActive ? "bg-[#F58220] text-[#081A10]" : "bg-white/10 text-[#F58220]"
                            }`}
                          >
                            {comp.pinNumber}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${comp.badgeColor}`}>
                            {comp.badge}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-sm text-white mb-1.5">{comp.title}</h4>
                        <p className="text-[11px] text-[#A3C2AF] leading-relaxed mb-3 line-clamp-3">{comp.desc}</p>

                        {/* Specs Mini Table */}
                        <div className="space-y-1 pt-2 border-t border-white/5 font-mono text-[10px]">
                          {comp.specs.slice(0, 2).map((s, idx) => (
                            <div key={idx} className="flex justify-between text-[#A3C2AF]">
                              <span className="text-[#A3C2AF]/60">{s.label}:</span>
                              <span className="text-white font-semibold">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Horizontal Swipeable Carousel */}
                <div className="sm:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pt-1 scrollbar-thin">
                  {GATEWAY_COMPONENTS.map((comp) => {
                    const isActive = activeGatewayHotspot === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setActiveGatewayHotspot(comp.id)}
                        className={`min-w-[270px] max-w-[280px] snap-center p-4 rounded-xl border shrink-0 transition-all ${
                          isActive
                            ? "bg-[#25170B] border-[#F58220] shadow-md shadow-[#F58220]/15"
                            : "bg-black/50 border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                              isActive ? "bg-[#F58220] text-[#081A10]" : "bg-white/10 text-[#F58220]"
                            }`}
                          >
                            {comp.pinNumber}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${comp.badgeColor}`}>
                            {comp.badge}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-sm text-white mb-1">{comp.title}</h4>
                        <p className="text-[11px] text-[#A3C2AF] leading-relaxed mb-2.5">{comp.desc}</p>

                        <div className="space-y-1 pt-2 border-t border-white/5 font-mono text-[10px]">
                          {comp.specs.map((s, idx) => (
                            <div key={idx} className="flex justify-between text-[#A3C2AF]">
                              <span className="text-[#A3C2AF]/60">{s.label}:</span>
                              <span className="text-white font-semibold">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Highlight Focus Detail Card */}
                {(() => {
                  const activeComp = GATEWAY_COMPONENTS.find((c) => c.id === activeGatewayHotspot);
                  if (!activeComp) return null;
                  return (
                    <div className="mt-4 p-4 rounded-xl bg-black/60 border border-[#F58220]/30 font-mono text-xs text-[#A3C2AF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[#F58220] font-bold">Fokus Modul {activeComp.pinNumber}:</span>{" "}
                        <span className="text-white font-semibold">{activeComp.title}</span> — {activeComp.specs[0].label}:{" "}
                        <span className="text-[#F58220]">{activeComp.specs[0].value}</span>
                      </div>
                      <span className="text-[10px] text-[#A3C2AF]/60 shrink-0">Log Status: MicroSD FAT32 Online</span>
                    </div>
                  );
                })()}
              </div>

              {/* Right 5 Cols on Desktop: Massive Gateway Photo Pedestal with Interactive Hotspots */}
              <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[560px] rounded-2xl bg-gradient-to-b from-black/80 via-[#22160A]/60 to-black/90 border border-[#F58220]/20 flex items-center justify-center p-6 overflow-hidden group">
                  {/* Radial Spotlight Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F58220]/25 via-[#F58220]/05 to-transparent pointer-events-none" />

                  {/* Blueprint Grid Lines Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f582200a_1px,transparent_1px),linear-gradient(to_bottom,#f582200a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                  {/* High-Res Image with Gentle Floating Animation */}
                  <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[500px] flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="/assets/gateway-clean.png"
                        alt="Gateway Portabel Flood2Food Bersih Transparan"
                        fill
                        className="object-contain drop-shadow-[0_25px_50px_rgba(245,130,32,0.22)] select-none cursor-pointer"
                        sizes="(max-width: 1024px) 100vw, 420px"
                        priority
                        onClick={() =>
                          setLightboxData({
                            src: "/assets/gateway-clean.png",
                            title: "Gateway Portabel & BLE Bridge",
                            subtitle: "Layar LCD 20x4 I2C Blue Backlight, Tombol Navigasi Taktil, Antena LoRa 915 MHz, & BLE 5.0",
                            type: "gateway",
                          })
                        }
                      />
                    </motion.div>
                  </div>

                  {/* Click to Expand Prompt */}
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#A3C2AF]/70 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 pointer-events-none">
                    <Maximize2 className="w-3 h-3 text-[#F58220]" />
                    <span>Klik foto untuk Fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* STEP 4: INTERACTIVE TELEMETRY CONSOLE (3 MODES TOGGLE)                     */}
        {/* ========================================================================= */}
        <Reveal delay={0.3} className="mb-12">
          <div className="rounded-2xl bg-[#05130A] border border-[#22C55E]/30 overflow-hidden shadow-2xl">
            {/* Terminal Topbar with Mode Switcher */}
            <div className="px-4 py-3 bg-black/70 border-b border-[#22C55E]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex items-center gap-2 ml-3 font-mono text-xs text-[#A3C2AF]">
                  <Terminal className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span className="font-semibold text-white">Konsol Telemetri Multi-Protokol</span>
                </div>
              </div>

              {/* Protocol Tab Buttons */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("lora")}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === "lora"
                      ? "bg-[#22C55E] text-[#081A10] shadow-sm"
                      : "text-[#A3C2AF] hover:text-white"
                  }`}
                >
                  <Radio className="w-3 h-3" />
                  <span>Live LoRa Frame</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("csv")}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === "csv"
                      ? "bg-[#F58220] text-[#081A10] shadow-sm"
                      : "text-[#A3C2AF] hover:text-white"
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>data_npk.csv</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ble")}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === "ble"
                      ? "bg-[#38BDF8] text-[#081A10] shadow-sm"
                      : "text-[#A3C2AF] hover:text-white"
                  }`}
                >
                  <Bluetooth className="w-3 h-3" />
                  <span>BLE JSON Payload</span>
                </button>
              </div>
            </div>

            {/* Terminal Body Content */}
            <div className="p-5 font-mono text-xs text-[#F4F8F5] min-h-[180px]">
              {/* TAB 1: LIVE LORA FRAME */}
              {activeTab === "lora" && (
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between text-[#A3C2AF]/70 text-[11px] pb-1 border-b border-white/5 gap-2">
                    <span>
                      # Frekuensi: 915.00 MHz | Spreading Factor: SF9 | Bandwidth: 125 kHz | Coding Rate: 4/5
                    </span>
                    <span className="flex items-center gap-1.5 text-[#22C55E] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                      RX REALTIME ACTIVE
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-black/60 border border-white/5 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

                    {/* Raw Hex Modbus Dump */}
                    <div className="pt-2 border-t border-white/5 text-[11px] text-[#A3C2AF]/80">
                      <span className="text-[#38BDF8] font-bold">RAW HEX FRAME:</span>{" "}
                      <span className="font-mono text-white/90 tracking-wider">{currentPacket.rawHex}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-[10px] text-[#A3C2AF]/60 pt-1">
                    <span>Transmisi LoRa interval 2.500 ms · Enkripsi Payload AES-128</span>
                    <span>Modul Transceiver E220-900T22D Line-of-Sight Tested</span>
                  </div>
                </div>
              )}

              {/* TAB 2: CSV SD CARD LOG */}
              {activeTab === "csv" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[#A3C2AF]/70 text-[11px] pb-1 border-b border-white/5">
                    <span># File: /mnt/sdcard/data_npk.csv | File System: FAT32 | Format: UTF-8</span>
                    <span className="text-[#F58220] font-semibold">STORAGE LOGGING ONLINE</span>
                  </div>

                  <div className="p-3 rounded-lg bg-black/60 border border-white/5 overflow-x-auto">
                    <pre className="text-[11px] leading-relaxed text-[#A3C2AF] font-mono">
                      {CSV_LOG_LINES.map((line, idx) => (
                        <div
                          key={idx}
                          className={idx === 0 ? "text-[#38BDF8] font-bold border-b border-white/10 pb-1 mb-1" : "text-white/90"}
                        >
                          {line}
                        </div>
                      ))}
                    </pre>
                  </div>

                  <div className="text-[10px] text-[#A3C2AF]/60 pt-1">
                    Seluruh pembacaan tersimpan permanen di microSD 8 GB sebagai backup offline tanpa ketergantungan server awan.
                  </div>
                </div>
              )}

              {/* TAB 3: BLE JSON PAYLOAD */}
              {activeTab === "ble" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[#A3C2AF]/70 text-[11px] pb-1 border-b border-white/5">
                    <span># Nordic UART Service (NUS) RX/TX Characteristic · MTU: 247 Bytes</span>
                    <span className="text-[#38BDF8] font-semibold">BLE 5.0 GATT BROADCAST</span>
                  </div>

                  <div className="p-3 rounded-lg bg-black/60 border border-white/5 max-h-[220px] overflow-y-auto">
                    <pre className="text-[11px] leading-relaxed text-[#22C55E] font-mono">
                      {BLE_JSON_PAYLOAD}
                    </pre>
                  </div>

                  <div className="text-[10px] text-[#A3C2AF]/60 pt-1">
                    Payload JSON diterima langsung oleh aplikasi Android Tanya Bimo untuk inferensi remediasi lokal seketika (&lt; 2 dtk).
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL (HIGH-RES INSPECTION)                            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxData(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#05130A] border border-[#22C55E]/40 p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxData(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
                aria-label="Tutup Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="w-full text-center mb-4">
                <span className="px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-xs font-mono text-[#22C55E] font-bold">
                  INSPEKSI RESOLUSI TINGGI
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                  {lightboxData.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3C2AF] mt-1">{lightboxData.subtitle}</p>
              </div>

              {/* Large Image Showcase */}
              <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none ${
                    lightboxData.type === "node"
                      ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#22C55E]/20 to-transparent"
                      : "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F58220]/20 to-transparent"
                  }`}
                />
                <Image
                  src={lightboxData.src}
                  alt={lightboxData.title}
                  fill
                  className="object-contain p-2 select-none"
                  sizes="(max-width: 1024px) 90vw, 800px"
                  priority
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="w-full pt-4 mt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A3C2AF] gap-2">
                <span>Tekan tombol ESC atau klik area luar untuk menutup</span>
                <span className="text-[#22C55E] font-semibold">Flood2Food Hardware Engineering · PKM-KC 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

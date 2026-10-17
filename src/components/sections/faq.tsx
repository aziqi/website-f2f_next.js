"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Bagaimana probe sensor 7-in-1 tidak berkarat di lumpur sawah?",
    answer:
      "Probe sensor menggunakan baja tahan karat austenitik (Stainless Steel 316L) berkualifikasi industri agrikultur dengan pelindung resin epoksi berstandar IP68. Pada pengujian rendam lumpur pascabanjir selama 14 hari penuh di Pagar Merbau II, elektroda tidak mengalami oksidasi maupun korosi galvanik.",
  },
  {
    question: "Mengapa memilih transmisi LoRa dibanding seluler GSM atau WiFi?",
    answer:
      "Wilayah persawahan pascabanjir sering mengalami pemadaman BTS atau berada pada blank spot seluler. LoRa (Long Range 915 MHz) beroperasi pada frekuensi sub-GHz mandiri dengan daya pancar rendah (22 dBm) namun mampu menembus jarak uji 10,64 km tanpa biaya pulsa atau kuota data.",
  },
  {
    question: "Berapa lama Sensor Node bertahan jika cuaca mendung berhari-hari?",
    answer:
      "Sistem ditenagai panel surya 10 Wp dan baterai Lithium Besi Fosfat (LiFePO4 12V 8Ah). Dengan mode tidur hemat daya (deep-sleep cycling) di mana ESP32 hanya aktif selama 3 detik setiap interval 15 menit, baterai mampu bertahan hingga 7 hari tanpa sinar matahari.",
  },
  {
    question: "Apakah aplikasi Android bisa berjalan tanpa koneksi internet?",
    answer:
      "Ya, 100% offline-first. Gateway terhubung langsung ke smartphone petani melalui Bluetooth Low Energy (BLE). Seluruh basis pengetahuan agronomi dan kalkulasi dosis remediasi pupuk diproses langsung di perangkat (on-device engine) tanpa memerlukan sinyal internet.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0A2216] to-[#081A10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono tracking-wide mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab Teknis &amp; Agronomi</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C2AF] leading-relaxed">
            Jawaban lengkap seputar ketahanan rekayasa perangkat keras, transmisi nirkabel, dan akurasi model agronomi Flood2Food.
          </p>
        </Reveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={faq.question} delay={idx * 0.08}>
                <div className="rounded-2xl bg-[#0F2E1B]/70 border border-[#A7C7B5]/15 overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#22C55E] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-sm text-[#A3C2AF] leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

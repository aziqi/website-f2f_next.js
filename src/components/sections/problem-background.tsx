"use client";

import { Reveal } from "@/components/motion/reveal";
import {
  AlertTriangle,
  TrendingDown,
  Droplets,
  Thermometer,
  Zap,
  Clock,
  ChevronDown,
} from "lucide-react";

export function ProblemBackground() {
  return (
    <section
      id="latar-belakang"
      className="relative py-10 sm:py-20 lg:py-32 border-b border-[#A7C7B5]/10 bg-gradient-to-b from-[#081A10] via-[#0A2216] to-[#081A10] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Ambient Atmospheric Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#F58220]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#22C55E]/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SUB-BLOK 1: Header Seksi */}
        <Reveal className="max-w-4xl mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] text-xs font-mono tracking-wide mb-3 sm:mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Urgensi Ketahanan Pangan · Data BPS &amp; BNPB 2024</span>
          </div>

          <h2 className="font-display font-bold text-xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Sawah Terendam,{" "}
            <span className="text-[#F58220] drop-shadow-[0_0_25px_rgba(245,130,32,0.35)]">
              Unsur Hara Hilang
            </span>{" "}
            Tak Kasat Mata
          </h2>

          <p className="mt-3 sm:mt-5 text-xs sm:text-lg text-[#A3C2AF] leading-relaxed max-w-3xl">
            Padi menopang ketahanan pangan nasional dengan produksi mencapai{" "}
            <strong className="text-white">53,14 juta ton</strong> dari{" "}
            <strong className="text-white">10,05 juta hektare</strong> lahan panen pada 2024.
            Namun, bencana banjir menjadi ancaman terbesar bagi sektor persawahan di Indonesia.
            Kerusakan berlanjut meskipun air telah surut, meninggalkan kerusakan kimia dan fisik tanah
            yang tidak dapat dilihat oleh mata telanjang.
          </p>
        </Reveal>

        {/* SUB-BLOK 2: Bento Grid 3 Skala Dampak Kerusakan */}
        <Reveal delay={0.1} className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Skala Nasional */}
            <div className="bezel-shell md:col-span-1">
              <div className="bezel-core p-5 sm:p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-[10px] font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    Skala Nasional
                  </span>
                  <p className="font-mono text-4xl sm:text-5xl font-black text-[#F58220] leading-none mb-1">
                    50.469
                  </p>
                  <p className="text-sm text-[#A3C2AF] mb-4">Hektare sawah gagal panen akibat banjir</p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Beban subsidi per hektare</span>
                    <span className="font-mono text-white font-semibold">Rp8 Juta/Ha</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Total produksi padi 2024</span>
                    <span className="font-mono text-white font-semibold">53,14 Juta Ton</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Luas lahan panen nasional</span>
                    <span className="font-mono text-white font-semibold">10,05 Juta Ha</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Skala Regional Sumatera */}
            <div className="bezel-shell md:col-span-1">
              <div className="bezel-core p-5 sm:p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-[10px] font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    Regional Sumatera
                  </span>
                  <p className="font-mono text-4xl sm:text-5xl font-black text-[#38BDF8] leading-none mb-1">
                    89.984
                  </p>
                  <p className="text-sm text-[#A3C2AF] mb-4">Hektare terdampak di Sumatera Utara</p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Sumatera Utara</span>
                    <span className="font-mono text-white font-semibold">89.984 Ha</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Aceh</span>
                    <span className="font-mono text-white font-semibold">54.234 Ha</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Sumatera Barat</span>
                    <span className="font-mono text-white font-semibold">5.754 Ha</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Skala Lokal Deli Serdang (Lokasi Uji Lapangan) */}
            <div className="bezel-shell border-[#F58220]/40 hover:border-[#F58220]/70 md:col-span-1">
              <div className="bezel-core p-5 sm:p-6 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58220]/08 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] text-[10px] font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] animate-pulse" />
                    Lokal · Deli Serdang
                  </span>
                  <p className="font-mono text-4xl sm:text-5xl font-black text-[#F58220] leading-none mb-1">
                    12.231
                  </p>
                  <p className="text-sm text-[#A3C2AF] mb-4">Hektare sawah terendam banjir</p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A3C2AF]">Kerugian komoditas padi</span>
                    <span className="font-mono text-[#F58220] font-semibold">Rp211,06 Miliar</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#A3C2AF]/80 mt-3 pt-2 border-t border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0" />
                    Lokasi pengujian empiris Flood2Food: Desa Pagar Merbau II
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SUB-BLOK 3: Jendela Kritis 14 Hari & Dinamika Kerusakan Tanah */}
        <Reveal delay={0.15} className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* Sisi Kiri: Countdown Urgensi & Narasi */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 text-[#EAB308] text-[10px] font-mono mb-3">
                  <Clock className="w-3 h-3" />
                  Jendela Pemulihan Kritis
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white leading-tight">
                  Air Surut ≠ Masalah Selesai
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#A3C2AF] leading-relaxed">
                  Genangan air dalam waktu lama mengikis lapisan tanah atas, memadatkan permukaan tanah,
                  serta mencuci unsur hara penting seperti Nitrogen, Fosfor, dan Kalium.
                  Petani hanya memiliki waktu krusial:
                </p>
              </div>

              {/* Countdown Pill Display */}
              <div className="bezel-shell w-fit">
                <div className="bezel-core px-6 py-5 flex items-center gap-4">
                  <p className="font-mono text-5xl sm:text-6xl font-black text-[#EAB308] leading-none drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                    14
                  </p>
                  <div>
                    <p className="font-mono text-xs text-[#EAB308] font-bold uppercase tracking-widest">
                      Hari Emas
                    </p>
                    <p className="text-[10px] text-[#A3C2AF] leading-snug mt-0.5">
                      pascasurut untuk<br />
                      memulihkan kondisi tanah<br />
                      sebelum kerusakan akar<br />
                      menjadi permanen.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#A3C2AF]/80 leading-relaxed">
                Proses reduksi biokimia selama banjir berlangsung cepat, meningkatkan keasaman tanah secara tajam
                dan meninggalkan senyawa beracun yang melumpuhkan kemampuan serap akar padi.
              </p>
            </div>

            {/* Sisi Kanan: 4 Bahaya Tak Kasat Mata (2x2 Grid) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Bahaya 1: Erosi Topsoil */}
              <div className="bezel-shell">
                <div className="bezel-core p-4 sm:p-5 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#EAB308]/15 border border-[#EAB308]/30 flex items-center justify-center mb-3">
                    <TrendingDown className="w-4 h-4 text-[#EAB308]" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Erosi Lapisan Atas (Topsoil)
                  </p>
                  <p className="text-[11px] text-[#A3C2AF] leading-relaxed">
                    Arus banjir mengikis lapisan tanah atas yang kaya bahan organik dan mikroorganisme dekomposer aktif.
                  </p>
                </div>
              </div>

              {/* Bahaya 2: Pencucian N-P-K */}
              <div className="bezel-shell">
                <div className="bezel-core p-4 sm:p-5 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center mb-3">
                    <Droplets className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Pencucian Hara (Leaching)
                  </p>
                  <p className="text-[11px] text-[#A3C2AF] leading-relaxed">
                    Unsur makro esensial (Nitrogen, Fosfor, Kalium) larut dan hanyut terbawa massa air limpasan.
                  </p>
                </div>
              </div>

              {/* Bahaya 3: Keasaman & Reduksi */}
              <div className="bezel-shell">
                <div className="bezel-core p-4 sm:p-5 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center mb-3">
                    <Thermometer className="w-4 h-4 text-[#F58220]" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Peningkatan Keasaman Tanah
                  </p>
                  <p className="text-[11px] text-[#A3C2AF] leading-relaxed">
                    Kondisi anaerobik menekan derajat pH tanah hingga sangat masam, mengunci penyerapan fosfat oleh tanaman.
                  </p>
                </div>
              </div>

              {/* Bahaya 4: Senyawa Toksik & Pemadatan */}
              <div className="bezel-shell">
                <div className="bezel-core p-4 sm:p-5 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#EC4899]/15 border border-[#EC4899]/30 flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4 text-[#EC4899]" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Senyawa Racun &amp; Pemadatan
                  </p>
                  <p className="text-[11px] text-[#A3C2AF] leading-relaxed">
                    Permukaan lumpur memadat saat mengering dan akumulasi ion sulfida/besi tereduksi meracuni ujung perakaran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SUB-BLOK 4: Dilema Pemupukan Buta (Blind Fertilization) */}
        <Reveal delay={0.2} className="mb-12 sm:mb-20">
          <div className="bezel-shell border-[#F58220]/50">
            <div className="bezel-core p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#F58220]/08 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#F58220]/15 border border-[#F58220]/40 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-[#F58220]" />
                </div>

                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] text-[10px] font-mono mb-3">
                    Risiko Gagal Panen Susulan
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-xl text-white mb-3 leading-tight">
                    Hilangnya Unsur Hara Tidak Terlihat oleh Mata — Petani Terpaksa Menebak Dosis Pupuk Pemulihan Secara Buta
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C2AF] leading-relaxed mb-5">
                    Sayangnya, hilangnya unsur hara tidak terlihat oleh mata. Petani terpaksa menebak dosis pupuk pemulihan
                    secara buta di tengah mahalnya harga pupuk NPK nonsubsidi yang mencapai{" "}
                    <strong className="text-[#F58220]">Rp800.000 per sak</strong>. Kesalahan takaran pupuk ini berisiko
                    memicu gagal panen susulan dan memperberat kerugian ekonomi petani.
                  </p>

                  {/* Ringkasan Metrik Finansial Petani */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10">
                      <span className="font-mono text-lg font-black text-[#F58220]">Rp800.000</span>
                      <span className="text-[10px] text-[#A3C2AF] leading-tight">
                        per sak NPK<br />nonsubsidi
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10">
                      <span className="font-mono text-lg font-black text-[#EAB308]">0%</span>
                      <span className="text-[10px] text-[#A3C2AF] leading-tight">
                        visibilitas hara<br />tanpa instrumen
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10">
                      <span className="font-mono text-lg font-black text-[#EC4899]">Tinggi</span>
                      <span className="text-[10px] text-[#A3C2AF] leading-tight">
                        risiko gagal panen<br />karena salah dosis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SUB-BLOK 5: Matriks Kesenjangan Solusi Eksisting vs Inovasi Flood2Food */}
        <Reveal delay={0.25} className="mb-10 sm:mb-14">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[10px] font-mono">
              Evaluasi Kesenjangan Teknologi
            </span>
            <h3 className="font-display font-bold text-base sm:text-2xl text-white mt-2">
              Instrumen Ukur Eksisting Belum Mampu Menjawab Kendala Pascabanjir
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Solusi Eksisting 1: PUTS Manual */}
            <div className="bezel-shell opacity-90">
              <div className="bezel-core p-5 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🧪</span>
                    <span className="font-semibold text-sm sm:text-base text-white">
                      PUTS Manual Konvensional
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/30 text-[#EC4899] text-[10px] font-mono">
                    Kurang Efektif
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#A3C2AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899] font-bold shrink-0">✕</span>
                    <span>Memerlukan reagen kimia sekali pakai yang mahal dan terbatas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899] font-bold shrink-0">✕</span>
                    <span>Memakan waktu 30 hingga 60 menit hanya untuk satu kali pengujian titik tanah.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899] font-bold shrink-0">✕</span>
                    <span>Tidak mampu memantau dinamika perubahan hara secara rutin dan kontinu.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solusi Eksisting 2: IoT Komersial Biasa */}
            <div className="bezel-shell opacity-90">
              <div className="bezel-core p-5 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📡</span>
                    <span className="font-semibold text-sm sm:text-base text-white">
                      IoT Pertanian Komersial Biasa
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/30 text-[#EC4899] text-[10px] font-mono">
                    Rentan Rusak
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#A3C2AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899] font-bold shrink-0">✕</span>
                    <span>Sensor resistif biasa cepat korosi dan berkarat saat terendam lumpur asam.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899] font-bold shrink-0">✕</span>
                    <span>Bergantung penuh pada sinyal seluler (GSM) yang sering padam di lokasi bencana.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899] font-bold shrink-0">✕</span>
                    <span>Membutuhkan sumber listrik PLN konvensional yang kerap terputus di persawahan.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solusi Flood2Food — Full-Width Highlighted Card */}
          <div className="bezel-shell border-[#22C55E]/50">
            <div className="bezel-core p-5 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-48 bg-[#22C55E]/08 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">⚡</span>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-lg text-white">
                      Flood2Food — Solusi Mandiri &amp; Tangguh Pascabanjir
                    </h4>
                    <p className="text-[11px] text-[#A3C2AF]">
                      Menjawab seluruh tantangan melalui integrasi rekayasa perangkat keras dan kecerdasan buatan
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#22C55E] text-xs font-mono font-semibold shrink-0">
                  ✓ Teruji di Sawah Nyata
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                <div className="p-3.5 rounded-xl bg-[#22C55E]/08 border border-[#22C55E]/20">
                  <span className="text-xl">🔩</span>
                  <p className="text-xs font-semibold text-white mt-1.5 mb-1">
                    Sensor Fusion 7-in-1
                  </p>
                  <p className="text-[10px] text-[#A3C2AF] leading-relaxed">
                    Baja nirkarat (Stainless Steel 316L) austenitik, tahan korosi lumpur asam pascabanjir.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#22C55E]/08 border border-[#22C55E]/20">
                  <span className="text-xl">📻</span>
                  <p className="text-xs font-semibold text-white mt-1.5 mb-1">
                    Radio LoRa 10,64 km
                  </p>
                  <p className="text-[10px] text-[#A3C2AF] leading-relaxed">
                    Transmisi jarak jauh nirkabel tanpa ketergantungan sinyal internet seluler atau kuota.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#22C55E]/08 border border-[#22C55E]/20">
                  <span className="text-xl">☀️</span>
                  <p className="text-xs font-semibold text-white mt-1.5 mb-1">
                    Sistem Surya Mandiri 24 Jam
                  </p>
                  <p className="text-[10px] text-[#A3C2AF] leading-relaxed">
                    Panel surya terintegrasi dengan baterai LiFePO4, beroperasi otonom tanpa listrik PLN.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#22C55E]/08 border border-[#22C55E]/20">
                  <span className="text-xl">🤖</span>
                  <p className="text-xs font-semibold text-white mt-1.5 mb-1">
                    AI Tanya Bimo Presisi
                  </p>
                  <p className="text-[10px] text-[#A3C2AF] leading-relaxed">
                    Mengolah telemetri tanah otomatis untuk instruksi dosis pupuk pemulihan tepat takaran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Jembatan Konseptual Langsung ke Seksi Video Prototipe Fungsional */}
        <Reveal delay={0.3}>
          <div className="flex flex-col items-center text-center gap-3 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-xs sm:text-base text-[#A3C2AF] max-w-2xl leading-relaxed">
              Bukan sekadar konsep di atas kertas — inovasi ini telah dibuktikan secara empiris langsung
              di lahan persawahan terdampak banjir Desa Pagar Merbau II, Kabupaten Deli Serdang.
            </p>
            <div className="flex items-center gap-2 text-[#22C55E] text-xs font-mono font-semibold animate-bounce mt-1">
              <ChevronDown className="w-4 h-4" />
              <span>Saksikan Demonstrasi Nyata di Video Prototipe Fungsional</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

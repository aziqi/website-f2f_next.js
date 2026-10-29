"use client";

import React from "react";
import { VolumeX, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useBackgroundMusic } from "./background-music-provider";

interface MusicToggleButtonProps {
  variant?: "navbar-pill" | "hero-pill" | "row" | "compact";
  className?: string;
}

export function MusicToggleButton({
  variant = "navbar-pill",
  className = "",
}: MusicToggleButtonProps) {
  const { isPlaying, isLoading, toggleMusic } = useBackgroundMusic();

  // 1. Variant HERO PILL (untuk Hero Section Header, sejajar Download, Instagram, GitHub)
  if (variant === "hero-pill") {
    return (
      <button
        type="button"
        onClick={toggleMusic}
        className={`btn-nested transition-all group ${
          isPlaying
            ? "bg-gradient-to-r from-[#22C55E]/15 via-[#16a34a]/25 to-[#22C55E]/15 hover:from-[#22C55E]/25 hover:to-[#22C55E]/35 text-white border border-[#22C55E]/50 hover:border-[#22C55E]/80 text-sm font-semibold shadow-lg shadow-[#22C55E]/15"
            : "bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-sm font-semibold shadow-lg"
        } ${className}`}
        aria-label={isPlaying ? "Matikan musik latar" : "Putar musik latar"}
        title={isPlaying ? "Matikan Musik Latar" : "Putar Musik Latar (Flood2Food)"}
      >
        <div className="flex items-center gap-2">
          <span>Musik Latar</span>
          <span
            className={`text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded-full border ${
              isPlaying
                ? "bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/40"
                : "bg-white/10 text-white/50 border-white/10"
            }`}
          >
            {isLoading ? "..." : isPlaying ? "ON" : "OFF"}
          </span>
        </div>
        <span
          className={`btn-nested-icon transition-colors ${
            isPlaying
              ? "bg-[#22C55E]/20 group-hover:bg-[#22C55E]/30 text-[#22C55E]"
              : "bg-white/10 group-hover:bg-white/20 text-[#A3C2AF] group-hover:text-white"
          }`}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#22C55E]" />
          ) : isPlaying ? (
            <div className="flex items-end justify-center gap-[2.5px] h-3.5 w-3.5">
              <motion.span
                animate={{ height: ["20%", "85%", "40%", "100%", "20%"] }}
                transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
                className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
              />
              <motion.span
                animate={{ height: ["60%", "25%", "100%", "45%", "60%"] }}
                transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
                className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
              />
              <motion.span
                animate={{ height: ["35%", "100%", "30%", "75%", "35%"] }}
                transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
                className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
              />
              <motion.span
                animate={{ height: ["75%", "30%", "85%", "20%", "75%"] }}
                transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
                className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
              />
            </div>
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </span>
      </button>
    );
  }

  // 2. Variant ROW (untuk Mobile Menu Drawer)
  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={toggleMusic}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
          isPlaying
            ? "bg-[#22C55E]/15 border border-[#22C55E]/40 text-white shadow-[0_0_15px_rgba(34,197,94,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)]"
            : "bg-white/5 hover:bg-white/10 border border-white/10 text-[#A3C2AF] hover:text-white"
        } ${className}`}
        aria-label={isPlaying ? "Matikan musik latar belakang" : "Nyalakan musik latar belakang"}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
              isPlaying
                ? "bg-[#22C55E]/20 text-[#22C55E]"
                : "bg-white/5 text-[#A3C2AF]"
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#22C55E]" />
            ) : isPlaying ? (
              <div className="flex items-end justify-center gap-[2px] h-3 w-3">
                <motion.span
                  animate={{ height: ["20%", "90%", "40%", "100%", "20%"] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E]"
                />
                <motion.span
                  animate={{ height: ["60%", "20%", "100%", "30%", "60%"] }}
                  transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E]"
                />
                <motion.span
                  animate={{ height: ["40%", "100%", "30%", "80%", "40%"] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E]"
                />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-white">Musik Latar</span>
            <span className="text-[10px] text-[#A3C2AF]">Flood2Food Soundtrack</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
              isPlaying
                ? "bg-[#22C55E]/20 border-[#22C55E]/40 text-[#22C55E]"
                : "bg-white/5 border-white/10 text-white/50"
            }`}
          >
            {isLoading ? "Memuat..." : isPlaying ? "Memutar" : "Senyap"}
          </span>
        </div>
      </button>
    );
  }

  // 3. Variant COMPACT (tombol bulat kecil alternatif jika dibutuhkan)
  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggleMusic}
        className={`group relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
          isPlaying
            ? "bg-[#22C55E]/20 hover:bg-[#22C55E]/30 border border-[#22C55E]/50 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]"
            : "bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 text-[#A3C2AF] hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
        } ${className}`}
        aria-label={isPlaying ? "Matikan musik latar belakang" : "Nyalakan musik latar belakang"}
        title={isPlaying ? "Matikan Musik Latar" : "Putar Musik Latar (Flood2Food)"}
      >
        <span className="pointer-events-none absolute inset-x-2 top-0.5 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        {isLoading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#22C55E] relative z-10" />
        ) : isPlaying ? (
          <div className="flex items-end justify-center gap-[2.5px] h-3.5 w-3.5 relative z-10">
            <motion.span
              animate={{ height: ["20%", "85%", "40%", "100%", "20%"] }}
              transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
            />
            <motion.span
              animate={{ height: ["60%", "25%", "100%", "45%", "60%"] }}
              transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
            />
            <motion.span
              animate={{ height: ["35%", "100%", "30%", "75%", "35%"] }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
            />
            <motion.span
              animate={{ height: ["75%", "30%", "85%", "20%", "75%"] }}
              transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
            />
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:scale-110" />
        )}
      </button>
    );
  }

  // 4. Default Variant: NAVBAR PILL (Liquid Glass Capsule Pill untuk Header Navbar)
  return (
    <button
      type="button"
      onClick={toggleMusic}
      className={`group relative h-8 px-2.5 sm:px-3 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 shrink-0 ${
        isPlaying
          ? "bg-[#22C55E]/15 hover:bg-[#22C55E]/25 border border-[#22C55E]/50 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]"
          : "bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 text-[#A3C2AF] hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
      } ${className}`}
      aria-label={isPlaying ? "Matikan musik latar belakang" : "Nyalakan musik latar belakang"}
      title={isPlaying ? "Matikan Musik Latar" : "Putar Musik Latar (Flood2Food)"}
    >
      {/* Specular Glaze Reflection */}
      <span className="pointer-events-none absolute inset-x-2 top-0.5 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Visualizer / Icon */}
      {isLoading ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#22C55E] relative z-10 shrink-0" />
      ) : isPlaying ? (
        <div className="flex items-end justify-center gap-[2px] h-3.5 w-3 relative z-10 shrink-0">
          <motion.span
            animate={{ height: ["20%", "85%", "40%", "100%", "20%"] }}
            transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E]"
          />
          <motion.span
            animate={{ height: ["60%", "25%", "100%", "45%", "60%"] }}
            transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E]"
          />
          <motion.span
            animate={{ height: ["35%", "100%", "30%", "75%", "35%"] }}
            transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E]"
          />
        </div>
      ) : (
        <VolumeX className="w-3.5 h-3.5 relative z-10 shrink-0 transition-transform group-hover:scale-110" />
      )}

      {/* Label Text */}
      <span className="relative z-10 text-[11px] sm:text-xs font-semibold tracking-tight">
        {isLoading ? "Memuat..." : "Musik"}
      </span>

      {/* Status Dot / Indicator */}
      {isPlaying ? (
        <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E] animate-pulse shrink-0" />
      ) : (
        <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
      )}
    </button>
  );
}

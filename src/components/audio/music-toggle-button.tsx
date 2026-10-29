"use client";

import React from "react";
import { VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useBackgroundMusic } from "./background-music-provider";

interface MusicToggleButtonProps {
  variant?: "compact" | "row";
  className?: string;
}

export function MusicToggleButton({
  variant = "compact",
  className = "",
}: MusicToggleButtonProps) {
  const { isPlaying, toggleMusic } = useBackgroundMusic();

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
            {isPlaying ? (
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
            {isPlaying ? "Memutar" : "Senyap"}
          </span>
        </div>
      </button>
    );
  }

  // Variant "compact" untuk Navbar desktop & mobile
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
      title={
        isPlaying
          ? "Matikan Musik Latar (Flood2Food)"
          : "Putar Musik Latar (Flood2Food)"
      }
    >
      {/* Specular Glaze Reflection */}
      <span className="pointer-events-none absolute inset-x-2 top-0.5 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {isPlaying ? (
        // 4-bar sound equalizer animation
        <div className="flex items-end justify-center gap-[2.5px] h-3.5 w-3.5 relative z-10">
          <motion.span
            animate={{ height: ["20%", "85%", "40%", "100%", "20%"] }}
            transition={{
              duration: 0.65,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
          />
          <motion.span
            animate={{ height: ["60%", "25%", "100%", "45%", "60%"] }}
            transition={{
              duration: 0.85,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
          />
          <motion.span
            animate={{ height: ["35%", "100%", "30%", "75%", "35%"] }}
            transition={{
              duration: 0.55,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
          />
          <motion.span
            animate={{ height: ["75%", "30%", "85%", "20%", "75%"] }}
            transition={{
              duration: 0.75,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[2px] bg-[#22C55E] rounded-full shadow-[0_0_5px_#22C55E]"
          />
        </div>
      ) : (
        <VolumeX className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:scale-110" />
      )}
    </button>
  );
}

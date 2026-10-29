"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

interface BackgroundMusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playMusic: () => Promise<void>;
  pauseMusic: () => void;
  hasInteracted: boolean;
}

const BackgroundMusicContext = createContext<BackgroundMusicContextType | null>(null);

const TARGET_VOLUME = 0.35; // Suara latar ambient yang nyaman (35%)
const FADE_INTERVAL_MS = 30; // Interval perubahan volume
const FADE_IN_STEP = TARGET_VOLUME / (1000 / FADE_INTERVAL_MS); // 1 detik fade in
const FADE_OUT_STEP = TARGET_VOLUME / (400 / FADE_INTERVAL_MS); // 400ms fade out
const STORAGE_KEY = "f2f_music_preference";

export function BackgroundMusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const wasPlayingRef = useRef<boolean>(false);

  // Bersihkan timer fade jika sedang berjalan
  const clearFade = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  // Fade In volume audio secara mulus
  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();

    fadeIntervalRef.current = setInterval(() => {
      if (!audio) return clearFade();
      if (audio.volume < TARGET_VOLUME - FADE_IN_STEP) {
        audio.volume = Math.min(TARGET_VOLUME, audio.volume + FADE_IN_STEP);
      } else {
        audio.volume = TARGET_VOLUME;
        clearFade();
      }
    }, FADE_INTERVAL_MS);
  }, [clearFade]);

  // Fade Out volume audio secara mulus lalu pause
  const fadeOutAndPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();

    fadeIntervalRef.current = setInterval(() => {
      if (!audio) return clearFade();
      if (audio.volume > FADE_OUT_STEP) {
        audio.volume = Math.max(0, audio.volume - FADE_OUT_STEP);
      } else {
        audio.volume = 0;
        audio.pause();
        clearFade();
      }
    }, FADE_INTERVAL_MS);
  }, [clearFade]);

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      setHasInteracted(true);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, "playing");
      }

      audio.volume = 0;
      await audio.play();
      setIsPlaying(true);
      wasPlayingRef.current = true;
      fadeIn();
    } catch {
      // Browser Autoplay Policy menolak pemutaran tanpa gestur pengguna
      setIsPlaying(false);
      wasPlayingRef.current = false;
    }
  }, [fadeIn]);

  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setHasInteracted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "paused");
    }

    setIsPlaying(false);
    wasPlayingRef.current = false;
    fadeOutAndPause();
  }, [fadeOutAndPause]);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      pauseMusic();
    } else {
      void playMusic();
    }
  }, [isPlaying, playMusic, pauseMusic]);

  // Inisialisasi audio dan sinkronisasi preferensi
  useEffect(() => {
    const audio = new Audio("/assets/audio/music-flood2food.mp3");
    audio.loop = true;
    audio.preload = "metadata";
    audio.volume = 0;
    audioRef.current = audio;

    // Periksa preferensi sebelumnya di localStorage
    const savedPref = localStorage.getItem(STORAGE_KEY);
    if (savedPref === "playing") {
      // Tunggu interaksi pertama pengguna untuk memenuhi kebijakan autoplay
      const handleFirstGesture = () => {
        void playMusic();
        window.removeEventListener("pointerdown", handleFirstGesture);
        window.removeEventListener("keydown", handleFirstGesture);
      };

      window.addEventListener("pointerdown", handleFirstGesture, { once: true });
      window.addEventListener("keydown", handleFirstGesture, { once: true });
    }

    // Tangani perpindahan tab (Page Visibility API)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlaying && audioRef.current) {
          wasPlayingRef.current = true;
          audioRef.current.pause();
        }
      } else {
        if (wasPlayingRef.current && audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearFade();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playMusic, isPlaying, clearFade]);

  return (
    <BackgroundMusicContext.Provider
      value={{
        isPlaying,
        toggleMusic,
        playMusic,
        pauseMusic,
        hasInteracted,
      }}
    >
      {children}
    </BackgroundMusicContext.Provider>
  );
}

export function useBackgroundMusic() {
  const context = useContext(BackgroundMusicContext);
  if (!context) {
    throw new Error(
      "useBackgroundMusic harus digunakan di dalam BackgroundMusicProvider"
    );
  }
  return context;
}

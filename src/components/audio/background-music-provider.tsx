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
  isLoading: boolean;
  toggleMusic: () => void;
  playMusic: () => Promise<void>;
  pauseMusic: () => void;
  hasInteracted: boolean;
}

const BackgroundMusicContext = createContext<BackgroundMusicContextType | null>(null);

const TARGET_VOLUME = 0.35; // Suara latar ambient yang seimbang (35%)
const STORAGE_KEY = "f2f_music_preference";
const AUDIO_URL = "/assets/audio/music-flood2food.mp3";

export function BackgroundMusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobUrlRef = useRef<string | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const wasPlayingRef = useRef<boolean>(false);

  // Fungsi pemutaran langsung (Zero-Latency Instant Play)
  const playMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setHasInteracted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "playing");
    }

    // Pastikan volume langsung pada level target (tanpa hening buatan)
    audio.volume = TARGET_VOLUME;

    try {
      // Jika audio belum memiliki data yang cukup, tandai isLoading
      if (audio.readyState < 3) {
        setIsLoading(true);
      }

      playPromiseRef.current = audio.play();
      await playPromiseRef.current;

      setIsPlaying(true);
      isPlayingRef.current = true;
      wasPlayingRef.current = true;
      setIsLoading(false);
    } catch {
      setIsPlaying(false);
      isPlayingRef.current = false;
      wasPlayingRef.current = false;
      setIsLoading(false);
    } finally {
      playPromiseRef.current = null;
    }
  }, []);

  // Fungsi penghentian langsung (Zero-Latency Instant Pause)
  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setHasInteracted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "paused");
    }

    setIsPlaying(false);
    isPlayingRef.current = false;
    wasPlayingRef.current = false;
    setIsLoading(false);

    // Jika pemutaran sedang dalam proses inisialisasi promise, tunggu lalu pause
    if (playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          audio.pause();
        })
        .catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      pauseMusic();
    } else {
      void playMusic();
    }
  }, [isPlaying, playMusic, pauseMusic]);

  // Inisialisasi Eager Preloading & In-Memory RAM Caching
  useEffect(() => {
    // 1. Inisialisasi elemen HTMLAudio dengan preload="auto" dan buffering agresif
    const audio = new Audio(AUDIO_URL);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = TARGET_VOLUME;
    audioRef.current = audio;

    // Paksa peramban untuk langsung mengunduh dan men-decode buffer audio di latar belakang
    audio.load();

    // Listener event audio untuk status responsif
    const handleWaiting = () => {
      if (isPlayingRef.current) setIsLoading(true);
    };
    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      isPlayingRef.current = true;
    };
    const handleCanPlay = () => {
      setIsLoading(false);
    };
    const handlePause = () => {
      setIsPlaying(false);
      isPlayingRef.current = false;
    };

    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("pause", handlePause);

    // 2. In-Memory Blob Caching: Unduh ke RAM agar pemutaran 100% lokal & bebas latency jaringan
    fetch(AUDIO_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil audio");
        return res.blob();
      })
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        blobUrlRef.current = objectUrl;

        // Jika saat ini audio sedang tidak memutar, alihkan sumber ke Blob URL di memori RAM
        if (audioRef.current && !isPlayingRef.current) {
          const currentTime = audioRef.current.currentTime;
          audioRef.current.src = objectUrl;
          audioRef.current.currentTime = currentTime;
          audioRef.current.load();
        }
      })
      .catch(() => {
        // Fallback tetap menggunakan URL publik jika fetch terhambat
      });

    // 3. Sinkronisasi preferensi pemutaran sebelumnya
    const savedPref = localStorage.getItem(STORAGE_KEY);
    if (savedPref === "playing") {
      const handleFirstGesture = () => {
        void playMusic();
        window.removeEventListener("pointerdown", handleFirstGesture);
        window.removeEventListener("keydown", handleFirstGesture);
      };

      window.addEventListener("pointerdown", handleFirstGesture, { once: true });
      window.addEventListener("keydown", handleFirstGesture, { once: true });
    }

    // 4. Tangani perpindahan tab (Page Visibility API)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlayingRef.current && audioRef.current) {
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
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("pause", handlePause);

      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playMusic]);

  return (
    <BackgroundMusicContext.Provider
      value={{
        isPlaying,
        isLoading,
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

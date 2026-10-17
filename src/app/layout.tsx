import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flood2Food — Sistem Cerdas Pemulihan Lahan Sawah Pasca Banjir | PKM-KC USU 2026",
  description:
    "Inovasi sistem pemulihan lahan sawah pascabanjir berbasis sensor fusion 7-in-1, telemetri LoRa mandiri 10,64 km, dan kecerdasan buatan AI Tanya Bimo terkalibrasi laboratorium BPTP.",
  keywords: [
    "Flood2Food",
    "PKM-KC USU 2026",
    "Pemulihan Lahan Sawah",
    "Pasca Banjir",
    "Sensor 7-in-1 NPK pH",
    "LoRa Telemetri",
    "Tanya Bimo AI",
    "PIMNAS 2026",
  ],
  authors: [{ name: "Tim Peneliti Flood2Food USU" }],
  icons: {
    icon: "/assets/logos/flood2food.png",
    apple: "/assets/logos/flood2food.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-[#081A10] text-[#F4F8F5] antialiased selection:bg-[#F58220] selection:text-[#081A10]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

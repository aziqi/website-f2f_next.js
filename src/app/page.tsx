import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { SponsorsBar } from "@/components/sections/sponsors-bar";
import { VideoDemo } from "@/components/sections/video-demo";
import { IotSystem } from "@/components/sections/iot-system";
import { Parameters } from "@/components/sections/parameters";
import { AppShowcase } from "@/components/sections/app-showcase";
import { AppDownload } from "@/components/sections/app-download";
import { Team } from "@/components/sections/team";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#081A10] text-[#F4F8F5] selection:bg-[#F58220] selection:text-[#081A10]">
      <Navbar />
      <main id="main">
        <Hero />
        <SponsorsBar />
        <VideoDemo />
        <IotSystem />
        <Parameters />
        <AppShowcase />
        <AppDownload />
        <Team />
        <Gallery />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

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
    <div className="relative min-h-screen bg-[#081A10] text-[#F4F8F5] selection:bg-[#F58220] selection:text-[#081A10] overflow-x-clip">
      {/* GPU-Composited Fixed Background Layer (Zero paint overhead during scroll) */}
      <div className="bg-canvas-fixed" aria-hidden="true" />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <SponsorsBar />
        <VideoDemo />
        <div className="section-optimized">
          <IotSystem />
        </div>
        <div className="section-optimized">
          <Parameters />
        </div>
        <div className="section-optimized">
          <AppShowcase />
        </div>
        <div className="section-optimized">
          <AppDownload />
        </div>
        <div className="section-optimized">
          <Team />
        </div>
        <div className="section-optimized">
          <Gallery />
        </div>
        <div className="section-optimized">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}

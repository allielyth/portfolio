import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PortfolioGrid from "./components/PortfolioGrid";
import TypographySandbox from "./components/TypographySandbox";
import AICompanion from "./components/AICompanion";
import Footer from "./components/Footer";
import { Sparkles, Terminal, ArrowDown, Grid, Layers, Eye, RefreshCw } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Basic intersection observer simulation to highlight nav items based on user scroll location
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const sections = ["works", "sandbox", "ai-partner", "timeline"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(elementId);
    }
  };

  const principles = [
    { num: "01", name: "GRID REGIMES", desc: "A layout is a structural, mathematical grid system. True beauty rises from strict dimensional integrity.", icon: <Grid size={15} /> },
    { num: "02", name: "TYPOGRAPHIC RESOLUTION", desc: "No decoration can ever disguise bad typography. Establish hard, high-contrast character scales.", icon: <Layers size={15} /> },
    { num: "03", name: "CHROME ECONOMY", desc: "Colors are physical mediums, not random highlights. Use a core ink base combined with brief volcanic pops.", icon: <Sparkles size={15} /> }
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#1a1a1a] selection:bg-[#ff5100] selection:text-white">
      
      {/* Header component */}
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* HERO SECTION DESIGN */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-black bg-[#f4f4f4]">
        
        {/* Massive Typography Background */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <h1 className="text-[180px] sm:text-[260px] md:text-[340px] font-black tracking-tighter leading-none text-black/[0.03]">VOSS</h1>
        </div>

        {/* Subtle decorative layout indicators */}
        <div className="absolute top-10 left-10 hidden xl:block font-mono text-[9px] text-black/40 uppercase tracking-widest leading-relaxed">
          STUTTGART LABORATORY<br />
          MODEL CATALOGUS // EST 2024
        </div>
        <div className="absolute top-10 right-10 hidden xl:block font-mono text-[9px] text-black/40 uppercase tracking-widest text-right">
          INTELLIGENT DESIGN ENGINE v4.5<br />
          STABLE_SYSTEM // 05_2026
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          
          <div className="max-w-4xl space-y-8">
            
            {/* Status Radar Ticker */}
            <div className="inline-flex items-center gap-2 bg-white border border-black rounded-full px-4 py-1.5 text-[#ff5100]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5100] animate-glow-pulse" />
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                AVAILABILITY // SELECT COMMISSIONS FOR Q2-Q3
              </span>
            </div>

            {/* Giant Display Header */}
            <div className="space-y-4">
              <p className="font-mono text-xs sm:text-sm text-[#ff5100] lg:text-base font-bold uppercase tracking-widest">
                ARCHITECT OF VISUAL STRUCTURES
              </p>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#1a1a1a] tracking-tight leading-none uppercase">
                Designing Unified <br className="hidden sm:inline" />
                <span className="text-black font-black">Brand </span>
                <span className="text-[#ff5100] font-black underline decoration-4 decoration-black/10">Architectures</span>
              </h1>
            </div>

            {/* Minimalist Subtitle */}
            <p className="text-sm sm:text-lg text-[#333333] leading-relaxed max-w-2xl font-light">
              I am Adrian Voss, a graphic designer and art director. I craft brand notebooks, material physical packaging systems, and digital stencils using strict layout guidelines, robust geometry, and flawless modern aesthetics.
            </p>

            {/* CTA anchors */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => handleScrollTo("works")}
                className="px-6 py-3.5 bg-black hover:bg-[#ff5100] text-white hover:text-black font-mono text-xs font-bold tracking-widest rounded-none uppercase cursor-pointer transition-all duration-200 shadow-md flex items-center gap-2"
              >
                BROWSE DESIGN PORTFOLIO
                <ArrowDown size={14} />
              </button>
              
              <button
                onClick={() => handleScrollTo("sandbox")}
                className="px-6 py-3.5 bg-white hover:bg-black text-black hover:text-white border border-black font-mono text-xs font-bold tracking-widest rounded-none uppercase cursor-pointer transition-all duration-200"
              >
                LAUNCH TYPE SANDBOX
              </button>
            </div>

          </div>

          {/* Graphic Design Rules Cards (Three pillars of Swiss composition) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {principles.map((p) => (
              <div
                key={p.num}
                className="bg-white border border-black hover:bg-[#ff5100] hover:text-[#1a1a1a] p-5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/10 group-hover:border-black/30">
                    <span className="font-mono text-xs text-black/50 group-hover:text-black">RULE {p.num} //</span>
                    <span className="text-[#ff5100] group-hover:text-black p-1 bg-[#1a1a1a]/5 rounded border border-black/5">
                      {p.icon}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-lg text-[#1a1a1a] mb-2 tracking-tight">
                    {p.name}
                  </h4>
                  <p className="text-xs text-black/70 group-hover:text-black/80 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* CORE WRAPPERS SEGMENTATION */}
      <main>
        
        {/* works category grid */}
        <PortfolioGrid />

        {/* typographic sandboxes */}
        <TypographySandbox />

        {/* ai assistant dynamic dialogue */}
        <AICompanion />

      </main>

      {/* experience and contact segments footer */}
      <Footer />

    </div>
  );
}

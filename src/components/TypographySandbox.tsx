import React, { useState } from "react";
import { Sparkles, RefreshCw, Layout, Eye, Download, Printer, Check } from "lucide-react";

interface ColorTheme {
  name: string;
  bg: string;
  gridColor: string;
  primaryText: string;
  secondaryText: string;
  accentText: string;
  accentBg: string;
}

export default function TypographySandbox() {
  const [displayText, setDisplayText] = useState("STRUCTURAL METRICS");
  const [subText, setSubText] = useState("SWISS GRID SYSTEMS & TYPOGRAPHIC ARCHITECTURE");
  const [caption, setCaption] = useState("VOSS CREATIVE LABORATORY // DE // EST 2024");
  const [stamp, setStamp] = useState("UTC+02 LAB STATUS: ACTIVE");
  
  const [fontFamily, setFontFamily] = useState("font-display"); // font-display (Space Grotesk), font-serif-elegant (Playfair), font-mono (JetBrains Mono)
  const [letterSpacing, setLetterSpacing] = useState("tracking-widest");
  const [caseType, setCaseType] = useState("uppercase"); // uppercase, lowercase, capitalize, normal-case
  const [alignment, setAlignment] = useState("text-left"); // text-left, text-center, text-right
  
  const [layoutPreset, setLayoutPreset] = useState("asymmetric"); // asymmetric, minimal-centered, blueprint
  const [showGridLines, setShowGridLines] = useState(true);
  const [checkedInquiry, setCheckedInquiry] = useState(false);

  // Exquisite custom designer palettes
  const colorThemes: ColorTheme[] = [
    {
      name: "Midnight Slate (Tech)",
      bg: "bg-[#0b0c10] border-[#10131a]",
      gridColor: "border-[#151922]",
      primaryText: "text-[#f3f4f7]",
      secondaryText: "text-[#8a8d9d]",
      accentText: "text-cyan-400",
      accentBg: "bg-cyan-950/20 text-cyan-400 border-cyan-500/20"
    },
    {
      name: "Terracotta Earth (Warm)",
      bg: "bg-[#f5ebd9] border-[#e4d8c2]",
      gridColor: "border-[#eddcc1]",
      primaryText: "text-[#1d1d1f]",
      secondaryText: "text-[#5e5a51]",
      accentText: "text-[#bc5a3c]",
      accentBg: "bg-[#f0dfc6] text-[#bc5a3c] border-[#e0cbab]"
    },
    {
      name: "Brutalist Monochrome (Steel)",
      bg: "bg-[#111111] border-[#222222]",
      gridColor: "border-[#252525]",
      primaryText: "text-white",
      secondaryText: "text-[#999999]",
      accentText: "text-gray-200",
      accentBg: "bg-[#222222] text-white border-white/20"
    },
    {
      name: "Muted Forest (Organic)",
      bg: "bg-[#151a16] border-[#1e261f]",
      gridColor: "border-[#212c23]",
      primaryText: "text-[#eaebea]",
      secondaryText: "text-[#7f8a81]",
      accentText: "text-[#8cb891]",
      accentBg: "bg-[#1f2a20] text-[#8cb891] border-[#2d3f2f]"
    }
  ];

  const [activeThemeIdx, setActiveThemeIdx] = useState(0);
  const theme = colorThemes[activeThemeIdx];

  const randomizeMetrics = () => {
    const titles = [
      "SYSTEMATIC GRID",
      "ELEMENTAL RATIOS",
      "GEOMETRIC PROOF",
      "MODULAR HARMONY",
      "KINETIC DRAFTING"
    ];
    const subs = [
      "A STUDY IN ASYMMETRICAL SPATIAL INTERACTION",
      "HIERARCHICAL STRUCTURAL FORM IN PRINT MEDIA",
      "ANALYTICAL MATHEMATICS APPLIED TO GRAPHIC SYSTEMS",
      "RISOGRAPH CALIBRATION MATRIX MODEL B"
    ];

    setDisplayText(titles[Math.floor(Math.random() * titles.length)]);
    setSubText(subs[Math.floor(Math.random() * subs.length)]);
    
    // Randomize fonts and tracking
    const fonts = ["font-display", "font-serif-elegant", "font-mono"];
    const gaps = ["tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-widest"];
    const aligns = ["text-left", "text-center", "text-right"];
    
    setFontFamily(fonts[Math.floor(Math.random() * fonts.length)]);
    setLetterSpacing(gaps[Math.floor(Math.random() * gaps.length)]);
    setAlignment(aligns[Math.floor(Math.random() * aligns.length)]);
    setActiveThemeIdx(Math.floor(Math.random() * colorThemes.length));
  };

  const handleCreateInquiry = () => {
    setCheckedInquiry(true);
    setTimeout(() => {
      setCheckedInquiry(false);
    }, 4500);
  };

  return (
    <section id="sandbox" className="py-20 border-b border-black bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#ff5100] rotate-45" />
              <span className="font-mono text-xs text-[#ff5100] font-bold tracking-widest uppercase">
                INTERACTIVE DESIGN WORKSHOP
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-black tracking-tighter uppercase">
              Modular Poster Sandbox
            </h2>
          </div>
          <p className="font-mono text-xs text-black/65 max-w-sm leading-relaxed">
            Manipulate core typography variables live. Choose physical color mediums, toggle mathematical guidelines, and test Swiss grid alignments instantly.
          </p>
        </div>

        {/* Workspace Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT INTERACTIVE FORM CONTROLS: 5 columns */}
          <div className="lg:col-span-5 bg-white border border-black rounded-none p-6 space-y-6">
            
            {/* Control Panel Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <div className="flex items-center gap-2 text-black">
                <Layout size={16} className="text-[#ff5100]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  DESIGN MATRIX SELECTORS
                </span>
              </div>
              <button
                onClick={randomizeMetrics}
                className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-black border border-black rounded-none text-black hover:text-white text-[10px] font-mono cursor-pointer transition-colors"
                title="Scramble values"
              >
                <RefreshCw size={10} />
                RANDOMIZE
              </button>
            </div>

            {/* Inputs: Copy string */}
            <div className="space-y-3">
              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1">
                  01 // PRIMARY COMPOSITION TITLE
                </label>
                <input
                  type="text"
                  value={displayText}
                  onChange={(e) => setDisplayText(e.target.value)}
                  maxLength={40}
                  className="w-full bg-white border border-black text-black font-mono text-xs p-2.5 rounded-none focus:outline-none focus:border-[#ff5100]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1">
                  02 // SUB-TYPOGRAPHY ANCHOR
                </label>
                <input
                  type="text"
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                  maxLength={60}
                  className="w-full bg-white border border-black text-black font-mono text-xs p-2.5 rounded-none focus:outline-none focus:border-[#ff5100]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1">
                  03 // CAPTION DETAILS
                </label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  maxLength={60}
                  className="w-full bg-white border border-black text-black font-mono text-xs p-2.5 rounded-none focus:outline-none focus:border-[#ff5100]"
                />
              </div>
            </div>

            {/* Typography pairings selectors */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1.5">
                  FONT SPECIFICATION
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full bg-white border border-black text-black font-mono text-xs p-2 rounded-none cursor-pointer focus:border-[#ff5100]"
                >
                  <option value="font-display">Space Grotesk</option>
                  <option value="font-serif-elegant">Playfair Serif</option>
                  <option value="font-mono">JetBrains Mono</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1.5">
                  TRACKING SCALE
                </label>
                <select
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(e.target.value)}
                  className="w-full bg-white border border-black text-black font-mono text-xs p-2 rounded-none cursor-pointer focus:border-[#ff5100]"
                >
                  <option value="tracking-tighter">Tighter</option>
                  <option value="tracking-tight">Tight</option>
                  <option value="tracking-normal">Normal</option>
                  <option value="tracking-wide">Wide</option>
                  <option value="tracking-widest">Ultra Wide</option>
                </select>
              </div>
            </div>

            {/* Micro layouts details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1.5">
                  ALIGN INDEX
                </label>
                <div className="grid grid-cols-3 gap-1 border border-black rounded-none bg-white p-1">
                  {["text-left", "text-center", "text-right"].map((align) => (
                    <button
                      key={align}
                      onClick={() => setAlignment(align)}
                      className={`py-1 rounded-none font-mono text-[10px] cursor-pointer text-center uppercase tracking-tighter ${
                        alignment === align ? "bg-black text-white" : "text-black/50 hover:text-black"
                      }`}
                    >
                      {align.replace("text-", "").substring(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-1.5">
                  TEXT SIZECASE
                </label>
                <div className="grid grid-cols-2 gap-1 border border-black rounded-none bg-white p-1">
                  {["uppercase", "normal-case"].map((caseSelect) => (
                    <button
                      key={caseSelect}
                      onClick={() => setCaseType(caseSelect)}
                      className={`py-1 rounded-none font-mono text-[10px] cursor-pointer text-center uppercase tracking-tighter ${
                        caseType === caseSelect ? "bg-black text-white" : "text-black/50 hover:text-black"
                      }`}
                    >
                      {caseSelect === "uppercase" ? "CAPS" : "MIX"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Layout Grid style preset */}
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-black/50 font-bold uppercase tracking-wider">
                LAYOUT ARCHITECTURE PRESET
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "asymmetric", title: "Asym Swiss" },
                  { id: "minimal-centered", title: "Centered Pure" },
                  { id: "blueprint", title: "Blueprint CAD" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setLayoutPreset(p.id)}
                    className={`py-2 px-1 rounded-none font-mono text-[10px] border tracking-wide transition-all cursor-pointer ${
                      layoutPreset === p.id
                        ? "bg-black text-white border-black font-bold"
                        : "bg-white border-black text-black/60 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Color thematic select */}
            <div>
              <label className="block font-mono text-[10px] text-black/50 font-bold uppercase mb-2">
                ACTIVE INK MEDIUM
              </label>
              <div className="grid grid-cols-2 gap-2">
                {colorThemes.map((colTheme, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThemeIdx(idx)}
                    className={`flex items-center gap-2 text-left p-2 rounded-none border text-[11px] font-mono transition-all cursor-pointer ${
                      activeThemeIdx === idx
                        ? "bg-black border-black text-white font-bold"
                        : "bg-white border-black text-black/60 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border border-black/10 ${colTheme.bg.split(" ")[0]}`}
                    />
                    <span>{colTheme.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle guides checkboxes */}
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-[10px] text-black/60 uppercase font-semibold">Show mathematical grid lines</span>
              <button
                onClick={() => setShowGridLines(!showGridLines)}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  showGridLines ? "bg-[#ff5100]" : "bg-black/20"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full border border-black/10 transition-transform ${
                    showGridLines ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Design submit trigger */}
            <div className="pt-4 border-t border-black/15">
              <button
                onClick={handleCreateInquiry}
                disabled={checkedInquiry}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#ff5100] hover:bg-black hover:text-[#ff5100] border border-black disabled:bg-emerald-500 disabled:text-white text-black font-mono text-xs font-black tracking-wider rounded-none transition-all cursor-pointer uppercase"
              >
                {checkedInquiry ? (
                  <>
                    <Check size={14} className="stroke-[3]" />
                    POSTER SCHEMATIC SUBMITTED!
                  </>
                ) : (
                  <>
                    <Sparkles size={14} />
                    INITIALIZE BRIEF FROM THIS STENCIL
                  </>
                )}
              </button>
              {checkedInquiry && (
                <p className="text-center font-mono text-[10px] text-emerald-600 mt-2 font-bold">
                  ✓ Blueprint matrix saved! We have linked this configuration to your portfolio inquiry card.
                </p>
              )}
            </div>

          </div>

          {/* RIGHT LIVE POSTER CANVAS: 7 columns */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Canvas Header */}
            <div className="w-full max-w-[480px] flex items-center justify-between mb-3 text-black px-2">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-black/60 font-bold">
                <Eye size={12} className="text-[#ff5100]" />
                <span>CANVAS RECTPORT: SOLID STATE 3:4 SPECIMEN</span>
              </div>
              <span className="font-mono text-[10px] text-black/40">SWISS_ENGINE_v4.1</span>
            </div>

            {/* Immersive 3:4 Poster container */}
            <div className="w-full max-w-[480px] aspect-[3/4] rounded-none shadow-xl border border-black overflow-hidden relative flex flex-col justify-between transition-all duration-300">
              
              {/* Actual design frame */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-between border ${theme.bg} rounded-none select-none overflow-hidden transition-colors duration-500`}>
                
                {/* Asymmetrical grid background stencil */}
                {showGridLines && (
                  <div className="absolute inset-0 pointer-events-none opacity-20 grid grid-cols-4 grid-rows-4">
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b ${theme.gridColor}`} />

                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b ${theme.gridColor}`} />

                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b border-r ${theme.gridColor}`} />
                    <div className={`border-b ${theme.gridColor}`} />

                    <div className={`border-r ${theme.gridColor}`} />
                    <div className={`border-r ${theme.gridColor}`} />
                    <div className={`border-r ${theme.gridColor}`} />
                    <div className="border-[#333] border-none" />
                  </div>
                )}

                {/* TOP HEADER BLOCK SUMMARY */}
                {layoutPreset === "blueprint" ? (
                  <div className="flex justify-between items-start z-10">
                    <div className="w-1/2">
                      <p className={`font-mono text-[8px] uppercase tracking-wider leading-relaxed ${theme.secondaryText}`}>
                        SCHEMATIC WIREMODEL • GRID 4-A
                      </p>
                      <p className={`font-mono text-[10px] font-bold mt-1 ${theme.accentText}`}>
                        {stamp}
                      </p>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className={`font-mono text-[8px] uppercase tracking-wider leading-relaxed ${theme.secondaryText}`}>
                        RECORDS LOG // DE // VOSS
                      </p>
                      <p className={`font-mono text-[9px] ${theme.primaryText}`}>
                        STUTTGART LABORATORY EST 2024
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col z-10">
                    <div className="flex justify-between items-center text-[9px] font-mono mb-2 uppercase tracking-widest font-bold">
                      <span className={theme.accentText}>• TYPE LAB DRAFT</span>
                      <span className={theme.secondaryText}>GERM_UTC+02</span>
                    </div>
                    <div className={`w-full h-px ${theme.secondaryText} bg-current opacity-15`} />
                  </div>
                )}

                {/* PRIMARY CENTRAL TYPOGRAPHIC GRID */}
                <div className={`z-10 my-auto ${alignment} ${layoutPreset === "asymmetric" ? "pt-12" : "py-4"}`}>
                  
                  {/* Decorative geometrical spacer for asymmetric modernism */}
                  {layoutPreset === "asymmetric" && (
                    <div className="mb-4">
                      <span className={`inline-block w-8 h-1 bg-current ${theme.accentText}`} />
                      <div className="flex gap-2 text-[8px] font-mono mt-2 uppercase tracking-widest">
                        <span className={theme.secondaryText}>composition scale: 0.432</span>
                      </div>
                    </div>
                  )}

                  {/* Primary text element */}
                  <h1
                    className={`${fontFamily} ${letterSpacing} ${caseType} ${theme.primaryText} leading-none text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase break-words`}
                  >
                    {displayText || "STRUCTURAL METRICS"}
                  </h1>

                  {/* Sub-anchor text element */}
                  <p
                    className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-wider leading-relaxed mt-4 max-w-sm ${
                      alignment === "text-center" ? "mx-auto" : alignment === "text-right" ? "ml-auto" : ""
                    } ${theme.secondaryText}`}
                  >
                    {subText || "SWISS GRID SYSTEMS & TYPOGRAPHIC ARCHITECTURE"}
                  </p>

                  {/* Blueprint details underlay */}
                  {layoutPreset === "blueprint" && (
                    <div className={`mt-6 pt-4 border-t border-dashed ${theme.gridColor} text-left flex justify-between font-mono text-[8px] uppercase ${theme.secondaryText}`}>
                      <div>
                        <p>X-AXIS CALIBRATION: 85.0%</p>
                        <p>Y-AXIS CONSTANT: 12.3mV</p>
                      </div>
                      <div className="text-right">
                        <p>SCALE RESOLVE: PURE VECTOR</p>
                        <p>MODULE CLASSIFICATION: CJS</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* BOTTOM COMPOSITION METADATA FOOTER */}
                <div className="z-10 flex flex-col gap-3">
                  <div className={`w-full h-px ${theme.secondaryText} bg-current opacity-15`} />
                  
                  <div className="flex items-end justify-between">
                    {/* Caption block */}
                    <div className="max-w-[70%]">
                      <p className={`font-mono text-[9px] uppercase tracking-wider ${theme.secondaryText}`}>
                        {caption || "VOSS CREATIVE LABORATORY // DE // EST 2024"}
                      </p>
                      {layoutPreset === "minimal-centered" && (
                        <p className={`font-serif-elegant italic text-[11px] lowercase mt-1 ${theme.accentText}`}>
                          scandinavian printing workshop aesthetics
                        </p>
                      )}
                    </div>

                    {/* Stamp widget */}
                    <div className="text-right">
                      {layoutPreset === "asymmetric" ? (
                        <div className="flex flex-col items-end">
                          <span className={`px-2 py-0.5 pointer-events-none rounded font-mono text-[8px] uppercase ${theme.accentBg}`}>
                            VOSS RENDER
                          </span>
                        </div>
                      ) : (
                        <p className={`font-mono text-[9px] uppercase font-bold ${theme.accentText}`}>
                          {stamp || "UTC+02 LAB STATUS: ACTIVE"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Simulated file download buttons */}
            <div className="w-full max-w-[480px] grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "#";
                  // Avoid alert; use a micro notification inside components or change window behaviour gracefully.
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white hover:bg-black hover:text-white border border-black rounded-none font-mono text-[10px] text-black font-bold tracking-wide cursor-pointer transition-colors"
              >
                <Download size={11} />
                EXPORT VEK_PDF
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white hover:bg-black hover:text-white border border-black rounded-none font-mono text-[10px] text-black font-bold tracking-wide cursor-pointer transition-colors"
                title="Print this webpage page layout"
              >
                <Printer size={11} />
                PRINT MATRIX
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

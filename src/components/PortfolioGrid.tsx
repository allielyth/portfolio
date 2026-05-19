import React, { useState } from "react";
import { portfolioProjects } from "../data";
import { Project } from "../types";
import { X, Copy, Check, ExternalLink, Columns, Settings, Award } from "lucide-react";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const categories = [
    { key: "all", label: "00 // ALL PROJECTS" },
    { key: "brand", label: "01 // BRANDING" },
    { key: "packaging", label: "02 // PACKAGING" },
    { key: "poster", label: "03 // POSTERS" },
    { key: "editorial", label: "04 // EDITORIAL" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  return (
    <section id="works" className="py-20 border-b border-black bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#ff5100] rotate-45" />
              <span className="font-mono text-xs text-[#ff5100] font-bold tracking-widest uppercase">
                ENGINE FOR HIGH-FIDELITY COMPS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1a1a1a] tracking-tighter uppercase">
              Selected Creative Works
            </h2>
          </div>
          <p className="font-mono text-xs text-black/60 max-w-sm leading-relaxed">
            Every project is a fusion of strict structural Swiss mathematics and brave, high-contrast visual statements. Use filters to browse subfields.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-black pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-none font-mono text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-black text-white border border-black"
                  : "text-black/60 hover:text-black hover:bg-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative bg-white border border-black rounded-none overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Showcase Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-white relative border-b border-black">
                {/* Visual Label overlay */}
                <div className="absolute top-3 left-3 z-10 bg-white border border-black text-[10px] font-mono font-bold text-black px-2 py-0.5 rounded-none uppercase tracking-widest">
                  {project.category}
                </div>
                
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Layer details */}
                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-mono text-[10px] text-[#ff5100] tracking-widest font-bold uppercase mb-1">
                      CLIENT // {project.client}
                    </p>
                    <h3 className="font-display font-black text-2xl text-white tracking-tighter uppercase mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono bg-white/10 border border-white/20 px-2 py-0.5 text-white/90 rounded-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tiny Color Dot Bar */}
                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                      <span className="text-[9px] font-mono text-white/50">SYSTEM THEME:</span>
                      <div className="flex gap-1.5">
                        {project.colors.map((hex, index) => (
                          <span
                            key={index}
                            style={{ backgroundColor: hex }}
                            className="w-3 h-3 rounded-full border border-white/20"
                            title={hex}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Title (Always visible) */}
              <div className="p-5 flex items-center justify-between bg-white text-black">
                <div>
                  <h3 className="font-display font-black text-lg text-black tracking-tight group-hover:text-[#ff5100] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[10px] text-black/50 mt-1 uppercase tracking-wider">
                    {project.fontFamily} • {project.date}
                  </p>
                </div>
                <div className="p-2 bg-white text-black group-hover:bg-[#ff5100] group-hover:text-white border border-black rounded-none transition-all">
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty portfolio notifier */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-black rounded-none bg-white mt-4">
            <p className="font-mono text-sm text-black/60">No matching visual comps compiled.</p>
          </div>
        )}

        {/* IMMERSIVE COMP DETAILS MODAL */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-[#1a1a1a]/95 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
            <div className="bg-[#f4f4f4] border border-black w-full max-w-5xl rounded-none shadow-2xl relative flex flex-col md:flex-row my-8 max-h-[90vh] md:max-h-none overflow-hidden animate-in fade-in duration-200">
              
              {/* Close Button Pin */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white hover:bg-[#ff5100] text-black hover:text-white border border-black rounded-none cursor-pointer transition-all"
                title="ESC Draft"
              >
                <X size={18} />
              </button>

              {/* Left Column: Huge visual screen */}
              <div className="w-full md:w-1/2 bg-white p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10 overflow-hidden">
                <div className="relative group">
                  <img
                    src={activeProject.thumbnail}
                    alt={activeProject.title}
                    className="w-full h-auto rounded-none shadow-md object-contain border border-black/10"
                    referrerPolicy="no-referrer"
                  />
                  {/* Aspect stamp */}
                  <div className="absolute bottom-3 left-3 bg-white border border-black rounded-none px-2 py-0.5 text-[9px] font-mono text-black">
                    COMP ID: {activeProject.id} • RENDER OK
                  </div>
                </div>

                {/* Sub-gallery description */}
                <div className="mt-6">
                  <span className="text-[10px] font-mono text-black/50 uppercase tracking-widest block mb-1">
                    DESIGN CONCEPT & INSPIRATION
                  </span>
                  <p className="text-xs text-black/70 leading-relaxed italic">
                    "{activeProject.inspiration}"
                  </p>
                </div>
              </div>

              {/* Right Column: Deep specs & metadata */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[80vh] md:max-h-[90vh] flex flex-col justify-between text-black">
                <div>
                  
                  {/* Small tag identifier */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-mono uppercase tracking-widest border border-black rounded-none font-bold">
                      {activeProject.category} SPEC
                    </span>
                    <span className="text-xs font-mono text-black/30">/</span>
                    <span className="text-xs font-mono text-black/60 font-semibold">{activeProject.date}</span>
                  </div>

                  {/* Title & Client */}
                  <h3 className="font-display font-black text-3xl text-black tracking-tighter uppercase mb-1">
                    {activeProject.title}
                  </h3>
                  <p className="font-mono text-xs text-[#ff5100] font-bold mb-6 uppercase tracking-wider">
                    PREPARED FOR: {activeProject.client}
                  </p>

                  {/* Long descriptive review */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono text-black/40 uppercase tracking-widest mb-2 border-b border-black/15 pb-1 font-bold">
                      Project Objective
                    </h4>
                    <p className="text-sm text-black/80 leading-relaxed font-light">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Deliverables layout */}
                  <div className="mb-6 bg-white p-4 rounded-none border border-black">
                    <h4 className="text-xs font-mono text-[#ff5100] font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Columns size={12} /> Key Deliverables Completed
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.deliverables.map((del, i) => (
                        <li key={i} className="text-xs text-black/80 flex items-start gap-2">
                          <span className="text-[#ff5100] font-bold font-mono mt-0.5">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specs list */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono text-black/40 uppercase tracking-widest mb-3 border-b border-black/15 pb-1 font-bold">
                      Technical Architecture
                    </h4>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                      {Object.entries(activeProject.specs).map(([key, val]) => (
                        <div key={key}>
                          <p className="font-mono text-[10px] text-black/40 uppercase font-semibold">{key}</p>
                          <p className="text-xs text-black font-bold mt-0.5">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom interactive Palette Section */}
                <div className="pt-6 border-t border-black/10">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono text-black/40 uppercase tracking-widest font-bold">
                      CHROME SPECTRUM (Click to copy Hex parameter)
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {activeProject.colors.map((hex, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleCopyColor(hex)}
                          className="flex items-center gap-2 bg-white hover:bg-black hover:text-white border border-black p-1.5 rounded-none pr-3 transition-all cursor-pointer group"
                        >
                          <span
                            style={{ backgroundColor: hex }}
                            className="w-6 h-6 rounded-none border border-black/10"
                          />
                          <span className="font-mono text-[11px] font-bold uppercase">
                            {hex}
                          </span>
                          {copiedColor === hex ? (
                            <Check size={11} className="text-emerald-500 font-bold" />
                          ) : (
                            <Copy size={11} className="text-black/50 group-hover:text-[#ff5100] transition-colors" />
                          )}
                        </button>
                      ))}
                    </div>
                    {copiedColor && (
                      <p className="text-emerald-600 font-mono text-[10px] flex items-center gap-1.5 mt-1 font-bold">
                        ✓ Hex code {copiedColor} copied to system clipboard successfully.
                      </p>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

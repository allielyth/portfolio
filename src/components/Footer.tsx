import React, { useState } from "react";
import { Mail, ArrowUpRight, Award, Send, Check, MapPin, Grid, Briefcase } from "lucide-react";

interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export default function Footer() {
  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formReason, setFormReason] = useState("branding");
  const [formMessage, setFormMessage] = useState("");
  
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success">("idle");

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2024 — PRES",
      role: "Lead Typographic Architect",
      company: "Voss Laboratory & Co",
      location: "Stuttgart, GER",
      description: "Directing global art campaigns, structural packaging molds, and publishing experimental type design journals focused on absolute Swiss grid logic and sustainable physical print offset."
    },
    {
      year: "2021 — 2024",
      role: "Senior Graphic & Identity Designer",
      company: "Meyers Swiss Grid AG",
      location: "Zurich, SUI",
      description: "Pioneered automated brand guideline layout parsers and designed premium brand guidelines booklets for aerospace, sustainable architecture, and luxury skincare labels."
    },
    {
      year: "2019 — 2021",
      role: "Visual Designer & Prepress Specialist",
      company: "The Gutenberg Offset Forge",
      location: "Berlin, GER",
      description: "Managed high-fidelity duotone silk separations and Risograph spot color printing. Championed organic textures and heavy plant-based inks on recycled cotton paperStocks."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formMail.trim()) return;

    setSubmissionState("submitting");
    setTimeout(() => {
      setSubmissionState("success");
      setFormName("");
      setFormMail("");
      setFormMessage("");
    }, 2000);
  };

  return (
    <footer id="timeline" className="bg-[#fbfbfb] border-t border-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Timeline */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase size={16} className="text-[#ff5100]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black">
              04 // EXPERIENCE TIMELINE & ARCHIVE
            </h3>
          </div>

          <div className="space-y-10 border-l border-black pl-6 ml-2">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group/timeline">
                {/* Timeline dot circle node */}
                <span className="w-2.5 h-2.5 rounded-full bg-white group-hover/timeline:bg-[#ff5100] border border-black absolute -left-[31px] top-1.5 transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-12">
                  <span className="font-mono text-xs font-black text-[#ff5100] tracking-wider shrink-0 w-28">
                    {evt.year}
                  </span>
                  <div>
                    <h4 className="font-display font-black text-lg text-black uppercase tracking-tight group-hover/timeline:text-[#ff5100] transition-colors">
                      {evt.role}
                    </h4>
                    <p className="font-mono text-[10px] text-black/50 font-bold uppercase mt-1">
                      {evt.company} • {evt.location}
                    </p>
                    <p className="text-xs text-black/70 leading-relaxed mt-2 font-light max-w-2xl">
                      {evt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic inquiry form & Contact segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/10 pt-16 mb-16">
          
          {/* Left: editorial contact detail (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#ff5100] rotate-45" />
                <span className="font-mono text-xs text-[#ff5100] font-bold tracking-widest uppercase">
                  DRAFT COMMISSIONS
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tighter">
                Let's structure your next graphic layout
              </h3>
            </div>
            
            <p className="text-xs text-black/65 leading-relaxed font-light">
              We compile designs that aren't just decorative layers, but robust grid engines that command premium attention. Submit this secure stencil to request current consultation queues, typography audits, or custom packaging molds.
            </p>

            <div className="p-4 bg-white border border-black rounded-none space-y-3.5 text-xs font-mono text-black/70 font-bold">
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-[#ff5100]" />
                <span>Base location: Stuttgart, Germany (UTC+02)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-[#ff5100]" />
                <span>Creative mailbox: lythweird@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Grid size={13} className="text-[#ff5100]" />
                <span>Format: Asymmetrical Swiss grid standard</span>
              </div>
            </div>

            {/* Micro Awards layout */}
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-black/40 font-bold uppercase tracking-widest">
                ACCREDITATIONS & REVIEWS
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono p-3 border border-black rounded-none bg-white text-black font-semibold">
                <div>
                  <p className="text-[#ff5100] font-bold flex items-center gap-1">
                    <Award size={10} /> TypeDirector's Cup
                  </p>
                  <p className="text-[9px] text-black/40 mt-0.5">Winner 2025</p>
                </div>
                <div>
                  <p className="text-[#ff5100] font-bold flex items-center gap-1 font-mono">
                    <Award size={10} /> Swiss Design Award
                  </p>
                  <p className="text-[9px] text-black/40 mt-0.5">Shortlisted 2024</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: commission form (7 columns) */}
          <form onSubmit={handleFormSubmit} className="lg:col-span-7 bg-white border border-black rounded-none p-6 space-y-4">
            
            <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2 border-b border-black/10 pb-3">
              05 // TRANSMIT CLIENT SPECIFICATIONS SECURELY
            </h4>

            {submissionState === "success" ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-[#ff5100]/5 border border-[#ff5100]/25 text-emerald-600 flex items-center justify-center rounded-none mx-auto">
                  <Check size={22} className="stroke-[3]" />
                </div>
                <div>
                  <h5 className="font-mono text-sm font-black text-black uppercase">Inquiry Transmitted Successfully</h5>
                  <p className="text-xs text-black/60 mt-1 max-w-sm mx-auto leading-relaxed">
                    Thank you. We have securely received your design blueprint parameters. Adrian will review details regarding contrast ratios and respond shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmissionState("idle")}
                  className="px-4 py-1.5 bg-white text-[#ff5100] hover:bg-black hover:text-white border border-black rounded-none font-mono text-[10px] cursor-pointer font-bold"
                >
                  TRANSMIT ANOTHER BLUEPRINT
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] text-black/50 font-bold uppercase mb-1">
                      CLIENT PRINCIPAL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sōma Botanicals"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-white border border-black text-xs text-black p-2.5 rounded-none focus:outline-none focus:border-[#ff5100]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] text-black/50 font-bold uppercase mb-1">
                      SECURE COMMUNICATION EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. curator@soma.com"
                      value={formMail}
                      onChange={(e) => setFormMail(e.target.value)}
                      className="w-full bg-white border border-black text-xs text-black p-2.5 rounded-none focus:outline-none focus:border-[#ff5100] font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] text-black/50 font-bold uppercase mb-1">
                    PRIMARY COMMISSION SECTOR
                  </label>
                  <select
                    value={formReason}
                    onChange={(e) => setFormReason(e.target.value)}
                    className="w-full bg-white border border-black text-xs text-black p-2.5 rounded-none cursor-pointer font-mono font-bold focus:border-[#ff5100]"
                  >
                    <option value="branding">01 // Complete Brand Identity System</option>
                    <option value="packaging">02 // Luxury Sustainable Packaging Product</option>
                    <option value="poster-editorial">03 // Specimen Poster or Magazine Layout</option>
                    <option value="custom">04 // Bespoke Typography Craft / Consult</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[9px] text-black/50 font-bold uppercase mb-1">
                    PROJECT INSPIRATIONS & GRID EXPECTATIONS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your project ideas, target mediums, or favorite color ranges..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-white border border-black text-xs text-black p-2.5 rounded-none focus:outline-none focus:border-[#ff5100] font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submissionState === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#ff5100] hover:bg-black hover:text-[#ff5100] border border-black disabled:bg-black/10 text-black font-mono text-xs font-black tracking-wider rounded-none transition-colors cursor-pointer uppercase"
                >
                  {submissionState === "submitting" ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                      COMPILING TRANSMISSION STENCIL...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      TRANSMIT BLUEPRINT SPECIFICATION
                    </>
                  )}
                </button>
              </>
            )}

          </form>

        </div>

        {/* Brand identity signature */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center font-mono text-[10px] text-black/40 font-bold border-t border-black/10 pt-8">
          <p>© 2026 Adrian Voss Graphic Laboratory. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            <span className="text-black/50">INTEGRITY // CODE // SWISS RATIO</span>
            <span>•</span>
            <span className="text-[#ff5100] uppercase font-bold">System status: SOLID</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { ChatMessage, CreativeBrief } from "../types";
import { Sparkles, Send, Loader2, Bot, Sliders, FileText, ArrowUpRight, HelpCircle } from "lucide-react";

export default function AICompanion() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg_init",
      role: "model",
      text: "Salutations, I am **Aura**, your creative partner. Ask me for typography advice, construct a custom color palette, or utilize the Briefing Engine below to synthesize a tailored project challenge! How can I inspire your process today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Creative Brief Engine State
  const [selectedSector, setSelectedSector] = useState("Organic Coffee Label");
  const [selectedStyle, setSelectedStyle] = useState("Minimalist Scandinavian");
  const [generatedBrief, setGeneratedBrief] = useState<CreativeBrief | null>({
    title: "Kōsen tea label identity",
    client: "Kōsen Botanical",
    sector: "Beverage / Organic tea",
    targetAudience: "Young urban professionals looking for caffeine-free sensory relaxation",
    objectives: "Create a modern, organic, tactile tea packaging system and typographic branding guidelines. The packaging must show high-end sustainability and modern typographic clarity.",
    deliverables: ["Product Label Design", "Brand Guidelines Booklet Part 1", "Outer Cardboard Tube Box Layout"],
    styleDirectives: "Emphasize negative space, soft beige tones, minimalist botanical layout, Swiss sans-serif typography like Inter, mixed with elegant serif details for brand values."
  });
  const [isBriefLoading, setIsBriefLoading] = useState(false);
  const [briefMessage, setBriefMessage] = useState<string>("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Chat message submission
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      role: "user",
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsChatLoading(true);

    try {
      const response = await fetch("/api/design-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      const data = await response.json();
      if (data.success) {
        setMessages(prev => [...prev, {
          id: `msg_${Date.now()}_reply`,
          role: "model",
          text: data.reply,
          timestamp: new Date()
        }]);
      } else {
        throw new Error(data.error || "Communication failure");
      }
    } catch (err: any) {
      setMessages(prev => [...prev, {
        id: `msg_${Date.now()}_err`,
        role: "model",
        text: `**System Error:** ${err.message || "Failed to contact Aura service. Check that your dev server is active and try again."}`,
        timestamp: new Date()
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Brief creation trigger
  const handleGenerateBrief = async () => {
    if (isBriefLoading) return;
    setIsBriefLoading(true);
    setBriefMessage("");

    try {
      const response = await fetch("/api/brief-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sector: selectedSector,
          focusStyle: selectedStyle
        })
      });

      const data = await response.json();
      if (data.success && data.brief) {
        setGeneratedBrief(data.brief);
        if (data.isFallback) {
          setBriefMessage(data.message || "");
        }
      } else {
        throw new Error(data.error || "Brief engine did not resolve successfully");
      }
    } catch (err: any) {
      console.error(err);
      setBriefMessage("Failed to synthesize brief. Revealing standard structural brief instead.");
    } finally {
      setIsBriefLoading(false);
    }
  };

  const starterPrompts = [
    { label: "Design audit principles", prompt: "Explain the main visual guidelines for creating high-end typographic contrast." },
    { label: "Modern Swiss color cards", prompt: "Suggest a warm travertine color palette with charcoal ink values." },
    { label: "Pre-press check formulas", prompt: "What are some standard guidelines regarding bleed settings and ink thresholds for offset print design?" },
  ];  return (
    <section id="ai-partner" className="py-20 border-b border-black bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#ff5100] rotate-45" />
              <span className="font-mono text-xs text-[#ff5100] font-bold tracking-widest uppercase">
                SERVER-SIDE COGNITIVE INTELLIGENCE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-black tracking-tighter uppercase">
              Aura Creative Companion
            </h2>
          </div>
          <p className="font-mono text-xs text-black/60 max-w-sm leading-relaxed">
            Consult the AI Director about branding decisions, critique your font selections, or dynamically synthesize comprehensive design briefs to start practicing.
          </p>
        </div>

        {/* Dashboard setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: 01 // BRAIN CHAT INTERFACE (7 columns) */}
          <div className="lg:col-span-7 flex flex-col bg-white border border-black rounded-none overflow-hidden h-[540px]">
            
            {/* Header chat detail */}
            <div className="p-4 border-b border-black/10 bg-[#fbfbfb] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5100] animate-pulse" />
                <div>
                  <h4 className="font-mono text-xs font-extrabold text-[#1a1a1a] uppercase tracking-wider">
                    AURA_DIAGNOSTIC_v4.5
                  </h4>
                  <p className="font-mono text-[9px] text-black/45 uppercase">
                    Model: gemini-3.5-flash • SECURE TUNNEL
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#ff5100] bg-[#ff5100]/5 px-2 py-0.5 rounded-none border border-[#ff5100]/25 font-bold">
                AI COGNITIVE PARTNER
              </span>
            </div>

            {/* Core Messages Stream Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-none p-3.5 border ${
                      msg.role === "user"
                        ? "bg-white border-black text-black shadow-sm"
                        : "bg-[#fbfbfb] border-black/15 text-black/90"
                    }`}
                  >
                    {/* Role header pin */}
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-black/40 uppercase mb-1.5">
                      {msg.role === "user" ? "DESIGNER (YOU)" : "AURA_DICTOR // ONLINE"}
                      <span>•</span>
                      <span>{msg.timestamp.toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    {/* Styled text message block */}
                    <div className="space-y-2 leading-relaxed whitespace-pre-line font-light">
                      {msg.text.split("\n\n").map((para, i) => {
                        // Very basic markdown translation for bold strings
                        const boldRegex = /\*\*(.*?)\*\*/g;
                        const formattedText = para.split(boldRegex).map((chunk, j) => {
                          return j % 2 === 1 ? <strong key={j} className="text-[#ff5100] font-black">{chunk}</strong> : chunk;
                        });
                        return <p key={i}>{formattedText}</p>;
                      })}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Spinner loader status */}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#fbfbfb] border border-black/15 text-black/50 rounded-none p-3 flex items-center gap-2">
                    <Loader2 size={13} className="animate-spin text-[#ff5100]" />
                    <span className="font-mono text-[10px] uppercase">Synthesizing constructive critique...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Prompt Starter Tips */}
            <div className="p-3 bg-[#fbfbfb] border-t border-black/10 flex flex-wrap gap-1.5">
              <span className="font-mono text-[9px] text-black/40 font-bold uppercase shrink-0 py-1">SUGGESTIONS:</span>
              {starterPrompts.map((tip, idx) => (
                <button
                  key={idx}
                  onClick={() => setInputText(tip.prompt)}
                  className="px-2 py-1 bg-white hover:bg-black border border-black text-[10px] font-mono rounded-none text-black hover:text-white transition-colors cursor-pointer font-bold"
                >
                  {tip.label}
                </button>
              ))}
            </div>

            {/* Inputs message row */}
            <form onSubmit={handleChatSubmit} className="p-3 bg-[#fbfbfb] border-t border-black/10 flex gap-2">
              <input
                type="text"
                placeholder="Ask Aura about color contrast ratios, Swiss layouts, prepress..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-white border border-black rounded-none px-3 text-xs text-black focus:outline-none focus:border-[#ff5100] placeholder:text-black/35 font-light"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isChatLoading}
                className="p-2.5 bg-black text-white hover:bg-[#ff5100] hover:text-black disabled:bg-black/10 disabled:text-black/40 rounded-none transition-colors cursor-pointer flex items-center justify-center shrink-0"
              >
                <Send size={15} />
              </button>
            </form>

          </div>

          {/* RIGHT: 02 // BRIEF SYNTHESIZER ENGINE (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-black rounded-none p-5">
            
            <div className="space-y-5">
              
              {/* Box Title */}
              <div className="flex items-center gap-2 pb-3 border-b border-black/10">
                <FileText size={16} className="text-[#ff5100]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                  CREATIVE BRIEF SYNTHESIZER
                </span>
              </div>

              {/* Form inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block font-mono text-[9px] text-black/55 font-bold uppercase mb-1">
                    TARGET INDUSTRY SECTOR
                  </label>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full bg-white border border-black text-black font-mono text-xs p-2.5 rounded-none cursor-pointer focus:border-[#ff5100]"
                  >
                    <option value="Specialty Coffee Roastery">Beverages // Specialty Coffee</option>
                    <option value="Electric Motorsports Association">Sports // Hypercar Drone Racing</option>
                    <option value="Lux Bio-Cell skincare">Beauty // Biodegradable Cosmetics</option>
                    <option value="Underground Electronic Stage">Arts // Cyber-Industrial Label</option>
                    <option value="Sustainable Architecture Studio">Real Estate // Green Urban Design</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[9px] text-black/55 font-bold uppercase mb-1">
                    VISUAL FORM DESIGN DIRECTIVE
                  </label>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full bg-white border border-black text-black font-mono text-xs p-2.5 rounded-none cursor-pointer focus:border-[#ff5100]"
                  >
                    <option value="Asymmetrical Modernist Swiss Grid">Asymmetrical Modernist Swiss</option>
                    <option value="Raw Brutalist Monochrome">Raw Brutalist Duotone</option>
                    <option value="Futuristic Technical Blueprints">Cybernetic Blueprint Line-art</option>
                    <option value="Organic Minimalist Wabi-Sabi">Quiet Organic Sandy Minimalism</option>
                  </select>
                </div>

                <button
                  onClick={handleGenerateBrief}
                  disabled={isBriefLoading}
                  className="w-full flex items-center justify-center gap-1.5 py-3 bg-[#ff5100] text-black border border-black hover:bg-black hover:text-[#ff5100] font-mono text-xs font-black tracking-wider rounded-none transition-colors cursor-pointer uppercase"
                >
                  {isBriefLoading ? (
                    <>
                      <Loader2 size={12} className="animate-spin text-black" />
                      COMPILING FROM COGNITIVE GRAPH...
                    </>
                  ) : (
                    <>
                      <Sparkles size={12} />
                      SYNTHESIZE PROJECT BRIEF
                    </>
                  )}
                </button>
              </div>

              {/* Render generated brief MEMO block */}
              {generatedBrief && (
                <div className="bg-[#fbfbfb] border border-black rounded-none p-4 text-xs space-y-3 shadow-inner max-h-[240px] overflow-y-auto">
                  
                  {/* Pin identifier */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-black/50 font-bold uppercase border-b border-black/10 pb-1.5">
                    <span>SECTOR STAMP // {generatedBrief.sector}</span>
                    <span className="text-[#ff5100] font-bold">STATUS: READY</span>
                  </div>

                  {/* Generated Details */}
                  <div>
                    <h5 className="font-display font-black text-[#1a1a1a] text-sm tracking-tight mb-1 uppercase">
                      {generatedBrief.title}
                    </h5>
                    <p className="font-mono text-[9px] text-[#ff5100] font-bold uppercase">
                      CLIENT ID: {generatedBrief.client}
                    </p>
                  </div>

                  <div className="space-y-2 text-black">
                    <div>
                      <span className="font-mono text-[8px] text-black/50 font-bold uppercase block">TARGET AUDIENCE</span>
                      <p className="text-[11px] text-black/75 leading-relaxed font-light">{generatedBrief.targetAudience}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-black/50 font-bold uppercase block">MISSION STATEMENT</span>
                      <p className="text-[11px] text-black/75 leading-relaxed font-light">{generatedBrief.objectives}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-black/50 font-bold uppercase block">REQUIRED DELIVERABLES</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {generatedBrief.deliverables.map((del, index) => (
                          <span key={index} className="px-1.5 py-0.5 bg-white border border-black rounded-none font-mono text-[9px] font-bold text-black">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-black/50 font-bold uppercase block">STYLE DIRECTIVES / CHROMATIC MOOD</span>
                      <p className="text-[11px] text-black/75 leading-relaxed font-light italic bg-white p-2 rounded-none border border-black/15">
                        "{generatedBrief.styleDirectives}"
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* Warning/fallback message ticker */}
              {briefMessage && (
                <p className="font-mono text-[9px] text-[#ff5100] bg-[#ff5100]/5 p-2 border border-[#ff5100]/25 rounded-none font-bold">
                  {briefMessage}
                </p>
              )}

            </div>

            <div className="pt-4 border-t border-black/15 mt-4 flex items-center gap-1.5 text-[10px] font-mono text-black/40 font-bold">
              <HelpCircle size={12} className="text-[#ff5100] shrink-0" />
              <span>Clicking 'Synthesize' sends parameters into our server-side LLM model configuration to yield real briefs.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

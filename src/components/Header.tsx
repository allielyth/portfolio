import React from "react";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollTo, activeSection }: HeaderProps) {
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "01 // CORES", targetId: "works", labelShort: "Works" },
    { label: "02 // SANDBOX", targetId: "sandbox", labelShort: "Sandbox" },
    { label: "03 // CREATIVE AI", targetId: "ai-partner", labelShort: "Aura AI" },
    { label: "04 // TIMELINE", targetId: "timeline", labelShort: "Timeline" },
  ];

  return (
    <header className="border-b border-black bg-[#f4f4f4]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          
          {/* Brand Signature */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-black border border-black rounded-none text-white">
              <Terminal size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black tracking-widest text-black text-base animate-pulse">
                  ADRIAN VOSS
                </span>
                <span className="shrink-0 text-[10px] font-mono border border-[#ff5100]/30 text-[#ff5100] px-1.5 py-0.2 rounded-sm bg-[#ff5100]/5">
                  LEVEL IV
                </span>
              </div>
              <p className="font-mono text-[10px] tracking-wider text-black/50 uppercase">
                Art Direction & Typographic Architecture
              </p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.targetId}
                onClick={() => onScrollTo(item.targetId)}
                className={`px-3 py-1.5 rounded-none font-mono text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === item.targetId
                    ? "bg-black text-white border border-black"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Status */}
          <div className="hidden lg:flex items-center gap-6 text-right">
            <div>
              <p className="font-mono text-[9px] text-black/40 uppercase tracking-widest">
                LOCAL CHRONO (UTC)
              </p>
              <p className="font-mono text-[11px] text-[#ff5100] font-bold tracking-wider">
                {time || "22:35:00"}
              </p>
            </div>
            <div className="h-8 w-px bg-black/15" />
            <div>
              <p className="font-mono text-[9px] text-black/40 uppercase tracking-widest">
                ACTIVE RADAR
              </p>
              <p className="font-mono text-[11px] text-black flex items-center gap-1.5 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                STUTTGART, GER
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

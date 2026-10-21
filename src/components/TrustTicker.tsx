import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface TrustTickerProps {
  isDark?: boolean;
}

export const TrustTicker: React.FC<TrustTickerProps> = () => {
  const enterpriseClients = [
    {
      name: "CITADEL",
      subtext: "Securities",
      domain: "Quant Trading Desk",
      symbol: (
        <svg className="w-5 h-5 text-[#a8772a]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 2,12 12,22 22,12" opacity="0.85" />
          <polygon points="12,6 6,12 12,18 18,12" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "TOWER",
      subtext: "Research Capital",
      domain: "Ultra-Low Latency C++",
      symbol: (
        <svg className="w-5 h-5 text-[#a8772a]" viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="4" height="16" rx="1" />
          <rect x="10" y="8" width="4" height="12" rx="1" />
          <rect x="16" y="2" width="4" height="18" rx="1" />
        </svg>
      )
    },
    {
      name: "GOLDMAN",
      subtext: "Sachs Tech",
      domain: "Algorithmic Systems",
      symbol: (
        <svg className="w-5 h-5 text-[#a8772a]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "RAZORPAY",
      subtext: "Engineering",
      domain: "Payments Scale Infra",
      symbol: (
        <svg className="w-5 h-5 text-[#14a58c]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 3L4 14H10L8 21L19 9H12L15 3H7Z" />
        </svg>
      )
    },
    {
      name: "SWIGGY",
      subtext: "Core Tech",
      domain: "Real-Time Distributed",
      symbol: (
        <svg className="w-5 h-5 text-[#a8772a]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      )
    },
    {
      name: "FLIPKART",
      subtext: "Commerce Cloud",
      domain: "Tier-1 High Scale",
      symbol: (
        <svg className="w-5 h-5 text-[#a8772a]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3z" />
        </svg>
      )
    },
    {
      name: "ZEPTO",
      subtext: "Supply Engine",
      domain: "Sub-Second Logistics",
      symbol: (
        <svg className="w-5 h-5 text-[#a8772a]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  ];

  // Repeat for continuous seamless ticker loop
  const tickerItems = [...enterpriseClients, ...enterpriseClients];

  return (
    <section className="py-12 border-y border-[rgba(168,119,42,0.18)] bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Subtitle */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#5f6679] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[rgba(168,119,42,0.25)]"></span>
            Trusted by Engineering Leaders at Tier-1 Tech Desks & Global GCCs
            <span className="w-8 h-px bg-[rgba(168,119,42,0.25)]"></span>
          </span>
        </div>

        {/* Infinite Gliding Marquee */}
        <div className="marquee-container py-2">
          <div className="marquee-track">
            {tickerItems.map((client, idx) => (
              <div 
                key={idx}
                className="w-48 flex-shrink-0 p-3.5 rounded-2xl border border-[rgba(168,119,42,0.18)] bg-white shadow-2xs hover:border-[#a8772a] hover:shadow-[0_8px_20px_-6px_rgba(168,119,42,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[rgba(226,182,107,0.1)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {client.symbol}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold tracking-wider truncate font-mono text-[#101a33]">
                      {client.name}
                    </div>
                    <div className="text-[9px] text-[#5f6679] font-medium truncate uppercase tracking-tight">
                      {client.subtext}
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-[#a8772a] font-medium truncate pt-1.5 border-t border-[rgba(168,119,42,0.1)]">
                  {client.domain}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification & Compliance Strip */}
        <div className="mt-9 pt-6 border-t border-[rgba(168,119,42,0.15)] flex flex-wrap items-center justify-center gap-y-2.5 gap-x-8 text-xs font-medium text-[#5f6679]">
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
            <ShieldCheck className="w-4 h-4 text-[#14a58c]" />
            <span className="text-[#101a33]">ISO 27001 & SOC-2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
            <Award className="w-4 h-4 text-[#a8772a]" />
            <span className="text-[#101a33]">8-Hour Turnaround Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
            <CheckCircle2 className="w-4 h-4 text-[#14a58c]" />
            <span className="text-[#101a33]">100% Pre-Audited Code Signals</span>
          </div>
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
            <Sparkles className="w-4 h-4 text-[#a8772a]" />
            <span className="text-[#101a33]">12,000+ Placements Across India & US</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustTicker;

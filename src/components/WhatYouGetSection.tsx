import React from 'react';

export const WhatYouGetSection: React.FC = () => {
  return (
    <section id="what-you-get" className="py-24 bg-[#f5f0e6]/70">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-14">
          <div className="eyebrow-text">What you get</div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.2] text-[#101a33]">
            Everything you need to <span className="g">hire faster</span>
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="gold-card group cursor-default">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#101a33] mb-2 group-hover:text-[#a8772a] transition-colors">
              AI Job Matching
            </h3>
            <p className="text-[#5f6679] text-sm leading-relaxed">
              StrydzAI scores every candidate against your role for a guaranteed 98% technical match rate.
            </p>
          </div>

          {/* Card 2 */}
          <div className="gold-card group cursor-default">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#101a33] mb-2 group-hover:text-[#a8772a] transition-colors">
              Verified Profiles
            </h3>
            <p className="text-[#5f6679] text-sm leading-relaxed">
              Skills, architectural experience and notice period strictly validated before you review them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="gold-card group cursor-default">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#101a33] mb-2 group-hover:text-[#a8772a] transition-colors">
              Lightning Fast
            </h3>
            <p className="text-[#5f6679] text-sm leading-relaxed">
              First pre-assessed profiles in 8 hours and a complete, calibrated shortlist within 4 days.
            </p>
          </div>

          {/* Card 4 */}
          <div className="gold-card group cursor-default">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2 20c0-4 3-6 7-6s7 2 7 6" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M17 14c3 0 5 1.8 5 5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#101a33] mb-2 group-hover:text-[#a8772a] transition-colors">
              1M+ Talent Pool
            </h3>
            <p className="text-[#5f6679] text-sm leading-relaxed">
              Engineers, data scientists and quants across every major Indian tech hub and GCC corridor.
            </p>
          </div>

          {/* Card 5 */}
          <div className="gold-card group cursor-default">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M3 20h18M5 16l4-5 4 3 6-8" />
                <path d="M15 6h4v4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#101a33] mb-2 group-hover:text-[#a8772a] transition-colors">
              Quant &amp; HFT Specialists
            </h3>
            <p className="text-[#5f6679] text-sm leading-relaxed">
              Low-latency C++, FPGA and algorithmic technologists sourced and vetted by domain experts.
            </p>
          </div>

          {/* Card 6 */}
          <div className="gold-card group cursor-default">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#101a33] mb-2 group-hover:text-[#a8772a] transition-colors">
              Confidential Hiring
            </h3>
            <p className="text-[#5f6679] text-sm leading-relaxed">
              Stealth searches and executive replacements conducted under strict, airtight NDAs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatYouGetSection;

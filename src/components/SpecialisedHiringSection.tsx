import React, { useState } from 'react';

interface SpecialisedHiringSectionProps {
  onOpenHireModal?: (category?: string) => void;
}

export const SpecialisedHiringSection: React.FC<SpecialisedHiringSectionProps> = ({ onOpenHireModal }) => {
  const [activeSector, setActiveSector] = useState<string | null>(null);

  const row1 = ['IT & Software', 'BFSI', 'Healthcare', 'Manufacturing', 'E-commerce', 'Pharma', 'Telecom'];
  const row2 = ['Consulting', 'Retail', 'Education'];

  const handleSelect = (sector: string) => {
    setActiveSector(sector);
    onOpenHireModal?.(sector);
  };

  return (
    <section className="py-20 md:py-24 bg-[#faf7f2] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
            Specialised recruiters for{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              every sector
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
            Deep vertical networks across high-growth tech, fintech, health, and consumer platforms.
          </p>
        </div>

        {/* Sector Pill Badges */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {row1.map((sector) => (
              <button
                key={sector}
                onClick={() => handleSelect(sector)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition border ${
                  activeSector === sector
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white border-[#e8e2d5] text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shadow-2xs hover:-translate-y-0.5'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {row2.map((sector) => (
              <button
                key={sector}
                onClick={() => handleSelect(sector)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition border ${
                  activeSector === sector
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white border-[#e8e2d5] text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shadow-2xs hover:-translate-y-0.5'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialisedHiringSection;

import React from 'react';

export const TrustTicker: React.FC = () => {
  const credentials = [
    { name: 'Global BFSI & Fintech' },
    { name: 'Enterprise Technology & SaaS' },
    { name: 'Healthcare & Life Sciences' },
    { name: 'Industrial & Manufacturing' },
    { name: 'Promoter-Led Enterprises' },
    { name: 'Consumer & Digital Platforms' },
  ];

  return (
    <section className="py-12 bg-[#f4efe6] border-y border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-8 sm:w-16 bg-[#dcd5c7]" />
          <p className="text-[11px] font-bold tracking-widest text-[#23235b] uppercase">
            Executive Advisory Across India & Global Corridors
          </p>
          <span className="h-px w-8 sm:w-16 bg-[#dcd5c7]" />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {credentials.map((item) => (
            <div 
              key={item.name}
              className="text-xs sm:text-sm font-semibold tracking-wide text-slate-600 px-4 py-2 rounded-full bg-white/70 border border-[#e8e2d5] hover:text-[#23235b] hover:border-[#ff9900]/50 transition cursor-default select-none shadow-2xs"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustTicker;

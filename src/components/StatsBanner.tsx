import React from 'react';

export const StatsBanner: React.FC = () => {
  const stats = [
    { value: '25+ Yrs', label: 'EMA Partners India Pedigree' },
    { value: '1,500+', label: 'Board & Leadership Placements' },
    { value: '6 Practices', label: 'BFSI, Tech, HR, Health, Mfg & Consumer' },
    { value: '94%', label: 'Executive Retention Beyond 2 Years' },
  ];

  return (
    <section className="bg-[#23235b] text-white py-14 sm:py-16 border-y border-[#ff9900]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ff9900]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

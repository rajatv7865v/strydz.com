import React from 'react';

export const StatsBanner: React.FC = () => {
  const stats = [
    { value: '25+ Yrs', label: 'Executive Search & Advisory Pedigree' },
    { value: '1,500+', label: 'Board & Leadership Placements' },
    { value: '6 Practices', label: 'BFSI, Tech, HR, Health, Mfg & Consumer' },
    { value: '94%', label: 'Executive Retention Beyond 2 Years' },
  ];

  return (
    <section className="bg-[#31547b] text-white py-14 sm:py-16 border-y border-[#514f14]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200">
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

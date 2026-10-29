import React from 'react';

export const StatsBanner: React.FC = () => {
  const stats = [
    { value: '10K+', label: 'Successful placements' },
    { value: '500+', label: 'Hiring partners' },
    { value: '48 hrs', label: 'Avg. time to shortlist' },
    { value: '92%', label: 'Retention after 1 year' },
  ];

  return (
    <section className="bg-indigo-600 text-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-indigo-100">
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

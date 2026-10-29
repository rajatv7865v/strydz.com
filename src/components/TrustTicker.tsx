import React from 'react';

export const TrustTicker: React.FC = () => {
  const clients = [
    { name: 'Acme Corp' },
    { name: 'Nexora' },
    { name: 'Bluewave' },
    { name: 'Finlytics' },
    { name: 'Orbitly' },
    { name: 'Zenith' },
  ];

  return (
    <section className="py-14 bg-[#f4efe6] border-y border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-8 sm:w-12 bg-[#dcd5c7]" />
          <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
            Trusted by growing teams across India
          </p>
          <span className="h-px w-8 sm:w-12 bg-[#dcd5c7]" />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="text-lg sm:text-xl font-bold tracking-tight text-slate-400/90 hover:text-slate-700 transition cursor-default select-none"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustTicker;

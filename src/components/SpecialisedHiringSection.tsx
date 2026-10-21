import React from 'react';

interface SpecialisedHiringSectionProps {
  onOpenHireModal: (tag?: string) => void;
}

export const SpecialisedHiringSection: React.FC<SpecialisedHiringSectionProps> = ({ onOpenHireModal }) => {
  const tags = [
    'Software Engineers',
    'Data Scientists',
    'Quant Researchers',
    'C++ Low Latency',
    'FPGA Engineers',
    'DevOps & SRE',
    'ML / LLM Engineers',
    'Trading Technologists',
    'GCC Managing Directors',
    'Distributed Systems Architects',
    'Fullstack Staff Engineers',
    'VP of Technology'
  ];

  return (
    <section id="hft" className="py-24 bg-[#f5f0e6] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6">
        
        <div className="text-left mb-10">
          <div className="eyebrow-text">Specialised hiring</div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.2] text-[#101a33] mb-3">
            Built for tech, trading and <span className="g">high-frequency firms</span>
          </h2>
          <p className="text-[#5f6679] text-base font-light leading-relaxed max-w-[580px]">
            Whether you are scaling a product team, launching an India GCC, or building a low-latency desk, we find people who are hard to find.
          </p>
        </div>

        {/* Tags Cloud */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => onOpenHireModal(tag)}
              className="tag-pill cursor-pointer group flex items-center gap-2"
            >
              <span>{tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(168,119,42,0.35)] group-hover:bg-[#a8772a] group-hover:scale-125 transition-all"></span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialisedHiringSection;

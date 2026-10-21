import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Post your job',
      desc: 'Share your requirements in minutes. It is completely free.'
    },
    {
      step: '02',
      title: 'StrydzAI matches',
      desc: 'The engine scans the pool and ranks best-fit talent in 8h.'
    },
    {
      step: '03',
      title: 'Expert screening',
      desc: 'Our recruiters verify skills, code signal and career intent.'
    },
    {
      step: '04',
      title: 'Interview & hire',
      desc: 'Meet a curated shortlist and close offers in days.'
    }
  ];

  return (
    <section id="how" className="py-24 bg-[#fdfbf7] relative">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-14">
          <div className="eyebrow-text">How it works</div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.2] text-[#101a33]">
            From job post to offer in <span className="g">four steps</span>
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="step-item group relative cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[40px] font-bold block g leading-none group-hover:scale-105 transition-transform">
                  {s.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-[rgba(168,119,42,0.3)] group-hover:bg-[#a8772a] group-hover:scale-125 transition-all"></span>
              </div>
              <h3 className="text-base font-bold text-[#101a33] mb-1.5 group-hover:text-[#a8772a] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[#5f6679] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Testimonial Quote Box with Hover Glow */}
        <div className="quote-box mt-14 group">
          <span className="w-[72px] h-[72px] rounded-full inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br from-[#c8964a] to-[#6b4417] flex-none group-hover:scale-105 transition-transform shadow-md">
            <svg className="w-full h-full"><use href="#avatar-user" /></svg>
          </span>
          <div>
            <p className="text-[19px] font-light leading-relaxed text-[#101a33]">
              "We filled a niche low-latency role in under a week. The shortlist was precise, with no noise."
            </p>
            <small className="block mt-3 text-[#a8772a] font-medium text-sm">
              Head of Engineering, Tier-1 Algorithmic Trading Firm
            </small>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

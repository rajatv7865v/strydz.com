import React from 'react';
import { ShieldCheck, Target, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const cards = [
    {
      title: 'Trusted Pedigree',
      text: "Backed by Green-tree' 20-year executive-search legacy.",
      icon: 'https://jamesdouglasglobal.com/assets/img/whyus/trusted-pedigree.svg',
      fallbackIcon: <ShieldCheck className="w-10 h-10 text-[#FF7D04]" />,
    },
    {
      title: 'Built Around Your Business',
      text: 'RPO models tailored to your context and growth.',
      icon: 'https://jamesdouglasglobal.com/assets/img/whyus/built-around-business.svg',
      fallbackIcon: <Target className="w-10 h-10 text-[#FF7D04]" />,
    },
    {
      title: 'Realistic & Effective',
      text: 'Co-created solutions that deliver practical, proven impact.',
      icon: 'https://jamesdouglasglobal.com/assets/img/whyus/realistic-effective.svg',
      fallbackIcon: <CheckCircle2 className="w-10 h-10 text-[#FF7D04]" />,
    },
  ];

  return (
    <section className="why-choose-us-section py-16 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-[#FF7D04] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FF7D04]/10 flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="hidden only-if-img-fails">
                    {card.fallbackIcon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0B3041] mb-3">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-[#0B3041]/80 leading-relaxed font-normal">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;

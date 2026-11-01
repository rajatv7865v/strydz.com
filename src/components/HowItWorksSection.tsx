import React from 'react';
import { Compass, Users, Target, Award, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onDiscover?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onDiscover }) => {
  const cards = [
    {
      title: 'Advisory to Boards & Leadership Teams',
      desc: 'We help organisations think beyond the role in front of them, aligning leadership decisions with long-term strategy, culture, and sustainable growth.',
      icon: Compass,
      color: '#ffffff',
    },
    {
      title: 'Partnering with Leaders',
      desc: 'We work closely with senior professionals at pivotal career moments and help them execute informed, well-aligned career decisions.',
      icon: Users,
      color: '#ffffff',
    },
    {
      title: 'Meaning Over Metrics',
      desc: 'We measure success in leadership retention, organizational impact, and strategic clarity — never transactional volume.',
      icon: Target,
      color: '#ffffff',
    },
    {
      title: 'Building Our Advisory Talent',
      desc: 'We invest deeply in developing advisors who bring sound judgment, discretion, and real-world market context to every engagement.',
      icon: Award,
      color: '#ffffff',
    },
  ];

  const handleDiscover = () => {
    if (onDiscover) {
      onDiscover();
    } else {
      window.location.hash = '#about';
    }
  };

  return (
    <section className="py-20 md:py-24 my-6 bg-gradient-to-br from-[#31547b] via-[#264364] to-[#152537] text-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#31547b]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#514f14]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 mb-2 block">
                Executive Search Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-white leading-[1.15]">
                Why Choose <br />
                <span className="text-white">Strydz?</span>
              </h2>
              <div className="w-20 h-1 bg-[#514f14] rounded-sm mt-4 mb-6"></div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              In a world full of frameworks, tools, and opinions, hiring decisions are still deeply human. At Strydz, we work closely with organisations and professionals during critical hiring moments when judgment, context, and perspective matter as much as capability.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              We understand what it takes to succeed in roles across management and leadership levels, and we stay focused on what will work in the real world. Our role is not just to find people, but to bring insight, perspective, and the right conversations together so hiring decisions are made with confidence, not urgency.
            </p>

            {/* Core Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[#514f14] font-bold bg-white/10 w-5 h-5 rounded-full flex items-center justify-center">✓</span>
                <span>Partnership over Process</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#514f14] font-bold bg-white/10 w-5 h-5 rounded-full flex items-center justify-center">✓</span>
                <span>Advisory over Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#514f14] font-bold bg-white/10 w-5 h-5 rounded-full flex items-center justify-center">✓</span>
                <span>Meaning over Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#514f14] font-bold bg-white/10 w-5 h-5 rounded-full flex items-center justify-center">✓</span>
                <span>Legacies, not quick fixes</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleDiscover}
                className="btn-warning-custom px-6 py-3 rounded-xl text-sm font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Discover Our Expertise</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards (2x2 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all group hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5 font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

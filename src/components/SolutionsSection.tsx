import React from 'react';
import { Compass, Users, Target, Globe, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenHireModal?: (category?: string) => void;
  onOpenJobPortal?: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenHireModal, onOpenJobPortal }) => {
  const pillars = [
    {
      num: '01',
      title: 'Advisory to Boards & Leaders',
      desc: 'We help boards and leadership teams see beyond the immediate, shaping leadership for resilience, innovation, and long-term enterprise growth.',
      icon: Compass,
      tag: 'Governance & Search',
    },
    {
      num: '02',
      title: 'Partnering with Leaders',
      desc: 'We guide senior professionals at pivotal career moments, aligning personal ambition with strategic purpose and authentic organizational fit.',
      icon: Users,
      tag: 'Executive Career Moves',
    },
    {
      num: '03',
      title: 'Meaning Over Metrics',
      desc: 'We measure leadership engagements in sustained business impact, cultural alignment, and executive retention — not transactional numbers.',
      icon: Target,
      tag: 'Impact & Culture',
    },
    {
      num: '04',
      title: 'Moving Ideas Forward',
      desc: 'Through proprietary research, CEO succession briefs, and board governance insights, we expand the conversation on what leadership means today.',
      icon: Globe,
      tag: 'Thought Leadership',
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Philosophy Manifesto Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 bg-white border border-[#e8e2d5] rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">Our Philosophy</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
            Redefining Leadership with Intent
          </h2>
          
          <div className="section-divider"></div>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mt-4">
            At James Douglas, we believe leadership isn’t “filled”. It is built over time, tested in complexity, and chosen with intent. That’s why we don’t see ourselves as recruiters. We work as advisors and long-term partners, shaping leadership decisions that impact businesses and careers beyond the immediate hire.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-2">
            <button
              onClick={() => onOpenJobPortal ? onOpenJobPortal() : window.location.hash = '#candidates'}
              className="btn-warning-custom px-6 py-3 rounded-xl text-sm font-semibold shadow-sm"
            >
              Explore Leadership Roles
            </button>
            <button
              onClick={() => onOpenHireModal?.('Leadership Advisory')}
              className="btn-navy-custom px-6 py-3 rounded-xl text-sm font-semibold shadow-sm"
            >
              Build Your Leadership Team
            </button>
          </div>
        </div>

        {/* 2. What We Do - 4 Pillars Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
            Our Advisory{' '}
            <span className="text-[#ff9900]">
              Pillars
            </span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
            Trusted partnership shaping companies and leadership legacies.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-7 shadow-xs flex flex-col justify-between group hover:border-[#ff9900]/60"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#23235b]/5 text-[#23235b] flex items-center justify-center mb-5 group-hover:bg-[#23235b] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 text-[#23235b] group-hover:text-[#ff9900] transition-colors" />
                  </div>
                  
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#ff9900]">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-semibold text-[#23235b] mt-2 group-hover:text-[#23235b] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <button
                    onClick={() => onOpenHireModal?.(item.title)}
                    className="text-xs sm:text-sm font-semibold text-[#23235b] hover:text-[#ff9900] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff9900] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

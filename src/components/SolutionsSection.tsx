import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenHireModal?: (category?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenHireModal }) => {
  const solutions = [
    {
      num: '01',
      title: 'Permanent Hiring',
      desc: 'Pre-vetted mid to senior professionals matched to your culture and role.',
    },
    {
      num: '02',
      title: 'Executive Search',
      desc: 'Confidential leadership hiring for CXO and board-level positions.',
    },
    {
      num: '03',
      title: 'Contract Staffing',
      desc: 'Flexible, compliant staffing for projects and seasonal demand.',
    },
    {
      num: '04',
      title: 'RPO',
      desc: 'A dedicated recruitment team embedded in your hiring function.',
    },
    {
      num: '05',
      title: 'AI Talent Matching',
      desc: 'Smart matching that ranks candidates by skills, intent and fit.',
    },
    {
      num: '06',
      title: 'Career Coaching',
      desc: 'Resume, interview and upskilling support for job seekers.',
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            End-to-end{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              hiring solutions
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
            From a single critical hire to scaling an entire team, Strydz has a calibrated model that fits.
          </p>
        </div>

        {/* 6 Cards Grid with Premium Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div
              key={item.num}
              className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-7 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-2 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5">
                <button
                  onClick={() => onOpenHireModal?.(item.title)}
                  className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

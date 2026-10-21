import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { 
  Quote, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenHireModal: (caseStudyTitle?: string) => void;
  isDark: boolean;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenHireModal, isDark }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = caseStudiesData[activeCaseIndex];

  return (
    <section id="case-studies" className={`py-20 border-t ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/70 text-slate-900 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="clean-badge">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How Global Tech Leaders Scale with Strydz
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Real outcomes from algorithmic trading desks, hypergrowth AI unicorns, and Fortune 200 capability centers.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {caseStudiesData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                activeCaseIndex === idx
                  ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {idx === 0 ? 'HFT & Quant Scale' : idx === 1 ? 'Fortune 200 GCC Hub' : 'GenAI Unicorn Sprint'}
            </button>
          ))}
        </div>

        {/* Active Case Study Spotlight */}
        <div className={`rounded-3xl p-8 md:p-10 border shadow-xl transition-all duration-300 ${
          isDark 
            ? 'bg-slate-900/90 border-slate-800 text-white' 
            : 'bg-white border-slate-200/90 shadow-md text-slate-900'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Challenge & Solution */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase font-bold text-blue-600 dark:text-blue-400">
                  {currentCase.industry}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {currentCase.clientType}
                </h3>
              </div>

              {/* Challenge & Solution Blocks */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="font-bold text-rose-500 block mb-1 uppercase font-mono text-[10px]">The Challenge:</span>
                  <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{currentCase.challenge}</p>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1 uppercase font-mono text-[10px]">The Strydz Execution:</span>
                  <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{currentCase.solution}</p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className={`p-5 rounded-2xl border space-y-3 ${
                isDark ? 'bg-blue-950/30 border-blue-800/60' : 'bg-blue-50/70 border-blue-100'
              }`}>
                <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400 opacity-80" />
                <p className={`text-xs sm:text-sm italic leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  "{currentCase.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <img
                    src={currentCase.testimonial.avatar}
                    alt={currentCase.testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-200 dark:border-blue-700"
                  />
                  <div>
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{currentCase.testimonial.author}</div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{currentCase.testimonial.title}, {currentCase.testimonial.company}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Metrics Panel */}
            <div className={`lg:col-span-5 p-6 md:p-8 rounded-2xl border space-y-5 ${
              isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> Validated Business Results
              </h4>

              <div className="space-y-3">
                {currentCase.results.map((res, rIdx) => (
                  <div key={rIdx} className={`p-4 rounded-xl border space-y-1 shadow-2xs ${
                    isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                      {res.value}
                    </div>
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      {res.label}
                    </div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {res.desc}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenHireModal(`Case Study: ${currentCase.clientType}`)}
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

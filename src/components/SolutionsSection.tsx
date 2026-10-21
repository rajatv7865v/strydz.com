import React, { useState } from 'react';
import { solutionsData } from '../data/solutions';
import { 
  Cpu, 
  Compass, 
  Globe, 
  Layers, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenHireModal: (solutionTitle: string) => void;
  isDark: boolean;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenHireModal, isDark }) => {
  const [selectedSolutionId, setSelectedSolutionId] = useState(solutionsData[0].id);

  const activeSolution = solutionsData.find(s => s.id === selectedSolutionId) || solutionsData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-rose-500" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="solutions" className={`py-20 border-t ${
      isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="clean-badge">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Enterprise Talent Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Full-Spectrum Solutions for Every Stage of Scale
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            From emergency high-priority C++ quant replacements to establishing a 500-seat multi-disciplinary GCC hub in Bengaluru or Hyderabad.
          </p>
        </div>

        {/* Horizontal Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {solutionsData.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setSelectedSolutionId(sol.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-150 border ${
                selectedSolutionId === sol.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <span className={selectedSolutionId === sol.id ? 'text-white' : ''}>
                {getIcon(sol.icon)}
              </span>
              <span>{sol.title.split(' ')[0]} {sol.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Active Solution Feature Spotlight Card */}
        <div className={`rounded-3xl p-8 md:p-10 border shadow-xl transition-all duration-300 ${
          isDark 
            ? 'bg-slate-900/90 border-slate-800 text-white' 
            : 'bg-white border-slate-200/90 shadow-md text-slate-900'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-blue-50 border-blue-100'
                }`}>
                  {getIcon(activeSolution.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400 block">
                    {activeSolution.badge}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {activeSolution.title}
                  </h3>
                </div>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {activeSolution.longDesc}
              </p>

              {/* Key Deliverables Checkmarks */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Core Solution Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.deliverables.map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience Tag */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Ideal For:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  isDark 
                    ? 'bg-slate-800 text-slate-200 border-slate-700' 
                    : 'bg-slate-100 text-slate-800 border-slate-200'
                }`}>
                  {activeSolution.targetAudience}
                </span>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenHireModal(activeSolution.title)}
                  className="px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/25 flex items-center gap-2 group"
                >
                  <span>Request Solution Proposal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Metrics & Proof Panel */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl p-6 border space-y-5 ${
                isDark 
                  ? 'bg-slate-950/70 border-slate-800' 
                  : 'bg-slate-50 border-slate-200/90'
              }`}>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Performance Benchmarks
                </h4>

                <div className="space-y-3">
                  {activeSolution.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className={`p-4 rounded-xl border flex items-center justify-between shadow-2xs ${
                      isDark 
                        ? 'bg-slate-900 border-slate-800' 
                        : 'bg-white border-slate-200'
                    }`}>
                      <span className={`text-xs sm:text-sm font-medium ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {metric.label}
                      </span>
                      <span className="text-base sm:text-lg font-black font-mono text-blue-600 dark:text-blue-400">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={`p-4 rounded-xl border text-xs flex items-start gap-2.5 ${
                  isDark 
                    ? 'bg-blue-950/30 border-blue-800/60 text-blue-200' 
                    : 'bg-blue-50/90 border-blue-200 text-blue-900'
                }`}>
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Backed by Strydz Quality Assurance: 100% free candidate replacement guarantee within 90 days of onboarding.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

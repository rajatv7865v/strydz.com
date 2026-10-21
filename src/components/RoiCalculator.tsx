import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  Coins, 
  ArrowRight, 
  Sparkles, 
  Zap
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenHireModal: (details?: string) => void;
  isDark?: boolean;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenHireModal }) => {
  const [roleCount, setRoleCount] = useState<number>(5);
  const [seniority, setSeniority] = useState<'mid' | 'senior' | 'leadership'>('senior');
  const [domain, setDomain] = useState<'hft' | 'genai' | 'cloud' | 'gcc'>('genai');

  // Calculation multipliers
  const baseSalaryBySeniority = {
    mid: 35, // in Lakhs INR
    senior: 70,
    leadership: 140
  };

  const domainMultiplier = {
    hft: 1.35,
    genai: 1.25,
    cloud: 1.0,
    gcc: 1.1
  };

  const avgSalary = Math.round(baseSalaryBySeniority[seniority] * domainMultiplier[domain]);
  const traditionalAgencyFee = Math.round(avgSalary * 0.16 * roleCount);
  const strydzOptimizedFee = Math.round(avgSalary * 0.11 * roleCount);
  const costSavings = traditionalAgencyFee - strydzOptimizedFee;

  const traditionalDaysToHire = seniority === 'leadership' ? 85 : seniority === 'senior' ? 65 : 45;
  const strydzDaysToHire = seniority === 'leadership' ? 24 : seniority === 'senior' ? 14 : 9;
  const daysSaved = (traditionalDaysToHire - strydzDaysToHire) * roleCount;

  return (
    <section id="calculator" className="py-24 border-t border-[rgba(168,119,42,0.18)] bg-[#f5f0e6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[rgba(168,119,42,0.25)] bg-[rgba(168,119,42,0.06)] text-[#a8772a]">
            <Calculator className="w-3.5 h-3.5 text-[#a8772a]" />
            <span>Interactive Hiring Velocity Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101a33]">
            Calculate Your Time & Cost Savings with <span className="g">StrydzAI™</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5f6679] leading-relaxed font-normal">
            See the direct business impact of sub-8-hour candidate matching and 4.8x higher technical interview pass rates.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[rgba(168,119,42,0.22)] shadow-[0_12px_36px_rgba(16,26,51,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-7">
              
              {/* Slider: Number of Roles */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-[#101a33]">
                    Open Engineering / Leadership Roles:
                  </label>
                  <span className="text-2xl font-mono font-black g">
                    {roleCount} {roleCount === 1 ? 'Role' : 'Roles'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={roleCount}
                  onChange={(e) => setRoleCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#f5f0e6] rounded-lg appearance-none cursor-pointer accent-[#a8772a]"
                />
                <div className="flex justify-between text-[11px] text-[#5f6679] font-mono">
                  <span>1 Role</span>
                  <span>15 Roles</span>
                  <span>30 Roles</span>
                </div>
              </div>

              {/* Seniority Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#101a33]">
                  Target Seniority Level:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'mid', label: 'Mid-Level (3-6 yrs)' },
                    { id: 'senior', label: 'Senior / Staff (7-12 yrs)' },
                    { id: 'leadership', label: 'Director / CXO (12+ yrs)' }
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setSeniority(lvl.id as any)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        seniority === lvl.id
                          ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white border-transparent shadow-[0_4px_14px_rgba(168,119,42,0.35)]'
                          : 'bg-[#fdfbf7] text-[#101a33] border-[rgba(168,119,42,0.2)] hover:border-[#a8772a] hover:bg-white'
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#101a33]">
                  Technical Domain:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'genai', label: 'GenAI / LLM' },
                    { id: 'hft', label: 'HFT / Quant C++' },
                    { id: 'cloud', label: 'Cloud & Systems' },
                    { id: 'gcc', label: 'GCC Hub Cohort' }
                  ].map((dom) => (
                    <button
                      key={dom.id}
                      onClick={() => setDomain(dom.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        domain === dom.id
                          ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white border-transparent shadow-[0_4px_14px_rgba(168,119,42,0.35)]'
                          : 'bg-[#fdfbf7] text-[#101a33] border-[rgba(168,119,42,0.2)] hover:border-[#a8772a] hover:bg-white'
                      }`}
                    >
                      {dom.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl border border-[rgba(168,119,42,0.2)] bg-[#fdfbf7] space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(168,119,42,0.15)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#a8772a] font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#a8772a] fill-[#a8772a]" /> Projected Impact Summary
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[rgba(20,165,140,0.1)] text-[#14a58c] border border-[rgba(20,165,140,0.25)]">
                  SLA: First Match &lt; 8h
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-xl border border-[rgba(168,119,42,0.18)] bg-white space-y-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#5f6679]">
                    <Clock className="w-3.5 h-3.5 text-[#a8772a]" />
                    <span>Time Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono g">
                    ~{Math.round(daysSaved / roleCount)} Days
                  </div>
                  <div className="text-[10px] text-[#5f6679]">
                    Per role vs agency average
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl border border-[rgba(168,119,42,0.18)] bg-white space-y-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#5f6679]">
                    <Coins className="w-3.5 h-3.5 text-[#14a58c]" />
                    <span>Cost Efficiency</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#14a58c]">
                    ₹{costSavings}L+
                  </div>
                  <div className="text-[10px] text-[#5f6679]">
                    Saved in recruitment spend
                  </div>
                </div>

              </div>

              {/* Velocity Breakdown Bar */}
              <div className="p-4 rounded-xl border border-[rgba(168,119,42,0.18)] bg-white space-y-2.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-[#5f6679]">Traditional Agency Time-to-Fill:</span>
                  <span className="font-mono text-[#d9534f] font-bold">{traditionalDaysToHire} Days</span>
                </div>
                <div className="w-full bg-[#f5f0e6] rounded-full h-2">
                  <div className="bg-[#e29d9b] h-2 rounded-full w-full"></div>
                </div>

                <div className="flex justify-between text-xs font-medium pt-2">
                  <span className="text-[#a8772a] font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> StrydzAI™ Time-to-Fill:
                  </span>
                  <span className="font-mono text-[#14a58c] font-bold">{strydzDaysToHire} Days</span>
                </div>
                <div className="w-full bg-[#f5f0e6] rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#9c6a1f] to-[#d2a24c] h-2 rounded-full transition-all duration-500 ease-out shadow-xs" 
                    style={{ width: `${Math.round((strydzDaysToHire / traditionalDaysToHire) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenHireModal(`${roleCount}x ${domain.toUpperCase()} Roles (${seniority})`)}
                className="btn p text-xs sm:text-sm w-full flex items-center justify-center gap-2 group"
              >
                <span>Hire {roleCount} Roles Under 8-Hour SLA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RoiCalculator;

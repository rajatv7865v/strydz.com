import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Code2, 
  Briefcase, 
  ArrowRight, 
  Check, 
  Terminal,
  Zap,
  Lock
} from 'lucide-react';

interface CandidatePortalProps {
  onOpenJobPortal: () => void;
  isDark: boolean;
}

export const CandidatePortal: React.FC<CandidatePortalProps> = ({ onOpenJobPortal, isDark }) => {
  const [skillInput, setSkillInput] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [matchedCount, setMatchedCount] = useState(14);

  const handleSimulateScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillInput.trim()) return;
    setAnalyzed(true);
    setMatchedCount(Math.floor(Math.random() * 8) + 12);
  };

  return (
    <section id="candidates" className={`py-20 border-t relative overflow-hidden ${
      isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white text-slate-900 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="clean-badge-green">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Confidential Talent Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for Engineers & Tech Leaders
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            No unsolicited recruiter calls. No spam. Only vetted, high-compensation roles at verified high-conviction companies, matched to your precise technical strengths.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className={`rounded-3xl p-7 border space-y-4 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${
            isDark 
              ? 'bg-slate-900/90 border-slate-800' 
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Top 1% Compensation
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              We benchmark roles against Tier-1 standards. Our mandates feature clear, verified salary brackets, performance bonuses, and meaningful equity grants.
            </p>
          </div>

          <div className={`rounded-3xl p-7 border space-y-4 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${
            isDark 
              ? 'bg-slate-900/90 border-slate-800' 
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-100 dark:border-cyan-900/50">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              100% Stealth & Privacy
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Your profile is never visible publicly. Your current employer is strictly ring-fenced. You only speak with companies you explicitly approve.
            </p>
          </div>

          <div className={`rounded-3xl p-7 border space-y-4 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${
            isDark 
              ? 'bg-slate-900/90 border-slate-800' 
              : 'bg-white border-slate-200/90'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technical Recruiter Peers
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              You will never talk to a recruiter who doesn't understand the difference between kernel bypass, cache miss optimization, and microservice topologies.
            </p>
          </div>

        </div>

        {/* Interactive Talent Skills Matcher */}
        <div className={`rounded-3xl border p-8 md:p-10 shadow-xl ${
          isDark 
            ? 'bg-slate-900/90 border-slate-800' 
            : 'bg-slate-50/80 border-slate-200/90'
        }`}>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider flex items-center justify-center gap-1.5">
                <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" /> StrydzAI™ Instant Opportunity Radar
              </span>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Enter Your Stack to See Live Market Matches
              </h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Type in your primary technologies (e.g., "C++20, DPDK, Low Latency" or "PyTorch, CUDA, LLM Infra").
              </p>
            </div>

            <form onSubmit={handleSimulateScan} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                required
                placeholder="e.g. Modern C++, Distributed Systems, AWS, Rust"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs ${
                  isDark 
                    ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap group"
              >
                <span>Check Live Matches</span>
                <Sparkles className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
              </button>
            </form>

            {/* Simulated Result Box */}
            {analyzed && (
              <div className={`p-6 rounded-2xl border text-left space-y-3 shadow-md ${
                isDark 
                  ? 'bg-slate-950 border-emerald-800/80 text-white' 
                  : 'bg-white border-emerald-300'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                    <Check className="w-4 h-4" />
                    <span>Radar Scan Complete</span>
                  </div>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                    {matchedCount} Active High-Comp Roles Found
                  </span>
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  We found <span className="font-bold">{matchedCount} verified openings</span> matching <span className="text-blue-600 dark:text-blue-400 font-mono font-bold">"{skillInput}"</span> with typical compensation ranging from <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">₹55L to ₹1.3Cr+</span> across Bengaluru, NCR, and Remote.
                </p>
                <div className="pt-1">
                  <button
                    onClick={onOpenJobPortal}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 transition"
                  >
                    <span>Browse These Matched Openings Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

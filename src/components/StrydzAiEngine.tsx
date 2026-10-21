import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  ShieldCheck, 
  Check, 
  X, 
  Terminal, 
  Binary, 
  Users2, 
  Clock, 
  Zap, 
  GitFork, 
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2,
  FileCode,
  Layers
} from 'lucide-react';

interface StrydzAiEngineProps {
  onOpenHireModal: (roleCategory?: string) => void;
  isDark: boolean;
}

export const StrydzAiEngine: React.FC<StrydzAiEngineProps> = ({ onOpenHireModal, isDark }) => {
  const [activeStage, setActiveStage] = useState(1);
  const [selectedTelemetry, setSelectedTelemetry] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'Deep Signal Ingestion',
      subtitle: 'Beyond Keyword Resumes',
      desc: 'Our engine parses semantic context, analyzing real engineering footprints: GitHub PR history, commit velocity, system architecture complexity, and research citations.',
      badge: 'Code Level',
      metrics: 'Analyzes 40+ Technical Dimensions'
    },
    {
      num: '02',
      title: 'Contextual Multi-Vector Matching',
      subtitle: 'Culture, Comp & Tech Fit',
      desc: 'Matches not just raw skills, but critical constraints: memory hierarchy experience, latency budgets, notice period negotiability, and target compensation tolerance.',
      badge: '98.4% Precision',
      metrics: 'Sub-second Vector Search across 1.2M+ Profiles'
    },
    {
      num: '03',
      title: 'Technical Signal Verification',
      subtitle: 'Zero False Positives',
      desc: 'Automated code challenge telemetry, sandbox performance benchmarks, and verified references from ex-engineering managers ensure candidate claims are factual.',
      badge: 'Audit Passed',
      metrics: '100% Background & Skill Integrity'
    },
    {
      num: '04',
      title: 'Senior Recruiter QA & 8h SLA Delivery',
      subtitle: 'Human-in-the-Loop Conversion',
      desc: 'Before any profile touches your inbox, our senior domain-expert recruiter conducts an alignment check on availability, motivation, and salary expectations.',
      badge: '8-Hour SLA',
      metrics: 'Delivered in Calibrated Pipeline Dashboard'
    }
  ];

  const telemetryExamples = [
    {
      domain: 'C++ Low-Latency (HFT / Trading)',
      role: 'Principal C++ Systems Architect',
      codeSample: `// Auditing cache locality & memory fence overhead
template <typename T, size_t Capacity>
class alignas(64) LockFreeRingBuffer {
  std::atomic<uint64_t> head_{0};
  char pad0_[64 - sizeof(std::atomic<uint64_t>)]; // False sharing prevention
  std::atomic<uint64_t> tail_{0};
  char pad1_[64 - sizeof(std::atomic<uint64_t>)];
  alignas(64) T storage_[Capacity];
public:
  bool push(const T& val) noexcept {
    const auto current_tail = tail_.load(std::memory_order_relaxed);
    if (current_tail - head_.load(std::memory_order_acquire) >= Capacity)
      return false; // Zero heap allocation, 18ns cycle budget
    storage_[current_tail % Capacity] = val;
    tail_.store(current_tail + 1, std::memory_order_release);
    return true;
  }
};`,
      score: '99.4% Match',
      insights: [
        'Zero dynamic heap allocations in hot path verified',
        'Cache line alignment (64 bytes) to eliminate false sharing',
        'Relaxed atomic memory orders with acquired/release barriers'
      ]
    },
    {
      domain: 'Generative AI & LLM Systems',
      role: 'Staff Machine Learning Engineer',
      codeSample: `// Custom Triton CUDA kernel for speculative token decoding
@triton.jit
def _speculative_verify_kernel(
    logits_ptr, draft_tokens_ptr, target_tokens_ptr,
    acceptance_mask_ptr, BLOCK_SIZE: tl.constexpr
):
    pid = tl.program_id(0)
    offsets = pid * BLOCK_SIZE + tl.arange(0, BLOCK_SIZE)
    draft = tl.load(draft_tokens_ptr + offsets)
    target = tl.load(target_tokens_ptr + offsets)
    # Vectorized acceptance probability calculation
    p_accept = tl.minimum(1.0, target / (draft + 1e-8))
    rand_val = tl.rand(pid, offsets)
    tl.store(acceptance_mask_ptr + offsets, rand_val <= p_accept)`,
      score: '98.8% Match',
      insights: [
        'Vectorized speculative verification kernel in OpenAI Triton',
        'Demonstrates mastery of memory-bound GPU tensor layouts',
        'Proven 3.8x inference latency acceleration across multi-GPU clusters'
      ]
    },
    {
      domain: 'Distributed Systems & GCC Leadership',
      role: 'VP / Senior Director of Engineering',
      codeSample: `// Distributed Multi-Region Consensus & Sharding Audit
type ShardController struct {
    raftNode    *raft.Raft
    leaseHolder atomic.Pointer[LeaderLease]
    topology    *TopologyClusterMap
}
func (sc *ShardController) ProposeMembershipChange(ctx context.Context, change MembershipDelta) error {
    if !sc.leaseHolder.Load().IsValid(time.Now()) {
        return ErrLeaseExpired // Strictly prevents split-brain partition
    }
    return sc.raftNode.Apply(change.Serialize(), 500*time.Millisecond).Error()
}`,
      score: '99.1% Match',
      insights: [
        'Built enterprise-grade multi-region sharded state machines',
        'Architected 99.999% availability for 45M daily active users',
        'Led 250+ engineering organization across Bengaluru & Sunnyvale'
      ]
    }
  ];

  return (
    <section id="engine" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/70 text-slate-900'
    }`}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="clean-badge">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Proprietary Recruitment Intelligence</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            How <span className="text-gradient-brand">StrydzAI™</span> Replaces 30 Days of Sourcing in 8 Hours
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Traditional staffing agencies forward 100 unqualified CVs hoping one sticks. StrydzAI pairs deep multi-signal machine learning with technical recruiter oversight to deliver calibrated, offer-ready candidates.
          </p>
        </div>

        {/* 4-Stage Visual Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStage(idx + 1)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 relative group border ${
                activeStage === idx + 1
                  ? isDark
                    ? 'bg-slate-900 border-blue-500 shadow-xl ring-2 ring-blue-500/20'
                    : 'bg-white border-blue-600 shadow-xl ring-2 ring-blue-100'
                  : isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-blue-600">
                  {stage.num}
                </span>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  isDark 
                    ? 'bg-blue-950 text-blue-300 border border-blue-800' 
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  {stage.badge}
                </span>
              </div>
              
              <h3 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {stage.title}
              </h3>
              <p className="text-xs font-semibold text-blue-600 mb-2.5">
                {stage.subtitle}
              </p>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stage.desc}
              </p>

              <div className={`pt-3 border-t text-[11px] font-mono flex items-center gap-1.5 ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}>
                <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>{stage.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            INTERACTIVE CODE SIGNAL AUDIT INSPECTOR (The Proprietary Tech Showcase)
            ========================================================================= */}
        <div className={`mb-16 rounded-3xl border shadow-xl overflow-hidden ${
          isDark 
            ? 'bg-slate-900/95 border-slate-800' 
            : 'bg-white border-slate-200/90'
        }`}>
          {/* Header Bar */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="clean-badge-green text-[10px]">LIVE AST CODE PARSER</span>
                <span className="text-xs font-mono text-slate-500">StrydzAI Deep Semantic Telemetry</span>
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                How StrydzAI Audits Real Engineering Signals vs Resume Keywords
              </h3>
            </div>
            
            {/* Domain Switcher Buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              {telemetryExamples.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTelemetry(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedTelemetry === idx
                      ? 'bg-blue-600 text-white shadow-xs'
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {idx === 0 ? 'C++ Low Latency' : idx === 1 ? 'GenAI / Triton' : 'Distributed GCC'}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Code & Insight Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
            
            {/* Left: Code Sandbox Display */}
            <div className="lg:col-span-7 p-6 bg-slate-950 font-mono text-xs overflow-x-auto text-slate-200">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <FileCode className="w-3.5 h-3.5 text-blue-400" />
                  <span>Audited Signal: {telemetryExamples[selectedTelemetry].role}</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
                  {telemetryExamples[selectedTelemetry].score}
                </span>
              </div>
              <pre className="text-xs leading-relaxed text-blue-300 overflow-x-auto">
                <code>{telemetryExamples[selectedTelemetry].codeSample}</code>
              </pre>
            </div>

            {/* Right: AI Evaluation Insights */}
            <div className={`lg:col-span-5 p-6 flex flex-col justify-between space-y-6 ${
              isDark ? 'bg-slate-900' : 'bg-slate-50/50'
            }`}>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                    Machine Verification Summary
                  </span>
                  <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Verified Technical Differentiators
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {telemetryExamples[selectedTelemetry].insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{insight}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 space-y-1.5">
                  <span className="text-[11px] font-bold text-blue-900 dark:text-blue-300 block">
                    Zero False Positive Guarantee
                  </span>
                  <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed font-normal">
                    StrydzAI ignores buzzword-stuffed LinkedIn profiles and evaluates true algorithmic depth and production architectural contributions.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenHireModal(telemetryExamples[selectedTelemetry].domain)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                <span>Request Calibrated Matches for this Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Comparison Table: StrydzAI vs Traditional Headhunters vs Naukri/LinkedIn */}
        <div className={`rounded-3xl border shadow-xl p-6 md:p-8 overflow-x-auto ${
          isDark 
            ? 'bg-slate-900/90 border-slate-800' 
            : 'bg-white border-slate-200/90 shadow-md'
        }`}>
          <div className="min-w-[650px]">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Why Modern Engineering Teams Switch to Strydz
                </h3>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Direct benchmark across speed, accuracy, and engineering leadership bandwidth.
                </p>
              </div>
              <button
                onClick={() => onOpenHireModal('AI Tech & Quant')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 transition self-start sm:self-auto shadow-xs"
              >
                <span>Hire with StrydzAI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[11px] font-mono">
                  <th className="py-3 px-4">Recruitment Dimension</th>
                  <th className="py-3 px-4 text-blue-700 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/60 rounded-t-xl border-x border-t border-blue-200 dark:border-blue-800">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" /> StrydzAI™ Platform
                    </span>
                  </th>
                  <th className="py-3 px-4">Traditional Headhunters</th>
                  <th className="py-3 px-4">Job Boards (Naukri/LinkedIn)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                
                <tr>
                  <td className={`py-3.5 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>First Qualified Shortlist</td>
                  <td className="py-3.5 px-4 text-emerald-700 dark:text-emerald-400 font-mono font-bold bg-blue-50/50 dark:bg-blue-950/30 border-x border-blue-200 dark:border-blue-800">
                    &lt; 8 Hours (Guaranteed SLA)
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">14 - 21 Days</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">Immediate (Unfiltered Spam)</td>
                </tr>

                <tr>
                  <td className={`py-3.5 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Deep Technical Signal Audit</td>
                  <td className="py-3.5 px-4 text-emerald-700 dark:text-emerald-400 bg-blue-50/50 dark:bg-blue-950/30 border-x border-blue-200 dark:border-blue-800 flex items-center gap-1.5 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Raw Code, Kernel & Algo Audits</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>Keyword Matching Only</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    <span className="text-rose-500">None (Self-reported claims)</span>
                  </td>
                </tr>

                <tr>
                  <td className={`py-3.5 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Engineering Interview Pass Rate</td>
                  <td className="py-3.5 px-4 text-emerald-700 dark:text-emerald-400 font-mono font-bold bg-blue-50/50 dark:bg-blue-950/30 border-x border-blue-200 dark:border-blue-800">
                    68% - 74%
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">12% - 18%</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">&lt; 5%</td>
                </tr>

                <tr>
                  <td className={`py-3.5 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Human Recruiter Vetting</td>
                  <td className="py-3.5 px-4 text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 border-x border-blue-200 dark:border-blue-800 font-semibold">
                    Senior Tech-Trained Partners
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">Junior Resourcers</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">Zero Human Vetting</td>
                </tr>

                <tr>
                  <td className={`py-3.5 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Enterprise GCC & Executive Scale</td>
                  <td className="py-3.5 px-4 text-emerald-700 dark:text-emerald-400 font-semibold bg-blue-50/50 dark:bg-blue-950/30 border-x border-b border-blue-200 dark:border-blue-800 rounded-b-xl">
                    100 to 1,000+ Scalable Cohorts
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">Ad-hoc single placements</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">Self-serve only</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

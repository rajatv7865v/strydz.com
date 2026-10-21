import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap,
  MapPin,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenHireModal: (roleCategory?: string) => void;
  onOpenJobPortal: () => void;
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal, onOpenJobPortal }) => {
  const [selectedRole, setSelectedRole] = useState<'hft' | 'ai' | 'gcc'>('hft');
  const [searchQuery, setSearchQuery] = useState('');

  const candidatesByRole = {
    hft: {
      featured: {
        name: 'Aarav Mehta',
        role: 'Senior Low-Latency C++ Engineer',
        exp: '8 yrs exp',
        location: 'Bengaluru / Hybrid',
        compensation: '₹95L - ₹1.4 Cr',
        tier: 'Ex-Tower Research · Tier-1 Quant Desk',
        score: '99.4%',
        signals: ['Lock-free Queues', 'Cache-line 64B', 'DPDK / Kernel Bypass', '15-Day Notice'],
        gradient: 'from-[#c8964a] to-[#6b4417]'
      },
      others: [
        {
          name: 'Priya Nair',
          title: 'FPGA Engineer · 6 yrs · Mumbai',
          score: '97%',
          specialty: 'SystemVerilog / UltraScale+',
          gradient: 'from-[#3ec9b0] to-[#146b5d]'
        },
        {
          name: 'Rohan Verma',
          title: 'Algorithmic Execution Dev · 9 yrs · Gurugram',
          score: '95%',
          specialty: 'C++20 / FIX Protocol / Order Book',
          gradient: 'from-[#7a8cff] to-[#2b3a9c]'
        }
      ]
    },
    ai: {
      featured: {
        name: 'Dr. Elena Vasquez',
        role: 'Staff LLM & Generative Systems Architect',
        exp: '9 yrs exp',
        location: 'Bengaluru / US Liaison',
        compensation: '₹1.1 Cr - ₹1.8 Cr',
        tier: 'PhD IISc / Ex-Meta AI Research',
        score: '99.6%',
        signals: ['Custom Triton Kernels', 'Speculative Decoding', 'vLLM Infra', 'Immediate Notice'],
        gradient: 'from-[#e07a9a] to-[#8c2c4d]'
      },
      others: [
        {
          name: 'Kavita Sundaram',
          title: 'PyTorch Distributed Lead · 6 yrs · Hyderabad',
          score: '98%',
          specialty: 'Megatron-LM / FlashAttention-3',
          gradient: 'from-[#3ec9b0] to-[#146b5d]'
        },
        {
          name: 'Arjun Sen',
          title: 'Model Quantization & Inference · 7 yrs · Bengaluru',
          score: '96%',
          specialty: 'AWQ / TensorRT-LLM / CUDA',
          gradient: 'from-[#c8964a] to-[#6b4417]'
        }
      ]
    },
    gcc: {
      featured: {
        name: 'Vikram Malhotra',
        role: 'Managing Director & Head of India Engineering (GCC)',
        exp: '16 yrs exp',
        location: 'Bengaluru / Hyderabad',
        compensation: '₹1.8 Cr - ₹2.5 Cr',
        tier: 'Scaled Fortune 50 GCC from 0 to 450 Engineers',
        score: '99.2%',
        signals: ['P&L Management', 'Site Leadership', 'Day 0 Setup', 'Executive EVP'],
        gradient: 'from-[#c8964a] to-[#6b4417]'
      },
      others: [
        {
          name: 'Ananya Deshmukh',
          title: 'VP of Platform Engineering · 13 yrs · Hyderabad',
          score: '98%',
          specialty: 'Multi-Region Kubernetes / FinOps',
          gradient: 'from-[#7a8cff] to-[#2b3a9c]'
        },
        {
          name: 'Deepak Roy',
          title: 'Director of Cloud Infra (GCC) · 11 yrs · Pune',
          score: '96%',
          specialty: 'SOC-2 / Zero-Trust / Global SRE',
          gradient: 'from-[#3ec9b0] to-[#146b5d]'
        }
      ]
    }
  };

  const currentRoleData = candidatesByRole[selectedRole];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onOpenHireModal(`Search Mandate: ${searchQuery}`);
    } else {
      onOpenJobPortal();
    }
  };

  return (
    <>
      {/* SVG Global Definitions */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <symbol id="avatar-user" viewBox="0 0 40 40">
            <circle cx="20" cy="15" r="7" fill="#fff" opacity="0.92" />
            <path d="M5 40c1-10 7-15 15-15s14 5 15 15z" fill="#fff" opacity="0.92" />
          </symbol>
          <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8964a" />
            <stop offset="50%" stopColor="#f7e2b0" />
            <stop offset="100%" stopColor="#a8772a" />
          </linearGradient>
        </defs>
      </svg>

      <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden font-sans bg-[#fdfbf7]">
        
        {/* Full Unsplash Enterprise Architecture Backdrop with Luxury Scrim */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2600&q=85" 
            alt="Enterprise Technology & Finance District" 
            className="w-full h-full object-cover object-right md:object-center opacity-[0.12] scale-105"
          />
          {/* Multi-layered directional gradient scrim: sharp text contrast on left, soft architectural lines on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7] via-[#fdfbf7]/92 to-[#fdfbf7]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/80 via-transparent to-[#fdfbf7]"></div>
        </div>

        {/* Animated Warm Ambient Radial Flares */}
        <div className="absolute -top-48 -right-24 w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,rgba(226,182,107,0.36),transparent_65%)] pointer-events-none animate-pulse-glow-1"></div>
        <div className="absolute -left-48 bottom-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(20,165,140,0.14),transparent_65%)] pointer-events-none animate-pulse-glow-2"></div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          
          {/* Main 2-Col Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Premium Value Proposition & Search */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Pill with Live Radar Pulse */}
              <div className="pill cursor-default inline-flex">
                <b></b>
                <span className="font-semibold text-xs tracking-wide text-[#101a33]">
                  AI-Powered Tech &amp; HFT Recruitment Platform
                </span>
                <span className="text-[11px] font-mono font-bold text-[#a8772a] ml-1 pl-2 border-l border-[rgba(168,119,42,0.25)]">
                  8-Hour SLA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#101a33]">
                Hire Top 1% Tech &amp; HFT Talent in <span className="g">4 Days</span>, Not 40.
              </h1>

              {/* Subtitle */}
              <p className="text-[#5f6679] text-base sm:text-lg font-normal leading-relaxed max-w-[560px]">
                Sub-8-hour candidate matching with verified code signals. Strydz connects elite quantitative trading desks, GenAI unicorns, and multinational GCCs with India's pre-assessed top engineers.
              </p>

              {/* Live Interactive Search / Command Bar */}
              <form onSubmit={handleSearchSubmit} className="max-w-[560px]">
                <div className="p-1.5 rounded-full bg-white border border-[rgba(168,119,42,0.25)] shadow-[0_8px_24px_rgba(16,26,51,0.06)] flex items-center gap-2 hover:border-[#a8772a] transition-all">
                  <div className="pl-3 text-[#a8772a]">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search C++ Low Latency, PyTorch LLM, Head of GCC, Bengaluru..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-xs sm:text-sm text-[#101a33] placeholder-[#5f6679]/60 focus:outline-none py-2"
                  />
                  <button
                    type="submit"
                    className="btn p text-xs py-2.5 px-6 whitespace-nowrap shadow-none"
                  >
                    <span>Find Talent</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>

                {/* Popular Keywords Cloud */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2.5 text-[11px] text-[#5f6679]">
                  <span className="font-semibold text-[#101a33]">Trending:</span>
                  {['Low-Latency C++', 'CUDA Triton', 'FPGA Verilog', 'Bengaluru GCC', 'Raft Consensus'].map((kw) => (
                    <button
                      key={kw}
                      type="button"
                      onClick={() => onOpenHireModal(kw)}
                      className="px-2.5 py-0.5 rounded-full bg-white border border-[rgba(168,119,42,0.18)] hover:border-[#a8772a] hover:text-[#a8772a] transition-colors"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </form>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <button 
                  onClick={() => onOpenHireModal('AI & Tech Hiring')}
                  className="btn p text-sm font-bold py-4 px-8 group shadow-lg"
                >
                  <span>Post a Job Free</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onOpenJobPortal}
                  className="btn text-sm font-semibold py-4 px-8 group"
                >
                  <span>Explore Open Shortlists</span>
                </button>
              </div>

              {/* Social Proof Avatars & Metric Rating */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[#5f6679] text-xs sm:text-[13px]">
                <div className="flex -space-x-2.5">
                  <span className="w-[38px] h-[38px] rounded-full inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br from-[#c8964a] to-[#6b4417] border-2 border-white shadow-2xs flex-none">
                    <svg className="w-full h-full"><use href="#avatar-user" /></svg>
                  </span>
                  <span className="w-[38px] h-[38px] rounded-full inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br from-[#3ec9b0] to-[#146b5d] border-2 border-white shadow-2xs flex-none">
                    <svg className="w-full h-full"><use href="#avatar-user" /></svg>
                  </span>
                  <span className="w-[38px] h-[38px] rounded-full inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br from-[#7a8cff] to-[#2b3a9c] border-2 border-white shadow-2xs flex-none">
                    <svg className="w-full h-full"><use href="#avatar-user" /></svg>
                  </span>
                  <span className="w-[38px] h-[38px] rounded-full inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br from-[#e07a9a] to-[#8c2c4d] border-2 border-white shadow-2xs flex-none">
                    <svg className="w-full h-full"><use href="#avatar-user" /></svg>
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#a8772a] text-xs font-bold">
                    <span>★★★★★</span>
                    <span className="text-[#101a33] font-mono ml-1">4.9/5 Rating</span>
                  </div>
                  <span className="text-[#5f6679] text-xs">
                    Trusted by 100+ high-growth tech desks &amp; global trading firms
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Ultra-Premium StrydzAI™ Match Terminal */}
            <div className="lg:col-span-5 relative">
              
              {/* Floating Top Badge: 8-Hour SLA Speed */}
              <div 
                style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
                className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[rgba(168,119,42,0.25)] shadow-[0_12px_28px_rgba(16,26,51,0.12)] text-xs font-mono font-bold text-[#101a33]"
              >
                <div className="w-6 h-6 rounded-lg bg-[rgba(20,165,140,0.12)] text-[#14a58c] flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 fill-[#14a58c]" />
                </div>
                <span>SLA: First Shortlist in 8h</span>
              </div>

              {/* Main AI Matching Console Card */}
              <div className="dash relative z-10 border border-[rgba(168,119,42,0.24)] bg-gradient-to-b from-white via-[#fdfbf7] to-[#f9f5ec] shadow-[0_30px_70px_rgba(16,26,51,0.16)] rounded-3xl p-6 md:p-7">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(168,119,42,0.18)] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                    <span className="text-xs font-mono font-bold text-[#101a33] ml-1">
                      StrydzAI™ Match Terminal
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[rgba(20,165,140,0.1)] text-[#14a58c] border border-[rgba(20,165,140,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14a58c] animate-pulse"></span>
                    99.4% Fit
                  </span>
                </div>

                {/* Role Switcher Tabs */}
                <div className="flex gap-1.5 mb-4 p-1 rounded-xl bg-white border border-[rgba(168,119,42,0.2)] text-xs shadow-2xs">
                  <button 
                    onClick={() => setSelectedRole('hft')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                      selectedRole === 'hft' 
                        ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white shadow-xs' 
                        : 'text-[#5f6679] hover:text-[#101a33]'
                    }`}
                  >
                    HFT C++
                  </button>
                  <button 
                    onClick={() => setSelectedRole('ai')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                      selectedRole === 'ai' 
                        ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white shadow-xs' 
                        : 'text-[#5f6679] hover:text-[#101a33]'
                    }`}
                  >
                    GenAI
                  </button>
                  <button 
                    onClick={() => setSelectedRole('gcc')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                      selectedRole === 'gcc' 
                        ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white shadow-xs' 
                        : 'text-[#5f6679] hover:text-[#101a33]'
                    }`}
                  >
                    GCC Lead
                  </button>
                </div>

                {/* Featured Top Candidate Showcase Card */}
                <div 
                  key={selectedRole}
                  className="p-4 rounded-2xl border border-[rgba(168,119,42,0.22)] bg-white shadow-xs mb-3.5 space-y-3 animate-card-slide"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-12 h-12 rounded-2xl inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br ${currentRoleData.featured.gradient} shadow-sm flex-none`}>
                        <svg className="w-full h-full"><use href="#avatar-user" /></svg>
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-[#101a33]">
                            {currentRoleData.featured.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#14a58c]" />
                        </div>
                        <div className="text-xs font-medium text-[#a8772a]">
                          {currentRoleData.featured.role}
                        </div>
                        <div className="text-[11px] text-[#5f6679]">
                          {currentRoleData.featured.exp} · {currentRoleData.featured.location}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-sm font-extrabold g block">
                        {currentRoleData.featured.score}
                      </span>
                      <span className="text-[9px] font-mono uppercase text-[#5f6679] font-bold">
                        Fit Score
                      </span>
                    </div>
                  </div>

                  {/* Company & Compensation Tag */}
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.12)]">
                    <span className="text-[11px] text-[#5f6679] truncate max-w-[210px]">
                      {currentRoleData.featured.tier}
                    </span>
                    <span className="font-mono font-bold text-[#14a58c] text-[11px]">
                      {currentRoleData.featured.compensation}
                    </span>
                  </div>

                  {/* Verified Code Signals */}
                  <div className="flex flex-wrap gap-1.5">
                    {currentRoleData.featured.signals.map((sig, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-[rgba(168,119,42,0.18)] bg-white text-[#101a33] font-medium"
                      >
                        ✓ {sig}
                      </span>
                    ))}
                  </div>

                  {/* Request Dossier Action */}
                  <button
                    onClick={() => onOpenHireModal(`Shortlist: ${currentRoleData.featured.role}`)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-[#101a33] bg-[#fdfbf7] hover:bg-white border border-[rgba(168,119,42,0.25)] hover:border-[#a8772a] transition-all flex items-center justify-center gap-1.5 group"
                  >
                    <span>Request Verified Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#a8772a] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Additional Calibrated Matches */}
                <div className="space-y-2">
                  {currentRoleData.others.map((c, idx) => (
                    <div 
                      key={idx}
                      onClick={() => onOpenHireModal(`Candidate: ${c.title}`)}
                      className="p-2.5 rounded-xl border border-[rgba(168,119,42,0.14)] bg-white hover:border-[#a8772a] hover:shadow-xs transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-8 h-8 rounded-xl inline-grid place-items-end justify-center overflow-hidden bg-gradient-to-br ${c.gradient} flex-none`}>
                          <svg className="w-full h-full"><use href="#avatar-user" /></svg>
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#101a33] group-hover:text-[#a8772a] transition-colors">
                            {c.name}
                          </div>
                          <div className="text-[10px] text-[#5f6679]">
                            {c.title}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#a8772a] hidden sm:inline">
                          {c.specialty}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#14a58c] bg-[rgba(20,165,140,0.08)] px-2 py-0.5 rounded-md border border-[rgba(20,165,140,0.2)]">
                          {c.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Bottom-Right Accuracy Gauge Badge */}
                <div className="float-badge">
                  <svg viewBox="0 0 46 46" className="w-[46px] h-[46px] flex-none">
                    <circle cx="23" cy="23" r="19" fill="none" stroke="rgba(226,182,107,.2)" strokeWidth="5"/>
                    <circle 
                      cx="23" 
                      cy="23" 
                      r="19" 
                      fill="none" 
                      stroke="url(#gg)" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      className="gauge-ring"
                      transform="rotate(-90 23 23)"
                    />
                  </svg>
                  <div>
                    <strong>98%</strong>
                    <span className="text-xs text-[#5f6679]">Match accuracy</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* 4-Column Luxury Stats Banner */}
          <div className="stats-banner mt-16 sm:mt-20">
            <div className="stat-item group">
              <strong className="g text-[34px] sm:text-[38px] font-bold group-hover:scale-105 transition-transform">98%</strong>
              <span className="text-xs sm:text-sm font-medium">Placement Success Rate</span>
            </div>
            <div className="stat-item group">
              <strong className="g text-[34px] sm:text-[38px] font-bold group-hover:scale-105 transition-transform">4 days</strong>
              <span className="text-xs sm:text-sm font-medium">Average Time to Hire</span>
            </div>
            <div className="stat-item group">
              <strong className="g text-[34px] sm:text-[38px] font-bold group-hover:scale-105 transition-transform">1M+</strong>
              <span className="text-xs sm:text-sm font-medium">Pre-Vetted Engineers</span>
            </div>
            <div className="stat-item group">
              <strong className="g text-[34px] sm:text-[38px] font-bold group-hover:scale-105 transition-transform">8 hrs</strong>
              <span className="text-xs sm:text-sm font-medium">First Candidate SLA</span>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Hero;

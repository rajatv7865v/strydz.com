import React, { useState } from 'react';
import { 
  Globe, 
  Building2, 
  MapPin, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Layers
} from 'lucide-react';

interface GccEnterpriseSectionProps {
  onOpenHireModal: (roleCategory?: string) => void;
  isDark?: boolean;
}

export const GccEnterpriseSection: React.FC<GccEnterpriseSectionProps> = ({ onOpenHireModal }) => {
  const [selectedHub, setSelectedHub] = useState('Bengaluru');

  const hubs = [
    {
      city: 'Bengaluru',
      state: 'Karnataka',
      specialty: 'AI/DeepTech, SaaS & Core R&D',
      density: '38% of India GCC Tech Pool',
      avgSalaryIndex: 'Baseline 100%'
    },
    {
      city: 'Hyderabad',
      state: 'Telangana',
      specialty: 'FinTech, Cloud & Enterprise IT',
      density: '26% of India GCC Tech Pool',
      avgSalaryIndex: '88% of BLR (High cost-efficiency)'
    },
    {
      city: 'Pune',
      state: 'Maharashtra',
      specialty: 'AutoTech, Embedded & Cloud Platforms',
      density: '15% of India GCC Tech Pool',
      avgSalaryIndex: '85% of BLR'
    },
    {
      city: 'NCR (Gurugram / Noida)',
      state: 'Delhi-NCR',
      specialty: 'Consumer Tech, Data Analytics & Quant',
      density: '14% of India GCC Tech Pool',
      avgSalaryIndex: '92% of BLR'
    }
  ];

  const pillars = [
    {
      step: '01',
      title: 'Day 0 Leadership Search',
      desc: 'Placement of Managing Director, VP of Engineering, and Head of Talent to establish cultural and technical alignment.'
    },
    {
      step: '02',
      title: 'Location & Comp Strategy',
      desc: 'Compensation benchmarking, real-time talent density heatmaps, and tech corridor selection in Bengaluru or Hyderabad.'
    },
    {
      step: '03',
      title: 'High-Velocity Cohort Hiring',
      desc: 'Deploying StrydzAI to hire 50-200 specialized engineers simultaneously across backend, cloud, data, and QA tracks.'
    },
    {
      step: '04',
      title: 'Long-Term Retention & EVP',
      desc: 'Employer branding and community building to maintain 96%+ retention and protect institutional knowledge.'
    }
  ];

  return (
    <section id="gcc" className="py-24 border-t border-[rgba(168,119,42,0.18)] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[rgba(168,119,42,0.25)] bg-[rgba(168,119,42,0.06)] text-[#a8772a]">
            <Globe className="w-3.5 h-3.5 text-[#a8772a]" />
            <span>Global Capability Centers (GCC Hubs)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101a33]">
            Build & Scale Your India Tech Hub in <span className="g">Record Time</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5f6679] leading-relaxed font-normal">
            India is home to 1,600+ GCCs employing over 1.7 million professionals. Strydz provides turnkey talent advisory, executive site leadership, and cohort engineering hiring to launch world-class capability centers.
          </p>
        </div>

        {/* 4 Pillars of GCC Acceleration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[rgba(168,119,42,0.18)] shadow-[0_2px_12px_rgba(16,26,51,0.04)] hover:border-[#a8772a] hover:shadow-[0_8px_24px_rgba(168,119,42,0.12)] transition-all duration-300 group"
            >
              <div className="font-mono text-3xl font-extrabold g mb-2">
                {pillar.step}
              </div>
              <h3 className="text-base font-bold mb-2 text-[#101a33]">
                {pillar.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#5f6679]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Hub Explorer Card */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[rgba(168,119,42,0.22)] shadow-[0_12px_36px_rgba(16,26,51,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Hub Selection */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2 text-[#101a33]">
                <MapPin className="w-5 h-5 text-[#a8772a]" />
                Select Target Tech Corridor:
              </h3>
              <p className="text-xs text-[#5f6679]">
                Explore talent density and strategic advantages of India's key engineering epicenters.
              </p>

              <div className="space-y-2.5">
                {hubs.map((hub) => (
                  <button
                    key={hub.city}
                    onClick={() => setSelectedHub(hub.city)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      selectedHub === hub.city
                        ? 'bg-[rgba(168,119,42,0.08)] border-[#a8772a] text-[#101a33] shadow-xs'
                        : 'bg-[#fdfbf7] text-[#101a33] border-[rgba(168,119,42,0.15)] hover:border-[#a8772a] hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#101a33]">{hub.city}</div>
                      <div className="text-[11px] text-[#5f6679]">{hub.specialty}</div>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#a8772a]">
                      {hub.density}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Hub Analysis Details */}
            <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl border border-[rgba(168,119,42,0.2)] bg-[#fdfbf7] space-y-5">
              <div className="flex items-center justify-between border-b border-[rgba(168,119,42,0.15)] pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#a8772a] font-bold">
                    Corridor Intelligence Brief
                  </span>
                  <h4 className="text-xl font-bold text-[#101a33]">
                    {selectedHub} Tech Ecosystem
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[rgba(20,165,140,0.1)] text-[#14a58c] border border-[rgba(20,165,140,0.25)]">
                  High Scalability
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                <div className="p-4 rounded-xl border border-[rgba(168,119,42,0.18)] bg-white shadow-2xs">
                  <div className="mb-1 text-[#5f6679]">Talent Density</div>
                  <div className="font-bold text-sm text-[#101a33]">
                    {hubs.find(h => h.city === selectedHub)?.density}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-[rgba(168,119,42,0.18)] bg-white shadow-2xs">
                  <div className="mb-1 text-[#5f6679]">Compensation Index</div>
                  <div className="font-bold text-sm text-[#101a33]">
                    {hubs.find(h => h.city === selectedHub)?.avgSalaryIndex}
                  </div>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-[#5f6679]">
                Strydz maintains an active pre-assessed talent network in {selectedHub} with over 320,000+ senior engineers specializing in {hubs.find(h => h.city === selectedHub)?.specialty}.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenHireModal(`GCC Setup in ${selectedHub}`)}
                  className="btn p text-xs sm:text-sm flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <span>Request {selectedHub} GCC Feasibility Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GccEnterpriseSection;

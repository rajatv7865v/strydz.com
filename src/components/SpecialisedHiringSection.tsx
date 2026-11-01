import React, { useState } from 'react';
import { Landmark, Cpu, Users2, Stethoscope, Factory, ShoppingBag, ArrowRight } from 'lucide-react';

interface SpecialisedHiringSectionProps {
  onOpenHireModal?: (category?: string) => void;
}

export const SpecialisedHiringSection: React.FC<SpecialisedHiringSectionProps> = ({ onOpenHireModal }) => {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const practices = [
    {
      id: 'bfsi',
      title: 'BFSI',
      desc: 'Banking, NBFCs, fintech, insurance, and financial institutions navigating scale, digital transformation, and regulation.',
      icon: Landmark,
      roles: ['Managing Directors', 'Chief Risk Officers', 'Head of Wholesale', 'Treasury Leads'],
    },
    {
      id: 'tech',
      title: 'Technology',
      desc: 'Product, platform, SaaS, cloud infrastructure, and digital-first businesses hiring transformative engineering & product leaders.',
      icon: Cpu,
      roles: ['Chief Technology Officers', 'VP Engineering', 'Head of AI / Data', 'Chief Product Officers'],
    },
    {
      id: 'hr',
      title: 'HR Leadership',
      desc: 'CHRO hiring, executive people and culture teams, compensation & benefits, and talent leadership across all corporate sectors.',
      icon: Users2,
      roles: ['CHRO / Chief People Officer', 'Head of Talent Acquisition', 'D&I Directors', 'Total Rewards Leads'],
    },
    {
      id: 'health',
      title: 'Healthcare & Life Sciences',
      desc: 'Pharma, biotech, medtech, diagnostics, devices, and healthcare provider systems scaling clinical and commercial operations.',
      icon: Stethoscope,
      roles: ['Chief Commercial Officers', 'R&D Directors', 'Regulatory Heads', 'Country Managers'],
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      desc: 'Engineering-led, capital-intensive, supply chain, and operations-driven enterprises driving Industry 4.0 evolution.',
      icon: Factory,
      roles: ['Chief Operating Officers', 'Plant Heads', 'Supply Chain VPs', 'Procurement Directors'],
    },
    {
      id: 'consumer',
      title: 'Consumer (incl. Consumer Tech)',
      desc: 'Omnichannel brands, direct-to-consumer, marketplaces, and consumer-facing digital ecosystems navigating consumer shifts.',
      icon: ShoppingBag,
      roles: ['Chief Marketing Officers', 'E-commerce Directors', 'Chief Business Officers', 'Retail Operations'],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#514f14]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#31547b]">Practice Groups</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#31547b] leading-[1.2]">
            Industry{' '}
            <span className="text-[#514f14]">
              Practices
            </span>
          </h2>
          
          <div className="section-divider"></div>
          
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
            Specialized executive search practices led by sector directors with deep commercial intelligence.
          </p>
        </div>

        {/* 6 Industry Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {practices.map((practice) => {
            const Icon = practice.icon;
            const isSelected = selectedPractice === practice.id;

            return (
              <div
                key={practice.id}
                onClick={() => setSelectedPractice(practice.id)}
                className={`premium-card bg-[#faf7f2] border rounded-2xl p-7 shadow-xs flex flex-col justify-between cursor-pointer group transition-all ${
                  isSelected
                    ? 'border-[#31547b] ring-2 ring-[#31547b]/20 bg-white'
                    : 'border-[#e8e2d5] hover:border-[#31547b]/40 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#31547b] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-[#e8e2d5] text-slate-600">
                      Practice Area
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#31547b] group-hover:text-[#514f14] transition-colors">
                    {practice.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {practice.desc}
                  </p>

                  {/* Sample mandates / roles */}
                  <div className="pt-4 mt-4 border-t border-slate-200/70">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Mandates
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {practice.roles.map((r, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-md bg-white border border-[#e8e2d5] text-slate-700">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenHireModal?.(practice.title);
                    }}
                    className="text-xs sm:text-sm font-semibold text-[#31547b] hover:text-[#514f14] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Engage {practice.title} Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#514f14] group-hover:translate-x-1 transition-transform" />
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

export const SpecialisedHiringSectionDefault = SpecialisedHiringSection;
export default SpecialisedHiringSection;

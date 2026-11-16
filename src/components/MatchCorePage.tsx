import React from 'react';
import { Bot, Workflow, Search, BarChart3, ArrowRight } from 'lucide-react';

interface MatchCorePageProps {
  onTalkToExpert: () => void;
}

export const MatchCorePage: React.FC<MatchCorePageProps> = ({ onTalkToExpert }) => {
  const cards = [
    {
      icon: <Bot className="w-6 h-6 text-[#FF7D04]" />,
      title: 'Faster, Smarter Hiring with Scalable AI Agents',
      desc: 'At the heart of MatchCore are Scalable AI Agents that automate and optimize every stage of the hiring lifecycle.',
      points: [
        'Instantly match candidates to roles with AI-generated fitment scores.',
        'Auto-create job role relevant interview questions.',
        'Simplify the process of creating JD by auto completion of sections.',
        'Instant communication with HM and Candidates using advanced ChatBot features.',
        'Generate concise summary for a candidate helping the recruiter make a decision faster.',
      ],
    },
    {
      icon: <Workflow className="w-6 h-6 text-[#FF7D04]" />,
      title: 'Modular, Custom Hiring Workflows',
      desc: "Whether you're hiring for high-volume frontline roles or niche strategic positions, MatchCore adapts to every business need.",
      points: [
        'Design bespoke workflows with toggle-based logic for specific businesses.',
        'Integration of candidates to workflow using our candidate portal.',
        'Real time notification and integration of backend processes using ChatBot features.',
        'Real-time visibility into bottlenecks, offers, and pipeline health using our Custom Dashboards and Reporting solutions.',
      ],
    },
    {
      icon: <Search className="w-6 h-6 text-[#FF7D04]" />,
      title: 'AI-Led Sourcing & Talent Intelligence',
      desc: 'No more generic job board fishing. MatchCore uses deep AI matching, social triggers, and internal pools to find the right talent faster.',
      points: [
        'Resume parsing and auto completion of fields.',
        'Talent pool intelligence with reactivation tools.',
        'QR Code hiring campaigns.',
        'Boolean search query generator tailored for various job portal searches.',
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#FF7D04]" />,
      title: 'Built-In Analytics That Fuel Business Decisions',
      desc: 'Get the insights that matter—built directly into your hiring process.',
      points: [
        'Source effectiveness and pipeline Agility.',
        'Productivity metrics by recruiter and business.',
        'Talent Intelligence - diversity, location strategy, salary benchmarks.',
        'Custom dashboards for your hiring managers and business leaders.',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden bg-[#0B3041]">
        <img
          src="https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Matchcore.jpg"
          alt="MatchCore Platform"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3041]/90 via-[#0B3041]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF7D04] text-white text-xs font-bold uppercase tracking-wider mb-4">
              Proprietary AI Engine
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Match<span className="text-[#FF7D04]">Core</span> Platform
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-lg max-w-xl font-medium">
              Turning Talent Acquisition into a high-performance, data-led function.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3041] tracking-tight leading-tight mb-6">
              <span className="text-[#FF7D04]">Match</span>
              <span className="text-[#0B3041]">Core</span> – Less Noise. More Clarity.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#0B3041]/85 leading-relaxed font-normal">
              <p>
                MatchCore is the proprietary, AI-powered recruitment engine developed by Strydz - a green-tree company  to help us deliver exceptional hiring outcomes in our RPO and staffing programs.
              </p>
              <p>
                Designed to increase process efficiencies, reduce transaction time and administrative load, improve time to hire without compromising on quality of hire, and drive proactive pipelining with high level of candidate engagement and experience effortlessly, MatchCore gives our clients a strategic edge - by turning Talent Acquisition into a high-performance, data-led function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why MatchCore Section */}
      <section className="py-16 sm:py-24 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight">
              Why <span className="text-[#FF7D04]">Match</span><span className="text-[#0B3041]">Core</span>
            </h2>
            <div className="w-16 h-1 bg-[#FF7D04] mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Cards (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF7D04]/10 flex items-center justify-center flex-none">
                      {card.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B3041]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#0B3041]/80 leading-relaxed mb-4 font-normal">
                    {card.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B3041]/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#019ECA] mt-2 flex-none" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Graphic Illustration (5 Cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-md overflow-hidden">
                <img
                  src="https://jamesdouglasglobal.com/assets/img/why-matchCore-img.png"
                  alt="MatchCore AI Architecture"
                  className="w-full h-auto object-contain rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="mt-4 p-4 rounded-2xl bg-[#0B3041] text-white">
                  <h4 className="font-bold text-sm text-white">MatchCore Intelligence Architecture</h4>
                  <p className="text-xs text-white/80 mt-1">
                    Continuous feedback loop connecting sourcing, qualitative evaluation, behavioral calibration, and enterprise reporting.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Experience Clarity-First Hiring Banner */}
      <section className="py-16 sm:py-20 bg-[#0B3041] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Experience Clarity-First Hiring with MatchCore
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/85">
                Turn recruitment data into smarter, faster decisions — no noise, just results.
              </p>
            </div>
            <div className="flex-none">
              <button
                onClick={onTalkToExpert}
                className="clarity-hero-button inline-flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MatchCorePage;

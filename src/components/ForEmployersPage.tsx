import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface ForEmployersPageProps {
  onOpenHireModal: (category?: string) => void;
  onOpenBookDemo: () => void;
}

export const ForEmployersPage: React.FC<ForEmployersPageProps> = ({
  onOpenHireModal,
  onOpenBookDemo
}) => {
  const models = [
    {
      num: '01',
      title: 'Permanent Hiring',
      desc: 'Pre-vetted mid to senior professionals for full-time roles.',
    },
    {
      num: '02',
      title: 'Executive Search',
      desc: 'Confidential leadership hiring for CXO and board roles.',
    },
    {
      num: '03',
      title: 'Contract Staffing',
      desc: 'Flexible and compliant staffing for project-based needs.',
    },
    {
      num: '04',
      title: 'RPO',
      desc: 'A dedicated recruitment team embedded in your business.',
    },
    {
      num: '05',
      title: 'Campus Hiring',
      desc: 'Structured fresher hiring programmes with top institutes.',
    },
    {
      num: '06',
      title: 'Bulk Hiring',
      desc: 'Scale quickly with high-volume, quality-controlled drives.',
    },
  ];

  const whyChooseUs = [
    {
      badge: '48h',
      title: 'Fast shortlists',
      desc: 'Interview-ready profiles within two working days of your brief.',
    },
    {
      badge: '92%',
      title: 'High retention',
      desc: 'Most hires stay beyond their first year thanks to rigorous fit checks.',
    },
    {
      badge: 'AI',
      title: 'Smart matching',
      desc: 'Skills, intent and culture signals ranked automatically.',
    },
  ];

  const pricingTiers = [
    {
      label: 'Pay per hire',
      price: '8.33%',
      sub: 'of annual CTC',
      features: ['Dedicated recruiter', 'Replacement guarantee', 'Weekly reporting'],
      highlighted: false,
    },
    {
      label: 'Retainer',
      price: 'Custom',
      sub: 'For senior & leadership roles',
      features: ['Dedicated recruiter', 'Replacement guarantee', 'Weekly reporting'],
      highlighted: true,
    },
    {
      label: 'RPO',
      price: 'Monthly',
      sub: 'Fixed team fee',
      features: ['Dedicated recruiter', 'Replacement guarantee', 'Weekly reporting'],
      highlighted: false,
    },
  ];

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Section with Ambient Glow */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-24 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Talent Acquisition Partner</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
          Hire top talent without the{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
            hiring headache
          </span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us who you need. We source, screen and present interview-ready candidates in 48 hours — you only talk to the best.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onOpenHireModal('For Employers Mandate')}
            className="btn-shimmer px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md hover:-translate-y-0.5"
          >
            Hire Talent
          </button>
          <button
            onClick={onOpenBookDemo}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-[#e8e2d5] hover:bg-[#f4efe6] transition shadow-2xs hover:-translate-y-0.5"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* 2. Choose the model that fits (Linen Cream Background #f4efe6) */}
      <section className="py-16 md:py-20 bg-[#f4efe6] border-y border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Hiring Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
              Choose the model that{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                fits your scale
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              Tailored staffing structures built for startup speed, departmental scale, or executive retained mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((item) => (
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
                    onClick={() => onOpenHireModal(item.title)}
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

      {/* 3. Why employers choose us (Ivory Cream #faf7f2) */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">The Strydz Edge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
              Why ambitious employers{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                choose us
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              High-touch industry recruiting experts powered by automated skill and intent calibration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((card) => (
              <div
                key={card.title}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-8 shadow-xs group"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {card.badge}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-2 font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Simple, transparent pricing (Linen Cream #f4efe6) */}
      <section className="py-20 bg-[#f4efe6] border-y border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Engagement Models</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
              Simple, transparent{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                pricing
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              No hidden fees, no opaque contracts. Predictable structures built around successful hires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {pricingTiers.map((tier) => {
              if (tier.highlighted) {
                return (
                  <div
                    key={tier.label}
                    className="bg-indigo-600 text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative transform md:-translate-y-3 transition-transform duration-300 hover:scale-[1.02] border border-indigo-400/40"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-wider font-bold text-indigo-200">
                          {tier.label}
                        </p>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-indigo-600 uppercase">
                          Popular
                        </span>
                      </div>
                      <h3 className="text-4xl font-black mt-2 tracking-tight text-white">
                        {tier.price}
                      </h3>
                      <p className="text-xs text-indigo-100 mt-1 mb-6 font-medium">
                        {tier.sub}
                      </p>

                      <div className="space-y-3 border-t border-indigo-500/50 pt-6">
                        {tier.features.map((f) => (
                          <div key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-indigo-50">
                            <Check className="w-4 h-4 text-white flex-none" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={() => onOpenHireModal(`Pricing Tier: ${tier.label}`)}
                        className="btn-shimmer w-full py-3.5 rounded-xl text-sm font-bold text-indigo-600 bg-white hover:bg-indigo-50 transition shadow-sm text-center hover:-translate-y-0.5"
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={tier.label}
                  className="premium-card bg-white border border-[#e8e2d5] rounded-3xl p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      {tier.label}
                    </p>
                    <h3 className="text-4xl font-black mt-2 tracking-tight text-slate-900">
                      {tier.price}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-6 font-medium">
                      {tier.sub}
                    </p>

                    <div className="space-y-3 border-t border-slate-100 pt-6">
                      {tier.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-emerald-500 flex-none" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => onOpenHireModal(`Pricing Tier: ${tier.label}`)}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm text-center hover:-translate-y-0.5"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto bg-[#0c1222] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to build your dream team?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
              Talk to a Strydz talent advisor today.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal('For Employers CTA')}
                className="btn-shimmer px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm hover:-translate-y-0.5"
              >
                Hire Talent
              </button>
              <button
                onClick={onOpenBookDemo}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-slate-700 hover:border-slate-500 transition hover:bg-white/5 hover:-translate-y-0.5"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForEmployersPage;

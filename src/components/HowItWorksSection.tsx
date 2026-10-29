import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Share your needs',
      desc: "Tell us the role, skills and culture you're hiring for in a 15-minute call.",
    },
    {
      step: '2',
      title: 'Get a curated shortlist',
      desc: 'Our recruiters and AI deliver vetted, interview-ready profiles within 48 hours.',
    },
    {
      step: '3',
      title: 'Interview & onboard',
      desc: 'We manage scheduling, feedback, offers and joining until day one.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-24 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Execution Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
            Hiring in three{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              simple steps
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
            Fast-track your talent pipeline with verified checkpoints and guaranteed 48-hour shortlists.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-8 shadow-xs flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mt-2 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

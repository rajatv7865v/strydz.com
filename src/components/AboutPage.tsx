import React from 'react';
import { Sparkles } from 'lucide-react';

interface AboutPageProps {
  onOpenHireModal: (category?: string) => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenHireModal,
  onNavigateToContact,
}) => {
  const values = [
    {
      num: '01',
      title: 'Transparency',
      desc: 'Clear communication and honest feedback for clients and candidates at every step.',
    },
    {
      num: '02',
      title: 'Speed with quality',
      desc: 'Fast shortlists never come at the cost of fit, culture or long-term retention.',
    },
    {
      num: '03',
      title: 'People first',
      desc: 'Every candidate is treated as a person, not a resume. Every client as a partner.',
    },
  ];

  const metrics = [
    { value: '10K+', label: 'Placements' },
    { value: '500+', label: 'Clients' },
    { value: '120+', label: 'Recruiters' },
    { value: '8 yrs', label: 'In business' },
  ];

  const team = [
    {
      name: 'Ananya Rao',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Vikram Singh',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Talent',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Rohit Mehta',
      role: 'Head of Client Success',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Section with soft ambient flare */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Our Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.15]">
          We connect ambition with{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
            opportunity
          </span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
          Strydz was founded on a simple belief: hiring should be fast, transparent and human. We combine expert recruiters with smart technology to make transformative matches.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onOpenHireModal('Join Strydz Team')}
            className="btn-shimmer px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md hover:-translate-y-0.5"
          >
            Join Our Team
          </button>
          <button
            onClick={onNavigateToContact}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-[#e8e2d5] hover:bg-[#f4efe6] transition shadow-2xs hover:-translate-y-0.5"
          >
            Talk to Us
          </button>
        </div>
      </section>

      {/* 2. Our Story with Premium Office Unsplash Photo & Since 2018 */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Since 2018 with Modern Workspace Photography */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[340px] flex items-center justify-center border border-[#e8e2d5]">
              {/* Modern Office Image */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Strydz Modern Office"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Rich Indigo Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/90 via-indigo-900/80 to-blue-900/70" />

              {/* Foreground Content */}
              <div className="relative z-10 text-center p-8 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 uppercase tracking-widest">
                  Founding Era
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
                  Since 2018
                </h2>
                <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                  Scaling India's tech ecosystem
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
              Built by recruiters,{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                powered by data
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
              What started as a small recruitment desk is now a talent partner for 500+ companies. We still run on the same principle: understand the people, then the role.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Our team of 120+ recruiters across India pairs deep industry knowledge with AI matching to deliver shortlists in 48 hours.
            </p>
          </div>

        </div>
      </section>

      {/* 3. What we stand for (Linen Cream #f4efe6) */}
      <section className="py-20 bg-[#f4efe6] border-y border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
              What we{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                stand for
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              The values that dictate how we advocate for candidates and partner with high-growth companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-8 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {v.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2 font-normal">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Indigo Metrics Banner */}
      <section className="bg-indigo-600 text-white py-14 sm:py-16 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-indigo-100">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership -> Meet the team with Real Portraits from Unsplash (Ivory Cream #faf7f2) */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Executive Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
              Meet the team{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                behind Strydz
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              Industry pioneers with decades of combined experience building and scaling high-caliber teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-6 text-center shadow-xs flex flex-col items-center justify-center group"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover shadow-md ring-4 ring-[#f4efe6] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA Card */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto bg-[#0c1222] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Want to work with Strydz?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
              Join a team that is reshaping how India hires.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal('Internal Careers at Strydz')}
                className="btn-shimmer px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm hover:-translate-y-0.5"
              >
                View Careers
              </button>
              <button
                onClick={onNavigateToContact}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-slate-700 hover:border-slate-500 transition hover:bg-white/5 hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

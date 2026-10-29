import React from 'react';
import { Sparkles, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenHireModal: (category?: string) => void;
  onOpenJobPortal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal, onOpenJobPortal }) => {
  return (
    <section className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-[#faf7f2]">
      
      {/* Ambient background blur circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-900">AI-Powered Talent Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Hire smarter.<br />
              Grow faster with{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                Strydz.
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We connect ambitious companies with pre-vetted professionals through expert recruiters and smart matching — shortlists in 48 hours, not weeks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenHireModal()}
                className="btn-shimmer px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Hire Talent
              </button>
              <button
                onClick={() => {
                  if (onOpenJobPortal) {
                    onOpenJobPortal();
                  } else {
                    const el = document.getElementById('jobs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-[#e8e2d5] hover:bg-[#f4efe6] transition shadow-2xs hover:-translate-y-0.5"
              >
                Find a Job
              </button>
            </div>

            {/* Social Proof Trust Stack with Real Unsplash Avatars */}
            <div className="pt-4 flex items-center gap-3">
              <div className="flex items-center -space-x-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Verified Professional"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Verified Professional"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
                  alt="Verified Professional"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Verified Professional"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-xs"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Trusted by <span className="font-semibold text-slate-800">500+</span> companies & <span className="font-semibold text-slate-800">10,000+</span> professionals
              </p>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase Card with Animations */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            
            {/* Background Decorative Gradient Card */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-600 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between border border-white/20">
              
              {/* Subtle background SVG curves & ambient glow */}
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  <circle cx="360" cy="80" r="140" stroke="white" strokeWidth="40" />
                  <path d="M-40 320 Q 80 200, 240 300 T 440 260" stroke="white" strokeWidth="50" />
                </svg>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400/30 rounded-full blur-2xl pointer-events-none" />

              {/* Floating Element 1: Priya Sharma Candidate Card with Real Headshot & Gentle Floating */}
              <div className="relative z-10 animate-float bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center justify-between gap-3 max-w-[340px] border border-white/80 transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                      alt="Priya Sharma"
                      className="w-11 h-11 rounded-full object-cover shadow-xs ring-2 ring-emerald-400/30"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">Priya Sharma</h3>
                    <p className="text-xs text-slate-500">Senior Product Designer</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 flex-none flex items-center gap-1 shadow-2xs">
                  <Sparkles className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                  92% match
                </span>
              </div>

              {/* Floating Element 2: Interview Scheduled Card with Delayed Float */}
              <div className="relative z-10 animate-float-delayed bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-[260px] ml-auto my-3 border border-white/80 transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Interview scheduled</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1">Tomorrow, 11:00 AM</h4>
                <div className="mt-2.5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-600 inline-block border border-indigo-100/60">
                    Round 2 · Design Lead
                  </span>
                </div>
              </div>

              {/* Floating Element 3: 48h Metric Card with Reverse Float */}
              <div className="relative z-10 animate-float-reverse bg-slate-950/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white flex items-center gap-4 max-w-[250px] shadow-2xl transition-all hover:scale-[1.02]">
                <div className="text-3xl font-black text-white tracking-tight flex items-center gap-1">
                  48h
                </div>
                <div className="text-xs text-slate-300 font-medium leading-tight">
                  Average time to first shortlist
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

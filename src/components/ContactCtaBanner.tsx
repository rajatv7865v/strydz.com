import React from 'react';

interface ContactCtaBannerProps {
  onOpenHireModal: (category?: string) => void;
  onUploadResume?: () => void;
}

export const ContactCtaBanner: React.FC<ContactCtaBannerProps> = ({ 
  onOpenHireModal,
  onUploadResume
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto bg-[#0c1222] text-white rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-200">Start Hiring Now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.2]">
            Ready to build your{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-white to-indigo-200 bg-clip-text text-transparent">
              dream team?
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Talk to a Strydz talent advisor and receive calibrated, interview-ready candidate profiles in 48 hours.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenHireModal('General Mandate')}
              className="btn-shimmer px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md hover:-translate-y-0.5"
            >
              Hire Talent
            </button>
            <button
              onClick={() => {
                if (onUploadResume) {
                  onUploadResume();
                } else {
                  onOpenHireModal('Resume Upload / Candidate');
                }
              }}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-transparent border border-slate-700 hover:border-slate-500 transition hover:bg-white/5 hover:-translate-y-0.5"
            >
              Upload Resume
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCtaBanner;

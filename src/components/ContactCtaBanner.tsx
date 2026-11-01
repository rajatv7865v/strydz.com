import React from 'react';

interface ContactCtaBannerProps {
  onOpenHireModal: (category?: string) => void;
  onUploadResume?: () => void;
}

export const ContactCtaBanner: React.FC<ContactCtaBannerProps> = ({ 
  onOpenHireModal,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]" id="contact-banner">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#31547b] via-[#264364] to-[#152537] text-white rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-1">
            <span className="w-2 h-2 rounded-full bg-[#514f14]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">Start The Conversation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.025em] text-white leading-[1.2]">
            Better decisions start with{' '}
            <span className="text-white underline decoration-[#514f14] decoration-4 underline-offset-8">
              better conversations
            </span>
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed pt-1">
            Start the conversation that shapes your leadership future. Connect directly with our managing partners and sector directors.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold shadow-lg hover:-translate-y-0.5 inline-block text-white bg-[#514f14] hover:bg-[#3f3e10] transition-all"
            >
              Contact Us
            </a>
            <button
              onClick={() => onOpenHireModal('Executive Advisory')}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-[#31547b] bg-white hover:bg-slate-100 transition shadow-md hover:-translate-y-0.5"
            >
              Build Your Leadership Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCtaBanner;

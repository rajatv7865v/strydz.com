import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCtaBannerProps {
  onOpenHireModal: () => void;
}

export const ContactCtaBanner: React.FC<ContactCtaBannerProps> = ({ onOpenHireModal }) => {
  return (
    <section className="py-16 bg-[#fdfbf7]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="ctab-banner text-center relative overflow-hidden" id="contact">
          
          {/* Subtle Secondary Emerald Flare */}
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(20,165,140,0.18),transparent_70%)] pointer-events-none animate-pulse-glow-2"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.2] text-[#f4f1ea] max-w-[700px] mx-auto mb-3.5 relative z-10">
            Ready to hire your next <span className="g">great engineer?</span>
          </h2>
          <p className="text-[#b9c0d4] text-base font-light mb-8 relative z-10 max-w-[500px] mx-auto">
            Post a job for free and see verified matched profiles within 8 hours.
          </p>
          <div className="relative z-10">
            <button
              onClick={onOpenHireModal}
              className="btn p text-base px-8 py-4 inline-flex items-center gap-2 group shadow-xl"
            >
              <span>Post a Job Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaBanner;

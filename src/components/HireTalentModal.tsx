import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Check
} from 'lucide-react';

interface HireTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  isDark?: boolean;
}

export const HireTalentModal: React.FC<HireTalentModalProps> = ({
  isOpen,
  onClose,
  defaultCategory
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roleTitle, setRoleTitle] = useState(defaultCategory || '');
  const [serviceType, setServiceType] = useState('AI & Tech Recruitment');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101a33]/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl border border-[rgba(168,119,42,0.3)] shadow-[0_24px_64px_rgba(16,26,51,0.25)] p-6 sm:p-9 my-8 bg-[#fdfbf7] text-[#101a33]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5f6679] hover:text-[#101a33] hover:bg-[rgba(168,119,42,0.1)] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-[rgba(168,119,42,0.25)] bg-[rgba(168,119,42,0.06)] text-[#a8772a] mb-2.5">
                <Zap className="w-3 h-3 text-[#a8772a] fill-[#a8772a]" />
                <span>Guaranteed 8-Hour Delivery SLA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101a33] tracking-tight">
                Post Your Role & <span className="g">Activate StrydzAI</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6679] mt-1 font-normal">
                Receive your first pre-screened, code-evaluated batch of candidates in under 8 hours.
              </p>
            </div>

            {/* Service Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5f6679]">
                Engagement Model:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'AI & Tech Recruitment',
                  'Quant & HFT Hiring',
                  'Executive Search / CXO',
                  'GCC Turnkey Buildout',
                  'Full-Lifecycle RPO',
                  'On-Demand Flexi-Staff'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setServiceType(type)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      serviceType === type
                        ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white border-transparent shadow-[0_2px_8px_rgba(168,119,42,0.3)]'
                        : 'bg-white text-[#101a33] border-[rgba(168,119,42,0.2)] hover:border-[#a8772a]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Role Details */}
            <div className="space-y-2">
              <input
                type="text"
                required
                placeholder="Role Title(s) (e.g., Senior Low-Latency C++ Engineer or VP of Engineering)"
                value={roleTitle}
                onChange={(e) => setRoleTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
              />
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="email"
                required
                placeholder="Work Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
              />
              <input
                type="tel"
                required
                placeholder="Direct Phone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
              />
            </div>

            {/* Urgency Pill */}
            <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[rgba(168,119,42,0.2)] text-xs">
              <span className="text-[#5f6679] font-medium">Delivery Speed Target:</span>
              <span className="font-mono font-bold text-[#a8772a] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#a8772a]" /> 8-Hour SLA Activated
              </span>
            </div>

            {/* Assurance Note */}
            <div className="p-3 bg-[rgba(20,165,140,0.08)] rounded-xl border border-[rgba(20,165,140,0.2)] text-[11px] text-[#101a33] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#14a58c] flex-shrink-0" />
              <span>
                Zero Risk: You only pay upon successful hire. Includes a 90-day replacement guarantee.
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn p w-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Activate Sourcing Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        ) : (
          /* Confirmation Success */
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[rgba(20,165,140,0.12)] text-[#14a58c] flex items-center justify-center mx-auto border border-[rgba(20,165,140,0.3)]">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#101a33]">
              Mandate Initialized & SLA Started!
            </h3>
            <p className="text-[#5f6679] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#101a33] font-semibold">{contactName}</span> from <span className="text-[#101a33] font-semibold">{companyName}</span>. Your request for <span className="text-[#a8772a] font-semibold">{roleTitle || serviceType}</span> has been dispatched to StrydzAI™ and a dedicated Senior Practice Lead.
            </p>
            <div className="p-4 bg-white rounded-xl border border-[rgba(168,119,42,0.2)] max-w-sm mx-auto text-xs text-left space-y-1.5 font-mono">
              <div className="text-[#5f6679]">Order ID: <span className="text-[#101a33] font-semibold">STRYDZ-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div className="text-[#5f6679]">Initial Candidate Batch: <span className="text-[#14a58c] font-bold">&lt; 8 Hours</span></div>
              <div className="text-[#5f6679]">Direct Contact: <span className="text-[#a8772a]">partners@strydz.com</span></div>
            </div>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="btn p text-xs font-semibold px-8"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default HireTalentModal;

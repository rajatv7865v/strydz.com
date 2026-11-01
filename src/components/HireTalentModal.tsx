import React, { useState } from 'react';
import { X, Check, Sparkles } from 'lucide-react';

interface HireTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
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
  const [serviceType, setServiceType] = useState('Retained Executive Search');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    'Retained Executive Search',
    'Board & CXO Search',
    'Practice Leadership',
    'Succession Planning',
    'Talent Mapping',
    'Advisory Mandates'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl border border-[#e8e2d5] shadow-2xl p-6 sm:p-8 my-8 bg-[#faf7f2] text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">Executive Search & Leadership Advisory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#23235b] tracking-[-0.025em] leading-[1.2]">
                Partner with{' '}
                <span className="text-[#00aeef]">
                  James Douglas
                </span>
              </h3>
              <div className="section-divider-left mt-2 mb-2"></div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                Tell us your leadership requirements and our Practice Partners will prepare a confidential executive search brief.
              </p>
            </div>

            {/* Service Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Advisory & Search Scope:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setServiceType(type)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      serviceType === type
                        ? 'bg-[#23235b] text-white border-[#23235b] shadow-xs'
                        : 'bg-white text-slate-700 border-[#e8e2d5] hover:border-[#ff9900] hover:text-[#23235b]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Role Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Leadership Role / Discipline
              </label>
              <input
                type="text"
                required
                value={roleTitle}
                onChange={(e) => setRoleTitle(e.target.value)}
                placeholder="e.g. Chief Executive Officer, Managing Director, CHRO, VP Tech"
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
              />
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Enterprise</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Enterprise / Conglomerate"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Nupur Mehta"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-warning-custom w-full py-3.5 rounded-xl text-sm font-bold text-slate-900 transition shadow-md hover:-translate-y-0.5"
              >
                Initiate Confidential Search Mandate
              </button>
            </div>

          </form>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#23235b]">Search Mandate Received</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              A James Douglas Practice Partner will review your requirements and reach out to schedule an initial advisory consultation.
            </p>
            <button
              onClick={onClose}
              className="btn-warning-custom mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-900 transition"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default HireTalentModal;

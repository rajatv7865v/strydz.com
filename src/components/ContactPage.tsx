import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Award,
  Send,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenHireModal: (category?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome, onOpenHireModal }) => {
  const [inquiryType, setInquiryType] = useState<'hire' | 'gcc' | 'exec' | 'candidate' | 'general'>('hire');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [corridor, setCorridor] = useState('Bengaluru (Silicon Plateau)');
  const [timeline, setTimeline] = useState('Immediate (< 8 Hours)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "How does the guaranteed 8-hour delivery SLA work?",
      a: "Once you submit a hiring mandate or job description, StrydzAI indexes your required stack and parses over 1,000,000+ pre-assessed engineering profiles. Within 8 hours, our domain recruiters deliver your initial batch of code-evaluated, interview-ready candidates with calibrated comp and verified notice periods."
    },
    {
      q: "What is Strydz's commercial model and guarantee?",
      a: "We operate on a 100% contingency success model for tech hiring. There are zero upfront onboarding fees. You only pay upon candidate start date. Every placement includes an unconditional 90-day replacement guarantee backed by priority rematching."
    },
    {
      q: "Can Strydz help build turnkey GCC tech hubs in India?",
      a: "Yes. Our GCC acceleration practice provides end-to-end site leadership placement (Managing Director, VP Engineering), compensation benchmarking, talent density corridor mapping, and cohort hiring of 50-200 engineers across Bengaluru, Hyderabad, Pune, and NCR."
    },
    {
      q: "How are code signals verified before candidates reach clients?",
      a: "StrydzAI conducts deep AST code parsing across open-source contributions, competitive algorithmic profiles, and validated systems experience. For HFT and Quant, we verify low-latency C++, cache-line optimization, and lock-free concurrency signals before interview scheduling."
    },
    {
      q: "Are searches conducted confidentially under NDA?",
      a: "Absolutely. Over 40% of our mandates are stealth startups, unannounced GCC capability centers, or confidential leadership replacements. We execute mutual enterprise NDAs before disclosing company identity to candidates."
    }
  ];

  const offices = [
    {
      city: "Bengaluru",
      badge: "Global Technology HQ",
      address: "Embassy TechVillage, Outer Ring Road, Bellandur",
      postal: "Bengaluru, Karnataka 560103",
      phone: "+91 (80) 4920-8000",
      email: "blr-office@strydz.com",
      focus: "AI/DeepTech, Core R&D, Platform"
    },
    {
      city: "Hyderabad",
      badge: "GCC Operations Hub",
      address: "Cyber Towers, Quadrant 4, HITEC City, Madhapur",
      postal: "Hyderabad, Telangana 500081",
      phone: "+91 (40) 6718-4000",
      email: "hyd-office@strydz.com",
      focus: "FinTech, Cloud Infra, Enterprise IT"
    },
    {
      city: "Delhi-NCR (Gurugram)",
      badge: "Quant & FinTech Desk",
      address: "DLF Cyber City, Building 10, Tower B, Phase II",
      postal: "Gurugram, Haryana 122002",
      phone: "+91 (124) 459-2000",
      email: "ncr-office@strydz.com",
      focus: "Quant Trading, High-Scale Consumer"
    },
    {
      city: "New York",
      badge: "North America Liaison",
      address: "One World Trade Center, 85th Floor",
      postal: "New York, NY 10007",
      phone: "+1 (212) 550-9000",
      email: "us-partners@strydz.com",
      focus: "US Client Strategy, HFT Desks"
    }
  ];

  return (
    <div className="bg-[#fdfbf7] text-[#101a33] font-sans min-h-screen">
      
      {/* Top Breadcrumb & Return Nav */}
      <div className="border-b border-[rgba(168,119,42,0.15)] bg-white/60 backdrop-blur-md sticky top-[72px] z-40">
        <div className="max-w-[1240px] mx-auto px-6 h-12 flex items-center justify-between text-xs text-[#5f6679]">
          <div className="flex items-center gap-2">
            <button 
              onClick={onBackToHome}
              className="text-[#5f6679] hover:text-[#a8772a] font-medium transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#101a33] font-semibold">Contact &amp; Enterprise Consultation</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#14a58c]">
            <span className="w-2 h-2 rounded-full bg-[#14a58c] animate-pulse"></span>
            <span>Practice Leads Online · 8-Hour SLA Active</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-[#fdfbf7] to-[#fdfbf7]">
        {/* Ambient Radial Flare */}
        <div className="absolute -top-32 right-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(226,182,107,0.32),transparent_65%)] pointer-events-none animate-pulse-glow-1"></div>
        <div className="absolute -left-20 bottom-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(20,165,140,0.12),transparent_65%)] pointer-events-none animate-pulse-glow-2"></div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          
          {/* Eyebrow Pill */}
          <div className="pill mb-6 cursor-default mx-auto inline-flex">
            <b></b>
            <span className="font-medium">Direct Enterprise Advisory · Guaranteed 8-Hour SLA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-1.5px] leading-[1.14] text-[#101a33] mb-6 max-w-4xl mx-auto">
            Let's Build Your <span className="g">World-Class Tech Team</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5f6679] font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you are filling mission-critical HFT roles, setting up a turnkey 100-engineer GCC tech hub in India, or exploring executive talent benchmarks, our senior practice leads respond within 8 hours.
          </p>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-[#101a33]">
            <div className="px-4 py-2 rounded-full bg-white border border-[rgba(168,119,42,0.2)] shadow-2xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#a8772a]" />
              <span>&lt; 8-Hour Candidate Match SLA</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-[rgba(168,119,42,0.2)] shadow-2xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#14a58c]" />
              <span>100% Confidential / Enterprise NDA</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-[rgba(168,119,42,0.2)] shadow-2xs flex items-center gap-2">
              <Award className="w-4 h-4 text-[#a8772a]" />
              <span>Zero Upfront Cost · 90-Day Guarantee</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content: Form + Practice Desks */}
      <section className="py-12 pb-24 max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Interactive Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-[rgba(168,119,42,0.22)] shadow-[0_12px_40px_rgba(16,26,51,0.06)]">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Title */}
                <div className="border-b border-[rgba(168,119,42,0.15)] pb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#a8772a] font-bold block mb-1">
                    Mandate Initiation Form
                  </span>
                  <h3 className="text-2xl font-bold text-[#101a33]">
                    Submit Your Hiring Requirements
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5f6679] mt-1">
                    Directly dispatched to StrydzAI™ and assigned to an industry Practice Lead.
                  </p>
                </div>

                {/* Engagement Type Selector */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5f6679]">
                    1. Select Practice or Consultation Focus:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'hire', label: 'Tech & HFT Hiring' },
                      { id: 'gcc', label: 'India GCC Buildout' },
                      { id: 'exec', label: 'Executive Search / CXO' },
                      { id: 'candidate', label: 'Candidate Looking for Role' },
                      { id: 'general', label: 'General / Enterprise Advisory' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setInquiryType(t.id as any)}
                        className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          inquiryType === t.id
                            ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white border-transparent shadow-[0_4px_14px_rgba(168,119,42,0.35)]'
                            : 'bg-[#fdfbf7] text-[#101a33] border-[rgba(168,119,42,0.2)] hover:border-[#a8772a] hover:bg-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Coordinates */}
                <div className="space-y-4">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5f6679]">
                    2. Your Contact Information:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#101a33] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#101a33] mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#101a33] mb-1">Company / Firm Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Citadel / Citadel Securities"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#101a33] mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                      />
                    </div>
                  </div>
                </div>

                {/* Mandate Specifics */}
                <div className="space-y-4">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5f6679]">
                    3. Mandate Specifications:
                  </label>

                  <div>
                    <label className="block text-xs font-medium text-[#101a33] mb-1">Target Roles / Skillsets *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lead Ultra-Low Latency C++ Developer, PyTorch GPU Architect, or VP GCC"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#101a33] mb-1">Target Tech Corridor</label>
                      <select
                        value={corridor}
                        onChange={(e) => setCorridor(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm focus:outline-none focus:border-[#a8772a]"
                      >
                        <option>Bengaluru (Silicon Plateau)</option>
                        <option>Hyderabad (HITEC City)</option>
                        <option>Pune (Cybercity Hub)</option>
                        <option>Delhi-NCR (Gurugram / Noida)</option>
                        <option>Mumbai (BKC FinTech)</option>
                        <option>Remote (India / Global)</option>
                        <option>United States (NYC / SF)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#101a33] mb-1">Target Hiring Timeline</label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm focus:outline-none focus:border-[#a8772a]"
                      >
                        <option>Immediate (&lt; 8-Hour First Batch)</option>
                        <option>Next 15–30 Days</option>
                        <option>Quarterly GCC Cohort (50+ Roles)</option>
                        <option>Confidential Executive Search</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#101a33] mb-1">
                      Role Context &amp; Key Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share stack requirements (e.g. C++20, kernel bypass, DPDK, CUDA), seniority, team structure, or link to job description..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs sm:text-sm placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                    />
                  </div>
                </div>

                {/* Assurance & SLA Notice */}
                <div className="p-4 bg-[rgba(20,165,140,0.06)] rounded-2xl border border-[rgba(20,165,140,0.2)] text-xs text-[#101a33] flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#14a58c] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-bold text-[#101a33]">Strict Enterprise Confidentiality</div>
                    <div className="text-[11px] text-[#5f6679] leading-relaxed">
                      All mandate data is processed in accordance with ISO 27001 standards. We never disclose mandate details or company identity without signed consent.
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn p w-full text-sm font-bold py-4 flex items-center justify-center gap-2 group shadow-xl"
                >
                  <span>Submit Mandate Under 8-Hour SLA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>

              </form>
            ) : (
              /* Success Screen */
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[rgba(20,165,140,0.12)] text-[#14a58c] flex items-center justify-center mx-auto border border-[rgba(20,165,140,0.3)] shadow-lg animate-pulse">
                  <Check className="w-8 h-8" />
                </div>
                
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[rgba(20,165,140,0.08)] text-[#14a58c] border border-[rgba(20,165,140,0.25)] mb-2">
                    SLA Clock Activated: &lt; 8 Hours
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#101a33] tracking-tight">
                    Mandate Dispatched Successfully!
                  </h3>
                  <p className="text-[#5f6679] text-sm max-w-md mx-auto leading-relaxed mt-2">
                    Thank you, <span className="text-[#101a33] font-semibold">{name}</span> from <span className="text-[#101a33] font-semibold">{company}</span>. Your mandate for <span className="text-[#a8772a] font-semibold">{roleTitle}</span> in <span className="text-[#101a33] font-semibold">{corridor}</span> has been indexed by StrydzAI™.
                  </p>
                </div>

                <div className="p-6 bg-[#fdfbf7] rounded-2xl border border-[rgba(168,119,42,0.2)] max-w-md mx-auto text-xs text-left space-y-2 font-mono shadow-xs">
                  <div className="flex justify-between border-b border-[rgba(168,119,42,0.15)] pb-2">
                    <span className="text-[#5f6679]">Reference ID:</span>
                    <span className="font-bold text-[#101a33]">STRYDZ-MND-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(168,119,42,0.15)] pb-2">
                    <span className="text-[#5f6679]">Assigned Practice Lead:</span>
                    <span className="font-bold text-[#a8772a]">Senior Partner (India Corridors)</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(168,119,42,0.15)] pb-2">
                    <span className="text-[#5f6679]">Target Candidate Batch:</span>
                    <span className="font-bold text-[#14a58c]">&lt; 8 Business Hours</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#5f6679]">Direct Partner Desk:</span>
                    <span className="text-[#101a33] font-semibold">partners@strydz.com</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn text-xs py-3 px-6"
                  >
                    Submit Another Requirement
                  </button>
                  <button
                    onClick={onBackToHome}
                    className="btn p text-xs py-3 px-7"
                  >
                    Return to Homepage
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Right: Direct Practice Desks & Global Hubs (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Practice Leads Card */}
            <div className="bg-white rounded-3xl p-7 md:p-8 border border-[rgba(168,119,42,0.2)] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[rgba(168,119,42,0.15)] pb-4">
                <h4 className="text-lg font-bold text-[#101a33]">
                  Direct Practice Contacts
                </h4>
                <span className="text-xs font-mono text-[#a8772a] font-bold">
                  SLA &lt; 8h
                </span>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Practice 1 */}
                <div className="p-3.5 rounded-2xl border border-[rgba(168,119,42,0.15)] bg-[#fdfbf7] space-y-1">
                  <div className="font-bold text-sm text-[#101a33]">Quant &amp; HFT Talent Practice</div>
                  <p className="text-[11px] text-[#5f6679]">Ultra-low latency C++, FPGA, hardware acceleration, and trading algorithmic engineers.</p>
                  <div className="pt-1.5 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#a8772a]">hft-practice@strydz.com</span>
                    <span className="text-[#14a58c] font-bold">Available</span>
                  </div>
                </div>

                {/* Practice 2 */}
                <div className="p-3.5 rounded-2xl border border-[rgba(168,119,42,0.15)] bg-[#fdfbf7] space-y-1">
                  <div className="font-bold text-sm text-[#101a33]">GCC Turnkey Buildout Practice</div>
                  <p className="text-[11px] text-[#5f6679]">Executive site leadership, corridor comp benchmarking, and 50–200 cohort engineering hiring.</p>
                  <div className="pt-1.5 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#a8772a]">gcc-advisory@strydz.com</span>
                    <span className="text-[#14a58c] font-bold">Available</span>
                  </div>
                </div>

                {/* Practice 3 */}
                <div className="p-3.5 rounded-2xl border border-[rgba(168,119,42,0.15)] bg-[#fdfbf7] space-y-1">
                  <div className="font-bold text-sm text-[#101a33]">Executive Search / CXO Practice</div>
                  <p className="text-[11px] text-[#5f6679]">VP of Engineering, Managing Directors, Heads of AI, and Chief Technology Officers.</p>
                  <div className="pt-1.5 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#a8772a]">exec-search@strydz.com</span>
                    <span className="text-[#14a58c] font-bold">Available</span>
                  </div>
                </div>

              </div>

              {/* Direct Instant Action */}
              <button
                onClick={() => onOpenHireModal('Direct Role Consultation')}
                className="btn w-full text-xs justify-center font-bold"
              >
                Open Quick Role Modal
              </button>
            </div>

            {/* Physical Tech Hub Offices */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#a8772a]">
                Operating Hubs &amp; Regional Offices
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {offices.map((office, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl border border-[rgba(168,119,42,0.18)] bg-white shadow-2xs hover:border-[#a8772a] hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="font-bold text-sm text-[#101a33] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#a8772a]" />
                        <span>{office.city}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(168,119,42,0.08)] text-[#a8772a] font-bold border border-[rgba(168,119,42,0.2)]">
                        {office.badge}
                      </span>
                    </div>

                    <div className="text-xs text-[#5f6679] leading-relaxed">
                      <div>{office.address}</div>
                      <div>{office.postal}</div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[rgba(168,119,42,0.12)] flex items-center justify-between text-[11px] font-mono text-[#5f6679]">
                      <span>{office.phone}</span>
                      <span className="text-[#14a58c] font-semibold">{office.focus}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 border-t border-[rgba(168,119,42,0.18)] bg-[#f5f0e6]/50">
        <div className="max-w-[1000px] mx-auto px-6">
          
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[rgba(168,119,42,0.25)] bg-[rgba(168,119,42,0.06)] text-[#a8772a]">
              <Sparkles className="w-3.5 h-3.5 text-[#a8772a]" />
              <span>Everything You Need to Know</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101a33]">
              Frequently Asked <span className="g">Questions</span>
            </h2>
            <p className="text-sm text-[#5f6679] max-w-xl mx-auto">
              Transparent answers regarding our 8-hour SLA, technical screening mechanisms, and contingency guarantees.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[rgba(168,119,42,0.18)] shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#101a33] hover:text-[#a8772a] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] flex items-center justify-center flex-shrink-0 text-[#a8772a]">
                    {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5f6679] leading-relaxed border-t border-[rgba(168,119,42,0.1)] pt-4 animate-card-slide">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;

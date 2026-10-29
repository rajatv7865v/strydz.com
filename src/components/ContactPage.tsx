import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenHireModal: (category?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome, onOpenHireModal }) => {
  const [inquiryType, setInquiryType] = useState<'hire' | 'exec' | 'contract' | 'candidate' | 'general'>('hire');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [timeline, setTimeline] = useState('Immediate (< 48 Hours)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const offices = [
    {
      city: 'Bengaluru',
      badge: 'Technology HQ',
      address: 'Embassy TechVillage, Outer Ring Road, Bellandur',
      postal: 'Bengaluru, Karnataka 560103',
      phone: '+91 (80) 4920-8000',
      email: 'blr@strydz.com',
    },
    {
      city: 'Delhi-NCR (Gurugram)',
      badge: 'Northern Regional Hub',
      address: 'DLF Cyber City, Building 10, Tower B, Phase II',
      postal: 'Gurugram, Haryana 122002',
      phone: '+91 (124) 459-2000',
      email: 'ncr@strydz.com',
    },
    {
      city: 'Hyderabad',
      badge: 'GCC & Operations Hub',
      address: 'Cyber Towers, HITEC City, Madhapur',
      postal: 'Hyderabad, Telangana 500081',
      phone: '+91 (40) 6718-4000',
      email: 'hyd@strydz.com',
    },
    {
      city: 'Lucknow',
      badge: 'Growth Center',
      address: 'Vibhuti Khand, Gomti Nagar',
      postal: 'Lucknow, Uttar Pradesh 226010',
      phone: '+91 (522) 420-1000',
      email: 'lucknow@strydz.com',
    },
  ];

  const faqs = [
    {
      q: 'How fast will I hear back from a Strydz advisor?',
      a: 'Our sector specialists review and respond to all inquiries within 2 business hours. If you submit a hiring brief, your initial intake discussion can be scheduled the same day.',
    },
    {
      q: 'How does Strydz’s 48-hour shortlist delivery work?',
      a: 'Once you submit a hiring brief, our recruiters and smart AI matching engine screen calibrated candidate profiles. Within 48 hours, you receive a curated batch of interview-ready candidates with verified skills and compensation alignment.',
    },
    {
      q: 'What is your commercial model and replacement guarantee?',
      a: 'We operate on a transparent contingency success model. You only pay when a candidate successfully joins. Every placement includes an unconditional replacement guarantee.',
    },
    {
      q: 'Are searches conducted confidentially?',
      a: 'Yes. Many mandates are confidential executive placements, stealth startup builds, or unannounced GCC team expansions. We strictly adhere to enterprise confidentiality and mutual NDAs.',
    },
  ];

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Breadcrumb Bar */}
      <div className="border-b border-[#e8e2d5] bg-[#f4efe6] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <button 
              onClick={onBackToHome}
              className="hover:text-indigo-600 transition font-medium"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Talent Advisors Online · 2-Hour Response SLA</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="relative pt-16 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Contact & Support</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.15]">
          Let's start a{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
            conversation
          </span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you're looking to hire top talent, explore new career opportunities, or partner with Strydz, our team is ready to assist.
        </p>

        {/* 3 Quick Contact Info Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-4 text-center shadow-xs">
            <Phone className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
            <p className="text-xs text-slate-400 font-medium">Direct Phone</p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">+91 (80) 4920-8000</p>
          </div>
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-4 text-center shadow-xs">
            <Mail className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
            <p className="text-xs text-slate-400 font-medium">Email Advisory</p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">contact@strydz.com</p>
          </div>
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-4 text-center shadow-xs">
            <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
            <p className="text-xs text-slate-400 font-medium">Response SLA</p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">&lt; 2 Business Hours</p>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Interactive Form & Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (7 Cols): Contact & Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Send us a message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out the form below and the appropriate sector lead will get back to you shortly.
                  </p>
                </div>

                {/* Inquiry Type Tabs */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    I am inquiring about:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'hire', label: 'Hire Talent' },
                      { id: 'exec', label: 'Executive Search' },
                      { id: 'contract', label: 'Contract / RPO' },
                      { id: 'candidate', label: 'Candidate / Jobs' },
                      { id: 'general', label: 'General Partnership' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setInquiryType(tab.id as any)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition ${
                          inquiryType === tab.id
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                            : 'bg-white text-slate-700 border-[#e8e2d5] hover:border-indigo-400 hover:text-indigo-600'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Singh"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@company.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Finlytics"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Role / Mandate Title</label>
                    <input
                      type="text"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      placeholder="e.g. Senior Product Designer, Backend Lead"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Target Timeline</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white text-slate-700"
                    >
                      <option>Immediate (&lt; 48 Hours)</option>
                      <option>Next 2 - 4 Weeks</option>
                      <option>Next 1 - 3 Months</option>
                      <option>Exploratory / Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">How can we help? *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the roles, tech stack, location, or team expansion plans..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md hover:-translate-y-0.5"
                >
                  Send Inquiry
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank you for reaching out!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Our talent advisory team has received your message. A dedicated specialist will reach out within 2 business hours.
                </p>
                <button
                  onClick={onBackToHome}
                  className="btn-shimmer mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>

          {/* Right Column (5 Cols): Direct Booking Card & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick 15-Minute Intro Call Card */}
            <div className="bg-indigo-600 text-white rounded-3xl p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-indigo-100 text-xs font-semibold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-white" />
                <span>Fast Consultation</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Prefer a direct conversation?
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100 mt-2 leading-relaxed">
                Schedule a 15-minute intake call with our managing recruiters to discuss your requirements.
              </p>
              <button
                onClick={() => onOpenHireModal('15-Min Intro Call')}
                className="btn-shimmer mt-5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-indigo-600 bg-white hover:bg-indigo-50 transition shadow-sm inline-flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book 15-Min Call</span>
              </button>
            </div>

            {/* Offices across India */}
            <div className="bg-[#f4efe6] rounded-3xl p-7 border border-[#e8e2d5]">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Our Hubs in India
                </h3>
              </div>

              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white rounded-2xl p-4 border border-[#e8e2d5] space-y-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">{office.city}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {office.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{office.address}, {office.postal}</p>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-slate-600 font-medium">{office.phone}</span>
                      <span className="text-indigo-600 font-semibold">{office.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2]">
            Clear answers to{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              common questions
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-xl mx-auto font-normal">
            Everything you need to know about our recruitment turnarounds, guarantees, and enterprise models.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e2d5] shadow-xs space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e8e2d5]/60 pb-3 last:border-none">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-sm sm:text-base font-bold text-slate-800 hover:text-indigo-600 py-1.5 transition"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 flex-none" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-none" />
                )}
              </button>
              {openFaq === idx && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pt-1 font-normal">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#0c1222] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to build your dream team?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
              Talk to a Strydz talent advisor and get your first shortlist in 48 hours.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal('Contact Us Footer CTA')}
                className="btn-shimmer px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm hover:-translate-y-0.5"
              >
                Hire Talent
              </button>
              <button
                onClick={onBackToHome}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-slate-700 hover:border-slate-500 transition hover:bg-white/5 hover:-translate-y-0.5"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

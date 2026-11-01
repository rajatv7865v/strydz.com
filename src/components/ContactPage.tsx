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
  PhoneCall,
  Upload
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenHireModal: (category?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome, onOpenHireModal }) => {
  const [assistType, setAssistType] = useState('Hire for you');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('India');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const faqs = [
    {
      q: 'How does Strydz approach executive leadership search?',
      a: 'We believe leadership isn’t "filled", it is chosen with intent. We don’t operate as transactional resume brokers. As a wholly owned subsidiary of EMA Partners India Limited, our senior consultants conduct deep qualitative mapping, behavioral assessment, and cultural calibration to ensure enduring alignment.',
    },
    {
      q: 'Which practice areas and sectors do your consultants specialize in?',
      a: 'We operate dedicated specialized practices across Banking & Financial Services (BFSI), Enterprise Technology & SaaS, Healthcare & Life Sciences, Industrial & Manufacturing, Human Resources Leadership, and Consumer & Retail.',
    },
    {
      q: 'Are searches conducted with complete confidentiality?',
      a: 'Absolute discretion is foundational to our advisory ethos. All board-level, CXO, and leadership succession mandates are conducted strictly under mutual non-disclosure and confidential protocols.',
    },
    {
      q: 'What is your relationship with EMA Partners India Limited?',
      a: 'Strydz Leadership Advisory India Private Limited is a wholly owned subsidiary of EMA Partners India Limited, bringing over 25 years of global executive search legacy, institutional governance, and an international network.',
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
              className="hover:text-[#514f14] transition font-medium"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#31547b] font-semibold">Contact Us</span>
          </div>
          <div className="flex items-center gap-2 text-[#31547b] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#514f14] animate-pulse"></span>
            <span>Executive Advisory Team Online · Mumbai BKC Head Office</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Banner with Authentic Strydz Imagery */}
      <section
        id="contact-banner"
        className="banner relative w-full h-[52vh] min-h-[420px] max-h-[580px] overflow-hidden flex items-center justify-center bg-[#152537] select-none"
        style={{
          backgroundImage: `url('https://www.jamesdouglas.co.in/assets/images/contact-usbanner.jpg'), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=85')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Centered Strydz Banner Overlay */}
        <div className="banner-overlay relative z-10 w-full md:w-[65%] lg:w-[60%] h-full flex items-center justify-center bg-black/45 md:bg-[#00000077] backdrop-blur-[1px] px-6 sm:px-10 md:px-14 py-12">
          <div className="banner-content text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-4 text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#514f14]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                Let's Connect
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] text-white tracking-tight drop-shadow-sm">
              <span className="hero-corner mr-4 sm:mr-6">Let's Create Value, Together.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              We work with organizations, leaders, and colleagues who believe in building something meaningful. Reach out to start a conversation about how we can create value through people.
            </p>

          </div>
        </div>
      </section>

      {/* 3 Quick Contact Info Floating Strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
            <Phone className="w-5 h-5 text-[#514f14] mx-auto mb-1.5" />
            <p className="text-xs text-slate-400 font-medium">Direct Telephone</p>
            <p className="text-sm font-bold text-[#31547b] mt-0.5">+91 74001 60679</p>
          </div>
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
            <Mail className="w-5 h-5 text-[#31547b] mx-auto mb-1.5" />
            <p className="text-xs text-slate-400 font-medium">Email Advisory</p>
            <p className="text-sm font-bold text-[#31547b] mt-0.5">contact@strydz.com</p>
          </div>
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all">
            <MapPin className="w-5 h-5 text-[#514f14] mx-auto mb-1.5" />
            <p className="text-xs text-slate-400 font-medium">Head Office</p>
            <p className="text-sm font-bold text-[#31547b] mt-0.5">ONE BKC, Bandra (E), Mumbai</p>
          </div>
        </div>
      </div>

      {/* 3. Main Content: Interactive Form & Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (7 Cols): Contact & Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#31547b] tracking-tight">
                    Get in touch
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tell us what you're looking for and our consultants will take it from there.
                  </p>
                </div>

                {/* How Can We Assist You Dropdown / Tabs */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    How Can We Assist You *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'Hire for you', label: 'Hire for you' },
                      { id: 'Find your next career move', label: 'Career Move' },
                      { id: 'Join us', label: 'Join Our Advisory' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setAssistType(tab.id)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition text-center ${
                          assistType === tab.id
                            ? 'bg-[#31547b] text-white border-[#31547b] shadow-2xs'
                            : 'bg-white text-slate-700 border-[#e8e2d5] hover:border-[#514f14] hover:text-[#31547b]'
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Designation *</label>
                    <input
                      type="text"
                      required
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g. Managing Director, CHRO, VP"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Mumbai, Bengaluru, Delhi-NCR..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Country"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                    />
                  </div>
                </div>

                {/* Attach File Option */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Attach Relevant Documents / CV (Optional)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#31547b] bg-[#f4efe6] border border-[#e8e2d5] hover:bg-[#eae3d5] transition">
                      <Upload className="w-3.5 h-3.5 text-[#514f14]" />
                      <span>{fileName ? 'Change File' : 'Upload File (.pdf, .docx)'}</span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                    {fileName && (
                      <span className="text-xs text-slate-600 font-medium truncate max-w-xs">
                        {fileName}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Mandate Brief *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the leadership role, executive requirements, or inquiry details..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#31547b] focus:ring-1 focus:ring-[#31547b] bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-warning-custom w-full py-3.5 rounded-xl text-sm font-bold text-white transition shadow-md hover:-translate-y-0.5"
                >
                  Submit Inquiry
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#31547b]">Thank you for your interest in Strydz</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Our leadership consultants have received your communication and will connect with you confidentially.
                </p>
                <button
                  onClick={onBackToHome}
                  className="btn-warning-custom mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>

          {/* Right Column (5 Cols): Office Locations & Legacy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connect Card */}
            <div className="bg-gradient-to-br from-[#31547b] via-[#264364] to-[#152537] text-white rounded-3xl p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-[#514f14] text-xs font-semibold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Executive Consultation</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Better decisions start with better conversations.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Connect directly with our Practice Leaders to review organizational mandates, talent landscapes, or succession roadmaps.
              </p>
              <button
                onClick={() => onOpenHireModal('Direct Executive Consultation')}
                className="btn-warning-custom mt-5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition shadow-sm inline-flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Practice Consultation</span>
              </button>
            </div>

            {/* Offices & Registered Address */}
            <div className="bg-[#f4efe6] rounded-3xl p-7 border border-[#e8e2d5] space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#514f14] block mb-1">
                  Corporate Headquarters
                </span>
                <h4 className="font-bold text-base text-[#31547b]">
                  Strydz Leadership Advisory India Pvt. Ltd.
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  1012, 10th Floor, C-Wing, ONE BKC, “G Block”, Bandra – Kurla Complex, Bandra (East), Mumbai - 400 051, India.
                </p>
                <div className="mt-3 pt-3 border-t border-[#e8e2d5] flex flex-col gap-1 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#31547b]" />
                    <span className="font-semibold">+91 74001 60679</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-[#31547b]" />
                    <span className="font-semibold">contact@strydz.com</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e8e2d5] pt-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#31547b] block mb-1">
                  Institutional Heritage
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A wholly owned subsidiary of <strong>EMA Partners India Limited</strong>, listed on the NSE (EMAPL). Seamless executive reach across major commercial centers in Mumbai, Bengaluru, Delhi-NCR, and worldwide partner offices.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#514f14]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#31547b]">Advisory Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#31547b] tracking-tight leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mt-3.5 mb-3.5"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-xl mx-auto font-normal">
            Information regarding our retained search methodology, practice coverage, and governance credentials.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e2d5] shadow-xs space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e8e2d5]/60 pb-3 last:border-none">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-sm sm:text-base font-bold text-[#31547b] hover:text-[#514f14] py-1.5 transition"
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
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#31547b] via-[#264364] to-[#152537] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Better decisions start with better conversations
            </h2>
            <div className="section-divider mt-4 mb-4"></div>
            <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
              Start the conversation that shapes your leadership future.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal('Contact Us Footer CTA')}
                className="btn-warning-custom px-7 py-3 rounded-xl text-sm font-semibold text-white transition shadow-sm hover:-translate-y-0.5"
              >
                Start a Conversation
              </button>
              <button
                onClick={onBackToHome}
                className="px-7 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-white/30 hover:border-white transition hover:bg-white/10 hover:-translate-y-0.5"
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

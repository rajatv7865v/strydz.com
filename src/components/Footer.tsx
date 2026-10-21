import React, { useState } from 'react';
import { 
  ArrowUp, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Check, 
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenHireModal: (category?: string) => void;
  onNavigate?: (view: 'home' | 'contact', hash?: string) => void;
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHireModal, onNavigate }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'contact', hash?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, hash);
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const practiceAreas = [
    { title: 'Quant & HFT Engineering', category: 'Quant & HFT Hiring' },
    { title: 'Generative AI & LLM Systems', category: 'GenAI & Machine Learning' },
    { title: 'GCC India Turnkey Setup', category: 'GCC Turnkey Buildout' },
    { title: 'Low-Latency C++ & FPGA', category: 'Low-Latency C++' },
    { title: 'Executive & CXO Search', category: 'Executive Search / CXO' },
    { title: 'Full-Lifecycle RPO', category: 'Full-Lifecycle RPO' }
  ];

  const techCorridors = [
    { city: 'Bengaluru', area: 'Outer Ring Road / Bellandur', note: 'AI & DeepTech' },
    { city: 'Hyderabad', area: 'HITEC City / Madhapur', note: 'FinTech & Cloud' },
    { city: 'Pune', area: 'Cybercity / Magarpatta', note: 'AutoTech & Systems' },
    { city: 'Delhi-NCR', area: 'Cyber City, Gurugram', note: 'Consumer & Quant' }
  ];

  const platformLinks = [
    { label: 'Hiring Velocity Simulator', href: '#calculator' },
    { label: 'Talent Network Architecture', href: '#why' },
    { label: 'Four-Step Hiring Workflow', href: '#how' },
    { label: 'Curated Active Openings', href: '#jobs' },
    { label: 'Enterprise Talent Suite', href: '#what-you-get' }
  ];

  return (
    <footer className="relative bg-[#fdfbf7] text-[#101a33] border-t border-[rgba(168,119,42,0.22)] pt-20 pb-12 font-sans overflow-hidden">
      
      {/* Ambient Warm Golden Flares in Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-48 bg-[radial-gradient(ellipse,rgba(226,182,107,0.2),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Top Newsletter & Briefing Subscription Bar */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[rgba(168,119,42,0.2)] shadow-[0_10px_30px_rgba(16,26,51,0.04)] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[rgba(168,119,42,0.08)] text-[#a8772a] border border-[rgba(168,119,42,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#a8772a]" />
                <span>Executive Talent Intelligence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101a33] tracking-tight">
                Quarterly India GCC &amp; <span className="g">Tech Salary Brief</span>
              </h3>
              <p className="text-sm text-[#5f6679] max-w-lg leading-relaxed">
                Join 14,000+ engineering leaders receiving our verified compensation indices, talent density heatmaps, and hiring velocity reports.
              </p>
            </div>

            <div className="lg:col-span-6">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-full text-xs sm:text-sm bg-[#fdfbf7] border border-[rgba(168,119,42,0.25)] text-[#101a33] placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                  />
                  <button
                    type="submit"
                    className="btn p whitespace-nowrap text-xs sm:text-sm py-3.5 px-7 flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-[rgba(20,165,140,0.08)] border border-[rgba(20,165,140,0.25)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#14a58c] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#101a33]">You're Subscribed!</h5>
                    <p className="text-xs text-[#5f6679]">The latest Q2 India Tech & GCC Compensation Index will arrive shortly.</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[rgba(168,119,42,0.18)]">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-[#101a33] group inline-flex">
              <div className="w-[32px] h-[32px] flex-none group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path d="M16 2l12 7v14l-12 7L4 23V9z" fill="none" stroke="url(#gg)" strokeWidth="2" />
                  <path d="M16 16l12-7M16 16L4 9M16 16v14" stroke="url(#gg)" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="font-semibold text-[22px] tracking-tight">Strydz</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[rgba(168,119,42,0.08)] text-[#a8772a] border border-[rgba(168,119,42,0.2)] font-bold">
                .COM
              </span>
            </a>

            <p className="text-sm text-[#5f6679] leading-relaxed max-w-sm">
              India's premier AI recruitment platform for Tier-1 Tech, Quantitative Trading, and Global Capability Centers. Sub-8-hour candidate matching with verified code signals.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[rgba(20,165,140,0.08)] border border-[rgba(20,165,140,0.25)] text-[#14a58c]">
              <span className="w-2 h-2 rounded-full bg-[#14a58c] animate-pulse"></span>
              <span>StrydzAI Sourcing Engine: Operational (8h SLA)</span>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-2 pt-2 text-xs text-[#5f6679]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#a8772a]" />
                <a href="mailto:partners@strydz.com" className="hover:text-[#a8772a] transition-colors">
                  partners@strydz.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#a8772a]" />
                <span>+91 (80) 4920-8000 (Bengaluru HQ Desk)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-[rgba(168,119,42,0.2)] flex items-center justify-center text-[#5f6679] hover:text-[#a8772a] hover:border-[#a8772a] hover:-translate-y-1 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-full bg-white border border-[rgba(168,119,42,0.2)] flex items-center justify-center text-[#5f6679] hover:text-[#a8772a] hover:border-[#a8772a] hover:-translate-y-1 transition-all shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-white border border-[rgba(168,119,42,0.2)] flex items-center justify-center text-[#5f6679] hover:text-[#a8772a] hover:border-[#a8772a] hover:-translate-y-1 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* WhatsApp Direct */}
              <button
                onClick={() => onOpenHireModal('Direct WhatsApp Consultation')}
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-[rgba(168,119,42,0.2)] flex items-center justify-center text-[#14a58c] hover:border-[#14a58c] hover:-translate-y-1 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6-.1.48-.3 1.47-1.2 1.68-1.76.21-.55.21-1.02.15-1.12-.06-.1-.22-.16-.47-.29z"/>
                </svg>
              </button>
            </div>

          </div>

          {/* Column 2: Solutions / Practice Areas (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a8772a]">
              Specialised Practices
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5f6679]">
              {practiceAreas.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onOpenHireModal(item.category)}
                    className="hover:text-[#a8772a] hover:translate-x-1 transition-all duration-200 text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[rgba(168,119,42,0.4)] group-hover:bg-[#a8772a] group-hover:scale-125 transition-all"></span>
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: GCC Tech Corridors (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a8772a]">
              India Tech Corridors
            </h4>
            <div className="space-y-3">
              {techCorridors.map((c, idx) => (
                <a
                  key={idx}
                  href="#gcc"
                  className="block p-2.5 rounded-xl border border-[rgba(168,119,42,0.14)] bg-white hover:border-[#a8772a] hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#101a33] group-hover:text-[#a8772a] transition-colors">
                      {c.city}
                    </span>
                    <span className="text-[10px] font-mono text-[#a8772a]">
                      {c.note}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#5f6679] truncate mt-0.5">
                    {c.area}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Platform & Governance (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a8772a]">
              Platform &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5f6679]">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, 'home', link.href)}
                    className="hover:text-[#a8772a] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[rgba(168,119,42,0.4)] group-hover:bg-[#a8772a] group-hover:scale-125 transition-all"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-[#a8772a] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-[rgba(168,119,42,0.4)] group-hover:bg-[#a8772a] group-hover:scale-125 transition-all"></span>
                  <span className="font-semibold text-[#101a33]">Contact Us Page</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenHireModal('Enterprise Inquiries')}
                  className="font-bold text-[#a8772a] hover:underline flex items-center gap-1"
                >
                  <span>Post Mandate</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Hubs & ISO Compliance Ribbon */}
        <div className="py-8 border-b border-[rgba(168,119,42,0.15)] flex flex-wrap items-center justify-between gap-6 text-xs text-[#5f6679]">
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6">
            <div className="flex items-center gap-1.5 font-medium text-[#101a33]">
              <ShieldCheck className="w-4 h-4 text-[#14a58c]" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[#101a33]">
              <CheckCircle2 className="w-4 h-4 text-[#a8772a]" />
              <span>SOC-2 Type II Audited</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[#101a33]">
              <Globe className="w-4 h-4 text-[#14a58c]" />
              <span>GDPR &amp; DPDP Compliant</span>
            </div>
          </div>

          <div className="text-xs text-[#5f6679] flex items-center gap-2">
            <span>Enterprise Talent Hubs:</span>
            <span className="font-semibold text-[#101a33]">Bengaluru</span> ·
            <span className="font-semibold text-[#101a33]">Hyderabad</span> ·
            <span className="font-semibold text-[#101a33]">Pune</span> ·
            <span className="font-semibold text-[#101a33]">Gurugram</span> ·
            <span className="font-semibold text-[#101a33]">New York</span>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5f6679]">
          
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Strydz Technologies Inc. All rights reserved.</span>
            <span>•</span>
            <span>Built with precision for world-class engineering teams.</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#why" className="hover:text-[#a8772a] transition-colors">Privacy Policy</a>
            <a href="#how" className="hover:text-[#a8772a] transition-colors">Terms of Service</a>
            <a href="#gcc" className="hover:text-[#a8772a] transition-colors">GCC Intelligence</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[rgba(168,119,42,0.2)] bg-white text-[#5f6679] hover:text-[#a8772a] hover:border-[#a8772a] hover:-translate-y-1 transition-all shadow-2xs group"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

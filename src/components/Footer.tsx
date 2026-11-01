import React from 'react';
import { NavView } from './Navbar';

interface FooterProps {
  onOpenHireModal: (category?: string) => void;
  onNavigate?: (view: NavView, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHireModal, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, view: NavView, hash?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, hash);
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#23235b] via-[#202052] to-[#14143a] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & About Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-extrabold text-base border border-[#ff9900]/50 shadow-md">
                <span className="text-[#ff9900]">J</span><span>D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-2xl tracking-[-0.02em] text-white leading-tight">
                  James Douglas
                </span>
                <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest">
                  India · Leadership Advisory
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              At James Douglas, we connect exceptional leadership talent with forward-thinking companies through tailored executive search solutions driven by insight, precision, and impact.
            </p>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              A wholly owned subsidiary of <strong className="text-white font-semibold">EMA Partners India Limited</strong>, a publicly listed global leadership advisory firm.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <p className="flex items-start gap-2">
                <span className="text-[#ff9900] font-bold">📍</span>
                <span>1012, 10th Floor, C-Wing, ONE BKC, “G Block”, Bandra – Kurla Complex, Bandra (East), Mumbai- 400 051 India.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#ff9900] font-bold">📞</span>
                <span>+91 74001 60679</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#ff9900] font-bold">✉️</span>
                <span>contactus@jamesdouglas.co.in</span>
              </p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-[0.12em]">
              Quick Links
            </h4>
            <div className="w-8 h-1 bg-[#ff9900] rounded-sm mb-3"></div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-[#ff9900] transition-colors"
                >
                  About Us & Leadership
                </a>
              </li>
              <li>
                <a
                  href="#candidates"
                  onClick={(e) => handleLinkClick(e, 'candidates')}
                  className="hover:text-[#ff9900] transition-colors"
                >
                  Open Roles / Career
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  onClick={(e) => handleLinkClick(e, 'employers')}
                  className="hover:text-[#ff9900] transition-colors"
                >
                  Hire Talent / Solutions
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  onClick={(e) => handleLinkClick(e, 'insights')}
                  className="hover:text-[#ff9900] transition-colors"
                >
                  Insights & Perspectives
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-[#ff9900] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Industry Practices Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-[0.12em]">
              Industry Practices
            </h4>
            <div className="w-8 h-1 bg-[#ff9900] rounded-sm mb-3"></div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                BFSI Practice
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                Technology
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                HR Leadership
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                Healthcare & Life Sci
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                Industrial & Mfg
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                Consumer & Tech
              </span>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenHireModal('Footer Conversation')}
                className="btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#ff9900] hover:bg-[#e68a00] transition shadow-md"
              >
                Start a Conversation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 James Douglas India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

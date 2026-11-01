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
    <footer className="bg-gradient-to-br from-[#31547b] via-[#264364] to-[#152537] text-slate-200 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & About Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white font-extrabold text-base border border-[#514f14]/50 shadow-md">
                <span className="text-white">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-2xl tracking-[-0.02em] text-white leading-tight">
                  Strydz
                </span>
                <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest">
                  Leadership Advisory & Executive Search
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
              At Strydz, we connect exceptional leadership talent with forward-thinking companies through tailored executive search solutions driven by insight, precision, and impact.
            </p>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Partnering with boards and enterprises to discover leaders who transform ambition into enduring market leadership.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <p className="flex items-start gap-2">
                <span className="text-white font-bold">📍</span>
                <span>1012, 10th Floor, C-Wing, ONE BKC, “G Block”, Bandra – Kurla Complex, Bandra (East), Mumbai- 400 051 India.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white font-bold">📞</span>
                <span>+91 74001 60679</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white font-bold">✉️</span>
                <span>contact@strydz.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-[0.12em]">
              Quick Links
            </h4>
            <div className="w-8 h-1 bg-[#514f14] rounded-sm mb-3"></div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Us & Leadership
                </a>
              </li>
              <li>
                <a
                  href="#candidates"
                  onClick={(e) => handleLinkClick(e, 'candidates')}
                  className="hover:text-white transition-colors"
                >
                  Open Roles / Career
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  onClick={(e) => handleLinkClick(e, 'employers')}
                  className="hover:text-white transition-colors"
                >
                  Hire Talent / Solutions
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  onClick={(e) => handleLinkClick(e, 'insights')}
                  className="hover:text-white transition-colors"
                >
                  Insights & Perspectives
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-white transition-colors"
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
            <div className="w-8 h-1 bg-[#514f14] rounded-sm mb-3"></div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                BFSI Practice
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                Technology
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                HR Leadership
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                Healthcare & Life Sci
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                Industrial & Mfg
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                Consumer & Tech
              </span>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenHireModal('Footer Conversation')}
                className="btn-shimmer w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#514f14] hover:bg-[#3f3e10] transition shadow-md"
              >
                Start a Conversation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© 2026 Strydz. All rights reserved.</p>
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

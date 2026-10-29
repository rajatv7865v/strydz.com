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
    <footer className="bg-[#0a0f1d] text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-base shadow-sm">
                S
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Strydz
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Smarter hiring. Faster growth. Connecting great companies with great people.
            </p>
          </div>

          {/* Employers Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Employers
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#employers"
                  onClick={(e) => handleLinkClick(e, 'employers')}
                  className="hover:text-white transition-colors"
                >
                  Permanent Hiring
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  onClick={(e) => handleLinkClick(e, 'employers')}
                  className="hover:text-white transition-colors"
                >
                  Executive Search
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  onClick={(e) => handleLinkClick(e, 'employers')}
                  className="hover:text-white transition-colors"
                >
                  Contract Staffing
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  onClick={(e) => handleLinkClick(e, 'employers')}
                  className="hover:text-white transition-colors"
                >
                  RPO
                </a>
              </li>
            </ul>
          </div>

          {/* Candidates Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Candidates
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#candidates"
                  onClick={(e) => handleLinkClick(e, 'candidates')}
                  className="hover:text-white transition-colors"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenHireModal('Resume Upload / Candidate')}
                  className="hover:text-white transition-colors text-left"
                >
                  Upload Resume
                </button>
              </li>
              <li>
                <a
                  href="#candidates"
                  onClick={(e) => handleLinkClick(e, 'candidates')}
                  className="hover:text-white transition-colors"
                >
                  Career Coaching
                </a>
              </li>
              <li>
                <a
                  href="#candidates"
                  onClick={(e) => handleLinkClick(e, 'candidates')}
                  className="hover:text-white transition-colors"
                >
                  Salary Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#candidates"
                  onClick={(e) => handleLinkClick(e, 'candidates')}
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800/60 mt-14 pt-8 text-center text-xs text-slate-500">
          © 2026 Strydz. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

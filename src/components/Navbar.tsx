import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type NavView = 'home' | 'employers' | 'candidates' | 'about' | 'contact';

interface NavbarProps {
  onOpenHireModal: (defaultCategory?: string) => void;
  onOpenJobPortal?: () => void;
  currentView?: NavView;
  onNavigate?: (view: NavView, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenHireModal,
  currentView = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, view: NavView, hash?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(view, hash);
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm text-white font-black text-lg transition-transform group-hover:scale-105">
            S
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">
            Strydz
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'home' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Home
          </a>
          <a
            href="#employers"
            onClick={(e) => handleLinkClick(e, 'employers')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'employers' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Employers
          </a>
          <a
            href="#candidates"
            onClick={(e) => handleLinkClick(e, 'candidates')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'candidates' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Candidates
          </a>
          <a
            href="#solutions"
            onClick={(e) => {
              if (currentView === 'home') {
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleLinkClick(e, 'employers');
              }
            }}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'about' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'contact' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenHireModal()}
            className="btn-shimmer px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm"
          >
            Hire Talent
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenHireModal()}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600"
          >
            Hire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-[#f4efe6] transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e8e2d5] bg-[#faf7f2] px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'home')}
              className={`py-2 text-sm font-medium border-b border-slate-50 ${
                currentView === 'home' ? 'text-indigo-600 font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </a>
            <a
              href="#employers"
              onClick={(e) => handleLinkClick(e, 'employers')}
              className={`py-2 text-sm font-medium border-b border-slate-50 ${
                currentView === 'employers' ? 'text-indigo-600 font-semibold' : 'text-slate-700'
              }`}
            >
              For Employers
            </a>
            <a
              href="#candidates"
              onClick={(e) => handleLinkClick(e, 'candidates')}
              className={`py-2 text-sm font-medium border-b border-slate-50 ${
                currentView === 'candidates' ? 'text-indigo-600 font-semibold' : 'text-slate-700'
              }`}
            >
              For Candidates
            </a>
            <a
              href="#solutions"
              onClick={(e) => {
                if (currentView === 'home') {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleLinkClick(e, 'employers');
                }
              }}
              className="py-2 text-sm font-medium text-slate-700 border-b border-slate-50"
            >
              Solutions
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className={`py-2 text-sm font-medium border-b border-slate-50 ${
                currentView === 'about' ? 'text-indigo-600 font-semibold' : 'text-slate-700'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`py-2 text-sm font-medium border-b border-slate-50 ${
                currentView === 'contact' ? 'text-indigo-600 font-semibold' : 'text-slate-700'
              }`}
            >
              Contact
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="btn-shimmer w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center shadow-sm"
            >
              Hire Talent
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

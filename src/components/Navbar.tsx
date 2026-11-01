import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type NavView = 'home' | 'employers' | 'candidates' | 'about' | 'contact' | 'insights';

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
        
        {/* Strydz Brand Logo */}
        <a 
          href="#"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#31547b] flex items-center justify-center shadow-md text-white font-extrabold text-lg tracking-tight transition-transform group-hover:scale-105 border border-[#514f14]/30">
            <span className="text-white">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl sm:text-2xl tracking-[-0.02em] text-[#31547b] leading-tight">
              Strydz
            </span>
            <span className="text-[10px] font-semibold text-[#514f14] uppercase tracking-widest">
              Executive Search & Advisory
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'home' ? 'text-[#31547b] border-b-2 border-[#31547b]' : 'text-slate-700 hover:text-[#31547b]'
            }`}
          >
            Home
          </a>
          <a
            href="#candidates"
            onClick={(e) => handleLinkClick(e, 'candidates')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'candidates' ? 'text-[#31547b] border-b-2 border-[#31547b]' : 'text-slate-700 hover:text-[#31547b]'
            }`}
          >
            Find Opportunities
          </a>
          <a
            href="#employers"
            onClick={(e) => handleLinkClick(e, 'employers')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'employers' ? 'text-[#31547b] border-b-2 border-[#31547b]' : 'text-slate-700 hover:text-[#31547b]'
            }`}
          >
            Hire Talent
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'about' ? 'text-[#31547b] border-b-2 border-[#31547b]' : 'text-slate-700 hover:text-[#31547b]'
            }`}
          >
            Our Expertise
          </a>
          <a
            href="#insights"
            onClick={(e) => handleLinkClick(e, 'insights')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'insights' ? 'text-[#31547b] border-b-2 border-[#31547b]' : 'text-slate-700 hover:text-[#31547b]'
            }`}
          >
            Insights
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'contact' ? 'text-[#31547b] border-b-2 border-[#31547b]' : 'text-slate-700 hover:text-[#31547b]'
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenHireModal()}
            className="btn-shimmer px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#31547b] hover:bg-[#264364] transition shadow-md hover:-translate-y-0.5"
          >
            Hire Talent
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenHireModal()}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#31547b]"
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
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'home' ? 'text-[#31547b] font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </a>
            <a
              href="#candidates"
              onClick={(e) => handleLinkClick(e, 'candidates')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'candidates' ? 'text-[#31547b] font-semibold' : 'text-slate-700'
              }`}
            >
              Find Opportunities
            </a>
            <a
              href="#employers"
              onClick={(e) => handleLinkClick(e, 'employers')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'employers' ? 'text-[#31547b] font-semibold' : 'text-slate-700'
              }`}
            >
              Hire Talent
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'about' ? 'text-[#31547b] font-semibold' : 'text-slate-700'
              }`}
            >
              Our Expertise
            </a>
            <a
              href="#insights"
              onClick={(e) => handleLinkClick(e, 'insights')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'insights' ? 'text-[#31547b] font-semibold' : 'text-slate-700'
              }`}
            >
              Insights
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'contact' ? 'text-[#31547b] font-semibold' : 'text-slate-700'
              }`}
            >
              Contact Us
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="btn-shimmer w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-[#31547b] hover:bg-[#264364] text-center shadow-sm"
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

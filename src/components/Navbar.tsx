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
        
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#23235b] flex items-center justify-center shadow-md text-white font-extrabold text-base tracking-tight transition-transform group-hover:scale-105 border border-[#ff9900]/40">
            <span className="text-[#ff9900]">J</span><span>D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl sm:text-2xl tracking-[-0.02em] text-[#23235b] leading-tight">
              James Douglas
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              India · Leadership Advisory
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'home' ? 'text-[#ff9900]' : 'text-slate-700 hover:text-[#23235b]'
            }`}
          >
            Home
          </a>
          <a
            href="#candidates"
            onClick={(e) => handleLinkClick(e, 'candidates')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'candidates' ? 'text-[#ff9900]' : 'text-slate-700 hover:text-[#23235b]'
            }`}
          >
            Find Opportunities
          </a>
          <a
            href="#employers"
            onClick={(e) => handleLinkClick(e, 'employers')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'employers' ? 'text-[#ff9900]' : 'text-slate-700 hover:text-[#23235b]'
            }`}
          >
            Hire Talent
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'about' ? 'text-[#ff9900]' : 'text-slate-700 hover:text-[#23235b]'
            }`}
          >
            Our Expertise
          </a>
          <a
            href="#insights"
            onClick={(e) => handleLinkClick(e, 'insights')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'insights' ? 'text-[#ff9900]' : 'text-slate-700 hover:text-[#23235b]'
            }`}
          >
            Insights
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`text-sm font-semibold transition-colors ${
              currentView === 'contact' ? 'text-[#ff9900]' : 'text-slate-700 hover:text-[#23235b]'
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenHireModal()}
            className="btn-shimmer px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#ff9900] hover:bg-[#e68a00] transition shadow-md hover:-translate-y-0.5"
          >
            Hire Talent
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenHireModal()}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#ff9900]"
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
                currentView === 'home' ? 'text-[#ff9900] font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </a>
            <a
              href="#candidates"
              onClick={(e) => handleLinkClick(e, 'candidates')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'candidates' ? 'text-[#ff9900] font-semibold' : 'text-slate-700'
              }`}
            >
              Find Opportunities
            </a>
            <a
              href="#employers"
              onClick={(e) => handleLinkClick(e, 'employers')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'employers' ? 'text-[#ff9900] font-semibold' : 'text-slate-700'
              }`}
            >
              Hire Talent
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'about' ? 'text-[#ff9900] font-semibold' : 'text-slate-700'
              }`}
            >
              Our Expertise
            </a>
            <a
              href="#insights"
              onClick={(e) => handleLinkClick(e, 'insights')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'insights' ? 'text-[#ff9900] font-semibold' : 'text-slate-700'
              }`}
            >
              Insights
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`py-2 text-sm font-medium border-b border-slate-100 ${
                currentView === 'contact' ? 'text-[#ff9900] font-semibold' : 'text-slate-700'
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
              className="btn-shimmer w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-[#ff9900] hover:bg-[#e68a00] text-center shadow-sm"
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

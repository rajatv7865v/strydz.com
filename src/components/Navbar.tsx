import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenHireModal: (defaultCategory?: string) => void;
  onOpenJobPortal?: () => void;
  currentView?: 'home' | 'contact';
  onNavigate?: (view: 'home' | 'contact', hash?: string) => void;
  isDark?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenHireModal,
  currentView = 'home',
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'contact', hash?: string) => {
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
    <nav className="sticky top-0 z-50 backdrop-blur-[20px] bg-[#fdfbf7]/90 border-b border-[rgba(168,119,42,0.18)] transition-all duration-300">
      <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* Brand Logo with 3D Isometric Cube in Gold */}
        <a 
          href="#"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 font-semibold text-xl tracking-[-0.3px] text-[#101a33] group"
        >
          <div className="w-[32px] h-[32px] flex-none group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M16 2l12 7v14l-12 7L4 23V9z" fill="none" stroke="url(#gg)" strokeWidth="2" />
              <path d="M16 16l12-7M16 16L4 9M16 16v14" stroke="url(#gg)" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className="font-semibold text-[21px] tracking-tight text-[#101a33] group-hover:text-[#a8772a] transition-colors">
            Strydz
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 list-none p-0 m-0">
          <li>
            <a 
              href="#why" 
              onClick={(e) => handleLinkClick(e, 'home', '#why')}
              className="text-[#5f6679] hover:text-[#a8772a] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              Why Us
            </a>
          </li>
          <li>
            <a 
              href="#what-you-get" 
              onClick={(e) => handleLinkClick(e, 'home', '#what-you-get')}
              className="text-[#5f6679] hover:text-[#a8772a] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              What You Get
            </a>
          </li>
          <li>
            <a 
              href="#how" 
              onClick={(e) => handleLinkClick(e, 'home', '#how')}
              className="text-[#5f6679] hover:text-[#a8772a] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              How It Works
            </a>
          </li>
          <li>
            <a 
              href="#hft" 
              onClick={(e) => handleLinkClick(e, 'home', '#hft')}
              className="text-[#5f6679] hover:text-[#a8772a] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              HFT Hiring
            </a>
          </li>
          <li>
            <a 
              href="#gcc" 
              onClick={(e) => handleLinkClick(e, 'home', '#gcc')}
              className="text-[#5f6679] hover:text-[#a8772a] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              GCC Hub
            </a>
          </li>
          <li>
            <a 
              href="#jobs" 
              onClick={(e) => handleLinkClick(e, 'home', '#jobs')}
              className="text-[#5f6679] hover:text-[#a8772a] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              Jobs
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 inline-block px-3 py-1 rounded-full ${
                currentView === 'contact' 
                  ? 'bg-[rgba(168,119,42,0.12)] text-[#a8772a] font-bold border border-[rgba(168,119,42,0.25)]' 
                  : 'text-[#5f6679] hover:text-[#a8772a]'
              }`}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenHireModal('General Tech Hiring')}
            className="btn p text-xs"
          >
            Post a Job Free
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#101a33] hover:bg-[rgba(168,119,42,0.1)] transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(168,119,42,0.15)] bg-[#fdfbf7] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a 
              href="#why" 
              onClick={(e) => handleLinkClick(e, 'home', '#why')}
              className="py-2 text-[#5f6679] hover:text-[#a8772a] border-b border-[rgba(168,119,42,0.1)]"
            >
              Why Us
            </a>
            <a 
              href="#what-you-get" 
              onClick={(e) => handleLinkClick(e, 'home', '#what-you-get')}
              className="py-2 text-[#5f6679] hover:text-[#a8772a] border-b border-[rgba(168,119,42,0.1)]"
            >
              What You Get
            </a>
            <a 
              href="#how" 
              onClick={(e) => handleLinkClick(e, 'home', '#how')}
              className="py-2 text-[#5f6679] hover:text-[#a8772a] border-b border-[rgba(168,119,42,0.1)]"
            >
              How It Works
            </a>
            <a 
              href="#hft" 
              onClick={(e) => handleLinkClick(e, 'home', '#hft')}
              className="py-2 text-[#5f6679] hover:text-[#a8772a] border-b border-[rgba(168,119,42,0.1)]"
            >
              HFT Hiring
            </a>
            <a 
              href="#gcc" 
              onClick={(e) => handleLinkClick(e, 'home', '#gcc')}
              className="py-2 text-[#5f6679] hover:text-[#a8772a] border-b border-[rgba(168,119,42,0.1)]"
            >
              GCC Hub
            </a>
            <a 
              href="#jobs" 
              onClick={(e) => handleLinkClick(e, 'home', '#jobs')}
              className="py-2 text-[#5f6679] hover:text-[#a8772a] border-b border-[rgba(168,119,42,0.1)]"
            >
              Jobs
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="py-2 text-[#a8772a] font-bold border-b border-[rgba(168,119,42,0.1)]"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal('General Tech Hiring');
              }}
              className="btn p w-full text-center justify-center text-xs"
            >
              Post a Job Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

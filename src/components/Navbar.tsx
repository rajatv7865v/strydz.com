import React, { useState, useEffect, useRef } from 'react';
import { JDView } from '../types';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: JDView;
  onNavigate: (view: JDView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
      if (insightsRef.current && !insightsRef.current.contains(e.target as Node)) {
        setInsightsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (view: JDView) => {
    onNavigate(view);
    setSolutionsOpen(false);
    setInsightsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5' 
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
      <button
  onClick={() => handleNav('home')}
  className="flex items-center gap-3 focus:outline-none text-left"
  aria-label="Strydz - Management Consultant, a green-tree company - Home"
>
  <img
    src="/logo STRYDZ new.jpg"
    alt="Strydz logo"
    className="h-9 sm:h-16 w-auto object-contain"
    onError={(e) => {
      // Graceful fallback if image URL is inaccessible
      e.currentTarget.style.display = 'none';
      const fallback = document.getElementById('jd-logo-fallback');
      if (fallback) fallback.style.display = 'flex';
    }}
  />

  <div className="flex flex-col leading-tight">
    <span className="text-sm sm:text-[17px] font-semibold text-gray-900">
      STRYDZ Management Consulting
    </span>
    <span className="text-[10px] sm:text-sm text-green-700">
      a green-tree company
    </span>
  </div>
</button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-[#0B3041]">
          
          {/* MatchCore */}
          <button
            onClick={() => handleNav('hirebound')}
            className={`px-3.5 py-2 rounded-lg transition-colors hover:text-[#FF7D04] ${
              currentView === 'hirebound' ? 'text-[#FF7D04] font-semibold' : 'text-[#0B3041]'
            }`}
          >
            Hire Bound
          </button>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setInsightsOpen(false);
              }}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors hover:text-[#FF7D04] ${
                [
                  'enterprise-rpo', 'project-rpo', 'process-rpo', 
                  'cloud-rpo', 'source-screen', 'flex-team', 'outplacement'
                ].includes(currentView)
                  ? 'text-[#FF7D04] font-semibold'
                  : 'text-[#0B3041]'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#FF7D04]' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleNav('enterprise-rpo')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Enterprise RPO
                </button>
                <button
                  onClick={() => handleNav('project-rpo')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Project RPO
                </button>
                <button
                  onClick={() => handleNav('process-rpo')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Process RPO
                </button>
                <button
                  onClick={() => handleNav('cloud-rpo')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Cloud RPO
                </button>
                <button
                  onClick={() => handleNav('source-screen')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Source & Screen
                </button>
                <button
                  onClick={() => handleNav('flex-team')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Flex team
                </button>
                <button
                  onClick={() => handleNav('outplacement')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Outplacement
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={() => handleNav('hirebound')}
                  className="w-full text-left px-4 py-2.5 text-sm font-semibold text-[#FF7D04] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  MatchCore Platform
                </button>
              </div>
            )}
          </div>

          {/* Insights Dropdown */}
          <div className="relative" ref={insightsRef}>
            <button
              onClick={() => {
                setInsightsOpen(!insightsOpen);
                setSolutionsOpen(false);
              }}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors hover:text-[#FF7D04] ${
                currentView === 'blogs' ? 'text-[#FF7D04] font-semibold' : 'text-[#0B3041]'
              }`}
            >
              <span>Insights</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${insightsOpen ? 'rotate-180 text-[#FF7D04]' : ''}`} />
            </button>

            {insightsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleNav('blogs')}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#0B3041] hover:bg-[#0B3041] hover:text-white transition-colors"
                >
                  Blog
                </button>
              </div>
            )}
          </div>

          {/* About us */}
          <button
            onClick={() => handleNav('about')}
            className={`px-3.5 py-2 rounded-lg transition-colors hover:text-[#FF7D04] ${
              currentView === 'about' ? 'text-[#FF7D04] font-semibold' : 'text-[#0B3041]'
            }`}
          >
            About us
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleNav('contact')}
            className="primary-cta font-medium hover:shadow-md transition-all"
          >
            Contact us
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0B3041] hover:bg-gray-100 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          
          <button
            onClick={() => handleNav('hirebound')}
            className="w-full text-left py-2.5 font-medium text-[#0B3041] border-b border-gray-50 hover:text-[#FF7D04]"
          >
            Hire Bound
          </button>

          {/* Mobile Solutions Accordion */}
          <div>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="w-full flex items-center justify-between py-2.5 font-medium text-[#0B3041] border-b border-gray-50 hover:text-[#FF7D04]"
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180 text-[#FF7D04]' : ''}`} />
            </button>
            {solutionsOpen && (
              <div className="pl-4 py-1 space-y-1 bg-gray-50/50 rounded-xl mt-1">
                <button onClick={() => handleNav('enterprise-rpo')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Enterprise RPO</button>
                <button onClick={() => handleNav('project-rpo')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Project RPO</button>
                <button onClick={() => handleNav('process-rpo')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Process RPO</button>
                <button onClick={() => handleNav('cloud-rpo')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Cloud RPO</button>
                <button onClick={() => handleNav('source-screen')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Source & Screen</button>
                <button onClick={() => handleNav('flex-team')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Flex team</button>
                <button onClick={() => handleNav('outplacement')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Outplacement</button>
                <button onClick={() => handleNav('hirebound')} className="w-full text-left py-2 text-sm font-semibold text-[#FF7D04]">MatchCore Platform</button>
              </div>
            )}
          </div>

          {/* Mobile Insights */}
          <div>
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="w-full flex items-center justify-between py-2.5 font-medium text-[#0B3041] border-b border-gray-50 hover:text-[#FF7D04]"
            >
              <span>Insights</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${insightsOpen ? 'rotate-180 text-[#FF7D04]' : ''}`} />
            </button>
            {insightsOpen && (
              <div className="pl-4 py-1 bg-gray-50/50 rounded-xl mt-1">
                <button onClick={() => handleNav('blogs')} className="w-full text-left py-2 text-sm text-[#0B3041] hover:text-[#FF7D04]">Blog</button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('about')}
            className="w-full text-left py-2.5 font-medium text-[#0B3041] border-b border-gray-50 hover:text-[#FF7D04]"
          >
            About us
          </button>

          <button
            onClick={() => handleNav('career')}
            className="w-full text-left py-2.5 font-medium text-[#0B3041] border-b border-gray-50 hover:text-[#FF7D04]"
          >
            Careers
          </button>

          <div className="pt-3">
            <button
              onClick={() => handleNav('contact')}
              className="primary-cta w-full py-3"
            >
              Contact us
            </button>
          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;

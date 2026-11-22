import React from 'react';
import { JDView } from '../types';

interface FooterProps {
  onNavigate: (view: JDView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#D9D9D9] text-[#0B3041] pt-12 pb-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
          
          {/* Brand Logo Left */}
          <div className="lg:col-span-3">
            <button
              onClick={() => onNavigate('home')}
              className="focus:outline-none text-left"
            >
            <img 
           src='/logo STRYDZ new.jpg'
            alt="Strydz - a green-tree company " 
            className="h-9 sm:h-16 w-auto object-contain"
            onError={(e) => {
              // Graceful fallback if image URL is inaccessible
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('jd-logo-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
            </button>
            <p className="mt-4 text-xs text-[#0B3041]/80 max-w-xs leading-relaxed font-normal">
              The Talent-Solutions arm of Green-tree India Ltd. AI-powered. Human-led.
            </p>
          </div>

          {/* 4 Menu Columns Right */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            
            {/* 1. Explore */}
            <div>
              <h4 className="text-sm font-bold text-[#0B3041] mb-3 uppercase tracking-wider">
                Explore
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavigate('hirebound')} className="footer-link">
                    MatchCore
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('career')} className="footer-link">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="footer-link">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="footer-link">
                    Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="footer-link">
                    Management Team
                  </button>
                </li>
              </ul>
            </div>

            {/* 2. Solutions */}
            <div>
              <h4 className="text-sm font-bold text-[#0B3041] mb-3 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavigate('enterprise-rpo')} className="footer-link">
                    Enterprise RPO
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('project-rpo')} className="footer-link">
                    Project RPO
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('process-rpo')} className="footer-link">
                    Process RPO
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('cloud-rpo')} className="footer-link">
                    Cloud RPO
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('source-screen')} className="footer-link">
                    Source & Screen
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('flex-team')} className="footer-link">
                    Flex Team
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('outplacement')} className="footer-link">
                    Outplacement
                  </button>
                </li>
              </ul>
            </div>

            {/* 3. Insights */}
            <div>
              <h4 className="text-sm font-bold text-[#0B3041] mb-3 uppercase tracking-wider">
                Insights
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavigate('blogs')} className="footer-link">
                    Blogs
                  </button>
                </li>
              </ul>
            </div>

            {/* 4. T&C */}
            <div>
              <h4 className="text-sm font-bold text-[#0B3041] mb-3 uppercase tracking-wider">
                T&C
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavigate('privacy')} className="footer-link">
                    Privacy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('terms')} className="footer-link">
                    Terms
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Copyright & Social */}
        <div className="border-t border-gray-400/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#0B3041] gap-4">
          <div>
            ©2025 James Douglas. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/james-douglas-global"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0B3041] text-white flex items-center justify-center hover:bg-[#FF7D04] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63a1.63 1.63 0 0 0 0-3.26z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

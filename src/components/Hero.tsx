import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Video / Background Wrapper */}
      <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden bg-[#0B3041]/10">
        
        {/* Desktop Video Background */}
        <video
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://jamesdouglasglobal.com/assets/videos/hero-banner.png"
        >
          <source 
            src="/hero-section-video.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Mobile Banner Fallback Image */}
        <img
          src="https://jamesdouglasglobal.com/assets/img/mobile-banner/home-banner-mobile.jpg"
          alt="Strydz - a green-tree company  Banner"
          className="block sm:hidden absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Fallback poster
            e.currentTarget.src = "https://jamesdouglasglobal.com/assets/videos/hero-banner.png";
          }}
        />

        {/* Authentic Strydz - a green-tree company  Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(103deg, rgba(255, 255, 255, 0.95) 1.94%, rgba(255, 255, 255, 0.70) 28%, rgba(255, 255, 255, 0.00) 52%)'
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl py-12">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#0B3041] leading-[1.18] tracking-tight">
              Building Your Team, <br /> Your Way
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-[20px] text-[#0B3041] font-medium leading-relaxed max-w-md">
              AI-powered. Human-led. Backed by the legacy of Green-tree.
            </p>

            <div className="mt-7 sm:mt-8">
              <button
                onClick={onContactClick}
                className="primary-cta px-7 py-3.5 text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all"
              >
                <span>Ready to Build Better?</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

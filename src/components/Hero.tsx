import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenHireModal: (category?: string) => void;
  onOpenJobPortal?: () => void;
}

interface SlideData {
  id: string;
  image: string;
  fallbackImage: string;
  corner: string;
  rest: string;
  description: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal, onOpenJobPortal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides: SlideData[] = [
    {
      id: 'home-1banner',
      image: 'https://www.jamesdouglas.co.in/assets/images/home-1banner.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85',
      corner: 'Leadership',
      rest: 'that changes everything.',
      description: 'Partnering with organizations to discover leaders who transform ambition into impact',
    },
    {
      id: 'home-3banner',
      image: 'https://www.jamesdouglas.co.in/assets/images/home-3-banner.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=85',
      corner: 'Your career.',
      rest: 'Your legacy.',
      description: 'Partnering with leaders to define choices that shape lasting careers.',
    },
    {
      id: 'home-2banner',
      image: 'https://www.jamesdouglas.co.in/assets/images/home-2-banner.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85',
      corner: 'Advisors. Partners.',
      rest: 'Builders of futures.',
      description: 'Partnering with you to create outcomes that becomes legacy.',
    },
  ];

  // Auto-advance slides every 4 seconds (matching Strydz carousel delay)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="hero-banner"
      className="banner relative w-full h-[65vh] sm:h-[75vh] md:h-[80vh] min-h-[500px] max-h-[820px] overflow-hidden flex items-center justify-center bg-[#111126] select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Executive Leadership Banner"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            id={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${slide.image}'), url('${slide.fallbackImage}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Subtle base vignette for contrast depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
          </div>
        );
      })}

      {/* Centered Strydz Banner Overlay */}
      <div className="banner-overlay relative z-10 w-full md:w-[65%] lg:w-[60%] h-full flex items-center justify-center bg-black/45 md:bg-[#00000077] backdrop-blur-[1px] px-6 sm:px-10 md:px-14 py-10 transition-all duration-500">
        <div className="banner-content text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center">
          
          {/* Main Heading with Authentic Strydz Corner Accent */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] text-white tracking-tight drop-shadow-sm">
            <span className="hero-corner mr-4 sm:mr-6">
              {slides[currentSlide].corner}
            </span>
            <br />
            <span>{slides[currentSlide].rest}</span>
          </h1>

          {/* Subtitle / Mission Statement */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 font-normal max-w-2xl leading-relaxed drop-shadow-sm">
            {slides[currentSlide].description}
          </p>

          {/* Action CTAs styled with Strydz Brand Palette (#31547b primary, #514f14 secondary) */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => {
                if (onOpenJobPortal) {
                  onOpenJobPortal();
                } else {
                  const el = document.getElementById('jobs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-xl flex items-center gap-2 group transition-all text-white bg-[#31547b] hover:bg-[#264364]"
            >
              <span>Explore Leadership Roles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenHireModal('Leadership Search')}
              className="px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium text-white bg-[#514f14] hover:bg-[#3f3e10] border border-[#514f14] shadow-md transition-all"
            >
              <span>Build Your Leadership Team</span>
            </button>
          </div>

          {/* Credibility Note */}
          <div className="mt-6 flex items-center gap-2 text-xs text-white/80 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#514f14]" />
            <span>Strydz — Strategic Leadership Advisory & Executive Search</span>
          </div>

        </div>
      </div>

      {/* Navigation Arrows: Left / Right (visible on hover / touch) */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Swiper Pagination: Bottom Bullet Indicators */}
      <div className="swiper-pagination absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-7 sm:w-8 h-2.5 bg-[#31547b] shadow-[0_0_8px_rgba(49,84,123,0.8)] border border-white/40'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

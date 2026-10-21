import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { WhySection } from './components/WhySection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SpecialisedHiringSection } from './components/SpecialisedHiringSection';
import { GccEnterpriseSection } from './components/GccEnterpriseSection';
import { RoiCalculator } from './components/RoiCalculator';
import { FeaturedJobs } from './components/FeaturedJobs';
import { ContactCtaBanner } from './components/ContactCtaBanner';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { HireTalentModal } from './components/HireTalentModal';
import { JobDetailModal } from './components/JobDetailModal';
import { JobListing } from './types';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'contact'>('home');
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);
  const [hireModalCategory, setHireModalCategory] = useState<string>('');
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  // Sync with browser hash on load and hash change
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact-us') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '' || window.location.hash === '#') {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: 'home' | 'contact', hash?: string) => {
    setCurrentView(view);
    if (view === 'contact') {
      window.location.hash = '#contact-us';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (hash) {
        window.location.hash = hash;
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenHireModal = (category?: string) => {
    setHireModalCategory(category || 'Tech & HFT Recruitment');
    setHireModalOpen(true);
  };

  const handleOpenJobPortal = () => {
    if (currentView !== 'home') {
      handleNavigate('home', '#jobs');
    } else {
      const jobSection = document.getElementById('jobs');
      if (jobSection) {
        jobSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fdfbf7] text-[#101a33]">
      
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenHireModal={handleOpenHireModal}
        onOpenJobPortal={handleOpenJobPortal}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            {/* 1. Hero Section (HuntingCube Luxury Aesthetic) */}
            <Hero
              onOpenHireModal={handleOpenHireModal}
              onOpenJobPortal={handleOpenJobPortal}
            />

            {/* 2. Tier-1 Client Logos Trust Ticker */}
            <TrustTicker />

            {/* 3. Why Strydz Section (Talent Network Graphic SVG + Checklist) */}
            <WhySection />

            {/* 4. What You Get (6-Card Grid with Gold Outline Icons) */}
            <WhatYouGetSection />

            {/* 5. How It Works (4 Steps: 01 to 04 + Quote Box) */}
            <HowItWorksSection />

            {/* 6. Specialised Hiring (Tags Cloud for Tech, Quant & Trading) */}
            <SpecialisedHiringSection onOpenHireModal={handleOpenHireModal} />

            {/* 7. GCC & Global Capability Hubs (CareerNet India Corridors) */}
            <GccEnterpriseSection onOpenHireModal={handleOpenHireModal} />

            {/* 8. Interactive Hiring ROI Simulator */}
            <RoiCalculator onOpenHireModal={handleOpenHireModal} />

            {/* 9. Curated Active Openings */}
            <FeaturedJobs onSelectJob={(job) => setSelectedJob(job)} />

            {/* 10. Night Navy Contact CTA Banner */}
            <ContactCtaBanner onOpenHireModal={() => handleNavigate('contact')} />
          </>
        ) : (
          /* Dedicated Ultra-Premium Contact Us Page */
          <ContactPage
            onBackToHome={() => handleNavigate('home')}
            onOpenHireModal={handleOpenHireModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenHireModal={handleOpenHireModal} 
        onNavigate={handleNavigate}
      />

      {/* Post a Job Free / Hire Talent Modal */}
      <HireTalentModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        defaultCategory={hireModalCategory}
      />

      {/* Job Details Modal */}
      <JobDetailModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

    </div>
  );
};

export default App;

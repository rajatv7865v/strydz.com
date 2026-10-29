import React, { useState, useEffect } from 'react';
import { Navbar, NavView } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { SolutionsSection } from './components/SolutionsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { StatsBanner } from './components/StatsBanner';
import { SpecialisedHiringSection } from './components/SpecialisedHiringSection';
import { FeaturedJobs } from './components/FeaturedJobs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactCtaBanner } from './components/ContactCtaBanner';
import { ForEmployersPage } from './components/ForEmployersPage';
import { ForCandidatesPage } from './components/ForCandidatesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { HireTalentModal } from './components/HireTalentModal';
import { JobDetailModal } from './components/JobDetailModal';
import { JobListing } from './types';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);
  const [hireModalCategory, setHireModalCategory] = useState<string>('');
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  // Sync with browser hash on load and hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#employers' || hash === '#for-employers') {
        setCurrentView('employers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#candidates' || hash === '#for-candidates') {
        setCurrentView('candidates');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#about-us') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#contact-us') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#') {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: NavView, hash?: string) => {
    setCurrentView(view);
    if (view === 'employers') {
      window.location.hash = '#employers';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'candidates') {
      window.location.hash = '#candidates';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'about') {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'contact') {
      window.location.hash = '#contact';
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
    setHireModalCategory(category || 'Permanent Hiring');
    setHireModalOpen(true);
  };

  const handleOpenJobPortal = () => {
    handleNavigate('candidates');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf7f2] text-slate-900">
      
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenHireModal={handleOpenHireModal}
        onOpenJobPortal={handleOpenJobPortal}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onOpenHireModal={handleOpenHireModal}
              onOpenJobPortal={handleOpenJobPortal}
            />

            {/* Trusted By Client Logos */}
            <TrustTicker />

            {/* What we do - End-to-end hiring solutions */}
            <SolutionsSection onOpenHireModal={handleOpenHireModal} />

            {/* Process - Hiring in three simple steps */}
            <HowItWorksSection />

            {/* Key Metrics Banner (10K+, 500+, 48 hrs, 92%) */}
            <StatsBanner />

            {/* Industries - Specialised recruiters for every sector */}
            <SpecialisedHiringSection onOpenHireModal={handleOpenHireModal} />

            {/* For candidates - Featured opportunities */}
            <FeaturedJobs onSelectJob={(job) => setSelectedJob(job)} />

            {/* Testimonials - Loved by hiring teams and candidates */}
            <TestimonialsSection />

            {/* Ready to build your dream team? CTA Banner */}
            <ContactCtaBanner 
              onOpenHireModal={handleOpenHireModal} 
              onUploadResume={() => handleOpenHireModal('Resume Upload / Candidate')}
            />
          </>
        )}

        {/* For Employers Page */}
        {currentView === 'employers' && (
          <ForEmployersPage
            onOpenHireModal={handleOpenHireModal}
            onOpenBookDemo={() => handleOpenHireModal('Book a Demo')}
          />
        )}

        {/* For Candidates Page */}
        {currentView === 'candidates' && (
          <ForCandidatesPage
            onSelectJob={(job) => setSelectedJob(job)}
            onUploadResume={() => handleOpenHireModal('Candidate Resume Upload')}
          />
        )}

        {/* About Page */}
        {currentView === 'about' && (
          <AboutPage
            onOpenHireModal={handleOpenHireModal}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {/* Contact Page */}
        {currentView === 'contact' && (
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

      {/* Post a Job / Hire Talent Modal */}
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

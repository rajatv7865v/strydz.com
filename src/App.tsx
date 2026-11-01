import React, { useState, useEffect } from 'react';
import { Navbar, NavView } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SpecialisedHiringSection } from './components/SpecialisedHiringSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactCtaBanner } from './components/ContactCtaBanner';
import { ForEmployersPage } from './components/ForEmployersPage';
import { ForCandidatesPage } from './components/ForCandidatesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { InsightsPage } from './components/InsightsPage';
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
      if (hash === '#employers' || hash === '#for-employers' || hash === '#hiring-solutions') {
        setCurrentView('employers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#candidates' || hash === '#for-candidates' || hash === '#careers' || hash === '#join-us') {
        setCurrentView('candidates');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#about-us' || hash === '#expertise') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#insights' || hash === '#insights-hub' || hash === '#perspectives') {
        setCurrentView('insights');
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
    } else if (view === 'insights') {
      window.location.hash = '#insights';
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
    setHireModalCategory(category || 'Executive Search');
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
            {/* 1. Hero Banner with 3 rotating slides & EMA Partners credibility */}
            <Hero
              onOpenHireModal={handleOpenHireModal}
              onOpenJobPortal={handleOpenJobPortal}
            />

            {/* 2. Redefining Leadership with Intent & 4 Advisory Pillars */}
            <SolutionsSection 
              onOpenHireModal={handleOpenHireModal} 
              onOpenJobPortal={handleOpenJobPortal}
            />

            {/* 3. 6 Industry Practices */}
            <SpecialisedHiringSection onOpenHireModal={handleOpenHireModal} />

            {/* 4. Why Choose James Douglas? */}
            <HowItWorksSection onDiscover={() => handleNavigate('about')} />

            {/* 5. Meet Our Consultants */}
            <TestimonialsSection onSelectConsultant={() => handleNavigate('about')} />

            {/* 6. Insights & Perspectives */}
            <InsightsSection onExploreAll={() => handleNavigate('insights')} />

            {/* 7. Better decisions start with better conversations CTA Banner */}
            <ContactCtaBanner 
              onOpenHireModal={handleOpenHireModal} 
              onUploadResume={() => handleOpenHireModal('Candidate Leadership Profile')}
            />
          </>
        )}

        {/* For Employers / Hiring Solutions Page */}
        {currentView === 'employers' && (
          <ForEmployersPage
            onOpenHireModal={handleOpenHireModal}
            onOpenBookDemo={() => handleOpenHireModal('Book a Demo')}
          />
        )}

        {/* For Candidates / Find Opportunities Page */}
        {currentView === 'candidates' && (
          <ForCandidatesPage
            onSelectJob={(job) => setSelectedJob(job)}
            onUploadResume={() => handleOpenHireModal('Candidate Resume Upload')}
          />
        )}

        {/* About Us / Our Expertise Page */}
        {currentView === 'about' && (
          <AboutPage
            onOpenHireModal={handleOpenHireModal}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {/* Insights & Perspectives Hub Page */}
        {currentView === 'insights' && (
          <InsightsPage
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {/* Contact Us Page */}
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

import React, { useState, useEffect } from 'react';
import { JDView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JDTabSection } from './components/JDTabSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutTeaserSection } from './components/AboutTeaserSection';
import { ConsultationSection } from './components/ConsultationSection';
import { MatchCorePage } from './components/MatchCorePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CareerPage } from './components/CareerPage';
import { InsightsPage } from './components/InsightsPage';
import { LegalPage } from './components/LegalPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<JDView>('home');

  // Hash-based routing to support direct bookmarks, page reloads, and browser history
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'matchcore' || hash === 'matchcore-platform') {
        setCurrentView('matchcore');
      } else if (hash === 'enterprise-rpo') {
        setCurrentView('enterprise-rpo');
      } else if (hash === 'project-rpo') {
        setCurrentView('project-rpo');
      } else if (hash === 'process-rpo') {
        setCurrentView('process-rpo');
      } else if (hash === 'cloud-rpo' || hash === 'cloude-rpo') {
        setCurrentView('cloud-rpo');
      } else if (hash === 'source-screen') {
        setCurrentView('source-screen');
      } else if (hash === 'flex-team') {
        setCurrentView('flex-team');
      } else if (hash === 'outplacement') {
        setCurrentView('outplacement');
      } else if (hash === 'about' || hash === 'about-us') {
        setCurrentView('about');
      } else if (hash === 'contact' || hash === 'contact-us') {
        setCurrentView('contact');
      } else if (hash === 'career' || hash === 'careers') {
        setCurrentView('career');
      } else if (hash === 'blogs' || hash === 'blog' || hash === 'insights') {
        setCurrentView('blogs');
      } else if (hash === 'privacy' || hash === 'privacy-policy') {
        setCurrentView('privacy');
      } else if (hash === 'terms' || hash === 'terms-and-conditions') {
        setCurrentView('terms');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (view: JDView) => {
    setCurrentView(view);
    window.location.hash = view === 'home' ? '' : `#${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceView = (view: JDView): boolean => {
    return [
      'enterprise-rpo',
      'project-rpo',
      'process-rpo',
      'cloud-rpo',
      'source-screen',
      'flex-team',
      'outplacement',
    ].includes(view);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#0B3041] antialiased selection:bg-[#FF7D04] selection:text-white">
      {/* 1. Header / Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* 2. Main Content Route View */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero onContactClick={() => handleNavigate('contact')} />
            <JDTabSection onSelectService={(service) => handleNavigate(service)} />
            <WhyChooseUsSection />
            <AboutTeaserSection onReadMore={() => handleNavigate('about')} />
            <ConsultationSection />
          </>
        )}

        {currentView === 'matchcore' && (
          <MatchCorePage onTalkToExpert={() => handleNavigate('contact')} />
        )}

        {isServiceView(currentView) && (
          <ServicesPage
            currentView={currentView}
            onTalkToExpert={() => handleNavigate('contact')}
          />
        )}

        {currentView === 'about' && (
          <AboutPage onScheduleCall={() => handleNavigate('contact')} />
        )}

        {currentView === 'contact' && (
          <ContactPage onBackToHome={() => handleNavigate('home')} />
        )}

        {currentView === 'career' && (
          <CareerPage onBackToHome={() => handleNavigate('home')} />
        )}

        {currentView === 'blogs' && (
          <InsightsPage onContactClick={() => handleNavigate('contact')} />
        )}

        {currentView === 'privacy' && (
          <LegalPage initialTab="privacy" onNavigate={handleNavigate} />
        )}

        {currentView === 'terms' && (
          <LegalPage initialTab="terms" onNavigate={handleNavigate} />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;

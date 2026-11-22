import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Search, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onScheduleCall: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onScheduleCall }) => {
  const [activeLocation, setActiveLocation] = useState<'bengaluru' | 'dubai' | 'singapore'>('bengaluru');
  const [leaderIndex, setLeaderIndex] = useState(0);

  const leaders = [
    {
      name: 'Harish Pillai',
      role: 'Managing Director',
      image: 'https://jamesdouglasglobal.com/assets/img/jb-team-profiles/Harish-Pillai.png',
      linkedin: 'https://www.linkedin.com/in/hpillai/',
    },
    {
      name: 'Praveen Rane',
      role: 'Executive Director',
      image: 'https://jamesdouglasglobal.com/assets/img/jb-team-profiles/Praveen-Rane.png',
      linkedin: 'https://www.linkedin.com/company/james-douglas-global',
    },
    {
      name: 'Narayana Subramanian',
      role: 'Head Technology',
      image: 'https://jamesdouglasglobal.com/assets/img/jb-team-profiles/Narayana-Subramanian.png',
      linkedin: 'https://www.linkedin.com/in/narayana-subramanian-65204b10/',
    },
    {
      name: 'Harish Gaur',
      role: 'Director, Delivery and Client Services',
      image: 'https://jamesdouglasglobal.com/assets/img/jb-team-profiles/Harish-Gaur.png',
      linkedin: 'https://www.linkedin.com/company/james-douglas-global',
    },
    {
      name: 'K. Sudarshan',
      role: 'Chairman and Managing Director, Green-tree India',
      image: 'https://jamesdouglasglobal.com/assets/img/jb-team-profiles/K.Sudarshan.png',
      linkedin: 'https://www.linkedin.com/in/ksudarshan/',
    },
    {
      name: 'Arun Dasmahapatra',
      role: 'Executive Advisor to the Board, Green-tree India',
      image: 'https://jamesdouglasglobal.com/assets/img/jb-team-profiles/Image.png',
      linkedin: 'https://www.linkedin.com/in/arun-dasmahapatra-376b14/',
    },
  ];

  const handleNextLeader = () => {
    setLeaderIndex((prev) => (prev + 1) % leaders.length);
  };

  const handlePrevLeader = () => {
    setLeaderIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden bg-[#0B3041]">
        <img
          src="https://jamesdouglasglobal.com/assets/img/banners/about-us-hero-banner.png"
          alt="About Strydz - a green-tree company "
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3041]/90 via-[#0B3041]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF7D04] text-white text-xs font-bold uppercase tracking-wider mb-4">
              Institutional Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              About Us
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-lg max-w-xl font-medium">
              Built on Experience. Driven by Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight leading-tight mb-6">
              Empowering Enterprise Hiring with Intent
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-[#0B3041]/85 leading-relaxed font-normal">
              <p>
                Strydz - a green-tree company  is the Talent Solutions vertical of Green-tree India Ltd., focused on delivering customized RPO solutions across industries in India, APAC, and the Middle East. With a deep understanding of regional talent landscapes, we help organizations elevate their hiring function through our proprietary TA Maturity Assessment Model. This model provides a structured approach to diagnosing current capabilities and co-creating strategies that drive sustainable growth.
              </p>
              <p>
                Our solutions are built to scale—with flexibility and precision—combining advanced AI technology with deep domain expertise. Powered by MatchCore, our intelligent matching platform, we enable faster, smarter, and more efficient hiring decisions by blending automation with a high-touch recruiter experience.
              </p>
              <p>
                Whether you're solving for volume hiring, niche roles, or strategic workforce planning, JD Global brings the insight, infrastructure, and innovation to help you stay ahead. Backed by the global legacy of Green-tree and a team of seasoned talent advisors, we are committed to building high-performing teams that fuel business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Team Section */}
      <section className="py-16 sm:py-24 bg-gray-50/60" id="leadershipTeam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3041] tracking-tight">
                Leadership Team — Expertise That Drives Results
              </h2>
              <div className="w-16 h-1 bg-[#FF7D04] mt-3 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={handlePrevLeader}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0B3041] hover:text-white transition-all text-[#0B3041]"
                aria-label="Previous Leader"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextLeader}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0B3041] hover:text-white transition-all text-[#0B3041]"
                aria-label="Next Leader"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-1 bg-[#FF7D04] w-full"></div>
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between border-t border-gray-50">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#0B3041]">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                      {leader.role}
                    </p>
                  </div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0B3041] hover:bg-[#FF7D04] text-white flex items-center justify-center transition-colors flex-none ml-2"
                    aria-label={`${leader.name} LinkedIn Profile`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63a1.63 1.63 0 0 0 0-3.26z" />
                    </svg>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Green-tree Legacy Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image with 1st Listed Badge */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://jamesdouglasglobal.com/assets/img/EMA-Partners-legacy-img.png"
                  alt="Green-tree Legacy"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-[#0B3041] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20 text-center max-w-[200px]">
                <span className="block text-3xl font-extrabold text-[#FF7D04]">1st</span>
                <span className="block text-xs font-semibold leading-tight text-white/90 mt-1">
                  Listed Global Executive Search Firm In India
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight">
                Green-tree Legacy
              </h2>
              
              <p className="text-sm sm:text-base text-[#0B3041]/85 leading-relaxed font-normal">
                Strydz - a green-tree company  stands on the shoulders of{' '}
                <a 
                  href="https://www.ema-partners.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline text-[#0B3041] hover:text-[#FF7D04]"
                >
                  Green-tree
                </a>
                , a globally respected search firm that has advised boards and C-suites for a quarter-century. That pedigree brings:
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3041] text-white flex items-center justify-center flex-none">
                    <Award className="w-5 h-5 text-[#FF7D04]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B3041]">Credibility</h3>
                    <p className="text-xs sm:text-sm text-[#0B3041]/75 mt-0.5 leading-relaxed">
                      Trusted relationships with leadership talent worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3041] text-white flex items-center justify-center flex-none">
                    <ShieldCheck className="w-5 h-5 text-[#FF7D04]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B3041]">Governance</h3>
                    <p className="text-xs sm:text-sm text-[#0B3041]/75 mt-0.5 leading-relaxed">
                      Rigorous search methodology, reference checks and compliance discipline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3041] text-white flex items-center justify-center flex-none">
                    <Search className="w-5 h-5 text-[#FF7D04]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B3041]">Insight</h3>
                    <p className="text-xs sm:text-sm text-[#0B3041]/75 mt-0.5 leading-relaxed">
                      Sector intelligence across BFSI, Tech, Life Sciences, Manufacturing & more.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Global Reach Section with Interactive Tabs */}
      <section className="py-16 sm:py-24 bg-gray-50/60" id="globalReach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight">
              Global Reach
            </h2>
            <div className="w-16 h-1 bg-[#FF7D04] mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Location Selector Tabs */}
          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveLocation('bengaluru')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeLocation === 'bengaluru'
                  ? 'bg-[#0B3041] text-white shadow-md'
                  : 'bg-white text-[#0B3041] border border-gray-200 hover:border-[#FF7D04]'
              }`}
            >
              Bengaluru
            </button>
            <button
              onClick={() => setActiveLocation('dubai')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeLocation === 'dubai'
                  ? 'bg-[#0B3041] text-white shadow-md'
                  : 'bg-white text-[#0B3041] border border-gray-200 hover:border-[#FF7D04]'
              }`}
            >
              Dubai
            </button>
            <button
              onClick={() => setActiveLocation('singapore')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeLocation === 'singapore'
                  ? 'bg-[#0B3041] text-white shadow-md'
                  : 'bg-white text-[#0B3041] border border-gray-200 hover:border-[#FF7D04]'
              }`}
            >
              Singapore
            </button>
          </div>

          {/* Location Details & Interactive Map */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
            
            {activeLocation === 'bengaluru' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="text-center max-w-lg mx-auto">
                  <h3 className="font-bold text-lg text-[#0B3041] flex items-center justify-center gap-1.5">
                    <MapPin className="w-5 h-5 text-[#FF7D04]" />
                    <span>Bengaluru Headquarters</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3041]/80 mt-1 leading-relaxed">
                    3rd Block, 3 Block, 734, 7th Cross Rd, Koramangala 4-B Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-inner h-[380px]">
                  <iframe
                    title="Bengaluru Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.641326850684!2d77.623836!3d12.930758999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145b9410c4ed%3A0xbe682d7dd796b7cc!2s3rd%20Block%2C%203%20Block%2C%20734%2C%207th%20Cross%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!5e0!3m2!1sen!2sin!4v1749733866212!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeLocation === 'dubai' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="text-center max-w-lg mx-auto">
                  <h3 className="font-bold text-lg text-[#0B3041] flex items-center justify-center gap-1.5">
                    <MapPin className="w-5 h-5 text-[#FF7D04]" />
                    <span>Dubai Regional Office</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3041]/80 mt-1 leading-relaxed">
                    Gate Village 7, Level 2, Office 206, DIFC, P.O. Box 507340, Dubai, UAE
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-inner h-[380px]">
                  <iframe
                    title="Dubai Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.750373355437!2d55.27680582570258!3d25.211639477701652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428fb39b4b6f%3A0x186fd99b04552040!2sDIFC%20Gate%20Village!5e0!3m2!1sen!2sin!4v1749734152781!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeLocation === 'singapore' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="text-center max-w-lg mx-auto">
                  <h3 className="font-bold text-lg text-[#0B3041] flex items-center justify-center gap-1.5">
                    <MapPin className="w-5 h-5 text-[#FF7D04]" />
                    <span>Singapore Office</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3041]/80 mt-1 leading-relaxed">
                    6 Raffles Boulevard #03-308 Marina Square Singapore 039594
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-inner h-[380px]">
                  <iframe
                    title="Singapore Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.805224305423!2d103.85510187531948!3d1.291206098696536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19003a187a6f%3A0xcbb5a46307b2e204!2sJustCo%20%E2%80%93%20Marina%20Square%20%7C%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2sin!4v1749734069939!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 6. Unlock Clarity-First Hiring Banner */}
      <section className="py-16 sm:py-20 bg-[#0B3041] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Unlock Clarity-First Hiring
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/85">
                See how MatchCore and JD Global cut time-to-hire and elevate talent quality—book a quick, no-obligation walkthrough.
              </p>
            </div>
            <div className="flex-none">
              <button
                onClick={onScheduleCall}
                className="clarity-hero-button inline-flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

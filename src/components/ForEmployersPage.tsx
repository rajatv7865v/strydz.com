import React from 'react';
import { ArrowRight, Sparkles, Landmark, Factory, Stethoscope, ShoppingBag, Cpu, Users2, Shield, CheckCircle2 } from 'lucide-react';

interface ForEmployersPageProps {
  onOpenHireModal: (category?: string) => void;
  onOpenBookDemo?: () => void;
  onNavigateToContact?: () => void;
}

export const ForEmployersPage: React.FC<ForEmployersPageProps> = ({
  onOpenHireModal,
  onNavigateToContact,
}) => {
  const industries = [
    {
      id: 'banking',
      title: 'Banking & Financial Services',
      desc: 'Our Global Financial Services Practice is designed to be flexible and to serve the needs of an ever-changing market. It adapts seamlessly to shifting regulatory landscapes, digital transformation mandates, and evolving customer expectations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      icon: Landmark,
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      desc: 'James Douglas specializes in mid-management to senior executive search across industrial and hi-tech sectors. From advanced manufacturing to mining start-ups, we help organisations secure leaders who drive operational excellence and long-term growth.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      icon: Factory,
    },
    {
      id: 'health',
      title: 'Healthcare & Life Sciences',
      desc: 'Scientific research, technological advancements, and constant development in healthcare and life sciences create both challenges and opportunities in this vibrant and innovative sector.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      icon: Stethoscope,
    },
    {
      id: 'consumer',
      title: 'Consumer',
      desc: 'We know that the sector is constantly evolving and that leadership is faced with daily challenges that threaten both market share and margin erosion.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
      icon: ShoppingBag,
    },
    {
      id: 'tech',
      title: 'Technology',
      desc: 'We also specialise in supporting entrepreneurial companies and start-ups within the Financial Services sector, identifying talent that can scale businesses and navigate competitive digital landscapes.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      icon: Cpu,
    },
    {
      id: 'hr',
      title: 'Human Resources',
      desc: 'Human Resources leadership is no longer just about policy, it is about enabling business transformation. We help organizations hire HR leaders who can build high-performance cultures and drive change at scale.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      icon: Users2,
    },
  ];

  const searchStages = [
    {
      num: '01',
      title: 'Needs Assessment & Role Definition',
      desc: 'We align closely with board and senior leaders to define organizational targets, cultural requirements, and the exact leadership phenotype required.',
    },
    {
      num: '02',
      title: 'Market Mapping & Research',
      desc: 'Systematic intelligence mapping across target industries, competitors, and parallel sectors to uncover proven high-impact leaders.',
    },
    {
      num: '03',
      title: 'Candidate Identification & Evaluation',
      desc: 'In-depth behavioral interviews assessing track record, strategic vision, emotional intelligence, and genuine alignment with your mission.',
    },
    {
      num: '04',
      title: 'Selection & Offer Negotiation',
      desc: 'Facilitating discussions, discreet reference checks, and aligning executive compensation architectures for seamless closure.',
    },
    {
      num: '05',
      title: 'Onboarding & Integration',
      desc: 'Partnering through the transition milestones to ensure rapid strategic traction and long-term organizational value creation.',
    },
  ];

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Banner with Authentic James Douglas Imagery */}
      <section
        id="company-banner"
        className="banner relative w-full h-[52vh] min-h-[420px] max-h-[580px] overflow-hidden flex items-center justify-center bg-[#111126] select-none"
        style={{
          backgroundImage: `url('https://www.jamesdouglas.co.in/assets/images/company-banner.jpg'), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=85')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Centered James Douglas Banner Overlay */}
        <div className="banner-overlay relative z-10 w-full md:w-[65%] lg:w-[60%] h-full flex items-center justify-center bg-black/45 md:bg-[#00000077] backdrop-blur-[1px] px-6 sm:px-10 md:px-14 py-12">
          <div className="banner-content text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-4 text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#ff9900]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                Hiring Solutions for Organizations
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] text-white tracking-tight drop-shadow-sm">
              <span className="hero-corner mr-4 sm:mr-6">Hiring Solutions</span>
              <br />
              <span>for Organizations</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Partnering with boards and enterprises to discover leaders who transform ambition into enduring market leadership.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => onOpenHireModal('Hiring Solutions')}
                className="btn-warning-custom px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Find Your Next Hire
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('our-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium text-white border border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 transition-all"
              >
                Explore Industry Practices
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Build High-Impact Teams Section */}
      <section className="py-16 md:py-20 bg-white border-y border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#ff9900]">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
                Build High-Impact Teams
              </h2>
              <div className="section-divider-left"></div>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Exceptional results come from thoughtful hiring. At James Douglas, we work closely with organizations to place professionals who combine skill, intent, and long-term fit across management and leadership roles.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => onOpenHireModal('Build High-Impact Teams')}
                  className="btn-warning-custom px-7 py-3.5 rounded-xl text-sm font-semibold shadow-md inline-flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Find Your Next Hire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#e8e2d5]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Build High-Impact Teams"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#23235b]/70 via-transparent to-transparent flex items-end p-8">
                  <p className="text-white text-sm font-medium">
                    Placing leaders who combine skill, intent, and long-term fit.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Industry Specialization Section */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">Sector Expertise</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
              Industry Specialization
            </h2>
            
            <div className="section-divider"></div>
            
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
              We connect top talent with leading organizations across industries. With deep expertise and a human-first approach, we deliver tailored recruitment solutions that drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="premium-card bg-white border border-[#e8e2d5] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#ff9900]/60 transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#23235b]/80 via-transparent to-transparent flex items-end p-5">
                        <div className="flex items-center gap-2.5 text-white">
                          <div className="w-8 h-8 rounded-lg bg-[#ff9900] flex items-center justify-center text-slate-900 font-bold">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-base font-semibold text-white">
                            {ind.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {ind.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                    <button
                      onClick={() => onOpenHireModal(ind.title)}
                      className="text-xs sm:text-sm font-semibold text-[#23235b] group-hover:text-[#ff9900] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Find leaders in {ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ff9900] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Our Search Approach Section */}
      <section className="py-20 bg-[#f4efe6] border-y border-[#e8e2d5]" id="our-search-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">Methodology</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
              Our Search Approach
            </h2>
            
            <div className="section-divider"></div>
            
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
              A disciplined, high-touch framework that balances market breadth with rigorous qualitative evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {searchStages.map((s, idx) => (
              <div 
                key={s.num}
                className="bg-white border border-[#e8e2d5] rounded-2xl p-6 shadow-xs relative flex flex-col justify-between group hover:border-[#ff9900]/60 transition-all hover:-translate-y-1"
              >
                <div>
                  <span className="text-2xl font-black text-[#ff9900] block mb-3 font-mono">
                    {s.num}
                  </span>
                  <h4 className="text-base font-semibold text-[#23235b] mb-2 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#23235b] text-white flex items-center justify-center text-[10px]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Call to Action Banner (from hiring-solution.html) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#00aeef] via-[#1095cb] to-[#23235b] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-white">
              Advance Your Leadership Journey.
            </h2>
            <div className="section-divider mt-4 mb-4"></div>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Let’s define the roles that matter and run a search built for results.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal('Organization Search Brief')}
                className="btn-warning-custom px-7 py-3 rounded-xl text-sm font-semibold shadow-sm hover:-translate-y-0.5"
              >
                Find Your Next Hire
              </button>
              <button
                onClick={() => {
                  if (onNavigateToContact) {
                    onNavigateToContact();
                  } else {
                    window.location.hash = '#contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="px-7 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-white/40 hover:border-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForEmployersPage;

import { Sparkles, Shield, Compass, CheckCircle2, Award, Users, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenHireModal: (category?: string) => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenHireModal,
  onNavigateToContact,
}) => {
  const values = [
    {
      num: '01',
      title: 'Trust',
      desc: 'We are committed to building lasting relationships grounded in transparency, integrity, and honest partnership with every client and candidate.',
    },
    {
      num: '02',
      title: 'Ownership',
      desc: 'We are your extended team. Every executive search is ours to own from initial diagnostic to long-term onboarding and retention.',
    },
    {
      num: '03',
      title: 'Excellence',
      desc: 'Our consultants strive for professional excellence through the highest degree of personal integrity and rigorous industry judgment.',
    },
  ];

  const searchStages = [
    {
      step: '01',
      title: 'Diagnostics & Architecture',
      desc: 'Deep alignment on strategic business goals, mandate requirements, cultural dynamics, and leadership competencies.',
    },
    {
      step: '02',
      title: 'Market Mapping & Intelligence',
      desc: 'Comprehensive market intelligence across global and domestic talent corridors to surface proven leadership achievers.',
    },
    {
      step: '03',
      title: 'Assessment & Fit Evaluation',
      desc: 'Discreet, structured behavioral interviews examining leadership agility, past impact, and alignment with corporate strategy.',
    },
    {
      step: '04',
      title: 'Selection & Offer Advisory',
      desc: 'Board advisory, compensation structuring, rigorous 360-degree background referencing, and offer closure.',
    },
    {
      step: '05',
      title: 'Transition & Integration',
      desc: 'Proactive check-ins throughout the first 12 months to ensure seamless onboarding and measurable strategic impact.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Nupur Mehta',
      role: 'Managing Partner',
      practice: 'Leadership Hiring & Succession Planning',
      bio: 'With over a decade of experience in leadership hiring and succession planning, Nupur brings expertise to strengthen mid-to-senior-level talent pipelines, a critical priority for organizations building their next generation of leaders.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://www.linkedin.com/in/nupurmehtampi/?originalSubdomain=in',
    },
    {
      name: 'Diksha Uniyal',
      role: 'Senior Director',
      practice: 'HR, Healthcare & Analytics Practice',
      bio: 'Diksha is an executive search leader with 12+ years of experience in HR, sales, healthcare, and analytics, shaping leadership talent, driving organizational growth, and championing diversity and inclusion.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://www.linkedin.com/in/diksha-uniyal-27573054/?originalSubdomain=in',
    },
    {
      name: 'Sakshi Punjabi',
      role: 'Director',
      practice: 'Head of Technology & BFSI Practice',
      bio: 'With 9+ years of consulting experience, Sakshi heads the Technology function and BFSI practice. She partners with CXOs across Tech, Business, HR and others to shape leadership teams that drive digital transformation.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://www.linkedin.com/in/sakshi-punjabi-817147103/?originalSubdomain=in',
    },
  ];

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Banner with Authentic James Douglas Imagery */}
      <section
        id="about-banner"
        className="banner relative w-full h-[52vh] min-h-[420px] max-h-[580px] overflow-hidden flex items-center justify-center bg-[#111126] select-none"
        style={{
          backgroundImage: `url('https://www.jamesdouglas.co.in/assets/images/about-us-banner.jpg'), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85')`,
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
                About James Douglas India
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] text-white tracking-tight drop-shadow-sm">
              <span className="hero-corner mr-4 sm:mr-6">Leading With Vision.</span>
              <br />
              <span>Built on Expertise.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              We specialize in assessing, hiring, and advising leaders from mid-managerial through senior executive levels across industries and businesses.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => onOpenHireModal('Leadership Search')}
                className="btn-warning-custom px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Build Your Leadership Team
              </button>
              <button
                onClick={onNavigateToContact}
                className="px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium text-white border border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 transition-all"
              >
                Start a Conversation
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. About Us Two-Column Narrative */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#e8e2d5] rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Statement */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#ff9900]">
                Executive Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
                The right leadership has the power to transform organizations
              </h2>
              <div className="section-divider-left"></div>
              <p className="text-sm text-slate-500 italic">
                “At James Douglas, our values are not words. They are promises.”
              </p>
            </div>

            {/* Right Detailed Narrative */}
            <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                <strong className="text-[#23235b] font-semibold">James Douglas India</strong> is an executive search firm focused on mid-management and senior leadership hiring. We are a wholly owned subsidiary of <strong className="text-[#23235b] font-semibold">EMA Partners India Limited</strong>, a publicly listed global leadership advisory firm.
              </p>
              <p>
                As part of the EMA Partners network, we bring together deep industry expertise and diverse perspectives to help organizations address one of their most critical priorities: identifying and securing the right leadership talent.
              </p>
              <p>
                At James Douglas, we specialize in assessing, hiring, and advising leaders from mid-managerial through senior executive levels, working across industries and businesses.
              </p>
              <p>
                Our clients include global corporations, established Indian enterprises, and high-growth niche organizations navigating phases of rapid scale, succession planning, and organizational transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. How We Work / Our Search Approach */}
      <section className="py-20 bg-[#f4efe6] border-y border-[#e8e2d5]" id="search-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">Executive Search Rigor</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
              How We Work:{' '}
              <span className="text-[#ff9900]">
                Our Search Approach
              </span>
            </h2>
            
            <div className="section-divider"></div>
            
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
              A structured, consultative methodology designed for discretion, speed, and long-term retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {searchStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-white border border-[#e8e2d5] rounded-2xl p-6 shadow-xs flex flex-col justify-between group hover:border-[#ff9900]/60 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#23235b] text-[#ff9900] font-bold text-sm flex items-center justify-center mb-4 shadow-2xs">
                    {stage.step}
                  </div>
                  <h3 className="text-base font-semibold text-[#23235b] leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. What Guides Our Work (Values: Trust, Ownership, Excellence) */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#23235b]">Guiding Principles</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#23235b] leading-[1.2]">
              What Guides{' '}
              <span className="text-[#ff9900]">
                Our Work
              </span>
            </h2>
            
            <div className="section-divider"></div>
            
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
              Our professional search services deliver high-impact leaders for your management and executive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-8 shadow-xs flex flex-col justify-between group hover:border-[#ff9900]/60"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#23235b]/10 text-[#23235b] font-bold text-sm flex items-center justify-center mb-5 group-hover:bg-[#23235b] group-hover:text-white transition-colors">
                    {v.num}
                  </div>
                  <h3 className="text-xl font-bold text-[#23235b] group-hover:text-[#ff9900] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. EMA Partners India Legacy Section */}
      <section className="py-20 bg-gradient-to-br from-[#23235b] via-[#202052] to-[#14143a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00aeef]">
                Global Pedigree
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                EMA Partners India Legacy
              </h2>
              <div className="w-20 h-1 bg-[#ff9900] rounded-sm"></div>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                EMA Partners India is a globally respected search firm that has advised boards and C-suites for a quarter-century. That pedigree brings:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#ff9900]/20 text-[#ff9900] flex items-center justify-center flex-none font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Credibility</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Trusted relationships with leadership talent across India and global markets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#00aeef]/20 text-[#00aeef] flex items-center justify-center flex-none font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Governance</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Rigorous search methodology, in-depth reference checks, and strict compliance discipline.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#ff9900]/20 text-[#ff9900] flex items-center justify-center flex-none font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Insight</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Sector intelligence across BFSI, Technology, Life Sciences, Manufacturing, and Consumer.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-md">
              <div className="w-20 h-20 rounded-2xl bg-white text-[#23235b] flex items-center justify-center mx-auto text-2xl font-black mb-6 shadow-xl">
                JD
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">James Douglas India</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Wholly owned subsidiary of EMA Partners India Limited. Advising boards, promoters, and leadership teams on high-impact executive appointments.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => onOpenHireModal('EMA Legacy Partnership')}
                  className="btn-warning-custom px-6 py-3 rounded-xl text-sm font-semibold shadow-md"
                >
                  Start an Engagement
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Meet Our Leadership (Nupur Mehta, Diksha Uniyal, Sakshi Punjabi) */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#23235b]">Consultant Leadership</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#23235b] leading-[1.2]">
              Meet Our{' '}
              <span className="text-[#ff9900]">
                Leadership
              </span>
            </h2>
            
            <div className="section-divider"></div>
            
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
              Our consultants bring onboard top-quality experience and knowledge, making their mark amongst the best in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="premium-card bg-white border border-[#e8e2d5] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#ff9900]/60 transition-all"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23235b]/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#ff9900] text-white inline-block mb-1 shadow-sm">
                        {member.role}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ff9900] mb-2">
                      {member.practice}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#23235b] hover:text-[#ff9900] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-[#00aeef]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                    </svg>
                    <span>View LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Ready to bolster your leadership team CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#00aeef] via-[#1095cb] to-[#23235b] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to bolster your leadership team?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
              Start the conversation that shapes your leadership future. Connect directly with our managing partners.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal('About Page Mandate')}
                className="btn-warning-custom px-6 py-3 rounded-xl text-sm font-semibold shadow-md"
              >
                Build Your Leadership Team
              </button>
              <button
                onClick={onNavigateToContact}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#23235b] hover:bg-[#1b1b46] border border-white/20 transition"
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

export default AboutPage;


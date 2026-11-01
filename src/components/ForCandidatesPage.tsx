import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight,
  Sparkles,
  Lightbulb,
  Crosshair,
  ShieldAlert
} from 'lucide-react';
import { JobListing } from '../types';

interface ForCandidatesPageProps {
  onSelectJob: (job: JobListing) => void;
  onUploadResume: () => void;
  onNavigateToContact?: () => void;
}

export const ForCandidatesPage: React.FC<ForCandidatesPageProps> = ({ 
  onSelectJob, 
  onUploadResume,
  onNavigateToContact 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [industryTerm, setIndustryTerm] = useState('');

  const locations = [
    'All Locations',
    'Mumbai',
    'Bengaluru',
    'Delhi-NCR',
    'Hyderabad',
    'Pune',
  ];

  const industries = [
    'All Industries',
    'BFSI',
    'Technology',
    'HR Leadership',
    'Healthcare & Life Sciences',
    'Industrial & Manufacturing',
    'Consumer',
  ];

  const leadershipRoles: JobListing[] = [
    {
      id: 'role-1',
      title: 'Managing Director & Head of Wholesale Banking',
      companyCategory: 'Leading Private Sector Bank',
      domain: 'BFSI Practice',
      industry: 'BFSI',
      location: 'Mumbai',
      type: 'Executive Search',
      experience: '18+ Years',
      salaryRange: 'Top Decile + LTI',
      skills: ['Wholesale Banking', 'Institutional Client Advisory', 'Credit Architecture', 'P&L Ownership'],
      description: 'Lead institutional client coverage, structured lending, and transaction banking across corporate corridors.',
      postedAgo: 'Active Mandate',
      featured: true,
    },
    {
      id: 'role-2',
      title: 'Chief Technology Officer (CTO)',
      companyCategory: 'Series-D Enterprise AI Platform',
      domain: 'Technology Practice',
      industry: 'Technology',
      location: 'Bengaluru',
      type: 'Executive Search',
      experience: '14 - 18 Years',
      salaryRange: '₹1.2 - 1.8 Cr + Equity',
      skills: ['Distributed Systems', 'Applied AI/LLM Infra', 'Product Engineering Scale', 'Multi-Geo Teams'],
      description: 'Build core AI infrastructure and lead a global engineering organization of 180+ engineers.',
      postedAgo: 'Active Mandate',
      featured: true,
    },
    {
      id: 'role-3',
      title: 'Chief Human Resources Officer (CHRO)',
      companyCategory: 'Listed Diversified Conglomerate',
      domain: 'HR Practice',
      industry: 'HR Leadership',
      location: 'Delhi-NCR',
      type: 'Executive Search',
      experience: '18 - 22 Years',
      salaryRange: 'Executive Board Grade',
      skills: ['Board Succession Planning', 'Organizational Transformation', 'Total Rewards', 'Executive Coaching'],
      description: 'Spearhead group-wide succession strategy, C-suite executive talent development, and culture transformation.',
      postedAgo: 'Active Mandate',
      featured: true,
    },
    {
      id: 'role-4',
      title: 'President & Business Head - Precision Engineering',
      companyCategory: 'Industrial & Manufacturing',
      domain: 'Industrial Practice',
      industry: 'Industrial & Manufacturing',
      location: 'Pune',
      type: 'Executive Search',
      experience: '20+ Years',
      salaryRange: 'Executive + LTI',
      skills: ['Operational Excellence', 'P&L Ownership', 'Global Supply Chain', 'Industry 4.0'],
      description: 'Full P&L leadership for a ₹2,400 Cr capital goods business unit directing operations, international exports, and greenfield expansions.',
      postedAgo: 'Active Mandate',
      featured: true,
    },
    {
      id: 'role-5',
      title: 'Chief Operating Officer (COO)',
      companyCategory: 'Consumer',
      domain: 'Consumer Practice',
      industry: 'Consumer',
      location: 'Mumbai',
      type: 'Executive Search',
      experience: '14 - 18 Years',
      salaryRange: 'Leadership Package + Equity',
      skills: ['Supply Chain Logistics', 'Omnichannel Operations', 'Unit Economics Optimization', 'Scale Leadership'],
      description: 'Scale national supply chain, last-mile logistics, and retail operations across 400+ flagship stores and high-growth digital channels.',
      postedAgo: 'Active Mandate',
      featured: true,
    },
    {
      id: 'role-6',
      title: 'Head of Clinical Research & Medical Affairs',
      companyCategory: 'Healthcare & Life Sciences',
      domain: 'Healthcare Practice',
      industry: 'Healthcare & Life Sciences',
      location: 'Hyderabad',
      type: 'Executive Search',
      experience: '15 - 20 Years',
      salaryRange: 'Global Tier Compensation',
      skills: ['Clinical Trials Management', 'USFDA/EMA Regulatory Approvals', 'R&D Governance', 'Medical Strategy'],
      description: 'Oversee clinical trials strategy, regulatory engagement with international authorities, and translational medicine programs.',
      postedAgo: 'Active Mandate',
      featured: true,
    },
  ];

  const whatLeadersGain = [
    {
      icon: Lightbulb,
      title: 'Clarity',
      desc: 'Thoughtful, honest guidance when decisions matter most.',
    },
    {
      icon: Crosshair,
      title: 'Alignment',
      desc: 'Opportunities that match not just your resume, but your values and ambition.',
    },
    {
      icon: ShieldAlert,
      title: 'Enduring Partnership',
      desc: 'Relationships that extend far beyond a single placement.',
    },
  ];

  const filteredRoles = leadershipRoles.filter((role) => {
    const matchesKeyword = !searchTerm.trim() ||
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.companyCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLocation = !locationTerm || locationTerm === 'All Locations' ||
      role.location.toLowerCase().includes(locationTerm.toLowerCase());

    const matchesIndustry = !industryTerm || industryTerm === 'All Industries' ||
      Boolean(role.industry?.toLowerCase().includes(industryTerm.toLowerCase()));

    return matchesKeyword && matchesLocation && matchesIndustry;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setLocationTerm('');
    setIndustryTerm('');
  };

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Banner with Authentic Imagery */}
      <section
        id="leader-banner"
        className="banner relative w-full h-[52vh] min-h-[420px] max-h-[580px] overflow-hidden flex items-center justify-center bg-[#111126] select-none"
        style={{
          backgroundImage: `url('https://www.jamesdouglas.co.in/assets/images/leaders-banner.jpg'), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Centered Banner Overlay */}
        <div className="banner-overlay relative z-10 w-full md:w-[65%] lg:w-[60%] h-full flex items-center justify-center bg-black/45 md:bg-[#00000077] backdrop-blur-[1px] px-6 sm:px-10 md:px-14 py-12">
          <div className="banner-content text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-4 text-white">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                For Leaders & Candidates
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] text-white tracking-tight drop-shadow-sm">
              <span className="hero-corner mr-4 sm:mr-6">Your Gateway to</span>
              <br />
              <span>Future-ready Leadership</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Partnering with leaders to define choices that shape lasting careers and impactful outcomes.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('search-roles');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-warning-custom px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Explore Active Mandates
              </button>
              <button
                onClick={onUploadResume}
                className="px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium text-white border border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 transition-all"
              >
                Register Confidential Profile
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What Leaders Gain Section */}
      <section className="py-16 md:py-20 bg-white border-y border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#31547b] leading-[1.2]">
              What Leaders Gain
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatLeadersGain.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#faf7f2] border border-[#e8e2d5] rounded-3xl p-8 text-center flex flex-col items-center hover:shadow-md hover:border-[#31547b]/40 transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#31547b] text-white flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#31547b] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Leadership Roles Section */}
      <section className="py-20 bg-[#faf7f2]" id="search-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#31547b] leading-[1.2]">
              Leadership Roles
            </h2>
            <div className="section-divider"></div>
          </div>

          {/* Job Search & Filters Bar */}
          <div className="bg-white border border-[#e8e2d5] rounded-3xl p-6 shadow-sm max-w-4xl mx-auto mb-12 space-y-4">
            
            {/* Top row: search input + buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#e8e2d5] w-full bg-[#faf7f2]">
                <Search className="w-4 h-4 text-slate-400 flex-none" />
                <input
                  type="text"
                  placeholder="Search by Job Title or Keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold shadow-xs whitespace-nowrap text-white bg-[#31547b] hover:bg-[#264364] transition-all"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Dropdowns row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Location</label>
                <select
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl text-sm border border-[#e8e2d5] bg-[#faf7f2] text-slate-700 focus:outline-none focus:border-[#31547b]"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc === 'All Locations' ? '' : loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Industry</label>
                <select
                  value={industryTerm}
                  onChange={(e) => setIndustryTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl text-sm border border-[#e8e2d5] bg-[#faf7f2] text-slate-700 focus:outline-none focus:border-[#31547b]"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind === 'All Industries' ? '' : ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                onClick={() => onSelectJob(role)}
                className="premium-card bg-white border border-[#e8e2d5] rounded-3xl p-7 shadow-xs flex flex-col justify-between cursor-pointer group hover:border-[#31547b]/60 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#514f14] bg-[#514f14]/10 px-2.5 py-1 rounded-md border border-[#514f14]/20">
                      {role.domain}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {role.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#31547b] group-hover:text-[#514f14] transition-colors leading-snug">
                    {role.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {role.companyCategory} · {role.experience}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed font-normal">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    {role.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#faf7f2] border border-[#e8e2d5] text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#31547b] group-hover:text-[#514f14] inline-flex items-center gap-1.5 transition-colors">
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#514f14] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] font-bold text-[#31547b]">
                    Confidential
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Transform Your Career & Haven't Found Your Desired Role? */}
      <section className="py-20 bg-white border-y border-[#e8e2d5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#31547b] leading-[1.2]">
              Transform your career with Strydz
            </h2>
            <div className="section-divider"></div>
            <p className="text-slate-600 text-base leading-relaxed mt-4">
              If you’re looking for work that’s thoughtful, people-driven, and genuinely meaningful, you’ll feel at home here.
            </p>
          </div>

          {/* CTA Strip */}
          <div className="bg-[#f4efe6] border border-[#e8e2d5] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#31547b]">
                Haven’t found your desired role?
              </h3>
              <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
                Join us to discover opportunities that match your skills, aspirations, and career goals.
              </p>
            </div>

            <button
              onClick={onUploadResume}
              className="btn-warning-custom px-7 py-3.5 rounded-xl text-sm font-semibold shadow-sm whitespace-nowrap hover:-translate-y-0.5 flex-none"
            >
              Register With Us
            </button>
          </div>

        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#31547b] via-[#264364] to-[#152537] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-white">
              Ready to bolster your leadership team?
            </h2>
            <div className="section-divider mt-4 mb-4"></div>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Strydz delivers impact-driven leaders confidentially and without compromise.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  if (onNavigateToContact) {
                    onNavigateToContact();
                  } else {
                    window.location.hash = '#contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="btn-warning-custom px-7 py-3 rounded-xl text-sm font-semibold shadow-sm hover:-translate-y-0.5"
              >
                Connect With Us
              </button>
              <button
                onClick={onUploadResume}
                className="px-7 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-white/40 hover:border-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Submit Credentials
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForCandidatesPage;

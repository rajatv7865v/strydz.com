import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { JobListing } from '../types';

interface ForCandidatesPageProps {
  onSelectJob: (job: JobListing) => void;
  onUploadResume: () => void;
}

export const ForCandidatesPage: React.FC<ForCandidatesPageProps> = ({
  onSelectJob,
  onUploadResume,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [experienceTerm, setExperienceTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Engineering',
    'Design',
    'Sales',
    'Marketing',
    'Finance',
    'HR',
    'Operations',
    'Data & AI',
  ];

  const jobsList: (JobListing & { category: string })[] = [
    {
      id: 'candidate-job-1',
      title: 'Senior Product Designer',
      companyCategory: 'Nexora',
      domain: 'Core Engineering',
      category: 'Design',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '4 - 7 Years',
      salaryRange: '₹24-32 LPA',
      skills: ['Figma', 'Design Systems', 'User Research', 'Product Strategy'],
      description: 'Lead design systems and user journey flows across core digital products.',
      postedAgo: '1 day ago',
      featured: true,
    },
    {
      id: 'candidate-job-2',
      title: 'Backend Engineer (Node.js)',
      companyCategory: 'Finlytics',
      domain: 'Core Engineering',
      category: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3 - 6 Years',
      salaryRange: '₹18-28 LPA',
      skills: ['Node.js', 'TypeScript', 'PostgreSQL', 'Microservices'],
      description: 'Build robust API engines and distributed financial microservices.',
      postedAgo: '2 days ago',
      featured: true,
    },
    {
      id: 'candidate-job-3',
      title: 'Regional Sales Manager',
      companyCategory: 'Bluewave',
      domain: 'Core Engineering',
      category: 'Sales',
      location: 'Lucknow',
      type: 'Contract', // displays On-site
      experience: '5 - 8 Years',
      salaryRange: '₹12-18 LPA',
      skills: ['B2B Sales', 'Key Accounts', 'Channel Development'],
      description: 'Drive regional enterprise partnerships and revenue growth.',
      postedAgo: '3 days ago',
      featured: true,
    },
    {
      id: 'candidate-job-4',
      title: 'Data Analyst',
      companyCategory: 'Orbitly',
      domain: 'AI & Data',
      category: 'Data & AI',
      location: 'Pune',
      type: 'Hybrid',
      experience: '2 - 4 Years',
      salaryRange: '₹10-15 LPA',
      skills: ['SQL', 'Python', 'Tableau', 'Statistical Modeling'],
      description: 'Analyze telemetry and user behavioral data to empower product decisions.',
      postedAgo: '2 days ago',
      featured: true,
    },
    {
      id: 'candidate-job-5',
      title: 'HR Business Partner',
      companyCategory: 'Zenith',
      domain: 'Core Engineering',
      category: 'HR',
      location: 'Mumbai',
      type: 'Hybrid',
      experience: '4 - 7 Years',
      salaryRange: '₹15-22 LPA',
      skills: ['Talent Strategy', 'People Ops', 'Culture & Engagement'],
      description: 'Partner with business leaders to scale high-performing teams and HR ops.',
      postedAgo: '4 days ago',
      featured: true,
    },
    {
      id: 'candidate-job-6',
      title: 'Digital Marketing Lead',
      companyCategory: 'Acme Corp',
      domain: 'Core Engineering',
      category: 'Marketing',
      location: 'Delhi',
      type: 'Full-time',
      experience: '4 - 8 Years',
      salaryRange: '₹14-20 LPA',
      skills: ['Performance Marketing', 'SEO', 'Brand Growth', 'Paid Channels'],
      description: 'Own performance acquisition channels and brand growth initiatives.',
      postedAgo: '5 days ago',
      featured: true,
    },
  ];

  const tools = [
    {
      num: '01',
      title: 'Resume Review',
      desc: 'Get your resume reviewed by industry recruiters and ATS-optimised.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '02',
      title: 'Mock Interviews',
      desc: 'Practice with experts and get actionable feedback before the real thing.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '03',
      title: 'Salary Insights',
      desc: 'Know your market worth with data from thousands of placements.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredJobs = jobsList.filter((job) => {
    const matchesCat = activeCategory === 'All' || job.category === activeCategory;
    const matchesSearch = !searchTerm.trim() ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyCategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLoc = !locationTerm.trim() ||
      job.location.toLowerCase().includes(locationTerm.toLowerCase());
    const matchesExp = !experienceTerm.trim() ||
      job.experience.toLowerCase().includes(experienceTerm.toLowerCase());

    return matchesCat && matchesSearch && matchesLoc && matchesExp;
  });

  const scrollToJobs = () => {
    const el = document.getElementById('candidate-jobs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Section with subtle ambient backdrop glow */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Career Acceleration</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
          Find a role that fits{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
            your ambition
          </span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
          Explore thousands of verified openings, get represented by seasoned industry recruiters, and fast-track your career with free coaching.
        </p>

        {/* Hero CTAs with Shimmer */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollToJobs}
            className="btn-shimmer px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md hover:-translate-y-0.5"
          >
            Browse Jobs
          </button>
          <button
            onClick={onUploadResume}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-[#e8e2d5] hover:bg-[#f4efe6] transition shadow-2xs hover:-translate-y-0.5"
          >
            Upload Resume
          </button>
        </div>
      </section>

      {/* 2. 3-Input Search Bar & Category Tags */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white border border-[#e8e2d5] rounded-2xl p-2 sm:p-2.5 shadow-sm flex flex-col md:flex-row items-center gap-2">
          
          {/* Keyword Search */}
          <div className="flex items-center gap-2 px-3 py-2 flex-grow w-full">
            <Search className="w-4 h-4 text-slate-400 flex-none" />
            <input
              type="text"
              placeholder="Job title, skills or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="hidden md:block w-px h-7 bg-slate-200 flex-none" />

          {/* Location */}
          <div className="flex items-center gap-2 px-3 py-2 md:w-44 w-full">
            <MapPin className="w-4 h-4 text-slate-400 flex-none" />
            <input
              type="text"
              placeholder="Location"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="hidden md:block w-px h-7 bg-slate-200 flex-none" />

          {/* Experience */}
          <div className="flex items-center gap-2 px-3 py-2 md:w-36 w-full">
            <Briefcase className="w-4 h-4 text-slate-400 flex-none" />
            <input
              type="text"
              placeholder="Experience"
              value={experienceTerm}
              onChange={(e) => setExperienceTerm(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={scrollToJobs}
            className="btn-shimmer w-full md:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm whitespace-nowrap hover:-translate-y-0.5"
          >
            Search Jobs
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                  : 'bg-white border-[#e8e2d5] text-slate-600 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Jobs (Linen Cream #f4efe6) */}
      <section id="candidate-jobs" className="py-16 md:py-20 bg-[#f4efe6] border-y border-[#e8e2d5] mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Active Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
              Featured{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                jobs
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              Direct access to top hiring teams with guaranteed recruiter feedback and salary transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => {
              const displayType = job.location === 'Lucknow' ? 'On-site' : job.type;

              return (
                <div
                  key={job.id}
                  onClick={() => onSelectJob(job)}
                  className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-7 shadow-xs flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {job.companyCategory} · {job.location}
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {job.salaryRange}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">
                        {displayType}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <span className="text-xs sm:text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 inline-flex items-center gap-1">
                      <span>Apply now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Free tools to grow your career with Photography Cards (Ivory Cream #faf7f2) */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Career Acceleration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
              Free tools to grow{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                your career
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
              From ATS resume audits to mock panel interviews, accelerate your journey to your next senior role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.num}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between group"
              >
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md text-indigo-600 font-bold text-xs flex items-center justify-center shadow-xs">
                    {tool.num}
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-2 font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onUploadResume}
                      className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Get started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto bg-[#0c1222] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Your next role is waiting
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
              Upload your resume and let our recruiters find the match.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onUploadResume}
                className="btn-shimmer px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm hover:-translate-y-0.5"
              >
                Upload Resume
              </button>
              <button
                onClick={scrollToJobs}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-transparent border border-slate-700 hover:border-slate-500 transition hover:bg-white/5 hover:-translate-y-0.5"
              >
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForCandidatesPage;

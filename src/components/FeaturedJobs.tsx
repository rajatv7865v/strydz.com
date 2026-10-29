import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { JobListing } from '../types';

interface FeaturedJobsProps {
  onSelectJob: (job: JobListing) => void;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ onSelectJob }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');

  const initialJobs: JobListing[] = [
    {
      id: 'job-nexora-designer',
      title: 'Senior Product Designer',
      companyCategory: 'Nexora',
      domain: 'Core Engineering',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '4 - 7 Years',
      salaryRange: '₹24-32 LPA',
      skills: ['Figma', 'Design Systems', 'User Research', 'Product Strategy'],
      description: 'Lead end-to-end UX architecture and design system evolution across mobile and web client platforms.',
      postedAgo: '1 day ago',
      featured: true,
    },
    {
      id: 'job-finlytics-node',
      title: 'Backend Engineer (Node.js)',
      companyCategory: 'Finlytics',
      domain: 'Core Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3 - 6 Years',
      salaryRange: '₹18-28 LPA',
      skills: ['Node.js', 'TypeScript', 'PostgreSQL', 'Microservices', 'Redis'],
      description: 'Architect low-latency financial analytics APIs and secure distributed microservices processing real-time market data.',
      postedAgo: '2 days ago',
      featured: true,
    },
    {
      id: 'job-bluewave-sales',
      title: 'Regional Sales Manager',
      companyCategory: 'Bluewave',
      domain: 'Core Engineering',
      location: 'Lucknow',
      type: 'Contract', // will display as On-site
      experience: '5 - 8 Years',
      salaryRange: '₹12-18 LPA',
      skills: ['B2B Sales', 'Enterprise Accounts', 'Channel Growth', 'Territory Strategy'],
      description: 'Drive high-velocity enterprise talent and software solutions sales across Northern India region.',
      postedAgo: '3 days ago',
      featured: true,
    },
  ];

  const filteredJobs = initialJobs.filter((job) => {
    const matchKeyword = !searchTerm.trim() || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchLocation = !locationTerm.trim() ||
      job.location.toLowerCase().includes(locationTerm.toLowerCase());

    return matchKeyword && matchLocation;
  });

  return (
    <section id="jobs" className="py-20 md:py-24 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Open Mandates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              opportunities
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
            Directly sourced openings with verified CTC budgets and fast-track interviews.
          </p>
        </div>

        {/* Dual Search Input Bar */}
        <div className="bg-white border border-[#e8e2d5] rounded-2xl p-2 sm:p-2.5 shadow-sm max-w-3xl mx-auto mb-12 flex flex-col md:flex-row items-center gap-2">
          {/* Keyword Search */}
          <div className="flex items-center gap-2.5 px-3 py-2 flex-grow w-full">
            <Search className="w-4 h-4 text-slate-400 flex-none" />
            <input
              type="text"
              placeholder="Job title, skills or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-7 bg-slate-200 flex-none" />

          {/* Location Search */}
          <div className="flex items-center gap-2.5 px-3 py-2 md:w-60 w-full">
            <MapPin className="w-4 h-4 text-slate-400 flex-none" />
            <input
              type="text"
              placeholder="Lucknow, India"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={() => {}}
            className="btn-shimmer w-full md:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm whitespace-nowrap hover:-translate-y-0.5"
          >
            Search Jobs
          </button>
        </div>

        {/* 3 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                  {/* Pills Row */}
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
  );
};

export default FeaturedJobs;

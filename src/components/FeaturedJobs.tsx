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
      id: 'job-bfsi-md',
      title: 'Managing Director – Institutional BFSI',
      companyCategory: 'Tier-1 Private Financial Institution',
      domain: 'BFSI Practice',
      location: 'Mumbai (BKC)',
      type: 'Executive Search',
      experience: '15 - 20 Years',
      salaryRange: 'Executive Compensation + LTI',
      skills: ['Wholesale Banking', 'P&L Ownership', 'Regulatory Governance', 'Risk Architecture'],
      description: 'Lead institutional client relationships, wholesale banking expansion, and regulatory alignment for a premier private financial group headquartered in Mumbai.',
      postedAgo: '1 day ago',
      featured: true,
    },
    {
      id: 'job-tech-cto',
      title: 'Chief Technology Officer (CTO)',
      companyCategory: 'High-Growth Enterprise SaaS & AI Platform',
      domain: 'Technology Practice',
      location: 'Bengaluru / Hybrid',
      type: 'Executive Search',
      experience: '14 - 18 Years',
      salaryRange: '₹1.1 - 1.6 Cr + Equity',
      skills: ['Distributed Architecture', 'Global Scale', 'Engineering Culture', 'AI Infrastructure'],
      description: 'Direct multi-hub global engineering teams, modern cloud-native architectures, and AI product innovation for a global SaaS scaleup.',
      postedAgo: '2 days ago',
      featured: true,
    },
    {
      id: 'job-chro-pharma',
      title: 'Chief Human Resources Officer (CHRO)',
      companyCategory: 'Global Life Sciences & Healthcare Conglomerate',
      domain: 'HR Leadership Practice',
      location: 'Delhi-NCR',
      type: 'Executive Search',
      experience: '16 - 22 Years',
      salaryRange: '₹95L - 1.3 Cr + Benefits',
      skills: ['Talent Strategy', 'Succession Planning', 'Global Workforce', 'D&I Architecture'],
      description: 'Partner directly with the Board and CEO to spearhead enterprise succession planning, culture transformation, and leadership talent pipelines across 8,000+ employees.',
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#514f14]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#31547b]">Open Mandates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#31547b] leading-[1.2]">
            Featured{' '}
            <span className="text-[#514f14]">
              Leadership Roles
            </span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
            Confidential executive searches with board sponsorship and discreet representation.
          </p>
        </div>

        {/* Dual Search Input Bar */}
        <div className="bg-white border border-[#e8e2d5] rounded-2xl p-2 sm:p-2.5 shadow-sm max-w-3xl mx-auto mb-12 flex flex-col md:flex-row items-center gap-2">
          {/* Keyword Search */}
          <div className="flex items-center gap-2.5 px-3 py-2 flex-grow w-full">
            <Search className="w-4 h-4 text-slate-400 flex-none" />
            <input
              type="text"
              placeholder="Role title, practice (BFSI, Tech, HR) or keyword"
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
              placeholder="Mumbai, Bengaluru, Delhi..."
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={() => {}}
            className="w-full md:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm whitespace-nowrap text-white bg-[#31547b] hover:bg-[#264364] transition-all"
          >
            Search Mandates
          </button>
        </div>

        {/* 3 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            return (
              <div
                key={job.id}
                onClick={() => onSelectJob(job)}
                className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-7 shadow-xs flex flex-col justify-between cursor-pointer group hover:border-[#31547b]/60"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#514f14] block mb-1">
                    {job.domain}
                  </span>
                  <h3 className="text-lg font-bold text-[#31547b] group-hover:text-[#514f14] transition-colors leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {job.companyCategory} · {job.location}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 font-normal line-clamp-3">
                    {job.description}
                  </p>

                  {/* Pills Row */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#f0f5fa] text-[#31547b] border border-[#31547b]/30">
                      {job.salaryRange}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#514f14]/10 text-[#514f14]">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="pt-5 mt-3">
                  <span className="text-xs sm:text-sm font-semibold text-[#31547b] group-hover:text-[#514f14] inline-flex items-center gap-1.5 transition-colors">
                    <span>Confidential representation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#514f14] group-hover:translate-x-1 transition-transform" />
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

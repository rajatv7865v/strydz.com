import React, { useState } from 'react';
import { featuredJobs } from '../data/jobs';
import { JobListing } from '../types';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Search,
  Building
} from 'lucide-react';

interface FeaturedJobsProps {
  onSelectJob: (job: JobListing) => void;
  isDark?: boolean;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ onSelectJob }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const domains = ['All', 'Low-Latency & Quant', 'AI & Data', 'Leadership / CXO', 'Core Engineering', 'GCC Core'];

  const filteredJobs = featuredJobs.filter(job => {
    const matchesDomain = selectedDomain === 'All' || job.domain === selectedDomain;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <section id="jobs" className="py-24 border-t border-[rgba(168,119,42,0.18)] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[rgba(168,119,42,0.25)] bg-[rgba(168,119,42,0.06)] text-[#a8772a]">
              <Briefcase className="w-3.5 h-3.5 text-[#a8772a]" />
              <span>Curated High-Impact Openings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101a33]">
              Elite Engineering & Leadership <span className="g">Roles</span>
            </h2>
            <p className="text-[#5f6679] text-sm sm:text-base max-w-xl font-normal">
              Verified high-compensation roles at Tier-1 quant trading desks, GenAI unicorns, and multinational GCC technology centers.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#a8772a] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search C++, PyTorch, GCC, City..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-xs sm:text-sm border border-[rgba(168,119,42,0.25)] bg-white text-[#101a33] placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a] shadow-xs"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 overflow-x-auto pb-2">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                selectedDomain === dom
                  ? 'bg-gradient-to-r from-[#9c6a1f] via-[#d2a24c] to-[#b8862e] text-white border-transparent shadow-[0_4px_12px_rgba(168,119,42,0.3)]'
                  : 'bg-white text-[#101a33] border-[rgba(168,119,42,0.2)] hover:border-[#a8772a] hover:bg-[#f5f0e6]'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => onSelectJob(job)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(168,119,42,0.18)] shadow-[0_4px_16px_rgba(16,26,51,0.04)] hover:border-[#a8772a] hover:shadow-[0_12px_32px_rgba(168,119,42,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
            >
              {/* Top Row: Category and Match Score */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-[#a8772a] uppercase tracking-wider block">
                      {job.domain}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-[rgba(168,119,42,0.08)] text-[#a8772a] px-2.5 py-0.5 rounded-full border border-[rgba(168,119,42,0.2)] flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-[#a8772a]" /> 8h Turnaround
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#101a33] group-hover:text-[#a8772a] transition-colors mt-1.5">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#5f6679] mt-1">
                    <Building className="w-3.5 h-3.5 text-[#a8772a]" />
                    <span>{job.companyCategory}</span>
                  </div>
                </div>

                {job.matchScore && (
                  <div className="flex-shrink-0 text-center px-3.5 py-2 rounded-2xl border border-[rgba(168,119,42,0.25)] bg-[rgba(168,119,42,0.06)]">
                    <div className="text-sm font-bold font-mono g">
                      {job.matchScore}%
                    </div>
                    <div className="text-[8px] uppercase tracking-wider text-[#5f6679] font-bold">
                      Match Fit
                    </div>
                  </div>
                )}
              </div>

              {/* Description Preview */}
              <p className="text-xs text-[#5f6679] line-clamp-2 mb-5 leading-relaxed font-normal">
                {job.description}
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {job.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-[rgba(168,119,42,0.15)] bg-[#fdfbf7] text-[#101a33] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer Meta Row */}
              <div className="pt-4 border-t border-[rgba(168,119,42,0.12)] flex items-center justify-between text-xs text-[#5f6679]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 font-medium text-[#101a33]">
                    <MapPin className="w-3.5 h-3.5 text-[#a8772a]" />
                    {job.location}
                  </span>
                  <span className="font-mono text-[#14a58c] font-bold bg-[rgba(20,165,140,0.1)] px-2.5 py-0.5 rounded-full border border-[rgba(20,165,140,0.25)] text-xs">
                    {job.salaryRange}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#a8772a] font-bold group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 text-[#5f6679] space-y-2">
            <p className="text-lg font-bold text-[#101a33]">No roles found matching "{searchQuery}"</p>
            <p className="text-xs">Try selecting a different domain or clearing your search filter.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedJobs;

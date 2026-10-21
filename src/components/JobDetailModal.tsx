import React, { useState } from 'react';
import { JobListing } from '../types';
import { 
  X, 
  MapPin, 
  Building, 
  Briefcase, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';

interface JobDetailModalProps {
  job: JobListing | null;
  onClose: () => void;
  isDark?: boolean;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101a33]/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-[rgba(168,119,42,0.3)] shadow-[0_24px_64px_rgba(16,26,51,0.25)] p-6 sm:p-9 my-8 bg-[#fdfbf7] text-[#101a33]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5f6679] hover:text-[#101a33] hover:bg-[rgba(168,119,42,0.1)] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[rgba(168,119,42,0.08)] text-[#a8772a] border border-[rgba(168,119,42,0.2)]">
                  {job.domain}
                </span>
                <span className="text-xs text-[#5f6679]">• Posted {job.postedAgo}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101a33] tracking-tight">{job.title}</h3>
              <p className="text-sm font-semibold text-[#a8772a] mt-1">{job.companyCategory}</p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-[rgba(168,119,42,0.18)] text-xs">
              <div>
                <span className="text-[#5f6679] block">Location:</span>
                <span className="text-[#101a33] font-bold">{job.location}</span>
              </div>
              <div>
                <span className="text-[#5f6679] block">Experience:</span>
                <span className="text-[#101a33] font-bold">{job.experience}</span>
              </div>
              <div>
                <span className="text-[#5f6679] block">Compensation:</span>
                <span className="text-[#14a58c] font-mono font-bold">{job.salaryRange}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5f6679]">
                Role Mission & Responsibilities:
              </h4>
              <p className="text-xs sm:text-sm text-[#5f6679] leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Required Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5f6679]">
                Deep Technical Signals Evaluated:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white text-[#101a33] border border-[rgba(168,119,42,0.2)] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="pt-4 border-t border-[rgba(168,119,42,0.15)] space-y-3.5">
              <h4 className="text-sm font-bold text-[#101a33] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#a8772a]" />
                Quick Apply with StrydzAI Profile Scan
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                />
                <input
                  type="email"
                  required
                  placeholder="Work / Personal Email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
                />
              </div>

              <input
                type="url"
                placeholder="GitHub / LinkedIn / Portfolio URL (for AI code signal scoring)"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[rgba(168,119,42,0.25)] text-[#101a33] text-xs placeholder-[#5f6679]/60 focus:outline-none focus:border-[#a8772a] focus:ring-1 focus:ring-[#a8772a]"
              />

              <div className="p-3 bg-[rgba(20,165,140,0.08)] rounded-xl border border-[rgba(20,165,140,0.2)] text-[11px] text-[#101a33] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#14a58c] flex-shrink-0" />
                <span>100% Confidential. Your current employer will never receive an automated notice.</span>
              </div>

              <button
                type="submit"
                className="btn p w-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Submit Confidential Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

          </div>
        ) : (
          /* Application Success View */
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[rgba(20,165,140,0.12)] text-[#14a58c] flex items-center justify-center mx-auto border border-[rgba(20,165,140,0.3)]">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#101a33]">Application Received & Indexed!</h3>
            <p className="text-[#5f6679] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#101a33] font-semibold">{applicantName}</span>. StrydzAI has matched your profile against this opening. A senior technical recruitment partner will review your signals and contact you within 24 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="btn p text-xs font-semibold px-8"
              >
                Close & Browse More Roles
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default JobDetailModal;

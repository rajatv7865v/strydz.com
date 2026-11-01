import React, { useState } from 'react';
import { JobListing } from '../types';
import { X, Check, Shield } from 'lucide-react';

interface JobDetailModalProps {
  job: JobListing | null;
  onClose: () => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-[#e8e2d5] shadow-2xl p-6 sm:p-8 my-8 bg-[#faf7f2] text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] bg-white/90 border border-[#e2dcd0] text-[#23235b] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></span>
                  {job.companyCategory}
                </span>
                <span className="text-xs text-slate-400">• {job.postedAgo}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#23235b] tracking-[-0.025em] leading-[1.2]">{job.title}</h3>
              <p className="text-sm font-semibold text-[#00aeef] mt-1">{job.location} · {job.type}</p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-[#e8e2d5] text-xs shadow-2xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Location</span>
                <span className="text-slate-900 font-bold">{job.location}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Experience</span>
                <span className="text-slate-900 font-bold">{job.experience}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Compensation</span>
                <span className="text-[#23235b] font-bold">{job.salaryRange}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mandate Context & Scope
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {job.description}
              </p>
            </div>

            {/* Required Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Competencies & Requirements
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-white border border-[#e8e2d5] text-slate-700 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast Apply Form */}
            <form onSubmit={handleSubmit} className="border-t border-[#e8e2d5] pt-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#23235b]">
                  Confidential Leadership Expression of Interest
                </h4>
                <span className="text-[11px] text-slate-500 inline-flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#ff9900]" />
                  Strictly Confidential
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Your Full Name *"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="Work or Personal Email *"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Direct Phone / Mobile *"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
                <input
                  type="text"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="LinkedIn Profile URL"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-[#e8e2d5] focus:outline-none focus:border-[#23235b] focus:ring-1 focus:ring-[#23235b] bg-white"
                />
              </div>

              <button
                type="submit"
                className="btn-warning-custom w-full py-3.5 rounded-xl text-sm font-bold text-slate-900 transition shadow-sm hover:-translate-y-0.5"
              >
                Submit Confidential Credentials
              </button>
            </form>

          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#23235b]">Credentials Received Confidentially</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              A James Douglas Practice Lead will evaluate your profile and contact you regarding preliminary discussions.
            </p>
            <button
              onClick={onClose}
              className="btn-warning-custom mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-900 transition"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default JobDetailModal;

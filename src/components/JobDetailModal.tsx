import React, { useState } from 'react';
import { JobListing } from '../types';
import { X, Check } from 'lucide-react';

interface JobDetailModalProps {
  job: JobListing | null;
  onClose: () => void;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-[#e8e2d5] shadow-2xl p-6 sm:p-8 my-8 bg-[#faf7f2] text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 border border-[#e2dcd0] text-indigo-700 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  {job.companyCategory}
                </span>
                <span className="text-xs text-slate-500">• Posted {job.postedAgo}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-[1.2]">{job.title}</h3>
              <p className="text-sm font-semibold text-indigo-600 mt-1">{job.location} · {job.type}</p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block">Location</span>
                <span className="text-slate-900 font-bold">{job.location}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Experience</span>
                <span className="text-slate-900 font-bold">{job.experience}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Compensation</span>
                <span className="text-emerald-600 font-bold">{job.salaryRange}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                About The Role
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Required Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Relevant Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast Apply Form */}
            <form onSubmit={handleSubmit} className="border-t border-slate-100 pt-5 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">
                Direct Fast-Track Application
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                />
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="LinkedIn or Portfolio / GitHub URL (Optional)"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm"
              >
                Submit Application
              </button>
            </form>

          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Our recruitment partner at {job.companyCategory} will evaluate your profile and contact you regarding next interview rounds.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
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

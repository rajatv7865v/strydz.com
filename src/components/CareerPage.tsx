import React, { useState } from 'react';
import { Sparkles, Users, TrendingUp, Cpu, CheckCircle2, Upload, Send } from 'lucide-react';

interface CareerPageProps {
  onBackToHome: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />,
      title: 'Clarity-First Culture',
      text: "We keep things simple, transparent, and fast. You'll always know what's expected and how your work drives impact.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#FF7D04]" />,
      title: 'AI + Human Collaboration',
      text: "You'll work alongside and inside tools like MatchCore, building systems that remove friction and reward great thinking.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />,
      title: 'Growth & Exposure',
      text: 'We partner with scale-ups and enterprise leaders across India, APAC, and the Middle East. No two days are the same.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#FF7D04]" />,
      title: 'Build the Future of Work',
      text: "We're at the intersection of tech, talent, and transformation. You'll influence what hiring looks like for the next decade.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#0B3041] pb-16">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] overflow-hidden bg-[#0B3041]">
        <img
          src="https://jamesdouglasglobal.com/assets/img/banners/about-us-hero-banner.png"
          alt="Careers at Strydz - a green-tree company "
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3041]/90 via-[#0B3041]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF7D04] text-white text-xs font-bold uppercase tracking-wider mb-4">
              Join Our Advisory
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Careers at Strydz - a green-tree company 
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-lg max-w-xl font-medium">
              Shape the next era of high-impact talent acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why Work With Us Section */}
      <section className="py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/5] bg-gray-100">
                <img
                  src="https://jamesdouglasglobal.com/assets/img/career/two-people-talking.jpg"
                  alt="Two people collaborating"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>

            {/* Right Pillars (7 Cols) */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight mb-2">
                Why Work With Us?
              </h2>
              <div className="w-16 h-1 bg-[#FF7D04] mb-8 rounded-full"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50/70 rounded-3xl p-6 border border-gray-100 hover:border-[#FF7D04] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-4">
                        {pillar.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B3041] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0B3041]/80 leading-relaxed font-normal">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Expression of Interest Form */}
      <section className="py-16 sm:py-20 bg-gray-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3041]">
                Express Your Interest
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
                Whether you're a seasoned recruiter, account director, or technology specialist, we’d love to connect.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3041] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#019ECA] bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3041] mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#019ECA] bg-gray-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B3041] mb-1">Area of Expertise / Preferred Role *</label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Senior Recruiter, Client Delivery Director, AI Platform Specialist"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#019ECA] bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B3041] mb-1">Upload Resume (Optional)</label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0B3041] bg-gray-100 hover:bg-gray-200 transition">
                      <Upload className="w-4 h-4 text-[#FF7D04]" />
                      <span>{fileName ? 'Change File' : 'Upload Resume (.pdf, .docx)'}</span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                    {fileName && (
                      <span className="text-xs text-gray-600 truncate max-w-xs">{fileName}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B3041] mb-1">Cover Note / Introduction</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a little about your experience and what drives you..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#019ECA] bg-gray-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0B3041] hover:bg-[#14465d] text-white font-semibold text-sm transition-all shadow-md"
                >
                  Submit Expression of Interest
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-[#0B3041]">Application Received</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for your interest in joining Strydz - a green-tree company . Our talent acquisition team will review your profile.
                </p>
                <button
                  onClick={onBackToHome}
                  className="primary-cta mt-4"
                >
                  Back to Home
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerPage;

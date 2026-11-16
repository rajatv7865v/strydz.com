import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const ConsultationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-us-section py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navy Container with Form Overlay */}
        <div className="relative bg-[#0B3041] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Experience the Evolution of Talent Acquisition
              </h2>

              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-xl">
                Transform your hiring strategy with innovative RPO solutions and deep industry expertise.
                Our team empowers you to streamline recruitment, reduce hiring costs, and secure top talent
                faster.
              </p>

              {/* Email Us CTA Card */}
              <div className="mt-8">
                <a
                  href="mailto:sales@jamesdouglasglobal.com"
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-white group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#019ECA] flex items-center justify-center flex-none group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-white/70 font-semibold">
                      Email Us
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-white tracking-tight">
                      sales@jamesdouglasglobal.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Consultation Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-[#0B3041]">
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B3041] mb-2 leading-tight">
                  Book Your <br /> Consultation
                </h3>
                <p className="text-xs text-gray-500 mb-6 font-normal">
                  Connect with our talent architects for an exploratory session.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0B3041] placeholder-gray-400 focus:outline-none focus:border-[#019ECA] focus:ring-1 focus:ring-[#019ECA] bg-gray-50/50"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0B3041] placeholder-gray-400 focus:outline-none focus:border-[#019ECA] focus:ring-1 focus:ring-[#019ECA] bg-gray-50/50"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0B3041] placeholder-gray-400 focus:outline-none focus:border-[#019ECA] focus:ring-1 focus:ring-[#019ECA] bg-gray-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#019ECA] hover:bg-[#018db5] text-white font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5"
                    >
                      Book Now
                    </button>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold text-[#0B3041]">Consultation Requested!</h4>
                    <p className="text-xs text-gray-600">
                      Our talent specialists will reach out to schedule your walkthrough shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#019ECA] hover:underline pt-2 block mx-auto"
                    >
                      Send another inquiry
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;

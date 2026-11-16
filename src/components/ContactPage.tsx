import React, { useState } from 'react';
import { Mail, CheckCircle2, Headphones, MapPin, ArrowUpRight, Phone, Send } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-[#0B3041] pb-16">
      
      {/* 1. Page Header */}
      <div className="bg-gray-50/70 border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF7D04]">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B3041] mt-2 tracking-tight">
            Contact Strydz - a green-tree company 
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Connect with our practice leaders across India, APAC, and the Middle East.
          </p>
        </div>
      </div>

      {/* 2. 4 Dynamic Cards Section */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Reach Out */}
            <div className="dynamic-contact-card bg-white rounded-3xl p-6 sm:p-7 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#019ECA]/10 flex items-center justify-center text-[#019ECA]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <a
                    href="mailto:sales@jamesdouglasglobal.com"
                    className="w-8 h-8 rounded-full bg-[#0B3041] group-hover:bg-[#FF7D04] text-white flex items-center justify-center transition-colors"
                    aria-label="Email Sales"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-bold text-lg text-[#0B3041] mb-1.5">Reach Out</h3>
                <p className="text-xs text-gray-500 font-normal mb-3">
                  Have a question about our services?
                </p>
              </div>
              <a
                href="mailto:sales@jamesdouglasglobal.com"
                className="text-xs font-semibold text-[#019ECA] hover:text-[#0B3041] break-all"
              >
                sales@jamesdouglasglobal.com
              </a>
            </div>

            {/* Card 2: Request a Demo */}
            <div className="dynamic-contact-card bg-white rounded-3xl p-6 sm:p-7 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#019ECA]/10 flex items-center justify-center text-[#019ECA]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <a
                    href="mailto:demo@jamesdouglasglobal.com"
                    className="w-8 h-8 rounded-full bg-[#0B3041] group-hover:bg-[#FF7D04] text-white flex items-center justify-center transition-colors"
                    aria-label="Request Demo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-bold text-lg text-[#0B3041] mb-1.5">Request a Demo</h3>
                <p className="text-xs text-gray-500 font-normal mb-3">
                  Have a question about our services?
                </p>
              </div>
              <a
                href="mailto:demo@jamesdouglasglobal.com"
                className="text-xs font-semibold text-[#019ECA] hover:text-[#0B3041] break-all"
              >
                demo@jamesdouglasglobal.com
              </a>
            </div>

            {/* Card 3: Client Support */}
            <div className="dynamic-contact-card bg-white rounded-3xl p-6 sm:p-7 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#019ECA]/10 flex items-center justify-center text-[#019ECA]">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <a
                    href="mailto:support@jamesdouglasglobal.com"
                    className="w-8 h-8 rounded-full bg-[#0B3041] group-hover:bg-[#FF7D04] text-white flex items-center justify-center transition-colors"
                    aria-label="Email Client Support"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-bold text-lg text-[#0B3041] mb-1.5">Client Support</h3>
                <p className="text-xs text-gray-500 font-normal mb-3">
                  Book a live walkthrough with our team
                </p>
              </div>
              <a
                href="mailto:support@jamesdouglasglobal.com"
                className="text-xs font-semibold text-[#019ECA] hover:text-[#0B3041] break-all"
              >
                support@jamesdouglasglobal.com
              </a>
            </div>

            {/* Card 4: Our Locations */}
            <div className="dynamic-contact-card bg-white rounded-3xl p-6 sm:p-7 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#019ECA]/10 flex items-center justify-center text-[#019ECA]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <a
                    href="#about"
                    className="w-8 h-8 rounded-full bg-[#0B3041] group-hover:bg-[#FF7D04] text-white flex items-center justify-center transition-colors"
                    aria-label="View Map"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-bold text-lg text-[#0B3041] mb-2">Our Locations</h3>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-bold text-[#FF7D04] block mb-1">India</span>
                    <ul className="space-y-0.5 text-gray-600 font-medium">
                      <li>Bangalore (HQ)</li>
                      <li>Mumbai</li>
                      <li>Chennai</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-[#019ECA] block mb-1">Global</span>
                    <ul className="space-y-0.5 text-gray-600 font-medium">
                      <li>Singapore</li>
                      <li>Dubai</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Reach Out Form & Image Split Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B3041] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image */}
            <div className="lg:col-span-5 bg-gray-900 hidden lg:block overflow-hidden">
              <img
                src="https://jamesdouglasglobal.com/assets/img/contact-us-form-img.png"
                alt="Contact Strydz - a green-tree company "
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 text-white">
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Reach Out
              </h2>
              <p className="text-sm text-white/80 mt-1 mb-8">
                To turn hiring into your competitive edge
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name *"
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#0B3041] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#019ECA]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email *"
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#0B3041] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#019ECA]"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#0B3041] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#019ECA]"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message *"
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#0B3041] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#019ECA]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="primary-cta px-8 py-3.5 rounded-full bg-[#019ECA] hover:bg-[#018db5] text-white font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <span>Send</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 bg-white/10 rounded-2xl p-6">
                  <CheckCircle2 className="w-14 h-14 text-[#019ECA] mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto">
                    Thank you for reaching out. A Strydz - a green-tree company  client partner will respond to your inquiry confidentially.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#019ECA] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

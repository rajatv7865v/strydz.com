import { ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onSelectConsultant?: (name: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onSelectConsultant }) => {
  const consultants = [
    {
      name: 'Nupur Mehta',
      role: 'Managing Partner',
      practice: 'Leadership Hiring & Succession Planning',
      bio: 'With over a decade of experience in leadership hiring and succession planning, Nupur brings expertise to strengthen mid-to-senior-level talent pipelines, a critical priority for organizations building their next generation of leaders.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/in/nupurmehtampi/?originalSubdomain=in',
    },
    {
      name: 'Diksha Uniyal',
      role: 'Senior Director',
      practice: 'HR, Healthcare & Diversity Practice',
      bio: 'Diksha is an executive search leader with 12+ years of experience in HR, sales, healthcare, and analytics, shaping leadership talent, driving organizational growth, and championing diversity and inclusion.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/in/diksha-uniyal-27573054/?originalSubdomain=in',
    },
    {
      name: 'Sakshi Punjabi',
      role: 'Director',
      practice: 'Head of Technology & BFSI Practice',
      bio: 'With 9+ years of consulting experience, Sakshi heads the Technology function and BFSI practice. She partners with CXOs across Tech, Business, HR and others to shape leadership teams that drive digital transformation.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/in/sakshi-punjabi-817147103/?originalSubdomain=in',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#faf7f2] relative overflow-hidden" id="consultants">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#514f14]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#31547b]">Leadership Team</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#31547b] leading-[1.2]">
            Meet Our{' '}
            <span className="text-[#514f14]">
              Consultants
            </span>
          </h2>
          
          <div className="section-divider"></div>
          
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
            Our team is the heart of everything we do. Get to know the leadership advisors driving transformative results.
          </p>
        </div>

        {/* 3 Consultants Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultants.map((consultant) => (
            <div
              key={consultant.name}
              className="premium-card bg-white border border-[#e8e2d5] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#31547b]/60 transition-all"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#31547b]/90 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#514f14] text-white inline-block mb-1 shadow-sm">
                      {consultant.role}
                    </span>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {consultant.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#514f14] mb-2">
                    {consultant.practice}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {consultant.bio}
                  </p>
                </div>
              </div>

              {/* Action Link & LinkedIn */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <a
                  href="#about"
                  onClick={() => onSelectConsultant?.(consultant.name)}
                  className="text-xs sm:text-sm font-semibold text-[#31547b] group-hover:text-[#514f14] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Know more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#514f14] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={consultant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#31547b] hover:text-white flex items-center justify-center text-slate-600 transition"
                  aria-label={`${consultant.name} LinkedIn`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

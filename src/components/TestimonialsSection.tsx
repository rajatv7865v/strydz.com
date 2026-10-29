import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: '“Strydz filled our leadership role in three weeks. The shortlist quality was far beyond what we expected.”',
      author: 'Ananya Rao',
      role: 'VP People, Nexora',
      avatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: '“Their recruiters actually understood our tech stack. Every candidate was interview-ready.”',
      author: 'Vikram Singh',
      role: 'CTO, Finlytics',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: '“I got a better role and a 40% hike within a month. The coaching made all the difference.”',
      author: 'Neha Gupta',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            Loved by hiring teams{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              & candidates
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
            Real feedback from engineering directors, startup founders, and placed leaders.
          </p>
        </div>

        {/* 3 Testimonials Grid with Premium Cards & Unsplash Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="premium-card bg-white border border-[#e8e2d5] rounded-2xl p-7 shadow-xs flex flex-col justify-between group relative"
            >
              <div>
                {/* 5 Stars with glowing amber */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {t.quote}
                </p>
              </div>

              {/* Author Info with Real Unsplash Portrait */}
              <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-slate-100/80">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover shadow-xs ring-2 ring-indigo-50"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

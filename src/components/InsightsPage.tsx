import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

interface InsightsPageProps {
  onNavigateToContact?: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigateToContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Succession Strategy', 'Board Governance', 'Executive Search', 'Leadership Trends'];

  const articles = [
    {
      id: 'insight-1',
      title: 'Succession Planning in Promoter-Led Indian Companies',
      category: 'Succession Strategy',
      badge: 'BUSINESS, CONSULTING',
      desc: 'Strydz, a leader in executive search, shows how smart succession planning turns generational transition risk into strategic opportunity.',
      readTime: '5 min read',
      date: 'Published by Practice Leadership',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'insight-2',
      title: 'Hiring Leaders Who Shape the Future',
      category: 'Executive Search',
      badge: 'BUSINESS, CONSULTING',
      desc: 'In boardrooms today, the pace of change has far outstripped yesterday’s leadership playbooks. Strydz meets this challenge by combining precision with human judgment for speed and rigor.',
      readTime: '4 min read',
      date: 'Published by Practice Leadership',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'insight-3',
      title: 'CEO Succession Planning: A Strategic Imperative',
      category: 'Board Governance',
      badge: 'BUSINESS, CONSULTING',
      desc: 'Most succession plans fail, risking organizational instability. Done right, they ensure governance continuity and strategic competitive edge.',
      readTime: '6 min read',
      date: 'Published by Board Advisory',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'insight-4',
      title: 'The Future of Executive Search in the Middle East',
      category: 'Leadership Trends',
      badge: 'BUSINESS, CONSULTING',
      desc: 'Regional leadership hiring is being reshaped by economic transformation and localized mandates. Success lies in blending deep market intelligence with agile search.',
      readTime: '5 min read',
      date: 'Published by Global Practice',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'insight-5',
      title: 'How Strydz Turned a 12-Month Hiring Stalemate into Strategic Success',
      category: 'Executive Search',
      badge: 'CASE BRIEF',
      desc: 'A regional developer’s year-long VP search failed due to rigid criteria, not lack of talent. Strydz resolved it by reframing the organizational challenge.',
      readTime: '4 min read',
      date: 'Published by Advisory Leads',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="bg-[#faf7f2] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Banner with Authentic Imagery */}
      <section
        id="insights-banner"
        className="banner relative w-full h-[52vh] min-h-[420px] max-h-[580px] overflow-hidden flex items-center justify-center bg-[#111126] select-none mb-10"
        style={{
          backgroundImage: `url('https://www.jamesdouglas.co.in/assets/images/insights-banner.jpg'), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=85')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Centered Banner Overlay */}
        <div className="banner-overlay relative z-10 w-full md:w-[65%] lg:w-[60%] h-full flex items-center justify-center bg-black/45 md:bg-[#00000077] backdrop-blur-[1px] px-6 sm:px-10 md:px-14 py-12">
          <div className="banner-content text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-4 text-white">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                Executive Perspectives
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] text-white tracking-tight drop-shadow-sm">
              <span className="hero-corner mr-4 sm:mr-6">Insights & Perspectives</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Stay ahead with concise briefs on leadership trends, succession strategy, and board governance, freshly curated by our partners.
            </p>

            {/* Quick Action Button */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center">
              <button
                onClick={onNavigateToContact}
                className="btn-warning-custom px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Discuss Leadership Trends With Us
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
                selectedCategory === cat
                  ? 'bg-[#31547b] text-white border-[#31547b] shadow-2xs'
                  : 'bg-white border-[#e8e2d5] text-slate-700 hover:border-[#31547b] hover:text-[#31547b]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="premium-card bg-white border border-[#e8e2d5] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#31547b]/60 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#31547b]/90 text-white backdrop-blur-sm">
                      {article.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#514f14]" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>

                  <h2 className="text-lg font-semibold text-[#31547b] group-hover:text-[#514f14] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mt-3 font-normal">
                    {article.desc}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-[#31547b] group-hover:text-[#514f14] inline-flex items-center gap-1.5 transition-colors">
                  <span>Read full brief</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#514f14] group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] text-slate-400">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] mt-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#31547b] via-[#264364] to-[#152537] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-white">
              Better decisions start with better conversations
            </h2>
            <div className="section-divider mt-4 mb-4"></div>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Connect with our practice consultants to discuss organizational leadership trends, talent mapping, or board appointments.
            </p>

            <div className="pt-6 flex justify-center">
              <button
                onClick={() => {
                  if (onNavigateToContact) {
                    onNavigateToContact();
                  } else {
                    window.location.hash = '#contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="btn-warning-custom px-7 py-3 rounded-xl text-sm font-semibold shadow-sm hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InsightsPage;

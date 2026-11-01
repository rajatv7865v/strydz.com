import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface InsightsSectionProps {
  onSelectInsight?: (title: string) => void;
  onExploreAll?: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectInsight, onExploreAll }) => {
  const articles = [
    {
      id: 'insight-1',
      title: 'Succession Planning in Promoter-Led Indian Companies',
      desc: 'Strydz, a leader in executive search, shows how smart succession planning turns generational transition risk into strategic opportunity.',
      tag: 'Succession Strategy',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'insight-2',
      title: 'Hiring Leaders Who Shape the Future: Speed vs. Fit',
      desc: 'Strydz meets the modern executive hiring challenge by combining analytical precision with seasoned human judgment for both speed and cultural rigor.',
      tag: 'Executive Search',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'insight-3',
      title: 'CEO Succession Planning: A Strategic Imperative',
      desc: 'Why 70% of board-level succession plans encounter unforeseen friction and how to construct a resilient, proactive executive leadership pipeline.',
      tag: 'Board Governance',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const handleRead = (title: string) => {
    if (onSelectInsight) {
      onSelectInsight(title);
    } else if (onExploreAll) {
      onExploreAll();
    } else {
      window.location.hash = '#insights';
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#faf7f2] relative overflow-hidden" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2dcd0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#514f14]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#31547b]">Thought Leadership</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#31547b] leading-[1.2]">
            Insights &{' '}
            <span className="text-[#514f14]">
              Perspectives
            </span>
          </h2>
          
          <div className="section-divider"></div>
          
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
            Stay ahead with concise briefs on leadership trends, succession strategy, and board governance, freshly curated by our partners.
          </p>
        </div>

        {/* 3 Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="premium-card bg-white border border-[#e8e2d5] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#31547b]/60 transition-all"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#31547b]/90 text-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#514f14]" />
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#31547b] group-hover:text-[#514f14] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <button
                  onClick={() => handleRead(item.title)}
                  className="text-xs sm:text-sm font-semibold text-[#31547b] group-hover:text-[#514f14] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read perspective</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#514f14] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onExploreAll ? onExploreAll() : (window.location.hash = '#insights')}
            className="px-6 py-3 rounded-xl text-sm font-semibold shadow-sm inline-flex items-center gap-2 text-white bg-[#31547b] hover:bg-[#264364] transition-all"
          >
            <span>Explore All Perspectives</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;

import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Tag, ArrowRight, X, Clock, Calendar } from 'lucide-react';

interface InsightsPageProps {
  onContactClick: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onContactClick }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogs: BlogPost[] = [
    {
      id: '1',
      slug: 'how-rpo-aligns-talent-with-long-term-business-strategy',
      title: 'How RPO Aligns Talent with Long-Term Business Strategy',
      category: 'BUSINESS, CONSULTING',
      excerpt: "In India’s fast-changing market, RPO helps align talent with long-term goals without compromising current execution momentum.",
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/How-RPO-Aligns-Talent-with-Long-Term-Business-Strategy.jpg',
      readTime: '5 min read',
      content: [
        "In fast-changing markets, reactive hiring is no longer viable. Today's hyper-competitive landscape requires organizations to treat recruitment as a core driver of enterprise value rather than a back-office transactional support function.",
        "Recruitment Process Outsourcing (RPO) transforms how modern companies view talent acquisition. By embedding strategic talent advisors into your organization, RPO bridges the gap between high-level business goals and ground-level hiring execution.",
        "Through predictive workforce planning, structured competency mapping, and proactive talent pipelining, RPO partners ensure that when new business opportunities emerge, the leadership and technical talent required to seize them are already identified and engaged."
      ]
    },
    {
      id: '2',
      slug: 'how-rpo-scales-hiring-without-losing-quality',
      title: 'How RPO Scales Hiring Without Losing Quality',
      category: 'BUSINESS, CONSULTING',
      excerpt: "It’s not about positions filled, but about finding the right people without slowing business momentum.",
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/Hiring-Without-Losing-Quality-img.jpg',
      readTime: '6 min read',
      content: [
        "Scaling recruitment quickly often leads to a common trap: quality dilution. In the rush to hit headcount milestones, internal teams often lower qualification bars or skip thorough cultural alignment checks.",
        "Leading RPO models overcome this through dual-engine architecture: AI-driven parsing and ranking paired with deep domain-specialist recruiter scrutiny.",
        "By automating repetitive top-of-funnel matching through engines like MatchCore, recruiters can spend their high-value hours conducting qualitative behavioral assessments, ensuring candidates exceed both performance and cultural standards."
      ]
    },
    {
      id: '3',
      slug: 'hiring-at-the-speed-of-business',
      title: 'Hiring at the Speed of Business',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'Legacy recruitment slows business momentum—every delay risks market share, innovation, and execution.',
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/Hiring-at-the-Speed-of-Business.jpg',
      readTime: '4 min read',
      content: [
        "Time-to-hire is no longer just an HR KPI; it is a competitive metric. When product launches or transformation roadmaps depend on specialized talent, every vacancy delays go-to-market velocity.",
        "Traditional recruitment agencies operate reactively after a requisition is formally opened. In contrast, RPO providers maintain pre-warmed candidate pools across core disciplines, reducing time-to-first-interview by up to 50%.",
        "Streamlined interview scheduling and automated candidate feedback loops ensure that exceptional talent is not lost to competitor counter-offers."
      ]
    },
    {
      id: '4',
      slug: 'predictive-hiring',
      title: 'Predictive Hiring: From Guesswork to Certainty',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'MatchCore turns talent prediction into your competitive edge with data-led fitment scores.',
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/Predictive_Hiring.png',
      readTime: '7 min read',
      content: [
        "Gut-feel hiring decisions have cost organizations millions in bad hires and turnover. Predictive hiring leverages structured data, historical success markers, and behavioral analytics to forecast candidate fit and tenure.",
        "MatchCore combines resume intelligence, skill gap analysis, and real-time market benchmarking to provide objective fitment scores before an interview is even scheduled.",
        "The result is a radically lower interview-to-offer ratio, freeing hiring managers to spend their time with candidates who are already statistically calibrated for success."
      ]
    },
    {
      id: '5',
      slug: 'rpo-and-diversity',
      title: 'RPO and Diversity',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'Today, businesses see diversity not just as a moral duty but as a strategic edge.',
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/RPO-and-Diversity-blog-img.jpg',
      readTime: '5 min read',
      content: [
        "Modern enterprises recognize that cognitive and demographic diversity fuels creative problem-solving and better corporate governance.",
        "RPO providers implement blind screening processes, unbiased AI ranking algorithms, and diverse sourcing slates that systematically eliminate unconscious bias from candidate discovery.",
        "Real-time pipeline dashboards allow executive leadership to monitor diversity ratios across every phase of recruitment, ensuring commitments translate into measurable hiring outcomes."
      ]
    },
    {
      id: '6',
      slug: 'the-global-talent-pool',
      title: 'The Global Talent Pool',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'As companies scale globally, recruitment grows more complex and demanding across international borders.',
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/The-Global-Talent-Pool-blog-img.jpg',
      readTime: '6 min read',
      content: [
        "Global capability centers (GCCs) and distributed cross-border teams have rewritten the rules of talent acquisition. Finding talent in Mumbai, Singapore, or Dubai requires local cultural fluency paired with international search standards.",
        "Backed by EMA Partners' international footprint, Strydz - a green-tree company  provides seamless reach across major commercial centers.",
        "Whether building an entire GCC engineering hub from scratch or hiring localized regulatory specialists, global RPO ensures uniform employer branding and compliance."
      ]
    },
    {
      id: '7',
      slug: 'why-traditional-rpos-fall-short',
      title: 'Why Traditional RPOs Fall Short and What a Better One Looks Like',
      category: 'BUSINESS, CONSULTING',
      excerpt: "It's time to pause and ask: Is your RPO truly working for you, or just billing hours?",
      image: 'https://jamesdouglasglobal.com/assets/img/blogs-img/beyond-resumes-img.jpg',
      readTime: '5 min read',
      content: [
        "Many legacy RPOs operate as rigid staff-augmentation shops, billing for recruiter seats rather than taking ownership of business results.",
        "Modern RPO demands co-creation. It starts with a comprehensive TA Maturity Assessment, followed by agile SLAs and technology integration that evolves with organizational growth.",
        "True talent partners don't just supply resumes; they consult on compensation benchmarks, employer branding, and candidate experience metrics."
      ]
    },
    {
      id: '8',
      slug: 'building-a-resilient-talent-strategy',
      title: 'Building a Resilient Talent Strategy',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'Learn how RPOs help organizations navigate market uncertainty with agile talent strategies.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      content: [
        "Economic volatility demands recruitment models that can scale up in growth phases and flex down during consolidation without painful severance or restructuring.",
        "Hybrid and cloud RPO models give CFOs and CHROs financial agility, converting fixed internal recruiting overhead into a flexible, variable operating cost.",
        "Building resilience means maintaining continuous talent visibility so leadership is never caught flat-footed when market demand surges."
      ]
    },
    {
      id: '9',
      slug: 'rpo-vs-traditional-recruitment',
      title: 'RPO vs Traditional Recruitment',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'Discover how AI and human expertise are reshaping modern recruitment strategies.',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      content: [
        "Contingent recruitment agencies are transactional brokers incentivized only by individual placement fees, resulting in fragmented candidate interactions and zero institutional memory.",
        "In contrast, an RPO is an exclusive, embedded partner acting directly under your brand name and values.",
        "RPO brings proprietary AI platforms, dedicated recruiters, and full accountability for cost-per-hire, time-to-hire, and long-term retention."
      ]
    },
    {
      id: '10',
      slug: 'the-evolving-role-of-rpo',
      title: 'The Evolving Role of RPO in Modern Talent Acquisition',
      category: 'BUSINESS, CONSULTING',
      excerpt: 'Explore the compelling data behind why leading enterprise firms are switching to RPO partnerships.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      content: [
        "The global RPO market is surging as enterprises abandon unscalable in-house recruitment centers in favor of specialized talent architects.",
        "Today’s leading RPOs provide strategic talent advisory, continuous talent intelligence, and predictive hiring algorithms that guide board-level organizational decisions.",
        "By merging cutting-edge automation with consultative human nuance, the future of talent acquisition belongs to intelligent RPO partnerships."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#0B3041] pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-gray-50/70 border-b border-gray-100 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF7D04]">
            Insights & Perspectives
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3041] mt-2 tracking-tight">
            Latest Research & Industry Trends
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Stay updated with the latest trends and insights in talent acquisition, workforce planning, and RPO models.
          </p>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0090FF] uppercase tracking-wider mb-2.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{post.category}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-[#0B3041] group-hover:text-[#FF7D04] transition-colors leading-snug line-clamp-2 mb-2">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="primary-cta group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B3041] text-white text-xs font-semibold hover:bg-[#14465d] transition-all"
                  >
                    <span>Read more</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="12" 
                      viewBox="0 0 24 17" 
                      fill="none"
                      className="transition-transform group-hover/btn:translate-x-1"
                    >
                      <path
                        d="M13.9499 16.5073C13.6676 16.5087 13.3913 16.4422 13.156 16.3164C12.9208 16.1907 12.7374 16.0113 12.6291 15.8012C12.5209 15.5911 12.4927 15.3597 12.5483 15.1367C12.6038 14.9136 12.7405 14.7089 12.9409 14.5487L20.4728 8.4895L12.9409 2.4303C12.7081 2.21118 12.5864 1.92932 12.6002 1.64105C12.6141 1.35278 12.7623 1.07933 13.0154 0.875338C13.2685 0.671347 13.6078 0.551845 13.9654 0.54071C14.3231 0.529576 14.6728 0.627629 14.9447 0.815277L23.4713 7.68772C23.736 7.90232 23.8846 8.19263 23.8846 8.49523C23.8846 8.79783 23.736 9.08813 23.4713 9.30274L14.9447 16.1752C14.68 16.3868 14.3227 16.5061 13.9499 16.5073Z"
                        fill="white"
                      />
                      <path
                        d="M1.42254 16.5075C1.14027 16.5088 0.863909 16.4423 0.628688 16.3166C0.393466 16.1908 0.210042 16.0114 0.101801 15.8013C-0.00644071 15.5912 -0.034595 15.3599 0.0209272 15.1368C0.0764495 14.9137 0.213133 14.709 0.41355 14.5488L7.94543 8.48963L0.41355 2.43043C0.14595 2.21475 -0.00438591 1.92222 -0.00438591 1.6172C-0.0043859 1.31217 0.14595 1.01964 0.41355 0.803957C0.681151 0.588272 1.04409 0.467102 1.42254 0.467102C1.80098 0.467102 2.16393 0.588272 2.43153 0.803957L10.9582 7.67639C11.2229 7.891 11.3714 8.18131 11.3714 8.48391C11.3714 8.78651 11.2229 9.07681 10.9582 9.29142L2.43153 16.1639C2.29991 16.2721 2.14296 16.3582 1.96976 16.4172C1.79656 16.4761 1.61056 16.5068 1.42254 16.5075Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Full Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10 my-8 shadow-2xl border border-gray-100 text-[#0B3041]">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#0B3041] hover:bg-gray-100 transition"
              aria-label="Close Article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-semibold text-[#0090FF] uppercase mb-3">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-gray-400 font-normal">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3041] leading-tight mb-4">
              {selectedPost.title}
            </h2>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-gray-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-xs font-semibold text-gray-500 hover:text-[#0B3041]"
              >
                ← Back to Insights
              </button>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onContactClick();
                }}
                className="primary-cta px-6 py-2.5 rounded-full text-xs font-semibold"
              >
                Discuss with Our Advisors
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default InsightsPage;

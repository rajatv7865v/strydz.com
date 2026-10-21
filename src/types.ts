export interface CandidateSignal {
  name: string;
  score: number;
  tags: string[];
  role: string;
  experience: string;
  previousCompanies: string[];
  availability: string;
  currentLocation: string;
  skills: { name: string; level: number }[];
  verifiedBadges: string[];
  summary: string;
}

export interface SolutionItem {
  id: string;
  category: 'ai-tech' | 'leadership' | 'gcc' | 'rpo' | 'flexi' | 'advisory';
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  badge: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  targetAudience: string;
}

export interface JobListing {
  id: string;
  title: string;
  companyCategory: string;
  domain: 'AI & Data' | 'Low-Latency & Quant' | 'Core Engineering' | 'Leadership / CXO' | 'GCC Core';
  location: string;
  type: 'Full-time' | 'Contract' | 'Hybrid' | 'Remote';
  experience: string;
  salaryRange: string;
  skills: string[];
  description: string;
  matchScore?: number;
  featured?: boolean;
  postedAgo: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; desc: string }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar: string;
  };
}

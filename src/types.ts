export type JDView = 
  | 'home'
  | 'hirebound'
  | 'enterprise-rpo'
  | 'project-rpo'
  | 'process-rpo'
  | 'cloud-rpo'
  | 'source-screen'
  | 'flex-team'
  | 'outplacement'
  | 'about'
  | 'contact'
  | 'career'
  | 'blogs'
  | 'privacy'
  | 'terms';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroBanner: string;
  descriptionParagraphs: string[];
  whyItWorks: {
    title: string;
    description: string;
    icon: string;
  }[];
  whatYoullExperience: {
    title: string;
    description: string;
    icon: string;
  }[];
  ctaTitle: string;
  ctaText: string;
}

export interface LeadershipMember {
  name: string;
  title: string;
  image: string;
  linkedin: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime?: string;
  content: string[];
}

// Legacy types preserved to ensure backward compatibility
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
  domain: string;
  location: string;
  type: string;
  experience: string;
  salaryRange: string;
  skills: string[];
  description: string;
  industry?: string;
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

import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'hft-scale',
    clientType: 'Global High-Frequency Trading Desk',
    industry: 'Quantitative Trading & Prop Desk',
    challenge: 'Needed 14 ultra-specialized C++ and kernel-bypass developers within 6 weeks to launch their Asia-Pacific algorithmic trading operations. Previous conventional recruitment agencies provided less than 4% technical screen pass rates.',
    solution: 'Deployed StrydzAI™ deep technical signal scraper paired with a dedicated senior quant recruiter. Calibrated against raw GitHub kernel bypass PRs, SIMD benchmarking, and automated competitive coding telemetry.',
    results: [
      { label: '8-Hour SLA Deliveries', value: '100%', desc: 'Initial verified batch within 8 hours' },
      { label: 'Interview-to-Offer', value: '68%', desc: 'Compared to industry norm of 12%' },
      { label: 'Time-to-Hire', value: '19 Days', desc: 'Down from 74 days previous baseline' }
    ],
    testimonial: {
      quote: 'Strydz completely shattered our expectations. In a field as fiercely contested as HFT systems engineering, where every candidate claim must be verified under a microscope, their StrydzAI engine provided engineers that were already code-evaluated and ready to pass our toughest live technical rounds.',
      author: 'Vikramaditya S.',
      title: 'Partner & Chief Technology Officer',
      company: 'Quantron Capital Management',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'gcc-buildout',
    clientType: 'Fortune 200 European Healthcare Giant',
    industry: 'Enterprise Software & Medical Device GCC',
    challenge: 'Establishing a new 450-person Global Capability Center in Bengaluru from the ground up, requiring Day-1 site leadership, 4 engineering directors, and 120 senior cloud/data engineers in 5 months.',
    solution: 'Strydz deployed our turnkey GCC Acceleration Suite, combining executive search for the Managing Director with an embedded RPO team using StrydzAI automated candidate scoring and structured cohort assessments.',
    results: [
      { label: 'Engineers Onboarded', value: '470+', desc: 'Surpassed 450 target in 4.5 months' },
      { label: 'First-Year Retention', value: '96.2%', desc: 'Industry leading stability' },
      { label: 'Cost Savings vs Agency', value: '38%', desc: 'Consolidated under single transparent RPO' }
    ],
    testimonial: {
      quote: 'Setting up our India Technology Hub with Strydz was the smoothest international expansion we have executed across 7 countries. Their dual power—cutting-edge AI sourcing combined with seasoned executive advisory—saved us months of organizational headache.',
      author: 'Marcus Lindqvist',
      title: 'Global Senior VP of Engineering & Operations',
      company: 'Novis HealthTech Solutions (EU)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'genai-unicorn',
    clientType: 'Series B AI Foundation Model Unicorn',
    industry: 'Generative AI & LLM Systems',
    challenge: 'Sudden $60M capital infusion required tripling the engineering core with top-tier ML infrastructure and distributed inference researchers in 90 days.',
    solution: 'Utilized Strydz Flexi-to-Perm and direct tech search. Pre-screened candidates from top research labs with proven experience in PyTorch Megatron, vLLM, and FP8 quantization.',
    results: [
      { label: 'Key Roles Filled', value: '28 Staff Engineers', desc: 'Distributed training & inference experts' },
      { label: 'Sourcing Accuracy', value: '98.8%', desc: 'Zero candidate dropouts during interview loops' },
      { label: 'Hiring Velocity', value: '3.2x', desc: 'Sprint delivery in 60 days vs 180 planned' }
    ],
    testimonial: {
      quote: 'When you are competing directly with OpenAI and Meta for AI researchers, normal recruiting fails instantly. Strydz speaks the technical language of our engineers and brought us people who shipped high-impact code in their first week.',
      author: 'Ananya Roy',
      title: 'Co-Founder & VP of Research',
      company: 'CogniForge Systems',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  }
];

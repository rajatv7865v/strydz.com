import React from 'react';
import { JDView } from '../types';
import { 
  Zap, 
  CheckCircle, 
  Shield, 
  BarChart, 
  Layers, 
  Users, 
  TrendingUp, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  currentView: JDView;
  onTalkToExpert: () => void;
}

interface ServiceData {
  title: string;
  badge: string;
  subtitle: string;
  heroBanner: string;
  paragraphs: string[];
  whyItWorks: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  whatYoullExperience: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  ctaTitle: string;
  ctaText: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentView, onTalkToExpert }) => {
  const servicesConfig: Record<string, ServiceData> = {
    'enterprise-rpo': {
      title: 'Enterprise RPO',
      badge: 'End-to-End Talent Partnership',
      subtitle: 'Future-Ready Hiring at Scale',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Enterprice%20RPO.jpg',
      paragraphs: [
        "At Strydz - a green-tree company , we recognize that hiring goes beyond filling roles; it's about building a future-ready, resilient workforce aligned with your business goals. Our Enterprise RPO solutions are customized to your talent acquisition maturity, industry demands, and growth objectives, delivering scalable, impactful outcomes that evolve alongside your organization.",
        "Whether you're transforming an existing talent acquisition function, launching new hiring models, expanding into fresh markets, or managing high-volume recruitment, we become a true extension of your team. From sourcing and screening to onboarding and change management, our comprehensive approach enhances candidate experience, accelerates time-to-hire, and elevates the quality of every hire.",
        "Powered by our proprietary AI-driven platform, MatchCore, we streamline recruitment workflows, boost recruiter productivity, and provide real-time insights that enable smarter, data-driven hiring decisions. With deep expertise across BFSI, Technology, Life Sciences, and Manufacturing, our flexible delivery models adapt to your unique needs — helping you shift from transactional hiring to strategic talent acquisition that drives sustained business value. Smarter hiring begins here."
      ],
      whyItWorks: [
        {
          title: 'Total Talent Partnership',
          description: 'We embed fully into your organization, aligning recruitment with your strategic business goals while maintaining full employer brand integrity.',
          icon: <Users className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'On-brand Delivery',
          description: 'Our embedded experts work under your systems and culture, ensuring candidate experience remains consistent.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Candidate Experience That Protects Your Brand',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Real-Time, Board-Ready Insight',
          description: 'Live dashboards surface pipeline health, diversity mix and cost per hire, giving leaders instant clarity.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Cost-effective Agility',
          description: 'Pay only for what you use—ideal for organizations with unpredictable or seasonal hiring needs.',
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Transparent metrics, audit trails and best-practice compliance frameworks safeguard every stage of hiring.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'Every engagement begins with our TA Maturity Assessment, so solutions fit your current capability and roadmap—never a plug-and-play template.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'Sector-savvy recruiters provide context, while MatchCore automates sourcing, ranking and scheduling delivering speed and quality.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'Real-time dashboards reveal pipeline health, diversity mix and cost per hire; built-in audit trails keep every stage owner-ready.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Our On-site, hybrid or cloud delivery model expands with demand, while weekly analytics huddles and monthly optimization ensures hiring engine efficiency and scale.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Ready to modernize your recruitment process?',
      ctaText: "Let's build an Enterprise RPO solution that delivers agile, efficient, and effective talent acquisition."
    },

    'project-rpo': {
      title: 'Project RPO',
      badge: 'Targeted Hiring Initiatives',
      subtitle: 'Speed, Scale, and Certainty for Critical Hiring Spikes',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Project%20RPO%20copy.jpg',
      paragraphs: [
        "Business milestones rarely follow predictable hiring schedules. Product launches, geographic expansions, digital transformations, and seasonal hiring spikes demand rapid recruiter mobilization without long-term overhead.",
        "Our Project RPO service delivers targeted, time-boxed recruitment support for specific initiatives, helping you scale your hiring efforts efficiently while maintaining quality, governance, and speed.",
        "Our scalable delivery, diverse recruiter expertise, and streamlined execution simplify complex hiring, adapting dynamically to your evolving needs. When agility counts, you can count on JD Global."
      ],
      whyItWorks: [
        {
          title: 'Business Agility',
          description: 'Perfect for market expansions, digital transformations, or short-term spikes in demand—delivers results without long-term risk.',
          icon: <Zap className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Quality That Shows in the First Interview',
          description: 'Precision matching delivers tight, high-fit short-lists—so every interview counts.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Candidate Experience That Protects Your Brand',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Real-Time, Board-Ready Insight',
          description: 'Live dashboards surface pipeline health, diversity mix and cost per hire, giving leaders instant clarity.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Speed-to-hire, On Demand',
          description: 'Rapid deployment of expert recruiters to support urgent, high-impact hiring without adding permanent headcount.',
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Transparent metrics, audit trails and best-practice compliance frameworks safeguard every stage of hiring.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'Every project begins with our rapid needs diagnostic, mapping hiring milestones to candidate pipelines.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'MatchCore algorithms handle volume screening while dedicated project recruiters drive engagement.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'Weekly sprint reviews and live project health dashboards keep hiring managers and leaders aligned.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Flexible ramp-up and wind-down capabilities ensure zero lingering operational costs once hiring targets are met.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Ready to accelerate your project with the right talent?',
      ctaText: "Let's discuss how our Project RPO solutions can help you meet your hiring goals on time and on budget."
    },

    'process-rpo': {
      title: 'Process RPO',
      badge: 'Workflow Optimization',
      subtitle: 'Precision Execution for Core Recruitment Stages',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Process%20RPO.jpg',
      paragraphs: [
        "From resume screening and job postings to interview scheduling and onboarding, our specialized teams manage transactional workflows with professionalism and precision.",
        "By outsourcing these time-consuming tasks, your internal TA teams can focus on strategic priorities — all while strengthening your employer brand through seamless candidate interactions.",
        "Our modular, scalable Process RPO model flexes to your hiring volume and business cycles, ensuring smooth, cost-effective recruitment operations whether during rapid growth or business-as-usual phases."
      ],
      whyItWorks: [
        {
          title: 'Targeted Optimization',
          description: 'Enhances specific hiring stages—like sourcing, screening, or interview scheduling—without overhauling your entire TA model.',
          icon: <Zap className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Quality That Shows in the First Interview',
          description: 'Precision matching delivers tight, high-fit short-lists—so every interview counts.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Candidate Experience That Protects Your Brand',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Real-Time, Board-Ready Insight',
          description: 'Live dashboards surface pipeline health, diversity mix and cost per hire, giving leaders instant clarity.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Scalable Cost Efficiency',
          description: 'Pay only for the specific processes outsourced, saving up to 45% in administrative overhead.',
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Transparent metrics, audit trails and best-practice compliance frameworks safeguard every stage of hiring.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'We audit and benchmark your current TA workflow bottlenecks before deploying specialized specialists.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'MatchCore automates scheduling, parsing, and notifications while our coordinators nurture candidates.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'SLAs tracked down to the hour for candidate communication and interview confirmations.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Iterative process re-engineering eliminates administrative waste quarter after quarter.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Ready to streamline your recruitment workflows?',
      ctaText: 'Transform high-friction recruitment tasks into an automated, high-touch engine.'
    },

    'cloud-rpo': {
      title: 'Cloud RPO',
      badge: 'Platform-Based Subscription',
      subtitle: 'A cloud-based AI powered solution for the AI world',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Cloud%20RPO.jpg',
      paragraphs: [
        "Traditional recruitment models struggle to keep pace with dynamic hiring needs in today's rapidly evolving digital landscape. Lengthy hiring cycles, inconsistent candidate experiences, and fragmented data across multiple platforms create business growth bottlenecks.",
        "Strydz - a green-tree company 's Cloud RPO solution deployed fast and on a platform without dependencies on many resources, technology integrations, and complex contracts. A subscription-based RPO where you pay as you use with the power of using the service at your fingertips.",
        "Leverage MatchCore cloud intelligence to requisition, interview, and onboard talent instantly with minimal lead times."
      ],
      whyItWorks: [
        {
          title: 'Platform Interface',
          description: 'Subscribe and upload your job descriptions. Leave the rest to our AI engine, MatchCore, and our Talent Experts, who will ensure you have a pipeline of interview-ready candidates.',
          icon: <Cpu className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'On-brand Delivery',
          description: 'Our embedded experts work under your systems and culture, ensuring candidate experience remains consistent.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Candidate Experience That Protects Your Brand',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Real-Time, Board-Ready Insight',
          description: 'Live dashboards surface pipeline health, diversity mix and cost per hire, giving leaders instant clarity.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Cost-effective Agility',
          description: 'Flexible pay-as-you-grow subscription model eliminating bloated upfront consulting contracts.',
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Cloud-native data privacy, encrypted candidate pipelines, and automated compliance adherence.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'Fast onboarding in days rather than months, activating cloud requisitions immediately.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'Instant AI matching combined with experienced sector recruiters reviewing top-tier profiles.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'Always-on web and mobile portal visibility into hiring stages, feedback, and candidate status.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Upgrade or dial down capacity with simple subscription toggles as hiring volume shifts.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Ready to modernize your recruitment process?',
      ctaText: "Let's build a Cloud RPO solution that delivers agile, efficient, and effective talent acquisition."
    },

    'source-screen': {
      title: 'Source & Screen',
      badge: 'Pipeline Acceleration',
      subtitle: 'Building Pipelines That Deliver',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Source%20&%20Screen.jpg',
      paragraphs: [
        "JD Global's Source & Screen RPO provides a flexible, scalable solution to fill your funnel with qualified candidates quickly and effectively.",
        "Whether establishing new pipelines, accelerating function-specific hiring, or supporting internal teams during ramp-ups, our outcome-driven Source & Screen model aligns completely with your talent goals.",
        "We proactively source, screen, and deliver only interview-ready candidates who match your technical and cultural criteria, reducing interview-to-hire ratios."
      ],
      whyItWorks: [
        {
          title: 'Velocity Without Compromise',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Zap className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Talent Pre-Vetted to Spec',
          description: 'We proactively source, screen, and deliver only interview-ready candidates who match your technical and cultural criteria, reducing interview-to-hire ratios.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Time & Cost Savings',
          description: 'Cuts recruiter workload by up to 60%, slashes time-to-interview, and improves candidate experience with an always-on candidate pipeline.',
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Real-Time, Board-Ready Insight',
          description: 'Live dashboards surface pipeline health, diversity mix and cost per hire, giving leaders instant clarity.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Scalable Pipeline Agility',
          description: 'Fill critical shortages without overburdening in-house recruiters with raw resume volume.',
          icon: <Layers className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Transparent metrics, audit trails and best-practice compliance frameworks safeguard every stage of hiring.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'Precision role calibration session ensuring every candidate fits your explicit job matrix.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'Boolean search generation & MatchCore fitment scores validated by senior talent scouts.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'Direct candidate slates delivered with calibrated summaries and recorded screening insights.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Pre-warmed candidate pools ready for immediate dispatch when vacancies occur.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Ready to build high-performance talent pipelines?',
      ctaText: 'Discover how Source & Screen accelerates candidate delivery while slashing recruiter burnout.'
    },

    'flex-team': {
      title: 'Flex Team',
      badge: 'Agile Contingent Talent',
      subtitle: 'Workforce On Demand',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Matchcore.jpg',
      paragraphs: [
        "JD Global's Flex Team solutions offer you the agility to access skilled talent precisely when and where you need it.",
        "From tech specialists supporting short projects to customer service teams during peak periods, we help you scale quickly, efficiently, and cost-effectively — ensuring your workforce adapts fluidly to changing business priorities.",
        "Eliminate long procurement cycles and ensure complete payroll, legal, and operational compliance under institutional EMA Partners governance."
      ],
      whyItWorks: [
        {
          title: 'Velocity Without Compromise',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Zap className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'On-brand Delivery',
          description: 'Our embedded experts work under your systems and culture, ensuring candidate experience remains consistent.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Candidate Experience That Protects Your Brand',
          description: 'AI-driven sourcing and streamlined workflows move roles from requisition to offer in a fraction of the usual time.',
          icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Real-Time, Board-Ready Insight',
          description: 'Live dashboards surface pipeline health, diversity mix and cost per hire, giving leaders instant clarity.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Agile Deployment',
          description: 'Deploy specialized experts in days to bridge critical skill gaps across technology and operations.',
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Full statutory compliance, transparent billing, and rigorous background verification.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'Custom contract models structured around project deliverables or flexible hourly retainers.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'On-demand talent pool pre-evaluated through MatchCore technical assessments.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'Timesheet tracking, milestone monitoring, and consolidated enterprise billing.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Seamless option to transition high-performing flex talent to permanent headcount.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Ready to scale your workforce on demand?',
      ctaText: 'Access pre-vetted specialists with frictionless flex team deployment.'
    },

    'outplacement': {
      title: 'Outplacement',
      badge: 'Compassionate Career Transition',
      subtitle: 'Support for transitioning employees',
      heroBanner: 'https://jamesdouglasglobal.com/assets/img/solutions-hero-banner/Outplacement.jpg',
      paragraphs: [
        "Workforce realignments and restructuring require empathy, dignity, and proactive career coaching. Our Outplacement service provides comprehensive support for employees in transition, helping them find new opportunities and move forward in their careers.",
        "Backed by our executive search heritage and extensive hiring corporate network, we empower transitioning personnel with resume repositioning, interview coaching, and direct executive network introductions.",
        "Demonstrate compassionate corporate leadership while preserving team morale and mitigating reputational exposure."
      ],
      whyItWorks: [
        {
          title: 'Protects your Brand',
          description: 'Sends a strong message of care and responsibility during workforce transitions, safeguarding your reputation.',
          icon: <Shield className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Supports Future Hiring',
          description: 'Alumni are more likely to become brand advocates or even return as boomerang hires, keeping your talent ecosystem positive.',
          icon: <Users className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Reduces Legal & Reputational Risk',
          description: 'Professionally managed exits reduce friction, minimize backlash, and ensure compliance.',
          icon: <CheckCircle className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'One-on-One Career Coaching',
          description: 'Dedicated guidance from seasoned talent advisors on CV refinement, personal branding, and career pivots.',
          icon: <Sparkles className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Executive Network Exposure',
          description: "Leverages EMA Partners' international leadership reach to connect talent with active market openings.",
          icon: <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
        },
        {
          title: 'Governance You Can Trust',
          description: 'Transparent reporting to HR leaders on employee progression, interviews, and successful re-placements.',
          icon: <BarChart className="w-6 h-6 text-[#FF7D04]" />
        }
      ],
      whatYoullExperience: [
        {
          title: 'Maturity-First Blueprint',
          description: 'Empathetic intake process assessing each transitioning employee’s strengths, goals, and target roles.',
          icon: <Layers className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Human + Machine Advantage',
          description: 'AI resume optimization and matching algorithms paired with dedicated executive coaches.',
          icon: <Cpu className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Live Insight & Governance',
          description: 'Confidential progress tracking keeping organizational leaders informed on transition velocity.',
          icon: <BarChart className="w-6 h-6 text-[#019ECA]" />
        },
        {
          title: 'Scale & Improve Continuously',
          description: 'Holistic career transition workshops designed for small executive teams or large enterprise ramp-downs.',
          icon: <TrendingUp className="w-6 h-6 text-[#019ECA]" />
        }
      ],
      ctaTitle: 'Need compassionate outplacement advisory?',
      ctaText: 'Support your alumni with dignity, coaching, and real career mobility.'
    }
  };

  const currentServiceKey = Object.keys(servicesConfig).includes(currentView) 
    ? currentView 
    : 'enterprise-rpo';

  const data = servicesConfig[currentServiceKey];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden bg-[#0B3041]">
        <img
          src={data.heroBanner}
          alt={data.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3041]/90 via-[#0B3041]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF7D04] text-white text-xs font-bold uppercase tracking-wider mb-4">
              {data.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-lg max-w-xl font-medium">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Overview */}
      <section className="py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3041] tracking-tight leading-tight mb-6">
              <b>{data.title}:</b> {data.subtitle}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#0B3041]/85 leading-relaxed font-normal">
              {data.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why It Works (6 Benefit Cards) */}
      <section className="py-16 sm:py-24 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight">
              Why It Works
            </h2>
            <div className="w-16 h-1 bg-[#FF7D04] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.whyItWorks.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7D04]/10 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3041] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#0B3041]/80 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. What You'll Experience (4 Cards) */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3041] tracking-tight">
              What You'll Experience
            </h2>
            <div className="w-16 h-1 bg-[#FF7D04] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whatYoullExperience.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50/70 rounded-3xl p-7 border border-gray-100 hover:border-[#019ECA] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#019ECA]/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B3041] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0B3041]/80 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-[#0B3041] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {data.ctaTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/85">
                {data.ctaText}
              </p>
            </div>
            <div className="flex-none">
              <button
                onClick={onTalkToExpert}
                className="clarity-hero-button inline-flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;

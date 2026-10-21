import { CandidateSignal } from '../types';

export const simulationRoles = [
  {
    roleQuery: 'Principal Low-Latency C++ Engineer',
    targetBudget: '₹95L - ₹1.3Cr',
    slaTarget: '6h 40m',
    matchedCandidates: [
      {
        name: 'Arjun R.',
        score: 99.2,
        role: 'Senior Staff Systems Engineer',
        experience: '9.5 yrs',
        tags: ['Kernel Bypass', 'Lock-Free Queues', 'FPGA Interfacing', 'Ex-Goldman/Tower'],
        previousCompanies: ['Top HFT Desk', 'Citadel Securities alum'],
        availability: '15 Days (Notice buyout negotiable)',
        currentLocation: 'Bengaluru (Open to relocation / Hybrid)',
        skills: [
          { name: 'Modern C++ (C++20)', level: 98 },
          { name: 'Solarflare OpenOnload', level: 96 },
          { name: 'Linux CPU Pinning/NUMA', level: 95 },
          { name: 'SIMD AVX-512', level: 92 }
        ],
        verifiedBadges: ['Top 0.5% CodeSignal', 'Direct Codebase Audit: Passed', 'Background Cleared'],
        summary: 'Achieved 420ns wire-to-wire trade gateway execution on CME and NSE protocols. Architected zero-copy circular queues.'
      },
      {
        name: 'Devika M.',
        score: 97.8,
        role: 'Low-Latency C++ / Systems Developer',
        experience: '8.0 yrs',
        tags: ['Network Stack Optimization', 'Multithreading', 'C++17/20', 'FPGA Drivers'],
        previousCompanies: ['Jane Street collaborator', 'Tier 1 Fintech'],
        availability: 'Immediate (Gardening leave finished)',
        currentLocation: 'Gurugram / Hybrid',
        skills: [
          { name: 'Low-Latency C++', level: 96 },
          { name: 'DPDK & Kernel Bypass', level: 94 },
          { name: 'System Performance Tuning', level: 93 },
          { name: 'Memory Hierarchy Optimization', level: 91 }
        ],
        verifiedBadges: ['StrydzAI Deep Signal: 98th Percentile', 'Verified Reference Checks'],
        summary: 'Specialized in microsecond order matching engines, lockless memory allocators, and kernel bypass TCP stacks.'
      }
    ]
  },
  {
    roleQuery: 'Staff GenAI & LLM Infrastructure Lead',
    targetBudget: '₹80L - ₹1.1Cr',
    slaTarget: '7h 15m',
    matchedCandidates: [
      {
        name: 'Rohan V.',
        score: 98.7,
        role: 'Staff ML Infrastructure Engineer',
        experience: '8 yrs',
        tags: ['Distributed PyTorch', 'vLLM', 'CUDA Kernels', 'Triton', 'Megatron-LM'],
        previousCompanies: ['US GenAI Unicorn', 'IIT Bombay'],
        availability: '30 Days',
        currentLocation: 'Bengaluru / Remote',
        skills: [
          { name: 'LLM Distributed Inference', level: 99 },
          { name: 'FlashAttention / Triton', level: 96 },
          { name: 'Kubernetes GPU Slicing', level: 94 },
          { name: 'KV Cache Optimization', level: 93 }
        ],
        verifiedBadges: ['NeurIPS Contributor', 'Strydz Verified Signal', 'Tech Leader Reference'],
        summary: 'Reduced inference latency by 64% using custom Triton flash-decoding kernels for 70B parameter models.'
      },
      {
        name: 'Priyanka S.',
        score: 96.4,
        role: 'Lead AI Systems Architect',
        experience: '7.2 yrs',
        tags: ['TensorRT-LLM', 'Slurm / Ray', 'Pipeline Parallelism', 'Open-Source AI'],
        previousCompanies: ['BigTech R&D', 'IISc'],
        availability: '30 Days',
        currentLocation: 'Hyderabad / Bengaluru',
        skills: [
          { name: 'Ray / Slurm Orchestration', level: 95 },
          { name: 'Distributed Fine-tuning', level: 94 },
          { name: 'Model Quantization (FP8/AWQ)', level: 92 },
          { name: 'Inference Serving at Scale', level: 91 }
        ],
        verifiedBadges: ['GitHub Star Contributor', 'Top Tier Evaluated'],
        summary: 'Architected foundation model evaluation pipelines processing 20M tokens/day with automated drift detection.'
      }
    ]
  },
  {
    roleQuery: 'Managing Director & Head of GCC Engineering',
    targetBudget: 'Executive Retained',
    slaTarget: '12h 00m',
    matchedCandidates: [
      {
        name: 'Suresh K.',
        score: 97.5,
        role: 'VP & Head of Technology Center',
        experience: '22 yrs',
        tags: ['1500+ Org Scale', 'Cloud Modernization', 'US Executive Board Direct', 'GCC Setup'],
        previousCompanies: ['Global Tier-1 Bank GCC', 'Top Tech Multinationl'],
        availability: 'Confidential Search (Executive Retainer)',
        currentLocation: 'Hyderabad / Bengaluru',
        skills: [
          { name: 'Enterprise Strategy & Governance', level: 98 },
          { name: 'Large-scale Talent Scaling', level: 97 },
          { name: 'Global Stakeholder Alignment', level: 96 },
          { name: 'P&L Optimization ($40M+)', level: 95 }
        ],
        verifiedBadges: ['Executive Board Endorsed', 'Strydz Partner Vetted', '100% Confidential'],
        summary: 'Grew India GCC from 120 to 1,450 engineers over 4 years. Drove zero-regrettable attrition and global innovation patents.'
      }
    ]
  }
];

import React from 'react';

export const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          
          {/* Left: Interactive Animated Talent Network Graphic SVG */}
          <div className="w-full relative">
            <svg viewBox="0 0 520 420" aria-label="Talent network graphic" className="w-full h-auto drop-shadow-md">
              <defs>
                <radialGradient id="rg">
                  <stop offset="0" stopColor="#e2b66b" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#e2b66b" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#e2b66b" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ambient radial background */}
              <circle cx="260" cy="210" r="200" fill="url(#rg)" />

              {/* Static Base Structure */}
              <g stroke="#e2b66b" strokeOpacity="0.35" fill="none">
                <circle cx="260" cy="210" r="90" />
                <path d="M260 210L110 120M260 210L420 110M260 210L440 270M260 210L120 300M260 210L260 50M260 210L270 380" strokeDasharray="3 3" />
              </g>

              {/* Rotating Outer Dashed Orbital Ring */}
              <g className="animate-orbit-cw">
                <circle cx="260" cy="210" r="150" stroke="#d2a24c" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6 8" fill="none" />
                <circle cx="260" cy="60" r="4" fill="#a8772a" />
                <circle cx="260" cy="360" r="4" fill="#a8772a" />
                <circle cx="110" cy="210" r="4" fill="#14a58c" />
                <circle cx="410" cy="210" r="4" fill="#14a58c" />
              </g>

              {/* Rotating Inner Counter-Clockwise Orbital Particles */}
              <g className="animate-orbit-ccw">
                <circle cx="260" cy="210" r="105" stroke="#e2b66b" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 6" fill="none" />
                <circle cx="334" cy="136" r="3" fill="#e2b66b" />
                <circle cx="186" cy="284" r="3" fill="#e2b66b" />
              </g>

              {/* Center 3D Isometric Cube with Levitation */}
              <g style={{ animation: 'floatSlow 6s ease-in-out infinite' }}>
                <path d="M260 160l45 26v52l-45 26-45-26v-52z" fill="#0e1830" stroke="url(#gg)" strokeWidth="3" />
                <path d="M260 212l45-26M260 212l-45-26M260 212v52" stroke="url(#gg)" strokeWidth="2.5" />
              </g>

              {/* Talent Nodes with Pulse Glow */}
              <g className="animate-node-pulse">
                <circle cx="110" cy="120" r="24" fill="#6b4417" stroke="#c8964a" strokeWidth="2" />
                <circle cx="420" cy="110" r="24" fill="#146b5d" stroke="#3ec9b0" strokeWidth="2" />
                <circle cx="440" cy="270" r="24" fill="#2b3a9c" stroke="#7a8cff" strokeWidth="2" />
                <circle cx="120" cy="300" r="24" fill="#8c2c4d" stroke="#e07a9a" strokeWidth="2" />
                <circle cx="260" cy="50" r="20" fill="#2b3a9c" stroke="#7a8cff" strokeWidth="1.5" />
                <circle cx="270" cy="380" r="20" fill="#146b5d" stroke="#3ec9b0" strokeWidth="1.5" />
              </g>

              {/* White Silhouettes Inside Nodes */}
              <g fill="#fff" opacity="0.92">
                <circle cx="110" cy="114" r="7" />
                <path d="M96 134c1-8 6-11 14-11s13 3 14 11z" />
                <circle cx="420" cy="104" r="7" />
                <path d="M406 124c1-8 6-11 14-11s13 3 14 11z" />
                <circle cx="440" cy="264" r="7" />
                <path d="M426 284c1-8 6-11 14-11s13 3 14 11z" />
                <circle cx="120" cy="294" r="7" />
                <path d="M106 314c1-8 6-11 14-11s13 3 14 11z" />
              </g>
            </svg>
          </div>

          {/* Right: Content & Checklist */}
          <div>
            <div className="eyebrow-text">Why Strydz</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-1px] leading-[1.2] text-[#101a33] mb-4">
              A smarter alternative to <span className="g">job boards</span>
            </h2>
            <p className="text-[#5f6679] text-base font-light leading-relaxed max-w-[580px] mb-8">
              Stop sifting through thousands of resumes. StrydzAI reads, ranks and verifies candidates so you only meet people who fit.
            </p>
            <ul className="space-y-4">
              {[
                "Pre-screened, verified developers, no fake resumes",
                "98% match rate across skills, stack and seniority",
                "Shortlist in 4 days, first profiles in 8 hours",
                "Confidential search for stealth and leadership roles"
              ].map((item, idx) => (
                <li 
                  key={idx}
                  className="flex items-center gap-3.5 text-[15px] font-normal text-[#101a33] p-2.5 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-xs group cursor-default"
                >
                  <span className="w-7 h-7 rounded-full bg-[rgba(226,182,107,0.18)] text-[#a8772a] grid place-items-center text-xs font-bold flex-none group-hover:scale-110 group-hover:bg-[#a8772a] group-hover:text-white transition-all">
                    ✓
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;

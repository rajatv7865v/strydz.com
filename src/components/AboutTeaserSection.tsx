import React from 'react';

interface AboutTeaserSectionProps {
  onReadMore: () => void;
}

export const AboutTeaserSection: React.FC<AboutTeaserSectionProps> = ({ onReadMore }) => {
  return (
    <section className="about-us-section py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Content Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF7D04] mb-2">
              About us
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B3041] leading-[1.25] tracking-tight">
              Built on Experience. <br /> Driven by Intelligence.
            </h2>

            <div className="mt-5 space-y-4 text-sm sm:text-base text-[#0B3041]/85 font-normal leading-relaxed">
              <p>
                Strydz - a green-tree company  (JD Global) is the Talent-Solutions arm of{' '}
                <a 
                  href="https://www.emapartners.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-[#0B3041] underline hover:text-[#FF7D04] transition-colors"
                >
                  EMA Partners India Ltd
                </a>
                . The first listed global executive search firm in India.
              </p>
              
              <p>
                For over two decades, we've enabled organizations across India, APAC, and the Middle East to find the right talent faster and smarter. Today, we combine this legacy with cutting-edge AI and high-touch human expertise to deliver outcomes that matter.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onReadMore}
                className="primary-cta group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0B3041] text-white font-medium hover:bg-[#14465d] transition-all"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 24 17"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
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
          </div>

          {/* Image Right */}
          <div>
            <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100">
              <img
                src="https://jamesdouglasglobal.com/assets/img/about-us-img.jpg"
                alt="About Strydz - a green-tree company "
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTeaserSection;

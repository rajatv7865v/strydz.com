import React, { useState } from 'react';
import { JDView } from '../types';

interface JDTabSectionProps {
  onSelectService: (service: JDView) => void;
}

interface TabItem {
  id: string;
  name: string;
  view: JDView;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const JDTabSection: React.FC<JDTabSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState('enterprise-rpo');

  const tabs: TabItem[] = [
    {
      id: 'enterprise-rpo',
      name: 'Enterprise RPO',
      view: 'enterprise-rpo',
      title: 'Enterprise RPO',
      subtitle: 'End-to-end recruitment ownership engineered for speed, scale & certainty',
      description: "When talent needs are complex, dispersed, or constantly evolving, Strydz - a green-tree company 's Enterprise RPO becomes an extension of your Talent Acquisition function, taking complete accountability for every hiring stage across functions, geographies, and talent types.",
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Enterprice RPO.jpg',
    },
    {
      id: 'project-rpo',
      name: 'Project RPO',
      view: 'project-rpo',
      title: 'Project RPO',
      subtitle: 'Flexible recruitment solutions for specific projects and initiatives',
      description: 'Our Project RPO service delivers targeted recruitment support for specific initiatives, helping you scale your hiring efforts efficiently while maintaining quality and speed.',
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Project RPO copy.jpg',
    },
    {
      id: 'process-rpo',
      name: 'Process RPO',
      view: 'process-rpo',
      title: 'Process RPO',
      subtitle: 'Streamlined recruitment processes for enhanced efficiency',
      description: 'Our Process RPO service optimizes your recruitment workflows, implementing best practices and technology to improve efficiency and candidate experience.',
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Process RPO.jpg',
    },
    {
      id: 'cloud-rpo',
      name: 'Cloud RPO',
      view: 'cloud-rpo',
      title: 'Cloud RPO',
      subtitle: 'A cloud-based AI powered solution for the AI world.',
      description: 'An RPO solution deployed fast and on a platform without dependencies on high number of resources, technology integrations and complex contracts.',
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Cloud RPO.jpg',
    },
    {
      id: 'source-screen',
      name: 'Source & Screen',
      view: 'source-screen',
      title: 'Source & Screen',
      subtitle: 'Building Pipelines That Deliver',
      description: "JD Global's Source & Screen RPO provides a flexible, scalable solution to fill your funnel with qualified candidates quickly and effectively.",
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Source & Screen.jpg',
    },
    {
      id: 'outplacement',
      name: 'Outplacement',
      view: 'outplacement',
      title: 'Outplacement',
      subtitle: 'Support for transitioning employees',
      description: 'Our Outplacement service provides comprehensive support for employees in transition, helping them find new opportunities and move forward in their careers.',
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Outplacement.jpg',
    },
    {
      id: 'flex-team',
      name: 'Flex Team',
      view: 'flex-team',
      title: 'Flex Team',
      subtitle: 'Workforce On Demand',
      description: "JD Global's Flex Team solutions offer you the agility to access skilled talent precisely when and where you need it.",
      image: 'https://jamesdouglasglobal.com/assets/img/solutions-tab-images/Matchcore.jpg',
    },
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="tab-section py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Tab Navigation Strip */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex overflow-x-auto no-scrollbar justify-between items-center space-x-4 sm:space-x-6 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`toggle-tab-btn flex-1 min-w-[120px] text-center ${
                  activeTab === tab.id ? 'toggle-tab-btn-active font-bold text-[#0B3041]' : 'text-[#0B3041]/70'
                }`}
              >
                <span className="line"></span>
                <span className="text-sm sm:text-base">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className="mt-6 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Image Column */}
            <div className="order-1 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-[16/10] max-h-[380px]">
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  onError={(e) => {
                    // Fallback to unsplash high quality office image
                    e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>
            </div>

            {/* Info Column */}
            <div className="order-2 lg:order-2 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B3041] tracking-tight">
                {currentTab.title}
              </h3>
              
              <p className="text-base sm:text-lg font-semibold text-[#0B3041] leading-snug">
                {currentTab.subtitle}
              </p>
              
              <p className="text-sm sm:text-base text-[#0B3041]/90 leading-relaxed font-normal">
                {currentTab.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectService(currentTab.view)}
                  className="primary-cta inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0B3041] text-white font-medium hover:bg-[#14465d] transition-all group"
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

          </div>
        </div>

      </div>
    </section>
  );
};

export default JDTabSection;

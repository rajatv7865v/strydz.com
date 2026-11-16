import React from 'react';
import { JDView } from '../types';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigate: (view: JDView) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy', onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'terms'>(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-80 overflow-hidden bg-jdNavy">
        <img
          src="https://jamesdouglasglobal.com/assets/img/banners/terms-and-condition-hero-section.jpg"
          alt="Legal - Strydz - a green-tree company "
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            // fallback if remote image fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jdNavy/90 via-jdNavy/60 to-transparent flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-jdOrange/20 text-jdOrange text-xs font-semibold tracking-wider uppercase mb-3">
              Legal & Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </h1>
            <p className="text-gray-300 text-sm md:text-base mt-2 max-w-2xl">
              Strydz - a green-tree company  is committed to transparency, data protection, and maintaining the highest standards of professional recruitment ethics.
            </p>
          </div>
        </div>
      </section>

      {/* Tab bar */}
      <div className="border-b border-gray-200 bg-gray-50 sticky top-20 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
          <button
            onClick={() => {
              setActiveTab('privacy');
              onNavigate('privacy');
            }}
            className={`py-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'privacy'
                ? 'border-jdOrange text-jdNavy'
                : 'border-transparent text-gray-500 hover:text-jdNavy'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => {
              setActiveTab('terms');
              onNavigate('terms');
            }}
            className={`py-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'terms'
                ? 'border-jdOrange text-jdNavy'
                : 'border-transparent text-gray-500 hover:text-jdNavy'
            }`}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-gray-700 leading-relaxed space-y-8">
        {activeTab === 'privacy' ? (
          <article className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-jdNavy">Privacy Policy</h2>
            <p className="text-base text-gray-600">
              This policy describes the types of personal data that we collect, explains why and how we collect personal data, explains how we use that personal data, and sets out our legal basis for using the personal data that we collect.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Where do we collect personal data about you from?</h3>
              <p>We collect personal data about you from various different sources:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong className="text-jdNavy">Directly from you:</strong> This is information you provide while searching for a new position and/or during the various stages of the recruitment process.
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Through publicly available sources. We use the following public sources:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Internet search engines such as Google</li>
                <li>From an agent/third party acting on your behalf (e.g. Outplacement Company)</li>
                <li>By reference or word of mouth. For example, you may be recommended by a former colleague or a friend.</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Information Assessment & Usage</h3>
              <p>
                We collect the information necessary in order that we may be able to assess your suitability as a potential candidate when conducting executive search assignments and further information needed to assess your eligibility through the different stages of the search process. The type of information we collect includes details of your career history, employment, your CV, educational records, identification documents, and references.
              </p>
              <p>
                We may also collect sensitive personal data about you in certain specific circumstances. We only collect sensitive personal data from you, and further process this data, where you have given your explicit consent.
              </p>
              <p>
                We use your personal data to evaluate whether the specific role we are handling in our executive search assignment could be one that would match your skills, experience, and aspirations. We will initially collect basic information on you such as contact details, job role, and experience. This basic information may then be passed on to the client who has engaged us. If your skills and experience suggest that you may be a good fit for the role, then we will contact you to invite you for an interview. At that stage we will collect further information from you. If chosen by the client and proceeding to the next stage, we will collect more information from you at the interview (or equivalent) stage and onwards.
              </p>
              <p>
                Your personal data may be shared with the client who has engaged us to assist in the search to fill a particular role. This is the search that we will contact you about, to see if the role matches your skills, experience, and aspirations. We may also conduct checks on you to verify the information you have provided.
              </p>
            </div>
          </article>
        ) : (
          <article className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-jdNavy">Terms and Conditions</h2>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-jdNavy">
              This website is owned and maintained by Strydz - a green-tree company  (JDG).
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Accessing the Site</h3>
              <p>
                Access to the Site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on the Site without notice (see below). We will not be liable if for any reason the Site is unavailable at any time or for any period.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Changes to the Site</h3>
              <p>
                We aim to update the Site regularly, and may change the content at any time. If the need arises, we may suspend access to the Site, or close it indefinitely.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Third-Party Links & Disclaimers</h3>
              <p>
                Third-party links are provided as a convenience to our users. JDG does not control and is not responsible for any of these sites or their content. JDG cannot be responsible for those websites and their content, which are beyond JDG’s control, and JDG does not approve such linked websites, nor does JDG make any representation as to their quality, suitability, functionality or legality. You are responsible for determining the safety or validity of any third-party website.
              </p>
              <p>
                JDG protects its reputation and trademarks and JDG reserves the right to request removal of any link to our website.
              </p>
              <p className="font-semibold text-jdNavy">
                The following web link activities are explicitly prohibited by JDG and may present trademark and copyright infringement issues:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Links that involve unauthorized use of our logo</li>
                <li>A form of link that disguises the URL and/or bypasses the homepage or pages containing the entity copyright, legal disclaimer and online policy statement.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Prohibited Uses</h3>
              <p>You may use the Site only for lawful purposes. You may not use the Site:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>In any way that breaches any applicable local, national or international law or regulation</li>
                <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect</li>
                <li>For the purpose of harming or attempting to harm minors in any way</li>
                <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards</li>
                <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam)</li>
                <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Reliance on Information Posted</h3>
              <p>
                The information contained and accessed on the Site is provided by JDG for information only. Users are hereby placed under notice that they should take appropriate steps to verify such information. The information provided is not intended to replace or serve as substitute for any professional advice, consultation or service. You should consult a JDG professional in the respective professional area to obtain such specific guidance and further information on the services available.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Our Liability</h3>
              <p>
                JDG does not guarantee or warrant the Site will be uninterrupted, without delay, error-free, omission-free, or free of viruses. Therefore, the information is provided 'as is' without warranties of any kind, express or implied, including accuracy, timeliness and completeness. In no event shall JDG, or any JDG member firm, or any of their respective partners, principals, agents or employees, be liable for any direct, indirect, incidental, special, exemplary, punitive, consequential or other damages.
              </p>
              <p>
                To the extent permitted by law, JDG expressly excludes all conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-jdNavy">Notice of Intellectual Property Rights</h3>
              <p>
                As content on the Site (including any concepts, ideas, methods, procedures, processes, know-how, techniques, programs, publications, models, products templates, technologies, software, designs, art work, graphics and information on or described in the Site) may be copyrighted, proprietary and subject to intellectual property or other rights, any unauthorized use of any materials on the Site may violate copyright, trademark and other laws or applicable intellectual property or other rights.
              </p>
              <p>
                The JDG name and logo are registered trademarks of JDG. Unauthorized use of these marks requires express prior written permission from JDG.
              </p>
            </div>
          </article>
        )}

        <div className="pt-8 border-t border-gray-200 flex justify-between items-center text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="text-jdNavy font-semibold hover:text-jdOrange transition-colors flex items-center gap-2"
          >
            ← Return to Home
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="primary-cta px-4 py-2 text-xs font-semibold rounded-full"
          >
            Contact Legal Team
          </button>
        </div>
      </div>
    </div>
  );
};

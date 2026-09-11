import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Technology & Innovation | Zuricon Consult',
  description:
    'Digital twins, smart infrastructure, IoT, emerging technologies and innovation strategy.',
};

export default function TechnologyInnovation() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="heading-lg mb-6">Technology & Innovation</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Emerging technology solutions, innovation strategy and digital transformation for next-generation infrastructure and smart systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="heading-sm mb-6">Service Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We help organizations identify, evaluate and implement emerging technologies that create competitive advantage and drive operational transformation.
              </p>
            </div>

            <div>
              <h2 className="heading-sm mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Smart Infrastructure',
                    items: [
                      'Digital twins',
                      'Smart city solutions',
                      'IoT system design',
                      'Sensor networks',
                      'Real-time monitoring systems',
                    ],
                  },
                  {
                    title: 'Innovation Strategy',
                    items: [
                      'Technology roadmap development',
                      'Innovation strategy',
                      'Emerging tech assessment',
                      'Technology feasibility studies',
                      'Business case development',
                    ],
                  },
                  {
                    title: 'Technology Partner Identification',
                    items: [
                      'Technology vendor evaluation',
                      'Partner identification & selection',
                      'Technology integration',
                      'Implementation support',
                      'Technology due diligence',
                    ],
                  },
                  {
                    title: 'Emerging Technologies',
                    items: [
                      'Blockchain & distributed ledgers',
                      'Advanced analytics & AI',
                      'Edge computing',
                      'Quantum computing applications',
                      '5G & connectivity solutions',
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h3 className="heading-sm mb-4">Application Domains</h3>
              <ul className="space-y-2">
                {[
                  'Smart cities and urban infrastructure',
                  'Industrial IoT and manufacturing',
                  'Transportation and logistics networks',
                  'Energy grid modernization',
                  'Healthcare technology systems',
                  'Agricultural technology',
                  'Environmental monitoring',
                  'Infrastructure lifecycle management',
                ].map((domain, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Future-Proof Your Infrastructure</h2>
            <p className="text-lg text-blue-100 mb-8">
              Discuss emerging technology solutions and innovation strategies with Zuricon Consult.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Explore Technology Solutions
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

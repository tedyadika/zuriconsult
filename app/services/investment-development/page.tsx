import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Investment & Project Development | Zuricon Consult',
  description:
    'Investment opportunity identification, project origination, investment facilitation, market-entry support and strategic partnership.',
};

export default function InvestmentDevelopment() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="heading-lg mb-6">Investment & Project Development</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connecting investors with high-potential projects and opportunities in emerging markets, supported by comprehensive project development services.
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
                Zuricon Consult helps identify, develop and facilitate investments across infrastructure, technology and business sectors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work at the intersection of investors seeking compelling opportunities and project sponsors, entrepreneurs and public authorities looking for capital and strategic partners.
              </p>
            </div>

            <div>
              <h2 className="heading-sm mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Opportunity Identification',
                    items: [
                      'Investment opportunity identification',
                      'Market opportunity analysis',
                      'Sector scanning',
                      'Deal pipeline development',
                      'Feasibility assessment',
                    ],
                  },
                  {
                    title: 'Investment Facilitation',
                    items: [
                      'Investor matchmaking',
                      'Investment structuring',
                      'Term sheet advisory',
                      'Due diligence support',
                      'Transaction coordination',
                    ],
                  },
                  {
                    title: 'Project Development',
                    items: [
                      'Project origination',
                      'Project structuring and coordination',
                      'Market-entry support',
                      'Business model development',
                      'Strategic planning',
                    ],
                  },
                  {
                    title: 'Cross-Border Development',
                    items: [
                      'Cross-border business development',
                      'Strategic partner identification',
                      'Market entry strategy',
                      'Regulatory navigation',
                      'Partnership structuring',
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
              <h3 className="heading-sm mb-4">Sectors We Focus On</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Infrastructure',
                  'Energy',
                  'Technology',
                  'Digital Transformation',
                  'Food & Agriculture',
                  'Healthcare',
                  'Transport & Logistics',
                  'Financial Services',
                ].map((sector, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore an Investment?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Connect with Zuricon Consult to discuss opportunities or projects.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

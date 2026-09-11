import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'AI & Machine Learning | Zuricon Consult',
  description:
    'AI strategy, machine learning solutions, predictive analytics, AI automation and intelligent business processes.',
};

export default function AIMLService() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="heading-lg mb-6">AI & Machine Learning</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Strategic AI deployment and machine learning solutions that unlock data insights, automate operations and drive competitive advantage.
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
                We help organizations understand how artificial intelligence and machine learning can drive innovation, improve efficiency and create new business opportunities.
              </p>
            </div>

            <div>
              <h2 className="heading-sm mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'AI Strategy & Implementation',
                    items: [
                      'AI strategy development',
                      'AI use case identification',
                      'Model architecture design',
                      'Implementation roadmap',
                      'Governance frameworks',
                    ],
                  },
                  {
                    title: 'Machine Learning Solutions',
                    items: [
                      'Predictive analytics',
                      'Classification & clustering models',
                      'Recommendation systems',
                      'Natural language processing',
                      'Computer vision applications',
                    ],
                  },
                  {
                    title: 'AI Automation',
                    items: [
                      'Process automation with AI',
                      'Intelligent workflow systems',
                      'Chatbots & conversational AI',
                      'RPA integration',
                      'Document intelligence',
                    ],
                  },
                  {
                    title: 'Decision Support',
                    items: [
                      'Data-driven decision support',
                      'Business intelligence',
                      'Forecasting & scenario planning',
                      'Performance optimization',
                      'Risk analytics',
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
              <h3 className="heading-sm mb-4">Application Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Financial Services',
                  'Healthcare',
                  'Operations',
                  'Customer Analytics',
                  'Supply Chain',
                  'Risk Management',
                  'Marketing & Sales',
                  'Infrastructure & IoT',
                ].map((area, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{area}</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">Unlock AI Potential in Your Organization</h2>
            <p className="text-lg text-blue-100 mb-8">
              Discuss how AI and machine learning can drive your business forward.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Explore AI Opportunities
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

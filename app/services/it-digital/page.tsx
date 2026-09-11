import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'IT & Digital Transformation | Zuricon Consult',
  description:
    'Digital transformation, IT consulting, data engineering, business intelligence, process automation and enterprise platforms.',
};

export default function ITDigital() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="heading-lg mb-6">IT & Digital Transformation</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital transformation and IT consulting services to drive operational efficiency, data-driven decision-making and sustainable technology growth.
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
                We help organizations modernize their IT infrastructure, embrace digital innovation and leverage data and technology to improve operations and create competitive advantage.
              </p>
            </div>

            <div>
              <h2 className="heading-sm mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'IT Consulting',
                    items: [
                      'IT strategy & planning',
                      'Technology assessment',
                      'Infrastructure modernization',
                      'System architecture design',
                      'IT governance advisory',
                    ],
                  },
                  {
                    title: 'Data & Analytics',
                    items: [
                      'Data engineering',
                      'Data architecture design',
                      'Business intelligence',
                      'Analytics platform development',
                      'Data governance',
                    ],
                  },
                  {
                    title: 'Digital Transformation',
                    items: [
                      'Digital strategy',
                      'Process automation',
                      'Workflow optimization',
                      'Digital product development',
                      'Change management',
                    ],
                  },
                  {
                    title: 'Enterprise Platforms',
                    items: [
                      'Enterprise data platforms',
                      'Integration solutions',
                      'Cloud-native applications',
                      'Custom software development',
                      'System implementation',
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
              <h3 className="heading-sm mb-4">Use Cases</h3>
              <ul className="space-y-2">
                {[
                  'Modernizing legacy systems',
                  'Implementing data-driven decision making',
                  'Automating business processes',
                  'Building enterprise analytics platforms',
                  'Supporting digital business models',
                  'Improving customer experience through technology',
                ].map((useCase, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{useCase}</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business with Technology</h2>
            <p className="text-lg text-blue-100 mb-8">
              Connect with Zuricon Consult to discuss your digital transformation journey.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Let's Talk
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

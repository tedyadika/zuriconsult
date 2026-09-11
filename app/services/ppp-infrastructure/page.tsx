import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'PPP & Infrastructure Advisory | Zuricon Consult',
  description:
    'Public-private partnership advisory, infrastructure project development, PPP project identification, consortium formation and investment facilitation.',
};

export default function PPPInfrastructure() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="heading-lg mb-6">PPP & Infrastructure Advisory</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive support for identifying, structuring and developing
              public-private partnership and infrastructure projects across Europe and
              emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="heading-sm mb-6">Service Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Zuricon Consult specializes in helping governments, public authorities,
                investors and sponsors develop infrastructure projects that deliver value
                across public and private sectors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach combines deep infrastructure expertise with market knowledge
                and the ability to coordinate between public sector decision-makers,
                private investors, technical partners and financing institutions.
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h2 className="heading-sm mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'PPP Advisory',
                    items: [
                      'Public-private partnership advisory',
                      'PPP project identification',
                      'Project concept development',
                      'Project development support',
                      'Transaction advisory coordination',
                    ],
                  },
                  {
                    title: 'Infrastructure Development',
                    items: [
                      'Project pipeline development',
                      'Government engagement',
                      'Investor matchmaking',
                      'Consortium formation',
                      'Technology partner identification',
                    ],
                  },
                  {
                    title: 'Project Structuring',
                    items: [
                      'Project SPV structuring',
                      'Financial structuring support',
                      'Risk allocation',
                      'Procurement strategy',
                      'Contract advisory',
                    ],
                  },
                  {
                    title: 'Implementation Support',
                    items: [
                      'Infrastructure coordination',
                      'EPC partner identification',
                      'Stakeholder coordination',
                      'Milestone management',
                      'Finance coordination',
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

            {/* Project Types */}
            <div>
              <h2 className="heading-sm mb-6">Project Types We Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Energy infrastructure',
                  'Water & sanitation systems',
                  'Transport & logistics networks',
                  'Healthcare facilities',
                  'Digital infrastructure',
                  'Agricultural systems',
                  'Smart cities',
                  'Renewable energy projects',
                ].map((type, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Focus */}
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h3 className="heading-sm mb-4">Geographic Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                We work with European and emerging market partners to identify opportunities
                that benefit from cross-border expertise, investment and technology. Our
                network spans Slovakia, EU institutions, Kenya and East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Develop Your Infrastructure Project
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Connect with Zuricon Consult to discuss your project or opportunity.
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

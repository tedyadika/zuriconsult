import Link from 'next/link';
import { Users, Globe, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'About Zuriconsultant | Data Engineering & Cloud Migration',
  description:
    'Zuriconsultant combines data engineering expertise with practical cloud migration delivery.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-6">About Zuriconsultant</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A consulting and project-development company working at the intersection of
              infrastructure, investment and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-12">
            {/* Company Overview */}
            <div>
              <h2 className="heading-sm mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Zuriconsultant supports organizations,
                companies and project sponsors in identifying opportunities, developing
                projects and connecting the right technical, financial and strategic
                partners.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our capabilities span public-private partnerships, infrastructure
                development, investment facilitation, project development, IT, artificial
                intelligence, data engineering and cloud technologies.
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h2 className="heading-sm mb-4">Core Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Consulting & Project Development
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>PPP & infrastructure advisory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Investment facilitation & project structuring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Cross-border business development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Market-entry support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Stakeholder coordination</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Technology & Digital
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>IT consulting & digital transformation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Data engineering & analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>AI & machine learning solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Cloud architecture & migration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Technology strategy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company Model */}
            <div>
              <h2 className="heading-sm mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Zuriconsultant combines core leadership with a flexible network of
                technical specialists, industry experts, project developers and strategic
                partners. This allows us to assemble the appropriate expertise around the
                requirements of each engagement.
              </p>
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  The Zuriconsultant Network Model
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rather than maintaining a large permanent employee base, we leverage a
                  flexible network of specialists across infrastructure, engineering,
                  finance, technology, data, AI and business development. This enables us
                  to bring world-class expertise to each project while remaining lean and
                  responsive to client needs.
                </p>
              </div>
            </div>

            {/* Geographic Focus */}
            <div>
              <h2 className="heading-sm mb-4">Geographic Focus</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We work across Europe and emerging markets, with particular focus on
                connecting expertise and opportunities across:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Europe</h3>
                  <p className="text-gray-700">
                    Slovakia, EU member states, and broader European institutions and
                    capital.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Emerging Markets</h3>
                  <p className="text-gray-700">
                    East Africa, Kenya, and growth markets seeking European expertise and
                    investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-16">Leadership</h2>

          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Adika Stadevant Okelo
              </h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">
                Founder & Managing Consultant
              </p>
              <p className="text-gray-600">
                Leading Zuriconsultant's strategic direction and engaging across
                infrastructure, investment and technology sectors.
              </p>
            </div>
          </div>

          {/* Network Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-sm mb-4">Our Network</h3>
              <p className="text-gray-700 leading-relaxed">
                Depending on project requirements, Zuriconsultant works with specialists
                and partners across infrastructure, engineering, finance, technology, data,
                AI and business development. We bring together the right expertise for
                each engagement, drawing on a global network of advisers, technical experts
                and strategic partners.
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
              Let's Work Together
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Whether you're developing a project, seeking technical expertise, exploring
              investment opportunities or looking for partners in a new market.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Contact Zuriconsultant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

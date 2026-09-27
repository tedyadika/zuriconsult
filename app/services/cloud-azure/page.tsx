import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/services/cloud-azure' },
  title: 'Cloud Migration: Azure & AWS | Zuriconsultant',
  description:
    'Data engineering and cloud migration across Databricks, Microsoft Azure and AWS.',
};

export default function CloudAzure() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">
            <div className="max-w-3xl">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="heading-lg mb-6">Cloud migration: Azure & AWS</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Data engineering and cloud migration services across Databricks, Azure and AWS.
            </p>
            </div>
            <div
              className="min-h-[260px] rounded-3xl bg-cover bg-center shadow-xl"
              role="img"
              aria-label="Cloud data center infrastructure"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(120,53,15,.18), rgba(15,23,42,.38)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85')",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="heading-sm mb-6">Service Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We help organizations build dependable data platforms and migrate workloads
                to Azure or AWS without losing momentum.
              </p>
            </div>

            <div>
              <h2 className="heading-sm mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Data Engineering',
                    items: [
                      'Data platform architecture',
                      'ETL and ELT pipelines',
                      'Data quality and observability',
                      'Lakehouse implementation',
                      'Analytics-ready datasets',
                    ],
                  },
                  {
                    title: 'Cloud Migration',
                    items: [
                      'Migration assessment',
                      'Migration planning',
                      'Workload modernization',
                      'Data and platform migration',
                      'Cutover and stabilization',
                    ],
                  },
                  {
                    title: 'Databricks',
                    items: [
                      'Lakehouse architecture',
                      'Delta Lake and Unity Catalog',
                      'Workflows and orchestration',
                      'Performance optimization',
                      'Production enablement',
                    ],
                  },
                  {
                    title: 'Azure & AWS',
                    items: [
                      'Azure data services',
                      'AWS data services',
                      'Secure cloud foundations',
                      'Cost-aware architecture',
                      'Hybrid and multi-cloud delivery',
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
              <h3 className="heading-sm mb-4">Cloud platforms we support</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Microsoft Azure',
                  'Amazon Web Services',
                  'Databricks',
                  'Data lakes',
                  'Data warehouses',
                  'Cloud security',
                  'Cloud networking',
                  'Migration delivery',
                ].map((service, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">Move your data platform forward</h2>
            <p className="text-lg text-blue-100 mb-8">
              Connect with Zuriconsultant for a focused migration and data engineering plan.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Schedule a Cloud Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight, CircleDollarSign, MapPin, Tag, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Kenya Transmission Infrastructure PPP',
    sector: 'Energy / Power Transmission',
    category: 'Energy',
    location: 'Kenya',
    value: 'USD 165M',
    status: 'Project Development',
    description:
      'Transmission infrastructure opportunity focused on the development of new and associated transmission infrastructure under a public-private partnership structure. The opportunity is being evaluated for European EPC, technology, investment and financing participation.',
    opportunities: ['EPC and engineering participation', 'European transmission technology', 'Project finance / equity participation', 'Long-term PPP structure'],
    priority: true,
  },
  {
    title: 'Nyatike / Gogo Dam PPP',
    sector: 'Water / Irrigation / Energy',
    category: 'Water & Climate',
    location: 'Migori County, Kenya',
    value: 'USD 232M',
    status: 'Government PPP Pipeline',
    description:
      'Multipurpose infrastructure project combining water supply, irrigation development and hydropower generation. The project represents an opportunity for infrastructure developers, EPC contractors, technology providers and investors.',
    opportunities: ['Water infrastructure', 'Irrigation', 'Hydropower', 'EPC participation', 'Project finance'],
    priority: true,
  },
  {
    title: 'Meru Cancer Centre',
    sector: 'Healthcare',
    category: 'Healthcare',
    location: 'Meru County, Kenya',
    value: undefined,
    status: 'PPP Project Development',
    description:
      'Development of a specialised cancer treatment centre at Meru Level Five Referral Hospital, including diagnostic imaging, pathology, chemotherapy, radiotherapy and surgical services.',
    opportunities: ['Hospital development', 'Medical equipment', 'Healthcare technology', 'European healthcare operators', 'PPP / private investment'],
    priority: true,
  },
  {
    title: 'Konza Life Sciences Park',
    sector: 'Life Sciences / Healthcare / Manufacturing',
    category: 'Life Sciences',
    location: 'Konza Technopolis, Kenya',
    value: '~USD 217M',
    status: 'Investment / PPP Opportunity',
    description:
      'Large-scale life sciences development intended to support pharmaceutical manufacturing, diagnostics, research and biotechnology activities and attract international life-sciences companies.',
    opportunities: ['Pharmaceutical manufacturing', 'Biotechnology', 'Diagnostics', 'Research infrastructure', 'European technology and investment'],
    priority: true,
  },
  {
    title: 'Migori Renewable Energy Initiative',
    sector: 'Renewable Energy',
    category: 'Energy',
    location: 'Migori County, Kenya',
    value: undefined,
    status: 'County-Level Project Development',
    description:
      'Renewable-energy opportunity identified through engagement with county-level stakeholders, with potential for solar generation and associated energy infrastructure.',
    opportunities: ['Solar generation', 'EPC', 'Energy technology', 'Investment', 'Project development'],
    priority: false,
  },
  {
    title: 'Kakamega Healthcare Infrastructure Initiative',
    sector: 'Healthcare',
    category: 'Healthcare',
    location: 'Kakamega County, Kenya',
    value: undefined,
    status: 'County-Level Opportunity',
    description:
      'Healthcare infrastructure and medical-equipment opportunity focused on strengthening specialised healthcare capacity in Western Kenya.',
    opportunities: ['Medical equipment', 'Diagnostics', 'Hospital technology', 'Healthcare infrastructure', 'European suppliers and investors'],
    priority: false,
  },
  {
    title: 'Mau Summit – Eldoret – Malaba Corridor',
    sector: 'Transport / Logistics',
    category: 'Transport & Logistics',
    location: 'Kenya',
    value: '~USD 1B',
    status: 'PPP Pipeline',
    description:
      "Major transport and logistics infrastructure opportunity connecting Kenya's central transport corridor with Western Kenya and the regional East African market.",
    opportunities: ['Transport infrastructure', 'EPC', 'Logistics', 'Long-term PPP investment', 'European infrastructure participation'],
    priority: false,
  },
  {
    title: 'Mzima II Water Pipeline',
    sector: 'Water Infrastructure',
    category: 'Water & Climate',
    location: 'Kenya Coast',
    value: '~USD 358M',
    status: 'PPP Pipeline',
    description:
      'Large-scale water infrastructure project intended to strengthen water supply to the Coast region.',
    opportunities: ['Water infrastructure', 'EPC', 'Engineering', 'Project finance', 'Long-term infrastructure investment'],
    priority: false,
  },
];

const categories = {
  Energy: ['Transmission infrastructure', 'Solar power', 'Renewable energy'],
  'Water & Climate': ['Dams', 'Irrigation', 'Water supply', 'Desalination'],
  Healthcare: ['Hospitals', 'Cancer care', 'Medical equipment', 'Healthcare technology'],
  'Life Sciences': ['Pharmaceutical manufacturing', 'Biotechnology', 'Diagnostics', 'Research infrastructure'],
  'Transport & Logistics': ['Roads', 'Ports', 'Logistics infrastructure'],
};

const roleSteps = [
  ['01', 'Identify', 'We identify infrastructure opportunities through national PPP pipelines, investment programmes and direct engagement with counties and public-sector stakeholders.'],
  ['02', 'Develop', 'We support project concept development, feasibility, commercial structuring and PPP preparation.'],
  ['03', 'Mobilise', 'We identify and bring together European EPC contractors, technology providers, investors and strategic partners.'],
  ['04', 'Structure', 'We support appropriate PPP, SPV, consortium, DBFOT, BOOT or other project structures.'],
  ['05', 'Finance', 'We help connect projects with appropriate debt, equity, export-finance and development-finance partners.'],
  ['06', 'Implement', 'We remain involved through procurement, financial close, EPC mobilisation and implementation.'],
];

export default function ProjectsPipeline() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="bg-[#211b15] text-white">
        <div className="container-custom py-24 sm:py-32">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Projects &amp; Investment Pipeline
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            Kenya Project &amp; Investment Pipeline
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-200">
            We identify and develop infrastructure and investment opportunities in Kenya,
            working with public-sector stakeholders and connecting viable projects with
            European investors, EPC contractors, technology providers and financing partners.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-amber-100">
            Our role can span project identification, development, structuring, partner
            mobilisation, financing and implementation support.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4ef]">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Featured projects
              </p>
              <h2 className="heading-md">A curated infrastructure investment pipeline</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', ...Object.keys(categories)].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? 'border-amber-700 bg-amber-700 text-white'
                      : 'border-stone-300 bg-white text-gray-700 hover:border-amber-600 hover:text-amber-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className={`flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-xl ${
                  project.priority ? 'border-amber-300' : 'border-stone-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
                    {project.sector}
                  </span>
                  <TrendingUp className="shrink-0 text-amber-700" size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{project.title}</h3>
                <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-3">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-amber-700" />{project.location}</span>
                  {project.value && <span className="flex items-center gap-2"><CircleDollarSign size={16} className="text-amber-700" />{project.value}</span>}
                  <span className="flex items-center gap-2"><Tag size={16} className="text-amber-700" />{project.status}</span>
                </div>
                <p className="mt-6 leading-relaxed text-gray-600">{project.description}</p>
                <div className="mt-7 border-t border-stone-200 pt-6">
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">Opportunity</h4>
                  <ul className="grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                    {project.opportunities.map((opportunity) => <li key={opportunity}>• {opportunity}</li>)}
                  </ul>
                </div>
                <Link href="/contact" className="mt-8 inline-flex items-center font-semibold text-amber-700 hover:text-amber-900">
                  {project.priority || project.value ? 'Explore Opportunity' : 'Partner With Us'}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-10 text-xs leading-relaxed text-gray-500">
            Project information is indicative and based on publicly available investment/PPP
            information and ongoing project-development engagement. Inclusion on this website
            does not imply that Zuricon has been appointed as transaction adviser, mandated
            lead developer, procurement agent or representative of any government entity
            unless expressly stated. Project values, structures and timelines may change
            during development.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Project categories</p>
            <h2 className="heading-md">Sectors where we build opportunity</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-stone-200 bg-stone-50 p-7">
                <h3 className="mb-4 text-xl font-bold text-gray-900">{category}</h3>
                <ul className="space-y-2 text-gray-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#211b15] text-white">
        <div className="container-custom">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Our role</p>
          <h2 className="text-4xl font-bold sm:text-5xl">From Project Identification to Investment</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roleSteps.map(([number, title, description]) => (
              <div key={number} className="rounded-xl border border-white/15 bg-white/5 p-7">
                <span className="text-3xl font-bold text-amber-300">{number}</span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-stone-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-amber-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Have a project or capability to bring?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-amber-100">
            Zuricon does not simply advise on projects. We help identify opportunities,
            develop them, mobilise partners and connect them to capital and implementation capability.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-white px-7 py-4 font-semibold text-amber-800 hover:bg-amber-50">
            Partner With Us
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}

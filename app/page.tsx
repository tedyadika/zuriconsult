import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Handshake,
  Landmark,
  ShieldCheck,
  Target,
} from 'lucide-react';

export const metadata = {
  title: 'PPP & Infrastructure Investment in Kenya and Africa | ZuriConsult',
  description:
    'ZuriConsult develops public-private partnerships (PPPs), infrastructure projects and investment opportunities in Kenya and East Africa, connecting public authorities and project sponsors with international investors and delivery partners.',
  alternates: { canonical: '/' },
};

const projectJourney = [
  {
    number: '01',
    title: 'Identify',
    description:
      'We identify infrastructure opportunities with governments, counties, public authorities and project sponsors.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We assess the opportunity, market need, commercial potential, risks and potential delivery models.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We help transform an initial concept into a structured project through preparation, studies, business cases, technical requirements and financial analysis.',
  },
  {
    number: '04',
    title: 'Structure',
    description:
      'We help evaluate and structure PPP, JV, BOT, DBFOT, EPC + financing, SPV or other appropriate delivery models.',
  },
  {
    number: '05',
    title: 'Mobilise',
    description:
      'We connect projects with investors, EPC contractors, engineering firms, technology providers, financiers and strategic partners.',
  },
  {
    number: '06',
    title: 'Deliver',
    description:
      'We remain involved as appropriate through financing, implementation and stakeholder coordination, helping keep the project moving toward execution.',
  },
];

const alignedInterests = [
  {
    title: 'Aligned interests',
    description:
      'Where appropriate, our commercial involvement can be linked to successful project development.',
    icon: Target,
  },
  {
    title: 'Long-term engagement',
    description:
      'We aim to remain involved beyond the report, supporting partners through mobilisation, financing and implementation.',
    icon: Handshake,
  },
  {
    title: 'Execution mindset',
    description:
      'We ask whether a project can actually get built, financed and delivered — not only whether the analysis is complete.',
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17130f] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130f] via-[#17130f]/90 to-[#17130f]/35" />
        <div className="container-custom relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              ZuriConsult &nbsp;•&nbsp; PPP &amp; Project Development
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turning Infrastructure Opportunities Into Investable Projects
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-200 sm:text-2xl">
              We develop public-private partnerships (PPPs) and infrastructure investment
              opportunities in Kenya and East Africa, connecting public authorities and
              project sponsors with international investors, private capital, technical
              partners and delivery expertise.
            </p>
            <p className="mt-6 text-lg font-semibold text-amber-200">
              From project identification to project delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Discuss a Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="#approach"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Our Approach
              </a>
            </div>
            <p className="mt-12 max-w-2xl border-l-2 border-amber-400 pl-5 text-lg italic text-stone-200">
              We don&apos;t just advise on projects. We help build them — and put our
              interests alongside project success.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                The challenge
              </p>
              <h2 className="heading-md">Good infrastructure ideas often never become bankable projects.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Governments, counties, public authorities and project sponsors may have
                infrastructure needs, development priorities, land, assets or promising
                project concepts.
              </p>
              <p>
                But turning an opportunity into a viable project requires much more than an
                idea. It requires project preparation, technical development, commercial
                assessment, financial structuring, risk allocation, credible partners,
                investment, financing and execution capacity.
              </p>
              <p className="font-semibold text-gray-900">ZuriConsult helps bridge that gap.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="section-spacing bg-[#f7f4ef]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              What we do
            </p>
            <h2 className="heading-md mb-5">From Opportunity to Execution</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We stay close to the project as it moves from an early opportunity to a
              structured, partner-ready and financeable proposition.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-stone-300 shadow-xl md:grid-cols-2 lg:grid-cols-3">
            {projectJourney.map((step) => (
              <div key={step.number} className="bg-white p-8 sm:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-bold text-amber-600">{step.number}</span>
                  <ArrowRight className="text-stone-300" size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="leading-relaxed text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-2xl font-semibold text-gray-900">
            Our role does not end when the report is delivered.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-[#211b15] text-white">
        <div className="container-custom">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                Skin in the game
              </p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                We Have Skin in the Game
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-300">
                Traditional consultants are often paid for advice and leave once the
                report is delivered. Our model is different.
              </p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-stone-200">
              <p>
                Where appropriate, ZuriConsult seeks to participate in the
                project-development and commercial process alongside its partners.
              </p>
              <p>
                Our commercial arrangements may include development fees, success-based
                fees, equity participation or other structures depending on the project.
              </p>
              <div className="border-l-2 border-amber-400 pl-6 text-xl font-semibold text-white">
                This creates an incentive to ask: “Can this project actually get built?”
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {alignedInterests.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-white/15 bg-white/5 p-8">
                  <Icon className="mb-6 text-amber-300" size={30} />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-stone-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              What we bring together
            </p>
            <h2 className="heading-md mb-5">A project-development platform, not a report factory.</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              ZuriConsult coordinates the commercial, technical and institutional
              relationships required to move complex projects forward.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Public authorities', icon: Landmark },
              { title: 'Project sponsors', icon: Building2 },
              { title: 'Capital & financing', icon: CircleDollarSign },
              { title: 'Technical partners', icon: CheckCircle2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-stone-200 bg-stone-50 p-7">
                  <Icon className="mb-5 text-amber-700" size={30} />
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-amber-700 text-white">
        <div className="container-custom text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Have an infrastructure opportunity that needs to move?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-amber-100">
            Tell us where the opportunity stands. We can help assess the next step,
            identify the right partners and build a path toward execution.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 font-semibold text-amber-800 transition-colors hover:bg-amber-50"
          >
            Discuss a Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}

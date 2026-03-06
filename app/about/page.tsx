import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/Badge';
import { companyProfile } from '@/data/company';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about DeKoy Limited, including our company overview, vision, mission, values, and delivery approach.',
  openGraph: {
    title: 'About DeKoy',
    description: 'Company overview, vision, mission, values, delivery approach, and leadership.',
    images: ['/assets/og-about.svg']
  }
};

const values = [
  {
    title: 'Accountability',
    description: 'We own outcomes through transparent governance, clear roles, and measurable performance commitments.'
  },
  {
    title: 'Technical Excellence',
    description: 'Our teams apply practical engineering and operational judgment backed by structured quality controls.'
  },
  {
    title: 'Client Partnership',
    description: 'We align with client priorities and work as an extension of their delivery and operations teams.'
  },
  {
    title: 'Safety First',
    description: 'HSE principles guide every phase of our execution model, from planning through long-term support.'
  }
];

const timeline = ['Plan', 'Mobilize', 'Execute', 'Handover', 'Support'];

const leadership = [
  {
    name: 'Abiodun Adekoya',
    role: 'Managing Director',
    bio: 'Leads enterprise strategy, governance, technical execution and long-range partnerships across key sectors.'
  },
  {
    name: 'Modupe Davids',
    role: 'Director, Operations',
    bio: 'Oversees all operational execution, project controls, and quality assurance programs.'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="brand-band border-b border-gold/25 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-gold/45 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold">
              About DeKoy
            </span>
            <h1 className="mt-4 font-[var(--font-lora)] text-4xl text-white">Trusted Delivery, Built on Discipline</h1>
            <div className="brand-divider mt-4 max-w-xl" />
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              {companyProfile.overview}
            </p>
            <p className="mt-3 text-sm font-medium text-gold">Registration Number: {companyProfile.registrationNumber}</p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-gold/30 bg-white/5">
            <Image
              src="/assets/about-story.jpg"
              alt="Industrial construction silhouette used for DeKoy company story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-lora)] text-3xl text-ink">Vision and Mission</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Vision</p>
            <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">{companyProfile.vision}</p>
          </article>
          <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Mission</p>
            <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">{companyProfile.mission}</p>
          </article>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {companyProfile.serviceDomains.map((domain) => (
            <Badge key={domain} variant="outline">
              {domain}
            </Badge>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-ink">Target Customers</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {companyProfile.targetCustomers.map((segment) => (
              <div key={segment} className="rounded-lg border border-slate/10 bg-mist px-4 py-3">
                <p className="text-sm text-ink">{segment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-lora)] text-3xl text-ink">Our Values</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate/15 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate/10 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-lora)] text-3xl text-ink">Delivery Approach</h2>
          <p className="mt-2 text-sm text-slate">A structured lifecycle from planning through long-term operational support.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, index) => (
              <div key={item} className="rounded-xl border border-slate/15 bg-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Step {index + 1}</p>
                <p className="mt-1 text-lg font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">HSE and Quality Commitment</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
            Our teams follow documented HSE and quality practices, including task risk assessments, daily briefings, incident protocols, and quality signoff checkpoints throughout execution.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline">HSE Plan</Badge>
            <Badge variant="outline">Quality Manual</Badge>
            <Badge variant="outline">Audit Logs</Badge>
          </div>
        </article>

        <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">Leadership</h2>
          <div className="mt-4 space-y-4">
            {leadership.map((leader) => (
              <div key={leader.name} className="rounded-xl border border-slate/10 p-4">
                <p className="text-sm font-semibold text-ink">{leader.name}</p>
                <p className="text-xs text-accent">{leader.role}</p>
                <p className="mt-1 text-sm text-slate">{leader.bio}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

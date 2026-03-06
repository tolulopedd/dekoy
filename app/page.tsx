import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/Badge';
import { DivisionCard } from '@/components/DivisionCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ProjectCard } from '@/components/ProjectCard';
import { RequestQuoteButton } from '@/components/RequestQuoteButton';
import { Reveal } from '@/components/Reveal';
import { companyProfile } from '@/data/company';
import { faqs } from '@/data/faqs';
import { landingDivisions } from '@/data/landingDivisions';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'DeKoy Limited is a diversified Nigerian company delivering integrated services across Real Estate, Engineering, Telecommunications & Information Technology, Project Management, and General Services.',
  openGraph: {
    title: 'DeKoy | Home',
    description:
      'Premium, trusted, and professional delivery across multi-sector integrated services.',
    images: ['/assets/og-home.svg']
  }
};

const hseBadges = ['HSE Policy Verified', 'Vendor Compliance Audited'];

const stats = [
  { label: 'Years of Delivery', value: '25+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'States Coverage in Nigeria', value: '36 States' },
  { label: 'Client Satisfaction', value: '98%*' }
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="texture-bg border-b border-gold/20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <Reveal>
            <Badge>DeKoy : Reg No: {companyProfile.registrationNumber}</Badge>
            <h1 className="mt-5 font-[var(--font-lora)] text-4xl font-black leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Complex Projects.
              <span className="block bg-gradient-to-r from-ink via-accent to-gold bg-clip-text text-transparent">
                Zero Compromise.
              </span>
              <span className="block">Proven Delivery.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              {companyProfile.overview}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RequestQuoteButton className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accentDark" />
              <Link
                href="/services"
                className="rounded-lg border border-ink/20 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
              >
                View Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative h-[380px] rounded-2xl bg-transparent sm:h-[450px]">
              <div className="pointer-events-none absolute inset-[8px] rounded-[14px] border-[1.5px] border-gold/80" />
              <div className="absolute inset-[18px] overflow-hidden rounded-[14px]">
                <Image
                  src="/assets/hero-main.jpg"
                  alt="Connected real estate environment with telecom and smart technology infrastructure"
                  fill
                  priority
                  className="object-cover brightness-[0.92] contrast-[1.06] saturate-[0.88] sepia-[0.12]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/22 via-transparent to-accent/20 mix-blend-multiply" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(231,194,104,0.22),transparent_42%)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-[var(--font-lora)] text-3xl text-ink">Our Divisions</h2>
              <p className="mt-2 w-full text-sm text-slate sm:text-base lg:whitespace-nowrap">
                Specialized teams delivering integrated solutions with strong governance, technical depth, and client-first execution.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {landingDivisions.map((division, index) => (
            <Reveal key={division.id} delay={index * 0.05}>
              <DivisionCard division={division} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate/10 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-[var(--font-lora)] text-3xl text-ink">Target Customers</h2>
            <p className="mt-2 w-full text-sm text-slate sm:text-base lg:whitespace-nowrap">
              We support organizations that require dependable technical delivery, project controls, and operational reliability.
            </p>
          </Reveal>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {companyProfile.targetCustomers.map((segment, index) => (
              <Reveal key={segment} delay={index * 0.04}>
                <article className="rounded-xl border border-gold/20 bg-white p-4 shadow-soft">
                  <p className="text-sm font-medium text-ink">{segment}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-band border-y border-gold/25 py-10 text-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-[var(--font-lora)] text-3xl text-ink">Featured Projects</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate sm:text-base">
                Recent case studies showing delivery depth across property, engineering, and telecom infrastructure.
              </p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-accent transition hover:text-accentDark">
              Browse all projects
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate/10 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="font-[var(--font-lora)] text-3xl text-ink">HSE, Quality & Compliance</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
              HSE and quality are embedded into our execution model from mobilization to handover. We maintain standardized reporting, documented controls, and clear accountability across teams.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {hseBadges.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-slate/10">
              <Image
                src="/assets/hse-compliance.jpg"
                alt="Corporate partners shaking hands with Africa operations map overlay"
                fill
                className="object-cover object-[center_78%] scale-[1.18]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-[var(--font-lora)] text-3xl text-ink">Client Testimonials</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.06}>
              <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
                <p className="text-sm leading-relaxed text-slate">"{testimonial.quote}"</p>
                <div className="mt-5 border-t border-slate/10 pt-4">
                  <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-xs text-slate">{testimonial.role}, {testimonial.company}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate/10 bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-[var(--font-lora)] text-3xl text-ink">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-slate">Delivery timelines, procurement, HSE, and post-handover support.</p>
          </Reveal>
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="brand-band border-y border-gold/25 py-14 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-[var(--font-lora)] text-3xl">Ready to discuss your next project?</h2>
            <p className="mt-2 text-sm text-slate-200 sm:text-base">
              Engage a trusted team for strategy, execution, and sustained operational value.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <RequestQuoteButton className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accentDark" />
            <Link
              href="/services"
              className="rounded-lg border border-gold/45 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

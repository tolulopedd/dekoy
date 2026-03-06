import type { Metadata } from 'next';
import { ServicesTabs } from '@/components/ServicesTabs';
import { RequestQuoteButton } from '@/components/RequestQuoteButton';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore DeKoy services across six divisions: Real Estate Development, Real Estate Agency, Engineering Services, Telecommunications, Information Technology, and Project Management.',
  openGraph: {
    title: 'DeKoy Services',
    description:
      'Service offerings for Real Estate Development, Real Estate Agency, Engineering Services, Telecommunications, Information Technology, and Project Management.',
    images: ['/assets/og-services.svg']
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="brand-band border-b border-gold/25 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <span className="inline-flex items-center rounded-full border border-gold/45 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold">
            Services
          </span>
          <h1 className="mt-4 font-[var(--font-lora)] text-4xl text-white">Services</h1>
          <div className="brand-divider mt-4 max-w-xl" />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            DeKoy provides specialized and cross-functional services through six core divisions, supported by great engineering experience, project management, and general services capabilities. Select a division to view specific offerings, capabilities, and typical deliverables.
          </p>
          <div className="mt-6">
            <RequestQuoteButton className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accentDark" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ServicesTabs />
      </section>
    </>
  );
}

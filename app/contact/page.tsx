import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact DeKoy to request a quote for Real Estate, Engineering, Telecommunications & IT, Project Management, and General Services.',
  openGraph: {
    title: 'Contact DeKoy',
    description: 'Submit your project requirements and request a quote.',
    images: ['/assets/og-contact.svg']
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="brand-band border-b border-gold/25 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <span className="inline-flex items-center rounded-full border border-gold/45 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold">
            Contact
          </span>
          <h1 className="mt-4 font-[var(--font-lora)] text-4xl text-white">Contact and Request a Quote</h1>
          <div className="brand-divider mt-4 max-w-xl" />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Share your project goals and scope. Our team will review your request and respond with next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <ContactForm />

        <aside className="space-y-6">
          <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-ink">Office and Contact</h2>
            <ul className="mt-3 space-y-3 text-sm text-slate">
              <li>
                <span className="block font-medium text-ink">Head Office</span>
                {siteConfig.addressLines.join(' ')}
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/-/g, '')}`} className="font-medium text-ink hover:text-accent">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                Instagram:{' '}
                <a
                  href={siteConfig.socials.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-ink hover:text-accent"
                >
                  {siteConfig.socials.instagramHandle}
                </a>
              </li>
              <li>
                Facebook:{' '}
                <a
                  href={siteConfig.socials.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-ink hover:text-accent"
                >
                  {siteConfig.socials.facebookName}
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate/15 bg-white p-4 shadow-soft">
            <h2 className="px-2 text-lg font-semibold text-ink">Map</h2>
            <div
              className="mt-3 flex h-64 items-center justify-center rounded-xl border border-dashed border-slate/30 bg-mist text-center text-sm text-slate"
              role="img"
              aria-label="Embedded map placeholder"
            >
              Embedded map placeholder
            </div>
          </article>
        </aside>
      </section>
    </>
  );
}

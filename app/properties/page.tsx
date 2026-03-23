import type { Metadata } from 'next';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export const metadata: Metadata = {
  title: 'Properties',
  description:
    'Browse DeKoy property listings for sale or rent, including residential opportunities in secure estates and strategic locations.',
  openGraph: {
    title: 'DeKoy Properties',
    description:
      'Available DeKoy property listings for sale or rent with shareable detail pages and direct enquiry options.',
    images: [properties[0]?.heroImage ?? '/assets/og-default.svg']
  }
};

export default function PropertiesPage() {
  return (
    <>
      <section className="brand-band border-b border-gold/25 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <span className="inline-flex items-center rounded-full border border-gold/45 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold">
            Properties
          </span>
          <h1 className="mt-4 font-[var(--font-lora)] text-4xl text-white">Properties for Sale or Rent</h1>
          <div className="brand-divider mt-4 max-w-xl" />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Explore current DeKoy property listings with strong estate positioning, quality finishing, and direct
            access to our sales team.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-[var(--font-lora)] text-3xl text-ink">Available Listings</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
              Explore current DeKoy property opportunities presented with clear specifications, location context, and direct enquiry details.
            </p>
          </div>
          <p className="text-sm font-medium text-accent">Current listing: {properties.length}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}

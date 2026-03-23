import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/Badge';
import { Icon } from '@/components/Icons';
import { properties } from '@/data/properties';
import { siteConfig } from '@/lib/site';

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return { title: 'Property Not Found' };
  }

  return {
    title: `${property.title} | Properties`,
    description: property.summary,
    openGraph: {
      title: `${property.title} | DeKoy Properties`,
      description: property.summary,
      images: [property.heroImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.title} | DeKoy Properties`,
      description: property.summary,
      images: [property.heroImage]
    }
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  const propertyUrl = `${siteConfig.url}/properties/${property.slug}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&z=15&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.mapQuery)}`;

  return (
    <>
      <section className="brand-band border-b border-gold/25 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>{property.status}</Badge>
              <Badge variant="outline">{property.propertyType}</Badge>
            </div>
            <h1 className="mt-4 font-[var(--font-lora)] text-4xl leading-tight text-white sm:text-5xl">
              {property.title} in {property.estate}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              {property.summary}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
              {property.highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-gold">{item.label}</p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-gold/30 bg-white/5 p-3 shadow-soft">
            <div className="relative h-full overflow-hidden rounded-[20px]">
              <Image
                src={property.heroImage}
                alt={property.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-ink">Property Overview</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">{property.overview}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate/10 bg-mist p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate/70">Location</p>
              <p className="mt-2 text-sm font-semibold text-ink">{property.location}</p>
            </div>
            <div className="rounded-xl border border-slate/10 bg-mist p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate/70">Title</p>
              <p className="mt-2 text-sm font-semibold text-ink">{property.titleDocument}</p>
            </div>
            <div className="rounded-xl border border-slate/10 bg-mist p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate/70">Shareable Link</p>
              <a
                href={propertyUrl}
                className="mt-2 block break-all text-sm font-semibold text-accent hover:text-accentDark"
              >
                {propertyUrl}
              </a>
            </div>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-ink">Property Features</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {property.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl border border-slate/10 bg-white p-4">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-slate">{feature}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-ink">Enquiries</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Reach out to schedule an inspection, request pricing, or discuss purchase steps for this property.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/-/g, '')}`}
                  className="block rounded-xl border border-slate/15 px-4 py-3 font-semibold text-ink transition hover:border-gold/40 hover:bg-mist"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className="block rounded-xl border border-slate/15 px-4 py-3 font-semibold text-ink transition hover:border-gold/40 hover:bg-mist"
              >
                {siteConfig.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accentDark"
              >
                Contact DeKoy
              </Link>
            </div>
            <div className="mt-5 rounded-xl border border-gold/20 bg-gold/8 p-4 text-sm text-slate">
              <p className="font-semibold text-ink">Socials</p>
              <p className="mt-2">Instagram: {siteConfig.socials.instagramHandle}</p>
              <p>Facebook: {siteConfig.socials.facebookName}</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate/15 bg-white shadow-soft">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-ink">Location Map</h2>
              <p className="mt-2 text-sm text-slate">Closest map reference for the property location.</p>
            </div>
            <iframe
              title={`Map showing ${property.estate}`}
              src={mapEmbedUrl}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 pt-4">
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-gold/60 hover:bg-gold/15"
              >
                Open in Google Maps
              </a>
            </div>
          </article>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-[var(--font-lora)] text-3xl text-ink">Gallery</h2>
            <p className="mt-2 text-sm text-slate">Interior and exterior views of the property.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {property.gallery.map((imagePath, index) => (
            <div key={imagePath} className="relative h-64 overflow-hidden rounded-xl border border-slate/15 bg-white">
              <Image
                src={imagePath}
                alt={`${property.title} gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

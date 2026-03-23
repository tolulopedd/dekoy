import Image from 'next/image';
import Link from 'next/link';
import { PropertyListing } from '@/lib/types';
import { Badge } from './Badge';

export function PropertyCard({ property }: { property: PropertyListing }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate/15 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-60 w-full">
        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{property.status}</Badge>
          <Badge variant="outline">{property.propertyType}</Badge>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-ink">{property.title}</h3>
          <p className="mt-2 text-sm text-slate">{property.summary}</p>
        </div>
        <div className="grid gap-3 text-sm text-slate sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate/70">Estate</p>
            <p className="mt-1 font-medium text-ink">{property.estate}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate/70">Title</p>
            <p className="mt-1 font-medium text-ink">{property.titleDocument}</p>
          </div>
        </div>
        <Link
          href={`/properties/${property.slug}`}
          className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accentDark"
        >
          View Property
        </Link>
      </div>
    </article>
  );
}

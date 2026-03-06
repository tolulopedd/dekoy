import { Division } from '@/lib/types';
import { Icon } from './Icons';

export function DivisionCard({ division }: { division: Division }) {
  return (
    <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/35">
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-gold/25 to-silver/40 p-3 text-accent">
        <Icon name={division.icon} className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-ink">{division.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{division.summary}</p>
    </article>
  );
}

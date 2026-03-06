import { Service } from '@/lib/types';
import { RequestQuoteButton } from './RequestQuoteButton';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-slate/15 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{service.shortDescription}</p>

      <div className="mt-5">
        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">Capabilities</h4>
        <ul className="mt-2 space-y-1 text-sm text-slate">
          {service.capabilities.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">Typical Deliverables</h4>
        <ul className="mt-2 space-y-1 text-sm text-slate">
          {service.deliverables.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <RequestQuoteButton
        divisionId={service.divisionId}
        className="mt-6 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink/90"
        label="Request quote"
      />
    </article>
  );
}

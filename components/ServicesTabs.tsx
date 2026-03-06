'use client';

import { useEffect, useMemo, useState } from 'react';
import { landingDivisions } from '@/data/landingDivisions';
import { services } from '@/data/services';
import { ServiceCard } from './ServiceCard';

export function ServicesTabs() {
  const [activeDivision, setActiveDivision] = useState(landingDivisions[0]?.id ?? '');

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (landingDivisions.some((division) => division.id === hash)) {
        setActiveDivision(hash);
      }
    };

    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, []);

  const filteredServices = useMemo(
    () => services.filter((service) => service.divisionId === activeDivision),
    [activeDivision]
  );
  const selectedDivision = useMemo(
    () => landingDivisions.find((division) => division.id === activeDivision),
    [activeDivision]
  );

  return (
    <section className="space-y-8" aria-label="Service categories and offerings">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Service divisions">
        {landingDivisions.map((division) => {
          const active = activeDivision === division.id;
          return (
            <button
              key={division.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`panel-${division.id}`}
              id={division.id}
              onClick={() => setActiveDivision(division.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active ? 'bg-ink text-white' : 'bg-mist text-slate hover:bg-slate/10 hover:text-ink'
              }`}
            >
              {division.name}
            </button>
          );
        })}
      </div>

      {selectedDivision ? (
        <article className="rounded-2xl border border-gold/25 bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">{selectedDivision.name}</h2>
          <p className="mt-2 text-sm text-slate">{selectedDivision.summary}</p>
          <p className="mt-2 text-sm text-slate">{selectedDivision.description}</p>
        </article>
      ) : null}

      <div
        role="tabpanel"
        id={`panel-${activeDivision}`}
        aria-labelledby={activeDivision}
        className="grid gap-6 lg:grid-cols-2"
      >
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

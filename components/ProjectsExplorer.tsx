'use client';

import { useMemo, useState } from 'react';
import { landingDivisions } from '@/data/landingDivisions';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsExplorer() {
  const [divisionFilter, setDivisionFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesDivision = divisionFilter === 'all' || project.divisionId === divisionFilter;
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesDivision && matchesSearch;
    });
  }, [divisionFilter, searchTerm]);

  return (
    <section className="space-y-6" aria-label="Projects and case studies">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate/15 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setDivisionFilter('all')}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
              divisionFilter === 'all' ? 'bg-ink text-white' : 'bg-mist text-slate'
            }`}
            aria-pressed={divisionFilter === 'all'}
          >
            All Divisions
          </button>
          {landingDivisions.map((division) => (
            <button
              key={division.id}
              type="button"
              onClick={() => setDivisionFilter(division.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                divisionFilter === division.id ? 'bg-ink text-white' : 'bg-mist text-slate'
              }`}
              aria-pressed={divisionFilter === division.id}
            >
              {division.name}
            </button>
          ))}
        </div>

        <label className="w-full max-w-sm" htmlFor="project-search">
          <span className="sr-only">Search projects</span>
          <input
            id="project-search"
            type="search"
            placeholder="Search by name, scope, or location"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-lg border border-slate/20 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate/25 bg-white p-8 text-center text-sm text-slate">
          No projects match your current filters.
        </div>
      )}
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { divisionLabels } from '@/lib/site';
import { Project } from '@/lib/types';
import { Badge } from './Badge';

export function ProjectCard({ project }: { project: Project }) {
  const categoryLabel = project.categoryLabel ?? divisionLabels[project.divisionId];

  return (
    <article className="overflow-hidden rounded-2xl border border-slate/15 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <Badge>{categoryLabel}</Badge>
        <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
        <p className="text-sm text-slate">{project.summary}</p>
        <div className="flex items-center justify-between text-xs text-slate">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-sm font-semibold text-accent transition hover:text-accentDark"
        >
          View Case Study
        </Link>
      </div>
    </article>
  );
}

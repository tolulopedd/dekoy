import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/Badge';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { divisionLabels } from '@/lib/site';

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} | DeKoy`,
      description: project.summary,
      images: [project.image]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectServices = services.filter((service) => project.servicesUsed.includes(service.id));
  const categoryLabel = project.categoryLabel ?? divisionLabels[project.divisionId];

  return (
    <>
      <section className="border-b border-slate/10 bg-ink py-14 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge>{categoryLabel}</Badge>
            <h1 className="mt-4 font-[var(--font-lora)] text-4xl">{project.name}</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-slate-300">
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/20">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="rounded-2xl border border-slate/15 bg-white p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-ink">Overview</h2>
          <p className="mt-3 text-sm text-slate sm:text-base">{project.summary}</p>

          <h3 className="mt-8 text-lg font-semibold text-ink">Scope</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {project.scope.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-ink">Solution</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">{project.solution}</p>

          <h3 className="mt-8 text-lg font-semibold text-ink">Outcomes</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <div key={outcome.label} className="rounded-xl border border-slate/10 bg-mist p-4">
                <p className="text-xl font-semibold text-accent">{outcome.value}</p>
                <p className="mt-1 text-xs text-slate">{outcome.label}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl border border-slate/15 bg-white p-6">
          <h2 className="text-lg font-semibold text-ink">Services Used</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {projectServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.divisionId}`}
                  className="text-accent underline-offset-2 transition hover:text-accentDark hover:underline"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-lora)] text-3xl text-ink">Gallery</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((imagePath, index) => (
            <div key={imagePath} className="relative h-56 overflow-hidden rounded-xl border border-slate/15 bg-white">
              <Image
                src={imagePath}
                alt={`${project.name} gallery image ${index + 1}`}
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

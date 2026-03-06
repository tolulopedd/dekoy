import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-start justify-center px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="mt-2 font-[var(--font-lora)] text-4xl text-ink">Page Not Found</h1>
      <p className="mt-3 max-w-xl text-sm text-slate sm:text-base">
        The page you requested does not exist or may have moved.
      </p>
      <Link href="/" className="mt-6 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white">
        Return Home
      </Link>
    </section>
  );
}

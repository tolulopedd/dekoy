import Image from 'next/image';
import Link from 'next/link';
import { companyProfile } from '@/data/company';
import { siteConfig } from '@/lib/site';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-gold/25 brand-band text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <section>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg border border-white/20">
              <Image
                src="/assets/dekoy-logo.jpg"
                alt="DeKoy Limited logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <h2 className="text-xl font-semibold">DeKoy Limited</h2>
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-200">
            Premium delivery partner across Real Estate, Engineering, Telecommunications & IT, Project Management, and General Services.
          </p>
        </section>
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-100 transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-100">
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/-/g, '')}`} className="transition hover:text-gold">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.addressLines.join(' ')}</li>
            <li>
              Instagram:{' '}
              <a
                href={siteConfig.socials.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold"
              >
                {siteConfig.socials.instagramHandle}
              </a>
            </li>
            <li>
              Facebook:{' '}
              <a
                href={siteConfig.socials.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold"
              >
                {siteConfig.socials.facebookName}
              </a>
            </li>
            <li>Registration No: {companyProfile.registrationNumber}</li>
          </ul>
        </section>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-slate-300 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} DeKoy Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Icon } from './Icons';
import { RequestQuoteButton } from './RequestQuoteButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-white/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to home page">
          <span className="relative h-11 w-11 overflow-hidden rounded-lg border border-slate/20 shadow-sm">
            <Image
              src="/assets/dekoy-logo.jpg"
              alt="DeKoy Limited logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight text-ink">DeKoy</span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-accent sm:block">
              Limited
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active ? 'bg-ink text-white' : 'text-slate hover:bg-mist hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <RequestQuoteButton
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accentDark"
          />
        </div>

        <button
          type="button"
          className="rounded-md border border-slate/30 p-2 text-slate md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <Icon name={isOpen ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-slate/15 bg-white md:hidden">
          <nav className="space-y-1 px-4 py-4" aria-label="Mobile Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    active ? 'bg-ink text-white' : 'text-slate hover:bg-mist hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <RequestQuoteButton
              className="mt-3 w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white"
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

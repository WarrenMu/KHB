'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/donate', label: 'Donate' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/grants', label: 'Grants' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-[var(--primary)]">
          <span className="text-2xl">🏀</span>
          <span className="hidden sm:inline">KHB</span>
          <span className="hidden md:inline text-[var(--muted)] font-normal">Kamwokya Hope Basketball</span>
        </Link>

        <button
          type="button"
          className="md:hidden rounded p-2 text-[var(--foreground)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={`absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-[var(--border)] bg-[var(--card)] p-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 ${open ? 'block' : 'hidden'}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 text-sm font-medium transition-colors md:px-4 ${
                  pathname === href
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-[var(--border)]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

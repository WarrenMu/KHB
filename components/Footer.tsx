import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="text-2xl">🏀</span>
              <span>Kamwokya Hope Basketball</span>
            </div>
            <p className="mt-2 max-w-sm text-sm opacity-90">
              Using sport and faith to transform lives in Kamwokya. Play. Hope. Believe.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick links</h3>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm opacity-90">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Kamwokya Hope Basketball. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

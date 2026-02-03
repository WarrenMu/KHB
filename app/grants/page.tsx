import BibleVerse from '@/components/BibleVerse';
import Link from 'next/link';

export default function Grants() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Grants</h1>
          <p className="mt-3 opacity-95">Funding opportunities for KHB programs.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--primary)]">Grant Support</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            We apply for grants from foundations, government, and international donors to expand our basketball and youth programs. If you are a funder interested in sport-for-development, youth, or faith-based initiatives in Uganda, we would love to connect.
          </p>
          <h3 className="mt-10 text-xl font-semibold text-[var(--primary)]">Applying for grants</h3>
          <p className="mt-2 text-[var(--muted)]">
            We can provide project descriptions, budgets, and impact information. For formal applications, please get in touch with enough lead time so we can prepare materials.
          </p>
          <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold text-[var(--primary)]">What we need from funders</h3>
            <ul className="mt-3 list-inside list-disc text-[var(--muted)] space-y-1">
              <li>Clear eligibility and deadline information</li>
              <li>Application format (form, proposal, etc.)</li>
              <li>Reporting requirements</li>
            </ul>
          </div>
          <p className="mt-8 text-center">
            <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline">Contact us for grant inquiries</Link>
          </p>
        </div>
      </section>
    </>
  );
}

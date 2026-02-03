import BibleVerse from '@/components/BibleVerse';
import Link from 'next/link';

export default function Sponsors() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Sponsors & Partners</h1>
          <p className="mt-3 opacity-95">Partner with us to grow impact.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--primary)]">Become a Sponsor</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Sponsors help us fund leagues, equipment, uniforms, and outreach. In return we offer visibility (logos on jerseys, social media, and events), impact reports, and the opportunity to be part of transforming young lives in Kamwokya.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="font-semibold text-[var(--primary)]">Team sponsor</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Support a specific team or season. Logo on jerseys and event materials.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="font-semibold text-[var(--primary)]">Program partner</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Fund a program (e.g. youth league, girls program) with named recognition.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-[var(--muted)]">
            Interested? <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline">Contact us</Link> with &quot;Sponsorship&quot; in the subject.
          </p>
        </div>
      </section>
    </>
  );
}

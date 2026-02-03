import BibleVerse from '@/components/BibleVerse';
import Link from 'next/link';

export default function Donate() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Donate</h1>
          <p className="mt-3 opacity-95">Your gift helps us bring hope through sport and faith.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-[var(--primary)]">Why Donate?</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Donations go directly to equipment, court time, transport, and program costs so more young people can join our basketball and sports programs. Every amount helps.
          </p>
          <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <h3 className="font-semibold text-[var(--primary)]">Ways to give</h3>
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              <li><strong className="text-[var(--foreground)]">Bank transfer</strong> — Contact us for our bank details and reference &quot;KHB Donation&quot;.</li>
              <li><strong className="text-[var(--foreground)]">Mobile money</strong> — Get our MTN / Airtel numbers from the <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact</Link> page.</li>
              <li><strong className="text-[var(--foreground)]">In kind</strong> — Balls, jerseys, cones, or other sports equipment. Reach out to coordinate.</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-light)] transition-colors"
            >
              Get donation details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

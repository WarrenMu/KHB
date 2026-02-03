import BibleVerse from '@/components/BibleVerse';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Contact Us</h1>
          <p className="mt-3 opacity-95">Get in touch for donations, sponsorships, grants, or general inquiries.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm space-y-6">
            <div>
              <h3 className="font-semibold text-[var(--primary)]">Location</h3>
              <p className="mt-1 text-[var(--muted)]">Kamwokya, Kampala, Uganda</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--primary)]">Email</h3>
              <p className="mt-1 text-[var(--muted)]">info@kamwokyahopebasketball.org</p>
              <p className="text-sm text-[var(--muted)]">(Replace with your real email)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--primary)]">Phone / Mobile money</h3>
              <p className="mt-1 text-[var(--muted)]">+256 XXX XXX XXX</p>
              <p className="text-sm text-[var(--muted)]">(Add your MTN / Airtel for calls and mobile money)</p>
            </div>
          </div>
          <p className="mt-8 text-center text-[var(--muted)] text-sm">
            For donations and bank details, see the <Link href="/donate" className="text-[var(--primary)] hover:underline">Donate</Link> page. We aim to respond within a few days.
          </p>
        </div>
      </section>
    </>
  );
}

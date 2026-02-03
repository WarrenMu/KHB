import Link from 'next/link';
import BibleVerse from '@/components/BibleVerse';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-light)] to-[#1a2e1a] text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L30 60M0 30L60 30\' stroke=\'white\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-5xl md:text-6xl">🏀</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Kamwokya Hope Basketball
          </h1>
          <p className="mt-4 text-lg opacity-95 max-w-2xl mx-auto">
            Using basketball and sport to bring hope, faith, and opportunity to our community. We play, we grow, we believe.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--primary)] hover:bg-[var(--accent-dark)] hover:text-white transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/programs"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--primary)] text-center">Our Mission</h2>
          <p className="mt-4 text-center text-[var(--muted)] max-w-2xl mx-auto">
            KHB exists to empower youth and families in Kamwokya through basketball, other sports, and Christian values. We provide a safe space to play, learn, and grow in faith and character.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Basketball & Sport', desc: 'League play, training, and tournaments for all ages.', icon: '🏀' },
              { title: 'Faith & Community', desc: 'Devotions, mentorship, and life skills rooted in Christian values.', icon: '✝️' },
              { title: 'Opportunity', desc: 'Pathways to education, health, and a hopeful future.', icon: '🌟' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-semibold text-[var(--primary)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--card)] border-y border-[var(--border)] py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--primary)] text-center">How You Can Help</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/donate" className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md">
              <span className="text-4xl">💝</span>
              <h3 className="mt-3 font-semibold text-[var(--primary)] group-hover:text-[var(--accent)]">Donate</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Give once or monthly to support our programs.</p>
            </Link>
            <Link href="/sponsors" className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md">
              <span className="text-4xl">🤝</span>
              <h3 className="mt-3 font-semibold text-[var(--primary)] group-hover:text-[var(--accent)]">Sponsor</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Partner with us as a team or program sponsor.</p>
            </Link>
            <Link href="/grants" className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md">
              <span className="text-4xl">📋</span>
              <h3 className="mt-3 font-semibold text-[var(--primary)] group-hover:text-[var(--accent)]">Grants</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Learn about and apply for grant opportunities.</p>
            </Link>
            <Link href="/contact" className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md">
              <span className="text-4xl">✉️</span>
              <h3 className="mt-3 font-semibold text-[var(--primary)] group-hover:text-[var(--accent)]">Contact</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Get in touch for partnerships or inquiries.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--primary)]">Join Our Story</h2>
          <p className="mt-4 text-[var(--muted)]">
            Whether you want to volunteer, donate, or simply learn more — we would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-light)] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

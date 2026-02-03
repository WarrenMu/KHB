import BibleVerse from '@/components/BibleVerse';
import Link from 'next/link';

const programs = [
  { title: 'Basketball Leagues', desc: 'Organized leagues for juniors and seniors. Training, matches, and tournaments throughout the year.', icon: '🏀' },
  { title: 'Multi-Sport Activities', desc: 'We also run and support other games — football, netball, and more — so everyone can find something they love.', icon: '⚽' },
  { title: 'Youth Development', desc: 'Life skills, leadership, and mentorship sessions alongside sport, grounded in Christian values.', icon: '📚' },
  { title: 'Community Events', desc: 'Community games, family days, and outreach events that bring people together.', icon: '👨‍👩‍👧‍👦' },
];

export default function Programs() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Our Programs</h1>
          <p className="mt-3 opacity-95">Basketball, other sports, and holistic youth development.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto">
            KHB runs a range of programs that use sport as a vehicle for hope, discipline, and community. We welcome participants of all ages and backgrounds.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((p) => (
              <div key={p.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm flex gap-4">
                <span className="text-4xl">{p.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary)]">{p.title}</h2>
                  <p className="mt-2 text-[var(--muted)]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-[var(--muted)]">
            Want to join or partner with a program? <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

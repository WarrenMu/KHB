import BibleVerse from '@/components/BibleVerse';

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">About KHB</h1>
          <p className="mt-3 opacity-95">Our story, values, and the community we serve.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--primary)]">Our Story</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Kamwokya Hope Basketball (KHB) was born out of a desire to give young people in Kamwokya a place to belong — where they could play basketball and other games, grow in character, and experience hope through faith. As an NGO, we run programs that combine sport with Christian values, mentorship, and life skills, so that every participant can thrive on and off the court.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-[var(--primary)]">Our Values</h2>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li className="flex gap-3"><span className="text-[var(--accent)]">•</span> <strong className="text-[var(--foreground)]">Faith</strong> — We are rooted in Christian teaching and prayer.</li>
            <li className="flex gap-3"><span className="text-[var(--accent)]">•</span> <strong className="text-[var(--foreground)]">Hope</strong> — We believe every young person has a future.</li>
            <li className="flex gap-3"><span className="text-[var(--accent)]">•</span> <strong className="text-[var(--foreground)]">Community</strong> — We build family and belonging through sport.</li>
            <li className="flex gap-3"><span className="text-[var(--accent)]">•</span> <strong className="text-[var(--foreground)]">Excellence</strong> — We play and serve with dedication and integrity.</li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-[var(--primary)]">Where We Work</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            We are based in Kamwokya, Kampala, Uganda. Our programs reach youth and families in the community through local courts, schools, and partnerships. We welcome visitors, volunteers, and partners who share our vision.
          </p>
        </div>
      </section>
    </>
  );
}

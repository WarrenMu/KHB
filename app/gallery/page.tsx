import BibleVerse from '@/components/BibleVerse';

const placeholders = [
  { label: 'Team training', color: 'bg-[var(--primary)]/20' },
  { label: 'Community match', color: 'bg-[var(--accent)]/20' },
  { label: 'Youth session', color: 'bg-[var(--primary)]/20' },
  { label: 'Tournament day', color: 'bg-[var(--accent)]/20' },
  { label: 'Devotion time', color: 'bg-[var(--primary)]/20' },
  { label: 'Family event', color: 'bg-[var(--accent)]/20' },
];

export default function Gallery() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Gallery</h1>
          <p className="mt-3 opacity-95">Moments from our programs and community.</p>
        </div>
      </section>

      <BibleVerse />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto mb-10">
            Add your own photos and videos here to showcase training, matches, events, and community life. Replace the placeholders below with real images.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((item, i) => (
              <div
                key={i}
                className={`aspect-[4/3] rounded-xl ${item.color} flex items-center justify-center border border-[var(--border)]`}
              >
                <span className="text-[var(--muted)] text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[var(--muted)]">
            To add images: place files in <code className="bg-[var(--border)] px-1 rounded">public/gallery/</code> and use <code className="bg-[var(--border)] px-1 rounded">next/image</code> with paths like <code className="bg-[var(--border)] px-1 rounded">/gallery/photo1.jpg</code>.
          </p>
        </div>
      </section>
    </>
  );
}

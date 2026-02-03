'use client';

import { useEffect, useState } from 'react';

const VERSES = [
  { ref: 'Philippians 4:13', text: 'I can do all things through Christ who strengthens me.' },
  { ref: 'Jeremiah 29:11', text: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.' },
  { ref: 'Isaiah 40:31', text: 'But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.' },
  { ref: 'Proverbs 3:5-6', text: 'Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.' },
  { ref: 'Matthew 19:26', text: 'With man this is impossible, but with God all things are possible.' },
  { ref: 'Romans 8:28', text: 'And we know that for those who love God all things work together for good.' },
  { ref: 'Psalm 27:1', text: 'The Lord is my light and my salvation; whom shall I fear?' },
  { ref: 'Colossians 3:23', text: 'Whatever you do, work heartily, as for the Lord and not for men.' },
  { ref: '1 Corinthians 9:24', text: 'Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it.' },
  { ref: 'Hebrews 12:1', text: 'Let us run with endurance the race that is set before us.' },
];

export default function BibleVerse() {
  const [verse, setVerse] = useState<{ ref: string; text: string } | null>(null);

  useEffect(() => {
    const idx = Math.floor(Math.random() * VERSES.length);
    setVerse(VERSES[idx]);
  }, []);

  if (!verse) return null;

  return (
    <section className="bg-[var(--primary)] text-white py-10 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-serif text-lg md:text-xl italic opacity-95">&ldquo;{verse.text}&rdquo;</p>
        <p className="mt-3 text-sm font-medium opacity-90">— {verse.ref}</p>
      </div>
    </section>
  );
}

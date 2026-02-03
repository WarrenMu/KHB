# Kamwokya Hope Basketball (KHB) — NGO Website

A Next.js website for **Kamwokya Hope Basketball**, showcasing programs, enabling donations and sponsorships, and sharing grant information. Includes an automatic Bible verse on key pages.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Features

- **Home** — Hero, mission, “How you can help” (Donate, Sponsor, Grants, Contact)
- **About** — Story, values, location
- **Programs** — Basketball, multi-sport, youth development, community events
- **Gallery** — Placeholder grid (add images under `public/gallery/` and use `next/image`)
- **Donate** — Why donate, ways to give (bank, mobile money, in-kind), link to contact for details
- **Sponsors** — Team and program sponsorship options, contact CTA
- **Grants** — Grant support info and contact for funders
- **Contact** — Placeholder for location, email, phone / mobile money
- **Bible verse** — Random verse shown on each page load (curated list, no API key)

## Customize

1. **Contact** — In `app/contact/page.tsx`, set your real email, phone, and mobile money numbers.
2. **Donation details** — Add bank name, account number, and mobile money numbers on the Donate page or Contact.
3. **Gallery** — Put images in `public/gallery/` and in `app/gallery/page.tsx` replace placeholders with `<Image src="/gallery/your-image.jpg" ... />` from `next/image`.
4. **Bible verses** — Edit the `VERSES` array in `components/BibleVerse.tsx` to add or change verses.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

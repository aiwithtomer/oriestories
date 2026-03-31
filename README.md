# Orie Stories Website

Author website for Orie — built with Next.js + Tailwind CSS, deployed on Vercel (free).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How to Add a Book

1. Edit `content/books.json` — copy the existing entry and update all fields
2. Add cover image to `public/images/books/your-cover.jpg`
3. Set `"isFeatured": true` on the book you want featured on the homepage

## How to Update the Bio

Edit `content/about.json` — update `bioParagraphs`, `funFacts`, or `socials`.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Vercel auto-detects Next.js — just click Deploy
4. Done. Every push to `main` auto-deploys.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_NAME` | Site name |
| `NEXT_PUBLIC_SITE_URL` | Production URL |
| `NEXT_PUBLIC_FOURTHWALL_URL` | Fourthwall store URL |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + inline styles
- **Content:** JSON files in `/content` — no CMS needed
- **Commerce:** Fourthwall (external store, buy buttons link there)
- **Hosting:** Vercel (free tier)

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, featured book, author teaser, newsletter |
| `/books` | Book grid |
| `/books/[slug]` | Individual book detail |
| `/about` | Bio, fun facts, school visits CTA |
| `/contact` | Email + socials |

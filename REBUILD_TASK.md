# REBUILD TASK — Orie Website (Full Structural Rebuild)

## Goal
Completely rebuild the orie-website to match the structure and visual language of eileengarvin.com.
The current build is too generic — this rebuild must match the editorial, literary feel of the reference site.

## Reference: eileengarvin.com (what to copy structurally)

### Global Header
- Author name "Orie" — LEFT, serif font, bold
- Nav links centered: Home | Books | About | Contact — ALL CAPS, light sans-serif, letter-spaced
- Social icons — RIGHT (Instagram only for now)
- Thin white/dark border at bottom
- Sticky on scroll

### Global Footer
- Dark background (black in our color scheme)
- Thin decorative separator/icon at top center (use a small star ⭐ or book 📚 emoji, or an SVG star)
- THREE columns:
  - Left: Short author blurb + social icons + copyright
  - Center: "EXPLORE" heading + nav links
  - Right: "BOOKS" heading + book titles list + "Shop Orie's store →" link to Fourthwall

### Pages to Build

#### 1. Home (/)
- **Hero Section**: Full-width, full-height image area. Dark background. Book cover centered and prominent. Left side: handwritten-style tagline text. Right side: "Available Now" or "Coming Soon" text. This should feel like a book launch hero — immersive.
- **Intro Section**: White/light background. Centered text. Author intro paragraph. Ghost-style outlined button "Learn More About Orie →"
- **Quote/Blurb Section**: Full-width, very light (or slightly tinted) background. Large italicized serif pull-quote from a reader or fan, centered.
- **Featured Book strip**: Quick visual for the book — cover image, title, short tagline, "Get the Book →" button linking to Fourthwall

#### 2. Books (/books)
This is a BOOK DETAIL page (not a grid). Like eileengarvin.com/bumblebee-season:
- **Two-column layout**: Left column = book cover image (large, full height). Right column = book title (H1), release info, full synopsis paragraphs, bold call-to-action to buy from Fourthwall.
- **Advance Praise Section** below: Centered. Header "ADVANCE PRAISE FOR [BOOK TITLE]" in accent color (pink), all-caps, sans-serif. Italicized serif quotes below each centered.

#### 3. About (/about)
Matches eileengarvin.com/about exactly:
- **Decorative squiggle/wave divider** (use a simple SVG wavy line in pink) above section title
- H1 "Meet Orie" in pink/teal equivalent, serif
- **Two-column**: Left = portrait photo (square, large). Right = bio paragraphs. Bold call-out subheadings for fun facts or notable things.
- **No press logos section** (Orie is new, skip this)
- **Fun Facts** section: centered, list of fun facts with emoji (already in about.json)

#### 4. Contact (/contact)
Matches eileengarvin.com/contact:
- Decorative divider + H1 "Contact Orie" in accent color, serif, centered
- **Two-column layout**:
  - Left: Contact info organized by category (General, Social Media, etc.) with bold sans-serif headers. "FOLLOW ME" subheading with social icon.
  - Right: Contact form — Name (split first/last), Email, Message textarea, Submit button (solid pink/accent)

#### 5. No Events page — replace with /books/[slug] for individual book detail if needed later

---

## Color Scheme — BLACK + PINK
Use this dark, editorial palette (user wants black + pink-ish):

```
--color-bg:        #0C0C0C    /* near-black base */
--color-surface:   #161616    /* card/section background */
--color-surface-2: #1F1F1F    /* slightly lighter surface */
--color-pink:      #E8396B    /* hot pink / rose — primary accent */
--color-pink-light:#FF6B95    /* lighter pink for hover */
--color-pink-muted:#8B1A3C    /* deep rose for variety */
--color-text:      #F2F2F2    /* near-white primary text */
--color-text-muted:#9A9A9A    /* grey for secondary text */
--color-border:    #2A2A2A    /* subtle borders */
--color-footer-bg: #080808    /* footer background */
```

## Typography
- **Serif (headings, body)**: `Playfair Display` — loaded from Google Fonts
- **Sans-serif (nav, UI, caps labels)**: `Montserrat` — loaded from Google Fonts (replace Inter with Montserrat)
- Nav links: `font-family: Montserrat`, `letter-spacing: 0.15em`, `text-transform: uppercase`, `font-weight: 300`, `font-size: 13px`
- Author name in header: `Playfair Display`, bold, ~22px
- H1 page titles: `Playfair Display`, large, pink color
- Body text: `Playfair Display` or Georgia fallback, readable size

## Tailwind Config Updates

Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0C0C0C",
        surface: "#161616",
        "surface-2": "#1F1F1F",
        pink: "#E8396B",
        "pink-light": "#FF6B95",
        "pink-muted": "#8B1A3C",
        text: "#F2F2F2",
        "text-muted": "#9A9A9A",
        border: "#2A2A2A",
        "footer-bg": "#080808",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

## globals.css Updates

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-bg text-text font-serif;
  }
}
```

## layout.tsx Updates
- Import both fonts from Google Fonts via next/font or @import in globals.css
- Set `<body className="bg-bg text-text font-serif">`
- Background: `#0C0C0C`

---

## Component Rewrites Required

### components/Navbar.tsx
Exact structure:
```
<header className="fixed top-0 w-full z-50 bg-bg/95 backdrop-blur border-b border-border">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" className="font-serif font-bold text-xl text-text">Orie</a>
    
    {/* Desktop nav — centered */}
    <nav className="hidden md:flex items-center gap-8">
      {['Home','Books','About','Contact'].map(link => (
        <a href={...} className="font-sans text-[13px] uppercase tracking-[0.15em] font-light text-text-muted hover:text-pink transition-colors">
          {link}
        </a>
      ))}
    </nav>
    
    {/* Social icons — right */}
    <div className="flex items-center gap-3">
      <a href="https://instagram.com/oriestories" className="text-text-muted hover:text-pink">
        {/* Instagram SVG icon */}
      </a>
    </div>
  </div>
</header>
```

### components/Footer.tsx
Exact structure matching eileengarvin.com footer:
```
<footer className="bg-footer-bg border-t border-border pt-2">
  {/* Decorative separator */}
  <div className="flex items-center justify-center py-4">
    <div className="h-px w-full bg-border" />
    <span className="mx-4 text-pink text-lg">✦</span>
    <div className="h-px w-full bg-border" />
  </div>
  
  <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-3 gap-8">
    {/* Left: bio + social + copyright */}
    {/* Center: EXPLORE links */}
    {/* Right: BOOKS links + store CTA */}
  </div>
</footer>
```

---

## Page-by-Page Component Structure

### app/page.tsx (Home)

```tsx
// Section 1: Hero — full viewport, dark, book cover centered
<section className="min-h-screen flex items-center justify-center relative bg-bg overflow-hidden pt-16">
  {/* Background: dark with subtle texture or gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg opacity-80" />
  
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto px-6 text-center md:text-left">
    {/* Left text */}
    <div className="text-left">
      <p className="font-serif italic text-2xl text-text/80 leading-relaxed">
        "A story about courage,<br/>curiosity, and magic."
      </p>
    </div>
    
    {/* Center: book cover */}
    <div className="flex justify-center">
      <div className="w-64 h-96 bg-surface-2 rounded-sm shadow-2xl border border-border flex items-center justify-center">
        {/* Book cover image — placeholder until real one provided */}
        <span className="text-text-muted text-sm">Book Cover</span>
      </div>
    </div>
    
    {/* Right text */}
    <div className="text-right">
      <p className="font-sans uppercase tracking-widest text-pink text-sm mb-2">Now Available</p>
      <p className="font-serif text-2xl text-text">The Starlit Garden</p>
    </div>
  </div>
</section>

// Section 2: Intro — lighter bg, centered
<section className="bg-surface py-24 px-6 text-center">
  <div className="max-w-2xl mx-auto">
    <p className="font-sans uppercase tracking-widest text-pink text-xs mb-6">Young Author. Big Imagination.</p>
    <p className="font-serif text-xl text-text leading-relaxed mb-8">
      Orie has been writing stories since she could hold a pencil...
    </p>
    <a href="/about" className="inline-block border border-pink text-pink font-sans text-sm uppercase tracking-widest px-8 py-3 hover:bg-pink hover:text-bg transition-colors">
      Meet Orie →
    </a>
  </div>
</section>

// Section 3: Pull quote
<section className="bg-bg py-20 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <p className="font-serif italic text-2xl md:text-3xl text-text/80 leading-relaxed mb-6">
      "I read this in one sitting. The garden felt so real I kept looking out the window."
    </p>
    <p className="font-sans text-sm uppercase tracking-widest text-text-muted">— A Reader</p>
  </div>
</section>
```

### app/books/page.tsx (Book Detail — not a grid)

```tsx
<main className="pt-24 bg-bg min-h-screen">
  {/* Two-column book layout */}
  <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
    {/* Left: book cover — large */}
    <div>
      <div className="w-full aspect-[2/3] bg-surface-2 border border-border flex items-center justify-center">
        <span className="text-text-muted">Cover Image</span>
      </div>
    </div>
    
    {/* Right: book info */}
    <div className="flex flex-col justify-start pt-4">
      <p className="font-sans uppercase tracking-widest text-pink text-xs mb-3">Middle Grade Fantasy • Ages 8–12</p>
      <h1 className="font-serif text-4xl text-text mb-4">The Starlit Garden</h1>
      <p className="font-sans text-text-muted text-sm mb-8">by Orie</p>
      
      <div className="prose prose-invert font-serif text-text/80 leading-relaxed mb-10">
        {/* Synopsis paragraphs */}
      </div>
      
      <p className="font-sans text-sm text-text font-medium mb-4">
        <strong>Get your copy →</strong>
      </p>
      <a href="https://oriestories-shop.fourthwall.com" 
         className="inline-block bg-pink text-bg font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-pink-light transition-colors w-fit">
        Buy Now at Orie's Shop
      </a>
    </div>
  </div>
  
  {/* Advance Praise section */}
  <section className="bg-surface py-20 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <p className="font-sans uppercase tracking-[0.2em] text-pink text-sm mb-12">
        Advance Praise for The Starlit Garden
      </p>
      {book.praise.map(p => (
        <div className="mb-10">
          <p className="font-serif italic text-xl text-text/80 mb-3">"{p.quote}"</p>
          <p className="font-sans text-xs uppercase tracking-widest text-text-muted">{p.attribution}</p>
        </div>
      ))}
    </div>
  </section>
</main>
```

### app/about/page.tsx

```tsx
<main className="pt-24 bg-bg min-h-screen">
  {/* Decorative header */}
  <div className="text-center py-16 px-6">
    {/* Wavy line SVG */}
    <svg className="mx-auto mb-6 text-pink" width="60" height="20" viewBox="0 0 60 20">
      <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
    <h1 className="font-serif text-5xl text-pink">Meet Orie</h1>
  </div>
  
  {/* Two-column bio */}
  <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-16">
    {/* Left: portrait */}
    <div>
      <div className="aspect-square bg-surface-2 border border-border">
        {/* Portrait placeholder */}
      </div>
    </div>
    
    {/* Right: bio */}
    <div className="font-serif text-text/80 text-lg leading-relaxed space-y-6">
      {about.bioParagraphs.map(p => <p>{p}</p>)}
      
      <div className="mt-8 pt-8 border-t border-border">
        <p className="font-sans uppercase tracking-widest text-pink text-xs mb-4">Fun Facts</p>
        <ul className="space-y-2">
          {about.funFacts.map(f => (
            <li className="font-sans text-sm text-text-muted">{f}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
</main>
```

### app/contact/page.tsx

```tsx
<main className="pt-24 bg-bg min-h-screen">
  {/* Header */}
  <div className="text-center py-16 px-6">
    <svg className="mx-auto mb-6 text-pink" width="60" height="20" viewBox="0 0 60 20">
      <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
    <h1 className="font-serif text-5xl text-pink">Contact Orie</h1>
  </div>
  
  {/* Two-column layout */}
  <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
    {/* Left: contact info */}
    <div>
      <div className="mb-8">
        <p className="font-sans uppercase tracking-widest text-pink text-xs mb-3">General</p>
        <p className="font-serif text-text/80">hello@oriestories.com</p>
      </div>
      
      <div>
        <p className="font-sans uppercase tracking-[0.15em] text-pink text-xs mb-4">Follow Me</p>
        <a href="https://instagram.com/oriestories" className="flex items-center gap-2 text-text-muted hover:text-pink font-sans text-sm">
          {/* Instagram icon */}
          @oriestories
        </a>
      </div>
    </div>
    
    {/* Right: form */}
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First name" className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-pink"/>
        <input type="text" placeholder="Last name" className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-pink"/>
      </div>
      <input type="email" placeholder="Email" className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-pink"/>
      <textarea rows={5} placeholder="Message" className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-pink resize-none"/>
      <div className="flex justify-end">
        <button type="submit" className="bg-pink text-bg font-sans text-sm uppercase tracking-widest px-8 py-3 hover:bg-pink-light transition-colors">
          Submit
        </button>
      </div>
    </form>
  </div>
</main>
```

---

## Execution Steps

1. Update `tailwind.config.ts` with new color palette and fonts
2. Update `app/globals.css` with Google Fonts import and base styles
3. Rewrite `components/Navbar.tsx` with exact eileengarvin.com structure
4. Rewrite `components/Footer.tsx` with 3-column dark footer
5. Rewrite `app/page.tsx` (home) with hero + intro + quote sections
6. Rewrite `app/books/page.tsx` to be a book detail page (not grid)
7. Rewrite `app/about/page.tsx` with 2-col bio layout
8. Rewrite `app/contact/page.tsx` with 2-col contact + form
9. Delete unused components (BookCard, BookGrid, PageHeader, Tag, FadeIn, Button)
10. Run `npm run build` to verify clean compile
11. Run `git add -A && git commit -m "Rebuild: full structural redesign matching eileengarvin.com with dark/pink palette"`

## Important Notes
- All colors: dark backgrounds, pink accents — no warm cream or forest green from before
- This is NOT a card-grid site. It's editorial. Big type, generous whitespace, literary feel.
- The home page hero should feel like a book launch announcement
- Nav font: Montserrat, ALL CAPS, very light weight, letter-spaced
- Headings font: Playfair Display, elegant serif
- Fourthwall store URL: https://oriestories-shop.fourthwall.com
- Content files (books.json, about.json, site-config.json) remain the source of truth — do not hardcode content

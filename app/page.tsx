import Link from "next/link";
import booksData from "@/content/books.json";
import aboutData from "@/content/about.json";

export default function HomePage() {
  const featured = booksData.books.find((b) => b.featured) || booksData.books[0];

  return (
    <>
      {/* Hero — full viewport, dark, book cover centered */}
      <section className="min-h-screen flex items-center justify-center relative bg-bg overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg opacity-80" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto px-6 text-center md:text-left">
          {/* Left text */}
          <div className="md:text-left text-center">
            <p className="font-serif italic text-2xl text-text/80 leading-relaxed">
              &ldquo;A story about courage,
              <br />
              curiosity, and magic.&rdquo;
            </p>
          </div>

          {/* Center: book cover */}
          <div className="flex justify-center">
            <div className="w-64 h-96 bg-surface-2 rounded-sm shadow-2xl border border-border flex items-center justify-center">
              <div className="text-center px-6">
                <p className="font-serif text-text text-2xl font-bold leading-tight">
                  {featured.title}
                </p>
                <p className="text-pink-light mt-2 font-sans text-sm">by Orie</p>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="md:text-right text-center">
            <p className="font-sans uppercase tracking-widest text-pink text-sm mb-2">
              Now Available
            </p>
            <p className="font-serif text-2xl text-text">{featured.title}</p>
          </div>
        </div>
      </section>

      {/* Intro — lighter bg, centered */}
      <section className="bg-surface py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans uppercase tracking-widest text-pink text-xs mb-6">
            Young Author. Big Imagination.
          </p>
          <p className="font-serif text-xl text-text leading-relaxed mb-8">
            {aboutData.shortBio}
          </p>
          <Link
            href="/about"
            className="inline-block border border-pink text-pink font-sans text-sm uppercase tracking-widest px-8 py-3 no-underline hover:bg-pink hover:text-bg transition-colors"
          >
            Meet Orie &rarr;
          </Link>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-text/80 leading-relaxed mb-6">
            &ldquo;I read this in one sitting. The garden felt so real I kept looking out the window.&rdquo;
          </p>
          <p className="font-sans text-sm uppercase tracking-widest text-text-muted">
            &mdash; A Reader
          </p>
        </div>
      </section>

      {/* Featured Book strip */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-48 h-72 bg-surface-2 border border-border rounded-sm flex items-center justify-center">
              <div className="text-center px-4">
                <p className="font-serif text-text text-lg font-bold leading-tight">
                  {featured.title}
                </p>
                <p className="text-pink-light mt-1 font-sans text-xs">by Orie</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="font-sans uppercase tracking-widest text-pink text-xs mb-2">
              Featured Book
            </p>
            <h2 className="font-serif text-3xl text-text mb-3">{featured.title}</h2>
            <p className="font-serif text-text/70 text-lg mb-6">{featured.tagline}</p>
            <a
              href={featured.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink text-bg font-sans text-sm uppercase tracking-widest px-8 py-3 no-underline hover:bg-pink-light transition-colors"
            >
              Get the Book &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import booksData from "@/content/books.json";
import aboutData from "@/content/about.json";

export default function HomePage() {
  const featured = booksData.books.find((b) => b.featured) || booksData.books[0];

  return (
    <>
      {/* Hero — full viewport, dark, book cover centered */}
      <section className="min-h-screen flex items-center justify-center relative bg-bg overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg opacity-80" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-14 items-center max-w-5xl mx-auto px-6 text-center md:text-left">
          {/* Left text */}
          <div className="md:text-right text-center flex flex-col justify-center">
            <p className="font-serif italic text-xl md:text-2xl text-text/70 leading-relaxed">
              &ldquo;Sometimes, the bravest thing a ruined heart can do is keep beating anyway.&rdquo;
            </p>
          </div>

          {/* Center: book cover */}
          <div className="flex justify-center">
            <Link href={`/books/${featured.slug}`} className="block group">
              <div className="w-56 md:w-64 aspect-[2/3] rounded-sm shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_rgba(242,184,212,0.15)]">
                <Image
                  src={featured.coverImage}
                  alt={`${featured.title} by ${featured.author}`}
                  width={256}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right text */}
          <div className="md:text-left text-center flex flex-col justify-center">
            <p className="font-sans uppercase tracking-[0.2em] text-pink text-xs mb-3">
              Now Available
            </p>
            <p className="font-serif text-2xl md:text-3xl text-text leading-tight">{featured.title}</p>
            <p className="font-sans text-text-muted text-sm mt-2 mb-5">by {featured.author}</p>
            <a
              href={featured.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink text-bg font-sans text-xs uppercase tracking-[0.15em] px-6 py-2.5 no-underline hover:bg-pink-light transition-colors w-fit mx-auto md:mx-0"
            >
              Get the Book &rarr;
            </a>
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

      {/* Pull quotes */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center">
            <p className="font-serif italic text-lg md:text-xl text-text/70 leading-relaxed mb-4">
              &ldquo;She writes with a wisdom far beyond her years. A voice to watch.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted">
              &mdash; Early Reader
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif italic text-lg md:text-xl text-text/70 leading-relaxed mb-4">
              &ldquo;I read this in one sitting. I cried, I laughed, and I couldn&apos;t put it down.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted">
              &mdash; A Reader
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

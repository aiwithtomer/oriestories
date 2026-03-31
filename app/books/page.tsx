import type { Metadata } from "next";
import Link from "next/link";
import booksData from "@/content/books.json";

export const metadata: Metadata = {
  title: "Books",
};

export default function BooksPage() {
  const featured = booksData.books.find((b) => b.featured) || booksData.books[0];
  const paragraphs = featured.description.split("\n\n").filter(Boolean);

  return (
    <main className="pt-24 bg-bg min-h-screen">
      {/* Two-column book layout */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: book cover — large */}
        <div>
          <div className="w-full aspect-[2/3] bg-surface-2 border border-border flex items-center justify-center rounded-sm">
            <div className="text-center px-8">
              <p className="font-serif text-text text-3xl font-bold leading-tight">
                {featured.title}
              </p>
              <p className="text-pink-light mt-3 font-sans text-sm">by Orie</p>
            </div>
          </div>
        </div>

        {/* Right: book info */}
        <div className="flex flex-col justify-start pt-4">
          <p className="font-sans uppercase tracking-widest text-pink text-xs mb-3">
            {featured.category} {featured.genre} &bull; {featured.ageRange}
          </p>
          <h1 className="font-serif text-4xl text-text mb-4">{featured.title}</h1>
          <p className="font-sans text-text-muted text-sm mb-8">by {featured.author}</p>

          <div className="font-serif text-text/80 leading-relaxed mb-10 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="font-sans text-sm text-text font-medium mb-4">
            <strong>Get your copy &rarr;</strong>
          </p>
          <a
            href={featured.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink text-bg font-sans text-sm uppercase tracking-widest px-8 py-4 no-underline hover:bg-pink-light transition-colors w-fit"
          >
            Buy Now at Orie&apos;s Shop
          </a>
        </div>
      </div>

      {/* Other books */}
      {booksData.books.length > 1 && (
        <section className="bg-surface py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans uppercase tracking-[0.2em] text-pink text-sm mb-8 text-center">
              More Books by Orie
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {booksData.books
                .filter((b) => b.slug !== featured.slug)
                .map((book) => (
                  <Link
                    key={book.slug}
                    href={`/books/${book.slug}`}
                    className="flex gap-6 items-start p-6 border border-border rounded-sm no-underline hover:border-pink transition-colors group"
                  >
                    <div className="w-24 h-36 bg-surface-2 border border-border rounded-sm flex items-center justify-center shrink-0">
                      <p className="font-serif text-text text-xs font-bold text-center px-2 leading-tight">
                        {book.title}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-text mb-1 group-hover:text-pink transition-colors">
                        {book.title}
                      </h3>
                      <p className="font-sans text-text-muted text-xs mb-2">{book.category} &bull; {book.ageRange}</p>
                      <p className="font-serif text-text/70 text-sm">{book.tagline}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Advance Praise section */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.2em] text-pink text-sm mb-12">
            Advance Praise for {featured.title}
          </p>
          <div className="mb-10">
            <p className="font-serif italic text-xl text-text/80 mb-3">
              &ldquo;A beautiful, imaginative story that will capture the hearts of young readers everywhere.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-text-muted">
              &mdash; Early Reader
            </p>
          </div>
          <div className="mb-10">
            <p className="font-serif italic text-xl text-text/80 mb-3">
              &ldquo;I read this in one sitting. The garden felt so real I kept looking out the window.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-text-muted">
              &mdash; A Reader
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

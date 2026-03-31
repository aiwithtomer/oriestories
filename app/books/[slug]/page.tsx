import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import booksData from "@/content/books.json";

export async function generateStaticParams() {
  return booksData.books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = booksData.books.find((b) => b.slug === slug);
  return { title: book?.title ?? "Book Not Found" };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = booksData.books.find((b) => b.slug === slug);
  if (!book) notFound();

  const paragraphs = book.description.split("\n\n").filter(Boolean);

  return (
    <main className="pt-24 bg-bg min-h-screen">
      {/* Two-column book layout */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: book cover */}
        <div>
          <div className="w-full aspect-[2/3] bg-surface-2 border border-border flex items-center justify-center rounded-sm sticky top-24">
            <div className="text-center px-8">
              <p className="font-serif text-text text-3xl font-bold leading-tight">
                {book.title}
              </p>
              <p className="text-pink-light mt-3 font-sans text-sm">by Orie</p>
            </div>
          </div>
        </div>

        {/* Right: book info */}
        <div className="flex flex-col justify-start pt-4">
          <Link
            href="/books"
            className="text-text-muted no-underline font-sans text-xs uppercase tracking-widest mb-6 hover:text-pink transition-colors"
          >
            &larr; Back to Books
          </Link>

          <p className="font-sans uppercase tracking-widest text-pink text-xs mb-3">
            {book.category} {book.genre} &bull; {book.ageRange}
          </p>
          <h1 className="font-serif text-4xl text-text mb-4">{book.title}</h1>
          <p className="font-sans text-text-muted text-sm mb-8">by {book.author}</p>

          <div className="font-serif text-text/80 leading-relaxed mb-10 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 mb-8 text-sm text-text-muted font-sans">
            <span>{book.pageCount} pages</span>
            <span>
              Published{" "}
              {new Date(book.publishDate).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <a
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink text-bg font-sans text-sm uppercase tracking-widest px-8 py-4 no-underline hover:bg-pink-light transition-colors w-fit"
          >
            Buy Now at Orie&apos;s Shop
          </a>
        </div>
      </div>
    </main>
  );
}

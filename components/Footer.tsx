import Link from "next/link";
import siteConfig from "@/content/site-config.json";
import booksData from "@/content/books.json";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-border pt-2">
      {/* Decorative separator */}
      <div className="flex items-center justify-center py-4 px-6">
        <div className="h-px w-full bg-border" />
        <span className="mx-4 text-pink text-lg shrink-0">✦</span>
        <div className="h-px w-full bg-border" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: bio + social + copyright */}
        <div>
          <p className="text-xl text-pink mb-3 lowercase" style={{ fontFamily: "var(--font-nunito)", fontWeight: 400, fontSize: "1.75rem" }}>oriestories</p>
          <p className="font-serif text-text/70 text-sm leading-relaxed mb-4">
            Orie Shenhar is a middle school student and aspiring writer with a strong interest in storytelling, especially in the romance genre.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <a
              href="https://instagram.com/oriestories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-pink transition-colors"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Orie Stories. All rights reserved.
          </p>
        </div>

        {/* Center: EXPLORE links */}
        <div>
          <p className="font-sans uppercase tracking-[0.15em] text-text text-xs font-semibold mb-4">
            Explore
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-muted no-underline text-sm font-sans hover:text-pink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: BOOKS + store CTA */}
        <div>
          <p className="font-sans uppercase tracking-[0.15em] text-text text-xs font-semibold mb-4">
            Books
          </p>
          <ul className="list-none p-0 m-0 space-y-2 mb-6">
            {booksData.books.map((book) => (
              <li key={book.slug}>
                <Link
                  href={`/books/${book.slug}`}
                  className="text-text-muted no-underline text-sm font-sans hover:text-pink transition-colors"
                >
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink no-underline text-sm font-sans hover:text-pink-light transition-colors"
          >
            Shop Orie&apos;s store &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}

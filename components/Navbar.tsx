"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import booksData from "@/content/books.json";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-bg/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Author name — left */}
        <Link href="/" className="text-xl text-pink no-underline lowercase" style={{ fontFamily: "var(--font-nunito)", fontWeight: 400, fontSize: "1.75rem" }}>
          oriestories
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setBooksOpen(true)}
                onMouseLeave={() => setBooksOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`font-sans text-[13px] uppercase tracking-[0.15em] font-light no-underline transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href)
                      ? "text-pink"
                      : "text-text-muted hover:text-pink"
                  }`}
                >
                  {link.label}
                </Link>
                {booksOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-surface border border-border shadow-lg py-2 min-w-[180px]">
                      {booksData.books.map((book) => (
                        <Link
                          key={book.slug}
                          href={`/books/${book.slug}`}
                          className="block px-5 py-2.5 font-sans text-[12px] uppercase tracking-[0.15em] font-light no-underline text-text-muted hover:text-pink hover:bg-surface-2 transition-colors"
                        >
                          {book.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[13px] uppercase tracking-[0.15em] font-light no-underline transition-colors ${
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-pink"
                    : "text-text-muted hover:text-pink"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Social icons — right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://instagram.com/oriestories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-pink transition-colors"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none text-text cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`font-sans text-[13px] uppercase tracking-[0.15em] font-light no-underline ${
                  pathname === link.href ? "text-pink" : "text-text-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {booksData.books.map((book) => (
                    <Link
                      key={book.slug}
                      href={`/books/${book.slug}`}
                      className="font-sans text-[12px] uppercase tracking-[0.15em] font-light no-underline text-text-muted hover:text-pink"
                      onClick={() => setOpen(false)}
                    >
                      {book.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://instagram.com/oriestories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-pink font-sans text-[13px] uppercase tracking-[0.15em] font-light no-underline"
          >
            Instagram
          </a>
        </div>
      )}
    </header>
  );
}

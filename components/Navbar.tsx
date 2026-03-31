"use client";
import { useState } from "react";
import Link from "next/link";
import siteConfig from "@/content/site-config.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ backgroundColor: "rgba(253,248,240,0.95)", borderBottom: "1px solid #E8D5A8" }} className="sticky top-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2D4A3E", fontSize: "1.5rem", fontWeight: 700, textDecoration: "none" }}>
          Orie Stories
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "#2C2C2C", fontWeight: 500, textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.fourthwallUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#C8A96E", color: "#2D4A3E", fontWeight: 600, padding: "0.5rem 1rem", borderRadius: "0.375rem", textDecoration: "none" }}
          >
            Shop ↗
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ background: "none", border: "none", color: "#2D4A3E", cursor: "pointer" }}
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
        <div style={{ backgroundColor: "#FDF8F0", borderTop: "1px solid #E8D5A8", padding: "1rem 1.5rem" }} className="md:hidden flex flex-col gap-4">
          {siteConfig.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "#2C2C2C", fontWeight: 500, textDecoration: "none" }} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.fourthwallUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#C8A96E", color: "#2D4A3E", fontWeight: 600, padding: "0.5rem 1rem", borderRadius: "0.375rem", textDecoration: "none", textAlign: "center" }}
          >
            Shop ↗
          </a>
        </div>
      )}
    </nav>
  );
}

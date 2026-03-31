import Link from "next/link";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import booksData from "@/content/books.json";
import aboutData from "@/content/about.json";

export default function HomePage() {
  const featured = booksData.books.find((b) => b.isFeatured) || booksData.books[0];

  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#FDF8F0", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "48rem" }}>
          <FadeIn>
            <p style={{ color: "#C8A96E", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.875rem", marginBottom: "1rem" }}>Welcome</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: 700, color: "#2D4A3E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Stories by Orie
            </h1>
            <p style={{ color: "#6B7280", fontSize: "1.25rem", fontStyle: "italic", marginBottom: "2rem" }}>
              Young author. Big imagination. Words that take you somewhere new.
            </p>
            <Button href="/books">Explore My Books →</Button>
          </FadeIn>
        </div>
      </section>

      {/* Featured Book */}
      <section style={{ backgroundColor: "#F5EDE0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <FadeIn>
            <div style={{ aspectRatio: "3/4", backgroundColor: "#2D4A3E", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", maxWidth: "24rem", margin: "0 auto" }}>
              <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#FDF8F0", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3 }}>{featured.title}</p>
                <p style={{ color: "#E8D5A8", marginTop: "0.5rem" }}>by Orie</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p style={{ color: "#C8A96E", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.5rem" }}>Latest Release</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>{featured.title}</h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>{featured.tagline}</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button href={featured.buyUrl} external>Get Your Copy ↗</Button>
                <Button href={`/books/${featured.slug}`} variant="secondary">Learn More</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Teaser */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <FadeIn>
            <div style={{ width: "16rem", height: "16rem", borderRadius: "50%", backgroundColor: "#C8A96E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2D4A3E", fontSize: "4rem", fontWeight: 700 }}>O</span>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p style={{ color: "#C8A96E", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.5rem" }}>The Author</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>Meet Orie</h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>{aboutData.bioParagraphs[0]}</p>
              <Link href="/about" style={{ color: "#2D4A3E", fontWeight: 600, textDecoration: "none" }}>More About Me →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: "#F5EDE0", padding: "5rem 1.5rem" }}>
        <FadeIn>
          <div style={{ maxWidth: "36rem", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>Stay in the Story</h2>
            <p style={{ color: "#6B7280", marginBottom: "2rem" }}>New books, behind-the-scenes updates, and notes from Orie — straight to your inbox.</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{ flex: 1, minWidth: "200px", padding: "0.75rem 1rem", borderRadius: "0.375rem", border: "1px solid #E8D5A8", backgroundColor: "#FDF8F0", color: "#2C2C2C", outline: "none", fontSize: "1rem" }}
              />
              <button style={{ backgroundColor: "#C8A96E", color: "#2D4A3E", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.375rem", border: "none", cursor: "pointer", fontSize: "1rem" }}>
                Subscribe
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

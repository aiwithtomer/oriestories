import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import booksData from "@/content/books.json";

export async function generateStaticParams() {
  return booksData.books.map((book) => ({ slug: book.slug }));
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = booksData.books.find((b) => b.slug === slug);
  if (!book) notFound();

  const paragraphs = book.description.split("\\n\\n").filter(Boolean);

  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <Link href="/books" style={{ color: "#2D4A3E", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem", display: "inline-block", marginBottom: "2rem" }}>
        ← Back to All Books
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Cover */}
        <div style={{ position: "sticky", top: "6rem" }}>
          <div style={{ aspectRatio: "3/4", backgroundColor: "#2D4A3E", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", maxWidth: "24rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#FDF8F0", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3 }}>{book.title}</p>
              <p style={{ color: "#E8D5A8", marginTop: "0.5rem" }}>by Orie</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
            {book.genre?.map((g) => <Tag key={g}>{g}</Tag>)}
            {book.ageRange && <Tag>{book.ageRange}</Tag>}
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#2D4A3E", marginBottom: "0.5rem" }}>{book.title}</h1>
          <p style={{ color: "#6B7280", fontWeight: 500, marginBottom: "1.5rem" }}>by {book.author}</p>

          <div style={{ marginBottom: "2rem" }}>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ color: "#2C2C2C", lineHeight: 1.8, marginBottom: "1rem" }}>{p}</p>
            ))}
          </div>

          {book.praise && book.praise.length > 0 && (
            <div style={{ borderLeft: "4px solid #C8A96E", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
              {book.praise.map((item, i) => (
                <blockquote key={i} style={{ marginBottom: "1rem" }}>
                  <p style={{ color: "#6B7280", fontStyle: "italic" }}>&ldquo;{item.quote}&rdquo;</p>
                  <footer style={{ color: "#2D4A3E", fontWeight: 600, fontSize: "0.875rem", marginTop: "0.25rem" }}>{item.attribution}</footer>
                </blockquote>
              ))}
            </div>
          )}

          <Button href={book.buyUrl} external>Buy Now →</Button>
        </div>
      </div>
    </div>
  );
}

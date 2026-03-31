import Link from "next/link";

interface BookCardProps {
  slug: string;
  title: string;
  tagline: string;
  genre?: string[];
}

export default function BookCard({ slug, title, tagline, genre }: BookCardProps) {
  return (
    <Link href={`/books/${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{ transition: "transform 0.3s" }} className="group">
        {/* Cover placeholder */}
        <div style={{
          aspectRatio: "3/4",
          backgroundColor: "#2D4A3E",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}>
          <div style={{ textAlign: "center", padding: "0 1rem" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#FDF8F0", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3 }}>{title}</p>
            <p style={{ color: "#E8D5A8", fontSize: "0.875rem", marginTop: "0.5rem" }}>by Orie</p>
          </div>
        </div>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#2D4A3E", marginBottom: "0.25rem" }}>{title}</h3>
        <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "0.5rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{tagline}</p>
        {genre && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.5rem" }}>
            {genre.map((g) => (
              <span key={g} style={{ fontSize: "0.75rem", backgroundColor: "#F5EDE0", color: "#2D4A3E", padding: "0.125rem 0.5rem", borderRadius: "9999px", border: "1px solid #E8D5A8" }}>{g}</span>
            ))}
          </div>
        )}
        <span style={{ color: "#2D4A3E", fontWeight: 600, fontSize: "0.875rem" }}>Read More →</span>
      </div>
    </Link>
  );
}

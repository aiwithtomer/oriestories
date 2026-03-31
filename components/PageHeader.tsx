interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section style={{ backgroundColor: "#F5EDE0", padding: "4rem 0", textAlign: "center" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>
          {title}
        </h1>
        {subtitle && <p style={{ color: "#6B7280", fontSize: "1.125rem" }}>{subtitle}</p>}
      </div>
    </section>
  );
}

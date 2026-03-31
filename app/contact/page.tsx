import PageHeader from "@/components/PageHeader";
import siteConfig from "@/content/site-config.json";
import aboutData from "@/content/about.json";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Say Hello"
        subtitle="Got a question, a kind word, or a book recommendation? I would love to hear from you."
      />
      <section style={{ maxWidth: "40rem", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ backgroundColor: "#F5EDE0", borderRadius: "0.75rem", padding: "2.5rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>Email</h2>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            style={{ color: "#3D6B5A", fontSize: "1.125rem", fontWeight: 500, textDecoration: "none" }}
          >
            {siteConfig.contactEmail}
          </a>
        </div>

        <div style={{ backgroundColor: "#F5EDE0", borderRadius: "0.75rem", padding: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>Follow Along</h2>
          {aboutData.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3D6B5A", fontSize: "1.125rem", fontWeight: 500, textDecoration: "none" }}
            >
              Instagram: {s.label} ↗
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

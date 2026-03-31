import PageHeader from "@/components/PageHeader";
import aboutData from "@/content/about.json";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Orie" />
      <section style={{ maxWidth: "64rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Portrait placeholder */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "16rem", height: "16rem", borderRadius: "50%", backgroundColor: "#C8A96E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2D4A3E", fontSize: "5rem", fontWeight: 700 }}>O</span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{ color: "#C8A96E", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.75rem" }}>The Author</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#2D4A3E", marginBottom: "1.5rem" }}>{aboutData.headline}</h2>
            <div>
              {aboutData.bioParagraphs.map((p, i) => (
                <p key={i} style={{ color: "#2C2C2C", lineHeight: 1.8, marginBottom: "1rem" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Fun facts */}
        <div style={{ marginTop: "4rem", backgroundColor: "#F5EDE0", borderLeft: "4px solid #C8A96E", borderRadius: "0 0.75rem 0.75rem 0", padding: "2rem" }}>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#2D4A3E", marginBottom: "1rem" }}>Quick Facts</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {aboutData.funFacts.map((fact, i) => (
              <li key={i} style={{ color: "#2C2C2C", marginBottom: "0.75rem" }}>{fact}</li>
            ))}
          </ul>
        </div>

        {/* School visits CTA */}
        <div style={{ marginTop: "4rem", textAlign: "center", backgroundColor: "#2D4A3E", color: "#FDF8F0", borderRadius: "0.75rem", padding: "3rem" }}>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#C8A96E", marginBottom: "1rem" }}>School Visits &amp; Events</h3>
          <p style={{ color: "rgba(253,248,240,0.8)", marginBottom: "1.5rem", maxWidth: "36rem", margin: "0 auto 1.5rem" }}>
            Interested in having Orie speak at your school or event? We would love to connect with young readers and aspiring writers.
          </p>
          <a href="/contact" style={{ display: "inline-block", backgroundColor: "#C8A96E", color: "#2D4A3E", fontWeight: 600, padding: "0.75rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none" }}>
            Get in Touch →
          </a>
        </div>
      </section>
    </>
  );
}

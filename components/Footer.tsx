import Link from "next/link";
import siteConfig from "@/content/site-config.json";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2D4A3E", color: "#FDF8F0", marginTop: "5rem" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#C8A96E", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Orie Stories
          </h3>
          <p style={{ color: "rgba(253,248,240,0.7)", fontSize: "0.875rem" }}>{siteConfig.tagline}</p>
        </div>
        <div>
          <h4 style={{ color: "#C8A96E", fontWeight: 600, marginBottom: "0.75rem" }}>Pages</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {siteConfig.nav.map((item) => (
              <li key={item.href} style={{ marginBottom: "0.5rem" }}>
                <Link href={item.href} style={{ color: "rgba(253,248,240,0.7)", textDecoration: "none", fontSize: "0.875rem" }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#C8A96E", fontWeight: 600, marginBottom: "0.75rem" }}>Shop</h4>
          <a
            href={siteConfig.fourthwallUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(253,248,240,0.7)", textDecoration: "none", fontSize: "0.875rem" }}
          >
            Visit the store ↗
          </a>
          <p style={{ color: "rgba(253,248,240,0.4)", fontSize: "0.75rem", marginTop: "1rem" }}>
            © {new Date().getFullYear()} Orie Stories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

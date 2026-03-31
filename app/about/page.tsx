import type { Metadata } from "next";
import aboutData from "@/content/about.json";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="pt-24 bg-bg min-h-screen">
      {/* Decorative header */}
      <div className="text-center py-16 px-6">
        <svg className="mx-auto mb-6 text-pink" width="60" height="20" viewBox="0 0 60 20">
          <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <h1 className="font-serif text-5xl text-pink">Meet Orie</h1>
      </div>

      {/* Two-column bio */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: portrait */}
        <div>
          <div className="aspect-square bg-surface-2 border border-border flex items-center justify-center rounded-sm">
            <div className="text-center">
              <span className="font-serif text-text/30 text-8xl font-bold">O</span>
              <p className="text-text-muted text-sm font-sans mt-2">Portrait coming soon</p>
            </div>
          </div>
        </div>

        {/* Right: bio */}
        <div className="font-serif text-text/80 text-lg leading-relaxed space-y-6">
          {aboutData.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-sans uppercase tracking-widest text-pink text-xs mb-4">
              Fun Facts
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              {aboutData.funFacts.map((f, i) => (
                <li key={i} className="font-sans text-sm text-text-muted">
                  <span className="mr-2">{f.emoji}</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

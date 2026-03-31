import type { Metadata } from "next";
import siteConfig from "@/content/site-config.json";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="pt-24 bg-bg min-h-screen">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <svg className="mx-auto mb-6 text-pink" width="60" height="20" viewBox="0 0 60 20">
          <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <h1 className="font-serif text-5xl text-pink">Contact Orie</h1>
      </div>

      {/* Two-column layout */}
      <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: contact info */}
        <div>
          <div className="mb-8">
            <p className="font-sans uppercase tracking-widest text-pink text-xs mb-3">General</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-serif text-text/80 no-underline hover:text-pink transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          <div>
            <p className="font-sans uppercase tracking-[0.15em] text-pink text-xs mb-4">Follow Me</p>
            <a
              href="https://instagram.com/oriestories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-pink font-sans text-sm no-underline transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              @oriestories
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full outline-none focus:border-pink transition-colors"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full outline-none focus:border-pink transition-colors"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full outline-none focus:border-pink transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="bg-surface border border-border text-text font-sans text-sm px-4 py-3 w-full outline-none focus:border-pink resize-none transition-colors"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink text-bg font-sans text-sm uppercase tracking-widest px-8 py-3 border-none cursor-pointer hover:bg-pink-light transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

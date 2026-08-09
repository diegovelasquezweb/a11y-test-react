import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "A11y Test React",
  description: "Demo site with intentional accessibility errors",
};

// meta-viewport / meta-viewport-large: userScalable: false renders
// <meta name="viewport" content="...user-scalable=no">, disabling pinch-zoom.
export const viewport = { width: 'device-width', initialScale: 1, userScalable: true };

// html-lang-valid + valid-lang: "xx-invalid" is not a real BCP 47 primary
// language subtag.
// html-xml-lang-mismatch: lang="xx-invalid" and xmlLang="es" have different
// primary subtags ("xx" vs "es").
// html-has-lang: cannot be triggered on the same element as the two rules
// above — it requires lang to be ABSENT, while html-lang-valid/valid-lang
// require lang to be PRESENT but invalid. Next.js App Router's root layout
// must render a single <html> element, so only one of these states can exist
// at a time. Closest approximation documented here: this demo exercises the
// "present but invalid/mismatched" branch; html-has-lang would need a second,
// mutually exclusive layout state (lang omitted entirely) to trigger for real.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" aria-label="Skip to main content">Skip to main content</a>
        <nav aria-label="Primary" className="flex gap-4 p-4 bg-gray-100">
          <Link href="/">Home</Link>
          <Link href="/media">Media</Link>
        </nav>
        <main id="main" className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}

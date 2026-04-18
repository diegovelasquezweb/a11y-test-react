import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "A11y Test React",
  description: "Demo site with intentional accessibility errors",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only">Skip to main content</a>
        <nav aria-label="Primary" className="flex gap-4 p-4 bg-gray-100">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main id="main" className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}

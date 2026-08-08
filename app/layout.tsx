import type { Metadata } from "next";
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
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div>
          <a href="/">Home</a> <a href="/records">Records</a> <a href="/archive">Archive</a>
        </div>
        {children}
      </body>
    </html>
  );
}

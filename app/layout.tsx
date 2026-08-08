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
      <body>{children}</body>
    </html>
  );
}

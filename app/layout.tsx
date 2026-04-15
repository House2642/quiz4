import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art History Quiz 4 — Study Tool",
  description: "Active-recall study tool for Art History Quiz 4 terms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "D4 Double Glazing - Professional uPVC Windows & Doors",
  description: "Expert double glazing installation serving your local area. Energy-efficient windows, secure doors, and quality conservatories. Free, no-pressure quotes from trusted local installers.",
  keywords: "double glazing, uPVC windows, composite doors, energy efficient windows, secure doors, window replacement, conservatories, local glazing company",
  authors: [{ name: "D4 Double Glazing" }],
  openGraph: {
    title: "D4 Double Glazing - Professional uPVC Windows & Doors",
    description: "Expert double glazing installation serving your local area. Energy-efficient windows, secure doors, and quality conservatories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}

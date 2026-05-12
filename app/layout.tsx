import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektro Černíček s.r.o. | Brumov-Bylnice",
  description:
    "Prodej domácích spotřebičů AEG, Bosch, Whirlpool. Elektroinstalační materiál a odborný servis v Brumov-Bylnici od roku 2008.",
  keywords: [
    "elektro",
    "Brumov-Bylnice",
    "spotřebiče",
    "AEG",
    "Bosch",
    "Whirlpool",
    "elektroinstalace",
    "Černíček",
  ],
  openGraph: {
    title: "Elektro Černíček s.r.o.",
    description: "Prodej spotřebičů, elektromateriál a servis s tradicí od roku 2008.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0f172a] text-white">
        {children}
      </body>
    </html>
  );
}

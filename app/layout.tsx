import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Marchand",
  description: "Présentation de Thomas Marchand, développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="md:overflow-y-hidden">
      <body>{children}</body>
    </html>
  );
}

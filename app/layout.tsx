import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Marchand",
  description: "Développeur Full-Stack · Node.js · TypeScript · AdonisJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

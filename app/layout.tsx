import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umbrella Archive - Resident Evil Timeline",
  description:
    "Enciclopedia visual em portugues sobre Resident Evil, com jogos, filmes, CGI, series, livros, mangas, ameacas biologicas e continuidades separadas.",
  icons: {
    icon: [{ url: "/umbrella-logo.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/umbrella-logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/umbrella-logo.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

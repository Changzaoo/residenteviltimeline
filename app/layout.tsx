import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umbrella Archive - Resident Evil Timeline",
  description:
    "Enciclopedia visual em portugues sobre Resident Evil, com jogos, filmes, CGI, series, livros, mangas, ameacas biologicas e continuidades separadas."
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

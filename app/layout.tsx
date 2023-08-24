import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "guilaureano.dev.br",
  description: "Guilherme Laureano's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

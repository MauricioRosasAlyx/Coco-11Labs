import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teseo | Coco 11Labs",
  description: "Asistente de aperturas, cierres y reportes con Next.js y LangGraph.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

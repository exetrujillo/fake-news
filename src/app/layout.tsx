// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeVioVioChile - Un Experimento sobre Fake News",
  description: "Página educativa para mostrar cómo funcionan las noticias falsas y cómo identificarlas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Asegúrate de que no haya comentarios ni espacios entre <html> y <body>
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-800`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
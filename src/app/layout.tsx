import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Auspira Overseas - Premium Fruit & Vegetable Exporter | Fresh Produce Supplier",
  description: "Leading exporter of premium fresh fruits, vegetables, and spices including pomegranates, turmeric fingers, onions, green chillies, and curry leaves to global markets.",
  keywords: "fruit exporter, vegetable exporter, pomegranate export, turmeric fingers, onion export, green chillies, curry leaves, fresh produce, Auspira Overseas",
  authors: [{ name: "Auspira Overseas" }],
  openGraph: {
    title: "Auspira Overseas - Premium Fruit & Vegetable Exporter",
    description: "Leading exporter of premium fresh fruits, vegetables, and spices to global markets",
    url: "https://auspiraoverseas.in",
    siteName: "Auspira Overseas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 
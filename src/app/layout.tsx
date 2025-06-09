import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Auspira Overseas - Industrial Bulk Bag Suppliers | FIBC Bags Manufacturer",
  description: "Leading manufacturer of FIBC bags, bulk bags, garbage bags, and Garbage Bag. BEE compliant industrial packaging solutions for global markets.",
  keywords: "FIBC bags, bulk bags, industrial packaging, garbage bags, Garbage Bag, Auspira Overseas",
  authors: [{ name: "Auspira Overseas" }],
  openGraph: {
    title: "Auspira Overseas - Industrial Bulk Bag Suppliers",
    description: "Leading manufacturer of FIBC bags and industrial packaging solutions",
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
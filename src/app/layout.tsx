import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Mulish, Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Huu Luan Luong",
  description: "Web developer",
};

const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-mulish',
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-playfair-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${mulish.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

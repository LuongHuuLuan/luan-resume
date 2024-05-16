import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Luong Huu Luan",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

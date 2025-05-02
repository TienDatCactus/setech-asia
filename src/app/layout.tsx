import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacadSans = Afacad({
  variable: "--font-afacad-sans",
  subsets: ["vietnamese", "latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacadSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}

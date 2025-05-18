"use client";
import {
  Footer,
  FooterExternal,
  Header,
  HeaderExternal,
} from "@/components/layout";
import { useSelectedLayoutSegment } from "next/navigation";

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <>
      {segment !== "home" ? <HeaderExternal /> : <Header />}
      <main className={`antialiased`}>{children}</main>
      {segment !== "home" ? <FooterExternal /> : <Footer />}
    </>
  );
}

import Footer from "@/components/layout/main/Footer";
import Header from "@/components/layout/main/Header";

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className={`antialiased min-h-screen`}>{children}</div>
      <Footer />
    </>
  );
}

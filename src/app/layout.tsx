import { Afacad } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const afacadSans = Afacad({
  variable: "--font-afacad-sans",
  subsets: ["vietnamese", "latin"],
});
// app/layout.tsx

export const metadata: Metadata = {
  title:
    "CÔNG TY TNHH DỊCH VỤ SETECH (SETECHS) | Giải pháp & Dịch vụ Công nghiệp hàng đầu tại Việt Nam",
  description:
    "Setechsasia cung cấp giải pháp, dịch vụ và đào tạo chuyên sâu về bảo trì công nghiệp, chẩn đoán nhiệt, làm sạch online & offline, bảo vệ thiết bị, tiết kiệm năng lượng và nhiên liệu. Chúng tôi phục vụ các ngành Lọc hóa dầu, Điện, Khí, Đạm, Vật liệu, v.v. với mục tiêu giúp khách hàng giảm chi phí, tránh rủi ro, bảo vệ tài sản và nâng cao hiệu quả sản xuất.",
  openGraph: {
    type: "website",
    url: "setech-asia.vercel.app",
    title:
      "CÔNG TY TNHH DỊCH VỤ SETECH (SETECHS) | Giải pháp & Dịch vụ Công nghiệp hàng đầu tại Việt Nam",
    description:
      "Setechsasia cung cấp giải pháp, dịch vụ và đào tạo chuyên sâu về bảo trì công nghiệp, chẩn đoán nhiệt, làm sạch online & offline, bảo vệ thiết bị, tiết kiệm năng lượng và nhiên liệu. Chúng tôi phục vụ các ngành Lọc hóa dầu, Điện, Khí, Đạm, Vật liệu, v.v. với mục tiêu giúp khách hàng giảm chi phí, tránh rủi ro, bảo vệ tài sản và nâng cao hiệu quả sản xuất.",
    images: [
      {
        url: "[URL hình ảnh đại diện]", // Thay bằng URL hình ảnh thực tế nếu có
        width: 800,
        height: 600,
        alt: "Setechsasia - Giải pháp & Dịch vụ Công nghiệp hàng đầu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CÔNG TY TNHH DỊCH VỤ SETECH (SETECHS) | Giải pháp & Dịch vụ Công nghiệp hàng đầu tại Việt Nam",
    description:
      "SETECH cung cấp giải pháp, dịch vụ và đào tạo chuyên sâu về bảo trì công nghiệp, chẩn đoán nhiệt, làm sạch online & offline, bảo vệ thiết bị, tiết kiệm năng lượng và nhiên liệu. Chúng tôi phục vụ các ngành Lọc hóa dầu, Điện, Khí, Đạm, Vật liệu, v.v. với mục tiêu giúp khách hàng giảm chi phí, tránh rủi ro, bảo vệ tài sản và nâng cao hiệu quả sản xuất.",
    images: ["[URL hình ảnh đại diện]"], // Thay bằng URL hình ảnh thực tế nếu có
  },
};

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

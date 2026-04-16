import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Claude Co-Work for Support Professionals | หลักสูตรการใช้ Claude AI เพิ่มประสิทธิภาพงานสนับสนุน",
  description:
    "หลักสูตร 1 วันเต็มที่จะเปลี่ยนวิธีใช้ AI ไปสู่การทำงานร่วมกับ AI เพิ่มประสิทธิภาพงานสนับสนุนหลังบ้านทุกบทบาท PA EA Admin HR Finance IT Ops Marketing Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-noto-thai)]">
        {children}
      </body>
    </html>
  );
}

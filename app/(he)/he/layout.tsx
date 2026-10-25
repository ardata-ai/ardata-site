import type { Metadata } from "next";
import type { ReactNode } from "react";
import { rubik } from "../../font-hebrew";
import { jakarta } from "../../fonts";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ardata.ai"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} ${rubik.variable} font-hebrew bg-main text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}

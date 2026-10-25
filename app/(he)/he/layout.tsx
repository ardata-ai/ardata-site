import type { ReactNode } from "react";
import { jakarta } from "../../fonts";
import "../../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} font-sans bg-main text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}

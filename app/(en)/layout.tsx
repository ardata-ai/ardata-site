import type { Metadata } from "next";
import type { ReactNode } from "react";
import { jakarta } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ardata.ai"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} font-sans bg-main text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}

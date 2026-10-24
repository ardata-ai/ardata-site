import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "ARdata.ai | AI Consulting & Agentic Automations",
  description: "ARdata.ai empowers SMEs and municipalities with cutting-edge AI strategy, autonomous agentic automations, and professional web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} font-sans bg-main text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}
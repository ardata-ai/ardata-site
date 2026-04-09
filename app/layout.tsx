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
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-[#071325] text-[#e8f0fe] antialiased`}>
        {children}
      </body>
    </html>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("ardata.ai@gmail.com");
    alert("Email copied to clipboard!");
  };

  const faqs = [
    { q: "What types of organizations do you work with?", a: "We work with small and medium-sized businesses and local municipalities taking their first or next steps in AI adoption." },
    { q: "Do I need technical knowledge to work with ARdata.ai?", a: "Not at all. We translate complex AI concepts into clear, actionable steps designed for non-technical decision-makers." },
    { q: "What does an agentic automation actually do?", a: "An AI agent can autonomously complete tasks like data processing, customer communication, scheduling, and reporting without constant human intervention." },
    { q: "How long does a typical project take?", a: "It depends on scope. Consulting engagements can begin immediately. Automation projects typically run 2–6 weeks. Web projects are usually delivered within 1–3 weeks." },
    { q: "How do I get started?", a: "Simply reach out via the contact section below and we'll schedule a free introductory call." },
  ];

  return (
    <main className="relative overflow-x-hidden bg-[#0a1628]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? "bg-[#0a1628]/95 backdrop-blur-md py-3 border-b border-blue-400/15" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]">
            ARdata.ai
          </Link>
          
          {/* Desktop Links - Updated for better visibility */}
          <ul className="hidden md:flex gap-10 items-center">
            <li>
              <Link href="/about" className="text-sm font-semibold text-white hover:text-[#00d4ff] transition-all">
                About Us
              </Link>
            </li>
            {["services", "faq", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-sm font-semibold text-white hover:text-[#00d4ff] transition-all capitalize">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button className="md:hidden flex flex-col gap-1.5 z-[1001]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0a1628] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMobileMenuOpen ? "top-0" : "-top-full"}`}>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#00d4ff]">
            About Us
          </Link>
          {["services", "faq", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold capitalize text-white hover:text-[#00d4ff]">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section - DASH REMOVED */}
      <header className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,#122a50_0%,#0a1628_70%)]">
          <div className="absolute inset-0 opacity-25 blur-[70px] animate-pulse" style={{ background: "radial-gradient(circle at 20% 30%, #0055cc 0%, transparent 50%)" }}></div>
        </div>
        
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-white">
            The AI Advantage: <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0072ff] bg-clip-text text-transparent">Built for Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-[#7fa8d4] mb-10 max-w-2xl mx-auto">
            Empowering SMEs & Municipalities with AI Consulting, Agentic Automations & Professional Web Presence.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/about" className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#0072ff] text-white font-semibold shadow-[0_4px_20px_rgba(0,114,255,0.35)] hover:-translate-y-1 transition-transform text-center">
              Our Technical Expertise
            </Link>
            <a href="#contact" className="px-8 py-4 rounded-lg bg-blue-400/10 border border-blue-400/15 text-white font-semibold hover:bg-blue-400/20 transition-all text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">What We Do</h2>
          <p className="text-[#7fa8d4]">Cutting-edge solutions tailored to your operational needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Consulting", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", desc: "We guide businesses and local governments through their first steps into artificial intelligence." },
            { title: "Agentic Automations", icon: "M2 3h20v14H2z M8 21h8 M12 17v4 M7 8l3 3-3 3 M12 14h5", desc: "We design autonomous AI agents that eliminate bottlenecks and reduce manual work." },
            { title: "Professional Web Presence", icon: "M16 18l6-6-6-6M8 6l-6 6 6 6 M12 4l-2 16", desc: "Modern, fast, and high-converting websites designed to represent your brand at its best." }
          ].map((service, i) => (
            <div key={i} className="group relative bg-[#0f1e38] border border-blue-400/15 p-10 rounded-2xl transition-all hover:-translate-y-2 hover:bg-[#122040] hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#0072ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-12 h-12 mb-6 stroke-[#00d4ff] fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-[#7fa8d4]">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-blue-400/15 py-5 cursor-pointer" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <div className="flex justify-between items-center text-lg font-medium text-white">
                {faq.q}
                <span className={`text-[#4db8ff] text-2xl transition-transform ${activeFaq === i ? "rotate-45" : ""}`}>+</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[#7fa8d4]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#0f1e38] border border-blue-400/15 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-[#00d4ff] to-[#0072ff] opacity-60"></div>
          <h2 className="text-4xl font-bold mb-4 text-white">Let's Talk</h2>
          <p className="text-[#7fa8d4] mb-8">Ready to explore what AI can do for your organization?</p>
          <a href="mailto:ardata.ai@gmail.com" className="text-3xl md:text-5xl font-bold text-[#00d4ff] hover:text-white transition-all block mb-10 break-all">
            ardata.ai@gmail.com
          </a>
          <button onClick={copyEmail} className="px-6 py-3 rounded-full bg-blue-400/10 border border-blue-400/15 text-white hover:bg-[#00d4ff] hover:text-[#0a1628] transition-all">
            Copy Email Address
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0f1e38] border-t border-blue-400/15 text-center">
        <ul className="flex justify-center gap-8 mb-8 text-[#7fa8d4]">
          <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          {["services", "faq", "contact"].map(item => (
            <li key={item}><a href={`#${item}`} className="hover:text-white transition-colors capitalize">{item}</a></li>
          ))}
        </ul>
        <p className="text-[#3d6080] text-sm">© 2026 ARdata.ai — All rights reserved.</p>
      </footer>
    </main>
  );
}
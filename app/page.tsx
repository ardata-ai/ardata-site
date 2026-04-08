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

  // מניעת גלילה כשהתפריט פתוח
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("ardata.ai@gmail.com");
    alert("Email copied to clipboard!");
  };

  const faqs = [
    { q: "Who is ARdata.ai for?", a: "We work with small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but aren't sure where to begin. No in-house tech team required." },
    { q: "Do I need technical knowledge to work with ARdata.ai?", a: "Not at all. We translate complex AI concepts into clear, actionable steps designed for non-technical decision-makers." },
    { q: "What does an agentic automation actually do?", a: "An AI agent can autonomously complete tasks like data processing, customer communication, scheduling, and reporting without constant human intervention." },
    { q: "How long does a typical project take?", a: "It depends on scope. Consulting engagements can begin immediately. Automation projects typically run 2 to 6 weeks. Web projects are usually delivered within 1 to 3 weeks." },
    { q: "How do I get started?", a: "Simply reach out via the contact section below and we'll schedule a free introductory call." },
  ];

  return (
    <main className="relative overflow-x-hidden bg-[#0a1628]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-[#0a1628]/95 backdrop-blur-md py-3 border-b border-blue-400/15" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0072ff] bg-clip-text text-transparent z-[1002]">
            ARdata.ai
          </Link>
          
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

          <button className="md:hidden flex flex-col gap-1.5 z-[1002] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0a1628] z-[1001] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
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

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,#122a50_0%,#0a1628_70%)]">
          <div className="absolute inset-0 opacity-25 blur-[70px] animate-pulse" style={{ background: "radial-gradient(circle at 20% 30%, #0055cc 0%, transparent 50%)" }}></div>
        </div>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-white">
            AI is everywhere.<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0072ff] bg-clip-text text-transparent">Knowing where to start is the hard part.</span>
          </h1>
          <p className="text-base md:text-xl text-[#7fa8d4] mb-10 max-w-2xl mx-auto">
            We help small businesses and local municipalities take their first real steps in AI, with a clear plan, the right tools, and zero technical jargon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What We Do</h2>
          <p className="text-[#7fa8d4]">Practical AI solutions for organizations that are ready to move from curiosity to results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Consulting", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", desc: "We guide businesses and local governments through their first real steps in AI. Strategy, tools, and roadmaps built for non-technical teams." },
            { title: "Agentic Automations", icon: "M2 3h20v14H2z M8 21h8 M12 17v4 M7 8l3 3-3 3 M12 14h5", desc: "We design autonomous AI agents that eliminate bottlenecks, reduce manual work, and handle tasks that were previously too costly to automate." },
            { title: "Professional Web Presence", icon: "M16 18l6-6-6-6M8 6l-6 6 6 6 M12 4l-2 16", desc: "Modern, fast, and professional websites for SMEs and municipalities. From a clean landing page to a full multi-page site, built to grow with you." }
          ].map((service, i) => (
            <div key={i} className="group relative bg-[#0f1e38] border border-blue-400/15 p-8 md:p-10 rounded-2xl transition-all hover:-translate-y-2 hover:bg-[#122040] hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#0072ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-12 h-12 mb-6 stroke-[#00d4ff] fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-[#7fa8d4] text-sm md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-blue-400/15 py-5 cursor-pointer" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <div className="flex justify-between items-center text-base md:text-lg font-medium text-white gap-4 text-left">
                {faq.q}
                <span className={`text-[#4db8ff] text-2xl transition-transform flex-shrink-0 ${activeFaq === i ? "rotate-45" : ""}`}>+</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[#7fa8d4] text-sm md:text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#0f1e38] border border-blue-400/15 rounded-[2rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-[#00d4ff] to-[#0072ff] opacity-60"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Talk</h2>
          <p className="text-[#7fa8d4] mb-8 text-sm md:text-base">Ready to explore what AI can do for your organization? We would love to hear from you.</p>
          <a href="mailto:ardata.ai@gmail.com" className="text-xl sm:text-2xl md:text-5xl font-bold text-[#00d4ff] hover:text-white transition-all block mb-10 break-words overflow-hidden px-2">
            ardata.ai@gmail.com
          </a>
          <button onClick={copyEmail} className="px-6 py-3 rounded-full bg-blue-400/10 border border-blue-400/15 text-white hover:bg-[#00d4ff] hover:text-[#0a1628] transition-all text-sm md:text-base">
            Copy Email Address
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0f1e38] border-t border-blue-400/15 text-center px-6">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-[#7fa8d4] text-sm">
          <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          {["services", "faq", "contact"].map(item => (
            <li key={item}><a href={`#${item}`} className="hover:text-white transition-colors capitalize">{item}</a></li>
          ))}
        </ul>
        <p className="text-[#3d6080] text-xs md:text-sm">© 2026 ARdata.ai. All rights reserved.</p>
      </footer>
    </main>
  );
}
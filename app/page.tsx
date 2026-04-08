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

  // ניהול גלילה כשהתפריט פתוח
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? "bg-[#0a1628]/95 backdrop-blur-md py-3 border-b border-blue-400/15" : "bg-transparent py-5"}`}>
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

          {/* Hamburger Button */}
          <button className="md:hidden z-[1002] p-2 flex flex-col gap-1.5 items-end" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
          </button>
        </div>

        {/* Side Mobile Menu (Drawer) */}
        <div className={`fixed inset-y-0 right-0 w-[280px] bg-[#0f1e38] shadow-2xl z-[1001] transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col pt-32 px-10 gap-8">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-[#00d4ff]">
              About Us
            </Link>
            {["services", "faq", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium capitalize text-white hover:text-[#00d4ff]">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Dark Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,#122a50_0%,#0a1628_70%)]">
          <div className="absolute inset-0 opacity-25 blur-[70px] animate-pulse" style={{ background: "radial-gradient(circle at 20% 30%, #0055cc 0%, transparent 50%)" }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Sub-header (The "AI IS EVERYWHERE" part) */}
          <span className="block text-[#00d4ff] text-lg md:text-2xl font-black tracking-[0.3em] uppercase mb-6 opacity-100">
            AI is everywhere.
          </span>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.05] mb-10 tracking-tight text-white px-2">
            Knowing where <br className="hidden md:block" /> to start is the <br className="hidden md:block" /> 
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#4db8ff] to-[#0072ff] bg-clip-text text-transparent">
              hard part.
            </span>
          </h1>

          {/* Description - Made smaller and more elegant */}
          <p className="text-sm md:text-lg text-[#7fa8d4] mb-12 max-w-lg mx-auto leading-relaxed opacity-80 font-medium">
            We help small businesses and local municipalities take their first real steps in AI, with a clear plan, the right tools, and zero technical jargon.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link href="/about" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0072ff] text-white font-bold shadow-[0_4px_25px_rgba(0,114,255,0.4)] hover:-translate-y-1 transition-all active:scale-95 text-center">
              Our Technical Expertise
            </Link>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-400/5 border border-blue-400/20 text-white font-bold hover:bg-blue-400/15 transition-all active:scale-95 text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">What We Do</h2>
          <p className="text-[#7fa8d4] text-lg max-w-2xl mx-auto">Practical AI solutions for organizations that are ready to move from curiosity to results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            { title: "AI Consulting", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", desc: "We guide businesses and local governments through their first real steps in AI. Strategy, tools, and roadmaps built for non-technical teams." },
            { title: "Agentic Automations", icon: "M2 3h20v14H2z M8 21h8 M12 17v4 M7 8l3 3-3 3 M12 14h5", desc: "We design autonomous AI agents that eliminate bottlenecks, reduce manual work, and handle tasks that were previously too costly to automate." },
            { title: "Professional Web Presence", icon: "M16 18l6-6-6-6M8 6l-6 6 6 6 M12 4l-2 16", desc: "Modern, fast, and professional websites for SMEs and municipalities. From a clean landing page to a full multi-page site, built to grow with you." }
          ].map((service, i) => (
            <div key={i} className="group relative bg-[#0f1e38] border border-blue-400/10 p-10 rounded-3xl transition-all hover:-translate-y-2 hover:bg-[#122445] hover:border-blue-400/30 hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0072ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-14 h-14 mb-8 stroke-[#00d4ff] fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00d4ff] transition-colors">{service.title}</h3>
              <p className="text-[#7fa8d4] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#0f1e38]/50 border border-blue-400/10 rounded-2xl p-6 cursor-pointer hover:border-blue-400/30 transition-all" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <div className="flex justify-between items-center text-lg font-bold text-white gap-4 text-left">
                {faq.q}
                <span className={`text-[#00d4ff] text-2xl font-light transition-transform flex-shrink-0 ${activeFaq === i ? "rotate-45" : ""}`}>+</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[#7fa8d4] leading-relaxed border-t border-blue-400/10 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#122445] to-[#0f1e38] border border-blue-400/15 rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-[#00d4ff] to-[#0072ff] opacity-60"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Let's Talk</h2>
          <p className="text-[#7fa8d4] text-lg md:text-xl mb-12 max-w-xl mx-auto">Ready to explore what AI can do for your organization? We would love to hear from you.</p>
          
          <div className="mb-12">
            <a 
              href="mailto:ardata.ai@gmail.com" 
              className="text-2xl sm:text-3xl md:text-6xl font-black text-white hover:text-[#00d4ff] transition-all inline-block max-w-full break-all leading-tight"
            >
              ardata.ai@gmail.com
            </a>
          </div>

          <button 
            onClick={copyEmail} 
            className="group px-8 py-4 rounded-full bg-blue-400/10 border border-blue-400/20 text-white font-bold hover:bg-[#00d4ff] hover:text-[#0a1628] hover:border-[#00d4ff] transition-all flex items-center gap-3 mx-auto"
          >
            <span>Copy Email Address</span>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0a1628] border-t border-blue-400/10 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white mb-8">ARdata.ai</div>
          <ul className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 text-[#7fa8d4] font-medium">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            {["services", "faq", "contact"].map(item => (
              <li key={item}><a href={`#${item}`} className="hover:text-white transition-colors capitalize">{item}</a></li>
            ))}
          </ul>
          <div className="h-px w-24 bg-blue-400/20 mx-auto mb-8"></div>
          <p className="text-[#3d6080] text-sm">© 2026 ARdata.ai. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
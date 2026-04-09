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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const faqs = [
    { q: "Who is ARdata.ai for?", a: "We work with small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but aren't sure where to begin. No in-house tech team required." },
    { q: "Do I need technical knowledge to work with ARdata.ai?", a: "Not at all. We translate complex AI concepts into clear, actionable steps designed for non-technical decision-makers." },
    { q: "What does an agentic automation actually do?", a: "An AI agent can autonomously complete tasks like data processing, customer communication, scheduling, and reporting without constant human intervention." },
    { q: "How long does a typical project take?", a: "It depends on scope. Consulting engagements can begin immediately. Automation projects typically run 2 to 6 weeks. Web projects are usually delivered within 1 to 3 weeks." },
    { q: "How do I get started?", a: "Simply reach out via the contact section below and we'll schedule a free introductory call." },
  ];

  const tools = [
    { name: "OpenAI", letter: "O" },
    { name: "Anthropic", letter: "A" },
    { name: "Google", letter: "G" },
    { name: "N8N", letter: "N" },
    { name: "Make", letter: "M" },
    { name: "Zapier", letter: "Z" },
  ];

  return (
    <main className="relative overflow-x-hidden bg-[#071325] selection:bg-[#00d4ff]/30">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? "bg-[#071325]/80 backdrop-blur-md py-4 border-b border-[#00d4ff]/10" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#a8e8ff] z-[1002]">
            ARdata.ai
          </Link>
          <ul className="hidden md:flex gap-10 items-center">
            <li><Link href="/about" className="text-sm font-semibold text-[#bbc9cf] hover:text-[#00d4ff] transition-all">About Us</Link></li>
            {["services", "faq", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-sm font-semibold text-[#bbc9cf] hover:text-[#00d4ff] transition-all capitalize">{item}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="px-6 py-2 rounded-lg bg-[#00d4ff] text-[#071325] font-bold text-sm hover:opacity-90 transition-all active:scale-90">
                Let's Talk
              </a>
            </li>
          </ul>
          <button className="md:hidden z-[1002] p-2 flex flex-col gap-1.5 items-end" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
          </button>
        </div>
        <div className={`fixed inset-y-0 right-0 w-[280px] bg-[#0f1e38] shadow-2xl z-[1001] transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col pt-32 px-10 gap-8">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-[#00d4ff]">About Us</Link>
            {["services", "faq", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium capitalize text-white hover:text-[#00d4ff]">{item}</a>
            ))}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,#122a50_0%,#071325_70%)]"></div>

        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-black tracking-widest uppercase mb-8">
            AI is everywhere.
          </span>

          {/* Updated headline matching Stitch design */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] mb-10 tracking-tighter text-white">
            Knowing where to{" "}
            <br className="hidden md:block" />
            <span
              style={{
                background: "linear-gradient(90deg, #00d4ff 0%, #4db8ff 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              start
            </span>{" "}
            is the hard
            <br className="hidden md:block" />
            part.
          </h1>

          <p className="text-lg md:text-xl text-[#bbc9cf] mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We help small businesses and local municipalities take their first real steps in AI, with a clear plan, the right tools, and zero technical jargon.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/about" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#00d4ff] text-[#071325] font-bold shadow-[0_4px_25px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all active:scale-95 text-center">
              Our Technical Expertise
            </Link>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-transparent border border-[#00d4ff]/30 text-white font-bold hover:bg-[#00d4ff]/10 transition-all active:scale-95 text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">What We Do</h2>
          <p className="text-[#bbc9cf] text-xl max-w-2xl">Practical AI solutions for organizations ready to move from curiosity to results.</p>
        </div>

        {/* Asymmetric grid: large card on left, two smaller on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Large card — AI Consulting */}
          <div className="group relative bg-[#101c2e] border border-[#3c494e]/20 p-10 rounded-2xl transition-all hover:-translate-y-1 hover:border-[#00d4ff]/30 shadow-xl flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-8 group-hover:bg-[#00d4ff]/20 transition-colors">
                <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">AI Consulting</h3>
              <p className="text-[#bbc9cf] leading-relaxed font-medium mb-6">We guide businesses and local governments through their first real steps in AI. Strategy, tools, and roadmaps built for non-technical teams.</p>
              <ul className="space-y-2 mb-8">
                {["Strategy Design", "Tool Selection", "Implementation Roadmap"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#7fa8d4]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="text-sm font-bold text-[#00d4ff] hover:underline">Learn More →</a>
          </div>

          {/* Right column: two smaller cards stacked */}
          <div className="flex flex-col gap-6">

            {/* Agentic Automations */}
            <div className="group relative bg-[#101c2e] border border-[#3c494e]/20 p-8 rounded-2xl transition-all hover:-translate-y-1 hover:border-[#00d4ff]/30 shadow-xl flex flex-col justify-between flex-1">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00d4ff] transition-colors">Agentic Automations</h3>
                <p className="text-[#bbc9cf] leading-relaxed font-medium text-sm mb-4">Autonomous AI agents that eliminate bottlenecks and handle tasks that were previously too costly to automate.</p>
                <ul className="space-y-1.5 mb-6">
                  {["Workflow Automation", "AI Agent Design", "System Integration"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#7fa8d4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="text-sm font-bold text-[#00d4ff] hover:underline">Learn More →</a>
            </div>

            {/* Professional Web Presence */}
            <div className="group relative bg-[#101c2e] border border-[#3c494e]/20 p-8 rounded-2xl transition-all hover:-translate-y-1 hover:border-[#00d4ff]/30 shadow-xl flex flex-col justify-between flex-1">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00d4ff] transition-colors">Professional Web Presence</h3>
                <p className="text-[#bbc9cf] leading-relaxed font-medium text-sm mb-4">Modern, fast websites for SMEs and municipalities — from a landing page to a full multi-page site.</p>
                <ul className="space-y-1.5 mb-6">
                  {["Custom Design", "Next.js Development", "SEO & Performance"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#7fa8d4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="text-sm font-bold text-[#00d4ff] hover:underline">Explore Portfolio →</a>
            </div>
          </div>
        </div>

        {/* Tools / Logo Strip */}
        <div className="mt-16 border-t border-[#3c494e]/20 pt-12">
          <p className="text-xs font-black uppercase tracking-widest text-[#5c6d74] text-center mb-8">Tools & Platforms We Work With</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center gap-2 text-[#5c6d74] hover:text-[#bbc9cf] transition-colors">
                <div className="w-7 h-7 rounded-md bg-[#101c2e] border border-[#3c494e]/20 flex items-center justify-center text-xs font-black text-[#00d4ff]">
                  {tool.letter}
                </div>
                <span className="text-sm font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white tracking-tighter">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#101c2e] border border-[#3c494e]/15 rounded-xl overflow-hidden transition-all hover:border-[#00d4ff]/20" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <div className="flex justify-between items-center p-6 text-lg font-bold text-white cursor-pointer select-none">
                {faq.q}
                <span className={`text-[#00d4ff] text-2xl transition-transform ${activeFaq === i ? "rotate-45" : ""}`}>+</span>
              </div>
              <div className={`transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-6 text-[#bbc9cf] leading-relaxed border-t border-[#3c494e]/10 pt-4 font-medium">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#101c2e] border border-[#3c494e]/15 rounded-3xl p-12 md:p-24 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter leading-tight">Let's build the <span className="text-[#00d4ff]">next era</span> together.</h2>
              <p className="text-[#bbc9cf] text-xl mb-12 font-medium">Ready to explore what AI can do for your organization? We would love to hear from you.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00d4ff]">@</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#5c6d74] font-black uppercase tracking-widest mb-1">Email Us</div>
                    <a href="mailto:ardata.ai@gmail.com" className="text-xl font-bold text-white hover:text-[#00d4ff] transition-colors">ardata.ai@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00d4ff]">#</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#5c6d74] font-black uppercase tracking-widest mb-1">Global HQ</div>
                    <div className="text-xl font-bold text-white">Worldwide / Israel</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#071325] p-10 rounded-2xl border border-[#3c494e]/15">
              <form className="space-y-6" action="https://formspree.io/f/mpqoegpa" method="POST">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">First Name</label>
                    <input name="firstName" type="text" placeholder="John" className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Company</label>
                    <input name="company" type="text" placeholder="Acme Corp" className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Email</label>
                  <input name="email" type="email" placeholder="you@company.com" className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Inquiry Type</label>
                  <select name="inquiryType" className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all appearance-none">
                    <option>Strategic Consulting</option>
                    <option>Agentic Automation</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Message</label>
                  <textarea name="message" placeholder="How can we help?" rows={4} className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-[#00d4ff] text-[#071325] font-bold hover:opacity-90 transition-all shadow-lg active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#101c2e] border-t border-[#3c494e]/10 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-bold tracking-tighter text-[#a8e8ff]">ARdata.ai</div>
          <ul className="flex flex-wrap justify-center gap-8 md:gap-12 text-[#bbc9cf] font-medium text-sm">
            <li><Link href="/about" className="hover:text-[#00d4ff] transition-colors">About Us</Link></li>
            {["services", "faq", "contact"].map(item => (
              <li key={item}><a href={`#${item}`} className="hover:text-[#00d4ff] transition-colors capitalize">{item}</a></li>
            ))}
          </ul>
          <div className="text-[#5c6d74] text-xs font-medium uppercase tracking-widest">
            © 2026 ARdata.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
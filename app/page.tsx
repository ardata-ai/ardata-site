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
    <main className="relative overflow-x-hidden bg-[#071325] selection:bg-[#00d4ff]/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? "bg-[#071325]/80 backdrop-blur-md py-4 border-b border-[#00d4ff]/10" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#a8e8ff] z-[1002]">
            ARdata.ai
          </Link>
          
          <ul className="hidden md:flex gap-10 items-center">
            <li>
              <Link href="/about" className="text-sm font-semibold text-[#bbc9cf] hover:text-[#00d4ff] transition-all">
                About Us
              </Link>
            </li>
            {["services", "faq", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-sm font-semibold text-[#bbc9cf] hover:text-[#00d4ff] transition-all capitalize">
                  {item}
                </a>
              </li>
            ))}
            <li>
               <a href="#contact" className="px-6 py-2 rounded-lg bg-[#00d4ff] text-[#071325] font-bold text-sm hover:opacity-90 transition-all scale-95 active:scale-90">
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
          
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] mb-10 tracking-tighter text-white">
            Knowing where <br className="hidden md:block" /> to start is the <br className="hidden md:block" /> 
            <span className="text-[#00d4ff]">hard part.</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Consulting", desc: "We guide businesses and local governments through their first real steps in AI. Strategy, tools, and roadmaps built for non-technical teams." },
            { title: "Agentic Automations", desc: "We design autonomous AI agents that eliminate bottlenecks, reduce manual work, and handle tasks that were previously too costly to automate." },
            { title: "Professional Web Presence", desc: "Modern, fast, and professional websites for SMEs and municipalities. From a clean landing page to a full multi-page site, built to grow with you." }
          ].map((service, i) => (
            <div key={i} className="group relative bg-[#101c2e] border border-[#3c494e]/15 p-10 rounded-2xl transition-all hover:-translate-y-2 hover:bg-[#14233a] hover:border-[#00d4ff]/30 shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-8 group-hover:bg-[#00d4ff]/20 transition-colors">
                <div className="w-6 h-6 bg-[#00d4ff] rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00d4ff] transition-colors">{service.title}</h3>
              <p className="text-[#bbc9cf] leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
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
                    <input type="text" placeholder="John" className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Company</label>
                    <input type="text" placeholder="Acme Corp" className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all appearance-none">
                    <option>Strategic Consulting</option>
                    <option>Agentic Automation</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#5c6d74] uppercase tracking-widest">Message</label>
                  <textarea placeholder="How can we help?" rows={4} className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full py-4 rounded-xl bg-[#00d4ff] text-[#071325] font-bold hover:opacity-90 transition-all shadow-lg active:scale-[0.98]">
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
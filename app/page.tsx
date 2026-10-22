import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

const services = [
  {
    title: "AI Consulting",
    description:
      "Navigate the complexity of LLMs and generative architectures. We define the roadmap, select the stack, and ensure your AI investment delivers measurable ROI.",
    bullets: ["Tech-Stack Audit", "AI Architecture Design", "Ethical Compliance Mapping", "Scaling Strategies"],
    href: "#contact",
    cta: "Learn More →",
    icon: (
      <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Agentic Automations",
    description: "Systems that don't just process data — they take action. Custom autonomous agents for complex workflows.",
    bullets: ["Workflow Automation", "AI Agent Design", "System Integration"],
    href: "#contact",
    cta: "Learn More →",
    icon: (
      <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Professional Presence",
    description: "High-fidelity web experiences that communicate your brand's technical authority and forward-thinking vision.",
    bullets: ["Custom Design", "Next.js Development", "SEO & Performance"],
    href: "#contact",
    cta: "Explore Portfolio →",
    icon: (
      <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const tools = [
  { name: "OpenAI", letter: "O" },
  { name: "Anthropic", letter: "A" },
  { name: "Google", letter: "G" },
  { name: "N8N", letter: "N" },
  { name: "Make", letter: "M" },
  { name: "Zapier", letter: "Z" },
];

const faqs = [
  { q: "Who is ARdata.ai for?", a: "We work with small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but aren't sure where to begin. No in-house tech team required." },
  { q: "Do I need technical knowledge to work with ARdata.ai?", a: "Not at all. We translate complex AI concepts into clear, actionable steps designed for non-technical decision-makers." },
  { q: "What does an agentic automation actually do?", a: "An AI agent can autonomously complete tasks like data processing, customer communication, scheduling, and reporting without constant human intervention." },
  { q: "How long does a typical project take?", a: "It depends on scope. Consulting engagements can begin immediately. Automation projects typically run 2 to 6 weeks. Web projects are usually delivered within 1 to 3 weeks." },
  { q: "How do I get started?", a: "Simply reach out via the contact section below and we'll schedule a free introductory call." },
];

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-[#071325] selection:bg-[#00d4ff]/30 pt-16">
      <Header />

      <header className="relative flex items-center justify-center text-center px-6 py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,#122a50_0%,#071325_70%)]" />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.15] mb-8 tracking-tight text-white text-balance">
            AI is everywhere.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00d4ff 0%, #4db8ff 60%, #a8e8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Knowing where to start
            </span>{" "}
            is the hard part.
          </h1>

          <p className="text-lg md:text-xl text-[#bbc9cf] mb-10 max-w-2xl mx-auto leading-relaxed font-medium text-pretty">
            We help small businesses and local municipalities take their first real steps in AI, with a clear plan, the right tools, and zero technical jargon.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#00d4ff] text-[#071325] font-bold shadow-[0_4px_25px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all active:scale-95 text-center"
            >
              Get in Touch
            </a>
            <Link
              href="/about"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-transparent border border-[#00d4ff]/30 text-white font-bold hover:bg-[#00d4ff]/10 transition-all active:scale-95 text-center"
            >
              Our Technical Expertise
            </Link>
          </div>
        </div>
      </header>

      <section id="services" className="py-24 md:py-32 max-w-7xl mx-auto px-6 scroll-mt-20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">What We Do</h2>
          <p className="text-[#bbc9cf] text-xl max-w-2xl">Practical AI solutions for organizations ready to move from curiosity to results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative bg-[#101c2e] border border-[#3c494e]/20 p-8 rounded-2xl transition-all hover:-translate-y-1 hover:border-[#00d4ff]/30 shadow-xl flex flex-col min-h-[320px]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">{service.title}</h3>
              <p className="text-base text-[#bbc9cf] leading-relaxed font-medium mb-5">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#bbc9cf]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={service.href} className="mt-auto text-sm font-bold text-[#00d4ff] hover:underline">
                {service.cta}
              </a>
            </article>
          ))}

          <article className="relative bg-[#0d1829] border border-[#3c494e]/20 p-8 rounded-2xl shadow-xl flex flex-col min-h-[320px]">
            <p className="text-xs font-black uppercase tracking-widest text-[#bbc9cf] mb-8">Tools & Platforms We Work With</p>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 text-[#bbc9cf] hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#101c2e] border border-[#3c494e]/20 flex items-center justify-center text-xs font-black text-[#00d4ff] flex-shrink-0">
                    {tool.letter}
                  </div>
                  <span className="text-sm font-semibold">{tool.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#bbc9cf] mt-auto pt-8">And more tools tailored to each project&apos;s needs.</p>
          </article>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <section id="contact" className="py-24 md:py-32 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto bg-[#101c2e] border border-[#3c494e]/15 rounded-3xl p-12 md:p-24 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
                Let&apos;s build the <span className="text-[#00d4ff]">next era</span> together.
              </h2>
              <p className="text-[#bbc9cf] text-xl mb-12 font-medium">
                Ready to explore what AI can do for your organization? We would love to hear from you.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00d4ff]">@</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#5c6d74] font-black uppercase tracking-widest mb-1">Email Us</div>
                    <a href="mailto:ardata.ai@gmail.com" className="text-xl font-bold text-white hover:text-[#00d4ff] transition-colors">
                      ardata.ai@gmail.com
                    </a>
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
                  <textarea name="message" placeholder="How can we help?" rows={4} className="w-full bg-[#101c2e] border border-[#3c494e]/15 rounded-lg p-3 text-white focus:border-[#00d4ff]/50 outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-[#00d4ff] text-[#071325] font-bold hover:opacity-90 transition-all shadow-lg active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

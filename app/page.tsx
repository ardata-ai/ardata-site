import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import ExpertiseCard from "./components/ExpertiseCard";
import PlatformShowcase from "./components/PlatformShowcase";
import { FlowVisual, NetworkVisual, SpatialVisual } from "./components/VisualFrames";

const areas = [
  {
    title: "Practical AI Strategy",
    description:
      "We build clear, actionable roadmaps to help your organization adopt AI easily. We identify high-value opportunities and guide you step-by-step on embedding the right tools into your existing workflows—with zero friction.",
    tags: ["AI Roadmap", "Workflow Integration", "Tool Selection", "ROI Optimization"],
    caption: "strategy.flow",
    visual: <FlowVisual />,
    glow: "from-violet-500/30 via-amber-400/20 to-transparent",
  },
  {
    title: "AI Workflows & Agentic Automations",
    description:
      "Beyond basic chatbots—we build smart AI workflows that actually take action. Our autonomous agents execute multi-step business logic, connect your existing tools, and handle complex operational tasks without manual intervention.",
    tags: ["Multi-Step Logic", "CRM & System Sync", "Smart Decisioning", "End-to-End Execution"],
    caption: "agents.flow",
    visual: <NetworkVisual />,
    glow: "from-cyan-400/30 via-emerald-400/25 to-transparent",
  },
  {
    title: "AI-Ready Web & Applications",
    description:
      "We build fast, modern digital interfaces and custom web applications designed specifically around AI workflows, interactive data dashboards, and automated customer portals.",
    tags: ["AI Dashboards & Portals", "Next.js & React", "Custom AI UI/UX", "Full-Stack Web"],
    caption: "portal.ai",
    visual: <SpatialVisual />,
    glow: "from-fuchsia-500/30 via-violet-500/25 to-transparent",
  },
];

const faqs = [
  { q: "Who is ARdata.ai for?", a: "We work with small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but aren't sure where to begin. No in-house tech team required." },
  { q: "Do I need technical knowledge to work with ARdata.ai?", a: "Not at all. We translate complex AI concepts into clear, actionable steps designed for non-technical decision-makers." },
  { q: "What does an agentic automation actually do?", a: "An AI agent can autonomously complete tasks like data processing, customer communication, scheduling, and reporting without constant human intervention." },
  { q: "How long does a typical project take?", a: "It depends on scope. Consulting engagements can begin immediately. Automation projects typically run 2 to 6 weeks. Web projects are usually delivered within 1 to 3 weeks." },
  { q: "How do I get started?", a: "Simply reach out via the contact section below and we'll schedule a free introductory call." },
];

const primaryButtonClass =
  "inline-flex w-full items-center justify-center rounded-xl bg-brand-cyan px-8 py-4 text-center text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-105 hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)] sm:w-auto";

const secondaryButtonClass =
  "inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-transparent px-8 py-4 text-center text-lg font-semibold text-main transition-all duration-200 hover:scale-105 hover:bg-white/10 sm:w-auto";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-main p-3 text-main outline-none transition-all duration-200 placeholder:text-[#64748B] focus:border-brand-cyan";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-main text-main selection:bg-brand-cyan/30 pt-16">
      <Header />

      <header className="relative flex items-center justify-center px-6 pb-8 pt-14 text-center md:px-12 md:pb-10 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.18),transparent_55%)]" />

        <div className="mx-auto w-full max-w-[1400px]">
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-main md:text-6xl lg:text-7xl">
            <span className="block">AI is everywhere.</span>
            <span className="block text-brand-cyan">Knowing where to start</span>
            <span className="block">is the hard part.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-muted md:text-2xl">
            We help growing companies and public organizations take their first real steps in AI—with a clear action plan, the right tech stack, and zero technical jargon.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a href="#contact" className={primaryButtonClass}>
              Get in Touch
            </a>
            <Link href="/about" className={secondaryButtonClass}>
              Our Technical Expertise
            </Link>
          </div>
        </div>
      </header>

      <section id="services" className="scroll-mt-20 px-6 pb-16 pt-6 md:px-12 md:pb-24 md:pt-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-main md:text-6xl">Our Core Areas</h2>
            <p className="mt-5 text-lg text-muted md:text-xl">
              Practical AI solutions for organizations ready to move from curiosity to results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {areas.map((area) => (
              <ExpertiseCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      <PlatformShowcase />

      <FaqSection faqs={faqs} />

      <section id="contact" className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl border border-white/10 bg-card p-6 shadow-glow sm:p-10 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-main md:text-6xl">
                Let&apos;s build the <span className="text-brand-cyan">next era</span> together.
              </h2>
              <p className="mb-10 text-lg font-medium text-muted md:text-xl">
                Ready to explore what AI can do for your organization? We would love to hear from you.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                    @
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-muted">Email Us</div>
                    <a href="mailto:ardata.ai@gmail.com" className="text-lg font-bold text-main transition-colors duration-200 hover:text-brand-cyan md:text-xl">
                      ardata.ai@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                    #
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-muted">Global HQ</div>
                    <div className="text-lg font-bold text-main md:text-xl">Worldwide / Israel</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-soft p-6 sm:p-8">
              <form className="space-y-6" action="https://formspree.io/f/mpqoegpa" method="POST">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted" htmlFor="firstName">
                      First Name
                    </label>
                    <input id="firstName" name="firstName" type="text" placeholder="John" className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted" htmlFor="company">
                      Company
                    </label>
                    <input id="company" name="company" type="text" placeholder="Acme Corp" className={fieldClass} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted" htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted" htmlFor="inquiryType">
                    Inquiry Type
                  </label>
                  <select id="inquiryType" name="inquiryType" className={`${fieldClass} appearance-none`}>
                    <option>Strategic Consulting</option>
                    <option>Agentic Automation</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" placeholder="How can we help?" rows={4} className={`${fieldClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-cyan px-8 py-4 text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)]"
                >
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

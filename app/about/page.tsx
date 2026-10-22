import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | ARdata.ai",
  description:
    "Our technical expertise spans the entire spectrum of modern AI development, from complex agentic workflows to high-impact web architectures.",
};

const specializations = [
  {
    title: "Agentic Workflows & Multi-Agent Systems",
    description:
      "We build sophisticated autonomous systems where specialized AI agents collaborate to solve complex, multi-step business logic. This isn't just automation—it's cognitive labor orchestration. By leveraging platforms like n8n, we connect your existing tech stack to execute complex tasks without manual intervention.",
    techStack: ["LangGraph", "CrewAI", "AutoGPT", "Python Microservices", "n8n"],
    imagePlaceholder: "Agentic Workflows & Multi-Agent Systems",
  },
  {
    title: "Professional Web Presence",
    description:
      "We translate AI complexity into accessible, high-converting digital experiences. Our web solutions are built for speed, SEO, and visual impact—ensuring your tech looks as advanced as it truly is. From single-page landing to multi-page sites with embedded AI assistants.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel Edge", "AI Chat Integration"],
    imagePlaceholder: "Professional Web Presence",
  },
  {
    title: "AI Transformation Strategy",
    description:
      "Beyond the code, we provide the roadmap. We identify high-ROI opportunities for AI integration within your existing operations, ensuring your technology investments drive measurable business growth. No prior AI knowledge required.",
    techStack: ["ROI Mapping", "Governance", "Ethical AI", "Stack Selection", "Readiness Assessment"],
    imagePlaceholder: "AI Transformation Strategy",
  },
];

const secondaryButtonClassName =
  "px-10 py-5 rounded-xl bg-transparent border border-[#00d4ff]/30 text-white font-bold text-lg hover:bg-[#00d4ff]/10 transition-all";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#071325] text-white selection:bg-[#00d4ff]/30 pt-16">
      <Header />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-32">
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.15] text-balance">
              Forging the <span className="text-[#00d4ff]">Digital Frontier</span> with Precision.
            </h1>
            <p className="text-[#bbc9cf] text-xl max-w-2xl leading-relaxed font-medium">
              Our technical expertise spans the entire spectrum of modern AI development, from complex agentic workflows to
              high-impact web architectures.
            </p>
          </div>
          <div
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-2xl border border-[#3c494e]/20 bg-[#101c2e] overflow-hidden"
            aria-label="Founder photo placeholder"
          >
            <div className="absolute inset-4 rounded-xl border border-dashed border-[#bbc9cf]/25 flex items-center justify-center">
              <p className="text-sm font-medium text-[#bbc9cf] text-center px-6">[TODO: founder photo]</p>
            </div>
          </div>
        </section>

        <div className="space-y-48">
          {specializations.map((spec, index) => (
            <section
              key={spec.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-24 items-center`}
            >
              <div className="flex-1 space-y-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-[#00d4ff]/50" />
                  <div className="text-[#00d4ff] text-xs font-black uppercase tracking-[0.2em]">
                    Expertise 0{index + 1}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">{spec.title}</h2>
                <p className="text-xl text-[#bbc9cf] leading-relaxed font-medium">{spec.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {spec.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#101c2e] border border-[#3c494e]/20 rounded-lg text-sm font-semibold text-[#bbc9cf] hover:border-[#00d4ff]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-2xl border border-[#3c494e]/20 overflow-hidden bg-[#101c2e] shadow-2xl group transition-all duration-500 hover:border-[#00d4ff]/30">
                  <div className="p-4 bg-[#14233a] border-b border-[#3c494e]/10 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3c494e]/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3c494e]/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3c494e]/30" />
                  </div>
                  <div className="aspect-[16/10] bg-[#071325] flex items-center justify-center p-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-transparent" />
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-[#00d4ff]/10 rounded-2xl flex items-center justify-center border border-[#00d4ff]/20">
                        <div className="w-10 h-10 bg-[#00d4ff] opacity-40 blur-sm rounded-full" />
                      </div>
                      <p className="text-[#7fa8d4] text-xs font-black uppercase tracking-widest mb-2">Visualizing</p>
                      <p className="text-[#bbc9cf] font-mono italic text-sm">{spec.imagePlaceholder}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-48 text-center py-32 border-t border-[#3c494e]/10 bg-gradient-to-b from-[#071325] to-[#101c2e] rounded-[3rem]">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">
            Ready to <span className="text-[#00d4ff]">Architect</span> Your Future?
          </h2>
          <p className="text-[#bbc9cf] text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join forward-thinking organizations leveraging our technical expertise to build the next generation of
            intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/#contact"
              className="px-10 py-5 rounded-xl bg-[#00d4ff] text-[#071325] font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Schedule Consultation
            </Link>
            <Link href="/" className={secondaryButtonClassName}>
              View Our Work
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

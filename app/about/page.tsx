"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const specializations = [
    {
      title: "Agentic Workflows & Multi-Agent Systems",
      description: "We build sophisticated autonomous systems where specialized AI agents collaborate to solve complex, multi-step business logic. This isn't just automation—it's cognitive labor orchestration. By leveraging platforms like n8n, we connect your existing tech stack to execute complex tasks without manual intervention.",
      techStack: ["LangGraph", "CrewAI", "AutoGPT", "Python Microservices", "n8n"],
      imagePlaceholder: "Agentic Workflows & Multi-Agent Systems",
    },
    {
      title: "Professional Web Presence",
      description: "We translate AI complexity into accessible, high-converting digital experiences. Our web solutions are built for speed, SEO, and visual impact—ensuring your tech looks as advanced as it truly is. From single-page landing to multi-page sites with embedded AI assistants.",
      techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Vercel Edge", "AI Chat Integration"],
      imagePlaceholder: "Professional Web Presence",
    },
    {
      title: "AI Transformation Strategy",
      description: "Beyond the code, we provide the roadmap. We identify high-ROI opportunities for AI integration within your existing operations, ensuring your technology investments drive measurable business growth. No prior AI knowledge required.",
      techStack: ["ROI Mapping", "Governance", "Ethical AI", "Stack Selection", "Readiness Assessment"],
      imagePlaceholder: "AI Transformation Strategy",
    }
  ];

  return (
    <main className="min-h-screen bg-[#071325] text-white selection:bg-[#00d4ff]/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-8 bg-[#071325]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#a8e8ff]">
            ARdata.ai
          </Link>
          <div className="flex items-center gap-8">
             <Link href="/" className="text-sm font-semibold text-[#bbc9cf] hover:text-[#a8e8ff] transition-colors">
              Home
            </Link>
            <a href="/#contact" className="px-6 py-2 rounded-lg bg-[#00d4ff] text-[#071325] font-bold text-sm hover:opacity-90 transition-all">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 pt-44 pb-32">
        {/* Header Section */}
        <section className="max-w-4xl mb-32">
          <h1 className="text-7xl md:text-8xl font-bold mb-10 tracking-tighter leading-none">
            Forging the <span className="text-[#00d4ff]">Digital Frontier</span> with Precision.
          </h1>
          <p className="text-[#bbc9cf] text-xl max-w-2xl leading-relaxed font-medium">
            Our technical expertise spans the entire spectrum of modern AI development, from complex agentic workflows to high-impact web architectures.
          </p>
        </section>

        {/* Specialization Blocks */}
        <div className="space-y-48">
          {specializations.map((spec, index) => (
            <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
              
              {/* Text Side */}
              <div className="flex-1 space-y-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-[#00d4ff]/50"></div>
                  <div className="text-[#00d4ff] text-xs font-black uppercase tracking-[0.2em]">
                    Expertise 0{index + 1}
                  </div>
                </div>
                <h2 className="text-5xl font-bold text-white tracking-tighter leading-tight">{spec.title}</h2>
                <p className="text-xl text-[#bbc9cf] leading-relaxed font-medium">
                  {spec.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {spec.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-[#101c2e] border border-[#3c494e]/20 rounded-lg text-sm font-semibold text-[#bbc9cf] hover:border-[#00d4ff]/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Container */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl border border-[#3c494e]/20 overflow-hidden bg-[#101c2e] shadow-2xl group transition-all duration-500 hover:border-[#00d4ff]/30">
                  {/* Browser Mockup dots */}
                  <div className="p-4 bg-[#14233a] border-b border-[#3c494e]/10 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3c494e]/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3c494e]/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3c494e]/30"></div>
                  </div>
                  {/* Image Placeholder with gradient mask */}
                  <div className="aspect-[16/10] bg-[#071325] flex items-center justify-center p-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-transparent"></div>
                    <div className="text-center">
                       <div className="w-20 h-20 mx-auto mb-6 bg-[#00d4ff]/10 rounded-2xl flex items-center justify-center border border-[#00d4ff]/20">
                          <div className="w-10 h-10 bg-[#00d4ff] opacity-40 blur-sm rounded-full"></div>
                       </div>
                       <p className="text-[#5c6d74] text-xs font-black uppercase tracking-widest mb-2">Visualizing</p>
                       <p className="text-[#bbc9cf] font-mono italic text-sm">{spec.imagePlaceholder}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="mt-48 text-center py-32 border-t border-[#3c494e]/10 bg-gradient-to-b from-[#071325] to-[#101c2e] rounded-[3rem]">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tighter">Ready to <span className="text-[#00d4ff]">Architect</span> Your Future?</h2>
          <p className="text-[#bbc9cf] text-xl mb-12 max-w-2xl mx-auto font-medium">Join forward-thinking organizations leveraging our technical expertise to build the next generation of intelligent systems.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="/#contact" className="px-10 py-5 rounded-xl bg-[#00d4ff] text-[#071325] font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Schedule Consultation
            </Link>
             <Link href="/" className="px-10 py-5 rounded-xl bg-transparent border border-[#3c494e]/30 text-white font-bold text-lg hover:bg-[#101c2e] transition-all">
              View Our Work
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-20 bg-[#101c2e] border-t border-[#3c494e]/10 text-center px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter text-[#a8e8ff]">ARdata.ai</div>
          <ul className="flex flex-wrap justify-center gap-12 text-[#bbc9cf] text-sm font-semibold">
            <li><Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link></li>
            <li><Link href="/#services" className="hover:text-[#00d4ff] transition-colors">Services</Link></li>
            <li><Link href="/#faq" className="hover:text-[#00d4ff] transition-colors">FAQ</Link></li>
            <li><Link href="/#contact" className="hover:text-[#00d4ff] transition-colors">Contact</Link></li>
          </ul>
          <p className="text-[#5c6d74] text-xs font-black uppercase tracking-widest">© 2026 ARdata.ai. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
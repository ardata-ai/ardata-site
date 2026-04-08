"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const specializations = [
    {
      title: "Agentic Workflows & AI Automation",
      description: "We design and deploy autonomous AI agents that transform static business processes into dynamic, self-operating workflows. By leveraging platforms like n8n, we connect your existing tech stack including CRM, Slack, Gmail and databases to execute complex tasks without manual intervention. Our focus is on agentic design where AI does not just suggest but actually acts.",
      techStack: ["n8n", "LangChain", "Python", "Autonomous Agents", "API Architecture"],
      imagePlaceholder: "Screenshot: An intricate n8n workflow showing multi-step logic and error handling",
    },
    {
      title: "Professional Web Presence",
      description: "Your website is often the first impression your organization makes. We design and build clean, fast, and professional websites tailored to SMEs and municipalities, from a polished single-page landing to multi-page sites with clear messaging, service breakdowns, and contact flows. And when you are ready, we can extend your site with embedded AI assistants, visitor analytics, and more.",
      techStack: ["HTML / CSS / JS", "Next.js", "Responsive Design", "AI Chat Integration", "Analytics", "Cloudflare Deploy"],
      imagePlaceholder: "Screenshot: A live client website, clean, branded, mobile-ready",
    },
    {
      title: "AI Strategy & Consultation",
      description: "Moving from AI hype to AI ROI requires a clear roadmap. We work with SMEs and municipalities to identify the highest-impact use cases for AI adoption. We bridge the gap between technical possibility and operational reality, making sure every step serves a measurable business goal. No prior AI knowledge required.",
      techStack: ["AI Readiness Assessment", "ROI Analysis", "Implementation Roadmaps", "Ethics & Governance"],
      imagePlaceholder: "Screenshot: A professional AI implementation roadmap or strategy framework",
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      {/* Navigation */}
      <nav className="py-6 px-6 border-b border-blue-400/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0072ff] bg-clip-text text-transparent">
            ARdata.ai
          </Link>
          <Link href="/" className="text-sm text-[#7fa8d4] hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#00d4ff] to-[#0072ff] bg-clip-text text-transparent">
            Technical Expertise
          </h1>
          <p className="text-[#7fa8d4] text-xl max-w-3xl mx-auto leading-relaxed">
            We work with small and medium-sized businesses worldwide, and local municipalities in Israel.
            Organizations that know AI matters but are not sure where to begin. No in-house tech team required.
          </p>
        </section>

        {/* Specialization Blocks */}
        <div className="space-y-40">
          {specializations.map((spec, index) => (
            <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              
              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-[#00d4ff] text-sm font-medium">
                  Expertise 0{index + 1}
                </div>
                <h2 className="text-4xl font-bold text-white leading-tight">{spec.title}</h2>
                <p className="text-lg text-[#7fa8d4] leading-relaxed">
                  {spec.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {spec.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image / Screenshot Container */}
              <div className="flex-1 w-full group">
                <div className="relative rounded-2xl border border-blue-400/20 overflow-hidden bg-[#0f1e38] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-[0_20px_60px_rgba(0,212,255,0.1)]">
                  
                  {/* Browser-like Toolbar */}
                  <div className="p-4 bg-[#122240] border-b border-blue-400/10 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="mx-auto bg-[#0a1628] rounded px-3 py-1 text-[10px] text-blue-400/50 w-1/2 text-center">
                      app.ardata.ai/dashboard
                    </div>
                  </div>

                  {/* Placeholder for actual Screenshot */}
                  <div className="aspect-video bg-[#0a1628] flex items-center justify-center p-12 text-center">
                    <p className="text-blue-400/30 text-sm font-mono italic">
                      // [ {spec.imagePlaceholder} ]
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="mt-40 text-center py-20 border-t border-blue-400/10">
          <h2 className="text-3xl font-bold mb-6">Ready to see these solutions in action?</h2>
          <Link href="/#contact" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#0072ff] text-white font-semibold hover:scale-105 transition-transform">
            Book a Free Intro Call
          </Link>
        </section>
      </div>
    </main>
  );
}
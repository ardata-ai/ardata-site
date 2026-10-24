import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpertiseCard from "../components/ExpertiseCard";
import { FlowVisual, NetworkVisual, SpatialVisual } from "../components/VisualFrames";

export const metadata: Metadata = {
  title: "About Us | ARdata.ai",
  description:
    "We help growing companies and public organizations take their first real steps in AI—with a clear action plan, the right tech stack, and zero technical jargon.",
};

const specializations = [
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
  {
    title: "Practical AI Strategy",
    description:
      "We build clear, actionable roadmaps to help your organization adopt AI easily. We identify high-value opportunities and guide you step-by-step on embedding the right tools into your existing workflows—with zero friction.",
    tags: ["AI Roadmap", "Workflow Integration", "Tool Selection", "ROI Optimization"],
    caption: "roadmap.plan",
    visual: <FlowVisual />,
    glow: "from-violet-500/30 via-amber-400/20 to-transparent",
  },
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-brand-cyan px-8 py-4 text-lg font-semibold text-ink shadow-[0_8px_24px_rgba(0,194,255,0.28)] transition-all duration-200 hover:scale-105 hover:shadow-[0_16px_34px_rgba(0,194,255,0.4)]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-8 py-4 text-lg font-semibold text-main transition-all duration-200 hover:scale-105 hover:bg-white/10";

function FounderFrame() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0" aria-label="Founder and lead architect">
      <div className="rounded-[1.75rem] bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] shadow-[0_0_36px_rgba(0,194,255,0.28)]">
      <div className="flex aspect-[4/5] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-card">
        <div className="relative min-h-0 flex-1">
          <svg viewBox="0 0 320 420" className="h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="founder-glow" cx="50%" cy="42%" r="55%">
                <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="320" height="420" fill="#131B2E" />
            <rect width="320" height="420" fill="url(#founder-glow)" />
            <g stroke="#00C2FF" strokeOpacity="0.45" strokeWidth="1.4">
              <path d="M70 150 H160 V250 H250" fill="none" />
              <path d="M160 90 V250 M110 200 H230" />
              <circle cx="160" cy="168" r="46" fill="none" strokeDasharray="3 6" />
            </g>
            <g fill="#00C2FF">
              <circle cx="70" cy="150" r="6" />
              <circle cx="160" cy="90" r="6" />
              <circle cx="160" cy="168" r="8" />
              <circle cx="160" cy="250" r="6" />
              <circle cx="250" cy="250" r="6" />
              <circle cx="230" cy="200" r="5" />
              <circle cx="110" cy="200" r="5" />
            </g>
            <g fill="#E7F8FF">
              <circle cx="160" cy="168" r="3" />
              <circle cx="250" cy="250" r="2.5" />
            </g>
          </svg>
        </div>
        <figcaption className="border-t border-white/10 bg-[#10182A]/80 px-6 py-5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-ink">
              AR
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">ARdata.ai</p>
              <p className="text-base font-semibold text-main">Founder & Lead Architect</p>
            </div>
          </div>
        </figcaption>
      </div>
      </div>
    </figure>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-main pt-16 text-main selection:bg-brand-cyan/30">
      <Header />

      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <section className="mb-20 grid items-center gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="mb-8 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-main sm:text-5xl md:text-7xl">
              Forging the <span className="text-brand-cyan">Digital Frontier</span> with Precision.
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl">
              We help growing companies and public organizations take their first real steps in AI—with a clear action plan, the right tech stack, and zero technical jargon.
            </p>
          </div>
          <FounderFrame />
        </section>

        <section aria-labelledby="core-areas-heading">
          <div className="mb-12 max-w-2xl">
            <h2 id="core-areas-heading" className="text-4xl font-bold tracking-tight text-main md:text-5xl">
              Our Core Areas
            </h2>
            <p className="mt-4 text-lg text-muted">
              Three practices that take an organization from first question to a working system.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {specializations.map((spec) => (
              <ExpertiseCard key={spec.title} {...spec} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-card px-6 py-16 text-center shadow-glow md:mt-32 md:py-24">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-main md:text-6xl">
            Ready to <span className="text-brand-cyan">Architect</span> Your Future?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-muted md:text-xl">
            Join forward-thinking organizations leveraging our technical expertise to build the next generation of
            intelligent systems.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/#contact" className={primaryButtonClass}>
              Schedule Consultation
            </Link>
            <Link href="/" className={secondaryButtonClass}>
              View Our Work
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

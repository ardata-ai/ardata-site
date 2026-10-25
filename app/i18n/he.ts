import type { Dictionary } from "./types";

// Visible strings still match English. Hebrew copy is the next pass.
// Paths already point at the Hebrew routes so shared pages stay in-language.
export const he: Dictionary = {
  meta: {
    home: {
      title: "ARdata.ai | AI Consulting & Agentic Automations",
      description:
        "ARdata.ai empowers SMEs and municipalities with cutting-edge AI strategy, autonomous agentic automations, and professional web development.",
    },
    about: {
      title: "About Us | ARdata.ai",
      description:
        "We help growing companies and public organizations take their first real steps in AI—with a clear action plan, the right tech stack, and zero technical jargon.",
    },
  },
  brand: {
    name: "ARdata",
    suffix: ".ai",
  },
  nav: {
    homeHref: "/he",
    links: [
      { href: "/he/about", label: "About Us" },
      { href: "/he/#services", label: "Services" },
      { href: "/he/#faq", label: "FAQ" },
      { href: "/he/#contact", label: "Contact" },
    ],
    talkLabel: "Let's Talk",
    talkHref: "/he/#contact",
  },
  header: {
    navLabel: "Primary",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closeOverlay: "Close menu overlay",
  },
  switcher: {
    label: "English",
    labelLang: "en",
    hreflang: "en",
    ariaLabel: "מעבר לאנגלית",
    homeHref: "/",
    aboutHref: "/about/",
  },
  footer: {
    copyright: "© 2026 ARdata.ai. All rights reserved.",
  },
  hero: {
    lines: [
      { text: "AI is everywhere.", accent: false },
      { text: "Knowing where to start", accent: true },
      { text: "is the hard part.", accent: false },
    ],
    subtitle:
      "We help growing companies and public organizations take their first real steps in AI—with a clear action plan, the right tech stack, and zero technical jargon.",
    primaryCta: "Get in Touch",
    primaryHref: "#contact",
    secondaryCta: "Our Technical Expertise",
    secondaryHref: "/he/about",
  },
  homeServices: {
    title: "Our Core Areas",
    subtitle: "Practical AI solutions for organizations ready to move from curiosity to results.",
    areas: [
      { id: "strategy", caption: "strategy.flow" },
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
    ],
  },
  services: {
    strategy: {
      title: "Practical AI Strategy",
      description:
        "We build clear, actionable roadmaps to help your organization adopt AI easily. We identify high-value opportunities and guide you step-by-step on embedding the right tools into your existing workflows—with zero friction.",
      tags: ["AI Roadmap", "Workflow Integration", "Tool Selection", "ROI Optimization"],
    },
    workflows: {
      title: "AI Workflows & Agentic Automations",
      description:
        "Beyond basic chatbots—we build smart AI workflows that actually take action. Our autonomous agents execute multi-step business logic, connect your existing tools, and handle complex operational tasks without manual intervention.",
      tags: ["Multi-Step Logic", "CRM & System Sync", "Smart Decisioning", "End-to-End Execution"],
    },
    web: {
      title: "AI-Ready Web & Applications",
      description:
        "We build fast, modern digital interfaces and custom web applications designed specifically around AI workflows, interactive data dashboards, and automated customer portals.",
      tags: ["AI Dashboards & Portals", "Next.js & React", "Custom AI UI/UX", "Full-Stack Web"],
    },
  },
  platforms: {
    ariaLabel: "Tools and platforms",
    label: "Tools & platforms we work with",
    names: ["OpenAI", "Anthropic", "Google", "Microsoft", "AWS", "Snowflake"],
  },
  faq: {
    heading: "Common Questions",
    items: [
      {
        q: "Who is ARdata.ai for?",
        a: "We work with small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but aren't sure where to begin. No in-house tech team required.",
      },
      {
        q: "Do I need technical knowledge to work with ARdata.ai?",
        a: "Not at all. We translate complex AI concepts into clear, actionable steps designed for non-technical decision-makers.",
      },
      {
        q: "What does an agentic automation actually do?",
        a: "An AI agent can autonomously complete tasks like data processing, customer communication, scheduling, and reporting without constant human intervention.",
      },
      {
        q: "How long does a typical project take?",
        a: "It depends on scope. Consulting engagements can begin immediately. Automation projects typically run 2 to 6 weeks. Web projects are usually delivered within 1 to 3 weeks.",
      },
      {
        q: "How do I get started?",
        a: "Simply reach out via the contact section below and we'll schedule a free introductory call.",
      },
    ],
  },
  contact: {
    headlineBefore: "Let's build the ",
    headlineAccent: "next era",
    headlineAfter: " together.",
    intro: "Ready to explore what AI can do for your organization? We would love to hear from you.",
    emailLabel: "Email Us",
    emailAddress: "ardata.ai@gmail.com",
    hqLabel: "Global HQ",
    hqValue: "Worldwide / Israel",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    companyLabel: "Company",
    companyPlaceholder: "Acme Corp",
    emailFieldLabel: "Email",
    emailPlaceholder: "you@company.com",
    inquiryLabel: "Inquiry Type",
    inquiryOptions: ["Strategic Consulting", "Agentic Automation", "Web Development"],
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    submit: "Send Message",
  },
  about: {
    founderAriaLabel: "Founder and lead architect",
    founderBrand: "ARdata.ai",
    founderRole: "Founder & Lead Architect",
    headlineBefore: "Forging the ",
    headlineAccent: "Digital Frontier",
    headlineAfter: " with Precision.",
    intro:
      "We help growing companies and public organizations take their first real steps in AI—with a clear action plan, the right tech stack, and zero technical jargon.",
    areasTitle: "Our Core Areas",
    areasIntro: "Three practices that take an organization from first question to a working system.",
    areas: [
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
      { id: "strategy", caption: "roadmap.plan" },
    ],
    ctaBefore: "Ready to ",
    ctaAccent: "Architect",
    ctaAfter: " Your Future?",
    ctaBody:
      "Join forward-thinking organizations leveraging our technical expertise to build the next generation of intelligent systems.",
    primaryCta: "Schedule Consultation",
    primaryHref: "/he/#contact",
    secondaryCta: "View Our Work",
    secondaryHref: "/he",
  },
};

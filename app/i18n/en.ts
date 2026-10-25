import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    home: {
      title: "ARdata.ai | AI Consulting & Agentic Automations",
      description:
        "I help organizations decide where to start with AI: a practical roadmap, automations connected to existing systems, and Next.js interfaces.",
    },
    about: {
      title: "About | ARdata.ai",
      description:
        "Founder of ARdata.ai. 15+ years in data, 10+ years in machine learning, and recent work with AI agents, including public sector and finance.",
    },
  },
  brand: {
    name: "ARdata",
    suffix: ".ai",
  },
  nav: {
    homeHref: "/",
    links: [
      { href: "/about", label: "About" },
      { href: "/#services", label: "Services" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    talkLabel: "Book a call",
    talkHref: "/#contact",
  },
  header: {
    navLabel: "Primary",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closeOverlay: "Close menu overlay",
  },
  switcher: {
    label: "עברית",
    labelLang: "he",
    hreflang: "he",
    ariaLabel: "Switch to Hebrew",
    homeHref: "/he/",
    aboutHref: "/he/about/",
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
      "I help you decide where AI is worth the work: a written roadmap, automations that connect to the systems you already use, and the interface to run them.",
    trust: "15+ years in data · 10+ years in machine learning · Public sector and finance",
    primaryCta: "Book a consultation",
    primaryHref: "#contact",
    secondaryCta: "How I work",
    secondaryHref: "/about/#how-i-work",
  },
  homeServices: {
    title: "Core areas",
    subtitle: "Three kinds of work, from the first question to something people can use.",
    areas: [
      { id: "strategy", caption: "strategy.flow" },
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
    ],
  },
  approach: {
    title: "Approach",
    intro:
      "First decide where AI is worth the effort. Then connect an automation to the systems already in place. Then give people a clear place to use it.",
    steps: [
      { title: "Strategy", body: "Decide where AI is worth it." },
      { title: "Automations", body: "Connect an agent to the systems already in use." },
      { title: "Interfaces", body: "Give people a clear place to use it." },
    ],
  },
  services: {
    strategy: {
      title: "Practical AI strategy",
      description:
        "I write a short roadmap: where to start, which tools fit the systems you already use, and what to leave for later.",
      outcomeLabel: "You leave with",
      outcome: "A written roadmap, with an order of work and a list of what not to touch yet.",
      tags: ["Where to start", "Tool fit", "What to skip", "Written roadmap"],
      cta: "Talk through a roadmap",
      ctaHref: "/#contact",
    },
    workflows: {
      title: "Agentic automations",
      description:
        "Past a basic chatbot. I build a workflow that runs more than one step and connects to tools you already use.",
      outcomeLabel: "You leave with",
      outcome: "A workflow or agent that carries a task across steps and connects to the systems already in place.",
      tags: ["Multi-step work", "Existing systems", "AI agents", "Handoffs"],
      cta: "Describe a workflow",
      ctaHref: "/#contact",
    },
    web: {
      title: "Web and applications",
      description:
        "I build Next.js and React interfaces around that work: a dashboard, a portal, or a screen people actually use. I built this site myself.",
      outcomeLabel: "You leave with",
      outcome: "A Next.js and React interface for the workflow, a dashboard, or a portal.",
      tags: ["Dashboards and portals", "Next.js & React", "Interfaces for AI", "Built end to end"],
      cta: "Start with the interface",
      ctaHref: "/#contact",
    },
  },
  platforms: {
    ariaLabel: "Tools and platforms",
    label: "Platforms I work with",
    names: ["OpenAI", "Anthropic", "Google", "Microsoft", "AWS", "Snowflake"],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        q: "Who is ARdata.ai for?",
        a: "I work with small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but are not sure where to begin. No in-house tech team required.",
      },
      {
        q: "Do I need technical knowledge?",
        a: "No. I translate AI into clear steps for people who make decisions and do not come from a technical background.",
      },
      {
        q: "What does an agentic automation actually do?",
        a: "An agent can take on work such as data processing, customer communication, scheduling, and reporting, across more than one step, and connect to tools you already use.",
      },
      {
        q: "How long does a project take?",
        a: "Consulting can start right away. Automation work is often 2 to 6 weeks, and web work is often 1 to 3 weeks. A project that starts immediately can still take the full range, depending on complexity.",
      },
      {
        q: "How do I get started?",
        a: "Use the contact form below and I will set up an introductory call.",
      },
      {
        q: "What is this based on?",
        a: "15+ years in data, 10+ years in machine learning, including complex multi-class classification and prediction, and about three years with AI agents and language models. I also worked at one of the Big Four, including government tenders and projects, with extensive experience in the public sector and finance.",
      },
    ],
  },
  contact: {
    headline: "Tell me where you want to start.",
    intro: "A short call to see whether a roadmap, an automation, or an interface is the right first step.",
    emailLabel: "Email",
    emailAddress: "ardata.ai@gmail.com",
    hqLabel: "Based in",
    hqValue: "Worldwide / Israel",
    firstNameLabel: "First name",
    firstNamePlaceholder: "Alex",
    companyLabel: "Company",
    companyPlaceholder: "Company name",
    emailFieldLabel: "Email",
    emailPlaceholder: "you@company.com",
    inquiryLabel: "What do you need?",
    inquiryOptions: [
      { value: "Strategic Consulting", label: "A roadmap" },
      { value: "Agentic Automation", label: "An automation" },
      { value: "Web Development", label: "An interface" },
    ],
    messageLabel: "Message",
    messagePlaceholder: "What are you trying to figure out?",
    submit: "Send message",
  },
  about: {
    founderAriaLabel: "Founder of ARdata.ai",
    founderBrand: "ARdata.ai",
    founderRole: "Founder",
    headlineBefore: "Fifteen years in data. ",
    headlineAccent: "A clear place to start",
    headlineAfter: " with AI.",
    intro:
      "I am the founder of ARdata.ai. I help organizations take the first practical step in AI: a roadmap, an automation connected to the systems already in use, or the interface that makes it usable.",
    background:
      "That rests on 15+ years in data and 10+ years in machine learning, including complex multi-class classification and prediction projects, and about three years with AI agents and language models. I worked at one of the Big Four, including government tenders and projects, with extensive experience in the public sector and finance. I build the automations and the websites myself, including this one, in Next.js and React.",
    howTitle: "How I work",
    howIntro: "Four steps, from the first question to something people can use.",
    steps: [
      { title: "Discovery", body: "The question, the systems, and the constraints." },
      { title: "Roadmap", body: "What to do first, and what to skip." },
      { title: "Build", body: "The workflow, the agent, or the interface." },
      { title: "Iterate", body: "Adjust it once it is in use." },
    ],
    photoLabel: "Founder",
    areasTitle: "Core areas",
    areasIntro: "The same three practices, from the first question to a working system.",
    areas: [
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
      { id: "strategy", caption: "roadmap.plan" },
    ],
    ctaBefore: "Ready to ",
    ctaAccent: "book",
    ctaAfter: " a consultation?",
    ctaBody: "A short call to see whether a roadmap, an automation, or an interface is the right first step.",
    primaryCta: "Book a consultation",
    primaryHref: "/#contact",
  },
};

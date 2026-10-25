import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    home: {
      title: "ARdata.ai | AI Consulting & Agentic Automations",
      description:
        "A practical starting point for AI: a written roadmap, automations connected to systems already in use, and a Next.js interface.",
    },
    about: {
      title: "About | ARdata.ai",
      description:
        "15+ years in data, complex analytics and machine learning projects, and process automation, including public sector and finance.",
    },
    useCase: {
      title: "Use Case: A Modern Consulting Website | ARdata.ai",
      description:
        "A technology consulting firm replaced an outdated site with a fast, bilingual Next.js website that explains the work clearly and opens a simple path to contact.",
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
    useCaseHref: "/he/use-cases/modern-consulting-website/",
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
      "A practical starting point: a written roadmap, automations that connect to systems already in use, and an interface to run them.",
    trust: "15+ years in data · Complex analytics, machine learning projects, and process automation · Public sector and finance",
    primaryCta: "Book a consultation",
    primaryHref: "#contact",
    secondaryCta: "How the work is done",
    secondaryHref: "/about/#how-the-work-is-done",
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
        "A short roadmap: where to start, which tools fit the systems already in use, and what to leave for later.",
      outcomeLabel: "You leave with",
      outcome: "A written roadmap, with an order of work and a list of what not to touch yet.",
      tags: ["Where to start", "Tool fit", "What to skip", "Written roadmap"],
      cta: "Talk through a roadmap",
      ctaHref: "/#contact",
    },
    workflows: {
      title: "Agentic automations",
      description:
        "Beyond a basic chatbot: a workflow that runs more than one step and connects to tools already in use.",
      outcomeLabel: "You leave with",
      outcome: "A workflow or agent that carries a task across steps and connects to the systems already in place.",
      tags: ["Multi-step work", "Existing systems", "AI agents", "Handoffs"],
      cta: "Describe a workflow",
      ctaHref: "/#contact",
    },
    web: {
      title: "Web and applications",
      description:
        "A Next.js and React interface around that work: a dashboard, a portal, or a screen people use. This site was built the same way.",
      outcomeLabel: "You leave with",
      outcome: "A Next.js and React interface for the workflow, a dashboard, or a portal.",
      tags: ["Dashboards and portals", "Next.js & React", "Interfaces for AI", "Built end to end"],
      cta: "Start with the interface",
      ctaHref: "/#contact",
    },
  },
  platforms: {
    ariaLabel: "Tools and platforms",
    label: "Platforms worked with",
    names: ["OpenAI", "Anthropic", "Google", "Microsoft", "AWS", "Snowflake"],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        q: "Who is ARdata.ai for?",
        a: "Small and medium-sized businesses worldwide, and local municipalities in Israel. Organizations that know AI matters but are not sure where to begin. No in-house technical team required.",
      },
      {
        q: "Do I need technical knowledge?",
        a: "No. Technical work is translated into clear steps for people who make decisions and do not come from a technical background.",
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
        a: "Use the contact form below to set up an introductory call.",
      },
      {
        q: "What is this based on?",
        a: "15+ years in data, and 10+ years involved in complex machine learning and analytics projects, including multi-class classification and prediction, with familiarity with forecasting, clustering, and recommendation methods. The same background includes process automations and agentic workflows connected to existing systems, work at a Big Four firm on government-related projects, and substantial experience in the public sector and finance.",
      },
    ],
  },
  contact: {
    headline: "Where is the right place to start?",
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
      "The work is a first practical step in AI: a roadmap, an automation connected to systems already in use, or the interface that makes it usable. Technical choices are explained for the people who have to decide.",
    background:
      "The background is 15+ years in data and 10+ years involved in complex machine learning and analytics projects, including multi-class classification and prediction, plus familiarity with forecasting, clustering, and recommendation methods. It also includes process automations, agentic workflows connected to existing systems, and integrating AI into systems organizations already use. Earlier work was at a Big Four firm, including government-related projects, with substantial experience in the public sector and finance. Privacy and regulatory questions have come up alongside that work, not as a specialist practice. This website was built independently in Next.js and React.",
    howTitle: "How the work is done",
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
  useCase: {
    backLabel: "Back to home",
    backHref: "/",
    eyebrow: "Use Case",
    title: "Building a Modern Website for a Technology Consulting Firm",
    backgroundTitle: "Background",
    background: [
      "A company that provides consulting and implementation of advanced technology solutions for organizations approached us. They had a clear business need: an updated, fast, and clear website that would explain to their target audience (managers and organizations interested in technology) what they do, without unnecessary jargon, and allow easy contact.",
      "Their previous website was outdated, slow, and did not reflect the level of work they actually deliver. The goal was not “another pretty website,” but a digital asset that would work both as a marketing tool and as an entry point into the sales process.",
    ],
    challengesTitle: "The Challenges",
    challengesIntro: "During the project, several points required business and technical refinement:",
    challenges: [
      "Clarity of messaging: The services needed to be written in a way that non-technical people could understand, without losing professional accuracy.",
      "Content structure: How to organize the information so visitors quickly understand what is offered, the value, and how to start working together.",
      "Dual language: The site needed to serve both English-speaking and Hebrew-speaking audiences while maintaining consistency.",
      "Performance and simplicity: They wanted a light, fast site that wouldn’t overwhelm visitors, and that would also be easy to maintain and update.",
      "Iterative refinements: We went through several rounds of refining wording, section order, and what should be emphasized versus what could stay in the background.",
    ],
    solutionTitle: "The Solution",
    solutionIntro: "We built a new website from scratch, with a focus on speed, clarity, and simple maintenance.",
    techTitle: "Main technologies",
    tech: [
      "Next.js + React — for building the site, including support for both languages.",
      "Clean, modern design with emphasis on readability and user experience.",
      "Clear content structure: a homepage with the three main areas of activity, an about page, an FAQ, and a contact form.",
      "Basic optimization for loading speed and mobile.",
    ],
    refinementsTitle: "During the work we performed several refinement rounds:",
    refinements: [
      "Business wording was shortened and made more direct.",
      "The order of presenting the services was adjusted to match how potential clients think: from the problem, to the solution, to the next steps.",
      "Short explanations were added next to each area of activity to reduce confusion.",
    ],
    deliveredTitle: "What We Delivered",
    deliveredIntro: "At the end of the project the client received:",
    delivered: [
      "A live, fast, mobile-friendly website in two languages.",
      "A clear content structure that explains the services without overload.",
      "A technical foundation in Next.js that allows them to add pages, articles, or additional use cases in the future without rebuilding everything.",
      "Clean, sufficiently documented code so they can continue updating it themselves or with another team.",
      "Basic SEO settings: titles, descriptions, and hreflang between languages.",
    ],
    outcomeTitle: "Outcome",
    outcome: [
      "The company received a website that more accurately represents their work and allows visitors to quickly understand what is offered and how to proceed.",
      "The site now serves as a clear entry point for inquiries, instead of an outdated brochure site that did not support their business goals.",
    ],
  },
};

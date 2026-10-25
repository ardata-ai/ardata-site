export type Lang = "en" | "he";

export type ServiceId = "strategy" | "workflows" | "web";

export type PlatformName =
  | "OpenAI"
  | "Anthropic"
  | "Google"
  | "Microsoft"
  | "AWS"
  | "Snowflake";

type ServiceCopy = {
  title: string;
  description: string;
  outcomeLabel: string;
  outcome: string;
  tags: [string, string, string, string];
  cta: string;
  ctaHref: string;
};

type Step = {
  title: string;
  body: string;
};

type AreaRef = {
  id: ServiceId;
  caption: string;
};

type FaqItem = {
  q: string;
  a: string;
};

export type Dictionary = {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
  };
  brand: {
    name: string;
    suffix: string;
  };
  nav: {
    homeHref: string;
    links: [
      { href: string; label: string },
      { href: string; label: string },
      { href: string; label: string },
      { href: string; label: string },
    ];
    talkLabel: string;
    talkHref: string;
  };
  header: {
    navLabel: string;
    openMenu: string;
    closeMenu: string;
    closeOverlay: string;
  };
  switcher: {
    label: string;
    labelLang: Lang;
    hreflang: Lang;
    ariaLabel: string;
    homeHref: string;
    aboutHref: string;
  };
  footer: {
    copyright: string;
  };
  hero: {
    lines: [
      { text: string; accent: boolean },
      { text: string; accent: boolean },
      { text: string; accent: boolean },
    ];
    subtitle: string;
    trust: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  homeServices: {
    title: string;
    subtitle: string;
    areas: [AreaRef, AreaRef, AreaRef];
  };
  approach: {
    title: string;
    intro: string;
    steps: [Step, Step, Step];
  };
  services: Record<ServiceId, ServiceCopy>;
  platforms: {
    ariaLabel: string;
    label: string;
    names: [
      PlatformName,
      PlatformName,
      PlatformName,
      PlatformName,
      PlatformName,
      PlatformName,
    ];
  };
  faq: {
    heading: string;
    items: [FaqItem, FaqItem, FaqItem, FaqItem, FaqItem, FaqItem];
  };
  contact: {
    headline: string;
    intro: string;
    emailLabel: string;
    emailAddress: string;
    hqLabel: string;
    hqValue: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    inquiryLabel: string;
    inquiryOptions: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
  about: {
    founderAriaLabel: string;
    founderBrand: string;
    founderRole: string;
    headlineBefore: string;
    headlineAccent: string;
    headlineAfter: string;
    intro: string;
    background: string;
    howTitle: string;
    howIntro: string;
    steps: [Step, Step, Step, Step];
    photoLabel: string;
    areasTitle: string;
    areasIntro: string;
    areas: [AreaRef, AreaRef, AreaRef];
    ctaBefore: string;
    ctaAccent: string;
    ctaAfter: string;
    ctaBody: string;
    primaryCta: string;
    primaryHref: string;
  };
};

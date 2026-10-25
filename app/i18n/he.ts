import type { Dictionary } from "./types";

export const he: Dictionary = {
  meta: {
    home: {
      title: "ARdata.ai | ייעוץ AI ואוטומציות",
      description:
        "אני עוזר להחליט מאיפה מתחילים עם AI: מפת דרכים מעשית, אוטומציות שמתחברות למערכות קיימות, וממשקי Next.js.",
    },
    about: {
      title: "עליי | ARdata.ai",
      description:
        "המייסד של ARdata.ai. יותר מ-15 שנה בדאטה, יותר מ-10 שנים בלמידת מכונה, ועבודה עם סוכני AI, כולל מגזר ציבורי ופיננסים.",
    },
  },
  brand: {
    name: "ARdata",
    suffix: ".ai",
  },
  nav: {
    homeHref: "/he/",
    links: [
      { href: "/he/about", label: "עליי" },
      { href: "/he/#services", label: "שירותים" },
      { href: "/he/#faq", label: "שאלות נפוצות" },
      { href: "/he/#contact", label: "יצירת קשר" },
    ],
    talkLabel: "שיחת ייעוץ",
    talkHref: "/he/#contact",
  },
  header: {
    navLabel: "ראשי",
    openMenu: "פתיחת תפריט",
    closeMenu: "סגירת תפריט",
    closeOverlay: "סגירת התפריט",
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
    copyright: "© 2026 ARdata.ai. כל הזכויות שמורות.",
  },
  hero: {
    lines: [
      { text: "AI נמצא בכל מקום.", accent: false },
      { text: "הקושי הוא לדעת", accent: true },
      { text: "מאיפה מתחילים.", accent: false },
    ],
    subtitle:
      "אני עוזר להחליט איפה AI שווה את העבודה: מפת דרכים כתובה, אוטומציות שמתחברות למערכות שכבר בשימוש, וממשק שמריץ אותן.",
    trust: "יותר מ-15 שנה בדאטה · יותר מ-10 שנים בלמידת מכונה · מגזר ציבורי ופיננסים",
    primaryCta: "קביעת שיחת ייעוץ",
    primaryHref: "#contact",
    secondaryCta: "איך אני עובד",
    secondaryHref: "/he/about/#how-i-work",
  },
  homeServices: {
    title: "תחומי הליבה",
    subtitle: "שלושה סוגי עבודה, מהשאלה הראשונה ועד משהו שאפשר להשתמש בו.",
    areas: [
      { id: "strategy", caption: "strategy.flow" },
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
    ],
  },
  approach: {
    title: "הגישה",
    intro:
      "קודם מחליטים איפה AI שווה את המאמץ. אחר כך מחברים אוטומציה למערכות שכבר קיימות. ובסוף נותנים לאנשים מקום ברור להשתמש בזה.",
    steps: [
      { title: "אסטרטגיה", body: "להחליט איפה AI שווה את זה." },
      { title: "אוטומציות", body: "לחבר סוכן למערכות שכבר בשימוש." },
      { title: "ממשקים", body: "לתת מקום ברור להשתמש בזה." },
    ],
  },
  services: {
    strategy: {
      title: "אסטרטגיית AI מעשית",
      description:
        "אני כותב מפת דרכים קצרה: מאיפה מתחילים, אילו כלים מתאימים למערכות שכבר בשימוש, ומה עדיף לדחות.",
      outcomeLabel: "מה נשאר ביד",
      outcome: "מפת דרכים כתובה, עם סדר עבודה ורשימה של מה לא לגעת בו עכשיו.",
      tags: ["מאיפה מתחילים", "התאמת כלים", "מה לדחות", "מפת דרכים כתובה"],
      cta: "לדבר על מפת דרכים",
      ctaHref: "/he/#contact",
    },
    workflows: {
      title: "אוטומציות עם סוכנים",
      description: "מעבר לצ'אטבוט בסיסי. אני בונה תהליך שרץ יותר מצעד אחד ומתחבר לכלים שכבר בשימוש.",
      outcomeLabel: "מה נשאר ביד",
      outcome: "תהליך או סוכן שמעביר משימה בין כמה שלבים ומתחבר למערכות שכבר קיימות.",
      tags: ["כמה שלבים", "מערכות קיימות", "סוכני AI", "מעבר בין שלבים"],
      cta: "לתאר תהליך",
      ctaHref: "/he/#contact",
    },
    web: {
      title: "אתרים ויישומים",
      description:
        "אני בונה ממשקי Next.js ו-React סביב העבודה הזו: לוח נתונים, פורטל, או מסך שאנשים באמת משתמשים בו. את האתר הזה בניתי בעצמי.",
      outcomeLabel: "מה נשאר ביד",
      outcome: "ממשק Next.js ו-React לתהליך, ללוח נתונים או לפורטל.",
      tags: ["לוחות ופורטלים", "Next.js ו-React", "ממשק ל-AI", "בנייה מקצה לקצה"],
      cta: "להתחיל מהממשק",
      ctaHref: "/he/#contact",
    },
  },
  platforms: {
    ariaLabel: "כלים ופלטפורמות",
    label: "פלטפורמות שאני עובד איתן",
    names: ["OpenAI", "Anthropic", "Google", "Microsoft", "AWS", "Snowflake"],
  },
  faq: {
    heading: "שאלות נפוצות",
    items: [
      {
        q: "למי מתאימה ARdata.ai?",
        a: "אני עובד עם עסקים קטנים ובינוניים בכל העולם, ועם רשויות מקומיות בישראל. ארגונים שמבינים ש-AI חשוב, ועדיין לא בטוחים מאיפה מתחילים. אין צורך בצוות טכנולוגי פנימי.",
      },
      {
        q: "נדרש ידע טכני?",
        a: "לא. אני מתרגם מושגי AI לצעדים ברורים, בשפה של מי שמקבלים החלטות ולא מגיעים מעולם הטכנולוגיה.",
      },
      {
        q: "מה אוטומציה חכמה עושה בפועל?",
        a: "סוכן יכול לקחת עבודה כמו עיבוד נתונים, תקשורת עם לקוחות, תיאום יומן ודיווח, על פני יותר מצעד אחד, ולהתחבר לכלים שכבר בשימוש.",
      },
      {
        q: "כמה זמן לוקח פרויקט?",
        a: "ייעוץ יכול להתחיל מיד. עבודת אוטומציה נמשכת בדרך כלל בין שבועיים לשישה שבועות, ועבודת ווב בין שבוע לשלושה שבועות. פרויקט שמתחיל מיד עדיין יכול לקחת את כל הטווח, לפי מידת המורכבות.",
      },
      {
        q: "איך מתחילים?",
        a: "אפשר למלא את הטופס למטה, ואני אקבע שיחת היכרות.",
      },
      {
        q: "על מה זה מבוסס?",
        a: "יותר מ-15 שנה בדאטה, יותר מ-10 שנים בלמידת מכונה, כולל סיווג מרובה-מחלקות וחיזוי מורכבים, וכשלוש שנים עם סוכני AI ומודלי שפה. עבדתי גם באחת מארבע הפירמות הגדולות, כולל מכרזים ופרויקטים ממשלתיים, עם ניסיון רחב במגזר הציבורי ובפיננסים.",
      },
    ],
  },
  contact: {
    headline: "ספרו לי מאיפה להתחיל.",
    intro: "שיחה קצרה כדי לבדוק אם הצעד הראשון הוא מפת דרכים, אוטומציה, או ממשק.",
    emailLabel: "אימייל",
    emailAddress: "ardata.ai@gmail.com",
    hqLabel: "מיקום",
    hqValue: "עולמי / ישראל",
    firstNameLabel: "שם פרטי",
    firstNamePlaceholder: "נועה",
    companyLabel: "חברה",
    companyPlaceholder: "שם החברה",
    emailFieldLabel: "אימייל",
    emailPlaceholder: "you@company.com",
    inquiryLabel: "מה צריך?",
    inquiryOptions: [
      { value: "Strategic Consulting", label: "מפת דרכים" },
      { value: "Agentic Automation", label: "אוטומציה" },
      { value: "Web Development", label: "ממשק" },
    ],
    messageLabel: "הודעה",
    messagePlaceholder: "מה אתם מנסים להבין?",
    submit: "שליחת הודעה",
  },
  about: {
    founderAriaLabel: "המייסד של ARdata.ai",
    founderBrand: "ARdata.ai",
    founderRole: "מייסד",
    headlineBefore: "חמש-עשרה שנה בדאטה. ",
    headlineAccent: "מקום ברור להתחיל",
    headlineAfter: " עם AI.",
    intro:
      "אני המייסד של ARdata.ai. אני עוזר לארגונים לעשות את הצעד המעשי הראשון ב-AI: מפת דרכים, אוטומציה שמתחברת למערכות שכבר בשימוש, או הממשק שהופך את זה לשמיש.",
    background:
      "מאחורי זה יותר מ-15 שנה בדאטה ויותר מ-10 שנים בלמידת מכונה, כולל פרויקטי סיווג מרובה-מחלקות וחיזוי מורכבים, וכשלוש שנים עם סוכני AI ומודלי שפה. עבדתי באחת מארבע הפירמות הגדולות, כולל מכרזים ופרויקטים ממשלתיים, עם ניסיון רחב במגזר הציבורי ובפיננסים. את האוטומציות ואת האתרים אני בונה בעצמי, כולל את האתר הזה, ב-Next.js וב-React.",
    howTitle: "איך אני עובד",
    howIntro: "ארבעה שלבים, מהשאלה הראשונה ועד משהו שאפשר להשתמש בו.",
    steps: [
      { title: "היכרות", body: "השאלה, המערכות, והמגבלות." },
      { title: "מפת דרכים", body: "מה עושים קודם, ומה מדלגים." },
      { title: "בנייה", body: "התהליך, הסוכן, או הממשק." },
      { title: "שיפור", body: "התאמה אחרי שהמערכת בשימוש." },
    ],
    photoLabel: "מייסד",
    areasTitle: "תחומי הליבה",
    areasIntro: "אותם שלושה תחומים, מהשאלה הראשונה ועד מערכת שעובדת.",
    areas: [
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
      { id: "strategy", caption: "roadmap.plan" },
    ],
    ctaBefore: "אפשר ",
    ctaAccent: "לקבוע",
    ctaAfter: " שיחת ייעוץ.",
    ctaBody: "שיחה קצרה כדי לראות אם הצעד הראשון הוא מפת דרכים, אוטומציה, או ממשק.",
    primaryCta: "קביעת שיחת ייעוץ",
    primaryHref: "/he/#contact",
  },
};

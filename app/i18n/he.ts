import type { Dictionary } from "./types";

export const he: Dictionary = {
  meta: {
    home: {
      title: "ARdata.ai | ייעוץ AI ואוטומציות",
      description:
        "ARdata.ai מלווה עסקים קטנים ובינוניים ורשויות מקומיות באסטרטגיית AI, באוטומציות שפועלות בעצמן, ובפיתוח אתרים.",
    },
    about: {
      title: "עלינו | ARdata.ai",
      description:
        "אנחנו עוזרים לחברות בצמיחה ולארגונים ציבוריים לעשות את הצעדים הראשונים ב-AI: תוכנית פעולה ברורה, הכלים הנכונים, ובלי ז'רגון טכני.",
    },
  },
  brand: {
    name: "ARdata",
    suffix: ".ai",
  },
  nav: {
    homeHref: "/he",
    links: [
      { href: "/he/about", label: "עלינו" },
      { href: "/he/#services", label: "שירותים" },
      { href: "/he/#faq", label: "שאלות נפוצות" },
      { href: "/he/#contact", label: "יצירת קשר" },
    ],
    talkLabel: "בואו נדבר",
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
      "אנחנו עוזרים לחברות בצמיחה ולארגונים ציבוריים לעשות את הצעדים הראשונים ב-AI: תוכנית פעולה ברורה, הכלים הנכונים, ובלי ז'רגון טכני.",
    primaryCta: "דברו איתנו",
    primaryHref: "#contact",
    secondaryCta: "המומחיות שלנו",
    secondaryHref: "/he/about",
  },
  homeServices: {
    title: "תחומי הליבה",
    subtitle: "פתרונות AI מעשיים לארגונים שרוצים לעבור מסקרנות לתוצאות.",
    areas: [
      { id: "strategy", caption: "strategy.flow" },
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
    ],
  },
  services: {
    strategy: {
      title: "אסטרטגיית AI מעשית",
      description:
        "אנחנו בונים מפת דרכים ברורה לאימוץ AI. מאתרים את ההזדמנויות ששוות את המאמץ, ומשלבים את הכלים הנכונים בתהליכי העבודה שכבר קיימים, בלי סיבוך מיותר.",
      tags: ["מפת דרכים ל-AI", "שילוב בתהליכים", "בחירת כלים", "החזר על ההשקעה"],
    },
    workflows: {
      title: "תהליכי AI ואוטומציות",
      description:
        "מעבר לצ'אטבוט בסיסי: אנחנו בונים תהליכי AI שגם מבצעים. הסוכנים מריצים כמה שלבים, מתחברים לכלים שכבר בשימוש, ומטפלים במשימות תפעוליות בלי ליווי ידני בכל שלב.",
      tags: ["לוגיקה של כמה שלבים", "סנכרון CRM ומערכות", "קבלת החלטות", "ביצוע של כל התהליך"],
    },
    web: {
      title: "אתרים ויישומים מוכנים ל-AI",
      description:
        "אנחנו בונים ממשקים מהירים ומודרניים, ויישומי ווב סביב תהליכי AI, לוחות נתונים ופורטלים ללקוחות.",
      tags: ["לוחות בקרה ופורטלים", "Next.js ו-React", "UI/UX מותאם ל-AI", "פיתוח Full-Stack"],
    },
  },
  platforms: {
    ariaLabel: "כלים ופלטפורמות",
    label: "כלים ופלטפורמות שאנחנו עובדים איתם",
    names: ["OpenAI", "Anthropic", "Google", "Microsoft", "AWS", "Snowflake"],
  },
  faq: {
    heading: "שאלות נפוצות",
    items: [
      {
        q: "למי מתאימה ARdata.ai?",
        a: "אנחנו עובדים עם עסקים קטנים ובינוניים בכל העולם, ועם רשויות מקומיות בישראל. ארגונים שמבינים ש-AI חשוב, ועדיין לא בטוחים מאיפה מתחילים. אין צורך בצוות טכנולוגי פנימי.",
      },
      {
        q: "נדרש ידע טכני כדי לעבוד עם ARdata.ai?",
        a: "בכלל לא. אנחנו מתרגמים מושגי AI מורכבים לצעדים ברורים, בשפה שמתאימה למי שמקבלים החלטות ולא מגיעים מעולם הטכנולוגיה.",
      },
      {
        q: "מה אוטומציה חכמה עושה בפועל?",
        a: "סוכן AI יכול להשלים משימות כמו עיבוד נתונים, תקשורת עם לקוחות, תיאום יומן ודיווח, בלי שמישהו ילווה כל שלב.",
      },
      {
        q: "כמה זמן לוקח פרויקט?",
        a: "תלוי בהיקף. ייעוץ יכול להתחיל מיד. פרויקטי אוטומציה נמשכים בדרך כלל בין שבועיים לשישה שבועות. פרויקטי ווב נמסרים בדרך כלל בתוך שבוע עד שלושה שבועות.",
      },
      {
        q: "איך מתחילים?",
        a: "אפשר לפנות באזור יצירת הקשר למטה, ונקבע שיחת היכרות בחינם.",
      },
    ],
  },
  contact: {
    headlineBefore: "בואו נבנה יחד את ",
    headlineAccent: "השלב הבא",
    headlineAfter: ".",
    intro: "אפשר לבדוק מה AI יכול לעשות בארגון. נשמח לשמוע.",
    emailLabel: "אימייל",
    emailAddress: "ardata.ai@gmail.com",
    hqLabel: "מטה",
    hqValue: "עולמי / ישראל",
    firstNameLabel: "שם פרטי",
    firstNamePlaceholder: "נועה",
    companyLabel: "חברה",
    companyPlaceholder: "שם החברה",
    emailFieldLabel: "אימייל",
    emailPlaceholder: "you@company.com",
    inquiryLabel: "נושא הפנייה",
    inquiryOptions: [
      { value: "Strategic Consulting", label: "ייעוץ אסטרטגי" },
      { value: "Agentic Automation", label: "אוטומציה חכמה" },
      { value: "Web Development", label: "פיתוח אתרים" },
    ],
    messageLabel: "הודעה",
    messagePlaceholder: "איך אפשר לעזור?",
    submit: "שליחת הודעה",
  },
  about: {
    founderAriaLabel: "המייסד והארכיטקט הראשי",
    founderBrand: "ARdata.ai",
    founderRole: "מייסד וארכיטקט ראשי",
    headlineBefore: "בונים את ",
    headlineAccent: "החזית הדיגיטלית",
    headlineAfter: " בדיוק.",
    intro:
      "אנחנו עוזרים לחברות בצמיחה ולארגונים ציבוריים לעשות את הצעדים הראשונים ב-AI: תוכנית פעולה ברורה, הכלים הנכונים, ובלי ז'רגון טכני.",
    areasTitle: "תחומי הליבה",
    areasIntro: "שלושה תחומים, מהשאלה הראשונה ועד מערכת שעובדת.",
    areas: [
      { id: "workflows", caption: "agents.flow" },
      { id: "web", caption: "portal.ai" },
      { id: "strategy", caption: "roadmap.plan" },
    ],
    ctaBefore: "הגיע הזמן ",
    ctaAccent: "לתכנן",
    ctaAfter: " את העתיד?",
    ctaBody: "ארגונים שרוצים להתקדם נעזרים בידע הטכני שלנו כדי לבנות מערכות חכמות.",
    primaryCta: "תיאום שיחת ייעוץ",
    primaryHref: "/he/#contact",
    secondaryCta: "העבודה שלנו",
    secondaryHref: "/he",
  },
};

import type { Metadata } from "next";
import { getDictionary } from "./index";
import type { Lang } from "./types";

const urls = {
  home: { en: "/", he: "/he/" },
  about: { en: "/about/", he: "/he/about/" },
  useCase: {
    en: "/use-cases/modern-consulting-website/",
    he: "/he/use-cases/modern-consulting-website/",
  },
} as const;

export function pageMetadata(lang: Lang, page: keyof typeof urls): Metadata {
  const copy = getDictionary(lang).meta[page];
  const localized = urls[page];
  const metadata: Metadata = {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: localized[lang],
      languages: {
        en: localized.en,
        he: localized.he,
        "x-default": localized.en,
      },
    },
  };

  if (lang === "he") {
    metadata.openGraph = {
      locale: "he_IL",
      title: copy.title,
      description: copy.description,
    };
  }

  return metadata;
}

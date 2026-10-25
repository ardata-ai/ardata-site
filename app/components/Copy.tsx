import type { ReactNode } from "react";
import type { Lang } from "../i18n/types";

const TOKEN = /(ARdata\.ai|Next\.js|Full-Stack|UI\/UX|CRM)([?.:,]*)/g;

type Part = { ltr: boolean; text: string };

function partsOf(text: string): Part[] {
  const parts: Part[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ ltr: false, text: text.slice(last, index) });
    parts.push({ ltr: true, text: `${match[1]}${match[2] ?? ""}` });
    last = index + match[0].length;
  }
  if (last < text.length) parts.push({ ltr: false, text: text.slice(last) });
  return parts;
}

export function Copy({ lang, text }: { lang: Lang; text: string }): ReactNode {
  if (lang !== "he") return text;
  const parts = partsOf(text);
  if (parts.length === 1 && !parts[0].ltr) return text;

  return parts.map((part, index) =>
    part.ltr ? (
      <bdi key={index} dir="ltr">
        {part.text}
      </bdi>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

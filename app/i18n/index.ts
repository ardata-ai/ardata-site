import { en } from "./en";
import { he } from "./he";
import type { Dictionary, Lang } from "./types";

export type { Dictionary, Lang, PlatformName, ServiceId } from "./types";
export { en } from "./en";
export { he } from "./he";

const dictionaries: Record<Lang, Dictionary> = { en, he };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

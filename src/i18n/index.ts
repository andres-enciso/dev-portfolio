import type { Lang, Translations } from "./types";
import { es } from "./es";
import { en } from "./en";

const translations: Record<Lang, Translations> = { es, en };

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

export type { Lang, Translations };

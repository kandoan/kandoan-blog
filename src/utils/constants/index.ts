import lang from "./lang.json";

function findTranslation(lang: any, key: string): string | null {
  const spl = key.split(".");
  let path = lang;
  for (let i = 0; i < spl.length; i++) {
    const k = spl[i];
    path = path[k];
    if (!path) return null;
  }
  return path;
}

export function t(key: string) {
  return findTranslation(lang, key);
}
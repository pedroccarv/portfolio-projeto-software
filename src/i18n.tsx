import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type LangContextValue = { lang: Lang; setLang: (lang: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: "pt", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return stored === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

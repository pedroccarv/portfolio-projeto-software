import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLang } from "../i18n";
import { profile } from "../data/portfolio";

const nav = [
  { href: "#home", label: { pt: "Sobre Mim", en: "About Me" } },
  { href: "#projetos", label: { pt: "Projetos", en: "Projects" } },
  { href: "#experiencias", label: { pt: "Experiências", en: "Experience" } },
  { href: "#contato", label: { pt: "Contato", en: "Contact" } },
] as const;

export function Header() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const linkClass = "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        
        {/* Logo agora é uma âncora para o topo */}
        <a href="#home" className="min-w-0 font-display text-lg font-bold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-gradient">.dev</span>
        </a>

        <div className="flex items-center gap-2">
          {/* Menu Desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label[lang]}
              </a>
            ))}
          </nav>

          {/* Seletor de Idioma */}
          <div className="flex shrink-0 items-center rounded-md border border-border p-0.5 font-mono text-xs">
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={
                  "rounded-full px-2.5 py-1 uppercase transition-colors " +
                  (lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {l}
              </button>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="shrink-0 rounded-md p-2 text-muted-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="border-t border-border/60 px-5 py-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label[lang]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
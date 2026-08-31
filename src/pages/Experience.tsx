import { Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";
import { useLang } from "../i18n";

export function Experience() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="mono-label">{lang === "pt" ? "Trajetória" : "Track record"}</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
        {lang === "pt" ? "Experiências" : "Experience"}
      </h1>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {experiences.map((item) => (
          <article key={item.org} className="card-elevated p-6 sm:p-8">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-lg font-bold">{item.org}</h2>
                <p className="text-sm text-primary">{item.role[lang]}</p>
              </div>
            </div>
            <p className="mono-label mt-4">{item.period[lang]}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description[lang]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

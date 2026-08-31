import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { useLang } from "../i18n";

type GithubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
};

const GITHUB_USERNAME = "pedroccarv";

const REPOSITORIOS_DESEJADOS = [
  "books-fullstack-application",
  "Project-software",
  "GlycoLog-API",
  "java-core-mastery",
  "ironlog-web",
  "estudoSpring"
];

export function Projects() {
  const { lang } = useLang();
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data: GithubRepo[]) => {
        const reposFiltrados = data.filter((repo) =>
          REPOSITORIOS_DESEJADOS.includes(repo.name)
        );
        setRepos(reposFiltrados);
      })
      .catch((err) => console.error("Erro ao buscar repositórios:", err));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
        {lang === "pt" ? "Projetos em Destaque" : "Featured Projects"}
      </h2>
      
      {repos.length === 0 ? (
        <p className="text-muted-foreground">Carregando projetos...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="card-elevated flex flex-col border border-border/60 p-6 transition-colors hover:border-primary"
            >
              <h3 className="text-lg font-bold">{repo.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {repo.description ||
                  (lang === "pt"
                    ? "Sem descrição disponível."
                    : "No description available.")}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  {repo.language || "N/A"}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <Github className="h-4 w-4" /> Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export const profile = {
  name: "Pedro Henrique Carvalho  ",
  role: { pt: "Engenheiro de Software", en: "Software Engineer" },
  github: "https://github.com/pedroccarv", 
  linkedin: "https://www.linkedin.com/in/pedrohcpereira/",
  email: "pedrocarvalho.phm@gmail.com",
  whatsapp: "5531975877180",
  about: {
    pt: [
      "Sou Pedro Henrique, estudante de Engenharia de Software na PUC Minas e técnico em TI formado pelo COTEMIG. Tenho foco no desenvolvimento backend e full-stack, transformando problemas complexos em sistemas bem estruturados.",
      "Minha stack principal envolve Java (Spring Boot, Hibernate, JUnit) no backend e React no frontend, sempre buscando aplicar Clean Code, princípios SOLID e Design Patterns em minhas arquiteturas.",
      "Tenho experiência prática com banco de dados PostgreSQL, conteinerização com Docker e versionamento utilizando Git e GitHub."
    ],
    en: [
      "I'm Pedro Henrique, a Software Engineering student at PUC Minas with a technical degree in IT from COTEMIG, focusing on backend and full-stack development.",
      "My main stack involves Java (Spring Boot, Hibernate, JUnit) on the backend and React on the frontend, always striving to apply Clean Code, SOLID principles, and Design Patterns.",
      "I have practical experience with PostgreSQL databases, containerization with Docker, and version control using Git and GitHub."
    ],
  },
  interests: {
    pt: ["Desenvolvimento Backend", "Arquitetura de Software", "Clean Code", "Docker & DevOps"],
    en: ["Backend Development", "Software Architecture", "Clean Code", "Docker & DevOps"],
  },
  skills: [
    "Java 21",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Docker",
    "TypeScript",
    "Git & GitHub",
    "JUnit",
  ],
};

export type Project = {
  year: string;
  name: string;
  description: { pt: string; en: string };
  tech: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    name: "IronLog",
    description: {
      pt: "Aplicação full-stack para gestão de treinos integrando React no frontend com uma API Java 21, Spring Boot e PostgreSQL.",
      en: "Full-stack training management application integrating a React frontend with a Java 21, Spring Boot, and PostgreSQL API.",
    },
    tech: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Docker"],
    repo: "https://github.com/SEU_USUARIO/ironlog",
  },
  {
    year: "2026",
    name: "Encurtador de URL",
    description: {
      pt: "Sistema de encurtamento de URLs focado em estudo de codificação Base62 e arquitetura de alta concorrência.",
      en: "URL shortener system focused on studying Base62 encoding and high-concurrency architecture.",
    },
    tech: ["Java", "Spring Boot", "Docker"],
    repo: "https://github.com/SEU_USUARIO/encurtador-url",
  },
  {
    year: "2026",
    name: "LibraryAPI",
    description: {
      pt: "API para gerenciamento de biblioteca utilizando geração de UUID para identificadores e mapeamento JPA/Hibernate.",
      en: "Library management API using UUID generation for identifiers and JPA/Hibernate mapping.",
    },
    tech: ["Java", "Spring Boot", "JPA/Hibernate"],
    repo: "https://github.com/SEU_USUARIO/library-api",
  },
];

export type Experience = {
  org: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  description: { pt: string; en: string };
};

export const experiences: Experience[] = [
  {
    org: "PUC Minas",
    role: { pt: "Graduação em Engenharia de Software", en: "B.Sc. in Software Engineering" },
    period: { pt: "2025 — atual", en: "2025 — present" },
    description: {
      pt: "Formação focada em desenvolvimento e arquitetura. Participação como voluntário na cobertura de mídia da exposição We Make Software.",
      en: "Degree focused on software development and architecture. Volunteered for media coverage at the We Make Software exhibition.",
    },
  },
  {
    org: "COTEMIG",
    role: { pt: "Técnico em Informática", en: "IT Technician" },
    period: { pt: "Concluído em Dez 2024", en: "Completed Dec 2024" },
    description: {
      pt: "Formação técnica estabelecendo os fundamentos em algoritmos, desenvolvimento e lógica de programação.",
      en: "Technical degree establishing fundamentals in algorithms, software development, and programming logic.",
    },
  }
];
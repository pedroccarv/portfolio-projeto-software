   # Portfólio Profissional - Pedro Henrique

Website de portfólio profissional bilíngue (Português/Inglês) desenvolvido como requisito para a disciplina de Projeto de Software (Laboratório 1) do curso de Engenharia de Software da PUC Minas.

O sistema apresenta uma arquitetura Single Page Application (SPA), consumindo a API pública do GitHub para listagem dinâmica de projetos e utilizando FormSubmit para o formulário de contato sem necessidade de back-end dedicado.

## 🚀 Link de Acesso (Nuvem)

- **Produção:** `[INSERIR LINK DA VERCEL/RENDER AQUI NO PASSO 4]`

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Front-end:** React
- **Estilização:** Tailwind CSS
- **Bundler:** Vite
- **Integrações:** GitHub REST API (Projetos), FormSubmit (Envio de e-mails)

## 📦 Dependências Principais

- `react` / `react-dom` (v18.3.1): Core da aplicação.
- `lucide-react` (v0.447.0): Biblioteca de ícones SVG.
- `tailwindcss` (v3.4.13): Framework utilitário de CSS.
- `eslint` / `typescript-eslint`: Ferramentas de linting e padronização de código.

## 📂 Estrutura de Diretórios

```text
/
├── public/              # Arquivos estáticos públicos (imagens, favicon)
├── src/
│   ├── components/      # Componentes reutilizáveis (Header, Footer, Contact)
│   ├── data/            # Arquivos de dados estáticos (portfolio.ts)
│   ├── pages/           # Seções principais da SPA (Home, Projects, Experience)
│   ├── App.tsx          # Componente raiz que empilha as seções
│   ├── i18n.tsx         # Contexto de internacionalização (PT/EN)
│   ├── index.css        # Estilos globais e diretivas do Tailwind
│   └── main.tsx         # Ponto de entrada de renderização do React
├── index.html           # Template HTML base
├── package.json         # Configurações e dependências do projeto
├── tailwind.config.js   # Configurações do tema do Tailwind
└── vite.config.ts       # Configurações do bundler
```

## ⚙️ Instruções de Instalação e Execução Local

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SEU_USUARIO/portfolio-projeto-software.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd portfolio-projeto-software
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**

   Abra `http://localhost:5173/` para visualizar o portfólio.

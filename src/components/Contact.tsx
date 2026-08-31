import { Mail, MessageSquare, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { profile } from "../data/portfolio";
import { useLang } from "../i18n";

export function Contact() {
  const { lang } = useLang();
  // Controle de estado para dar feedback visual sem sair da tela
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // O segredo está no /ajax/ na URL da requisição
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        // Volta ao estado normal após 5 segundos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
        {lang === "pt" ? "Contato" : "Contact"}
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-muted-foreground">
            {lang === "pt"
              ? "Sinta-se à vontade para entrar em contato comigo para oportunidades, dúvidas ou apenas para um bate-papo técnico."
              : "Feel free to reach out to me for opportunities, questions, or just a tech chat."}
          </p>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-5 w-5" />
              <span>{profile.email}</span>
            </a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <MessageSquare className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-elevated flex flex-col gap-4 border border-border/60 p-6 relative overflow-hidden"
        >
          {/* Inputs invisíveis para configuração do e-mail */}
          <input type="hidden" name="_subject" value="Novo contato via Portfólio!" />
          <input type="hidden" name="_template" value="box" />
          
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              {lang === "pt" ? "Nome" : "Name"}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={status === "loading"}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={status === "loading"}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              {lang === "pt" ? "Mensagem" : "Message"}
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              disabled={status === "loading"}
              className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "loading" 
              ? (lang === "pt" ? "Enviando..." : "Sending...") 
              : (lang === "pt" ? "Enviar Mensagem" : "Send Message")}
          </button>

          {status === "success" && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm text-green-500">
              <CheckCircle2 className="h-12 w-12 mb-2" />
              <p className="font-medium text-lg">
                {lang === "pt" ? "Mensagem enviada!" : "Message sent!"}
              </p>
            </div>
          )}

          {status === "error" && (
            <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
              <AlertCircle className="h-4 w-4" />
              {lang === "pt" ? "Erro ao enviar mensagem. Tente novamente." : "Error sending message. Try again."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
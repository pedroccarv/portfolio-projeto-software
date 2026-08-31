import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "../data/portfolio";
import { useLang } from "../i18n";

const copy = {
  pt: {
    label: "Contato",
    title: "Vamos conversar",
    subtitle: "Aberto a oportunidades, freelas e colaborações em projetos.",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar mensagem",
    errors: {
      name: "Informe seu nome (mín. 2 caracteres).",
      email: "Informe um e-mail válido.",
      message: "A mensagem deve ter no mínimo 10 caracteres.",
    },
    success: "Abrimos seu app de e-mail com a mensagem pronta para envio.",
  },
  en: {
    label: "Contact",
    title: "Let's talk",
    subtitle: "Open to opportunities, freelance work and project collaborations.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    errors: {
      name: "Enter your name (min. 2 characters).",
      email: "Enter a valid email address.",
      message: "The message must have at least 10 characters.",
    },
    success: "We opened your email app with the message ready to send.",
  },
} as const;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Contact() {
  const { lang } = useLang();
  const c = copy[lang];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const channels = [
    { icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: `+${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp}`,
    },
    { icon: Linkedin, label: "LinkedIn", value: "/pedro-soares", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "/pssgarcia", href: profile.github },
  ];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = c.errors.name;
    if (!isValidEmail(form.email.trim())) next.email = c.errors.email;
    if (form.message.trim().length < 10) next.message = c.errors.message;

    if (Object.keys(next).length > 0) {
      setErrors(next);
      setSent(false);
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(`[Portfólio] ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n---\n${form.name} — ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="mono-label">{c.label}</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{c.title}</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">{c.subtitle}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card-elevated grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 p-5 transition-colors hover:border-primary"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-primary">
                <channel.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium">{channel.label}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {channel.value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="card-elevated p-6 sm:p-8" noValidate>
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              {c.name}
            </label>
            <input
              id="name"
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
            {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-medium">
              {c.email}
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
            />
            {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium">
              {c.message}
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              maxLength={1000}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={field + " resize-y"}
            />
            {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Send className="h-4 w-4" />
            {c.send}
          </button>

          {sent && <p className="mt-4 text-sm text-primary">{c.success}</p>}
        </form>
      </div>
    </section>
  );
}

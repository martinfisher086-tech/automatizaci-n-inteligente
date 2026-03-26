import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceOptions = [
  "Automatización de procesos",
  "Sitio web o landing page",
  "Chatbot para WhatsApp / Telegram",
  "App o plataforma a medida",
  "Consultoría",
  "No sé aún",
];

const budgetOptions = [
  "Menos de $300 USD",
  "$300 – $800 USD",
  "$800 – $2.000 USD",
  "Más de $2.000 USD",
  "Todavía no lo sé",
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (fd: FormData) => {
    const e: Record<string, string> = {};
    if (!fd.get("name")?.toString().trim()) e.name = "Requerido";
    const email = fd.get("email")?.toString().trim() || "";
    if (!email) e.email = "Requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    const phone = fd.get("phone")?.toString().trim() || "";
    if (phone && !/^[+\d\s\-()]{7,20}$/.test(phone)) e.phone = "Teléfono inválido";
    if (!fd.get("service")?.toString()) e.service = "Seleccioná un servicio";
    if (!fd.get("message")?.toString().trim()) e.message = "Requerido";
    return e;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    setSubmitError(false);
    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      if (!webhookUrl) throw new Error("no_webhook_url");
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone") || null,
          empresa: fd.get("empresa") || null,
          service: fd.get("service"),
          budget: fd.get("budget") || null,
          message: fd.get("message"),
          submitted_at: new Date().toISOString(),
          source: "landing_contacto",
        }),
      });
      if (!res.ok) throw new Error("webhook_error");
      setSuccess(true);
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[hsl(240_20%_5%)]">
      <div ref={ref} className={`mx-auto max-w-2xl px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <h2 className="mb-3 text-center text-3xl font-bold text-foreground md:text-4xl">
          ¿Tenés un proceso que querés automatizar?
        </h2>
        <p className="mb-10 text-center text-base text-muted-foreground">
          Contame de qué se trata. Primera llamada sin costo, sin compromiso.
        </p>

        {success ? (
          <div className="rounded-xl border border-[hsl(140_40%_14%)] bg-card p-8 text-center">
            <p className="text-lg font-semibold text-[hsl(140_60%_50%)]">
              ✓ Consulta recibida. Te escribo en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {submitError && (
              <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                Hubo un error al enviar. Por favor intentá de nuevo o escribime directamente.
              </p>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <input
                  id="contact-name"
                  name="name"
                  aria-label="Nombre completo"
                  aria-required="true"
                  aria-describedby={errors.name ? "err-name" : undefined}
                  aria-invalid={!!errors.name}
                  placeholder="Nombre completo *"
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                />
                {errors.name && <p id="err-name" className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input
                  id="contact-empresa"
                  name="empresa"
                  aria-label="Empresa o negocio (opcional)"
                  placeholder="Empresa / Negocio (opcional)"
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  aria-label="Correo electrónico"
                  aria-required="true"
                  aria-describedby={errors.email ? "err-email" : undefined}
                  aria-invalid={!!errors.email}
                  placeholder="Email *"
                  maxLength={255}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                />
                {errors.email && <p id="err-email" className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  aria-label="WhatsApp o teléfono (opcional)"
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  aria-invalid={!!errors.phone}
                  placeholder="WhatsApp / Teléfono (opcional)"
                  maxLength={20}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                />
                {errors.phone && <p id="err-phone" className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <select
                  id="contact-service"
                  name="service"
                  aria-label="Tipo de servicio"
                  aria-required="true"
                  aria-describedby={errors.service ? "err-service" : undefined}
                  aria-invalid={!!errors.service}
                  defaultValue=""
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                >
                  <option value="" disabled>¿Qué servicio te interesa? *</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.service && <p id="err-service" className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>
              <div>
                <select
                  id="contact-budget"
                  name="budget"
                  aria-label="Presupuesto estimado (opcional)"
                  defaultValue=""
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                >
                  <option value="" disabled>Presupuesto estimado (opcional)</option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <textarea
                id="contact-message"
                name="message"
                aria-label="Descripción del proceso o problema"
                aria-required="true"
                aria-describedby={errors.message ? "err-message" : undefined}
                aria-invalid={!!errors.message}
                rows={4}
                maxLength={1000}
                placeholder="Describí brevemente el proceso o problema *"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
              />
              {errors.message && <p id="err-message" className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60 md:w-auto md:px-10"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  Enviando...
                </span>
              ) : (
                "Enviar consulta →"
              )}
            </button>
          </form>
        )}

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">ó</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center">
          <a
            href="https://cal.com/martin-fisher-xnwssv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Agendar llamada directamente en mi calendario →
          </a>
          <p className="mt-2 text-xs text-muted-foreground">(Abre Cal.com en nueva pestaña)</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

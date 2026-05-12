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

const FORMULA_INJECTION_RE = /^[=+\-@]/;

const sanitize = (val: FormDataEntryValue | null): string => {
  const s = (val ?? "").toString().trim();
  return FORMULA_INJECTION_RE.test(s) ? s.replace(/^[=+\-@]+/, "") : s;
};

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | false>(false);
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
    setSubmitError(false);
    const fd = new FormData(ev.currentTarget);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) return;

    if (fd.get("website")) return;

    setLoading(true);
    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      if (!webhookUrl) throw new Error("no_webhook_url");
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(10000),
        body: JSON.stringify({
          name: sanitize(fd.get("name")),
          email: sanitize(fd.get("email")),
          phone: sanitize(fd.get("phone")) || null,
          empresa: sanitize(fd.get("empresa")) || null,
          service: sanitize(fd.get("service")),
          budget: sanitize(fd.get("budget")) || null,
          message: sanitize(fd.get("message")),
          submitted_at: new Date().toISOString(),
          source: "landing_contacto",
        }),
      });
      if (!res.ok) throw new Error("webhook_error");
      setSuccess(true);
    } catch (err) {
      if (err instanceof Error && err.message === "no_webhook_url") {
        setSubmitError("El formulario no está configurado correctamente. Por favor contactame directamente.");
      } else {
        setSubmitError("Hubo un error al enviar.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="py-16 md:py-24 bg-[hsl(240_20%_5%)]">
      <div ref={ref} className={`mx-auto max-w-2xl px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <h2 id="contacto-heading" className="mb-3 text-center text-3xl font-bold text-foreground md:text-4xl">
          ¿Tenés un proceso que querés automatizar?
        </h2>
        <p className="mb-10 text-center text-base text-muted-foreground">
          Contame de qué se trata. Primera llamada sin costo, sin compromiso.
        </p>

        {success ? (
          <div className="rounded-xl border border-[hsl(var(--success-subtle))] bg-card p-8 text-center space-y-4">
            <p className="text-lg font-semibold text-[hsl(var(--success-foreground))]">
              ¡Consulta enviada! Revisá tu email — te escribo en menos de 24 horas para coordinar la llamada de 20 minutos.
            </p>
            <a
              href="https://cal.com/martin-fisher-xnwssv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              O agendá ahora directamente en mi calendario<span aria-hidden="true"> →</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot — invisible to users, filled by bots */}
            <input
              type="text"
              name="website"
              aria-hidden="true"
              tabIndex={-1}
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
              autoComplete="off"
            />

            {submitError && (
              <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {submitError}{" "}
                <a
                  href="https://cal.com/martin-fisher-xnwssv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  Agendá tu llamada directamente
                </a>
                .
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">Nombre completo</label>
                <input
                  id="contact-name"
                  name="name"
                  aria-required="true"
                  aria-describedby={errors.name ? "err-name" : undefined}
                  aria-invalid={!!errors.name}
                  placeholder="Nombre completo *"
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                />
                {errors.name && <p id="err-name" className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-empresa" className="sr-only">Empresa o negocio (opcional)</label>
                <input
                  id="contact-empresa"
                  name="empresa"
                  placeholder="Empresa / Negocio (opcional)"
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className="sr-only">Correo electrónico</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "err-email" : undefined}
                  aria-invalid={!!errors.email}
                  placeholder="Email *"
                  maxLength={255}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                />
                {errors.email && <p id="err-email" className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">WhatsApp o teléfono (opcional)</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  aria-invalid={!!errors.phone}
                  placeholder="WhatsApp / Teléfono (opcional)"
                  maxLength={20}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                />
                {errors.phone && <p id="err-phone" className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-service" className="sr-only">Tipo de servicio</label>
                <select
                  id="contact-service"
                  name="service"
                  aria-required="true"
                  aria-describedby={errors.service ? "err-service" : undefined}
                  aria-invalid={!!errors.service}
                  defaultValue=""
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                >
                  <option value="" disabled>¿Qué servicio te interesa? *</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.service && <p id="err-service" className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>
              <div>
                <label htmlFor="contact-budget" className="sr-only">Presupuesto estimado (opcional)</label>
                <select
                  id="contact-budget"
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                >
                  <option value="" disabled>Presupuesto estimado (opcional)</option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Descripción del proceso o problema</label>
              <textarea
                id="contact-message"
                name="message"
                aria-required="true"
                aria-describedby={errors.message ? "err-message" : undefined}
                aria-invalid={!!errors.message}
                rows={4}
                maxLength={1000}
                placeholder="Describí brevemente el proceso o problema *"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors resize-none"
              />
              {errors.message && <p id="err-message" className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-auto md:px-10"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" aria-hidden="true" />
                  Enviando...
                </span>
              ) : (
                <>Enviar consulta<span aria-hidden="true"> →</span></>
              )}
            </button>
          </form>
        )}

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="text-sm text-muted-foreground">ó</span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="text-center">
          <a
            href="https://cal.com/martin-fisher-xnwssv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Agendar llamada directamente en mi calendario<span aria-hidden="true"> →</span>
          </a>
          <p className="mt-2 text-xs text-muted-foreground">(Abre Cal.com en nueva pestaña)</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tiers = [
  {
    name: "Web + Admin",
    price: "$500",
    suffix: " USD",
    desc: "Tu sitio profesional con un panel de admin para gestionar tu negocio.",
    bullets: [
      "Sitio web a medida",
      "Panel de administración",
      "Hosting + deploy incluido",
      "15 días de soporte",
      "Documentación de uso",
    ],
    cta: "Empezar",
    featured: false,
  },
  {
    name: "Web + Admin + Chatbot",
    price: "$800",
    suffix: " USD",
    desc: "El combo completo. Sitio, panel y un chatbot con IA atendiendo 24/7.",
    bullets: [
      "Todo lo del plan Web + Admin",
      "Chatbot con IA (Claude)",
      "Integrado a WhatsApp",
      "30 días de soporte",
      "Training a tu equipo",
    ],
    cta: "Es lo que necesito",
    featured: true,
  },
  {
    name: "Custom",
    price: "A medida",
    suffix: "",
    desc: "Automatizaciones complejas, integraciones, stack a definir y SLA.",
    bullets: [
      "Diagnóstico completo",
      "Stack a definir",
      "Soporte continuo",
      "SLA y monitoreo",
    ],
    cta: "Hablemos",
    featured: false,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="precios" aria-labelledby="precios-heading" className="py-16 md:py-24 bg-[hsl(var(--bg-1))]">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Precios
          </span>
          <h2 id="precios-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Plazos y precios <span className="gradient-text">visibles.</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Sin propuestas de 6 meses. Cobramos por proyecto, no por hora arrastrada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`group relative flex flex-col gap-3 rounded-2xl border p-8 transition-all duration-300 ease-out ${
                t.featured
                  ? "border-primary/50 bg-card tier-glow md:-translate-y-2 hover:-translate-y-4 hover:border-primary/80 hover:shadow-[0_0_56px_-8px_hsl(174_80%_52%/0.7)]"
                  : "border-border bg-card hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_32px_-8px_hsl(174_80%_52%/0.3)]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.625rem] font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_32px_-8px_hsl(174_80%_52%/0.5)]">
                  Recomendado
                </span>
              )}

              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {t.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{t.price}</span>
                {t.suffix && (
                  <span className="text-base text-muted-foreground">{t.suffix}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>

              <ul className="mt-2 flex flex-1 flex-col gap-2">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-4 inline-block w-full rounded-lg py-3.5 text-center text-base font-semibold transition-all duration-200 ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90 group-hover:shadow-[0_0_20px_-4px_hsl(174_80%_52%/0.6)]"
                    : "border border-border text-foreground hover:border-primary/60 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {t.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

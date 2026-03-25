import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const beforeItems = [
  "3 horas de carga manual por día",
  "Errores en cada transferencia de datos",
  "Seguimiento de leads olvidado",
  "Reportes armados a mano cada semana",
];

const afterItems = [
  "4 minutos. Completamente automático",
  "Cero errores. Datos siempre consistentes",
  "Seguimiento instantáneo sin intervención",
  "Reportes generados y enviados solos",
];

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Text */}
          <div className="flex-1 lg:max-w-[55%]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Automatización con IA · Disponible para proyectos
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-[3.5rem] md:leading-[1.1]">
              Convierto procesos repetitivos en sistemas que trabajan solos.
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-xl">
              Combino estrategia de negocio con herramientas de IA para construir automatizaciones que se adaptan a cómo trabaja tu equipo — no plantillas genéricas.
            </p>
            <a
              href="#contacto"
              className="inline-block w-full rounded-lg bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85 md:w-auto"
              style={{ animation: "pulse-cta 4s infinite" }}
            >
              Agendar llamada gratuita de 20 min →
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Sin compromiso. 100% remoto.</p>
          </div>

          {/* Before / After */}
          <div ref={ref} className="flex flex-1 flex-col items-center gap-4 sm:flex-row sm:items-stretch lg:max-w-[45%]">
            {/* Before */}
            <div className="flex-1 rounded-xl border border-[hsl(0_40%_14%)] bg-card p-5">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[hsl(0_70%_55%)]">
                Antes
              </span>
              <ul className="space-y-3">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 text-[hsl(0_70%_55%)]">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center text-2xl text-muted-foreground sm:px-2">→</div>

            {/* After */}
            <div className="flex-1 rounded-xl border border-[hsl(140_40%_14%)] bg-card p-5">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[hsl(140_60%_50%)]">
                Después
              </span>
              <ul className="space-y-3">
                {afterItems.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm text-muted-foreground stagger-item ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
                  >
                    <span className="mt-0.5 text-[hsl(140_60%_50%)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

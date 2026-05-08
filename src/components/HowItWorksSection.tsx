import { Search, Settings, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Llamada de 20 min. Identificamos el proceso que más tiempo te quita y diseñamos la solución.",
  },
  {
    n: "02",
    icon: Settings,
    title: "Construcción",
    desc: "Construyo la automatización en 5–10 días. Iteramos sobre prototipos reales, no PowerPoints.",
  },
  {
    n: "03",
    icon: CheckCircle,
    title: "Entrega + soporte",
    desc: "Documentación, training a tu equipo y 30 días de soporte incluidos. Después seguimos si querés.",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proceso" aria-labelledby="proceso-heading" className="py-16 md:py-24 bg-[hsl(var(--bg-1))]">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Proceso
          </span>
          <h2 id="proceso-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tres pasos. <span className="gradient-text">Cero sorpresas.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-8"
            >
              <span className="self-start rounded font-mono text-[0.625rem] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1">
                {s.n}
              </span>
              <s.icon size={28} className="text-primary" aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

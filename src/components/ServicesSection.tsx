import { Zap, Bot, Map } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Zap,
    name: "Automatización de procesos",
    desc: "Conectamos tus herramientas y eliminamos la carga manual: CRMs, formularios, emails, reportes y más.",
    tag: "Desde $300 USD",
  },
  {
    icon: Bot,
    name: "Apps a medida con IA",
    desc: "Construimos aplicaciones funcionales con inteligencia artificial integrada, listas en días, no meses.",
    tag: "Desde $500 USD",
  },
  {
    icon: Map,
    name: "Consultoría de automatización",
    desc: "Analizamos tus procesos actuales y diseñamos el mapa de automatización con mayor impacto inmediato.",
    tag: "Sesión desde $80 USD",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">¿Qué puedo automatizar para vos?</h2>
        <p className="mb-12 max-w-2xl text-base text-muted-foreground">
          Tres líneas de trabajo, un mismo objetivo: que tu equipo deje de hacer lo que una máquina puede hacer mejor.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_0_24px_-6px_hsl(244_95%_60%/0.25)]"
            >
              <s.icon className="mb-4 text-primary" size={28} />
              <h3 className="mb-2 text-lg font-bold text-foreground">{s.name}</h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="self-end text-xs font-semibold text-primary">{s.tag} →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

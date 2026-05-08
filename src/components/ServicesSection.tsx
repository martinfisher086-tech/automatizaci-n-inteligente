import { Zap, Bot, Map, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Zap,
    name: "Automatización de procesos",
    desc: "n8n, integraciones, workflows que conectan Google Sheets, WhatsApp, Gmail y tu CRM.",
    tag: "Desde $300 USD",
  },
  {
    icon: Bot,
    name: "Chatbots con IA",
    desc: "Atención 24/7 con Claude o GPT. Responden, califican y agendan — integrados a tu CRM.",
    tag: "Desde $500 USD",
  },
  {
    icon: Map,
    name: "Consultoría de automatización",
    desc: "Diagnóstico de procesos, mapeo de flujos y plan de implementación priorizado por ROI.",
    tag: "Desde $200 USD / hora",
  },
  {
    icon: Globe,
    name: "Webs y landing pages",
    desc: "Sitios profesionales con Lovable, integrados a tus automatizaciones desde el día uno.",
    tag: "Desde $400 USD",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" aria-labelledby="servicios-heading" className="py-16 md:py-24">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Servicios
          </span>
          <h2 id="servicios-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Lo que <span className="gradient-text">construyo</span> para vos
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Cuatro líneas de trabajo. Todas se pueden combinar en un mismo proyecto.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.name}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_0_24px_-6px_hsl(174_80%_52%/0.25)]"
            >
              <s.icon className="text-primary" size={28} aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
              <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

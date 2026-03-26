import { Search, Settings, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico gratuito",
    desc: "Entendemos juntos qué procesos te consumen más tiempo y dónde está el mayor impacto.",
  },
  {
    icon: Settings,
    title: "Diseño y construcción",
    desc: "Armo el flujo completo, lo pruebo y lo ajusto antes de entregarlo. Comunicación directa en todo momento.",
  },
  {
    icon: CheckCircle,
    title: "Entrega y soporte",
    desc: "Te entrego documentación clara y soporte post-entrega. El sistema tiene que funcionar, no solo verse bien.",
  },
];

const stackPills = ["n8n", "Lovable", "Supabase", "Claude API", "Google Sheets", "Airtable"];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-trabajo" className="py-16 md:py-24">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Cómo trabajo</h2>

        <div className="mx-auto max-w-[680px]">
          {/* Steps */}
          <div className="relative flex flex-col gap-10 md:flex-row md:gap-6">
            {/* Connector line desktop */}
            <div className="absolute top-6 left-6 right-6 hidden h-px bg-border md:block" />
            {steps.map((s) => (
              <div key={s.title} className="relative flex flex-1 flex-col items-center text-center">
                <div className="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Placeholder */}
          <div className="mx-auto mt-12 max-w-[600px]">
            <div className="relative w-full rounded-xl bg-[hsl(240_20%_10%)]" style={{ paddingBottom: "56.25%" }}>
              <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                [IMAGEN/GIF: Captura de workflow real en n8n — reemplazar]
              </span>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Stack técnico: n8n · Lovable · Supabase · Claude API
            </p>
          </div>

          {/* Stack pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {stackPills.map((p) => (
              <span key={p} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

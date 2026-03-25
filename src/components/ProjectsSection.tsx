import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    label: "VIDEO LOOM: Demo proyecto 1 — reemplazar con embed",
    pills: ["n8n", "Claude API", "WhatsApp"],
    title: "AI Chatbot para Salones de Belleza",
    desc: "Chatbot que responde clientes, responde preguntas y captura turnos automáticamente las 24hs.",
    github: "https://github.com/martinfisher086-tech/chatbot-salon-ia",
  },
  {
    label: "VIDEO LOOM: Demo proyecto 2 — reemplazar con embed",
    pills: ["n8n", "Claude API", "Supabase"],
    title: "Análisis de Feedback con IA",
    desc: "Pipeline que clasifica sentimiento y extrae insights de feedback de clientes sin intervención manual.",
    github: "https://github.com/martinfisher086-tech/feedback",
  },
  {
    label: "VIDEO LOOM: Demo proyecto 3 — reemplazar con embed",
    pills: ["Lovable", "Supabase", "n8n"],
    title: "Plataforma de Gestión para Salón de Belleza",
    desc: "App completa con panel admin, gestión de turnos y automatizaciones de recordatorios.",
    // TODO: Agregar URL de GitHub cuando el repo esté listo
    github: "https://github.com/martinfisher086-tech",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proyectos" className="py-16 md:py-24">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Proyectos reales</h2>
        <p className="mb-12 text-base text-muted-foreground">Soluciones construidas y funcionando. Sin demos vacíos.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              {/* Placeholder 16:9 */}
              <div className="relative w-full bg-[hsl(240_20%_10%)]" style={{ paddingBottom: "56.25%" }}>
                <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs text-muted-foreground">
                  [{p.label}]
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.pills.map((pill) => (
                    <span key={pill} className="rounded-full border border-border px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
                      {pill}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 text-base font-bold text-foreground">{p.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{p.desc}</p>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">Ver en GitHub →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

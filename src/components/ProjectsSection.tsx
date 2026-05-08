import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featured = {
  metric: "24/7",
  metricLabel: "agendamiento sin intervención humana",
  stats: [
    { v: "~30s", l: "tiempo de respuesta" },
    { v: "0", l: "errores de doble booking" },
  ],
  tag: "Salón de belleza · CABA",
  title: "Bella — chatbot que agenda citas en WhatsApp",
  desc: "La clienta escribe por WhatsApp, el agente IA detecta la intención, consulta horarios disponibles, distingue cliente nuevo vs existente y crea la cita. Todo conectado a la base de servicios y la agenda real del salón.",
  longDesc:
    "Antes: la dueña perdía clientes los domingos a la noche y respondía mensajes mientras cortaba el pelo. Ahora: el bot atiende, agenda y solo le pasa los casos complejos. El sitio web del salón se conecta al mismo backend, así que servicios y precios se mantienen sincronizados.",
  stack: ["n8n", "OpenAI", "WhatsApp", "Google Sheets", "Lovable"],
  img: "/case-bella-chatbot.png",
  imgAlt: "Workflow n8n del chatbot de Bella",
  companion: "/case-bella-services.png",
  companionAlt: "Sitio web de Bella conectado al mismo backend",
};

const cases = [
  {
    metric: "+5.000",
    metricLabel: "reviews clasificadas por mes",
    tag: "Análisis de feedback · E-commerce",
    title: "Agente que lee reviews y las clasifica",
    desc: "Un agente IA lee miles de reviews, las clasifica por tipo, detecta tendencias y arma un resumen ejecutivo semanal. Las críticas urgentes se escalan al instante.",
    stack: ["n8n", "OpenAI", "Airtable", "Slack", "Gmail"],
    img: "/case-feedback-analyzer.png",
    imgAlt: "Workflow n8n de análisis de feedback",
  },
  {
    metric: "0 → 100",
    metricLabel: "onboarding end-to-end",
    tag: "SaaS B2B · Onboarding",
    title: "De alta de cliente a tareas distribuidas en ClickUp",
    desc: "Al crear un cliente nuevo se dispara el flujo: brief por Tally, datos a Airtable, mensaje de bienvenida y subtareas creadas en ClickUp para el equipo correspondiente.",
    stack: ["n8n", "Tally", "Airtable", "ClickUp", "Gmail"],
    img: "/case-onboarding-clickup.png",
    imgAlt: "Workflow n8n de onboarding en ClickUp",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="casos" aria-labelledby="casos-heading" className="py-16 md:py-24">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Casos en producción
          </span>
          <h2 id="casos-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sistemas <span className="gradient-text">corriendo ahora mismo.</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Workflows reales, no slides.
          </p>
        </div>

        {/* Featured case */}
        <article className="relative overflow-hidden rounded-2xl border border-border bg-card mb-8 grid grid-cols-1 gap-8 p-6 md:p-8 lg:grid-cols-[1.25fr_1fr] lg:items-start before:pointer-events-none before:absolute before:top-[-100px] before:right-[-100px] before:h-[360px] before:w-[360px] before:rounded-full before:bg-[radial-gradient(circle,hsl(174_80%_52%/0.18),transparent_70%)]">
          {/* Media column */}
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-xl border border-primary/30 shadow-[0_0_24px_-6px_hsl(174_80%_52%/0.35)] bg-white">
              <div className="case-feat-chrome flex items-center gap-1.5 px-3 py-2 bg-[hsl(240_20%_4%)] border-b border-primary/25">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" aria-hidden="true" />
                <span className="ml-auto font-mono text-[10px] text-primary tracking-widest">
                  n8n · workflow editor · bella-chatbot
                </span>
              </div>
              <img src={featured.img} alt={featured.imgAlt} className="block w-full h-auto" />
              <div className="case-scan-overlay" aria-hidden="true" />
            </div>
            <div className="relative max-w-[70%] self-end overflow-hidden rounded-xl border border-border shadow-[0_12px_40px_-12px_hsl(240_20%_0%/0.6)] -translate-y-3 -rotate-1">
              <img src={featured.companion} alt={featured.companionAlt} className="block w-full h-auto" />
              <span className="absolute top-2 left-2 rounded font-mono text-[10px] text-primary border border-primary/30 bg-[hsl(240_20%_4%/0.85)] px-2 py-1">
                ↑ sitio del salón conectado al mismo backend
              </span>
            </div>
          </div>

          {/* Body column */}
          <div className="flex flex-col gap-4">
            <span className="self-start rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {featured.tag}
            </span>
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
              {featured.title}
            </h3>
            <p className="text-base text-foreground/85 leading-relaxed">{featured.desc}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{featured.longDesc}</p>

            <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-3 rounded-xl border border-primary/20 bg-[hsl(240_20%_4%/0.5)] p-4">
              <div className="flex flex-col gap-1">
                <b className="font-mono text-3xl font-bold tracking-tight leading-none text-primary">
                  {featured.metric}
                </b>
                <span className="text-[11px] text-muted-foreground leading-relaxed">
                  {featured.metricLabel}
                </span>
              </div>
              {featured.stats.map((s) => (
                <div key={s.l} className="flex flex-col gap-1">
                  <b className="font-mono text-2xl font-bold tracking-tight leading-none text-primary">
                    {s.v}
                  </b>
                  <span className="text-[11px] text-muted-foreground">{s.l}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {featured.stack.map((s) => (
                <span key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* 2-column grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_0_24px_-6px_hsl(174_80%_52%/0.25)]"
            >
              <div className="relative bg-white">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[hsl(240_20%_4%)] border-b border-border">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" aria-hidden="true" />
                  <span className="ml-auto font-mono text-[10px] text-primary tracking-widest">n8n · workflow</span>
                </div>
                <img src={c.img} alt={c.imgAlt} className="block w-full h-[220px] object-cover" />
                <div className="case-scan-overlay" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 flex flex-col gap-0.5 rounded-xl border border-primary/40 bg-[hsl(240_20%_4%/0.92)] px-3 py-2 shadow-[0_0_24px_-6px_hsl(174_80%_52%/0.35)] backdrop-blur-sm">
                  <b className="font-mono text-lg font-bold leading-none tracking-tight text-primary">{c.metric}</b>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.metricLabel}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <span className="self-start rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {c.tag}
                </span>
                <h3 className="text-lg font-bold leading-tight text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {c.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

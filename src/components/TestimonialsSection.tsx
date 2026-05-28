import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Teníamos 3 personas cargando datos manualmente entre sistemas todos los días. Juan Manuel armó el flujo en dos semanas y desde entonces no tocamos nada. El sistema funciona solo y los errores bajaron a cero.",
    name: "Lucía Fernández",
    role: "Directora de Operaciones",
    company: "Estudio Contable Fernández & Asoc.",
    initials: "LF",
    color: "hsl(244 95% 60%)",
  },
  {
    quote: "Le expliqué el problema un lunes. El viernes ya tenía un prototipo funcionando. Es raro encontrar a alguien que entienda tanto el lado técnico como el del negocio. Lo recomiendo sin dudarlo.",
    name: "Martín Ríos",
    role: "Fundador",
    company: "Agencia de Marketing Digital Ríos",
    initials: "MR",
    color: "hsl(280 85% 60%)",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonios" aria-labelledby="testimonios-heading" className="py-16 md:py-24 bg-[hsl(240_20%_5%)]">
      <div
        ref={ref}
        className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}
      >
        <h2 id="testimonios-heading" className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Lo que dicen quienes trabajaron conmigo
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_32px_-8px_hsl(244_95%_60%/0.2)]"
            >
              {/* Decorative quote mark */}
              <span className="quote-mark absolute -top-2 left-5" aria-hidden="true">"</span>

              {/* Quote text */}
              <p className="relative mb-8 flex-1 text-base leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>

              {/* Author */}
              <footer className="flex items-center gap-4">
                {/* Avatar with initials */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${t.color}, hsl(244 95% 45%))` }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} — {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

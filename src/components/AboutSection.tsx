import { CheckCircle, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bullets = [
  "Hablás conmigo, no con un PM intermediario",
  "Te entrego sistemas que tu equipo entiende y mantiene",
  "Sin propuestas de 6 meses ni presupuestos opacos",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-heading" className="py-16 md:py-24 bg-[hsl(var(--bg-1))]">
      <div ref={ref} className={`mx-auto max-w-[1280px] px-6 animate-section ${isVisible ? "visible" : ""}`}>
        <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-[280px_1fr] md:items-center md:gap-16">

          {/* Photo */}
          <div className="relative mx-auto h-60 w-60 md:h-72 md:w-72 shrink-0">
            <div className="sobre-photo-glow" aria-hidden="true" />
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-primary/60 shadow-[0_0_48px_-8px_hsl(174_80%_52%/0.65)]">
              <img
                src="/fotoabout.png"
                alt="Juan Manuel Castillo — especialista en automatización con IA"
                className="h-full w-full object-cover object-top filter saturate-110 contrast-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="inline-block self-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-primary md:self-start">
              Sobre mí
            </span>
            <h2 id="sobre-mi-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              No soy una agencia.{" "}
              <br className="hidden md:block" />
              <span className="gradient-text">Soy una persona</span> que se hace cargo.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hola, soy <b className="text-foreground">Juan Manuel</b>. Construyo automatizaciones y sistemas con IA para PYMES de LATAM.
              Vengo de <b className="text-foreground">+5 años trabajando en procesos de negocio</b> — sé qué duele y qué realmente mueve la aguja.
            </p>

            <ul className="mt-2 flex flex-col gap-3 text-left">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-base text-foreground/90">
                  <CheckCircle size={18} className="text-primary shrink-0" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex justify-center gap-3 mt-4 md:justify-start">
              <a
                href="https://github.com/martinfisher086-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Juan Manuel Castillo"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/juan-manuel-castillo-4a8585360/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Juan Manuel Castillo"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

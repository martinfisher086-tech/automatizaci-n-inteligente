import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-[hsl(var(--bg-1))]">
    <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
      <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <span className="font-mono text-sm font-semibold text-foreground tracking-tight">
            {"{ "}
            <span className="text-primary">automatizaciones</span>
            {".dev }"}
          </span>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Automatizaciones, chatbots y webs con IA. Hechas en Argentina, para PYMES de toda LATAM.
          </p>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-2">
          <h5 className="mb-2 text-sm font-semibold text-foreground">Servicios</h5>
          {["Automatización", "Chatbots", "Consultoría", "Webs"].map((s) => (
            <a key={s} href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {s}
            </a>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2">
          <h5 className="mb-2 text-sm font-semibold text-foreground">Contacto</h5>
          <a href="#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Agendar llamada
          </a>
          <a href="mailto:hola@automatizaciones.dev" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            hola@automatizaciones.dev
          </a>
        </div>

        {/* Social */}
        <div>
          <h5 className="mb-4 text-sm font-semibold text-foreground">Encontrame</h5>
          <div className="flex gap-3">
            {[
              { href: "https://github.com/martinfisher086-tech", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/juan-manuel-castillo-4a8585360/", label: "LinkedIn", Icon: Linkedin },
              { href: "mailto:hola@automatizaciones.dev", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} · Juan Manuel Castillo</span>
        <span>Construido con Lovable + n8n + Claude</span>
      </div>
    </div>
  </footer>
);

export default Footer;

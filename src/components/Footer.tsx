import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 text-sm text-muted-foreground md:flex-row md:justify-between">
      <span>© {new Date().getFullYear()} · Automatizaciones con IA</span>
      <div className="flex gap-6">
        <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
        <a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
        <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/martinfisher086-tech" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/juan-manuel-castillo-4a8585360/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;

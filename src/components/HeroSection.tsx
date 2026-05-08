import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const TERMINAL_LINES = [
  { p: "$",  t: "n8n start --tunnel",                               kind: "cmd" },
  { p: "→",  t: 'workflow "lead-qualifier" activado · 8 nodos',     kind: "ok"  },
  { p: "◆",  t: "[WhatsApp] Mensaje recibido de +54 9 11 ...",       kind: "cmd" },
  { p: "◆",  t: "[Claude] Calificando intención... lead score: 87",  kind: "cmd" },
  { p: "◆",  t: "[Sheets] Row #1428 insertado en CRM",               kind: "cmd" },
  { p: "◆",  t: "[Calendly] Slot reservado · mar 12:30",             kind: "cmd" },
  { p: "✓",  t: "Pipeline ejecutado en 1.2s",                        kind: "ok"  },
];

const NODE_COUNT = 38;

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shown, setShown] = useState(0);

  // Neural network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    const tick = () => {
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.pulse += 0.04;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 160) {
            ctx.strokeStyle = `hsl(174 80% 60% / ${(1 - d / 160) * 0.35})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = (Math.sin(n.pulse) + 1) / 2;
        ctx.fillStyle = `hsl(174 90% ${55 + glow * 15}%)`;
        ctx.shadowColor = "hsl(174 90% 60%)";
        ctx.shadowBlur = 8 + glow * 6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Terminal typing loop
  useEffect(() => {
    const id = setInterval(
      () => setShown((s) => (s + 1) % (TERMINAL_LINES.length + 2)),
      600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24" id="top">
      {/* Layers */}
      <div aria-hidden="true" className="hero-gradient-bg" />
      <div aria-hidden="true" className="hero-blob-1" />
      <div aria-hidden="true" className="hero-blob-2" />
      <div aria-hidden="true" className="hero-grid-pattern" />
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div aria-hidden="true" className="hero-scanlines" />
      <div aria-hidden="true" className="hero-vignette" />

      <div className="relative mx-auto max-w-[1280px] px-6 hero-inner-v2">

        {/* LEFT — copy */}
        <div className="flex flex-col gap-5">
          {/* Badge */}
          <div className="flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/8 px-3.5 py-1.5 text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">SYSTEM ONLINE</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">Respondo en &lt; 24h</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
            Procesos repetitivos
            <br />
            <span className="gradient-text">que trabajan solos</span>.
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Automatizaciones, chatbots con IA y sistemas web que se integran
            con cómo trabaja tu equipo.{" "}
            <span className="font-semibold text-primary">Construidos en 5–10 días</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 animate-pulse-cta"
            >
              Agendar diagnóstico gratuito <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#casos"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Ver workflows
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats mt-2">
            <div>
              <b>+12</b>
              <span>Procesos automatizados</span>
            </div>
            <div className="hero-stats-sep" aria-hidden="true" />
            <div>
              <b>5–10d</b>
              <span>Tiempo de entrega</span>
            </div>
            <div className="hero-stats-sep" aria-hidden="true" />
            <div>
              <b>30d</b>
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>

        {/* RIGHT — terminal + orbit */}
        <div className="flex flex-col gap-4">
          <div className="hero-terminal">
            <div className="hero-terminal-bar">
              <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#ff5f56]" aria-hidden="true" />
              <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#ffbd2e]" aria-hidden="true" />
              <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#27c93f]" aria-hidden="true" />
              <span className="hero-terminal-title">~/automatizaciones · n8n</span>
            </div>
            <div className="hero-terminal-body" aria-live="polite" aria-label="Simulación de workflow n8n">
              {TERMINAL_LINES.slice(0, shown).map((l, i) => (
                <div key={i} className={`t-line ${l.kind === "ok" ? "t-ok" : ""}`}>
                  <span className="t-prompt">{l.p}</span>
                  <span className="t-text">{l.t}</span>
                </div>
              ))}
              {shown < TERMINAL_LINES.length && (
                <div className="t-cursor" aria-hidden="true">▊</div>
              )}
            </div>
          </div>

          <div className="hero-orbit">
            {["n8n", "Claude", "WhatsApp", "Supabase"].map((s) => (
              <span key={s} className="hero-orbit-pill">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

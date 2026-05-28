import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Starter",
    price: "$800",
    desc: "Para PYMES que quieren automatizar su primer proceso crítico.",
    features: [
      "1 workflow completo",
      "Integración con tus herramientas existentes",
      "Testing y ajustes incluidos",
      "Documentación de uso",
      "Soporte 30 días post-entrega",
    ],
    cta: "Empezar ahora",
    href: "/#contacto",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$2.500",
    desc: "Para negocios listos para automatizar múltiples áreas y escalar.",
    features: [
      "3 a 5 workflows completos",
      "Retainer de soporte $600/mes",
      "Prioridad en respuesta",
      "Revisión mensual del sistema",
      "Acceso directo por WhatsApp",
      "Documentación completa",
    ],
    cta: "Es lo que necesito",
    href: "/#contacto",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "A medida",
    desc: "Soluciones complejas, integraciones enterprise o retainer dedicado.",
    features: [
      "Scope definido juntos",
      "Equipo o colaboradores si aplica",
      "SLA y soporte prioritario",
      "Retainer mensual personalizado",
      "Revisiones y mejoras continuas",
    ],
    cta: "Hablemos",
    href: "/#contacto",
    highlighted: false,
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-[1280px] px-6 pt-32 pb-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          Precios claros, sin sorpresas
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Sin propuestas de 6 meses ni presupuestos opacos. Sabés exactamente qué incluye cada opción.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              t.highlighted
                ? "border-primary bg-card shadow-[0_0_40px_-8px_hsl(244_95%_60%/0.3)]"
                : "border-border bg-card"
            }`}
          >
            {t.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                Más elegido
              </span>
            )}
            <h2 className="mb-1 text-xl font-bold text-foreground">{t.name}</h2>
            <p className="mb-2 text-3xl font-bold text-foreground">{t.price}</p>
            <p className="mb-8 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mb-8 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={t.href}
              className={`w-full rounded-lg py-3 text-center text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                t.highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/85"
                  : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        ¿No sabés cuál es la mejor opción para tu caso?{" "}
        <a href="/#contacto" className="font-semibold text-primary hover:underline">
          Agendá una llamada gratuita de 20 minutos
        </a>{" "}
        y lo vemos juntos.
      </p>
    </main>
    <Footer />
  </div>
);

export default Pricing;
